# TASK 13 — Make the site do justice to the assets

> Addendum to `portfolio-gemini-plan.md`. **All "ABSOLUTE RULES" still apply.** Run `npm run typecheck` after every step. If an anchor string is not found EXACTLY, STOP and report. Change only what is specified.

---

## 🔴 STEP 0 — CONFIRM THE REPOSITORY (mandatory, do this first)

A previous session ran a fix in the **wrong repository** (`TRELIO--Execution-authorization-layer`), reported success, and changed nothing here. Before any edit:

```
git remote get-url origin
```

**Expected:** `https://github.com/Chanakya2006gt/Chanakya_Portfolio.git`

**If it is anything else — especially anything containing `TRELIO` — STOP immediately and report.** Do not proceed. Do not "also fix" the other repo.

---

## CONTEXT — the problem this task solves

The site now sells the **offer** well (ladder, pricing, workflow positioning, honest framing — all correct, do not touch). It badly undersells the **asset**.

Measured facts about Trelio, from its actual repo:
- **68,967 lines of source**
- **623 commits**
- **Continuous development since 25 March 2026**
- **58 test files**
- Multi-tenant, payments, PostgreSQL RLS, audit ledger

The site currently describes this as **"Agency Milestone & Payment System"**, and the only proof number anywhere on the site is `273,261 ops/s` — a throughput benchmark that speaks to engineers, not to the plant managers and agency owners who buy.

**Already correct — do NOT change:** `/method` is linked (it is in `navLinks` in `src/data/projects.ts`); `.vercel` is gitignored and untracked; the "modelled on a real Zambian packaging converter" framing is honest and must stay; the Apex/packaging platform is listed once (it is one codebase — never present it as two systems).

**Do the steps in order. STOP and report after each.**

---

# STEP 1 — Regenerate the numbers yourself (do NOT copy mine)

The figures above were measured on 31 Aug 2026 and **will drift** as you commit. Any number placed on a public site must be true on the day it ships.

Run these against the **Trelio** repo (read-only — do not modify it):

```
cd ~/TRELIO--Execution-authorization-layer
git rev-list --count HEAD
git log --reverse --format=%ad --date=format:'%B %Y' | head -1
find . -path ./node_modules -prune -o -type f \( -name '*.test.*' -o -name '*.spec.*' \) -print | grep -vc node_modules
```

Then `cd` back to the portfolio repo and re-run Step 0's check before editing anything.

**Record the three outputs and use YOUR values, not the ones in this document.** If any output differs materially from the figures above, use yours and note the difference in your report.

> **Durability rule:** prefer **"in continuous development since March 2026"** over **"five months of development."** The first stays true forever; the second rots silently and, on a page whose whole argument is rigour, a stale number is worse than no number.

---

# STEP 2 — Reframe Trelio so its scale is visible

### 2.1 The card headline
**File:** `src/components/portfolio-home.tsx`
**Find this exact string:**
```
Agency Milestone & Payment System
```
**Replace with:**
```
Multi-Tenant Payment & Approval Platform
```
> Rationale: "Agency Milestone & Payment System" reads like a feature. "Multi-tenant platform" is the language of the ₹18L+ market tier this object actually belongs to, and it is accurate — it genuinely is multi-tenant.

### 2.2 Add a scale line under the Trelio card
Immediately after the headline element you just changed, add one line of muted supporting text using **your Step 1 values**:

```
<p className="mt-1 text-xs text-muted-foreground">
  In continuous development since {MONTH YEAR} · {N} commits · {N} test suites · multi-tenant, payments, RLS, audit ledger
</p>
```
Substitute the three values from Step 1. Match the surrounding file's className conventions if they differ from the above.

> **This is the single most valuable addition in the task.** Every buyer evaluating a solo operator silently asks *"will he disappear at month four?"* Sustained commit history over many months is the only answer that isn't a promise — and it is verifiable on GitHub in ten seconds.

### 2.3 Strengthen the stack tags
**File:** `src/data/portfolio-data.json`. In `businesses[0]`, find:
```
"stack": ["React", "Node.js", "Multi-tenant", "Payments", "Audit logs"]
```
**Replace with:**
```
"stack": ["Multi-tenant", "PostgreSQL RLS", "Payments", "Audit ledger", "React", "Node.js"]
```
> Same facts, buyer-relevant ones first. `PostgreSQL RLS` is a genuine trust signal to anyone who has been burned by a data leak between customers; `React` is not a reason to hire anyone.

