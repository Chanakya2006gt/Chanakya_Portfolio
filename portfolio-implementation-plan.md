# Implementation Plan — Portfolio Security & Backend Fixes

Companion to `portfolio-review.md`. Each item lists the file(s), the exact change, why, and how to verify. Ordered by priority. Nothing here has been applied — this is the plan for you to approve.

**Legend:** 🔴 Critical · 🟠 High · 🟡 Medium · ⚪ Low
**Effort:** S = <30 min · M = 30–90 min · L = half-day+

---

## Phase 0 — Prep (do first)

1. **Branch.** `git checkout -b hardening/security-pass`
2. **Baseline.** `npm run typecheck && npm run lint && npm test` so you know the starting state is green before you touch anything.
3. **Confirm the prod env is set.** In Vercel project settings verify `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` (32+ chars), and `DATABASE_URL` are all present. Several fixes below depend on these being real.

---

## Phase 1 — 🔴 Critical

### C1 — Remove the hardcoded session-secret fallback · `src/lib/auth-session.ts` · S
**Change:** In `getSessionSecret()`, stop returning the literal `"dev-local-session-secret-fallback-chanakya-2026"`. Instead:
- If `ADMIN_SESSION_SECRET` is missing or is the placeholder, **throw** in production (`process.env.NODE_ENV === "production" || process.env.VERCEL`).
- Only in local dev may it fall back — and if so, generate a per-process random secret (`crypto.randomBytes(32).toString("hex")` cached on `globalThis`) rather than a committed constant. A random dev secret just means dev sessions reset on restart, which is fine.
- Add `assertEnvGuards()` (or an inline secret check) to the **verify path** too, so `api/admin/check.ts` and `api/admin/data.ts` can never verify against a fallback. Simplest: have `verifySignedSessionToken` call `getSessionSecret()` which now throws when unset in prod.

**Why:** the committed constant is a public key that both signs and verifies admin cookies; a misconfigured deploy makes admin forgeable.
**Verify:** locally unset `ADMIN_SESSION_SECRET` with `NODE_ENV=production npm run build` → server should refuse rather than accept a forged cookie. With the secret set, login → `/api/admin/check` still returns `authenticated: true`.

---

## Phase 2 — 🟠 High

### H2 — Lock down `/api/chat` · `src/routes/api/chat.ts` (+ new `src/lib/rate-limit.ts`) · M
**Changes:**
1. **Validate input.** Before calling OpenAI, enforce a schema (you already depend on `zod`):
   - `messages` is an array, length ≤ 20.
   - every element `{ role: "user" | "assistant", content: string }`, `content` length ≤ 2000, total payload ≤ ~8 KB.
   - Reject anything else with `400`. This kills the "inject your own system prompt / use as free proxy" vector — the server always supplies the single `system` message.
2. **Rate limit.** Add a per-IP limiter keyed on `x-forwarded-for`. Two options:
   - **Durable (recommended for Vercel):** Upstash Redis / Vercel KV, sliding window e.g. 10 req/min/IP and a daily cap.
   - **Zero-dependency stopgap:** in-memory token bucket on `globalThis` (per warm instance). Not perfect across instances but stops trivial abuse. Put it in `src/lib/rate-limit.ts` so it's swappable.
   - On limit exceeded return `429` with a short JSON message.
3. **Keep** `max_completion_tokens: 500`.

**Why:** currently unauthenticated, unthrottled OpenAI billing exposure + guardrail bypass.
**Verify:** curl the endpoint with a bogus `messages` shape → `400`; hammer it >10×/min → `429`; normal single question still answers.

### H3 — Move admin-editable content off the filesystem · `src/data/store.ts`, new migration, `src/routes/api/admin/data.ts` · L
**Problem:** `savePortfolioData()` does `fs.writeFileSync` — read-only/ephemeral on Vercel, so saves fail or vanish.
**Change (DB-backed, matches your existing Neon/PGLite setup):**
1. New migration `migrations/0002_portfolio_content.sql`:
   ```sql
   create table if not exists portfolio_content (
     id text primary key default 'singleton',
     data jsonb not null,
     updated_at timestamptz not null default now()
   );
   ```
2. Rewrite `store.ts` to be async and use `getSql()`:
   - `getPortfolioData()` → `select data from portfolio_content where id='singleton'`; if no row, return the current hardcoded defaults (seed on first write).
   - `savePortfolioData(data)` → `insert ... on conflict (id) do update set data=$1, updated_at=now()`.
