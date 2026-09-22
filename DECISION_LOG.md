# Decision Log & Persistent Project Memory — CK Builds

## Architectural Decisions & Technical Rationale

### 1. Rebrand to "CK Builds" & Removal of Personal Identity
- **Decision**: Completely rebrand the marketing and studio surface to **CK Builds**. Remove all instances of "Chanakya", "Nagulagam Chanakya", and student references (SR University, graduation year 2028, degree references).
- **Rationale**: An enterprise or operational software buyer seeking custom CPQ or workflow automation evaluates teams on commercial capability and engineering execution, not personal student backgrounds. All public-facing surfaces now present an honest boutique software studio identity.
- **Allowed Leftovers**: GitHub repository owner URLs (`github.com/Chanakya2006gt`), private authenticated admin dashboard (`/admin/*`), and immutable Git commit history.

### 2. Elimination of Diagnosis Models, Numbers, and Timelines
- **Decision**: Removed all references to "Paid Diagnosis (₹20,000)", "3 days", "15 days", "up to 8 weeks", and retainer tiers.
- **Rationale**: Public price points and rigid delivery deadlines trigger premature objections or misaligned scoping before understanding a client's actual workflow volume, machine specs, or problem size. Scoping and fixed pricing are now determined during a free 20-minute discovery call based directly on the client's problem size.

### 3. Radical Information De-cluttering (Better Design Principles)
- **Decision**: Retired interactive DOM simulation widgets (`ApexPreview`, `TrelioPreview`, and `HeroQuoteCard`). Replaced them with large, high-resolution visual preview cards, concise 2-sentence definitions, and direct links.
- **Rationale**: Interactive calculator widgets with complex UI controls added excessive cognitive load and felt like portfolio toys rather than serious commercial software. Clean still screenshots let the buyer immediately see the real product interface and evaluate the engineering outcome.

### 4. Honest Proof-of-Work Attribution
- **Decision**: Framed **Trelio** strictly as `Studio product · live` and **Apex Packaging CPQ** as `Reference build · industrial manufacturing`.
- **Rationale**: Completely avoids inventing fictional third-party clients. Trelio was built and is operated in-house; Apex is an industrial demonstration CPQ modeled to FINAT 1–8 standards.

### 5. Grounded Partnership Positioning (No "Senior Engineers" Roster Fiction)
- **Decision**: Avoided plural "senior engineers" or "elite agency" claims.
- **Rationale**: Prevents backfire when an enterprise client gets on a call. Used the approved phrasing: *"You talk directly to the people who design, write, and deploy the system. No account managers or salespeople in the middle."*

### 6. Intake Architecture & `/book` Route
- **Decision**: Implemented `/book` with a 3-field intake form submitting to `/api/contact` alongside a direct WhatsApp link pre-filled with inquiry details.
- **Rationale**: Provides immediate capture for business operators who prefer structured email inquiry while maintaining instant messaging for high-velocity discussions. Supports switching to a Cal.com / Calendly embed when `BOOKING_URL` is configured in `src/data/studio.ts`.

### 7. Clean `/method` Route Redirection
- **Decision**: Redirected `/method` directly to `/#how-we-work`.
- **Rationale**: Prevents having two conflicting narratives (e.g. legacy "15-Day Method" vs new 3-step agency workflow).

---

## Code Implementation Details & Component Responsibilities

1. **`src/data/studio.ts`**:
   - Single source of truth for studio identity (`STUDIO_NAME = "CK Builds"`), confirmed WhatsApp number (`+91 76740 40571`), email, and booking URL.
2. **`src/data/projects.ts`**:
   - Cleaned project data and updated `navLinks` to: `Work` (`#work`), `What We Build` (`#what-we-build`), `How We Work` (`#how-we-work`), `FAQ` (`#faq`).
3. **`src/routes/__root.tsx`**:
   - Configured `ProfessionalService` JSON-LD schema for CK Builds and removed the `Person` graph.
   - Updated meta tags: Title, description, keywords, OpenGraph, Twitter cards.
