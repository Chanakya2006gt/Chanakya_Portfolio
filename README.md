# ChanBuilds — Quoting & Job Systems for Operating Businesses

A high-performance, security-conscious web application and studio site built with **TanStack Start (SSR)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

Positioned around operational systems: replacing error-prone spreadsheets, WhatsApp chains, and rigid SaaS with custom software built to an exact workflow.

---

## ✨ Key Features

### 🪜 1. Four-Step Process & Workflow Doors
- **Step 1 · Intro Call (20 minutes, free)**: Understand how quotes and jobs move today, with an honest assessment of whether custom software is worth it.
- **Step 2 · Workflow Diagnosis (About 3 days, paid)**: Maps rules and rates, builds one working screen on real data, and provides a written spec with a fixed quote.
- **Step 3 · Build (Up to 8 weeks)**: Weekly check-ins, floor stress testing on real jobs, deployed live on custom domain with full code ownership.
- **Step 4 · Keep It Running (Optional, monthly)**: Ongoing maintenance, dependency updates, and priority operational support.
- **Workflow Doors**: Concrete workflow archetypes representing physical production quoting, milestone stage locks, and B2B commerce.

### 🏭 2. Live Verified Systems & Interactive Proof
- **Apex Packaging CPQ**: Converting & estimating platform reference build with interactive European FINAT 1–8 rewind visualizer, isomorphic linear-meter & substrate math engine, and PostgreSQL Row-Level Security (RLS) policies.
- **Trelio SaaS (`https://trelio.in`)**: Authorization-Before-Execution multi-tenant platform in continuous development since March 2026 (multi-tenant, payments, RLS, audit ledger).

### ❓ 3. Buyer-Facing FAQ & Structured Data
- 10 substantive, transparent questions covering cost, why off-the-shelf tools like Zoho break on custom operations, full code ownership, and timelines.
- Synchronized `FAQPage` JSON-LD schema for rich search results and AI citations.

### 💬 4. AI Solutions Assistant (`/api/chat`)
- Floating corner launcher with prebuilt questions and direct answers on fit and process.
- Backed by OpenAI (`gpt-5.6-terra`) with offline structured fallback responses.
- In-memory rate limiting and dialogue focus on operational scope, diagnosis, and terms.

### 🎛️ 5. Private Admin Portal (`/admin`)
- Protected access with session tokens cryptographically signed via `ADMIN_SESSION_SECRET` (fails closed in production).
- Live editing of content persisted to Vercel Blob and local JSON fallback.

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
OPENAI_MODEL=gpt-5.6-terra

# Vercel Blob Storage (Required in production for dynamic data storage)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_token_here

# Public Contact & Links
PUBLIC_EMAIL=nagulagamchanakya2211@gmail.com
PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/nagulagam-chanakya-b93514315
PUBLIC_GITHUB_URL=https://github.com/Chanakya2006gt
```

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the site.

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
├── SECURITY.md              # Threat model, fail-closed auth, rate limits
├── PRD.md                   # Product Requirements Document
├── scripts/
│   └── patch-bundle.mjs     # Vercel serverless bundle post-processor
├── src/
│   ├── components/          # UI components
│   │   ├── mascot/          # Companion Floating Launcher, Chat Modal
│   │   ├── ui/              # Radix + Tailwind primitive components
│   │   ├── apex-preview.tsx # Interactive FINAT visualizer & CPQ estimator
│   │   ├── faq-section.tsx  # Native accordion FAQ
│   │   ├── hero-quote-card.tsx # Real-time quote preview card
│   │   ├── method-section.tsx # 5-phase delivery breakdown
│   │   ├── offer-ladder.tsx # 4-step process & workflow doors
│   │   ├── portfolio-home.tsx # Homepage root component
│   │   ├── site-nav.tsx     # Sticky navigation header
│   │   ├── theme-toggle.tsx # Light/dark mode toggle
│   │   └── trelio-preview.tsx # Stage lock interactive preview
│   ├── data/
│   │   ├── content.server.ts # Server-only content loader (Vercel Blob / local fallback)
│   │   ├── faqs.ts          # Central FAQ question & answer array (shared with JSON-LD)
│   │   ├── portfolio-data.json # Baseline dynamic store data
│   │   ├── projects.ts      # Static project definitions
│   │   ├── store.server.ts  # Server-only persistence layer
│   │   ├── store.ts         # Client-safe types & default state helpers
│   │   └── studio.ts        # Studio name, founder info, URLs, contacts
│   ├── hooks/               # Custom React hooks (scroll animation, theme)
│   ├── routes/              # TanStack Router SSR file-based routes
│   │   ├── __root.tsx       # Root layout, JSON-LD schemas, global providers
│   │   ├── index.tsx        # Homepage route
│   │   ├── book.tsx         # /book call booking route
│   │   ├── method.tsx       # /method delivery deep-dive route
│   │   ├── admin/           # /admin and /admin/login routes
│   │   └── api/             # Server endpoints (chat, admin auth)
│   └── styles.css           # Global Tailwind CSS v4, specular card styles, keyframes
```

---

## 📜 License

Designed & Engineered by **Nagulagam Chanakya**. All rights reserved.
