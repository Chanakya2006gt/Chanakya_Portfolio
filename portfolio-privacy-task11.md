# TASK 11 — Keep private details (CGPA, phone, address) off the public site

> Addendum to `portfolio-gemini-plan.md`. **All "ABSOLUTE RULES" still apply.** Run `npm run typecheck` after every step. If an anchor is not found EXACTLY, STOP and report. Change only what is specified.

---

## CONTEXT
The AI résumé extraction (Task 8) **works** — it read the user's PDF and wrote the result to Blob. But `RESUME_INSTRUCTION` contains **no privacy rules**, so it extracted `CGPA: 7.8/10` from the PDF and published it. A résumé PDF legitimately contains details that should **not** go on a public web page: academic scores, phone number, postal address, date of birth.

**Design principle: two layers.** A prompt instruction is a request, not a guarantee — a model can ignore it. So this task adds an instruction **and** a server-side sanitiser that strips the values even if the model returns them. Do not implement only one layer.

> **NOTE:** Task 10 has apparently **not** been applied (`max_completion_tokens` is still `4000` and there is no `finish_reason` logging). That is fine — extraction is working. Task 10 Step 1 (the CIS→CSE degree fix) is still worth doing separately, but is **not** part of this task.

**Do the steps in order. STOP and report after each.**

---

# STEP 1 — Tell the model what never to extract

**File:** `src/routes/api/admin/resume.ts`

**Find this exact block** at the end of `RESUME_INSTRUCTION`:
```
Rules:
- Copy wording from the document. Do not invent, embellish, or add achievements that are not written there.
- "sections" is for jobs/projects. Each bullet should start with a short bold-able label followed by a colon, e.g. "Multi-Tenant Architecture: Designed ...". Preserve the document's own phrasing.
- If the document is unreadable or is not a résumé, return {}.`;
```
**Replace with:**
```
Rules:
- Copy wording from the document. Do not invent, embellish, or add achievements that are not written there.
- "sections" is for jobs/projects. Each bullet should start with a short bold-able label followed by a colon, e.g. "Multi-Tenant Architecture: Designed ...". Preserve the document's own phrasing.
- If the document is unreadable or is not a résumé, return {}.

NEVER include the following, even if they appear in the document. This content is
published on a public website, so omit them entirely rather than paraphrasing:
- Academic scores of any kind: CGPA, SGPA, GPA, percentage, marks, grades, class rank.
- Phone numbers, WhatsApp numbers, or any other contact number.
- Postal/street address, house number, or PIN/ZIP code. A city and state are fine.
- Date of birth, age, gender, nationality, marital status, or father's/mother's name.
- Government or institutional ID numbers (Aadhaar, PAN, passport, roll number, registration number).
- Salary, CTC, or compensation figures.
- Any third party's personal contact details (e.g. a referee's phone or email).

If a line contains both allowed and disallowed content, return only the allowed part.
For example "B.Tech CSE, 2028 | CGPA: 8.1/10" must be returned as "B.Tech CSE, 2028".`;
```

**VERIFY:** `grep -n "NEVER include" src/routes/api/admin/resume.ts` → 1 match.

---

# STEP 2 — Strip it in code as well (the guarantee)

The model may still slip. This scrubs every extracted string before it is saved.

### 2.1 Add the sanitiser
**File:** `src/routes/api/admin/resume.ts`. Add this **directly above** the `const RESUME_INSTRUCTION` declaration:

```ts
/**
 * Redact details that must never reach the public site, even if the model
 * returns them despite the prompt. Applied to every extracted string.
 * Order matters: score/contact patterns first, separator cleanup last.
 */
const SENSITIVE_PATTERNS: RegExp[] = [
  // CGPA / SGPA / GPA with an optional "/10" or "/4" denominator
  /\s*[|·,;—–-]?\s*\b(?:C?GPA|SGPA)\b\s*[:=-]?\s*\d+(?:\.\d+)?\s*(?:\/\s*\d+(?:\.\d+)?)?/gi,
  // "Percentage: 85.5%" or "Marks: 85%"
  /\s*[|·,;—–-]?\s*\b(?:percentage|marks|aggregate)\b\s*[:=-]?\s*\d+(?:\.\d+)?\s*%?/gi,
  // A bare percentage directly after a comma/pipe (e.g. "B.Tech CSE, 88%")
  /\s*[|·,;—–-]\s*\d{1,3}(?:\.\d+)?\s*%/g,
  // Phone numbers: +91 98765 43210, (040) 1234-5678, 9876543210
  /\s*[|·,;—–-]?\s*(?:\+\d{1,3}[\s-]?)?(?:\(\d{2,5}\)[\s-]?)?\d{3,5}[\s-]?\d{3,5}(?:[\s-]?\d{2,5})?(?=\s|$|[|·,;])/g,
  // Date of birth / age
  /\s*[|·,;—–-]?\s*\b(?:D\.?O\.?B\.?|date of birth|age)\b\s*[:=-]?\s*[^|·,;\n]{0,24}/gi,
];

function redactSensitive(value: string): string {
  let out = value;
  for (const pattern of SENSITIVE_PATTERNS) out = out.replace(pattern, "");
  // Tidy separators/whitespace left behind by a removal.
  return out
    .replace(/\s{2,}/g, " ")
    .replace(/\s*([|·])\s*([|·])\s*/g, " $1 ")
    .replace(/^[\s|·,;—–-]+/, "")
    .replace(/[\s|·,;—–-]+$/, "")
    .trim();
}

/** Deep-clean every string in the extracted object, preserving its shape. */
function scrubDeep<T>(input: T): T {
  if (typeof input === "string") return redactSensitive(input) as unknown as T;
  if (Array.isArray(input)) {
    return input
      .map((item) => scrubDeep(item))
      .filter((item) => !(typeof item === "string" && item.trim() === "")) as unknown as T;
  }
  if (input && typeof input === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(input as Record<string, unknown>)) {
      const cleaned = scrubDeep(val);
      if (typeof cleaned === "string" && cleaned.trim() === "") continue; // drop emptied fields
      out[key] = cleaned;
    }
    return out as unknown as T;
  }
  return input;
}
```

