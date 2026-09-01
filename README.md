# Nagulagam Chanakya — Quote-to-Job Systems for Operating Businesses

A high-performance, security-conscious personal portfolio & admin portal built with **TanStack Start (SSR)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

Positioned around fixed-price operational systems: replacing error-prone spreadsheets, WhatsApp chains, and rigid SaaS with custom software built to an exact workflow.

---

## ✨ Key Features

### 🪜 1. Three-Tier Offer Ladder & Workflow Doors
- **Step 1 · Paid Diagnosis (₹20,000, 3 business days)**: Delivers a written workflow spec, data model layout, 1 deployed working screen, and a guaranteed fixed build quote. 100% credited against the build.
- **Step 2 · One Workflow Built (Fixed Quote from Diagnosis, 15 business days)**: One complete live operational process (e.g. quote-to-order, milestone client portal) deployed on custom domain with automated tests, security hardening, and full repository handover.
- **Step 3 · Keep It Running (₹20,000 – ₹35,000 / month)**: Optional senior engineering care retainer for updates, maintenance, and direct engineer access.
- **Workflow Doors**: Concrete workflow archetypes representing physical production quoting, milestone stage locks, and B2B commerce.

### 🏭 2. Live Verified Systems & Interactive Proof
- **Apex Packaging CPQ**: Cloud-native converting & estimating platform with interactive European FINAT 1–8 rewind visualizer, isomorphic linear-meter & substrate math engine, and 43 PostgreSQL Row-Level Security (RLS) policies.
- **Trelio SaaS (`https://trelio.in`)**: Authorization-Before-Execution multi-tenant platform in continuous development since March 2026 (623 commits, 58 test suites, PostgreSQL transaction advisory locks, direct merchant settlement).

### ❓ 3. Buyer-Facing FAQ & Structured Data
- 8 substantive, transparent questions covering exact price bands (typically ₹2L–₹12L), why off-the-shelf tools like Zoho break on custom operations, full code ownership, and 15-day timeline guarantees.
- Synchronized `FAQPage` JSON-LD schema for rich search results and AI citations.

### 💬 4. AI Solutions Assistant (`/api/chat`)
- Floating corner launcher with prebuilt questions and direct pricing answers.
- Backed by OpenAI (`gpt-5.6-terra`) with offline structured fallback responses.
- In-memory rate limiting and dialogue focus on operational scope, diagnosis, and terms.

### 🎛️ 5. Private Admin Portal & Résumé Pipeline (`/admin`)
- Protected access with session tokens cryptographically signed via `ADMIN_SESSION_SECRET` (fails closed in production).
- Live editing of content persisted to Vercel Blob and local JSON fallback.
- Résumé upload pipeline: PDF upload → `@vercel/blob` → multi-page vision extraction via `gpt-5.6-terra` → automated PII redaction.

---

## 🛠️ Tech Stack

- **Framework**: TanStack Start (React 19 SSR) + TanStack Router (File-based routing)
- **UI & Styling**: React 19, Tailwind CSS v4, shadcn/ui, Radix UI Primitives, Lucide Icons
- **State & Motion**: CSS Transitions, IntersectionObserver scroll animation, Sonner Toasts
- **Build & Server**: Vite 8, Nitro (Vercel serverless preset), Node.js, TypeScript

---

## 🚀 Getting Started

### 1. Installation

```bash
git clone https://github.com/Chanakya2006gt/Chanakya_Portfolio.git
cd Chanakya_Portfolio
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env` and configure variables:

```bash
cp .env.example .env
```

Configured variables:

```env
# Canonical Site URL
SITE_URL=https://chanakya-portfolio-orcin.vercel.app

# Admin Authentication (/admin/login)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
ADMIN_SESSION_SECRET=your_random_64char_session_secret_key_here

# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here
# gpt-5.6-terra is intentional and vision-capable — the résumé extraction pipeline sends PDF page images. Do not "correct" it to a 4o model.
OPENAI_MODEL=gpt-5.6-terra
OPENAI_RESUME_MODEL=gpt-5.6-terra

# Vercel Blob Storage (Required in production for dynamic data & résumé PDF storage)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_token_here

# Public Contact & Links
PUBLIC_EMAIL=nagulagamchanakya2211@gmail.com
PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/nagulagam-chanakya-b93514315
PUBLIC_GITHUB_URL=https://github.com/Chanakya2006gt
PUBLIC_RESUME_PDF_URL=/resume.pdf
```

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the portfolio.

### 4. Build, Typecheck & Lint Commands

```bash
# TypeScript compilation check (zero errors allowed)
npm run typecheck

# Code quality check
npm run lint

# Production build (Runs typecheck -> Vite SSR/Nitro build -> inlines tslib serverless helpers)
npm run build

# Preview production build locally
npm run preview
```

> **Note on `patch:bundle`**: The `build` script runs `npm run patch:bundle` (`scripts/patch-bundle.mjs`), which inlines bare `tslib` imports into the compiled Nitro Vercel serverless function bundles to prevent `ERR_MODULE_NOT_FOUND` at runtime on Vercel.

---

## 📁 Project Structure

```
├── .env.example             # Template for API keys, Blob tokens & admin credentials
├── README.md                # Project overview & quickstart
├── ARCHITECTURE.md          # Architecture, client/server boundary, data flows
├── SECURITY.md              # Threat model, fail-closed auth, rate limits, PII sanitization
├── PRD.md                   # Product Requirements Document
├── scripts/
│   └── patch-bundle.mjs     # Vercel serverless bundle post-processor
├── src/
│   ├── components/          # UI components
│   │   ├── mascot/          # Companion SVG, Floating Launcher, Chat Modal
│   │   ├── ui/              # Radix + Tailwind primitive components
│   │   ├── apex-preview.tsx # Interactive FINAT visualizer & CPQ estimator
│   │   ├── faq-section.tsx  # Native accordion FAQ
│   │   ├── hero-quote-card.tsx # Real-time quote preview card
│   │   ├── method-section.tsx # 5-phase delivery breakdown
│   │   ├── offer-ladder.tsx # 3-tier engagement model & workflow doors
│   │   ├── portfolio-home.tsx # Homepage root component
│   │   ├── resume-modal.tsx # Interactive resume viewer
│   │   ├── site-nav.tsx     # Sticky navigation header
│   │   ├── theme-toggle.tsx # Light/dark mode toggle
│   │   └── trelio-preview.tsx # Stage lock interactive preview
│   ├── data/
│   │   ├── content.server.ts # Server-only content loader (Vercel Blob / local fallback)
│   │   ├── faqs.ts          # Central FAQ question & answer array (shared with JSON-LD)
│   │   ├── portfolio-data.json # Baseline dynamic store data
│   │   ├── projects.ts      # Static project & skill definitions
│   │   ├── store.server.ts  # Server-only persistence layer
│   │   └── store.ts         # Client-safe types & default state helpers
│   ├── hooks/               # Custom React hooks (scroll animation, theme)
│   ├── routes/              # TanStack Router SSR file-based routes
│   │   ├── __root.tsx       # Root layout, JSON-LD schemas, global providers
│   │   ├── index.tsx        # Homepage route
│   │   ├── method.tsx       # /method delivery deep-dive route
│   │   ├── admin/           # /admin and /admin/login routes
│   │   └── api/             # Server endpoints (chat, admin auth, resume extraction)
│   └── styles.css           # Global Tailwind CSS v4, specular card styles, keyframes
```

---

## 📜 License

Designed & Engineered by **Nagulagam Chanakya**. All rights reserved.