3. Update callers to `await` (they're in server route handlers already — `api/admin/data.ts`, `api/chat.ts` via `getPortfolioData()`), so make those handlers await.
**Alternative (smaller, if you want to keep it simple):** accept that the admin panel is a **local-dev-only** tool, gate the whole `/admin` UI + `/api/admin/*` write behind `dbSource`/dev check, and edit `portfolio-data.json` in the repo + redeploy for content changes. Cheaper but loses live editing.
**Why:** the CMS silently doesn't work in production today.
**Verify:** deploy preview → log into admin → Save → refresh → change persists; check the row in Neon.

---

## Phase 3 — 🟡 Medium

### M4 — Rate-limit / lock out admin login · `src/routes/api/admin/login.ts` · S
Reuse the `src/lib/rate-limit.ts` from H2. Limit by IP (e.g. 5 attempts / 15 min, then `429`). Optionally add a small fixed delay on failure. **Verify:** 6 bad logins in a row → `429`.

### M5 — Hash the admin password + constant-time compare · `src/routes/api/admin/login.ts`, `.env.example`, `SECURITY.md` · M
- Store `ADMIN_PASSWORD_HASH` (scrypt or argon2) instead of plaintext `ADMIN_PASSWORD`. Node's built-in `crypto.scrypt` avoids a new dependency.
- Provide a tiny `scripts/hash-password.mjs` so you can generate the hash once.
- Compare with `crypto.timingSafeEqual` on the derived keys; compare username with `timingSafeEqual` too (pad/normalize length).
- Update `.env.example` and the boot-guard (`ENV_SPECS`) to expect `ADMIN_PASSWORD_HASH`.
**Verify:** login works with the hashed value; wrong password → `401`.

### M6 — Fix `env.ts` disk re-reads + use the dead cache · `src/lib/env.ts` · S
- Check `process.env[key]` **first** (that's the prod path on Vercel) and return early.
- Load+parse `.env` **once**, memoize into the already-declared `envCache` (or a module-level `let parsed`), and reuse. Only re-read on an explicit dev flag if you want live `.env` edits.
**Why:** ~7 synchronous file reads per chat request today.
**Verify:** add a temporary counter/log around the file read → confirm it runs once, not per call. `npm test` still green.

### M7 — Pin a real OpenAI model · `src/routes/api/chat.ts`, `.env.example`, `boot-guards.ts` · S
Replace the `gpt-5.6-terra` default with a real current model id (confirm the exact id in the OpenAI dashboard at implementation time). Align the `.env.example` value and the boot-guard comment (which says `gpt-4o`). **Verify:** with a real key set, a chat request returns a live reply instead of the canned fallback.

### M8 — Fix the broken password `htmlFor` · `src/routes/admin/login.tsx` · S
Change `<Label htmlFor="password text-xs font-medium text-foreground">` to `<Label htmlFor="password" className="text-xs font-medium text-foreground">` (mirror the username label above it). **Verify:** clicking the "Password" label focuses the field; axe/Lighthouse a11y no longer flags an orphaned label.

---

## Phase 4 — ⚪ Low / cleanup

- **L9 — Gate `GET /api/admin/data`** behind the same session check as POST, or strip private fields (`resumeOverride.phone`) from the public response. `src/routes/api/admin/data.ts` · S
- **L10 — Trim `/api/health`.** Return `{status}` only, or require a `?token=`/header. Stop disclosing which env vars are set. `src/routes/api/health.ts` · S
- **L11 — Generic client error for chat.** Return a fixed "The assistant is temporarily unavailable" and keep upstream detail in server logs only. `src/routes/api/chat.ts` · S
- **L12 — Add `rel="noopener noreferrer"`** to every `target="_blank"` in `portfolio-home.tsx`, `left-rail-nav.tsx`, `resume-modal.tsx`, `admin/index.tsx`. · S
- **L13 — Use `createClearCookieHeader()`** in `logout.ts` instead of the hand-written cookie string, so attributes stay in sync. · S
- **L14 — Reconcile `SECURITY.md`** with actual behavior: the `Secure` flag is conditional, and chat input is (after H2) validated — update wording so the doc isn't a false assurance. · S

---

## Phase 5 — Architecture cleanup (optional, separate PR)

- **Decide on Better Auth.** If you're not adding visitor sign-in, remove the unused `src/lib/auth/*` Grok federation stack, `api/auth/$.ts`, and `migrations/0001_auth.sql`'s auth tables — it's live attack surface you don't use. If you *are* keeping it for a future feature, leave it but document that it's dormant. · L
- **Strip Grok-sandbox branding** before this is your "official" portfolio: `public/__grok/*`, `server/middleware/grok-pwa.ts`, the `__grok` manifest/apple-touch-icon links in `__root.tsx`, and the Grok install page. Replace with your own PWA manifest + icons. · M
- **Split `portfolio-home.tsx`** (675 lines) into section components (`Hero`, `Projects`, `SideProjects`, `Contact`). Pure refactor. · M
- **Add a leveled logger** and drop stray `console.*` (17 across `src`) from prod paths. · S

---

## Suggested PR sequencing
1. **PR 1 (Critical+High security):** C1, H2, M4 — the abuse/forgery surface. Ship first.
2. **PR 2 (Persistence):** H3 — make the admin panel actually work (or dev-gate it).
3. **PR 3 (Hardening):** M5, M6, M7, M8 + all Low items.
4. **PR 4 (Cleanup):** Phase 5, on its own so review stays focused.

## Definition of done (per PR)
`npm run typecheck && npm run lint && npm test` green · manual smoke of the touched route · for security PRs, one negative test proving the bad path is now rejected (forged cookie → 401, bad chat payload → 400, over-limit → 429).

## Rough effort
Phase 1–3 (the ones that matter): ~1–1.5 focused days. Phase 4: ~2 hours. Phase 5: separate, half-day+.
