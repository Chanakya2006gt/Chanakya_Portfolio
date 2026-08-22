# TASK 7 — Exception Handling & Friendly Error Messages

> Addendum to `portfolio-gemini-plan.md`. **All rules from that plan's "ABSOLUTE RULES" section still apply** — especially: run `npm run typecheck` after every step; never put `process`/`fs`/`path`/`node:` at the top level of a client-imported file; if an anchor string is not found exactly, STOP and report; change only what is specified.

## Context (verified state)
Tasks 1–6 of the previous plan are implemented and `npm run typecheck` is clean. Résumé upload works via `POST /api/admin/resume` (Vercel Blob) and is served through the `GET /api/resume` redirect proxy.

## Why this task exists
An audit of every failure path found one **real crash chain** and several places where internal/technical text is shown to visitors. On a portfolio, an ugly error screen is seen by recruiters — it must look intentional and human.

Do the steps in order: **7A → 7B → 7C → 7D → 7E**. One commit at the end.

---

## STEP 7A — Fix the admin dashboard crash chain (REAL BUG — do this first)

**The bug:** in `src/routes/admin/index.tsx`, the response from `/api/admin/data` is parsed without checking `dataRes.ok`. That endpoint is now auth-gated and can return `401 {"error":"Unauthorized"}`. When it does, `setData({error:"Unauthorized"})` runs, and the render then calls `data.businesses.map(...)` on `undefined` → `TypeError` → the whole dashboard white-screens into the error boundary.

**File:** `src/routes/admin/index.tsx`

**Find this exact block:**
```
        const dataRes = await fetch("/api/admin/data");
        const dataJson = await dataRes.json();
        setData(dataJson);
```
**Replace with:**
```
        const dataRes = await fetch("/api/admin/data");
        if (!dataRes.ok) {
          setIsAuthenticated(false);
          navigate({ to: "/admin/login" });
          return;
        }
        const dataJson = await dataRes.json();
        if (!dataJson || !Array.isArray(dataJson.businesses)) {
          toast.error("We couldn't load your portfolio content. Please refresh the page.");
          return;
        }
        setData(dataJson);
```
Change nothing else in this file in this step. (`toast` and `navigate` are already imported here — confirm with `grep -n "import { toast }" src/routes/admin/index.tsx`; if missing, STOP.)

---

## STEP 7B — Rewrite the global error page (polite + on-brand)

**Three problems today:** it prints the raw `error.message` (visitors can see internal text like `Cannot read properties of undefined`), it uses hardcoded `zinc` colors so it does **not** match the site's warm/forest theme, and it offers no way out.

**File:** `src/lib/error-component.tsx`

**Replace the ENTIRE contents of the file with exactly:**
```tsx
import { useEffect } from "react";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert, RotateCw, ArrowLeft } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  // Keep the technical detail for debugging, but never show it to visitors.
  useEffect(() => {
    console.error("[app error]", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <span className="flex size-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/10 text-sage" aria-hidden="true">
        <TriangleAlert className="size-6" strokeWidth={2} />
      </span>

      <h1 className="font-serif text-2xl font-bold tracking-tight">
        Something went wrong on our side
      </h1>

      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        Sorry about that — this one is on us, not you. Refreshing usually sorts it
        out. If it keeps happening, I&apos;d genuinely like to know.
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-sage-foreground transition-opacity hover:opacity-90"
        >
          <RotateCw className="size-4" /> Try again
        </button>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="size-4" /> Back to the portfolio
        </a>
      </div>

      <a
        href="mailto:nagulagamchanakya2211@gmail.com?subject=Something%20broke%20on%20your%20portfolio"
        className="mt-2 text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-sage"
      >
        Tell me what happened
      </a>
    </main>
  );
}
```

---

## STEP 7C — Add a friendly 404 page

**Why:** `src/router.tsx` sets `defaultErrorComponent` but no `defaultNotFoundComponent`, so a mistyped or dead link renders TanStack Router's bare unstyled default. Portfolio links get shared — this page will be seen.

**Step 7C-1 — create `src/lib/not-found-component.tsx`** with exactly:
```tsx
import { Compass, ArrowLeft } from "lucide-react";

export function AppNotFoundComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <span className="flex size-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/10 text-sage" aria-hidden="true">
        <Compass className="size-6" strokeWidth={2} />
      </span>

      <p className="font-mono text-xs uppercase tracking-widest text-sage">404</p>

      <h1 className="font-serif text-2xl font-bold tracking-tight">
        This page doesn&apos;t exist
      </h1>

      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        The link may be out of date, or the page may have moved. Everything worth
        seeing is back on the main page.
      </p>

      <a
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-sage-foreground transition-opacity hover:opacity-90"
      >
        <ArrowLeft className="size-4" /> Back to the portfolio
      </a>
    </main>
  );
}
```

