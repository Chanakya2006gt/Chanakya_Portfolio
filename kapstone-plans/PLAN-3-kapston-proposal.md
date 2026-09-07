# Implementation Plan 3 — `kapston-proposal`

**Repo:** `kapston-proposal`
**Remote:** `https://github.com/Chanakya2006gt/kapston-proposal.git`
**Branch:** `pitch-pc-design` ← **note: NOT `main`**
**Stack:** React 18 + Vite 6 + TypeScript 5.7 + Tailwind v3
**Package name:** `kapston-partner-control-system`
**Scope:** add a README, and make the demo PII obviously synthetic. No feature work, no refactors.

---

## ⚠️ READ THIS ENTIRE SECTION BEFORE TOUCHING ANY FILE

### Rule 1 — Do not hallucinate. Ever.

This repo is an unsolicited design proposal for **Kapston Services Limited** (NSE: `KAPSTON`) — a real, listed company. It is an internal operations console: partner KYC review, live job dispatch, work-quality approval, payout settlement, and an audit trail.

That means:

- **Do NOT invent features in the README.** Describe only what you have actually read in the code. If you are unsure whether a feature exists, open the file and check — or leave it out.
- **Do NOT invent metrics, screenshots, deployment URLs, roadmap items, licence text, contributor names, or a changelog.**
- **Do NOT invent real-looking identity or financial data.** This task is specifically about *reducing* how real the fake data looks — do not make it worse.
- **Every value you write must come from one of exactly two places:** (a) this plan document, quoted verbatim, or (b) something you have directly read in this repo's source.

### Rule 2 — If anything is unclear, STOP and ask.

Stop and ask Chanakya before proceeding if:

- A string this plan tells you to find does not exist, or differs from what is quoted here.
- A line number does not match (**always match on the quoted string, never the line number**).
- You need a fact about the project that is not in this plan and not readable from the code.
- You are tempted to write "TODO", "coming soon", or a placeholder URL.

Ask a specific question. Do not guess.

### Rule 3 — Scope discipline.

Do not reformat, reorder imports, change Tailwind classes, upgrade dependencies, add tests, add CI, or restructure folders. Two tasks only.

---

## Step 0 — Confirm you are in the right repo AND the right branch

```bash
git remote get-url origin   # MUST print: https://github.com/Chanakya2006gt/kapston-proposal.git
git branch --show-current   # MUST print: pitch-pc-design
git status --short
git log --oneline -3        # expect: 3ddd336, 98ee331, d9a1ec1
```

⚠️ This repo's working branch is **`pitch-pc-design`**, not `main`. If you are on a different branch, **STOP and ask** — do not switch branches on your own.

If the remote is `Kapstone_corporate_HQ`, `Kapstone_home_services`, `TRELIO` or anything else — **STOP.** Wrong directory.

---

## Task C1 — Write the missing README

**File to create:** `README.md` at the repo root. This file does not currently exist.

### 🚨 Before writing a single line, read these files

Do not write the README from this plan alone, and do not write it from the file names. **Open and read** at minimum:

- `package.json` — scripts and dependencies
- `index.html` — title and meta description
- `src/App.tsx` — top-level routing/view switching
- `src/context/AppContext.tsx` — the state actions
- `src/components/common/DemoBanner.tsx` — the disclosure text
- The five feature areas: `src/components/kyc/`, `src/components/jobs/`, `src/components/quality/`, `src/components/payouts/`, `src/components/audit/`

If what you read contradicts anything below, **trust the code and tell Chanakya about the discrepancy.**

### Verified facts you may state

These have been checked directly in the repo — you may use them verbatim:

- **Project name:** `kapston-partner-control-system` (from `package.json`)
- **Page title:** `Kapston Partner Control | Design Proposal` (from `index.html`)
- **Meta description:** `Design proposal and sample operations control console for Kapston Services Limited.`
- **Demo banner text:** `Design proposal · sample ops data · not a live Partner Control system`
- **Stack:** React 18.3.1, React DOM 18.3.1, Vite 6.1, TypeScript 5.7, Tailwind CSS 3.4, `lucide-react` (icons), `clsx` + `tailwind-merge` (class utilities)
- **Scripts:** `dev` → `vite`, `build` → `tsc && vite build`, `preview` → `vite preview`
- **State actions in `AppContext.tsx`:** `approvePartner`, `requestPartnerCorrection`, `rejectPartner`, `reassignJob`, `approveJobProof`, `requestJobRework`, `flagJobDispute`, `clearPayoutBatch`, `resetAllData`, plus `logActivity` / `addToast` / `removeToast` internals
- **Persistence:** state is held in React context and persisted to `localStorage`. **There is no backend and no API.**
- **Seed data:** `src/data/mockPartners.ts` (7 partner records), `src/data/mockJobs.ts`, `src/data/mockAuditLogs.ts`

