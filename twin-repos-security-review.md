# Security review — `Industrial-packaging-platform` vs `Printfast_zambia_website`

**Question:** the two repos are near-identical apart from explicit details. Is that a security threat?

**Short answer:** the risk most people fear — shared credentials — is **not present**. But the duplication has caused a real leak in a different direction, and there is one handover-blocking item in PrintFast. No code was changed during this review; secrets were compared by hash, never printed.

> **Context added after review:** `industrial-packaging-platform` is public *on purpose*, as portfolio proof. That is a good reason and the recommendations below are written to keep it public. Note that Finding 1 is not only a leak — it is actively damaging the showcase, which makes fixing it the highest-value item either way.

---

## ✅ Clean: no shared credentials, no leaked secrets

Verified directly:

| Check | Result |
|---|---|
| Supabase project URL | **Different** (hash `4ada57d4…` vs `24bd9cf3…`) |
| Supabase anon key | **Different** (hash `83957ec9…` vs `c2a23661…`) |
| Service-role key | Different; present only in `backend/.env`, never `VITE_`-prefixed |
| Real `.env` tracked in git | **No** — both repos track only `.env.example` |
| `.env` ever committed historically | **No** — clean across all branches |
| Real Supabase project ref in any tracked file | **No** — zero matches |
| Service-role key in `frontend/src` or built `dist/` | **No** — zero matches |
| `node_modules/.vite/deps/@supabase_supabase-js.js` (tracked in the public repo) | Contains `supabase.co` 40× but **0 real JWTs** — all are the library's own doc examples (`xyzcompany.supabase.co`). Not a leak. |

**Compromising one system gives an attacker nothing on the other.** `.gitignore` hygiene is good in both, and `SESSION_SECRET` is a proper placeholder.

---

## 🔴 Finding 1 — The public repo leaks PrintFast's business logic, and it's a live bug

`industrial-packaging-platform` is **public on GitHub**. `Printfast_Zambia` is **private** (404 to anonymous).

Commit dates show the direction of the copy: PrintFast first commit **2026-08-24**, industrial **2026-08-25**. Industrial was forked from the Zambian codebase — and the Zambian tax logic was never removed.

The public repo, branded **"Apex Packaging & Converting"**, computes **Zambian tax in Zambian Kwacha**:

- `backend/src/domain/estimating/calculator.js:20` — `export const ZRA_VAT_RATE = 0.16; // 16% Zambia Revenue Authority VAT`
- `supabase/seed.sql:13` — `('default_currency', 'ZMW', 'Default billing currency')`
- Every money field is `…ZMW`: `materialCostZMW`, `netPriceZMW`, `vatZMW`, `finalGrossPriceZMW`, `unitPriceZMW`
- `AdminDashboardPage.tsx:178` and `SalesDashboardPage.tsx:186` emit `*VAT (16%):* ZMW …` into WhatsApp quote text
- `backend/scripts/health-check.js:44` throws `'ZRA VAT calculation invalid'`

**This is not dead code — it is the live pricing path**, asserted on by `calculator.test.js`, `calculatorParity.test.js` and `calculatorFuzzing.test.js`.

Two problems at once:

1. **Correctness.** A non-Zambian packaging client is being quoted in Kwacha at Zambian VAT. (There is also a visible symptom: `CpqEstimatorPanel.tsx` and `CrmKpiGrid.tsx` render `$` while the dashboards render `ZMW` — mixed currency symbols on the same product.)
2. **Confidentiality.** It publishes, in a public repo, that PrintFast's tax and currency handling works this way — and that the two systems share a codebase.

---

## 🟠 Finding 2 — The public repo is a free blueprint of the private client's system

Because the two are twins, the public repo documents the private client's production architecture. Route surfaces are nearly identical:

| `industrial-packaging-platform` (public) | `Printfast_zambia_website` (private) |
|---|---|
| `/api/estimator/calculate` | `/api/estimator/calculate` |
| `/api/export/csv` | `/api/export/csv` |
| `/api/rates` | `/api/rates` |
| `/api/upload/validate` | `/api/upload/validate` |
| `/healthz` | `/healthz` |
| — | `/api/admin/staff/:id`, `/api/admin/staff/invite` |

