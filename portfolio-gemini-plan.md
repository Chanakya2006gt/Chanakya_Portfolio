# Implementation Plan — Chanakya Portfolio (for the implementing model)

> **READ THIS ENTIRE SECTION BEFORE EDITING ANYTHING.** These are hard rules. Violating any of them has already caused two production breaks in this repo.

## GROUND TRUTH (verified state of the repo — do not assume otherwise)
- Framework: **TanStack Start** (React 19 SSR) + Nitro, Vite 8, Tailwind v4, shadcn/ui. Deployed on Vercel.
- The custom admin auth is a signed HMAC cookie in `src/lib/auth-session.ts`. **This works. Do not touch it.**
- The old Better Auth / "Sign in with Grok" stack (`src/lib/auth/`), `src/routes/api/auth/`, and `migrations/` are **already deleted**. Do not try to edit or delete them again.
- `src/lib/db.ts` still exists but is **orphaned** — nothing imports it. Leave it unless Task 6 says otherwise.
- Content flow: `src/data/portfolio-data.json` is a **bundled import** in `src/data/store.ts`; `getPortfolioData()` returns it; the home route (`src/routes/index.tsx`) loads it in a **server loader** and passes it to `PortfolioHome` as `initialData`. There is **no client fetch** of content anymore.
- Server-only file writing lives in `src/data/store.server.ts` (imported only by `src/routes/api/admin/data.ts`).

## ABSOLUTE RULES (anti-hallucination)
1. **`vite build` does NOT type-check.** After every task you MUST run `npm run typecheck` and it MUST print no errors. A green `npm run build` is not sufficient proof.
2. **Never place `process`, `process.cwd()`, `fs`, `path`, or any `node:` import at the top level of any file under `src/` that a route component, loader, or React component imports.** Those modules are bundled to the browser and will crash with `ReferenceError: process is not defined`. Server-only Node code goes in a `*.server.ts` file or inside a route `server.handlers` block ONLY. (This exact bug already shipped once.)
3. **Make ONLY the changes each task specifies.** Do not reformat, rename, reorder imports, "clean up," or refactor unrelated code. Do not add features, comments, or files not listed.
4. **Do not invent APIs.** Use the exact code given in each task verbatim. If a symbol/import/option is not written here, do not add it.
5. **If a specified anchor string is not found exactly, STOP and report.** Do not guess a nearby location. Do not partially apply a task.
6. **After each task, run its Verify block. If it fails, STOP and report — do not attempt unrelated fixes** or roll forward into the next task.
7. Work on branch `dev`. One commit per task, using the commit message given. Do **not** force-push. Do **not** merge to `main` until the user confirms.
8. Do not modify: `src/lib/auth-session.ts`, `src/routes/api/chat.ts`, `src/routes/api/admin/login.ts`, `src/data/store.ts`, `src/data/store.server.ts`, `src/routes/index.tsx` — unless a task explicitly names the file.

## Execution order
Do tasks in this order: **1 → 2 → 3 → 4 → 5 → 6**. Task 6 is OPTIONAL and lowest priority; only do it if the user asks. Tasks 3 (résumé upload) has a prerequisite the user must complete first — see the task.

---

## TASK 1 — Add a type-check guard to the build (prevents recurrence)

**Why:** `vite build` skips type-checking, which let two broken commits merge. Prefixing `tsc --noEmit` makes the build fail loudly on type errors.

**File:** `package.json`

**Find this exact line** (in `"scripts"`):
```
    "build": "vite build && npm run patch:bundle && npm run db:migrate",
```
**Replace with:**
```
    "build": "tsc --noEmit && vite build && npm run patch:bundle && npm run db:migrate",
```
Change nothing else in `package.json`.

**Verify:**
```
npm run build
```
Expected: it runs `tsc --noEmit` first, then the vite build, and completes with exit code 0. If `tsc` reports errors, STOP — there is a pre-existing type error to report, not to silently fix.

**Commit:** `build: run tsc --noEmit before vite build to catch type errors`

---

## TASK 2 — Fix the `manifest.webmanifest` 404 (de-brand)

**Why:** `src/routes/__root.tsx` links `/__grok/manifest.webmanifest`, which is served by a dynamic middleware that 404s on Vercel → console error. The apple-touch-icon (`/__grok/icon-180.png`) is a real static file and is fine — **do not remove it.** Replace only the broken manifest with a static, self-branded one.

**Step 2a — create `public/site.webmanifest`** with exactly this content:
```json
{
  "name": "Nagulagam Chanakya — Portfolio",
  "short_name": "Chanakya",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0c0e0d",
  "theme_color": "#0c0e0d",
  "icons": [
    { "src": "/__grok/icon-180.png", "sizes": "180x180", "type": "image/png" }
  ]
}
```

