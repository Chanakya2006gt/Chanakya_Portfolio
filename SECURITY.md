# Security Policy & Architecture — Chanakya

This document outlines the security model, threat mitigations, credential management, and software security practices implemented in the Chanakya application.

---

## 🔒 1. Security Philosophy & Threat Model

The application follows a **Defense-in-Depth** and **Zero-Trust** security posture:
- **No Client Secrets**: API keys (`OPENAI_API_KEY`, `RESEND_API_KEY`, `BLOB_READ_WRITE_TOKEN`) and server secrets (`ADMIN_SESSION_SECRET`) are strictly isolated to server environment variables and never leaked into client bundles.
- **Fail-Closed Session Architecture**: Admin routes (`/admin`) and mutation endpoints (`/api/admin/data`) require cryptographically valid HMAC-SHA256 session cookies. In production, missing or default session secrets fail closed.
- **Input Sanitization & Rate Limiting**: All user inputs (contact intake, chat queries, admin JSON edits) are validated with strict schemas and protected by rate limiters.
- **Spam Defense**: Honeypot inputs on `/book` accept and discard automated bot payloads without invoking third-party APIs.

---

## 🔑 2. Credential & Environment Variable Security

### Environment Variable Matrix
All sensitive credentials are defined in `.env` and strictly excluded from source control (`.gitignore`):

| Variable Name | Purpose | Scope | Security Policy |
|---|---|---|---|
| `ADMIN_USERNAME` | Admin login username | Server-side only | Verified on `/api/admin/login` |
| `ADMIN_PASSWORD` | Admin login password | Server-side only | Verified on `/api/admin/login` |
| `ADMIN_SESSION_SECRET` | HMAC-SHA256 signature key | Server-side only | **Fails closed in production** if unset |
| `OPENAI_API_KEY` | OpenAI API access token | Server-side only | Never exposed to client JavaScript |
| `OPENAI_MODEL` | Chat completion model (`gpt-5.6-terra`) | Server-side only | Standard completion model for chat |
| `RESEND_API_KEY` | Resend API key | Server-side only | Used by `/api/contact` to deliver enquiries |
| `LEAD_NOTIFY_EMAIL` | Enquiry notification destination | Server-side only | Recipient email address |
| `LEAD_FROM_EMAIL` | Verified sending address | Server-side only | Default: `onboarding@resend.dev` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob read/write token | Server-side only | Optional; for dynamic storage |
| `SITE_URL` | Canonical site origin | Server / Metadata | Non-secret |
| `PUBLIC_EMAIL` | Contact email address | Public / Shared | Non-secret (`nagulagamchanakya2211@gmail.com`) |
| `PUBLIC_WHATSAPP_NUMBER` | Contact WhatsApp number | Public / Shared | Non-secret (`917674040571`) |
| `PUBLIC_WHATSAPP_DISPLAY` | Formatted WhatsApp display | Public / Shared | Non-secret (`+91 76740 40571`) |
| `PUBLIC_GITHUB_URL` | GitHub profile URL | Public / Shared | Non-secret (`https://github.com/Chanakya2006gt`) |

---

## 🛡️ 3. Authentication & Session Architecture

### Admin Portal Protection (`/admin` & `/admin/login`)

1. **Authentication Endpoint (`POST /api/admin/login`)**:
   - Compares incoming credentials against server-side `ADMIN_USERNAME` and `ADMIN_PASSWORD`.
   - On successful authentication, issues a cryptographically signed HMAC-SHA256 token using `ADMIN_SESSION_SECRET`:
     ```http
     Set-Cookie: admin_session=<base64Payload>.<hmacSignature>; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400; Secure
     ```

2. **Fail-Closed Production Defense**:
   - If `ADMIN_SESSION_SECRET` is unset in production, session creation and validation immediately fail closed with an explicit error, preventing default-key forgery.

3. **HttpOnly Cookie Protection**:
   - `HttpOnly`: Prevents client-side JavaScript (`document.cookie`) from accessing the session token, neutralizing Cross-Site Scripting (XSS) session theft.
   - `SameSite=Lax`: Mitigates Cross-Site Request Forgery (CSRF) attacks.
   - `HMAC Signature Verification`: Every protected request (`/api/admin/check`, `POST /api/admin/data`) verifies the cryptographic signature with constant-time equality checks and enforces a 24-hour expiration.

---

## 🤖 4. AI Chat API Security (`/api/chat`)

- **Server-Side Proxy**: Chat queries are processed through the TanStack Start server handler. Client requests never access OpenAI directly.
- **In-Memory Rate Limiting**: Enforces a limit of **20 requests per minute per IP** via an in-memory map. *(Note: On Vercel serverless functions, this limit applies per warm container instance).*
- **Payload Sanitization & Size Caps**:
  - Request history is capped at a maximum of 25 messages.
  - Individual message payloads are truncated to 1,000 characters to prevent prompt-injection bloat and token-exhaustion denial of service.
- **Spend Ceiling Enforcement**: The OpenAI project key must have a hard monthly spend cap configured in the OpenAI dashboard to ensure a bounded cost ceiling.

---

## 📬 5. Vulnerability Disclosure

If you discover a potential security vulnerability, please report it directly to:
- **Email**: `nagulagamchanakya2211@gmail.com`
- **GitHub**: https://github.com/Chanakya2006gt
