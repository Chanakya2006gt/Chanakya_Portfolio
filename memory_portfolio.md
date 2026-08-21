# Portfolio Memory — Nagulagam Chanakya
> **Purpose:** This file is the single source of truth for every decision made on this portfolio. Every code change, design choice, security implementation, and business rule lives here. Update this file immediately after any change in future sessions.
>
> **Last Updated:** 2026-08-21

---

## 1. Who This Portfolio Is For

**Nagulagam Chanakya** — Full-Stack Developer and SaaS Founder.

- B.Tech in **Computer Science Engineering (CSE)** at **SR University, Warangal, Telangana** — graduating **2028**.
- Primary email: `nagulagamchanakya2211@gmail.com`
- GitHub: `https://github.com/Chanakya2006gt`
- LinkedIn: `https://www.linkedin.com/in/nagulagam-chanakya-b93514315`
- Flagship product: **Trelio** (`https://trelio.in`) — live SaaS

### Hard Privacy Rules (NEVER violate)
- **Phone number (`+91 7674040571`) must NEVER appear on the site or in chatbot responses.** No exceptions.
- **Old stale email (`chanakya7674@gmail.com`) must NEVER appear anywhere.**
- Only contact info shown publicly: `nagulagamchanakya2211@gmail.com`, GitHub, LinkedIn.

---

## 2. What This Portfolio Does

A **public developer portfolio** that:
1. Shows who Chanakya is and what he builds
2. Showcases Trelio as the flagship live SaaS product
3. Has an embedded AI chatbot companion (mascot) that answers visitor questions
4. Has an admin panel at `/admin` where Chanakya can update dynamic content (tagline, availability status, business entries)
5. Has a resume modal that can show either a live PDF or a generated resume view

---

## 3. Tech Stack — Every Choice and Why

### Framework: TanStack Start (React 19, SSR)
**Why:** TanStack Start was chosen for file-based routing, SSR support, and full React 19 compatibility. It outputs to a Nitro server that can be deployed to Vercel as a serverless function. This avoids Next.js lock-in while getting SSR for SEO.

**Key architectural pattern:**
- Routes live in `src/routes/`
- API routes at `src/routes/api/**/*.ts` use `createFileRoute("/api/...")` with `server: { handlers: { GET/POST } }`
- Pages use `createFileRoute` with a `component` export

### Styling: Tailwind CSS v4 + shadcn/ui
**Why:** Tailwind CSS v4 for utility-first styling — no configuration file needed (CSS-first config). shadcn/ui components are installed locally (not as a package), meaning full control to customize. Together they allow rapid iteration without fighting a design system.

- CSS custom properties defined in `src/styles.css` under `:root` (dark mode, default) and `.light` (light mode class toggled on `<html>`)
- The `<html>` tag starts with `class="dark antialiased"` — dark is the default theme

### Font Stack
- **Sans-serif:** Figtree (primary UI font)
- **Serif:** Instrument Serif (headings — used for name, section headings, card titles)
- **Mono:** IBM Plex Mono (code callouts, tech labels, dev tags)
- **Why:** Instrument Serif gives a premium editorial feel for headings while Figtree keeps body text modern and clean.

### Build & Deployment: Vercel + Nitro preset
**Why:** Nitro auto-detects the Vercel environment and outputs to `.vercel/output/`. The `.vercel/output/` directory is checked into git so Vercel can deploy without running a build step. Build preset: `vercel` (set via TanStack Start Vercel plugin — `npx plugins add vercel/vercel-plugin`).

### Database/Storage: `portfolio-data.json` (ephemeral — known issue)
**Why it is this way:** Admin panel writes to `src/data/portfolio-data.json` via `fs.readFileSync`/`fs.writeFileSync`. Works in local dev. On Vercel, filesystem is read-only after deploy — writes are ephemeral. **Deferred.** Future plan: replace with Postgres (Neon/Vercel Postgres).

### AI Chatbot: OpenAI API
**Model:** `gpt-5.6-terra`
- Does NOT support `max_tokens` — must use `max_completion_tokens: 500`
- Does NOT support temperature other than `1` — must set `temperature: 1`
- User explicitly chose this model. These constraints are critical — wrong params will cause API errors.

The chatbot runs via POST to `/api/chat`. Fallback engine handles keyword-based responses when API is unavailable.

---

## 4. Security Decisions — Every Implementation

### Admin Authentication: HMAC-SHA256 Session Tokens
**Why not JWTs:** JWTs are overkill for a single-admin panel. HMAC-SHA256 with `node:crypto` is native, dependency-free, and production-grade.

