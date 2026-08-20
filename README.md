# Nagulagam Chanakya — Full-Stack Builder & Founder Portfolio

A high-performance, security-conscious personal portfolio & admin portal built with **TanStack Start (SSR)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

Designed with inspiration from modern motion language, featuring an interactive **Paimon/Gagan-style AI Companion mascot**, an **OpenAI-powered Customer Care Support Chat**, an **Interactive Resume Modal**, an **SSR-Safe Cinematic Page Intro**, and a private **Protected Admin Portal** backed by `.env` credentials.

---

## ✨ Key Features

### 🎬 1. Cinematic Page Intro Animation
- **4.1-second Entrance**: Staggered letter drop-in, sage aura bloom hold, tagline fade-in, and explosion scatter reveal.
- **SSR-Safe (Zero-Flash)**: Rendered directly in server HTML to cover content from frame 0 before client JS hydration.

### 🎭 2. Interactive Companion Mascot
- **3D Developer Avatar**: Vector SVG mascot with glowing eyes, hoodie, glasses, laptop, and orbital dashed ring.
- **Scroll-Velocity Reactive**: Mascot enters a running state (left/right) when scrolling fast.
- **Waving Goodbye**: Full-size character in the footer waving goodbye with precision-anchored shoulder rotation.
- **Sleep State**: Tilts and floats ZZZ bubbles after 45 seconds of idle time.

### 💬 3. Customer Care & AI Assistant Chat Modal
- **OpenAI Integration**: Connected to `/api/chat` using `gpt-4o-mini` with a comprehensive system prompt knowledge base.
- **Offline Fallback**: Responds with structured resume & project answers even if `OPENAI_API_KEY` is not provided.
- **Prebuilt Quick Questions**: One-click action chips (`📄 Resume & Education`, `🚀 Tell me about Trelio`, `💻 Tech stack & skills`, `💼 Open for hiring?`, `📬 How to contact?`).

### 📄 4. Interactive Resume & Credentials Modal
- Full interactive resume viewer with print/PDF support, downloadable PDF resume, email (`nagulagamchanakya2211@gmail.com`), SR University B.Tech CIS (2028), and deep-dive technical details of Trelio SaaS (SHA-256 e-signatures, ABE system, tamper-evident ledgers, AES-256-GCM).
- Accessible via **Desktop Left Rail Sidebar** (below section dot indicators), **Hero CTA**, and **About Section**.

### 🎛️ 5. Private Admin Portal (`/admin` & `/admin/login`)
- **Protected Access**: Credentials isolated in `.env` (`ADMIN_USERNAME`, `ADMIN_PASSWORD`).
- **Session Security**: Cryptographically signed HMAC-SHA256 HTTP-only session cookies with expiration checks.
- **Live Edit Capabilities**: Update projects/experiments, resume details, hero taglines, and live availability badges on the fly.

---

## 🛠️ Tech Stack

- **Framework**: TanStack Start (React SSR) + TanStack Router (File-based routing)
- **UI & Styling**: React 19, Tailwind CSS v4, shadcn/ui, Radix UI Primitives, Lucide Icons, tw-animate-css
- **State & Animations**: React Hooks, CSS Keyframes, SVG Transform-Origin Anchoring, Sonner Toasts
- **Build & Server**: Vite 8, Node.js, TypeScript

---

## 🚀 Getting Started

### 1. Installation

```bash
# Clone repository
git clone https://github.com/Chanakya2006gt/Chanakya_Portfolio.git
cd Chanakya_Portfolio

# Install dependencies
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

Configured variables:

```env
# Site & Hosting Configuration (Vercel Deployment URL)
SITE_URL=https://your-portfolio-domain.vercel.app

# Admin Authentication Credentials (/admin/login)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
ADMIN_SESSION_SECRET=your_random_session_secret_key_here

# OpenAI API Configuration (Customer Care Companion AI Assistant)
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the portfolio.

### 4. Build & Production Commands

```bash
# TypeScript type check
npm run typecheck

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
├── .env.example             # Template for API keys & admin credentials
├── README.md                # General project overview
├── ARCHITECTURE.md          # System architecture & component design
├── SECURITY.md              # Security policies, threat model & practices
├── PRD.md                   # Product Requirements Document
├── src/
│   ├── components/          # UI components (Nav, Hero, About, Projects, Contact)
│   │   ├── mascot/          # Companion SVG, Companion Widget, Chat Modal
│   │   ├── contact-cards.tsx
│   │   ├── hero-stats.tsx
│   │   ├── intro-overlay.tsx
│   │   ├── left-rail-nav.tsx
│   │   ├── marquee-ticker.tsx
│   │   ├── particle-field.tsx
│   │   ├── resume-modal.tsx
│   │   └── trelio-preview.tsx
│   ├── data/
│   │   ├── projects.ts      # Static project & skill definitions
│   │   └── store.ts         # Dynamic JSON data persistence layer
│   ├── hooks/               # Custom React hooks (scroll-spy, velocity, mascot state)
│   ├── routes/              # TanStack Router file-based routes
│   │   ├── __root.tsx       # Root layout & global providers
│   │   ├── index.tsx        # Portfolio home page
│   │   ├── admin/           # Admin login & dashboard routes
│   │   └── api/             # Server API routes (chat, admin auth, data persistence)
│   └── styles.css           # Global Tailwind CSS v4 & custom keyframes
```

---

## 📜 License

Designed & Engineered by **Nagulagam Chanakya**. All rights reserved.
