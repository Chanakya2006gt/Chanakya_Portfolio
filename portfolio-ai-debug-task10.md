# TASK 10 — Fix the AI Résumé Extraction (silent failure) + a content regression

> Addendum to `portfolio-gemini-plan.md`. **All "ABSOLUTE RULES" still apply.** Run `npm run typecheck` after every step. If an anchor is not found EXACTLY, STOP and report. Change only what is specified.

---

## DIAGNOSIS (read before editing)

Task 8 is implemented correctly — the pipeline, schema, merge, and backup all match the spec. There is **no bug in the plumbing**. Two separate things are actually happening:

### Finding 1 — "the page looks the same" is EXPECTED, not a failure
Task 8 Step 2.3 deliberately instructed transcribing the old hardcoded text into `portfolio-data.json` **verbatim**, so the page would look byte-identical after the refactor. It does. That is proof the data-driven refactor worked. The displayed content only changes once a PDF is uploaded **and** successfully parsed.

### Finding 2 — REAL BUG: the site now shows the WRONG DEGREE
`portfolio-data.json` → `resume.education.degree` was transcribed as:
```
"SR University — B.Tech CIS (Expected 2028)"
```
That string came from the old **hardcoded fallback** in `resume-modal.tsx`, not from the real data. Meanwhile `resumeOverride.education` holds the correct `"SR University — B.Tech CSE (2028)"`. Because `resume?.education?.degree` now takes precedence, the live site changed from **CSE** to **CIS** — a wrong degree name on a résumé. Fix in Step 1.

### Finding 3 — LIKELY CAUSE of extraction never taking effect
`OPENAI_MODEL` is **`gpt-5.6-terra`**, which is a **reasoning model**. On reasoning models, internal reasoning tokens are billed against the **same** `max_completion_tokens` budget as the visible reply. The endpoint currently sets `max_completion_tokens: 4000`. Reading a multi-page PDF and emitting a full résumé JSON can easily exhaust that budget on reasoning alone, in which case the API returns **`finish_reason: "length"` with empty `content`**.

Empty content → `extractJsonObject()` returns `null` → the handler returns `parsed: false` → the upload still reports success and **nothing is written**. That is a silent no-op that looks exactly like "nothing happened."

Step 2 raises the budget, lowers reasoning effort (extraction is mechanical, not a reasoning task), and adds logging that will confirm or eliminate this theory definitively.

---

# STEP 1 — Fix the wrong degree

**File:** `src/data/portfolio-data.json`

**Find this exact line** (inside the `resume.education` object):
```
      "degree": "SR University — B.Tech CIS (Expected 2028)",
```
**Replace with:**
```
      "degree": "SR University — B.Tech CSE (2028)",
```
> If the line differs in whitespace or trailing comma, match the `"degree"` key inside `resume.education` and set its value to `SR University — B.Tech CSE (2028)`. Do not touch `resumeOverride`.

Also check `resume.summary` in the same file. If it begins with `"Computer and Information Science student"`, that is the same stale-fallback text. **Report it to the user but do NOT change it** — the wording is theirs to decide, and the AI extraction will overwrite it anyway once working.

**VERIFY:** `grep -n "CIS" src/data/portfolio-data.json` → expect **no matches**.

---

# STEP 2 — Make the extraction actually complete

**File:** `src/routes/api/admin/resume.ts`

### 2.1 Give the model room to think AND answer
**Find this exact line:**
```
              max_completion_tokens: 4000,
```
**Replace with:**
```
              max_completion_tokens: 16000,
              reasoning_effort: "low",
```
> Rationale: `16000` leaves room for reasoning plus a full JSON résumé. `reasoning_effort: "low"` keeps the reasoning budget small because copying fields out of a document is mechanical work, not a reasoning problem.
>
> **Fallback instruction:** if a test upload returns HTTP 400 with an error mentioning `reasoning_effort` (i.e. the parameter is unsupported on this endpoint/model), remove **only** the `reasoning_effort: "low",` line and keep `max_completion_tokens: 16000`. Do not remove the token change. Report which variant you ended up with.

### 2.2 Log what actually came back (diagnostics)
**Find this exact block:**
```
          const resData = await response.json();
          const rawContent = resData.choices?.[0]?.message?.content || "";
          const extractedJson = extractJsonObject(rawContent);
```
**Replace with:**
```
          const resData = await response.json();
          const finishReason = resData.choices?.[0]?.finish_reason;
          const rawContent = resData.choices?.[0]?.message?.content || "";
          // Diagnostics: `length` here means the token budget was exhausted
          // (on reasoning models, reasoning tokens count toward it).
          console.log(
            "[resume extraction] finish_reason:", finishReason,
            "| content chars:", rawContent.length,
            "| usage:", JSON.stringify(resData.usage ?? {}),
          );
          const extractedJson = extractJsonObject(rawContent);
```

### 2.3 Tell the user *why* it failed, specifically
**Find this exact block:**
```
          if (!extractedJson) {
```
Immediately **inside** that block, **before** its existing `return`, add:
```
            console.error("[resume extraction] no JSON in reply. finish_reason:", finishReason, "raw:", rawContent.slice(0, 500));
```
Then, in that same block's returned JSON, replace the `parseError` value with:
```
                parseError:
                  finishReason === "length"
                    ? "The résumé was uploaded, but the AI ran out of room while reading it. Try a shorter PDF, or contact support to raise the limit."
                    : "The résumé was uploaded, but we couldn't read it automatically. You can edit the details manually.",
```
> If the existing block's shape does not match closely enough to apply this cleanly, STOP and report the block's actual contents rather than guessing.

**VERIFY:**
```
npm run typecheck && npm run build
grep -n "max_completion_tokens: 16000" src/routes/api/admin/resume.ts   # expect: 1 match
grep -n "finish_reason" src/routes/api/admin/resume.ts                  # expect: matches present
```

---

# STEP 3 — Confirm it works (REQUIRED — do not skip)

This task is **not complete** until an actual upload has been observed. Deploy, then:

1. Log into `/admin`, open the **Resume** tab, upload a real résumé PDF.
2. **Read the toast.** Report its exact text.
3. Open the Vercel deployment's **Function logs** and find the `[resume extraction]` lines. Report:
   - `finish_reason` (`stop` = good; `length` = still out of budget)
   - `content chars` (0 = model returned nothing)
   - the `usage` object (especially any `reasoning_tokens`)
4. If it succeeded: hard-refresh the public site and confirm the résumé section now reflects the PDF.
5. If it still fails, **report the logged values and STOP** — do not make further changes on your own.

**COMMIT:** `fix(resume): correct degree, raise AI token budget, and log extraction diagnostics`

---

## DO NOT
- Do **not** change the merge logic, the zod schema, `content.server.ts`, or the backup/restore flow — they are correct.
- Do **not** switch to the Responses API or add the `openai` npm package.
- Do **not** add a PDF parsing library.
- Do **not** "fix" the fact that the page currently matches the old text — that is the intended seeded state.
- Do **not** edit `resumeOverride` in `portfolio-data.json`.

## REPORT BACK
- Whether `reasoning_effort` was kept or removed.
- The exact toast text and the `[resume extraction]` log values from a real upload.
- Confirmation that `grep -n "CIS" src/data/portfolio-data.json` returns nothing.
