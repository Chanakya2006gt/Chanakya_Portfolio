# Master Implementation Plan — Chanakya Portfolio

One consolidated plan for everything found across the review and follow-up discussion. Reflects the state **after** your `b5f1e83` security commit. Nothing here has been applied — this is the blueprint to work from.

**Guiding decision:** this is a static-first portfolio. It needs **no database and no auth stack**. The only genuinely dynamic feature is uploading a new résumé PDF from the admin dashboard. Everything else is content-as-code. The plan below strips what isn't needed, fixes what's fragile, and builds the one dynamic piece properly.

**Legend:** 🔴 Critical · 🟠 High · 🟡 Medium · ⚪ Low · 🎨 Design
**Effort:** S <30m · M 30–90m · L half-day+

---

## 0. Already fixed (verified in your commit) — no action needed

- 🔴 **Hardcoded session-secret fallback** → now fails closed in production (`auth-session.ts`).
- 🟠 **`/api/chat` abuse** → payload validated (25-msg cap, role filter, 1000-char cap) + per-IP rate limit; OpenAI error text no longer leaked to client.
- 🟡 **Login** → 5/5-min per-IP throttle + `timingSafeEqual` compare.
- 🟡 **`env.ts`** → real cache with 5s TTL; `process.env` consulted.
- 🟡 **Chat model default** → real model (`gpt-4o-mini-2024-07-18`).
- 🟡 **Admin login `htmlFor` bug** → fixed.

Two caveats to keep in mind (not blockers): both rate limiters are in-memory per warm instance, so they reset on cold start and don't share across instances — fine as a stopgap, revisit only if abuse appears.

---

## Phase 1 — Content architecture: make it real SSR, kill the fragile bits · M–L

**Problem today:** the public page fetches content client-side (`fetch("/api/admin/data")` in a `useEffect` in `portfolio-home.tsx`). And `store.ts` reads `portfolio-data.json` by runtime file path (`process.cwd()/src/data/...`), which Vercel's bundler may not include in the function — so in production it can silently fall back to the `projects.ts` defaults. Net effects: content flash on load, SEO/link-previews see defaults, and admin JSON edits don't reliably surface.

**Fix — content as a bundled import, loaded server-side:**
1. Make `portfolio-data.json` a real **import** (or fold its values into `projects.ts`) so the bundler always includes it — never a runtime `fs.readFile` of a source path.
2. Load content in the **route loader** (`src/routes/index.tsx` / `__root` as appropriate) so it's server-rendered into the first HTML response. Pass it to `PortfolioHome` as props/route data instead of fetching in `useEffect`.
3. Delete the client-side `fetch("/api/admin/data")` from `portfolio-home.tsx`.
4. `getPortfolioData()` in `store.ts` becomes a pure return of the imported object (no `fs`), keeping the `projects.ts` shape as the type source.

**Result:** correct SSR, no flash, SEO-correct, no public API call for content. **Verify:** `curl` the deployed page → project/skill/tagline text is present in the raw HTML (not injected later); no `/api/admin/data` request in the network tab on first paint.

---

## Phase 2 — Résumé upload from the admin dashboard (the one dynamic feature) · M

**Goal:** log into admin → pick a new PDF → it's live on the site within ~1 minute. No database, no redeploy. Uses **Vercel Blob** (free on Hobby, no overage billing).

**Steps:**
1. **Create a Blob store** in the Vercel dashboard (one-time; auto-injects `BLOB_READ_WRITE_TOKEN`). Add `@vercel/blob` to `package.json`.
2. **New endpoint `POST /api/admin/resume`**, gated by the existing admin HMAC cookie (`getAdminSessionCookie` + `verifySignedSessionToken` — same check `/api/admin/data` POST already uses). Reject unauthenticated (401). Validate: `Content-Type: application/pdf` and size ≤ ~4 MB (Vercel server-upload body limit is ~4.5 MB; a résumé is well under).
3. Upload to a **fixed pathname with overwrite**, so the public URL is stable and no "latest-file pointer" needs storing anywhere:
   ```ts
   import { put } from "@vercel/blob";
   const blob = await put("resume.pdf", file, {
     access: "public",
     allowOverwrite: true,
     contentType: "application/pdf",
     cacheControlMaxAge: 60,   // ⚠ default is ONE MONTH — must lower this
   });
   ```
   **Critical detail:** Vercel Blob caches for one month by default. Without `cacheControlMaxAge: 60` (1-min minimum), a freshly uploaded résumé keeps serving the old file for weeks and looks broken.
4. **Point the site at the stable Blob URL** once — set it as `PUBLIC_RESUME_PDF_URL` (env) and have `resume-modal.tsx` use it. Every upload overwrites the same path → same URL → new PDF live.
5. **Admin UI:** in `src/routes/admin/index.tsx` Resume tab, replace the current "Resume PDF URL" **text field** (which only ever stored a string, never uploaded a file) with a real `<input type="file" accept="application/pdf">` that POSTs to `/api/admin/resume`, with a small success/error toast.

**Also fix now:** `public/` currently has **no `resume.pdf`**, so the live "Download résumé" button is likely a 404 until this ships (or until a file is placed). Confirm on the deployed site.

**Alternative (only if keeping the file in git matters more than simplicity):** admin upload → commit `public/resume.pdf` via GitHub API → auto-redeploy. Keeps résumé versioned in the repo but needs a repo-write token as a secret and a ~1–2 min redeploy per update. Blob is the lighter choice.

