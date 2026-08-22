# TASK 8 — AI Reads the Uploaded PDF and Updates the Site Automatically

> Addendum to `portfolio-gemini-plan.md`. **All "ABSOLUTE RULES" from that plan still apply.** Re-read them. In particular: run `npm run typecheck` after EVERY step; `vite build` does NOT type-check; never let `process`, `fs`, `path`, `node:*`, or `@vercel/blob` reach a file imported by a React component or a client-side loader; if an anchor string is not found EXACTLY, STOP and report; change only what is specified.

---

## VERIFIED STARTING STATE (do not assume anything else)
- Last commit: `cae6e2f` (Task 7 error/404 pages). Working tree clean apart from planning docs.
- `zod@^4.4.0` and `@vercel/blob@^2.8.0` are **already installed**. **NO new dependency is needed for this task. Do not run `npm install` at all.**
- `src/data/store.server.ts` **exists** and its `savePortfolioData()` returns `true` on Vercel *without writing anything* — the admin panel reports success while saving nothing. This task deletes that file.
- `src/routes/api/admin/resume.ts` — working PDF upload to Vercel Blob (fixed path `resume.pdf`).
- `src/routes/api/resume.ts` — redirects to the Blob PDF.
- `src/routes/api/chat.ts` — contains a **working OpenAI `fetch` call**. Reuse its exact shape (endpoint, auth header, `max_completion_tokens`). Do not invent a different client and do not add the `openai` npm package.
- `src/routes/index.tsx` — loads content via a server loader calling `getPortfolioData()` (bundled JSON).
- `src/components/resume-modal.tsx` — **~85% hardcoded JSX**; only `email`, `summary`, `education`, `skills` come from data.

## GOAL
Admin uploads a résumé PDF → an AI reads it → the site's résumé content updates automatically, live, with no redeploy and no manual form filling.

## THREE BLOCKERS (all must be removed; none is optional)
1. Content cannot persist — Vercel's filesystem is read-only. → **Step 1** (Blob).
2. The résumé page is hardcoded, so updated data would change nothing visible. → **Step 2**.
3. Nothing reads the PDF. → **Step 3**.

## SAFETY MODEL (auto-apply, but never destructive)
There is no manual review step — by design. Safety comes from four mechanisms, **all of which are required**:
- **Strict zod validation** — malformed AI output is rejected, never saved.
- **Automatic backup** — the previous content is copied to `content-backup.json` before every write, and can be restored.
- **Field-level merge** — only fields the AI actually returned are replaced. Anything it omits keeps its existing value, so a bad parse cannot blank the site.
- **Curated fields are never touched** — `businesses`, `sideProjects`, `heroTagline`, `availabilityStatus` are excluded, because a résumé PDF does not contain live URLs, badges, or taglines and overwriting them would destroy curated content.

**Do the steps in order. STOP and report after each step.**

---

# STEP 1 — Persist content to Vercel Blob

Nothing visual changes here. This makes saved content survive in production.

### 1.1 Create `src/data/content.server.ts`
```ts
import { head, put } from "@vercel/blob";
import { getPortfolioData, type DynamicData } from "./store";

const BLOB_PATH = "content.json";
const BACKUP_PATH = "content-backup.json";
const CACHE_TTL_MS = 60_000;

let cached: { data: DynamicData; at: number } | null = null;

/** Read live content: Blob, falling back to the bundled JSON. Never throws. */
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
    // No blob yet, or Blob unreachable — fall back to bundled defaults.
  }

  const fallback = getPortfolioData();
  cached = { data: fallback, at: Date.now() };
  return fallback;
}

/** Persist content to Blob, backing up the previous version first. */
export async function writeContent(data: DynamicData): Promise<boolean> {
  try {
    // Back up whatever is currently live, so a bad write is recoverable.
    try {
      const previous = await readContent();
      await put(BACKUP_PATH, JSON.stringify(previous, null, 2), {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/json",
        cacheControlMaxAge: 60,
      });
    } catch (backupErr) {
      console.error("[content] backup failed (continuing):", backupErr);
    }

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

/** Restore the backup over the live content. */
export async function restoreBackup(): Promise<boolean> {
  try {
    const meta = await head(BACKUP_PATH);
    if (!meta?.url) return false;
    const res = await fetch(meta.url, { cache: "no-store" });
    if (!res.ok) return false;
    const data = (await res.json()) as DynamicData;
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
    console.error("[content] restore failed:", err);
    return false;
  }
}
```

