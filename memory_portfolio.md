# Portfolio Memory — Nagulagam Chanakya
> **Purpose:** This file is the single source of truth for every decision made on this portfolio. Every code change, design choice, security implementation, and business rule lives here. Update this file immediately after any change in future sessions.
>
> **Last Updated:** 2026-08-24

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
**Model:** `gpt-4o-mini-2024-07-18` (default fallback; overridable via `OPENAI_MODEL` in `.env`)
- Supports `temperature: 1`, `max_completion_tokens: 500`
- Capped at 25 conversation history turns + 1000 chars per message
- In-memory rate limiting: 20 reqs/min per IP

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
- Fail-closed in production if `ADMIN_SESSION_SECRET` is unset

**Fail-closed login (`src/routes/api/admin/login.ts`):**
- Missing `ADMIN_USERNAME` or `ADMIN_PASSWORD` env vars → login rejects immediately — no default fallback
- Username **never logged** on auth failure — prevents credential leaking to server logs
- Timing-safe credential comparison via `crypto.timingSafeEqual()`
- In-memory rate limiter: 5 attempts per 5 minutes per IP

**Protected routes:**
- `check.ts` and `data.ts` both use `verifySignedSessionToken` and run `assertEnvGuards()`

**Required env vars for production:**
```
ADMIN_USERNAME=
ADMIN_PASSWORD=
ADMIN_SESSION_SECRET=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini-2024-07-18
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

### Theme System & 4-Tier Luminance Ladder
- Default: **Dark mode** (`#08090b` deep obsidian base)
- Optional: **Light mode** (`#f8f7f4` warm alabaster linen base — editorial, high-contrast)
- Synchronized toggle lives in left rail nav and top site nav
- `<html>` starts with `class="dark antialiased"` — toggle adds/removes `.light`

**Dark Mode Elevation Ladder:**
- Level 0 (Canvas Base): `#08090b` (Deep Obsidian)
- Level 1 (Resting Cards): `#11141a` (Elevated Titanium + Top Specular Rim)
- Level 2 (Secondary/Tabs): `#151921` (Interactive surfaces)
- Level 3 (Floating/Modal): `#1a1f2c` (Elevated dialogs & popovers)

**Light Mode Elevation Ladder:**
- Level 0 (Canvas Base): `#f8f7f4` (Warm Alabaster Linen — eliminates digital glare)
- Level 1 (Resting Cards): `#ffffff` (Pure White Floating Slabs)
- Level 2 (Secondary/Tabs): `#f0ede6` (Warm Stone Secondary Panels)
- Level 3 (Floating/Modal): `#ffffff` (Elevated with crisp shadow + stone stroke)

### Directional Specular Lighting (`.card-specular`)
- Linear/Apple-inspired overhead directional lighting physics:
  - Dark mode: `inset 0 1px 0 0 rgba(255, 255, 255, 0.10)` top rim highlight + `0 8px 28px -6px rgba(0, 0, 0, 0.50)` atmospheric shadow.
  - Light mode: `border: 1px solid rgba(20, 23, 21, 0.10)` + `inset 0 1px 0 0 #ffffff` + `0 6px 20px -4px rgba(0, 0, 0, 0.07)` soft ambient lift.
  - Hover state: Spring-eased `-3px` elevation with phosphor border reflection (`rgba(52, 211, 153, 0.35)` dark / `rgba(31, 101, 59, 0.4)` light).

### Multi-Chromatic Architectural Domain Badges
Instead of monochromatic grey tags, tech stacks are color-coded by engineering domain with calibrated dual-theme tokens:
- **Frontend / Full-Stack** (React, TypeScript, Tailwind, Next.js): **Electric Cyan** (`bg-cyan-50 text-cyan-800 border-cyan-300` light / `bg-cyan-500/10 text-cyan-300 border-cyan-500/25` dark).
- **Backend & APIs** (Node.js, PostgreSQL, Express, REST): **Emerald Green** (`bg-emerald-50 text-emerald-800 border-emerald-300` light / `bg-emerald-500/10 text-emerald-300 border-emerald-500/25` dark).
- **Product & Architecture** (Multi-tenant, Audit logs, Auth): **Royal Purple** (`bg-purple-50 text-purple-800 border-purple-300` light / `bg-purple-500/10 text-purple-300 border-purple-500/25` dark).
- **Tools, Security & Payments** (AES-256-GCM, Razorpay, UPI): **Warm Amber** (`bg-amber-50 text-amber-800 border-amber-300` light / `bg-amber-500/10 text-amber-300 border-amber-500/25` dark).

