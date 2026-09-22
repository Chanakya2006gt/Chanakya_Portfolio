# Product Requirements Document (PRD) — CK Builds

**Product Name**: CK Builds Studio Site & Operations Portal  
**Brand**: CK Builds (Bespoke Software for Operations & Quoting)  
**Status**: Production Ready  
**Target URL**: `https://chanakya-portfolio-orcin.vercel.app` (Canonical Production) / `http://localhost:8080` (Local Dev)

---

## 🎯 1. Executive Summary & Goals

### Primary Commercial Goal
Qualify inbound operational software buyers and drive high-intent consultation call bookings for bespoke quoting engines (CPQ), milestone stage locks, and operational software.

### Key Objectives
1. **Offer Clarity & Transparent Process**: Communicate the 3-step engagement workflow (Discovery Call → Problem-Sized Fixed Quote → Build & Handover) with 100% code and infrastructure ownership.
2. **Empirical Proof of Shipped Systems**: Showcase verified systems: Trelio (live studio product) and Apex Packaging CPQ (industrial converting reference build).
3. **Buyer Trust & Objection Handling**: Address core objections upfront via 5 honest FAQs covering custom software fit, code ownership, and pricing methodology.
4. **Intake Flow**: Provide a streamlined `/book` intake form with direct WhatsApp fallback.
5. **Interactive AI Solutions Assistant**: Provide 24/7 commercial answers via an OpenAI-backed companion widget focused on CK Builds capabilities.

---

## 👥 2. User Personas

| Persona | Description | Primary Goal | Key Feature Used |
|---|---|---|---|
| **Operations Owner / Business Principal** | Plant owner, agency director, contractor, or B2B business owner | Replace spreadsheet/WhatsApp quoting chaos with owned software | Hero CTA, Capabilities, Process, FAQ, Book a call |
| **Technical Evaluator / Due Diligence** | CTO or technical lead evaluating architectural rigor | Verify architecture, security posture, and code craftsmanship | Selected Work Showcases, GitHub Repos |
| **Studio Lead** | Manages inquiries, project pipeline, and content | Receive qualified leads and manage studio data | Private Admin Portal (`/admin`), `/api/contact` |

---

## 🧱 3. Core Features & User Journeys

### User Flow: Inbound Lead
1. Arrives on `/`: reads clear value proposition and proof points.
2. Inspects Selected Work (Trelio studio product & Apex CPQ reference build).
3. Reviews Capabilities & 3-Step Process (Discovery → Fixed Quote → Handover).
4. Clicks `Book a 20-minute call` → navigates to `/book`.
5. Submits inquiry via `/book` form or directly initiates WhatsApp conversation.
