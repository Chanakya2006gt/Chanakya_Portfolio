# Architectural Blueprint — Nagulagam Chanakya Portfolio

This document outlines the architectural blueprint, data flow diagrams, system boundaries, and design principles of the Chanakya Portfolio application.

---

## 🏛️ 1. Architecture Overview

The system is built as a hybrid **Server-Side Rendered (SSR) & Client-Side Interactive Web Application** using **TanStack Start** on top of **Vite 8**, **React 19**, and **Nitro (Vercel Preset)**.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Client Browser                                │
│                                                                         │
│  ┌────────────────────┐  ┌──────────────────┐  ┌─────────────────────┐  │
│  │ Portfolio UI Views │  │  AI Assistant    │  │  Interactive Modals │  │
│  │(OfferLadder, Apex) │  │  (CompanionChat) │  │  (Resume, Dialogs)  │  │
│  └─────────┬──────────┘  └────────┬─────────┘  └──────────┬──────────┘  │
│            │                      │                       │             │
│            └──────────────────────┼───────────────────────┘             │
│                                   │                                     │
│                         React 19 State & Hooks                          │
│                      (useScrollAnimation, useState)                     │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │ HTTP / JSON API
┌───────────────────────────────────▼─────────────────────────────────────┐
│                   TanStack Start Server Engine                          │
│                                                                         │
│  ┌──────────────────────┐ ┌──────────────────────┐ ┌─────────────────┐ │
│  │  /api/chat Handler   │ │ /api/admin/* Handler │ │ SSR HTML Engine │ │
│  └──────────┬───────────┘ └──────────┬───────────┘ └─────────────────┘ │
└─────────────┼────────────────────────┼──────────────────────────────────┘
              │                        │
              ▼                        ▼
      ┌───────────────┐      ┌───────────────────┐
      │  OpenAI API   │      │ Vercel Blob Store │
      │(gpt-5.6-terra)│      │(w/ JSON Fallback) │
      └───────────────┘      └───────────────────┘
```

---

## ⚠️ 2. Client/Server Boundary — Read Before Editing `src/data/`

A hard boundary exists between client-bundled modules and server-only runtime files:

- **Client-Safe Modules (`src/data/store.ts`, `src/data/projects.ts`, `src/data/faqs.ts`)**:
  - Imported by route loaders, components, and client bundles.
  - **INVARIANT**: Never import `node:fs`, `node:path`, `process`, `@vercel/blob`, or server secrets into these files. Doing so causes runtime `Uncaught ReferenceError: process is not defined` errors in the browser.
- **Server-Only Modules (`src/data/store.server.ts`, `src/data/content.server.ts`)**:
  - Execute only inside Nitro server handlers and TanStack Start server functions.
  - Safely interact with `@vercel/blob`, filesystem fallback, and environment secrets (`ADMIN_SESSION_SECRET`, `OPENAI_API_KEY`).

---

## 🧩 3. Layer & Component Breakdown

### A. Presentation Layer (`src/components/`)
- `PortfolioHome`: Main page container coordinating the 6 core sections: Hero, OfferLadder, LiveSystems, TrustAndTerms, FaqSection, and Contact.
- `SiteNav`: Sticky header with responsive navigation sheet and active section triggers.
- `OfferLadder`: Three-tier fixed-price engagement model (`₹20,000 Diagnosis` → `Fixed Quote from Diagnosis` → `₹20k–₹35k Care Retainer`) with 3 workflow doors.
- `ApexPreview`: Interactive European FINAT 1–8 visualizer, isomorphic linear-meter math, and 43 PostgreSQL RLS policies.
- `TrelioPreview`: Live interactive milestone stage-lock state machine for authorization-before-execution.
- `FaqSection`: Native `<details>/<summary>` accordion rendering 8 substantive buyer questions.
- `ResumeModal`: Interactive full-screen resume viewer with Print/PDF support.

### B. AI Solutions Assistant (`src/components/mascot/` & `src/routes/api/chat.ts`)
- `Companion`: Fixed floating launcher button with contextual speech bubbles.
- `CompanionChat`: Slide-up modal with direct pricing answers, quick question chips, and dialog accessibility controls (`role="dialog"`, Escape key dismissal, focus trap).
- `CompanionSvg`: Vector SVG avatar with precision-anchored shoulder rotation.

### C. Server API & Content Pipeline (`src/routes/api/` & `src/data/`)
- `/api/chat`: Handles chat completions via OpenAI `gpt-5.6-terra` using the commercial positioning knowledge base and in-memory rate limiting.
- `/api/admin/login`, `/api/admin/logout`, `/api/admin/check`: Admin authentication backed by cryptographically signed HMAC-SHA256 session cookies.
- `/api/admin/data`: Fetches and updates dynamic portfolio content.
- `/api/admin/resume`: Multi-page PDF upload → `@vercel/blob` storage → multi-page vision OCR & structured extraction via `gpt-5.6-terra` → PII redaction.

---

## 🔄 4. Data Flow Diagrams

### AI Assistant Chat Flow

```
[User clicks Quick Chip / Types Question]
                    │
                    ▼
          [CompanionChat Component]
                    │
                    ▼ POST /api/chat { messages }
         [TanStack Server Route Handler]
                    │
           Is OPENAI_API_KEY set?
            ├── YES ──► [Call OpenAI API (gpt-5.6-terra)]
            │                │
            │                ▼
            │           [Return Assistant Reply]
            │
            └── NO  ──► [Process Local Structured Fallback]
                             │
                             ▼
                        [Return Structured Fallback]
                    │
                    ▼
          [Render Reply in Chat Feed]
```

### Admin Content Persistence Flow

```
[Admin Edits Data in /admin Dashboard]
                    │
                    ▼ POST /api/admin/data (with admin_session cookie)
         [Validate HMAC-SHA256 Cookie]
                    │
       Is BLOB_READ_WRITE_TOKEN active?
        ├── YES ──► Write to @vercel/blob (portfolio-data.json)
        │
        └── NO  ──► Write to local disk fallback (src/data/portfolio-data.json)
                    │
                    ▼
       [Return Updated Dynamic Data Object]
```

---

## ⚡ 5. Performance & Build Pipeline

1. **Composite Build Process**:
   - Stage 1: `tsc --noEmit` ensures 100% strict TypeScript compliance.
   - Stage 2: `vite build` creates both client assets and Nitro serverless output.
   - Stage 3: `patch-bundle.mjs` scans `.vercel/output/` and inlines bare `tslib` helpers to prevent serverless import resolution failures.
2. **GPU-Accelerated Keyframes**: All animations (`card-specular` hover, `rise-in`, chevron rotation) operate on compositor-only properties (`transform`, `opacity`).
3. **Viewport-Independent IntersectionObserver**: Configured with `threshold: 0` and `rootMargin: "0px 0px -12% 0px"` to guarantee reliable reveals across all viewport heights.
