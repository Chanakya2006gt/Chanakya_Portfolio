# TASK 9 — Canonical Domain, Social Previews, Model Default & Dependency Cleanup

> Addendum to `portfolio-gemini-plan.md`. **All "ABSOLUTE RULES" from that plan still apply.** Re-read them. Especially: run `npm run typecheck` after every step; `vite build` does NOT type-check; if an anchor string is not found EXACTLY, STOP and report; change only what is specified; do not reformat or refactor surrounding code.

---

## VERIFIED STARTING STATE
- Last commit: `cae6e2f`. `zod` and `@vercel/blob` installed. Tasks 1–7 done; Task 8 (AI résumé) **not started** and is **not part of this task**.
- **The canonical production URL is `https://chanakya-portfolio-orcin.vercel.app`.** The user is not buying a custom domain. Every reference to `chanakya.dev` is wrong and must point here instead.
- `SITE_URL` in `.env` / `.env.example` is a **dead variable — no code reads it** (verified). It is cleaned up, not wired in.
- `public/og.jpg` exists (20 KB).
- `.env.example` already has the correct `OPENAI_MODEL=gpt-5.6-terra` — do not change that line.

## WHY THIS MATTERS
The site currently tells Google its canonical address is `chanakya.dev` (a domain that does not serve this site), and its social-preview images use **relative** paths, which Open Graph does not accept — so shared links on LinkedIn/WhatsApp/Discord render with no image.

**Do the steps in order. STOP and report after each step.**

---

# STEP 1 — Point all metadata at the real domain

### 1.1 Add a single canonical constant
**File:** `src/routes/__root.tsx`.
**Find this exact line:**
```
const APP_DESC = "Official portfolio of Nagulagam Chanakya — Full-Stack Developer & Founder of Trelio. Specializing in React, Node.js, TypeScript, PostgreSQL, and applied software security.";
```
**Add directly BELOW it:**
```
const SITE_URL = "https://chanakya-portfolio-orcin.vercel.app";
```

### 1.2 Fix the structured-data URL
Same file. **Find:**
```
  "url": "https://chanakya.dev",
```
**Replace with:**
```
  "url": SITE_URL,
```
> `SITE_URL` is declared above `JSON_LD` in the module, so this reference is valid. If `JSON_LD` appears ABOVE the `APP_DESC` line in the file, STOP and report instead of reordering anything.

### 1.3 Make the social images absolute
Same file. **Find:**
```
      { property: "og:image", content: "/og.jpg" },
```
**Replace with:**
```
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { property: "og:url", content: SITE_URL },
```
Then **find:**
```
      { name: "twitter:image", content: "/og.jpg" },
```
**Replace with:**
```
      { name: "twitter:image", content: `${SITE_URL}/og.jpg` },
```
> Note the backticks — these are template literals, not plain strings.

### 1.4 Add a canonical link
Same file. **Find this exact line** (first entry of the `links:` array):
```
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
```
**Add directly ABOVE it:**
```
      { rel: "canonical", href: SITE_URL },
```

### 1.5 Fix the sitemap
**File:** `public/sitemap.xml`. **Replace the ENTIRE file contents with:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://chanakya-portfolio-orcin.vercel.app/</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 1.6 Fix robots.txt
**File:** `public/robots.txt`. **Find:**
```
Sitemap: https://chanakya.dev/sitemap.xml
```
**Replace with:**
```
Sitemap: https://chanakya-portfolio-orcin.vercel.app/sitemap.xml
```
Leave the `User-agent`, `Allow`, and `Disallow` lines exactly as they are.

### 1.7 Remove the dead SITE_URL variable
**File:** `.env.example`. Delete the line `SITE_URL=https://your-portfolio-domain.vercel.app` **and** the comment block directly above it that describes it (the `# Site & Hosting Configuration ...` header lines that refer only to SITE_URL). Do not touch any other variable.
> Do **not** edit the user's `.env` — it is gitignored and yours to leave alone. Mention in your report that they can delete the stale `SITE_URL` line there themselves.