**Implementation (`src/lib/auth-session.ts`):**
- Token format: `<base64Payload>.<hexSignature>` where payload = `{ username, exp }`
- Verification uses `crypto.timingSafeEqual()` — prevents timing attacks
- Session expires in **24 hours** (`SESSION_MAX_AGE_SEC = 86400`)
- Cookie flags: `HttpOnly; SameSite=Lax` always; `Secure` only in production

**Fail-closed login (`src/routes/api/admin/login.ts`):**
- Missing `ADMIN_USERNAME` or `ADMIN_PASSWORD` env vars → login rejects immediately — no default fallback
- Username **never logged** on auth failure — prevents credential leaking to server logs

**Protected routes:**
- `check.ts` and `data.ts` both use `verifySignedSessionToken`, not naive string checks

**Required env vars for production:**
```
ADMIN_USERNAME=
ADMIN_PASSWORD=
ADMIN_SESSION_SECRET=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.6-terra
```

---

## 5. Chatbot System Prompt Rules

The AI companion:
1. Responds in **clean bullet points**, easy-to-understand language — never dense paragraphs
2. If information is insufficient, says what it knows and redirects to LinkedIn or email
3. Two strictly separate fields:
   - `workAvailability` — open to **being hired** for contracts/engineering (YES, he is open)
   - `hiringStatus` — whether he is **hiring others** for his own team (separate — must not conflate)
4. Contact info given: `nagulagamchanakya2211@gmail.com` and LinkedIn — **never phone number**

---

## 6. UI/UX Design Decisions

### Theme System
- Default: **Dark mode** (`#0a0a0b` base — true black)
- Optional: **Light mode** (`#f5f3ef` base — warm cream, premium feel)
- Toggle lives in left rail nav and top site nav
- `<html>` starts with `class="dark antialiased"` — toggle adds/removes `.light`

### Color Identity (as of 2026-08-20)

**Primary Accent — Sage Green (brand identity):**
- Dark: `#8fa896` | Light: `#4a7c5f`
- Used for: hero labels, availability badge, section labels, marquee ticker, nav active state, primary CTA buttons

**Secondary Accent — Electric Indigo (interactive signal):**
- Dark: `#818cf8` | Light: `#6366f1`
- Used for: hover states on external links, focus rings, security tech badges, ambient glow variations, LinkedIn card hover

**Grammar rule:** Sage = brand identity. Indigo = interactive signal. This prevents either from being overused.

**Why two accents:** With only sage, design became monotonous. Indigo adds variety specifically for interactive and security-themed moments.

### Dark Mode Depth System (Zone-based)
Problem: Every surface was within 2–5% brightness of each other — no visual depth.
- `--card`: `#16181c` (was `#121214`) — visibly pops off `#0a0a0b` background
- `--secondary`: `#1e2126` | `--accent`: `#232830`
- About + Skills sections: `bg-secondary/30` with `border-y border-border/50` — alternating "chapter" zones

### Light Mode (rebuilt 2026-08-20)
Problem: `#f8faf8` bg + white cards = near-zero contrast. Cold, flat, broken.
- `--background`: `#f5f3ef` (warm cream)
- `--card`: `#ffffff` (real contrast against cream)
- `--secondary`: `#ede9e3` (warm beige chips)
- `--muted-foreground`: `#6b7280` (was `#526357`, too dark forest green)
- Cards get box-shadow elevation (no more floating invisible cards)

### Hero Section
- Background: dual-accent radial glow (`from-sage/10 via-indigo/5`) — "stage lighting" feel
- Heading: gradient from `foreground` to `foreground/80` — premium, subtle
- Label pill: rounded-full border with pulsing dot — signals activity
- Mascot frame: dual-accent multi-layered shadow (sage outer, indigo inner)
- Developer code tag below mascot: styled as `rounded-full bg-secondary/60 border`

### Section Labels (all sections)
```jsx
<span className="h-4 w-1 rounded-full bg-sage" />
<p className="text-xs font-semibold uppercase tracking-wider text-sage">About</p>
```
Journalistic "pipe + LABEL" format — used by Linear, Stripe — looks intentional.

### Cards
- Trelio flagship: gradient top edge (`via-sage/60`) + `bg-gradient-to-br from-card to-sage/5`
- Trelio proof strip: 3-column architecture metrics bar (`38 DB Tables`, `AES-256-GCM`, `Direct UPI/Rzp`) proving real-world engineering constraints
- Live link: pulsing dot + rounded-full border pill
- Badge tiers: sage=core stack | indigo=security tech | outline=other
- Hover: `.card-hover-elevate` — `translateY(-3px)` + box-shadow at 220ms cubic-bezier
- Side projects: gradient top edge uses `via-border` (neutral) — signals "less primary"