4. **`src/routes/api/contact.ts`**:
   - Serverless endpoint receiving POST payloads `{ name, emailOrPhone, workflowDescription }`.
   - Validates inputs, generates correlation ID (`lead_<timestamp>_<random>`), outputs structured server log, and returns clean `{ success: true }`.
5. **`src/routes/book.tsx`**:
   - 3-field inquiry form with reactive submission status (idle, submitting, success, error).
   - Direct WhatsApp button (`WHATSAPP_URL`) and direct email link.
6. **`src/routes/method.tsx`**:
   - Client-side and SSR redirect to `/#how-we-work` via TanStack Router `redirect`.
7. **`src/components/portfolio-home.tsx`**:
   - Hero: Editorial typography with two CTAs (`Book a 20-minute call` and `See our work`).
   - Selected Work: Two large visual cards featuring `/images/trelio-preview.png` and `/images/apex-preview.png`.
   - Capabilities: 3 clean cards for CPQ Engines, Stage Locks, and Internal Portals.
   - Standards: 3 grounded principles on direct builder access, 100% IP ownership, and problem-sized scope.
   - Contact & Footer: Aligned with CK Builds agency branding.
8. **`src/components/offer-ladder.tsx`**:
   - Rewritten into the 3-step agency process: Discovery Call → Scope & Fixed Quote → Build & Handover.
9. **`src/data/faqs.ts`**:
   - Distilled to 5 core agency questions answering pricing, SaaS vs custom software, code ownership, target verticals, and intake requirements.
10. **`src/routes/api/chat.ts`**:
    - Neutralized assistant system prompt to represent CK Builds without student references or legacy diagnosis rules.
11. **`public/llms.txt`, `public/site.webmanifest`, `public/sitemap.xml`, `README.md`, `.env.example`, `PRD.md`, `ARCHITECTURE.md`**:
    - Completely synchronized to CK Builds studio branding.

---

## Audit Log Invariant — Exact Commands Executed

```bash
# 1. Asset ingestion
mkdir -p public/images && cp "/Users/shresta/.gemini/antigravity/brain/c2e63d0a-7a45-454f-bdd0-60143b4f95d1/.user_uploaded/media_1790097674644.png" public/images/trelio-preview.png
# Captured desktop still of live Apex CPQ at 1440x900
node -e "const { chromium } = require('playwright'); ..." # saved to public/images/apex-preview.png

# 2. Deleted obsolete and unmounted widget files
rm src/components/method-section.tsx
rm src/components/apex-preview.tsx src/components/trelio-preview.tsx src/components/hero-quote-card.tsx

# 3. Regenerated route tree
npx vite build

# 4. Type checking & Linting
npm run typecheck # exited with code 0
npm run lint      # exited with code 0

# 5. Production build & bundle patching
npm run build     # exited with code 0
```

---

## URLs & Routes Verified
- `/`: Homepage with Hero, Selected Work (Trelio & Apex still cards), Capabilities, How We Work, Standards, FAQ, and Contact.
- `/book`: Consultation intake form with `/api/contact` submission and direct WhatsApp fallback.
- `/method`: Clean redirect to `/#how-we-work`.
- `/api/health`: Synthetic health probe reporting service `ck-builds`.
- `/api/contact`: POST intake endpoint.
- `/api/chat`: AI Solutions assistant API.

### Playwright Smoke Tests & Quality Verifications
- **Desktop (1440x900) & Mobile (390x844)**:
  - Homepage `/`: Verified title "CK Builds — Bespoke Software for Operations & Quoting", responsive layout, Trelio and Apex preview images, and navigation anchors.
  - Consultation `/book`: Verified title "Book a 20-minute call — CK Builds", form rendering, and WhatsApp link.
  - Redirect `/method`: Verified automatic HTTP/client redirect to `/#how-we-work`.
- **Command**:
  `npx vite preview --port 8081` + Playwright headless Chrome automation
  Result: 100% passed.