**Step 7C-2 — wire it up.** File: `src/router.tsx`.
**Find this exact line:**
```
import { AppErrorComponent } from "@/lib/error-component";
```
**Replace with:**
```
import { AppErrorComponent } from "@/lib/error-component";
import { AppNotFoundComponent } from "@/lib/not-found-component";
```
Then **find this exact line:**
```
  return createRouter({ routeTree, defaultErrorComponent: AppErrorComponent });
```
**Replace with:**
```
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: AppNotFoundComponent,
  });
```

---

## STEP 7D — Make the résumé 404 visitor-friendly

**Why:** `GET /api/resume` currently returns plain text saying *"Please upload via the admin panel."* That opens in a **new tab** (the Download button uses `target="_blank"`), so a recruiter sees a bare, broken-looking page containing an instruction meant for the site owner.

**File:** `src/routes/api/resume.ts`

**Find this exact block:**
```
        return new Response("Résumé PDF not found. Please upload via the admin panel.", {
          status: 404,
          headers: { "Content-Type": "text/plain" },
        });
```
**Replace with:**
```
        // Visitor-facing: this opens in a new tab, so return a styled page,
        // never an internal instruction.
        const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Résumé unavailable</title>
<style>
  body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;
    justify-content:center;gap:14px;background:#0c0e0d;color:#f2f4f1;text-align:center;padding:24px;
    font-family:Figtree,"Segoe UI",system-ui,sans-serif}
  h1{font-size:20px;margin:0;font-weight:700}
  p{margin:0;max-width:26rem;font-size:14px;line-height:1.6;color:#9aa39c}
  a{color:#a3c2ab;font-size:14px;text-decoration:underline;text-underline-offset:4px}
</style></head><body>
  <h1>The résumé isn&rsquo;t available right now</h1>
  <p>Sorry about that &mdash; it looks like the file is being updated. Please check
     back in a moment, or email me and I&rsquo;ll send it over straight away.</p>
  <a href="mailto:nagulagamchanakya2211@gmail.com?subject=Résumé%20request">Email me for a copy</a>
  <a href="/">Back to the portfolio</a>
</body></html>`;
        return new Response(html, {
          status: 404,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
```

---

## STEP 7E — Stop leaking internal detail in the upload error

**Why:** the upload endpoint returns `"Upload failed. Is BLOB_READ_WRITE_TOKEN configured?"` to the client. Server configuration details should stay in the logs, not appear in a toast.

**File:** `src/routes/api/admin/resume.ts`

**Find this exact block:**
```
          return new Response(
            JSON.stringify({ error: "Upload failed. Is BLOB_READ_WRITE_TOKEN configured?" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
```
**Replace with:**
```
          return new Response(
            JSON.stringify({
              error: "We couldn't save the résumé just now. Please try again in a moment.",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
```
The `console.error("[resume upload] Blob put failed:", err);` line directly above it **must stay** — that is where the real detail belongs. Do not remove it.

Also in the same file, **find:**
```
            JSON.stringify({ error: "File too large (max 4 MB)." }),
```
**Replace with:**
```
            JSON.stringify({ error: "That PDF is over 4 MB. Please upload a smaller file." }),
```
And **find:**
```
          return new Response(JSON.stringify({ error: "Only application/pdf is accepted." }), {
```
**Replace with:**
```
          return new Response(JSON.stringify({ error: "Please choose a PDF file." }), {
```

---

## VERIFY (run all of these — all must pass)
```
npm run typecheck
npm run lint
npm run build
```
Expected: typecheck clean, no NEW lint errors (pre-existing warnings OK), build succeeds.

Then confirm by inspection:
- `grep -n "error.message" src/lib/error-component.tsx` → **no matches** (raw error text is gone).
- `grep -n "zinc" src/lib/error-component.tsx` → **no matches** (now uses theme tokens).
- `grep -n "defaultNotFoundComponent" src/router.tsx` → **one match**.
- `grep -rn "BLOB_READ_WRITE_TOKEN" src/routes/api/admin/resume.ts` → **no matches**.

Manual check (local `npm run dev`):
- Visit `http://localhost:8080/this-page-does-not-exist` → styled 404 page, on-brand in both themes.
- Both new pages must look correct in **light and dark** mode (they use theme tokens, so toggle and confirm).

## COMMIT
`fix(ux): friendly on-brand error and 404 pages, guard admin data load, stop leaking internal error text`

## DO NOT
- Do not change `src/routes/api/chat.ts` — its fallback messages are already friendly and correct.
- Do not change the contact form in `portfolio-home.tsx` — its validation messages are already fine.
- Do not add a global `window.onerror` handler, an error-reporting service, or any new dependency.