### Hero Section: Live macOS Developer Terminal
- Left: Dual-tone typography `<h1 font-serif>` with "Nagulagam" (Crisp Titanium) + "Chanakya" (Emerald-to-Cyan Sheen).
- Right: **Live macOS IDE Terminal (`HeroTerminal`)**:
  - macOS window buttons (🔴 `#ff5f56`, 🟡 `#ffbd2e`, 🟢 `#27c93f`) + `chanakya.config.ts` tab header.
  - Multi-colored TypeScript syntax highlighting (Purple keywords, Cyan objects, Emerald strings, Amber security badges).
  - 1-click interactive CLI runner (`npx chanakya@latest`) with clipboard copy feedback and sonner toast.

### Architectural Canvas Texture
- `.bg-grid-pattern`: Technical blueprint dot-matrix with radial falloff mask.
- `.bg-noise`: 2.5% SVG noise overlay that eliminates color banding on OLED screens and adds tactile materiality.

### Bento Workstream Cards
- **Trelio Flagship Card**: Emerald-to-Cyan cybersecurity ambient glow + multi-stop top accent line (`from-emerald-400 via-teal-400 to-cyan-500`) + 3-stage interactive lifecycle state machine (`TrelioPreview`).
- **Freelance Engagement Card**: Amber-to-Gold client engagement glow + golden icon badge and button (`from-amber-400 via-yellow-400 to-amber-500`).
- **Side Experiments**: Violet-to-Indigo lab glow (`from-purple-400 via-indigo-400 to-cyan-500`).

### Interactive Mascot Companion
- Floating bottom-right companion widget with speech bubbles and jumping/waving animations.
- 3.5-second initial greeting wave and bubble on mount to aid visitor discovery.
- Integrated full-featured AI Chatbot (`/api/chat`) with markdown streaming responses.