**Verify:** log into admin on a deploy preview → upload a new PDF → within a minute the site's download button serves the new file; wrong file type → rejected; logged-out POST → 401.

---

## Phase 3 — Remove the unused database + auth stack · L

Nothing a visitor or the admin panel touches uses the database — it exists only for the dormant "Sign in with Grok" scaffold from the template. Removing it is a large cut in dependencies, cold-start cost, and security surface.

**Remove (verify no stray imports first with a repo-wide search):**
- `src/lib/db.ts`, `src/lib/auth/*` (server, client, middleware, isolation, verify, providers, preview, pglite-dialect, gates, provider, use-current-user, email-password, popup).
- `src/routes/api/auth/$.ts`.
- `migrations/0001_auth.sql` (and the `migrations/` + `scripts/migrate.mjs` machinery if nothing else uses it).
- The `AuthProvider` wrapper in `__root.tsx` if it only serves the removed stack.
- Deps from `package.json`: `better-auth`, `@electric-sql/pglite`, `kysely`, `pg`, `@types/pg`.
- Grok-sandbox PWA scaffolding if you're de-branding: `public/__grok/*`, `server/middleware/grok-pwa.ts`, the `__grok` manifest/apple-touch-icon links in `__root.tsx`, and the related `scripts/grok-pwa-*`. Replace with your own PWA manifest + icons.

**Keep:** the custom admin HMAC cookie auth (`auth-session.ts`) — it's independent of all the above and is all the auth you need.

**Verify:** `npm run typecheck && npm run build` clean with no dangling imports; app runs; admin login still works; bundle size drops.

> Only skip this phase if you plan to add authenticated *visitor* features later — that's the one scenario where the auth stack + a database earn their place.

---

## Phase 4 — Finish the small security/cleanup items · S each

- ⚪ **`GET /api/admin/data`**: after Phase 1 the public page no longer needs it. Either delete the GET, or gate it behind the session check and strip private fields (`resumeOverride.phone`). `api/admin/data.ts`
- ⚪ **`/api/health`**: stop disclosing which env vars are set to anonymous callers — return a bare `{status}` or require a token. `api/health.ts`
- ⚪ **External links**: add `rel="noopener noreferrer"` to every `target="_blank"` (`portfolio-home.tsx`, `left-rail-nav.tsx`, `resume-modal.tsx`, `admin/index.tsx`).
- ⚪ **`logout.ts`**: use the existing `createClearCookieHeader()` helper instead of a hand-written cookie string so attributes stay consistent.
- ⚪ **`SECURITY.md`**: reconcile with reality (the `Secure` flag is conditional on prod; describe the chat validation now that it exists) so the doc isn't a false assurance. If Phase 3 removes the DB/auth, prune those claims too.

---

## Phase 5 — 🎨 Dark mode redesign · M

Light mode reads premium (warm cream `#f5f3ef` + deep forest `#4a7c5f`); dark mode is the generic cool-gray shadcn default with no identity. Make dark the *night version of the same brand*.

**In `src/styles.css` `:root` (dark) tokens:**
- Lift true-black `#0a0a0b` → a tinted deep ink (e.g. green-ink `#0b0d0c`) so shadows/elevation read.
- Warm/tint the neutral ramp and widen the steps so cards visibly float (card `≈#151815`, secondary `≈#1d211e`, accent `≈#262b27`).
- Brighten the accent so it registers on dark (`--sage ≈ #a3c2ab`, and `--ring` to match), or lead with the indigo.
- Bump borders `rgba(...,0.12)` → `~0.16` and add a subtle inner top-highlight in `--shadow-border`.
- Add one **ambient radial** behind the hero at rest (e.g. `radial-gradient(60% 50% at 50% 0%, rgba(143,168,150,0.10), transparent)`) so the page isn't dead-flat monochrome.

**Concrete bug to fix here:** `::-webkit-scrollbar-track { background: #0a0a0b }` is hardcoded outside `.light`, so in **light** mode the scrollbar track is black. Move it to a token.

**Verify:** toggle both themes; cards show clear elevation in dark; scrollbar matches each theme; run a quick contrast check on `muted-foreground` against the new surfaces.

---

## Suggested sequencing (small, reviewable PRs)

1. **PR 1 — Content architecture (Phase 1).** Highest value: fixes SSR/SEO + the persistence fragility in one move.
2. **PR 2 — Résumé upload (Phase 2).** The feature you actually want.
3. **PR 3 — Strip DB/auth/Grok scaffold (Phase 3).** Big cleanup, on its own so review stays focused.
4. **PR 4 — Security/cleanup tail (Phase 4).**
5. **PR 5 — Dark mode (Phase 5).** Independent; can land any time.

## Definition of done per PR
`npm run typecheck && npm run lint && npm test` green · manual smoke of touched routes · for the résumé endpoint, one negative test each (wrong type → 400/415, logged-out → 401).

## Open decisions for you
1. **De-brand the Grok PWA scaffolding now, or later?** (affects how much of Phase 3 you take.)
2. **Résumé storage: Vercel Blob (recommended) or GitHub-commit** (keeps it in git, more moving parts)?
3. **Keep the admin panel for text content** (projects/tagline) as a **local-dev-only** editor, or drop it and edit `projects.ts`/JSON directly? After Phase 1, production content is code either way.

## Rough effort
Phases 1–2 (the real value): ~1 day. Phase 3: ~half day. Phases 4–5: ~half day combined.