**Step 2b — repoint the link.** File: `src/routes/__root.tsx`.
**Find this exact line:**
```
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
```
**Replace with:**
```
      { rel: "manifest", href: "/site.webmanifest" },
```
Do not touch the `apple-touch-icon` line or any other link.

**Verify:**
```
npm run typecheck
```
Expected: no errors. (The 404 itself is confirmed by the user on the deployed site after this ships — you cannot verify it locally.)

**Commit:** `fix(pwa): replace 404ing grok manifest with static self-branded site.webmanifest`

---

## TASK 3 — Résumé upload from the admin dashboard (Vercel Blob)

**PREREQUISITE (user action, cannot be done in code):** the user must create a Vercel Blob store in their Vercel dashboard and connect it to this project. That injects a `BLOB_READ_WRITE_TOKEN` env var. **If the user has not confirmed the Blob store exists, STOP and tell them — do not proceed.** For local testing they also need `BLOB_READ_WRITE_TOKEN` in `.env` (via `vercel env pull`).

**Design (do not deviate):** upload overwrites a FIXED blob path `resume.pdf`, so the public URL is stable and no database is needed. The site reads the résumé URL from `VITE_RESUME_PDF_URL` (set once by the user in Vercel env). Ongoing uploads replace the file behind the same URL — no redeploy.

**Step 3a — add the dependency.** Run:
```
npm install @vercel/blob
```
(Do not add any other package.)

**Step 3b — create the endpoint `src/routes/api/admin/resume.ts`** with exactly this content:
```ts
import { createFileRoute } from "@tanstack/react-router";
import { put } from "@vercel/blob";
import { getAdminSessionCookie, verifySignedSessionToken } from "@/lib/auth-session";

export const Route = createFileRoute("/api/admin/resume")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Auth: same signed admin cookie as /api/admin/data
        const sessionToken = getAdminSessionCookie(request);
        if (!verifySignedSessionToken(sessionToken || undefined)) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Only accept PDFs
        const contentType = request.headers.get("content-type") || "";
        if (!contentType.includes("application/pdf")) {
          return new Response(JSON.stringify({ error: "Only application/pdf is accepted." }), {
            status: 415,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Read bytes + enforce size (Vercel server-upload body cap ~4.5MB)
        const bytes = await request.arrayBuffer();
        if (bytes.byteLength === 0) {
          return new Response(JSON.stringify({ error: "Empty file." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        if (bytes.byteLength > 4_000_000) {
          return new Response(JSON.stringify({ error: "File too large (max 4 MB)." }), {
            status: 413,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Overwrite a FIXED path so the public URL is stable (no DB needed).
        // cacheControlMaxAge: 60 is REQUIRED — the default is one month, which
        // would keep serving the old PDF for weeks after an upload.
        try {
          const blob = await put("resume.pdf", bytes, {
            access: "public",
            addRandomSuffix: false,
            allowOverwrite: true,
            contentType: "application/pdf",
            cacheControlMaxAge: 60,
          });
          return new Response(JSON.stringify({ success: true, url: blob.url }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("[resume upload] Blob put failed:", err);
          return new Response(
            JSON.stringify({ error: "Upload failed. Is BLOB_READ_WRITE_TOKEN configured?" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
```

**Step 3c — add the upload control to the admin Resume tab.** File: `src/routes/admin/index.tsx`.

First, **find the handler `handleSaveData`** (it starts with `const handleSaveData = async () => {`). Immediately **after that function's closing `};`**, add this new handler:
```ts
  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast.error("Please choose a PDF file.");
      return;
    }
    try {
      const res = await fetch("/api/admin/resume", {
        method: "POST",
        headers: { "Content-Type": "application/pdf" },
        body: file,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        toast.success("Résumé uploaded. It is live within ~1 minute.");
      } else {
        toast.error(json.error || "Upload failed.");
      }
    } catch {
      toast.error("Upload failed.");
    } finally {
      e.target.value = "";
    }
  };
```

Then, **find this exact block** (the résumé URL text field) in the Resume tab:
```
                <div>
                  <Label className="text-xs">Resume PDF URL / Path</Label>
                  <Input
                    value={data.resumeOverride?.resumePdfUrl || "/resume.pdf"}
                    onChange={(e) => {
                      setData({
                        ...data,
                        resumeOverride: { ...data.resumeOverride, resumePdfUrl: e.target.value },
                      });
                    }}
                    placeholder="/resume.pdf or https://..."
                    className="mt-1 bg-secondary/50 text-xs"
                  />
                </div>
```
**Replace that entire block with:**
```
                <div>
                  <Label className="text-xs">Résumé PDF (upload replaces the live file)</Label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleResumeUpload}
                    className="mt-1 block w-full text-xs text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-sage/20 file:px-3 file:py-1.5 file:text-sage file:text-xs file:font-medium hover:file:bg-sage/30 cursor-pointer"
                  />
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    PDF only, max 4&nbsp;MB. Uploads immediately; no “Save” needed.
                  </p>
                </div>
```
Note: this is a plain `<input type="file">` (lowercase), NOT the shadcn `<Input>` component — do not change it to `<Input>`.

