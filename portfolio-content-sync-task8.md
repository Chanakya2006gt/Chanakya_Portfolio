# TASK 8 — Make the Site's Content Actually Updatable (and PDF-Driven)

> Addendum to `portfolio-gemini-plan.md`. **All "ABSOLUTE RULES" from that plan still apply** — run `npm run typecheck` after every stage; never put `process`/`fs`/`path`/`node:`/`@vercel/blob` at the top level of a file a React component or client-side loader imports; if an anchor is not found exactly, STOP and report; change only what is specified.

---

## THE PROBLEM (verified — read this before designing anything)

The user expects: *"I upload a new résumé PDF → the site's text updates."* That cannot happen today, for **three independent reasons**:

1. **Nothing parses the PDF.** Confirmed: no PDF library exists in the project. Uploading only replaces the downloadable file.
2. **`resume-modal.tsx` is ~85% hardcoded JSX.** Only `email`, `summary`, `education`, and `skills` come from data. The name, job title, location, university, coursework, the **entire Trelio section with all six bullets**, Leadership, and Practices & Interests are literal strings in the component. No data source can change them.
3. **Saves silently lie in production.** `src/data/store.server.ts` `savePortfolioData()` returns `true` on Vercel without writing anything (the filesystem is read-only). The admin panel shows *"Portfolio changes saved successfully!"* and nothing persists.

**Architecture decision (already made — implement this, do not redesign):** structured JSON is the single source of truth. It is persisted to **Vercel Blob** (the store already exists and is connected). The résumé page renders 100% from it. Uploading a PDF optionally uses AI to *prefill* that JSON for human review.

**Stages are independently shippable. Do them in order. STOP after each stage and report before starting the next.**

---

# STAGE 1 — Make saves actually persist (Vercel Blob)

**Goal:** admin edits survive, in production, with no redeploy. Nothing visual changes.

### 1.1 — Create `src/data/content.server.ts`

Server-only content store. Reads/writes a `content.json` blob, falls back to the bundled JSON, and caches briefly so SSR isn't slow.

```ts
import { head, put } from "@vercel/blob";
import { getPortfolioData, type DynamicData } from "./store";

const BLOB_PATH = "content.json";
const CACHE_TTL_MS = 60_000;

// Per-warm-instance cache so SSR does not refetch on every render.
let cached: { data: DynamicData; at: number } | null = null;

/** Read live content: Blob → bundled JSON fallback. Never throws. */
export async function readContent(): Promise<DynamicData> {
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.data;

  try {
    const meta = await head(BLOB_PATH);
    if (meta?.url) {
      const res = await fetch(meta.url, { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as DynamicData;
        if (data && Array.isArray(data.businesses)) {
          cached = { data, at: Date.now() };
          return data;
        }
      }
    }
  } catch {
    // No blob yet, or Blob unreachable — fall through to the bundled defaults.
  }

  const fallback = getPortfolioData();
  cached = { data: fallback, at: Date.now() };
  return fallback;
}

/** Persist content to Blob. Returns false on failure (caller must surface that). */
export async function writeContent(data: DynamicData): Promise<boolean> {
  try {
    await put(BLOB_PATH, JSON.stringify(data, null, 2), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      cacheControlMaxAge: 60,
    });
    cached = { data, at: Date.now() };
    return true;
  } catch (err) {
    console.error("[content] Blob write failed:", err);
    return false;
  }
}
```

### 1.2 — Serve content to the route through a server function

Create `src/data/content-fn.ts`:
```ts
import { createServerFn } from "@tanstack/react-start";

export const fetchContent = createServerFn({ method: "GET" }).handler(async () => {
  const { readContent } = await import("./content.server");
  return readContent();
});
```
> The dynamic `import()` inside the handler is REQUIRED — it keeps `@vercel/blob` out of the client bundle. Do not hoist it to a top-level import.

### 1.3 — Use it in the home route loader

**File:** `src/routes/index.tsx`. **Find:**
```
  loader: () => {
    return getPortfolioData();
  },
```
**Replace with:**
```
  loader: () => fetchContent(),
```
and update the import line — **find:**
```
import { getPortfolioData } from "@/data/store";
```
**replace with:**
```
import { fetchContent } from "@/data/content-fn";
```

