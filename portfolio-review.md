# Portfolio Code Review — Chanakya_Portfolio

**Scope:** design, backend, and security. No code was changed — this is a read-only audit.
**Stack:** TanStack Start (React 19 SSR) + Nitro, Tailwind v4, shadcn/ui, Better Auth (Grok federated), custom HMAC admin auth, PGLite/Neon, deployed on Vercel.
**Reviewed:** Aug 2026.

Good news first: `.env` is correctly gitignored and was **never committed** to git history — no leaked secrets in the repo. The DB layer (`src/lib/db.ts`) is genuinely well-engineered — the type-parity normalization, HMR-safe global memoization, and serialized migration chain are thoughtful and correct. Queries use parameterized placeholders throughout, so there's no SQL injection surface. The chat reply is rendered as plain text (`whitespace-pre-wrap`, no `dangerouslySetInnerHTML`), so there's no XSS via the AI response.

Now the issues, worst first.

---

## Critical

### C1. Hardcoded session-secret fallback baked into a public repo
`src/lib/auth-session.ts` → `getSessionSecret()` falls back to a literal string when `ADMIN_SESSION_SECRET` is unset:

```
return "dev-local-session-secret-fallback-chanakya-2026";
```

That exact string is in your public GitHub repo. The **same** function signs *and* verifies admin session tokens. So if the env var is ever missing/blank in production, anyone can compute a valid HMAC token with the known secret and mint themselves an admin cookie — full write access to `/api/admin/data`.

The boot-guard is supposed to hard-fail in prod when the secret is missing, **but** `assertEnvGuards()` is only called in `login.ts` and `chat.ts`. The two endpoints that actually *verify* the cookie — `api/admin/check.ts` and `api/admin/data.ts` (POST) — never call it. A forged token signed with the fallback secret would sail straight through `verifySignedSessionToken` on a cold serverless instance that never hit the login route. The fallback should throw (or refuse to verify) rather than silently substitute a known key.

---

## High

### H2. `/api/chat` is an unauthenticated, unthrottled OpenAI proxy
`src/routes/api/chat.ts` takes `body.messages` and forwards it to OpenAI verbatim:

```
messages: [ { role: "system", content: systemPrompt }, ...messages ]
```

There is no auth, no rate limit, no per-IP cap, and no validation of the incoming array. A visitor can:
- Send thousands of requests and burn your OpenAI billing (cost-DoS). `max_completion_tokens: 500` caps *one* reply but not the *number* of requests.
- Inject their own `system`/`assistant` turns to override your guardrails and use your key as a free general-purpose LLM proxy.

At minimum: validate that every message has `role: "user"` and a string `content` under a length cap, cap the array length, and add IP-based rate limiting (Vercel KV / Upstash, or an in-memory token bucket per warm instance). Your own `SECURITY.md` claims "All user inputs … are sanitized and validated" — for this endpoint that isn't true today.

### H3. Admin writes can't persist on Vercel (and will error)
`src/data/store.ts` → `savePortfolioData()` does `fs.writeFileSync()` to `src/data/portfolio-data.json`. Vercel's serverless filesystem is read-only except `/tmp`, and even `/tmp` is ephemeral per-invocation. In production the "Save All Changes" button in the admin dashboard will either throw (500) or appear to succeed on one warm instance and silently vanish. The admin CMS effectively doesn't work in prod. Portfolio content needs to live in the database (you already have Neon wired) or an external store, not a bundled JSON file written at runtime.

---

## Medium

### M4. No rate limiting or lockout on admin login
`api/admin/login.ts` compares credentials with no throttling, so the admin password is brute-forceable. Combined with M5 below, add a per-IP attempt limit / exponential backoff.

### M5. Plaintext admin password + non-constant-time comparison
Credentials are stored plaintext in `.env` and checked with `username === envUser && password === envPass`. The `===` is not timing-safe (minor over a network), but the bigger point is there's no hashing — consider storing a hash (e.g. scrypt/argon2) of the password and comparing with `crypto.timingSafeEqual`, mirroring what you already do correctly for the session signature.

### M6. `env.ts` re-reads and re-parses `.env` from disk on every single call
`getEnvVar()` calls `loadEnvFile()` every time, which does `fs.existsSync` + `fs.readFileSync` + full parse — and the module-level `envCache` object is declared but **never used** (dead code). `buildDynamicSystemPrompt()` calls `getEnvVar` ~7 times per chat request, so that's ~7 synchronous disk reads per request. Read `process.env` first, and actually use the cache you already declared.

