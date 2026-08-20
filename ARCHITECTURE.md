# Architectural Blueprint — Nagulagam Chanakya Portfolio

This document outlines the architectural blueprint, data flow diagrams, system boundaries, and design principles of the Chanakya Portfolio application.

---

## 🏛️ 1. Architecture Overview

The system is built as a hybrid **Server-Side Rendered (SSR) & Client-Side Interactive Web Application** using **TanStack Start** on top of **Vite 8** and **React 19**.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Client Browser                                │
│                                                                         │
│  ┌────────────────────┐  ┌──────────────────┐  ┌─────────────────────┐  │
│  │ Portfolio UI Views │  │ Companion Mascot │  │  Resume & Intro UI  │  │
│  └─────────┬──────────┘  └────────┬─────────┘  └──────────┬──────────┘  │
│            │                      │                       │             │
│            └──────────────────────┼───────────────────────┘             │
│                                   │                                     │
│                         React 19 State & Hooks                          │
│        (useActiveSection, useScrollVelocity, useMascotState)           │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │ HTTP / JSON API
┌───────────────────────────────────▼─────────────────────────────────────┐
│                   TanStack Start Server Engine                          │
│                                                                         │
│  ┌──────────────────────┐ ┌──────────────────────┐ ┌─────────────────┐ │
│  │  /api/chat Handler   │ │ /api/admin/* Handler │ │ SSR HTML Generator│
│  └──────────┬───────────┘ └──────────┬───────────┘ └─────────────────┘ │
└─────────────┼────────────────────────┼──────────────────────────────────┘
              │                        │
              ▼                        ▼
      ┌───────────────┐      ┌───────────────────┐
      │  OpenAI API   │      │ Local JSON Store  │
      │ (gpt-4o-mini) │      │ (portfolio-data)  │
      └───────────────┘      └───────────────────┘
```

---

## 🧩 2. Layer & Component Breakdown

### A. Presentation Layer (`src/components/`)
- `PortfolioHome`: Main page container coordinating all portfolio sections (Hero, About, Projects, Skills, Contact, Footer).
- `SiteNav`: Sticky header with responsive navigation sheet and scroll-spy active link indicators.
- `LeftRailNav`: Fixed desktop vertical sidebar containing social icons, section scroll dots, and the **Resume trigger icon**.
- `IntroOverlay`: Fullscreen SSR-safe cinematic entrance overlay animating the letters of "CHANAKYA" with sage aura bloom.
- `ParticleField`: GPU-accelerated ambient particle background renderer.
- `MarqueeTicker`: Infinite scrolling text strip separator for skills and taglines.
- `ContactCards`: 4-column link grid with hover glow effects.
- `ResumeModal`: Interactive full-screen resume viewer with Print/PDF support.

### B. AI Companion Layer (`src/components/mascot/`)
- `CompanionSvg`: Vector SVG avatar with precision-anchored shoulder rotation (`transformOrigin: "72px 68px"`).
- `Companion`: Floating corner widget button handling idle, hover, jump, sleep, and footer waving states.
- `CompanionChat`: Slide-up Customer Care chat modal with prebuilt question chips and chat feed.

### C. Hook & State Layer (`src/hooks/`)
- `useActiveSection`: IntersectionObserver/scroll-position observer tracking active navigation section.
- `useScrollVelocity`: Calculates real-time scroll velocity and direction for mascot running states.
- `useMascotState`: State machine managing mascot states (`idle`, `run-left`, `run-right`, `jump`, `wave`, `sleep`).
- `useScrollAnimation`: Triggers section reveal animations as components enter the viewport.

### D. Server API & Data Layer (`src/routes/api/` & `src/data/`)
- `/api/chat`: Handles chat completions via OpenAI `https://api.openai.com/v1/chat/completions` using `CHANAKYA_KNOWLEDGE_BASE` system prompt, with offline fallback responses.
- `/api/admin/login`: Authenticates credentials against `.env` variables and issues an `HttpOnly` session cookie.
- `/api/admin/logout`: Clears the admin session cookie.
- `/api/admin/check`: Validates active admin session cookie.
- `/api/admin/data`: Fetches and updates dynamic portfolio content (`store.ts`).

---

## 🔄 3. Data Flow Diagrams

### AI Customer Care Support Chat Flow

```
[User clicks Prebuilt Chip / Types Question]
                    │
                    ▼
          [CompanionChat Component]
                    │
                    ▼ POST /api/chat { messages }
         [TanStack Server Route Handler]
                    │
           Is OPENAI_API_KEY set?
            ├── YES ──► [Call OpenAI API (gpt-4o-mini)]
            │                │
            │                ▼
            │           [Return GPT Answer]
            │
            └── NO  ──► [Process Local Fallback Knowledge Base]
                             │
                             ▼
                        [Return Local Answer]
                    │
                    ▼
          [Render Reply in Chat Feed]
```

### Admin Authentication & Content Management Flow

```
[Admin visits /admin/login]
            │
            ▼ Enters Username & Password
[POST /api/admin/login]
            │
   Verify against .env (ADMIN_USERNAME & ADMIN_PASSWORD)
            │
   Success ─┼─► Set Cookie: admin_session=<token>; HttpOnly; SameSite=Lax
            │   Redirect to /admin
            │
[Admin Dashboard /admin]
            │
   On Mount ──► GET /api/admin/check ──► Valid Cookie?
            │                                ├── YES ──► Load /api/admin/data
            │                                └── NO  ──► Redirect to /admin/login
            │
   Save Edits ──► POST /api/admin/data (with admin_session cookie)
            │
            ▼
   Save to src/data/portfolio-data.json
```

---

## ⚡ 4. Performance Optimizations

1. **Zero-Flash SSR Intro**: The `IntroOverlay` component renders its solid `#0a0a0b` background in initial server HTML, preventing any flash of unstyled content during hydration.
2. **GPU-Accelerated Keyframes**: All animations (floating particles, marquee scroll, aura glow bloom, mascot wave) use CSS `transform` and `opacity` properties to maximize 60fps GPU layer rendering.
3. **SVG Transform-Origin Anchoring**: Explicit SVG coordinate transform origins (`72px 68px`) prevent layout recalculations and DOM disconnections during rotation animations.
