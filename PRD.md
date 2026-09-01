# Product Requirements Document (PRD) — Nagulagam Chanakya Portfolio

**Product Name**: Nagulagam Chanakya Portfolio & Operating Systems Portal  
**Owner**: Nagulagam Chanakya (Software Engineer & Founder)  
**Status**: Production Ready  
**Target URL**: `https://chanakya-portfolio-orcin.vercel.app` (Canonical Production) / `http://localhost:8080` (Local Dev)

---

## 🎯 1. Executive Summary & Goals

### Primary Commercial Goal
Qualify inbound operational software buyers and sell **₹20,000 paid diagnoses** (100% credited against 15-day custom builds) to businesses seeking custom quote-to-job, milestone-locking, or B2B commerce workflows.

### Key Objectives
1. **Offer Clarity & Price Transparency**: Clearly communicate the 3-step engagement ladder (₹20,000 Paid Diagnosis → Fixed Quote from Diagnosis → Optional Care Retainer) without floor-anchor traps or ambiguity.
2. **Empirical Proof of Shipped Systems**: Showcase real production systems (Apex Packaging CPQ with FINAT 1–8 visualizer & 43 RLS policies; Trelio SaaS with 623 commits and direct bank settlement).
3. **Market Truth & Buyer Trust**: Address common objections upfront via an 8-question FAQ covering code ownership, 15-day timeline guarantees, and when off-the-shelf software like Zoho breaks.
4. **Interactive AI Solutions Assistant**: Provide 24/7 commercial answers via an OpenAI-backed (`gpt-5.6-terra`) companion widget.
5. **Private Content Management**: Maintain an authenticated `/admin` portal for editing availability status, project details, and processing résumé updates.

---

## 👥 2. User Personas

| Persona | Description | Primary Goal | Key Feature Used |
|---|---|---|---|
| **Operations Owner / Business Principal** | Plant owner, agency director, contractor, or B2B business owner | Replace spreadsheet/WhatsApp quoting chaos with owned software | Hero CTA, Offer Ladder, FAQ, Contact Modal |
| **Technical Evaluator / Due Diligence** | CTO, senior engineer, or technical co-founder evaluating rigor | Verify architecture, security posture, and code craftsmanship | Live Systems Previews, Method Page (`/method`), GitHub Repos |
| **Site Owner (Chanakya)** | Manages commercial availability, content, and pipeline | Update availability status, project data, and résumé PDF | Private Admin Portal (`/admin`) |

---

## 📋 3. Core Feature Requirements Matrix

| ID | Feature | Priority | Description | Status |
|---|---|---|---|---|
| **FR-01** | Hero & Positioning Header | **P0** | Crisp value-first header ("Quotes and jobs shouldn't live on WhatsApp"), live capacity badge, and primary CTA. | ✅ Delivered |
| **FR-02** | Three-Tier Offer Ladder | **P0** | Step 1 (₹20,000 Diagnosis), Step 2 (Fixed Quote from Diagnosis), Step 3 (Care Retainer), with 3 workflow doors. | ✅ Delivered |
| **FR-03** | Apex Packaging CPQ Preview | **P0** | Interactive FINAT 1–8 rewind visualizer, isomorphic linear-meter estimator, and 43 RLS policies proof metric. | ✅ Delivered |
| **FR-04** | Trelio Platform Preview | **P0** | Interactive milestone stage-lock state machine, direct merchant settlement breakdown, and verified test suites. | ✅ Delivered |
| **FR-05** | Buyer-Facing FAQ Section | **P0** | Native `<details>` accordion with 8 substantive questions and synchronized `FAQPage` JSON-LD schema. | ✅ Delivered |
| **FR-06** | The 15-Day Method Route | **P0** | Dedicated `/method` page detailing the 5-phase fixed-price delivery lifecycle from diagnosis to handover. | ✅ Delivered |
| **FR-07** | AI Solutions Assistant | **P0** | Floating launcher widget connected to `/api/chat` (`gpt-5.6-terra`) with prebuilt quick questions and offline fallback. | ✅ Delivered |
| **FR-08** | Private Admin Portal | **P0** | Authenticated management dashboard (`/admin`) with fail-closed HMAC session tokens and Vercel Blob persistence. | ✅ Delivered |
| **FR-09** | Résumé AI Extraction Pipeline | **P1** | Multi-page PDF upload with vision OCR extraction (`gpt-5.6-terra`) and automated PII sanitization. | ✅ Delivered |
| **FR-10** | Dual-Theme Support | **P1** | WCAG AAA compliant dark and light modes with theme toggle and zero contrast wash-out. | ✅ Delivered |

---

## ⚡ 4. Non-Functional Requirements (NFRs)

### 1. Performance & Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 1.2s.
- **CLS (Cumulative Layout Shift)**: 0.00 (all dynamic hover states use compositor-only `transform: translateY(-3px)`).
- **Smooth 60fps Scroll**: Optimized IntersectionObserver reveals that detach once visible.

### 2. Security & Data Isolation
- Zero secrets committed or bundled into client code.
- Cryptographically signed HMAC-SHA256 session cookies with fail-closed production enforcement.
- Strict client/server boundary in `src/data/` preventing `node:*` or `@vercel/blob` leaks to client bundles.

### 3. Accessibility & SEO
- WCAG 2.2 Level AA compliance with full keyboard navigation and skip-to-content links.
- Rich Schema.org Knowledge Graph (`Person`, `Organization`, `SoftwareApplication`, `FAQPage`).