### STEP 1 VERIFY
```
npm run typecheck && npm run build
grep -rn "chanakya.dev" src public          # expect: NO matches
grep -rn '"/og.jpg"' src                    # expect: NO matches (must be absolute now)
```
**COMMIT:** `fix(seo): point canonical URL, sitemap, and social cards at the live domain`

---

# STEP 2 — Restore the correct model default

**Context:** an earlier review incorrectly flagged `gpt-5.6-terra` as a non-existent model, and the code default was changed to an older model. `gpt-5.6-terra` **is** a real, vision-capable model. The user's `.env` sets it explicitly, so live behaviour is unaffected — but the fallback should not silently downgrade if the env var is ever missing.

**File:** `src/routes/api/chat.ts`. **Find:**
```
          const model = getEnvVar("OPENAI_MODEL", "gpt-4o-mini-2024-07-18");
```
**Replace with:**
```
          const model = getEnvVar("OPENAI_MODEL", "gpt-5.6-terra");
```
Change nothing else. Do **not** modify `.env.example` (it is already correct).

### STEP 2 VERIFY
```
npm run typecheck
grep -rn "gpt-4o-mini" src                  # expect: NO matches
```
**COMMIT:** `fix(chat): restore gpt-5.6-terra as the default model`

---

# STEP 3 — Remove the orphaned database code and unused dependencies

**This step touches the build pipeline. Follow the order exactly — removing `pg` before removing the migrate script WILL break the build.**

### 3.1 Confirm the code is truly orphaned (do this first)
```
grep -rn "lib/db\|getSql\|getPglite\|ensureDbReady\|dbSource" src
```
**Expected: matches ONLY inside `src/lib/db.ts` itself.** If any other file matches, **STOP and report** — do not continue this step.

### 3.2 Delete the dead module
Delete `src/lib/db.ts`.

### 3.3 Remove the migration step from the build (BEFORE removing `pg`)
`scripts/migrate.mjs` imports `pg` and runs on every build via `db:migrate`. The `migrations/` directory no longer exists, so it is already a no-op.

**File:** `package.json`. **Find:**
```
    "build": "tsc --noEmit && vite build && npm run patch:bundle && npm run db:migrate",
```
**Replace with:**
```
    "build": "tsc --noEmit && vite build && npm run patch:bundle",
```
Then **delete the entire `"db:migrate": "node scripts/migrate.mjs",` line** from `"scripts"`.
Then delete the file `scripts/migrate.mjs`.

### 3.4 Uninstall the unused packages (only after 3.1–3.3 all succeeded)
```
npm uninstall better-auth kysely @electric-sql/pglite pg @types/pg
```

### STEP 3 VERIFY
```
npm run typecheck && npm run lint && npm run build
grep -rn "better-auth\|pglite\|kysely" src package.json    # expect: NO matches
```
The build MUST succeed. **If the build fails at any point in this step, run `git checkout .` to revert the whole step and report the failure — do not attempt to chase or patch it.**

**COMMIT:** `chore: remove orphaned database module and unused dependencies`

---

## DO NOT
- Do **not** buy, register, or reference any custom domain. `https://chanakya-portfolio-orcin.vercel.app` is the canonical URL, hardcoded via the `SITE_URL` constant.
- Do **not** edit the user's `.env` file.
- Do **not** start Task 8 (the AI résumé pipeline) as part of this task.
- Do **not** touch `src/routes/api/admin/*`, `auth-session.ts`, `resume-modal.tsx`, or `styles.css`.
- Do **not** add any dependency.

## REPORT BACK TO THE USER
- Commit hashes per step; confirmation `typecheck`, `lint`, and `build` are green.
- That they may delete the stale `SITE_URL=` line from their local `.env` (harmless either way — nothing reads it).
- That after deploying, social previews should be re-checked by pasting the live URL into LinkedIn's Post Inspector or sharing it in a chat app — caches on those services can hold the old (imageless) preview for a while.
- If Step 3 was reverted, say so explicitly and leave the dependencies installed.