### 1.2 Create `src/data/content-fn.ts`
```ts
import { createServerFn } from "@tanstack/react-start";

export const fetchContent = createServerFn({ method: "GET" }).handler(async () => {
  const { readContent } = await import("./content.server");
  return readContent();
});
```
> The dynamic `import()` **must stay inside the handler**. Hoisting it to a top-level import ships `@vercel/blob` to the browser and breaks the site.

### 1.3 Wire the home route to it
**File:** `src/routes/index.tsx`.
Find `import { getPortfolioData } from "@/data/store";` → replace with `import { fetchContent } from "@/data/content-fn";`
Find the loader body that returns `getPortfolioData()` → replace the whole `loader:` property with:
```
  loader: () => fetchContent(),
```

### 1.4 Point the admin data endpoint at Blob
**File:** `src/routes/api/admin/data.ts`.
- Replace the `savePortfolioData` import from `@/data/store.server` with: `import { readContent, writeContent } from "@/data/content.server";`
- In **GET**: `const data = getPortfolioData();` → `const data = await readContent();`
- In **POST**: `const saved = savePortfolioData(newData);` → `const saved = await writeContent(newData);`
- Leave the surrounding auth guards and the `if (saved) … else 500` branch untouched.

### 1.5 Delete the file that lies
Delete `src/data/store.server.ts`. Then run `grep -rn "store.server" src` — **must return no matches.** If anything still imports it, STOP.

### STEP 1 VERIFY
```
npm run typecheck && npm run build
grep -rn "store.server" src                                    # expect: no matches
grep -rn "@vercel/blob" src/components src/routes/index.tsx    # expect: no matches
```
**COMMIT:** `feat(content): persist site content to Vercel Blob`

---

# STEP 2 — Make the résumé page render from data

Without this, AI updates change nothing on screen.

### 2.1 Define the schema — `src/data/resume-schema.ts`
This file is the single source of truth for both the TypeScript type and the runtime validation. It is imported by client and server, so it must contain **no Node APIs**.
```ts
import { z } from "zod";

export const resumeSectionSchema = z.object({
  title: z.string(),
  badge: z.string().optional(),
  subtitle: z.string().optional(),
  url: z.string().optional(),
  bullets: z.array(z.string()),
});

export const resumeContentSchema = z.object({
  fullName: z.string().optional(),
  title: z.string().optional(),
  location: z.string().optional(),
  email: z.string().optional(),
  summary: z.string().optional(),
  education: z
    .object({
      institution: z.string().optional(),
      location: z.string().optional(),
      degree: z.string().optional(),
      coursework: z.string().optional(),
    })
    .optional(),
  sections: z.array(resumeSectionSchema).optional(),
  leadership: z.array(z.string()).optional(),
  practices: z.array(z.string()).optional(),
  skills: z.record(z.string(), z.array(z.string())).optional(),
});

export type ResumeContent = z.infer<typeof resumeContentSchema>;
```
> Every field is `.optional()` on purpose: the AI must be free to omit anything it cannot find, and Step 3 merges only what is present.

### 2.2 Add `resume` to the data shape
**File:** `src/data/store.ts`. Add `import type { ResumeContent } from "./resume-schema";` at the top, and add this single line inside the `DynamicData` interface:
```
  resume?: ResumeContent;
```
**Do not remove or rename `resumeOverride`** — existing code still reads it.

### 2.3 Seed `portfolio-data.json` with the current page text
**File:** `src/data/portfolio-data.json`. Add a top-level `"resume"` object, transcribing the values **verbatim** from the current `src/components/resume-modal.tsx`:
`fullName`, `title`, `location`, `email`, `summary`, `education` (institution / location / degree / coursework), one entry in `sections` for Trelio (title, badge, subtitle, url, and all six bullets as plain strings **keeping the `Label:` prefix**), the three `leadership` strings, and the three `practices` strings.

> **Transcribe exactly. Do not rewrite, shorten, reword, or "improve" any string** — including the `users → teams → clients → projects → milestones` arrows. The rendered page must be visually identical after this step.