### Particle Field
- 34 particles; every 5th = `--indigo` at lower opacity; rest = `--sage`
- Creates 3D depth perception without actual 3D code

### About Section
- Zone: `bg-secondary/30` + `border-y`
- Quick-scan metadata strip: 3-pill grid (`Location: Warangal, India`, `Degree: B.Tech CSE '28`, `Core Focus: SaaS & Security`) for 5-second recruiter evaluation
- Technical terms in `<code>` tags: sage for core tech, indigo for system-design concepts

### Interactive Mascot Companion
- Floating bottom-right companion widget with speech bubbles and jumping/waving animations
- 3.5-second initial greeting wave and bubble on mount to aid visitor discovery
- Integrated full-featured AI Chatbot (`/api/chat`) with markdown streaming responses

### Contact Section
- Top ambient glow — signals landing zone / page end
- CTA: "Open for contracts & conversations"
- 1-Click Clipboard Copy: direct button on page and inside modal copying `nagulagamchanakya2211@gmail.com` with toast feedback (prevents dropoff when desktop client lacks default mail handler)
- Italic serif quote closing statement
- Per-card hover brand colors: GitHub=white, LinkedIn=indigo, Email=sage, Trelio=strong sage

---

## 7. SEO

- JSON-LD `schema.org/Person` in `src/routes/__root.tsx`
- OG tags, Twitter card (`summary_large_image`)
- `public/robots.txt` — allows `/`, blocks `/admin` and `/api/`
- `public/sitemap.xml` — single root URL
- Keywords meta: full tech stack + name
- **OG image (`/og.jpg`) is currently a placeholder — future task: generate branded image**

SSR (via Nitro) is the primary reason TanStack Start was chosen — crawlers see fully rendered HTML.

---

## 8. Git Workflow

- Dev branch: `dev` | Production branch: `main`
- Flow: develop on `dev` → merge into `main` → push both to GitHub
- Portfolio repo: **public** (code quality IS the portfolio)
- Trelio repo: **private** (proprietary SaaS)

---

## 9. Admin Panel

Location: `/admin` | Login: `/admin/login`

Tabs:
- Tab 1: Business/product entries
- Tab 2: Resume data (PDF URL, summary, education, skills)
- Tab 3: tagline, `workAvailability`, `hiringStatus`

---

## 10. Data Model

`DynamicData` in `src/data/store.ts`:
```ts
interface DynamicData {
  businesses: Project[];
  sideProjects: Project[];
  skills: Record<string, string[]>;
  tagline?: string;
  availabilityStatus?: string;
  liveCount?: number;
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
  workAvailability?: string;   // open to being hired for contracts
  hiringStatus?: string;        // whether hiring others for own team
}
```

---

## 11. Personal / Product Identity Rules

- Trelio = flagship live SaaS — always "Live Product" featured treatment
- Side projects = explicitly "experiments" or "learning work"
- Chanakya = **open to being hired** (contracts, consulting, engineering)
- Chanakya = **NOT hiring others** for his own team
- Education: B.Tech **CSE** (not CIS) — SR University, Warangal, Telangana — 2028

---

## 12. Files Map

| File | Purpose |
|------|---------|
| `src/styles.css` | CSS tokens, keyframes, utility classes |
| `src/routes/__root.tsx` | Root HTML, SEO meta, JSON-LD |
| `src/routes/api/health.ts` | `/api/health` monitoring & boot checks |
| `src/components/portfolio-home.tsx` | All page sections |
| `src/components/theme-toggle.tsx` | Synchronized light/dark toggle component |
| `src/components/trelio-preview.tsx` | Trelio live state & architecture proof preview |
| `src/components/particle-field.tsx` | Animated hero particles |
| `src/components/contact-cards.tsx` | Contact link cards |
| `src/components/mascot/companion.tsx` | Floating mascot & interactive greeting |
| `src/components/mascot/companion-chat.tsx` | AI chatbot UI + markdown parser |
| `src/routes/api/chat.ts` | OpenAI route, system prompt, fallback |
| `src/routes/api/admin/login.ts` | Auth — fail-closed, HMAC token, boot guards |
| `src/routes/api/admin/check.ts` | Session verification |
| `src/routes/api/admin/data.ts` | Admin data GET/POST |
| `src/lib/boot-guards.ts` | Server startup environment validation guards |
| `src/lib/auth-session.ts` | HMAC-SHA256 session utilities |
| `src/lib/env.ts` | `.env` parser & production fallback helper |
| `src/data/store.ts` | Data read/write |
| `src/data/portfolio-data.json` | Live-editable data (ephemeral on Vercel) |
| `src/data/projects.ts` | Default static project/skills data |
| `scripts/patch-bundle.mjs` | Postbuild script inlining bare `tslib` helpers |
| `public/robots.txt` | Crawl rules |
| `public/sitemap.xml` | Sitemap |
| `SECURITY.md` | Vulnerability disclosure |
| `README.md` | Project overview and setup |
| `memory_portfolio.md` | **This file** — single source of truth |