Both `backend/src/server.js` files share the same structure: Helmet + CSP, CORS allowlist, tiered `express-rate-limit`, `express.json({ limit: '10mb' })`, Supabase + Bearer-JWT auth.

Obscurity is not a security control, and none of this is a vulnerability by itself. But two things follow:

- **Attacker cost drops.** Anyone targeting PrintFast can read the public twin to learn the auth model, exact endpoints, rate-limit thresholds, CORS behaviour and input validation without touching the target.
- **Shared bugs, no shared patch path.** The two are already diverging (`server.js` is 213 lines vs 363). There is no shared package, submodule or dependency between them — so a security fix applied to one is silently absent from the other, and any flaw in the shared template is publicly auditable while being live in a private client's production system.

---

## 🔴 Finding 3 — Real-looking default admin password committed to git (handover-blocking)

`Printfast_zambia_website/.env.example` is **tracked in git** and contains:

```
SEED_ADMIN_EMAIL=admin@printfastzambia.com
SEED_ADMIN_PASSWORD=PZL_Admin2026!Secure
```

That is not a placeholder — it reads as a real credential. `SESSION_SECRET` on line 23 is correctly `change_me_to_a_random_64_byte…`, which makes the contrast worse: an operator scanning the file sees one obvious placeholder and one apparently-real password, and leaves the latter alone.

**Mitigating:** no code consumes `SEED_ADMIN_PASSWORD` — grep finds no reader anywhere outside the docs. The file also describes a SQLite/session stack the project no longer uses. So it is vestigial.

**Credit where due:** this was already self-identified in two internal docs — `docs/HANDOVER_READINESS_AUDIT.md:64` and `docs/UI_UX_REMEDIATION_PLAN.md` (BH7). It has not been actioned yet.

**Why it still matters:** the repo is private today, but PrintFast is being handed over. The moment that repo is transferred, cloned by the client, or made public, that string is a working guess against a named admin address.

---

## 🟡 Minor — `node_modules` tracked in the public repo

22 files under `frontend/node_modules/.vite/deps/` are committed in `industrial-packaging-platform`. Verified not to contain secrets. Hygiene only — Vite dep-cache artifacts should not be in version control.

---

## What to do, in order

1. **Strip Zambian tax/currency from the public repo.** `ZRA_VAT_RATE`, every `…ZMW` identifier, the `ZMW` seed row, and the `VAT (16%)` quote strings need to become the correct jurisdiction and currency for whoever Apex Packaging actually represents — or a neutral placeholder. This fixes a live pricing bug and closes the leak in one pass. **Fix the mixed `$` / `ZMW` rendering at the same time.**
2. **Rotate and placeholder the seed admin credential** in `Printfast_zambia_website/.env.example` before handover. Replace with an obvious placeholder plus a "rotate on first boot" note; confirm the real superadmin exists and the seed identity is disabled.
3. **Keep the repo public — that is a valid reason, and the code holds up to being read.** It is public deliberately, as portfolio proof. Nothing in Findings 1–3 argues for hiding it: Helmet + CSP, a CORS allowlist, tiered rate limiting, no committed secrets, and a test suite that includes parity and fuzzing tests are a genuinely good look. Public code is not insecure code; the bar is that it must withstand being read, and this mostly does. Two caveats to manage rather than hide from:
   - **Confirm "Apex Packaging & Converting" is a persona, not a real company you have not cleared.** A public repo branded with a real client's name raises a consent question separate from anything technical. If it is a persona, ignore this.
   - **PrintFast did not necessarily agree to have its architecture published.** The twin-ness means their production design is effectively public. That is a client-trust question, not a code question, and it is worth a sentence at handover. It fades naturally as the two diverge — which Fix 1 starts.
4. **Untrack `frontend/node_modules/`** from the public repo and add it to `.gitignore`.
5. **Keep a written note that the two share a template**, so a security fix in either gets mirrored. `docs/HANDOVER_READINESS_AUDIT.md:4` already calls the sibling a "near-twin" — that note should say explicitly that fixes must be applied to both.

---

## Explicitly verified as NOT a problem

- Credentials are not shared between the two systems.
- No real `.env` is or ever was committed to either repo.
- The service-role key is not exposed to any frontend or bundle.
- The Supabase strings inside the tracked `node_modules` cache are library documentation examples, not real keys.