### 2.4 Render from the data
**File:** `src/components/resume-modal.tsx`.
- Add `resume?: ResumeContent;` to `ResumeModalProps` and destructure `resume` in the component signature.
- Replace each hardcoded string with the data field, **keeping the existing hardcoded value as the fallback** (`resume?.fullName ?? "NAGULAGAM CHANAKYA"`, etc.):
  - `NAGULAGAM CHANAKYA` → `resume?.fullName`
  - `Full-Stack & Security-Conscious Software Engineer` → `resume?.title`
  - `Warangal, Telangana, India` → `resume?.location`
  - education block's institution / location / degree / coursework paragraph → `resume?.education?.*`
  - the entire Trelio card → `(resume?.sections ?? []).map(...)`, falling back to the existing hardcoded card when `sections` is empty
  - Leadership `<li>` items → `resume?.leadership?.map(...)`
  - Practices `<li>` items → `resume?.practices?.map(...)`
- For each bullet, preserve the current bold-prefix styling: split the string on the **first** `":"`; render the part before it inside `<strong className="text-foreground">…:</strong>` and the remainder as plain text. If there is no `":"`, render the whole string plainly.
- **Keep every existing className, icon, and layout element byte-identical.** This is data plumbing, not a redesign.

### 2.5 Pass it down
In `src/components/portfolio-home.tsx`, add `resume={data?.resume}` to **every** `<ResumeModal … />` call site (there are several — find them all with `grep -n "ResumeModal" src/components/portfolio-home.tsx`). Do the same in `src/components/left-rail-nav.tsx` if it renders `ResumeModal`; if that component has no access to the data, thread it from its parent — **do not add a client-side fetch.**

### STEP 2 VERIFY
```
npm run typecheck && npm run build
```
Visual: open the résumé modal before and after this step — it must look **identical**. Then hand-edit one value in `portfolio-data.json`, restart dev, and confirm the page reflects it.
**COMMIT:** `feat(resume): render the résumé from content data`

---

# STEP 3 — AI reads the PDF and applies the update

### How the PDF reaches the model (verified against OpenAI's current docs — implement exactly this)
The Chat Completions endpoint accepts a PDF **directly** as a base64 content part. The API extracts both the text layer and page images, so scanned/image-only PDFs work too. **No PDF parsing library is needed.**

The user content array must be:
```json
[
  { "type": "file", "file": { "filename": "resume.pdf", "file_data": "data:application/pdf;base64,<BASE64>" } },
  { "type": "text", "text": "<INSTRUCTION>" }
]
```
The `data:application/pdf;base64,` prefix is **required**. The model must be vision-capable (gpt-4o or later). Limit is 50 MB — far above the endpoint's existing 4 MB cap.

> **Do NOT set `response_format: { type: "json_object" }`.** Its behaviour with file inputs is not documented, and a 400 there would break the feature. Instead instruct the model to return raw JSON and parse defensively (below).

### 3.1 Extend `src/routes/api/admin/resume.ts`
Keep the existing auth guard, content-type check, size check, and `put()` call **exactly as they are**. After the existing successful `put(...)`, add the AI step. The upload must still succeed even if the AI step fails.

Add these helpers **above** the `createFileRoute` call in the same file:

```ts
/** Pull a JSON object out of a model reply that may be fenced or padded with prose. */
function extractJsonObject(raw: string): unknown {
  const cleaned = raw.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch {
    return null;
  }
}

const RESUME_INSTRUCTION = `You are extracting structured data from a résumé PDF.

Return ONLY a raw JSON object. No markdown, no code fences, no commentary.

Use exactly this shape (omit any key you cannot find in the document — do NOT guess):
{
  "fullName": string,
  "title": string,
  "location": string,
  "email": string,
  "summary": string,
  "education": { "institution": string, "location": string, "degree": string, "coursework": string },
  "sections": [ { "title": string, "badge": string, "subtitle": string, "url": string, "bullets": [string] } ],
  "leadership": [string],
  "practices": [string],
  "skills": { "<Category>": [string] }
}

Rules:
- Copy wording from the document. Do not invent, embellish, or add achievements that are not written there.
- "sections" is for jobs/projects. Each bullet should start with a short bold-able label followed by a colon, e.g. "Multi-Tenant Architecture: Designed ...". Preserve the document's own phrasing.
- If the document is unreadable or is not a résumé, return {}.`;
```

