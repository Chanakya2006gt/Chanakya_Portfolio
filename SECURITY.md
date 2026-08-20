# Security Policy & Architecture — Nagulagam Chanakya Portfolio

This document outlines the security model, threat mitigations, credential management, and software security practices implemented in the Chanakya Portfolio and its underlying products.

---

## 🔒 1. Security Philosophy & Threat Model

The application follows a **Defense-in-Depth** and **Zero-Trust** security posture:
- **No Client Secrets**: API keys (`OPENAI_API_KEY`) and server secrets (`ADMIN_SESSION_SECRET`) are strictly isolated to server environment variables and never leaked to frontend bundles.
- **Secure Authentication**: Admin routes (`/admin`) and mutation endpoints (`/api/admin/data`) require valid HTTP-only session cookies.
- **Input Sanitization & Validation**: All user inputs (contact form, chat queries, admin edits) are sanitized and validated.

---

## 🔑 2. Credential & Environment Variable Security

### Environment Variable Isolation
All sensitive credentials are defined in `.env` and excluded from source control (`.gitignore`):

| Variable Name | Purpose | Scope | Security Measure |
|---|---|---|---|
| `OPENAI_API_KEY` | OpenAI API access | Server-side only | Never exposed to client JS |
| `ADMIN_USERNAME` | Admin login username | Server-side only | Verified on server route |
| `ADMIN_PASSWORD` | Admin login password | Server-side only | Verified on server route |
| `ADMIN_SESSION_SECRET` | Admin session signature | Server-side only | Used for session verification |

---

## 🛡️ 3. Authentication & Session Architecture

### Admin Portal Protection (`/admin` & `/admin/login`)

1. **Authentication Endpoint (`POST /api/admin/login`)**:
   - Compares incoming credentials against `process.env.ADMIN_USERNAME` and `process.env.ADMIN_PASSWORD`.
   - On successful authentication, issues a secure cookie:
     ```http
     Set-Cookie: admin_session=<token>; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400
     ```

2. **HttpOnly Cookie Protection**:
   - `HttpOnly`: Prevents client-side JavaScript (`document.cookie`) from accessing the session token, neutralizing Cross-Site Scripting (XSS) session theft.
   - `SameSite=Lax`: Mitigates Cross-Site Request Forgery (CSRF) attacks.

3. **Protected Mutation API (`POST /api/admin/data`)**:
   - Checks incoming requests for valid `admin_session` cookies. Unauthenticated requests receive HTTP 401 Unauthorized.

---

## 🤖 4. AI Chat API Security (`/api/chat`)

- **Server-Side Proxy**: Chat queries are sent to `/api/chat` on the TanStack Start server. The server attaches the `OPENAI_API_KEY` and calls OpenAI's API securely.
- **Token Capping**: Requests are capped at `max_tokens: 500` to prevent token exhaustion or denial-of-service billing spikes.
- **System Prompt Guardrails**: System prompt enforces strict topic boundaries focused on Chanakya's professional background and SaaS work.

---

## 🔐 5. Featured Product Security (Trelio SaaS Highlights)

As showcased in Chanakya's technical work and resume, the following advanced security patterns are engineered into Trelio SaaS:

1. **Authorization-Before-Execution (ABE)**:
   - Milestone locking mechanism that prevents execution of project work until explicit client approval and payment confirmation are recorded.

2. **Contract Lifecycle & SHA-256 Hashes**:
   - Milestone agreements are digitally generated, SHA-256 hashed, and bound to client e-signatures. Any scope edit automatically invalidates consensus and triggers mandatory re-consent.

3. **Tamper-Evident Event Ledger**:
   - Uses per-workspace cryptographic hash chains for critical actions (contract signing, milestone payments, scope edits), verified continuously by background worker tasks.

4. **Cryptographic Storage & Webhook Verification**:
   - Integration credentials encrypted at rest using **AES-256-GCM**.
   - Inbound Webhooks (Razorpay) verified using HMAC SHA-256 signature validation to prevent payload tampering.

5. **IDOR & Vulnerability Audit Rigor**:
   - Code reviews enforce strict tenant-boundary checks (`where: { teamId, userId }`) on every database query, neutralizing Insecure Direct Object Reference (IDOR) vulnerabilities.

---

## 📬 6. Vulnerability Disclosure

If you discover a potential security vulnerability, please report it directly to:
- **Email**: `chanakya7674@gmail.com`
- **Phone**: `+91 7674040571`