**Step 3d — point the site at the Blob URL.** File: `src/components/resume-modal.tsx`.
**Find this exact line:**
```
  pdfUrl = "/resume.pdf",
```
**Replace with:**
```
  pdfUrl = import.meta.env.VITE_RESUME_PDF_URL || "/resume.pdf",
```
Change nothing else in that file.

**Step 3e — user action, document it in your final report (do NOT hardcode a URL):** after the first successful upload, the endpoint returns the stable blob URL (shown in the browser network response). The user must set that URL as `VITE_RESUME_PDF_URL` in Vercel env and redeploy once. From then on, uploads need no redeploy.

**Verify:**
```
npm run typecheck && npm run build
```
Expected: both succeed, no errors. Functional check (user, on a deploy preview with the Blob store connected): log into `/admin`, Resume tab, choose a PDF → success toast; a non-PDF → rejected; logged-out POST to `/api/admin/resume` → 401.

**Known limitation to include in your report:** the résumé "Download PDF Resume" button uses `download="…"`; when `pdfUrl` is a cross-origin Blob URL the browser ignores the custom filename and opens the PDF in a new tab instead of downloading it renamed. This is acceptable; do not try to "fix" it with a proxy.

**Commit:** `feat(admin): résumé PDF upload via Vercel Blob (fixed-path overwrite, stable URL)`

---

## TASK 4 — Dark-mode redesign (design)

**Why:** light mode reads premium (warm cream + forest green); dark mode is generic cool-gray with no brand identity. Make dark the night version of the same warm/forest brand, add surface elevation and a faint ambient glow. **Only the dark tokens change. Do not touch the `.light { … }` block.**

**File:** `src/styles.css`

**Step 4a — replace the dark token block.** Find the block that begins with `:root {` and ends at the matching `}` immediately before `.light {`. It currently is exactly:
```
:root {
  --radius: 0.75rem;
  --background: #0a0a0b;
  --foreground: #f4f4f5;
  --card: #16181c;
  --card-foreground: #f4f4f5;
  --popover: #181a1f;
  --popover-foreground: #f4f4f5;
  --primary: #ececec;
  --primary-foreground: #0a0a0b;
  --secondary: #1e2126;
  --secondary-foreground: #e4e4e7;
  --muted: #1e2126;
  --muted-foreground: #9ca3aa;
  --accent: #232830;
  --accent-foreground: #f4f4f5;
  --destructive: #ef4444;
  --border: rgba(244, 244, 245, 0.12);
  --input: rgba(244, 244, 245, 0.15);
  --ring: #818cf8;
  --sage: #8fa896;
  --sage-foreground: #0a0a0b;
  --indigo: #818cf8;
  --indigo-muted: rgba(129, 140, 248, 0.12);
  --indigo-foreground: #ffffff;
  --shadow-border: 0 0 0 1px rgba(255, 255, 255, 0.08);
  --shadow-border-hover: 0 0 0 1px rgba(255, 255, 255, 0.18), 0 8px 30px rgba(0, 0, 0, 0.4);
}
```
**Replace it with exactly:**
```
:root {
  --radius: 0.75rem;
  --background: #0c0e0d;
  --foreground: #f2f4f1;
  --card: #151917;
  --card-foreground: #f2f4f1;
  --popover: #181d1a;
  --popover-foreground: #f2f4f1;
  --primary: #ececec;
  --primary-foreground: #0c0e0d;
  --secondary: #1c211e;
  --secondary-foreground: #e4e7e3;
  --muted: #1c211e;
  --muted-foreground: #9aa39c;
  --accent: #262c28;
  --accent-foreground: #f2f4f1;
  --destructive: #ef4444;
  --border: rgba(230, 240, 233, 0.14);
  --input: rgba(230, 240, 233, 0.17);
  --ring: #a3c2ab;
  --sage: #a3c2ab;
  --sage-foreground: #0c0e0d;
  --indigo: #818cf8;
  --indigo-muted: rgba(129, 140, 248, 0.14);
  --indigo-foreground: #ffffff;
  --shadow-border: 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  --shadow-border-hover: 0 0 0 1px rgba(163, 194, 171, 0.25), 0 12px 40px rgba(0, 0, 0, 0.5);
}
```