Then, after the successful `put(...)`, run the extraction inside its own `try/catch`:
1. `const apiKey = getEnvVar("OPENAI_API_KEY");` — if absent or a placeholder, skip the AI step entirely and return the normal success response with `parsed: false`.
2. `const model = getEnvVar("OPENAI_RESUME_MODEL", getEnvVar("OPENAI_MODEL", "gpt-4o-mini-2024-07-18"));`
3. `const base64 = Buffer.from(bytes).toString("base64");`
4. POST to `https://api.openai.com/v1/chat/completions` using the **same header/auth shape as `src/routes/api/chat.ts`**, with the file+text content array above and `max_completion_tokens: 4000`.
5. If the response is not `ok`, `console.error` the body and return success with `parsed: false` and `parseError: "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually."`
6. Take `resData.choices?.[0]?.message?.content`, run `extractJsonObject`, then `resumeContentSchema.safeParse(...)` (import it from `@/data/resume-schema`). On failure → same `parsed: false` path.
7. On success, **merge and save** (see 3.2), then return `{ success: true, parsed: true, fields: <list of top-level keys the AI returned> }`.

`getEnvVar` must be imported from `@/lib/env` in this file.

### 3.2 The merge (this is the safety mechanism — implement it exactly)
```ts
const current = await readContent();
const ai = result.data; // validated ResumeContent

const mergedResume = {
  ...(current.resume ?? {}),
  ...Object.fromEntries(
    Object.entries(ai).filter(
      ([key, value]) =>
        key !== "skills" &&
        value !== undefined &&
        value !== null &&
        !(typeof value === "string" && value.trim() === "") &&
        !(Array.isArray(value) && value.length === 0),
    ),
  ),
};

const next = {
  ...current,                       // businesses, sideProjects, heroTagline,
                                    // availabilityStatus are carried over untouched
  resume: mergedResume,
  ...(ai.skills && Object.keys(ai.skills).length > 0 ? { skills: ai.skills } : {}),
  resumeOverride: {
    ...(current.resumeOverride ?? {}),
    ...(ai.summary ? { summary: ai.summary } : {}),
    ...(ai.email ? { email: ai.email } : {}),
    ...(ai.education?.degree ? { education: ai.education.degree } : {}),
  },
};

await writeContent(next);
```
Import `readContent` / `writeContent` from `@/data/content.server`.
> Empty strings and empty arrays are filtered out deliberately: a partial parse must never blank an existing field.

### 3.3 Restore endpoint — `src/routes/api/admin/restore.ts`
A new route with the **same admin auth guard** (copy it verbatim from `resume.ts`). On `POST`, call `restoreBackup()` from `@/data/content.server` and return `{ success: true }`, or `500` with `{ error: "We couldn't restore the previous version." }` when it returns false.

### 3.4 Admin UI feedback
**File:** `src/routes/admin/index.tsx`, in the existing `handleResumeUpload`. Keep the current success/error toasts, and add:
- when `json.parsed === true`: `toast.success("Résumé uploaded and details updated from the PDF. Refresh the site to see the changes.")`
- when `json.parsed === false`: `toast.warning(json.parseError || "Résumé uploaded. The details couldn't be read automatically — you can edit them manually.")` (use `toast` from `sonner`, already imported)
- Add an "Undo last update" button in the Resume tab that `POST`s to `/api/admin/restore` and toasts the result.

### STEP 3 VERIFY
```
npm run typecheck && npm run lint && npm run build
grep -n "response_format" src/routes/api/admin/resume.ts   # expect: no matches
```
Functional (deploy preview, admin logged in):
1. Upload a real résumé PDF → success toast says details were updated → reload the public site → the résumé modal shows the new content.
2. Press **Undo last update** → the previous content returns.
3. Upload a non-PDF → rejected with the friendly message, nothing changes.
4. Logged out `POST /api/admin/resume` → `401`.

**COMMIT:** `feat(admin): AI reads the uploaded résumé PDF and updates site content automatically`

---

## DO NOT
- Do **not** run `npm install` — every dependency needed is already present.
- Do **not** add the `openai` package or any PDF parsing library.
- Do **not** set `response_format` on the PDF request.
- Do **not** let the AI overwrite `businesses`, `sideProjects`, `heroTagline`, or `availabilityStatus`.
- Do **not** delete `portfolio-data.json` or `getPortfolioData()` — they are the fallback when Blob is empty.
- Do **not** restyle the résumé modal.
- Do **not** touch `src/routes/api/chat.ts`, `login.ts`, or `auth-session.ts`.

## REPORT BACK TO THE USER
- Commit hashes per step, and confirmation that `typecheck` + `build` are green.
- That `OPENAI_MODEL` must be a **vision-capable** model (gpt-4o or later) for PDF reading; `OPENAI_RESUME_MODEL` can override it just for this feature.
- That content now lives in the Blob store, not in git — `portfolio-data.json` is the seed/fallback only.
- That the first Save (or first AI update) creates `content.json`; before that the site serves the bundled JSON, which is expected.