### 1.4 — Make the admin save endpoint write to Blob

**File:** `src/routes/api/admin/data.ts`.
- In the **GET** handler, replace `const data = getPortfolioData();` with `const data = await readContent();`
- In the **POST** handler, replace `const saved = savePortfolioData(newData);` with `const saved = await writeContent(newData);`
- Update imports: remove the `savePortfolioData` import from `@/data/store.server`, and add `import { readContent, writeContent } from "@/data/content.server";`
- The existing `if (saved) { … } else { 500 }` branch stays — it now reports real failures instead of lying.

### 1.5 — Delete the lying code

**File:** `src/data/store.server.ts` — **delete this entire file.** Then confirm nothing imports it: `grep -rn "store.server" src` must return **no matches**. If anything still imports it, STOP.

### STAGE 1 VERIFY
```
npm run typecheck && npm run build
grep -rn "store.server" src        # expect: no matches
grep -rn "@vercel/blob" src/components src/routes/index.tsx   # expect: no matches (must not reach the client)
```
Functional (deploy preview): log into `/admin` → change the hero tagline → Save → **hard-refresh the public site** → the new tagline appears within ~60s. Then redeploy and confirm it is still there (proves it is not coming from the bundle).

**COMMIT:** `feat(content): persist portfolio content to Vercel Blob so admin edits go live`

---

# STAGE 2 — Make the résumé page 100% data-driven

**Goal:** every word on the résumé page comes from data. No hardcoded content.

### 2.1 — Extend the data shape

**File:** `src/data/store.ts`. Add this exported interface and reference it from `DynamicData`:
```ts
export interface ResumeSection {
  title: string;
  badge?: string;
  subtitle?: string;
  url?: string;
  bullets: string[];
}

export interface ResumeContent {
  fullName: string;
  title: string;
  location: string;
  email: string;
  summary: string;
  education: {
    institution: string;
    location: string;
    degree: string;
    coursework: string;
  };
  sections: ResumeSection[];   // Trelio and any future roles/projects
  leadership: string[];
  practices: string[];
}
```
Then add to `DynamicData`: `resume?: ResumeContent;`
**Keep `resumeOverride` exactly as it is** — other code still reads it. Do not remove or rename it.

### 2.2 — Seed the JSON with the CURRENT page content

**File:** `src/data/portfolio-data.json`. Add a top-level `"resume"` key whose values are **transcribed verbatim from the current `resume-modal.tsx`** — same name, title, location, degree, coursework string, the Trelio section with all six bullets (as plain strings; keep the "Label:" prefix at the start of each bullet), the three Leadership items, and the three Practices items.

> **Critical:** transcribe, do not rewrite, summarise, or "improve" any of this text. The page must look byte-identical after this stage. Copy each string exactly, including punctuation and the `users → teams → clients → projects → milestones` arrows.

### 2.3 — Refactor `resume-modal.tsx` to render from data

**File:** `src/components/resume-modal.tsx`.
- Add a `resume?: ResumeContent` prop.
- Replace every hardcoded content string with the matching field. Specifically: `NAGULAGAM CHANAKYA` → `resume.fullName`; the job title → `resume.title`; `Warangal, Telangana, India` → `resume.location`; the education block's `SR University` / `Warangal, Telangana` / coursework paragraph → `resume.education.*`; the whole Trelio card → `resume.sections.map(...)`; Leadership `<li>`s → `resume.leadership.map(...)`; Practices `<li>`s → `resume.practices.map(...)`.
- For each project bullet, keep the existing bold-prefix look: split each bullet on the first `":"` and render the part before it inside `<strong className="text-foreground">…:</strong>`, the rest as normal text. If a bullet has no `":"`, render the whole string plainly.
- Keep every existing className, icon, and layout element **exactly as-is**. This is a data-plumbing change, not a redesign.
- Keep the existing hardcoded values as fallbacks (`resume?.fullName ?? "NAGULAGAM CHANAKYA"` etc.) so the page still renders if `resume` is absent.

### 2.4 — Pass the data down