**Step 4b — add a subtle ambient glow in dark mode only.** In `src/styles.css`, find the base `body` rule:
```
  body {
    @apply bg-background text-foreground font-sans;
  }
```
Immediately **after** that rule (still inside the same `@layer base { … }`), add:
```
  html.dark body {
    background-image: radial-gradient(70% 45% at 50% -8%, rgba(163, 194, 171, 0.10), transparent 60%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
```
Do not add a light-mode equivalent.

**Do NOT change** the `.light { … }` block, the scrollbar rules (they now use `var(--background)` and are correct), or any `@keyframes`.

**Verify:**
```
npm run typecheck
```
Expected: no errors. Then the user visually checks BOTH themes: dark should show a warm/green-tinted ink with visibly floating cards and a faint top glow; light must be unchanged.

**Commit:** `style(theme): warmer high-elevation dark palette with ambient glow`

---

## TASK 5 — Small security/cleanup tail

Three independent, low-risk edits. Do all three, then one commit.

**5a — `rel="noopener noreferrer"` on external links.** Search the repo:
```
grep -rn 'target="_blank"' src
```
For **each** result that does **not** already have `rel="noopener noreferrer"` on the same element, add `rel="noopener noreferrer"`. Do not change any element that already has it (e.g. `resume-modal.tsx` already has it — leave it). Do not change the `href`, text, or anything else.

**5b — remove the unused `useEffect` import.** File: `src/components/portfolio-home.tsx`. Line 1 is:
```
import { useState, useEffect } from "react";
```
`useEffect` is no longer used in that file. Change the line to:
```
import { useState } from "react";
```
**Before committing, confirm** with `grep -n "useEffect" src/components/portfolio-home.tsx` that there are zero remaining uses. If any remain, revert this sub-step and leave the import.

**5c — gate `GET /api/admin/data`.** File: `src/routes/api/admin/data.ts`. The public site no longer calls this endpoint (content comes from the loader), so the GET should not serve data anonymously. **Find the `GET` handler** (currently returns the data with no auth). Add the same auth guard the POST handler uses, at the very top of the GET handler body, before it returns data:
```ts
        const sessionToken = getAdminSessionCookie(request);
        if (!verifySignedSessionToken(sessionToken || undefined)) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }
```
The GET handler signature must accept `{ request }` for this to work — if it is currently `GET: async () => {`, change it to `GET: async ({ request }) => {`. `getAdminSessionCookie` and `verifySignedSessionToken` are already imported in this file — confirm with `grep -n auth-session src/routes/api/admin/data.ts`; if not present, STOP and report (do not add a new import path).

**Verify:**
```
npm run typecheck && npm run lint
```
Expected: typecheck clean; lint shows no NEW errors (pre-existing warnings are acceptable).

**Commit:** `chore(security): noopener on external links, gate admin data GET, drop dead import`

---

## TASK 6 — (OPTIONAL, only if the user asks) remove orphaned DB code + unused deps

**Do not do this task unless the user explicitly requests it.** It touches the build pipeline; a mistake breaks deploys. `src/lib/db.ts` is currently harmless dead code, so skipping this is safe.

If asked:
1. Confirm nothing imports it: `grep -rn "lib/db\|getSql\|getPglite\|ensureDbReady" src` — expected: only matches **inside** `src/lib/db.ts` itself. If anything else matches, STOP.
2. Delete `src/lib/db.ts`.
3. `scripts/migrate.mjs` imports `pg` and runs in the build via `db:migrate`. It self-skips when `DATABASE_URL` is unset and when `migrations/` is absent (both currently true). You may either **leave it as-is** (safe no-op) or remove it: to remove, delete `scripts/migrate.mjs` AND change the `build` script to drop `&& npm run db:migrate` AND delete the `"db:migrate"` script line — all three together, or none.
4. Only after steps 1–3, remove now-unused deps: `npm uninstall better-auth kysely` (these are fully unused). Remove `@electric-sql/pglite` only if `db.ts` was deleted. Remove `pg` and `@types/pg` only if `migrate.mjs` was also removed.
5. **Verify:** `npm run typecheck && npm run build` both succeed. If the build fails, `git checkout .` to revert and report — do not chase the failure.

**Commit:** `chore: remove orphaned db.ts and unused database dependencies`

---

## FINAL REPORT (what to hand back to the user)
- Which tasks you completed and their commit hashes.
- The **user action items** you could not do: (a) create the Vercel Blob store before Task 3; (b) set `VITE_RESUME_PDF_URL` in Vercel env after the first résumé upload; (c) verify the manifest 404 and dark-mode visuals on the deployed site.
- Confirmation that `npm run typecheck` and `npm run build` are green on the final state.
- Do NOT merge to `main` or deploy — leave that to the user.