**Do not change** the Trelio `description` — it is accurate and well-written.

---

# STEP 3 — Swap the proof numbers from engineer-facing to buyer-facing

**File:** `src/components/apex-preview.tsx` (line ~216)

**Find:**
```
273,261 ops/s
```

**Do NOT delete it** — it is real and it belongs in an engineering context. **Demote it** and add a buyer-facing figure beside it.

In the same stat strip, add one further stat drawn from the packaging platform's real measurements. Verify the count first:
```
cd ~/Industrial-packaging-platform && grep -ci "policy" supabase/migrations/*.sql | awk -F: '{s+=$2} END {print s}'
```
Then render (using your measured value):
```
{N} row-level security policies
```
with a short label such as `Tenant data isolation`.

> Rationale: throughput answers *"is it fast?"* — a question no buyer asked. RLS policy count answers *"can another customer see my data?"* — the question every buyer has and none of them says out loud. Keep both; lead with the second.

---

# STEP 4 — Remove the portfolio filler

**File:** `src/data/portfolio-data.json`

**Delete the entire `sideProjects` entry whose `"title"` is `"This site"`** (the one with `liveUrl` `https://github.com/Chanakya2006gt/Chanakya_Portfolio`). Leave the `Apex Packaging & Converting` entry exactly as it is.

> Rationale: it sits beside your two real assets and dilutes them. A buyer evaluating a ₹4L build does not care that you built your own portfolio; its presence quietly signals you had only two things worth showing. Two strong assets beat three with one weak one.

**Verify nothing breaks:** the projects/systems section must still render with the remaining entries. If any component assumes a fixed array length or indexes `sideProjects[1]`, STOP and report rather than patching around it.

---

# STEP 5 — Make the build price honestly discussable

**File:** `src/components/offer-ladder.tsx` (line ~180)

The ladder currently presents `₹3.5L – ₹6.0L` as though it were a fixed price. Scope varies enormously across sectors, so the band should read as a **qualifying range with the exact figure coming out of the diagnosis**.

Keep the `₹3.5L – ₹6.0L` figure exactly as it is. Directly beneath it, add:
```
<p className="mt-1 text-xs text-muted-foreground">
  Typical range. Your exact fixed price comes out of the diagnosis — before you commit.
</p>
```

> **Do NOT remove the numbers.** A pricing block that raises the price question and refuses to answer it is worse than having none (the documented "84EM failure mode"). The band qualifies; the sentence makes it honest.

**Do not change** the ₹40,000 diagnosis price or the ₹20k–₹35k care price. ₹40,000 is 7–11% of the build — precisely the benchmark for a paid diagnostic — and lowering it would attract exactly the buyers this positioning exists to filter out.

---

## VERIFY (all must pass)
```
npm run typecheck && npm run lint && npm run build
grep -rn "This site" src/data/portfolio-data.json          # expect: no matches
grep -rn "Agency Milestone" src/                            # expect: no matches
grep -rn "273,261" src/                                     # expect: still present (demoted, not deleted)
```
Then run `npm run dev` and confirm in **both light and dark themes**: the Trelio card shows the scale line; the systems section renders with two entries; the offer ladder shows the band plus the new sentence.

## COMMIT
`feat(positioning): surface Trelio's real scale, buyer-facing proof metrics, and honest price framing`

---

## DO NOT
- Do **not** touch any repo other than `Chanakya_Portfolio`. The Trelio and packaging repos are **read-only sources of measurements** in this task.
- Do **not** invent, round up, or "improve" any number. Every figure must come from a command you ran in Step 1 or Step 3.
- Do **not** claim a test *count* from a test *file* count — 58 test **files** is not 58 tests. Say "test suites".
- Do **not** present the packaging platform and Printfast as two systems — they are one codebase (43 shared files).
- Do **not** re-add Kapstone anywhere; it is unshipped proposal work.
- Do **not** change the "modelled on a real Zambian packaging converter" wording — it is the honest framing and it was fixed deliberately.
- Do **not** change the ₹40,000 diagnosis price.
- Do **not** restyle, re-layout, or refactor anything. This task is copy and data only.

## REPORT BACK
- The three values you measured in Step 1 and the RLS count from Step 3, and whether they differed from this document's figures.
- Confirmation that `git remote get-url origin` returned the portfolio repo before you edited.
- Confirmation typecheck, lint and build are green, and that both themes were checked.