### Contact Section & Brand Cards
- 1-Click Clipboard Copy: direct button copying `nagulagamchanakya2211@gmail.com` with toast feedback.
- Brand-specific hover glows and icon containers: GitHub (slate), LinkedIn (electric blue), Email (emerald), and Trelio (cyan).

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
| `src/lib/error-component.tsx` | On-brand global error boundary page (polite, non-technical) |
| `src/lib/not-found-component.tsx` | On-brand global 404 page (compass icon, sage theme tokens) |
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
| `src/routes/api/admin/data.ts` | Admin data GET/POST (reads/writes live Blob content) |
| `src/routes/api/admin/resume.ts` | Gated Blob PDF upload + AI extraction & merge |
| `src/routes/api/admin/restore.ts` | Gated restore endpoint overwriting live content with backup |
| `src/routes/api/resume.ts` | Public endpoint querying Vercel Blob and redirecting (307) to live résumé PDF |
| `src/lib/boot-guards.ts` | Server startup environment validation guards |
| `src/lib/auth-session.ts` | HMAC-SHA256 session utilities |
| `src/data/store.ts` | Data interface & client/SSR bundled JSON loader |
| `src/data/content.server.ts` | Server-only Blob read/write/backup/restore persistence |
| `src/data/content-fn.ts` | Server function invoking readContent() dynamically |
| `src/data/resume-schema.ts` | Zod schema & TypeScript type for structured résumé content |
| `src/data/portfolio-data.json` | Bundled seed/fallback data |
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
| Session 9 | Security hardening & audit fixes | Made session secret fail-closed in prod, added timing-safe compare + rate limiting to login, hardened /api/chat with 25-msg history & rate limiting, fixed env cache, removed Grok/BetterAuth leftovers |
| Session 10 | Master Plan Execution (Phases 1, 4, 5) | Server-rendered portfolio data via Route loader (no client fetch in useEffect), bundled JSON data import, sanitized /api/health output, theme-aware scrollbar tokens |
| Session 11 | Isolated server persistence to `store.server.ts` | Kept Node.js `fs`/`path` out of the client/SSR bundle so `store.ts` remains pure and browser-safe |
| Session 12 | Gemini Plan Execution | Added `tsc --noEmit` build guard in `package.json`, replaced 404ing Grok manifest with self-branded `site.webmanifest`, implemented warm/tinted dark mode tokens with ambient radial glow, added auth guard to `GET /api/admin/data`, removed dead `useEffect` import |
| Session 13 | Vercel Blob Résumé Upload (Task 3) | Implemented `POST /api/admin/resume` with `@vercel/blob` for fixed-path overwrite (`resume.pdf`, 1-min cache TTL), added admin file upload picker UI, updated `resume-modal.tsx` to resolve `VITE_RESUME_PDF_URL` |
| Session 14 | Failure Analysis & Serverless Resilience | 1) Fixed Vercel 500 error in `store.server.ts`: handled read-only `/var/task` serverless filesystem gracefully without throwing `ENOENT` on admin "Save All". 2) Fixed 404 on résumé download: TanStack Start file-based routing converts `.pdf` filenames to subdirectories (`/resume/pdf`), so implemented `GET /api/resume` endpoint querying Blob via `head('resume.pdf')` and 307 redirecting to Blob URL, updating modal fallback |
| Session 15 | Exception Handling & Friendly Error Pages (Task 7) | 1) Fixed admin crash chain: guarded `checkAuthAndFetchData` with `dataRes.ok` and `Array.isArray` check. 2) Replaced `AppErrorComponent` with polite on-brand theme-token error page. 3) Created `AppNotFoundComponent` and wired `defaultNotFoundComponent` in `router.tsx`. 4) Made `/api/resume` 404 return styled HTML rather than internal text. 5) Sanitized upload error strings in `/api/admin/resume`. |
| Session 16 | AI Résumé PDF Reading & Automatic Update (Task 8) | 1) Vercel Blob content persistence via `content.server.ts` (`content.json` + `content-backup.json` + `restoreBackup`). 2) Dynamic `fetchContent` server function. 3) Zod schema `resumeContentSchema` & dynamic rendering of `ResumeModal` from data with fallback. 4) Vision/file payload AI extraction in `POST /api/admin/resume` with non-destructive merge (protecting curated fields). 5) Added `POST /api/admin/restore` and admin "Undo last update" UI button. |
| Session 17 | Canonical Domain, SEO & Dependency Cleanup (Task 9) | 1) Set `SITE_URL` to `https://chanakya-portfolio-orcin.vercel.app`, canonical link tag, absolute OG/Twitter image cards, sitemap.xml, robots.txt. 2) Removed dead `SITE_URL` from `.env.example`. 3) Restored `gpt-5.6-terra` default model in `/api/chat.ts` and `/api/admin/resume.ts`. 4) Removed orphaned `src/lib/db.ts` & `scripts/migrate.mjs`, cleaned package.json build script, and uninstalled unused packages (`better-auth`, `kysely`, `@electric-sql/pglite`, `pg`, `@types/pg`). |
| Session 18 | Privacy Safeguards & Sanitisation on AI Résumé Extraction (Task 11) | 1) Added explicit exclusion prompt instructions to `RESUME_INSTRUCTION` (academic scores/CGPA, phone numbers, postal addresses, DOB, IDs, compensation). 2) Implemented two-layer defensive code redaction via `SENSITIVE_PATTERNS`, `redactSensitive()`, and `scrubDeep()` in `src/routes/api/admin/resume.ts`. 3) Fixed 415 response `Content-Type` header to `application/json`. |
| Session 19 | UI Copy Update: Freelance Work | Renamed "Contract Work" tab and associated engagement card headings/descriptions in `src/components/portfolio-home.tsx` to "Freelance Work" and updated contact section prompts accordingly. |
| Session 20 | Visual Hierarchy & 60-30-10 Balance | 1) Standardized 60-30-10 color balance (60% background canvas, 30% structural cards/typography, 10% focal sage accents). 2) Harmonized section vertical rhythm to `py-24` across all sections. 3) Standardized category eyebrow titles to neutral `text-muted-foreground` with `bg-sage` accent dot to prevent accent inflation. 4) Unified card borders to `border-border/70` with `rounded-2xl` hierarchy and secondary CTA outline styling. |
| Session 21 | Tier-1 Design Engineering Polish | 1) Deep obsidian `#08090b` + dark titanium `#11141a` luminance ladder. 2) Directional top specular highlight `.card-specular` with inner rim reflection. 3) Trelio interactive Bento preview with 38 DB tables/AES-256 telemetry + interactive state machine visualizer. 4) Cinematic micro-noise texture `bg-noise` + multi-layer ambient radial glows. 5) Phosphor status pips and titanium typography kerning. |
| Session 22 | Light Mode Polish (Warm Linen & Swiss Editorial Craft) | 1) Refined light mode tokens: warm alabaster canvas `#f7f6f2`, pure white cards `#ffffff`, high-legibility slate body text `#58605a` (7.2:1 WCAG AAA), accessible forest sage `#2b5a3d` (6.2:1 WCAG AAA), and royal indigo `#4338ca`. 2) Added light mode ambient radial mist and directional light specular physics to `.light .card-specular`. 3) Updated left rail nav capsule and mascot frame with theme-adaptive borders. |
| Session 23 | Multi-Chromatic Software Transformation | 1) Added architectural dot-matrix blueprint grid `bg-grid-pattern` with masked radial falloff. 2) Built interactive macOS developer IDE terminal `HeroTerminal` with syntax highlighting (cyan, emerald, purple, amber) and 1-click copy CLI runner. 3) Dual-tone metallic gradient typography for headline. 4) Domain-specific color-coded skill categories (Frontend=Cyan, Backend=Emerald, Product=Purple, Tools=Amber). 5) Chromatic bento cards with distinct workstream gradient signatures and multi-color brand contact cards. |
| Session 24 | Light Mode Deep Contrast Calibration | 1) Fixed light mode terminal and syntax color contrast: replaced washed-out pastel neons with rich deep syntax tokens (`text-purple-700`, `text-cyan-800`, `text-emerald-800`, `text-amber-800`). 2) Calibrated hero headline gradient for light mode (`from-emerald-800 via-teal-800 to-cyan-900`). 3) Fixed status badge and contact card contrast across themes with dedicated dark/light tokens. 4) Updated light theme variables to `#f8f7f4` canvas and `#121413` high-contrast onyx foreground. |
| Session 25 | Grok Remnants & Legacy Scaffold Purge | 1) Deleted dead Grok preview postMessage bridge (`src/components/preview-host-bridge.tsx`, `src/lib/preview-host-bridge.ts`, `src/lib/preview-embedder-origin.ts`). 2) Deleted dead `server/virtual-grok-og-identity.d.ts` and `src/lib/og/site.json`. 3) Purged `public/__grok/` directory (Grok onboarding assets and `icon-180.png`). 4) Updated `src/routes/__root.tsx` apple-touch-icon and `public/site.webmanifest` icons to `/favicon.svg`. 5) Cleaned `vite.config.ts` by removing dead `pgliteBootstrapPlugin` and pruned `tsconfig.json`. 6) Removed legacy test scripts in `scripts/` (retaining `patch-bundle.mjs`). Reduced client JS bundle size by ~70 kB. |
| Session 26 | Trelio Portrayal & ABE Lifecycle Correction | 1) Removed all mentions of 'escrow' and intermediary fund holding. 2) Re-anchored `TrelioPreview` 3-stage lifecycle to reflect true Authorization-Before-Execution: Stage 01 (Scope Lock & Agreement), Stage 02 (Client Authorization & Direct Payment unlock), Stage 03 (Execution & Direct Settlement to agency account). 3) Updated Trelio descriptions in `projects.ts` and `portfolio-data.json` to preferred framing emphasizing stage unlock without funds holding. |