### M7. Invalid default OpenAI model — live chat likely never runs
`getEnvVar("OPENAI_MODEL", "gpt-5.6-terra")` and `.env.example` both default to `gpt-5.6-terra`, which is not a real OpenAI model id (the boot-guard comment even says the default is `gpt-4o`). If someone deploys with a real key but no `OPENAI_MODEL`, every call 404s and silently drops to the canned fallback replies. Pin a real model id.

### M8. Broken `htmlFor` on the password label (real a11y bug)
`src/routes/admin/login.tsx`:

```
<Label htmlFor="password text-xs font-medium text-foreground">
```

The `className` got pasted into the `htmlFor` value. The label no longer points at `id="password"`, so clicking the label doesn't focus the field and screen readers lose the association. (The username label above it is correct.)

---

## Low

### L9. `/api/admin/data` GET is unauthenticated
Anyone can `GET /api/admin/data` and read the full `DynamicData`. It's mostly public content, but the shape includes `resumeOverride.phone` — if you ever populate that, it leaks. Gate the GET behind the same session check as POST, or explicitly strip private fields.

### L10. `/api/health` discloses configuration state
Unauthenticated callers learn whether `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, and `OPENAI_API_KEY` are set. It doesn't reveal values, but it's needless recon signal. Either require a token or reduce it to a bare `{status:"ok"}`.

### L11. OpenAI error text is forwarded to the client
On an API error the handler returns `parsed.error.message` (and the raw status/type) to the browser. Upstream error strings can carry internal detail — return a generic message and keep the specifics in server logs (which you already write).

### L12. `target="_blank"` without `rel="noreferrer"`
Several external links (`portfolio-home.tsx`, `left-rail-nav.tsx`, `resume-modal.tsx`) use `target="_blank"`. Modern browsers imply `noopener`, but adding `rel="noopener noreferrer"` is still the correct habit and controls referrer leakage.

### L13. `logout.ts` clears the cookie inconsistently
It hardcodes `admin_session=; Path=/; HttpOnly; Max-Age=0` instead of using the existing `createClearCookieHeader()`, so it drops the `SameSite` attribute the set-path uses. Cosmetic, but use the shared helper so cookie attributes stay in sync.

### L14. `SECURITY.md` over-claims relative to the code
The doc states the login `Set-Cookie` always includes `Secure` (it's conditional on `NODE_ENV==="production"`), and that all user input is "sanitized and validated" (the chat endpoint validates nothing). Great to have a threat model written down — just align it with what the code actually enforces, or it becomes a false assurance.

---

## Architecture / maintainability notes (not bugs)

- **Two parallel auth systems.** The app ships a fully-wired Better Auth "Sign in with Grok" federation (`src/lib/auth/*`, `migrations/0001_auth.sql`, the sibling-isolation middleware) that the portfolio never actually uses — there's no visitor sign-in UI and no per-user data. Admin auth is a *separate* custom HMAC cookie. The Better Auth stack is leftover Grok-sandbox scaffold; it's dead surface area you're carrying (and have to reason about for security). Consider removing it unless you plan to add authenticated visitor features.
- **`__grok/` PWA + `grok-sandbox.com` broker** are platform scaffolding from the sandbox this was generated in — worth knowing they're there, and worth stripping the Grok-branded install page / manifest before this is your "official" portfolio, so you're not shipping another product's branding.
- **`portfolio-home.tsx` is 675 lines.** It's doing hero, stats, projects, sections, and links in one component. Splitting into section components would help maintainability; not urgent.
- **17 `console.*` calls** across `src` will run in production serverless logs. Fine for now, but consider a small logger with levels so prod stays quiet.

---

## Suggested priority order
1. **C1** — remove the hardcoded secret fallback; make missing secret fail verification.
2. **H2** — validate + rate-limit `/api/chat`.
3. **H3** — move admin-editable content to the DB (or accept the admin panel is dev-only).
4. **M4/M5** — hash the admin password + throttle login.
5. **M6/M7/M8** — env caching, real model id, the `htmlFor` fix.
6. Low items as cleanup.