### Required README structure

Write these sections, in this order:

1. **Title + one-line description.** Must state plainly that this is a **design proposal / prototype for Kapston Services Limited, not a production system.**
2. **⚠️ Proposal disclosure.** A short block stating: all partner, job, payout and audit data is **synthetic sample data**; there is no backend; no real identity or banking information is present; nothing in the app performs a real financial transaction or KYC verification.
3. **What it demonstrates.** The five consoles — KYC review, live dispatch, work-quality gatekeeping, payout settlement, activity/audit trail. One sentence each, describing only what the code actually does.
4. **How it works.** React context + `localStorage`; actions mutate local state and append audit-trail entries; no network calls.
5. **Getting started.** `npm install`, `npm run dev`, `npm run build`, `npm run preview`.
6. **Project structure.** A short tree of `src/` — only directories that actually exist.
7. **Status.** Branch `pitch-pc-design`; unsolicited proposal; not affiliated with or endorsed by Kapston Services Limited.

### 🚨 What must NOT go in the README

- No licence section (none has been chosen — **ask Chanakya** if you think one is needed).
- No deployment URL. A Vercel deployment exists but **do not write a URL you have not been given.** If you want to include one, ask.
- No screenshots or image links (there are no image assets to link).
- No contributor/credits/acknowledgements section.
- No roadmap, changelog, or "planned features" — you would be inventing them.
- No badges (build status, coverage, licence) — they would all be false.
- No claim that the system is live, in production, deployed for Kapston, or endorsed by Kapston.
- No performance numbers, user counts, or test coverage figures. **There are no tests in this repo — do not imply there are.**

### Verify C1

```bash
test -f README.md && echo "README exists"
grep -i "design proposal" README.md      # expect: at least 1 match
grep -i "synthetic\|sample data" README.md  # expect: at least 1 match
grep -ci "licen[sc]e\|badge\|screenshot" README.md   # expect: 0
```

---

## Task C2 — Make the synthetic identity/banking data obviously synthetic

**Files:** `src/data/mockPartners.ts` and `src/data/mockAuditLogs.ts` (only these two).

### The problem

The seed data is realistic enough that a screenshot cropped above the demo banner could be mistaken for a real ops console showing real people's KYC and banking details. Confirmed values include:

| Location | Field | Current value |
|---|---|---|
| `mockPartners.ts` | `'UID Number'` (Aadhaar) | `'4829 1920 8921'`, `'9102 4819 4091'` |
| `mockPartners.ts` | `'PAN Number'` | `'BNXPK4921E'`, `'CFQPI9201L'` |
| `mockPartners.ts` | `accountNumber` | `'50100492817291'`, `'309281749102'` |
| `mockPartners.ts` | `upiId` | `'venkatkandula@okhdfcbank'` |
| `mockAuditLogs.ts` | `bankReferenceId` | `'HDFC-NEFT-928104819'` |

There are **7 partner records**; the table above lists examples, not the complete set. You must handle **all** occurrences across all 7.

### The approach — mask, do not replace

**Do NOT invent new fake numbers.** Swapping one realistic-looking Aadhaar number for a different realistic-looking Aadhaar number solves nothing and risks colliding with a real person's identifier.

Instead, **mask them the way a real KYC console legally must.** This both removes the risk and makes the demo *more* credible to an operations buyer, because masked identifiers are what a compliant Indian KYC screen actually displays.

Apply these transformations to **every** occurrence:

| Field | Rule | Example: before → after |
|---|---|---|
| `'UID Number'` (Aadhaar) | Mask the first 8 digits, keep the real last 4 grouping. This is the UIDAI-compliant display format. | `'4829 1920 8921'` → `'XXXX XXXX 8921'` |
| `'PAN Number'` | Keep the first 2 and last 1 character, mask the middle. | `'BNXPK4921E'` → `'BN*******E'` |
| `accountNumber` | Mask all but the last 4 digits. | `'50100492817291'` → `'XXXXXXXXXX7291'` |
| `upiId` | Replace the handle's local part with a generic label, keep the provider suffix. | `'venkatkandula@okhdfcbank'` → `'partner****@okhdfcbank'` |
| `bankReferenceId` | Replace the numeric tail with `X`s, keep the prefix shape. | `'HDFC-NEFT-928104819'` → `'HDFC-NEFT-XXXXXXXXX'` |

