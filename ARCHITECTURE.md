# Architectural Blueprint — CK Builds

This document outlines the architectural blueprint, data flow diagrams, system boundaries, and design principles of the CK Builds application.

---

## 🏛️ 1. Architecture Overview

The system is built as a hybrid **Server-Side Rendered (SSR) & Client-Side Interactive Web Application** using **TanStack Start** on top of **Vite 8**, **React 19**, and **Nitro (Vercel Preset)**.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Client Browser                                │
│                                                                         │
│  ┌────────────────────┐  ┌──────────────────┐  ┌─────────────────────┐  │
│  │  CK Builds Views   │  │  AI Assistant    │  │     Book Intake     │  │
│  │(Work, Capabilities)│  │  (CompanionChat) │  │  (/book + WhatsApp) │  │
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
│  │  /api/contact Route  │ │  /api/chat Handler   │ │ SSR HTML Engine │ │
│  └──────────┬───────────┘ └──────────┬───────────┘ └────────┬────────┘ │
└─────────────┼────────────────────────┼──────────────────────┼───────────┘
              │                        │                      │
┌─────────────▼──────────┐ ┌───────────▼───────────┐ ┌────────▼───────────┐
│     Structured Lead    │ │     OpenAI API        │ │   Vercel Blob /     │
│    Intake & Logging    │ │  (gpt-5.6-terra)      │ │  Local Static JSON  │
└────────────────────────┘ └───────────────────────┘ └────────────────────┘
```

---

## 🧭 2. Core Routing Topology

- `/`: Primary landing page (Hero → Selected Work → Capabilities → Process → Standards → FAQ → Contact).
- `/book`: Lead intake form with `/api/contact` submission and direct WhatsApp fallback.
- `/method`: Clean server-side redirect to `/#how-we-work`.
- `/api/contact`: Lead qualification intake endpoint.
- `/api/chat`: AI Solutions assistant with rate-limiting and CK Builds system prompt.
- `/api/health`: Synthetic health probe monitoring environment integrity.
- `/admin/*`: Protected internal admin routes.

---

## 🛡️ 3. Security & Invariants

1. **CSP & Security Headers**: Enforced across all routes.
2. **Zero Client Secret Exposure**: Secrets strictly accessed on server routes via `@/lib/env`.
3. **Failsafe Degradation**: Offline fallbacks for chat and lead intake.