**File:** `src/components/portfolio-home.tsx`. Every place that renders `<ResumeModal … />` already passes `email`/`summary`/`education`/`skillsList`. Add `resume={data?.resume}` to **each** of those call sites. Do the same in `src/components/left-rail-nav.tsx` if it renders `ResumeModal` (check with `grep -n "ResumeModal" src/components/left-rail-nav.tsx`) — if that component has no access to the data, pass it through from its parent rather than fetching.

### 2.5 — Admin UI for all of it

**File:** `src/routes/admin/index.tsx`, "Resume & Qualifications" tab. Add controlled inputs for every `ResumeContent` field: text inputs for `fullName`, `title`, `location`, `email`, and the four `education` fields; a textarea for `summary` and for `coursework`; and repeatable editors for `sections` (title, badge, subtitle, url, plus add/remove bullet rows) and for `leadership` / `practices` (add/remove string rows). Follow the existing add/remove pattern already used for businesses and side projects — same `Button`/`Input`/`Label` components and classNames. Do not introduce a form library.

### STAGE 2 VERIFY
```
npm run typecheck && npm run build
grep -n "NAGULAGAM CHANAKYA" src/components/resume-modal.tsx   # expect: only inside a fallback expression, not as page copy
```
Visual: open the résumé modal before and after — it must look **identical**. Then change one field in admin (e.g. job title), save, reload → the résumé page reflects it.

**COMMIT:** `feat(resume): render the résumé entirely from editable content data`

---

# STAGE 3 — (OPTIONAL) AI prefill from an uploaded PDF

**Only start this after Stages 1 and 2 are shipped and verified.** This is what makes "upload a PDF → the site updates" real. It **must** keep a human review step — never save AI output straight to the live site.

### 3.1 — Add a serverless-safe PDF text extractor
```
npm install unpdf
```
(`unpdf` is chosen because it runs in serverless without native binaries. Do not substitute `pdf-parse`, which expects a Node filesystem.)

### 3.2 — New endpoint `POST /api/admin/resume-parse`
- Same admin-cookie auth guard as `/api/admin/resume` (copy that exact block).
- Accept the PDF bytes, extract text with `unpdf`'s `extractText`.
- If extracted text is under ~200 characters, return `400` with: `"We couldn't read any text from that PDF — it may be a scanned image. Please fill the fields in manually."` (This is the common failure: image-only PDFs have no text layer.)
- Send the text to OpenAI using the existing `OPENAI_API_KEY` via `getEnvVar`, with `response_format: { type: "json_object" }` and a prompt instructing it to return **exactly** the `ResumeContent` shape, and to **omit any field it cannot find rather than inventing one**.
- Validate the parsed object with `zod` (already a dependency) before returning. On validation failure return `422` with a friendly message.
- Return the parsed object — **do not write it to Blob.**

### 3.3 — Review flow in the admin UI
On PDF upload, call `/api/admin/resume` (stores the file, unchanged) **and** `/api/admin/resume-parse`. Load the parsed values into the existing Stage-2 form fields as **unsaved edits**, and show a clear notice: *"Filled in from your PDF — please check it, then press Save."* The user reviews and presses the existing Save. Nothing reaches the live site until they do.

### STAGE 3 VERIFY
`npm run typecheck && npm run build`. Functional: upload a real PDF → fields populate → deliberately leave without saving → reload → old content intact. Then upload, correct a field, save → site updates.

**COMMIT:** `feat(admin): prefill résumé fields from an uploaded PDF with AI, pending review`

---

## DO NOT
- Do not remove `src/data/portfolio-data.json` or `getPortfolioData()` — they are the offline fallback when Blob is empty or unreachable.
- Do not let `@vercel/blob` reach the client bundle (it is server-only).
- Do not auto-save AI-parsed content without user review.
- Do not restyle the résumé modal; Stage 2 is plumbing only.
- Do not touch `src/routes/api/chat.ts`, `login.ts`, or `auth-session.ts`.

## USER ACTION ITEMS TO REPORT BACK
- After Stage 1, the very first Save creates `content.json` in the Blob store; until then the site serves the bundled JSON (this is expected, not a bug).
- Content now lives in Blob, **not** in git. Note that `portfolio-data.json` in the repo becomes the fallback/seed only.