**Preserve the character count** where the masked example above does (e.g. the account number stays 14 characters) so no layout breaks.

### Leave these alone

- **Partner names** (`Venkat Reddy Kandula`, `Mohammed Irfan Qureshi`, `S. Anitha Rao`, `P. Ramesh Babu`, `G. Naveen Kumar`, `Syed Aslam Basha`, `K. Swapna Priya`) — these are plainly synthetic persona names, not a compliance risk, and changing them churns the whole dataset for no gain.
- **`ifscCode`** values (`HDFC0001244`, `SBIN0008472`) — IFSC codes are public branch identifiers, not personal data.
- **Bank names**, branch names, `bankVerified` booleans, tiers, hubs, statuses.
- **Payout amounts** (e.g. `₹48,920.00`), job counts, timestamps, and every audit-log description string.
- **All of `mockJobs.ts`.**

### Verify C2

```bash
grep -rnE "[0-9]{4} [0-9]{4} [0-9]{4}" src/data/mockPartners.ts    # expect: only XXXX XXXX #### forms
grep -rnE "'[A-Z]{5}[0-9]{4}[A-Z]'" src/data/mockPartners.ts       # expect: no matches (no unmasked PANs)
grep -rn "@ok" src/data/mockPartners.ts                            # expect: only partner****@ forms
grep -rn "HDFC-NEFT-9" src/data/mockAuditLogs.ts                   # expect: no matches
npx tsc --noEmit                                                   # expect: no errors
npm run build
```

Then run `npm run dev` and open the **Partner KYC console** and a **KYC review modal** — confirm the masked values render without breaking the layout, and that nothing shows `undefined`.

---

## Task C3 — `dist/` is fine, do nothing (informational)

**No action. This exists so you do not "fix" a non-problem.**

A `dist/` directory exists on disk. It is **listed in `.gitignore` and is not tracked by git** — which is correct and normal. An earlier review noted "`dist/` is not in the tree"; both observations are consistent: it is present locally, absent from version control.

**Do NOT** commit `dist/`, **do NOT** remove it from `.gitignore`, and **do NOT** delete it.

---

## Global verification before you report done

```bash
git remote get-url origin      # confirm still kapston-proposal
git branch --show-current      # confirm still pitch-pc-design
npx tsc --noEmit               # expect: no errors
npm run build                  # expect: clean build
npm run dev                    # then click through manually:
```

Manual pass:
1. Dark demo banner still present: `Design proposal · sample ops data · not a live Partner Control system`.
2. Partner KYC console — masked Aadhaar/PAN/account values render cleanly, no layout break, no `undefined`.
3. Approve a partner, request a correction, reject a partner — each still updates state and appends an audit-trail entry.
4. Approve a job proof and request rework — both still work.
5. Clear a payout batch — still generates a batch and moves jobs to settled.
6. `README.md` renders correctly on GitHub's preview (check heading levels and the code fences).

> **Note on builds:** an earlier audit hit `Cannot find module @rollup/rollup-linux-arm64-gnu` in a foreign sandbox. That is an npm optional-dependency/arch artifact, not a source defect. If you see it: `rm -rf node_modules package-lock.json && npm install`, then rebuild. If it persists, report it — do not edit source to work around it.

---

## Explicitly DO NOT

- Do not remove or weaken `src/components/common/DemoBanner.tsx`, the `index.html` title, or its meta description. Those three are the disclosure layer.
- Do not invent a deployment URL, licence, badge, screenshot, roadmap, or test-coverage claim.
- Do not claim in the README that this is live, in production, or endorsed by Kapston.
- Do not replace masked identifiers with new realistic-looking ones.
- Do not touch `mockJobs.ts`, `constants.ts`, `types/index.ts`, or any component file.
- Do not add a backend, API layer, or auth.
- Do not commit `dist/`.
- Do not commit or push unless Chanakya asks. Leave changes in the working tree and report.

## Report back with

1. Each task ID (C1–C3) and its status: done / skipped / blocked-awaiting-answer.
2. For C1: the full README you wrote, and a list of any claim you were unsure about.
3. For C2: a count of how many values you masked per field type, across all 7 partner records.
4. Every question you hit, with the task ID it belongs to.
5. Typecheck and build output.