> **The phone pattern is the risky one** — it can match long digit runs. It is deliberately anchored to require a preceding separator or start, and a following separator/end. After implementing, run the Step 2.3 check below to confirm it does not damage legitimate content.

### 2.2 Apply it to the validated result
**Find this exact line:**
```
          const ai = result.data; // validated ResumeContent
```
**Replace with:**
```
          // Redact anything private BEFORE it is merged or persisted.
          const ai = scrubDeep(result.data); // validated + sanitised ResumeContent
```
Change nothing else in the merge logic.

### 2.3 REQUIRED sanity check (run before committing)
Create a throwaway file `/tmp/scrub-check.mjs`, paste in the `SENSITIVE_PATTERNS` + `redactSensitive` definitions, and confirm these exact results:

| Input | Expected output |
|---|---|
| `"SR University — B.Tech CSE (2028) \| CGPA: 7.8/10"` | `"SR University — B.Tech CSE (2028)"` |
| `"B.Tech CSE, 2028, CGPA 8.1"` | `"B.Tech CSE, 2028"` |
| `"Warangal, Telangana, India"` | unchanged |
| `"Integrated Razorpay with per-team AES-256-GCM encrypted credentials"` | unchanged |
| `"Contract Lifecycle & SHA-256: Milestone agreements generated"` | unchanged |
| `"Multi-Tenant SaaS for Freelancers & Agencies"` | unchanged |

**If any "unchanged" row is altered, the phone/percentage regex is too greedy — loosen it and re-test. Do NOT commit a sanitiser that damages legitimate résumé text.** Delete the scratch file afterwards.

**VERIFY:** `npm run typecheck && npm run build`

---

# STEP 3 — Fix the Content-Type bug (spotted while reviewing)

**File:** `src/routes/api/admin/resume.ts`. The 415 response declares itself a PDF.

**Find:**
```
            status: 415,
            headers: { "Content-Type": "application/pdf" },
```
**Replace with:**
```
            status: 415,
            headers: { "Content-Type": "application/json" },
```

---

# STEP 4 — Clear the CGPA that is already published

The sanitiser only affects **future** uploads. The current Blob content still contains the CGPA. After deploying Steps 1–3, do **one** of these:

- **Preferred:** log into `/admin` → Resume tab → **re-upload the same PDF**. The extraction re-runs with the new rules and overwrites `education`, removing the CGPA.
- **Immediate stop-gap (if the user wants it gone right now, before deploying):** `/admin` → **"Undo last update"** — this restores the pre-AI backup. Note this also reverts every other field the AI filled in.

Confirm afterwards by hard-refreshing the public site and opening the résumé modal — allow ~60 s for the Blob cache.

**COMMIT (Steps 1–3):** `fix(privacy): never publish CGPA, phone, or other private details from the résumé PDF`

---

## DO NOT
- Do **not** implement only the prompt rule and skip the sanitiser, or vice versa — both layers are required.
- Do **not** add a `phone` or `cgpa` field to `resume-schema.ts`.
- Do **not** change the merge logic, backup/restore flow, or `content.server.ts`.
- Do **not** apply Task 10 as part of this task.
- Do **not** commit a sanitiser that fails any "unchanged" row in the Step 2.3 table.

## REPORT BACK
- The actual Step 2.3 table results (all six rows).
- Confirmation that `typecheck` and `build` are green.
- Remind the user to re-upload the PDF so the already-published CGPA is replaced.
