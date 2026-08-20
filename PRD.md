# Product Requirements Document (PRD) — Nagulagam Chanakya Portfolio

**Product Name**: Nagulagam Chanakya Portfolio & Admin Portal  
**Owner**: Nagulagam Chanakya (Full-Stack Builder & Founder)  
**Status**: Released / Production Ready  
**Target URL**: `http://localhost:8080` (Local Dev) / Custom Domain (Production)

---

## 🎯 1. Executive Summary & Goals

### Goal
Build a high-performance, security-first personal portfolio and admin management portal that presents Nagulagam Chanakya's professional identity, technical skills, resume credentials, and flagship SaaS product (**Trelio**) with motion inspiration.

### Key Objectives
1. **Differentiate**: Stand out with a 4.1s cinematic intro overlay, an interactive Paimon/Gagan-style mascot companion, and an OpenAI-backed Customer Care Assistant.
2. **Showcase Engineering Depth**: Detail the full security architecture of Trelio SaaS (SHA-256 contracts, tamper-evident hash ledgers, AES-256-GCM, ABE milestone system).
3. **Interactive Resume Experience**: Provide instant access to Chanakya's full resume via a dedicated modal with print/PDF support and multi-location triggers (Left Rail Sidebar below dots, Hero CTA, About section).
4. **Empower Owner via Admin Dashboard**: Provide a protected `/admin` portal authenticated via `.env` credentials to update projects, experiments, resume info, and availability status on the fly.

---

## 👥 2. User Personas

| Persona | Description | Primary Goal | Key Feature Used |
|---|---|---|---|
| **Recruiter / Hiring Manager** | Evaluates software engineers for full-time roles | Quickly assess technical stack, experience, and view/print resume | Hero CTA, Resume Modal, Left Rail Nav |
| **Potential Client / Customer** | Looking for software engineering or SaaS solutions | Learn about Trelio SaaS, check security standards, get in touch | Projects Section, Companion Chatbot, Contact Cards |
| **Engineering Collaborator** | Technical peer evaluating architecture and code rigor | Deep-dive into architecture, security protocols, and tech stack | Trelio Technical Breakdown, Skills Section |
| **Site Owner (Chanakya)** | Manages portfolio content and availability status | Update project cards, resume details, and availability badges | Private Admin Portal (`/admin`) |

---

## 📋 3. Feature Requirements Matrix

| ID | Feature | Priority | Description | Status |
|---|---|---|---|---|
| **FR-01** | Cinematic Intro Animation | **P0** | Fullscreen 4.1s letter drop-in, sage glow bloom hold, tagline fade-in, and explosion scatter reveal. SSR-safe zero-flash initial paint. | ✅ Delivered |
| **FR-02** | Hero Section & Particle Background | **P0** | Heading, bio, availability badge with blinking dot, stats row, ambient particle field background, and CTA buttons. | ✅ Delivered |
| **FR-03** | Desktop Left Rail Sidebar | **P0** | Fixed vertical navigation bar with social icons, active section scroll-spy indicator dots, and **Resume trigger icon below dots**. | ✅ Delivered |
| **FR-04** | Interactive Resume Modal | **P0** | Interactive full-screen resume viewer displaying SR University education, tech skills, Trelio deep dive, and Print/PDF button. | ✅ Delivered |
| **FR-05** | Interactive Mascot Companion | **P0** | Vector SVG mascot character with velocity scroll detection (runs left/right), sleep state (tilts + ZZZs after 45s idle), and full-size footer wave animation. | ✅ Delivered |
| **FR-06** | Waving Arm Precision Anchor | **P0** | Waving arm path re-aligned with explicit shoulder `transformOrigin: "72px 68px"` so the hand stays attached to the body inside the orbital frame. | ✅ Delivered |
| **FR-07** | Customer Care AI Assistant | **P0** | Slide-up chat modal connected to `/api/chat` with OpenAI `gpt-4o-mini`, system prompt knowledge base, offline fallbacks, and 5 prebuilt question chips. | ✅ Delivered |
| **FR-08** | Admin Login Page (`/admin/login`) | **P0** | Dark glassmorphic login page validating against `ADMIN_USERNAME` and `ADMIN_PASSWORD` in `.env` and setting HttpOnly cookie. | ✅ Delivered |
| **FR-09** | Admin Dashboard (`/admin`) | **P0** | Protected management dashboard for editing projects/experiments, resume details, hero taglines, and availability status. | ✅ Delivered |
| **FR-10** | `.env.example` Template | **P0** | Configuration template covering `OPENAI_API_KEY`, `OPENAI_MODEL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET`. | ✅ Delivered |
| **FR-11** | Open Graph & Social Sharing | **P1** | Full Open Graph (`og:image`, `og:title`, `og:description`) and Twitter card meta tags referencing `/og.jpg`. | ✅ Delivered |
| **FR-12** | Contact Section & Cards | **P1** | 4-column contact link cards + validated direct note dialog with `sonner` toast feedback. | ✅ Delivered |

---

## ⚡ 4. Non-Functional Requirements (NFRs)

### 1. Performance
- **First Contentful Paint (FCP)**: < 1.2s.
- **SSR Overlay Efficiency**: Solid black background renders in server HTML to eliminate visual flashes.
- **60 FPS Motion**: Animations use CSS `transform` and `opacity` properties to leverage hardware GPU acceleration.

### 2. Security
- **Credential Storage**: Zero secrets in frontend code; all keys stored in `.env`.
- **Session Management**: Admin session cookie configured as `HttpOnly; Path=/; SameSite=Lax`.
- **API Proxying**: OpenAI API requests proxied through server handler `/api/chat` with token capping (`max_tokens: 500`).

### 3. Accessibility & Responsiveness
- Responsive layout supporting viewports from **320px (mobile)** to **2560px (ultra-wide desktop)**.
- High-contrast text compliance matching WCAG 2.1 AA guidelines.
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`).

---

## 📅 5. Delivery Status & Verification

- **TypeScript Compilation**: Executed `tsc --noEmit` — passed with **0 errors**.
- **Dev Server**: Active and running at `http://localhost:8080`.
- **Documentation**: All 4 specifications (`README.md`, `ARCHITECTURE.md`, `SECURITY.md`, `PRD.md`) written and verified.
