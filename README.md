# CK Builds — Bespoke Software for Operations & Quoting

A high-performance, security-conscious web application and studio site built with **TanStack Start (SSR)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

Positioned around operational systems: replacing error-prone spreadsheets, WhatsApp chains, and rigid SaaS with custom software built to an exact workflow.

---

## ✨ Key Features

### 🪜 1. Three-Step Process
- **Step 1 · Discovery Call (20 minutes, free)**: Understand how quotes and jobs move today, with an honest assessment of whether custom software makes business sense.
- **Step 2 · Scope & Fixed Quote (Problem-sized)**: Transparent, fixed-price quote and timeline based on workflow complexity before any build begins.
- **Step 3 · Build & Handover (100% Code Handover)**: Deployed to the client's custom domain with complete repository, database, and infrastructure ownership.

### 🏭 2. Verified Systems & Visual Proof
- **Trelio SaaS (`https://trelio.in`)**: Studio product · live. Authorization-before-execution client portal and milestone payment authorization platform.
- **Apex Packaging CPQ**: Reference build · industrial manufacturing. Converting and estimating platform engineered to European FINAT 1–8 rewind standards.

### ❓ 3. Buyer-Facing FAQ & Structured Data
- 5 transparent questions covering pricing (problem-sized on call), code ownership, why generic off-the-shelf tools fail on custom workflows, and onboarding prerequisites.
- Synchronized `ProfessionalService` and `FAQPage` JSON-LD schema for rich search results.

### 💬 4. AI Solutions Assistant (`/api/chat`)
- Floating corner launcher with direct answers on fit, workflow capabilities, and booking.
- Backed by OpenAI (`gpt-5.6-terra`) with offline structured fallback responses.
- In-memory rate limiting and dialogue focus on operational scope and terms.

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
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### 3. Local Development

```bash
npm run dev
```

Visit [http://localhost:8080](http://localhost:8080).

### 4. Verification & Testing

```bash
npm run typecheck
npm run lint
npm run build
```

---

## 🔒 Security & Data Isolation

See [SECURITY.md](SECURITY.md) for full audit reports, session signing implementation, and boot guard invariants.
