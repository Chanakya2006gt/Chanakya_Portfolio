# Architectural Blueprint — Chanakya

This document outlines the architectural blueprint, data flow diagrams, system boundaries, and design principles of Chanakya's personal website and portfolio.

---

## 🏛️ 1. Architecture Overview

The system is built as a hybrid **Server-Side Rendered (SSR) & Client-Side Interactive Web Application** using **TanStack Start** on top of **Vite 8**, **React 19**, and **Nitro (Vercel Preset)**.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Client Browser                                │
│                                                                         │
│  ┌────────────────────┐  ┌──────────────────┐  ┌─────────────────────┐  │
│  │  Portfolio Views   │  │  AI Assistant    │  │     Book Intake     │  │
│  │(Work, Capabilities)│  │  (CompanionChat) │  │  (/book + WhatsApp) │  │
│  └─────────┬──────────┘  └────────┬─────────┘  └──────────┬──────────┘  │
│            │                      │                       │             │
│            └──────────────────────┼───────────────────────┘             │
│                                   │                                     │
│                         React 19 State & Hooks                          │
│                          (useState, useEffect)                          │
│ └───────────────────────────────────┬─────────────────────────────────────┘
│                                     │ HTTP / JSON API
┌───────────────────────────────────▼─────────────────────────────────────┐
│                   TanStack Start Server Engine                          │
│                                                                         │
│  ┌──────────────────────┐ ┌──────────────────────┐ ┌─────────────────┐ │
│  │  /api/contact Route  │ │  /api/chat Handler   │ │ SSR HTML Engine │ │
│  └──────────┬───────────┘ └──────────┬───────────┘ └────────┬────────┘ │
└─────────────┼────────────────────────┼──────────────────────┼───────────┘
              │                        │                      │
┌─────────────▼──────────┐ ┌───────────▼───────────┐ ┌────────▼───────────┐
│   Resend Email Delivery│ │     OpenAI API        │ │   Vercel Blob /     │
│   (/api/contact)       │ │  (gpt-5.6-terra)      │ │  Local Static JSON  │
└────────────────────────┘ └───────────────────────┘ └────────────────────┘
```

---

## 🧭 2. Core Routing Topology

- `/`: Primary landing page (Hero → Selected Work → Capabilities → Process → Standards → FAQ → Contact).
- `/book`: Lead intake form with `/api/contact` email delivery (Resend) and direct WhatsApp fallback.
- `/method`: Clean server-side redirect to `/#how-we-work`.
- `/api/contact`: Lead qualification intake endpoint with Resend email delivery, honeypot spam filtering, and rate limiting (5/hr/IP).
- `/api/chat`: AI assistant with rate-limiting and operational scope system prompt.
- `/api/health`: Synthetic health probe monitoring environment integrity.
- `/admin/*`: Protected internal admin routes.

---

## 🛡️ 3. Security & Invariants

1. **CSP & Security Headers**: Enforced across all routes via Nitro `routeRules` in `vite.config.ts` and `vercel.json` (`default-src 'self'`, nosniff, DENY, strict-origin-when-cross-origin, HSTS). Uses `'unsafe-inline'` in `script-src` for TanStack Start SSR hydration and JSON-LD data scripts; candidate for future upgrade to strict cryptographic nonces.
2. **Zero Client Secret Exposure**: Secrets strictly accessed on server routes via `@/lib/env`.
3. **Failsafe Degradation**: Offline fallbacks for chat and lead intake.