---

## 13. Known Issues / Deferred Tasks

| Issue | Status | Notes |
|-------|--------|-------|
| Admin edits ephemeral on Vercel | Deferred | Fix: Postgres (Neon) instead of JSON file |
| OG image is placeholder | Deferred | Branded dark bg + name + title + Trelio |

---

## 14. Decisions Log

| Date | Decision | Reason |
|------|----------|--------|
| Session 1 | TanStack Start over Next.js | SSR for SEO, no lock-in |
| Session 1 | shadcn/ui + Tailwind CSS v4 | Local component control, utility speed |
| Session 1 | Vercel + Nitro preset | Zero-config deploy |
| Session 1 | Dark mode default | Standard for dev portfolios |
| Session 1 | Sage green as primary accent | Neutral, mature, distinctive |
| Session 2 | HMAC-SHA256 admin auth | Native, no deps, production-grade |
| Session 2 | Fail-closed login | No default credential attack vector |
| Session 2 | No username logging on failure | Prevents log-based credential leaking |
| Session 2 | OpenAI model = `gpt-5.6-terra` | User's explicit choice |
| Session 2 | Split workAvailability / hiringStatus | "Being hired" vs "hiring others" are opposite — must not conflate |
| Session 2 | Portfolio repo public | Code quality is the showcase |
| Session 2 | Trelio repo private | Proprietary product |
| Session 2 | JSON-LD + robots.txt + sitemap | SEO structured data |
| Session 3 | Added indigo as second accent | Sage was losing signal from overuse; indigo = interaction |
| Session 3 | Light mode warm cream palette | Old cold grey had zero card contrast |
| Session 3 | Zone-based dark mode depth | Fixes monotony on scroll |
| Session 3 | Left-accent section labels | Journalistic, Linear/Stripe pattern |
| Session 3 | Code tags for technical terms | Authentic engineering feel vs marketing copy |
| Session 3 | Dual-color particle field | 3D depth perception without 3D code |
| Session 3 | Card top gradient edge | Premium card personality — Vercel/Raycast technique |
| Session 3 | Badge tiers (sage/indigo/outline) | Visual grammar for tech categories |
| Session 3 | Contact section serif quote | Closes page with clear value proposition |
| Session 4 | Inlined `tslib` helpers in postbuild script | Fixed `ERR_MODULE_NOT_FOUND` on Vercel runtime caused by tslib ESM/CJS packaging mismatch |
| Session 4 | Added `/api/health` endpoint & `boot-guards.ts` | Borrowed from Trelio architecture: uptime monitoring target + early env validation |
| Session 4 | Synchronized ThemeToggle components via custom event | Clicking top bar or sidebar theme toggle now immediately synchronizes all button icons |
| Session 5 | Added architecture proof strip to Trelio preview | Shows concrete engineering scope (38 DB Tables, AES-256-GCM, Direct UPI) to build immediate visitor trust |
| Session 5 | Added 3-pill quick-scan recruiter highlights | Facilitates 5-second evaluation without reading text-heavy paragraphs |
| Session 5 | Added 1-click clipboard copy for email | Solves silent dropoff for visitors without a configured native `mailto:` client |
| Session 5 | Added auto-greeting discovery to Companion | Timed gentle wave after 3.5s alerts visitors to the interactive AI companion |
| Session 6 | Added 3rd tab for 'Contract Work' in Featured Projects | Clear professional messaging indicating availability for client/contract work, ready for future case studies |
| Session 6 | Trimmed side experiments to 'This site' + polite 'More in progress' placeholder | Honest framing rather than placeholder side projects |
| Session 7 | Implemented OS/device system theme detection with zero-FOUC script | Automatically matches visitor's browser/OS dark/light preference on initial load while supporting manual toggle overrides & storage sync |
| Session 8 | Dead code cleanup | Removed unused multiplayer boilerplate, orphaned use-intro-animation hook, and 4 unused shadcn UI components |
