# Implementation Plan 1 — `Kapstone_corporate_HQ`

**Repo:** `Kapstone_corporate_HQ`
**Remote:** `https://github.com/Chanakya2006gt/Kapstone_corporate_HQ.git`
**Branch:** `main`
**Stack:** React 18 + Vite + TypeScript + Tailwind v3
**Scope:** copy/data accuracy fixes only. No new features, no refactors, no redesign.

---

## ⚠️ READ THIS ENTIRE SECTION BEFORE TOUCHING ANY FILE

### Rule 1 — Do not hallucinate. Ever.

This repo is an unsolicited design proposal for **Kapston Services Limited**, a **real, NSE-listed company** (NSE: `KAPSTON`, CIN `L15400TG2009PLC062658`). Every name, number, address and phone number in this codebase is either a real fact about a real listed company, or a placeholder standing in for one.

That means:

- **Do NOT invent company names, client names, revenue figures, dates, phone numbers, email addresses, addresses, document URLs, executive names, or statistics.** Not even as "reasonable placeholders." Not even to make a list look complete.
- **Do NOT "improve" copy by adding specifics.** If a sentence is vague, leave it vague.
- **Do NOT fill a gap with something that looks plausible.** A plausible-looking fake number about a listed company is worse than an obvious blank.
- **Every value you write must come from one of exactly two places:** (a) this plan document, quoted verbatim, or (b) a value already present elsewhere in this repo that this plan explicitly tells you to reuse.

### Rule 2 — If anything is unclear, STOP and ask.

If you hit any of the following, **stop work on that task and ask Chanakya before proceeding**:

- A string this plan tells you to find does not exist, or exists in a different form than quoted here.
- A line number in this plan does not match what you see (line numbers drift — **always match on the quoted string, never on the line number**).
- You need a value that is not in this plan.
- A task seems to require judgement about what is factually true about Kapston.
- A change would touch a file not listed in that task.

Ask a specific question. Do not guess, and do not silently skip the task.

### Rule 3 — Match on strings, not line numbers.

Line numbers in this document were correct at the time of writing and are given **only as a locator hint**. Always search for the quoted string. If the string is not found exactly, apply Rule 2.

### Rule 4 — Scope discipline.

Do not reformat files, reorder imports, change Tailwind classes, upgrade dependencies, rename variables, or "clean up" anything you were not asked to change. Each task below lists the exact files it may touch. Touching anything else is out of scope.

---

## Step 0 — Confirm you are in the right repo

```bash
git remote get-url origin   # MUST print: https://github.com/Chanakya2006gt/Kapstone_corporate_HQ.git
git branch --show-current   # expect: main
git status --short          # note anything already modified before you start
```

If the remote is anything else — in particular if it is `TRELIO`, `Chanakya_Portfolio`, `Kapstone_home_services`, or `kapston-proposal` — **STOP.** You are in the wrong directory.

---

## Task A1 — Fix the client list (highest priority, this is the one confirmed factual error)

**File:** `src/data/companyData.ts` — the `ENTERPRISE_CLIENTS` array (starts around line 52).
**Also read (do not edit):** `src/components/home/ClientMarquee.tsx` — this is the only consumer of that array.

### Context you need

`ClientMarquee.tsx` renders **text names only, no logo images.** It already carries this on-page label:

> `Illustrative for layout. Text names only. Confirm against public disclosures.`

Each array entry has three fields: `name`, `category`, `highlight`.

### What is verified

Kapston's real client list was read directly off the live official page `kapstonservices.com/clients/` on 7 Sept 2026.

**Confirmed present on the official client page (safe to use):**
Wipro · ICAI · KIMS Hospitals · Hetero · Aurobindo · Wells Fargo · Hyundai · Hindalco · ServiceNow · Pfizer · Divis · Natco · Laurus Labs · BHEL · Tanla · CtrlS · MTAR · Citco · InfoVision · IMFA · Rane · Azad · HBL · Kaveri Seeds · Bharat Forge (Kalyani) · Jamna Auto Industries · Shapoorji Pallonji · Aparna · Brigade · Jayabheri · Premier Energies · Nagarjuna NACL · Falcon Marine Exports · SeedWorks · ICFAI University · Amity University · Sri Sri Ravishankar Vidya Mandir · Howard Public School · CMR · Blueprint Projects · Gland Pharma · IIRM · Bhavyansh Infotech · Hyderabad Golf Association · Page Industries (Jockey / Speedo) · Caplin Point Laboratories · SF Express · MMCCC · Candeur · Yashoda Hospitals · Lodha · Aarti Industries · Gravity Pharma · F5 · Shiv Nadar University · MassMutual · Vasudha Pharma · VST Industries

**Confirmed NOT on the official client page — these are the errors to remove:**

| Current entry (exact `name` value) | Status |
|---|---|
| `"Dr. Reddy's Laboratories"` | **Not on the official list. Remove.** |
| `'Larsen & Toubro (L&T)'` | **Not on the official list. Remove.** |
| `'Tech Mahindra'` | **Not on the official list. Remove.** |

**Unconfirmed — could not be verified either way:**

| Current entry | Status |
|---|---|
| `'Apollo Health City'` | Not seen on the official page. **Ask Chanakya** whether to keep, replace, or drop. Do not decide yourself. |
| `'GMR Group'` | Not seen on the official page. **Ask Chanakya** whether to keep, replace, or drop. Do not decide yourself. |

`'Wipro Limited'`, `'Institute of Chartered Accountants of India (ICAI)'`, `'KIMS Hospitals'`, `'Hetero Drugs'` and `'Aurobindo Pharma'` are all confirmed real. **Leave those five entries completely untouched.**

### The change

Replace exactly the three confirmed-wrong entries with three names from the confirmed-present list above. Suggested replacements (any three from the confirmed list are acceptable; these are picked to preserve the existing category spread):

- `"Dr. Reddy's Laboratories"` → `'Divi's Laboratories'` (category stays `'Pharma'`)
- `'Larsen & Toubro (L&T)'` → `'Shapoorji Pallonji'` (category stays `'Infrastructure'`)
- `'Tech Mahindra'` → `'ServiceNow'` (category stays `'IT & ITES'`)

### 🚨 The `highlight` field — this is where hallucination will happen if you are careless

Each entry currently has a `highlight` string making a **specific operational claim**, e.g.:

> `'Enterprise campus security & facility management across multiple hubs.'`
> `'Cleanroom facility maintenance & technical staffing support.'`

These claims are **not verified for any client**, and writing a new specific claim about what Kapston does for Divi's, Shapoorji Pallonji or ServiceNow would be inventing a business fact about two real companies. **Do not do that.**

For the three replacement entries, use this **exact** generic `highlight` string, verbatim, for all three:

```
'Listed on the company client page. Engagement scope not published.'
```

Do not vary it. Do not embellish it. Do not write a different one per client.

**Leave the `highlight` strings on the seven entries you are not replacing exactly as they are.** They are pre-existing and out of scope for this task.

### Verify A1

```bash
grep -n "Dr. Reddy\|Larsen\|Tech Mahindra" src/data/companyData.ts   # expect: no matches
grep -c "name:" src/data/companyData.ts                              # entry count must be unchanged
npm run build
```

---

## Task A2 — Add a demo disclosure to the RFP modal success screen

**File:** `src/components/modals/RfpModal.tsx` (only this file).

### The problem

`handleSubmit` (around line 35) does **only** this:

```ts
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitted(true);
  confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
};
```

No network call. Nothing is sent anywhere. But the success screen (around line 240) tells the visitor:

> `Thank you, {fullName}. Our Regional Operations Lead for {industry} has been notified and will deliver your customized SLA proposal and rate matrix within 4 business hours.`

and then displays (around line 247):

> `Direct Hotline: +91 96 4050 4050`

**That phone number is real.** It is Kapston's genuine 24×7 control room — it also appears in `src/components/layout/GroupBar.tsx` (labelled "Control Room"), `src/components/layout/Footer.tsx`, and `src/pages/ContactPage.tsx`. **Do not change, remove, or obscure the number.** The problem is not the number; the problem is a fake "we have notified someone" message sitting next to it.

Every other form in this repo already discloses. Mirror the existing pattern:

- `src/pages/ContactPage.tsx` line ~27: `This form is a proposal mock and does not send mail.`
- `src/pages/ContactPage.tsx` line ~110: `Demo only. In production this would route to {formData.hubCity}.`
- `src/pages/CareersPage.tsx` line ~20: `Openings listed here are sample roles for the proposal.`

### The change

Inside the success block (the `) : (` branch that renders when `isSubmitted` is true), add a disclosure line. Place it directly **below** the `<p>` containing "has been notified", and **above** the summary box that starts with `<div><strong>Company:</strong>`.

Use this exact copy:

```
Demo only — this proposal form does not send mail and no one has been notified.
```

Style it to match the muted-caption treatment already used in this file (small, muted slate text — reuse the sizing/color utility classes already present on nearby caption text in this component rather than inventing new ones).

**Do not** rewrite the "has been notified" sentence itself, **do not** remove the confetti, **do not** wire up an actual API call, and **do not** change the hotline line.

### Verify A2

```bash
grep -n "does not send mail and no one has been notified" src/components/modals/RfpModal.tsx  # expect: 1 match
grep -n "96 4050 4050" src/components/modals/RfpModal.tsx                                     # expect: still present
npm run build
```

---

## Task A3 — Fix the investor filing download links

**File:** `src/data/investorFilings.ts` (only this file).

### The problem

The `INVESTOR_FILINGS` array has 16 entries. **11 of them point at a PDF that is not the document they claim to be.**

Nine entries point at `https://kapstonservices.com/wp-content/uploads/2025/08/Annual-Report-2024-25.pdf` (which is legitimately only the FY25 annual report):

`fr-q1-26` · `fr-q4-25` · `ip-2026` · `cg-code-conduct` · `cg-whistleblower` · `cg-posh-policy` · `sp-q1-26` · `sp-q4-25` · `sebi-reg-46-full`

Two entries point at `https://kapstonservices.com/wp-content/uploads/2024/09/Kapston_Annual%20Report%202023-24.pdf` (legitimately only the FY24 annual report):

`fr-q3-25` · `ip-2025`

So a visitor who clicks "Shareholding Pattern for Quarter Ended June 30, 2026" downloads the FY25 annual report. That is not "illustrative data" — it is a broken link that delivers the wrong document.

The five annual-report entries (`ar-2025`, `ar-2024`, `ar-2023`, `ar-2022`, `ar-2021`) each point at a plausibly-correct URL for their own document. **Leave those five `fileUrl` values alone.**

### The change — pick ONE approach, do not mix

**Approach 1 (preferred, zero fabrication risk):** set `fileUrl` to an empty string `''` on all 11 mismatched entries, and update the consuming component so an entry with an empty `fileUrl` renders as a disabled, non-clickable row with the label `Document not linked in this proposal` instead of a download link.

- Find the consumer first: `grep -rn "fileUrl" src/` and read the component that renders it before editing anything.
- If the consuming component's structure makes this ambiguous, **STOP and ask Chanakya** rather than guessing at the JSX.

**Approach 2 (only if Chanakya explicitly approves it):** find each document's real URL on `kapstonservices.com` and use it.

> 🚨 **Do NOT attempt Approach 2 on your own initiative, and do NOT construct URLs by pattern-matching** (e.g. guessing `.../2026/07/Q1-FY26-Results.pdf` because the other URLs look like that). A guessed URL that 404s, or worse, silently resolves to an unrelated document, is exactly the failure this task exists to fix. Only use a URL you have actually confirmed resolves to the correct document.

### Verify A3

```bash
grep -c "Annual-Report-2024-25.pdf" src/data/investorFilings.ts   # expect: 1 (only ar-2025)
grep -c "2023-24.pdf" src/data/investorFilings.ts                 # expect: 1 (only ar-2024)
npm run build
```

---

## Task A4 — Correct "Registered office" vs "Corporate office"

**Files:** `src/components/layout/Footer.tsx` and `src/pages/ContactPage.tsx` (only these two).

### The verified facts

Confirmed against Kapston's own NSE letterhead (filing dated 7 July 2026) and its MCA record:

- **Registered office:** `Plot # 287, MIG-2, IX Phase, KPHB, Kukatpally, Hyderabad, Telangana 500072`
- **Corporate office:** `Plot # 75, Kavuri Hills, Madhapur, Hyderabad, Telangana 500034`

The repo currently labels **Plot # 75 as the "Registered office"** in two places. That is factually wrong, and a listed-company reader (which is exactly this page's audience) will notice.

### The change

Two edits, both label-only:

1. `src/components/layout/Footer.tsx` (~line 54) — the heading `Registered office` sitting above the Plot # 75 address → change the heading text to `Corporate office`.
2. `src/pages/ContactPage.tsx` (~line 121) — the label `Registered office` sitting above the Plot # 75 address → change the label text to `Corporate office`.

**Do not change the address strings themselves.** Plot # 75 / Kavuri Hills is correct as the corporate office; only the label is wrong.

**Do not add the KPHB registered address anywhere** unless Chanakya asks for it. Adding it is a content decision, not a correction.

Leave these alone — they reference Plot # 75 without the misleading "registered" label, so they are already fine:
- `src/components/home/HeroSection.tsx` (~line 74)
- `src/components/investors/GovernanceCards.tsx` (~line 57)
- `src/data/panIndiaBranches.ts` (~line 22)
- `src/pages/ContactPage.tsx` line ~27 — the sentence `Registered office in Hyderabad. Regional hubs listed from company materials...` → **ask Chanakya** before touching this one; it reads as prose rather than a field label and changing it may not be wanted.

### Verify A4

```bash
grep -rn "Registered office" src/     # expect: only the line ~27 prose sentence remains (if left as-is)
grep -rn "Corporate office" src/      # expect: 2 new matches
npm run build
```

---

## Task A5 — Flag the stale FY26 projection (ask before acting)

**File:** `src/data/investorFilings.ts`, the `FINANCIAL_GROWTH_DATA` array (~line 28).

Current final row:

```ts
{ fiscalYear: 'FY26 (Proj)', revenueCr: 650.0, ebitdaCr: 48.5, patCr: 28.0, employees: 34000 }
```

**Verified:** Kapston's actual reported FY26 revenue is **₹831.89 Cr** (reported May 2026). The repo's projection of ₹650 Cr is not just illustrative — it is now materially below the published real figure, on a page aimed at investors.

The chart already carries a disclaimer (`Sample operating series... Not audited figures`), so this is not a disclosure failure. But showing a listed company a number 22% below its own published result is a bad look in a pitch.

### 🚨 Do not act on this task without asking

**Ask Chanakya which he wants**, then implement only that:

- **(a)** Leave the whole series as-is (it is labelled illustrative).
- **(b)** Update only the FY26 revenue to `831.89` and relabel `'FY26 (Proj)'` → `'FY26'`.
- **(c)** Drop the FY26 row entirely.

**Do NOT invent EBITDA, PAT or employee-count figures for FY26.** Only the revenue figure (`831.89`) is verified. If Chanakya picks (b), set revenue to `831.89` and **ask him what to do with `ebitdaCr`, `patCr` and `employees`** — do not carry the old projected values forward as if they were actuals, and do not derive them from ratios.

---

## Global verification before you report done

```bash
git remote get-url origin        # confirm still Kapstone_corporate_HQ
npx tsc --noEmit                 # expect: no errors
npm run build                    # expect: clean build
npm run dev                      # then click through manually:
```

Manual pass:
1. Homepage — client list renders 10 entries, no L&T / Dr. Reddy's / Tech Mahindra.
2. Open the RFP modal, submit it — success screen shows the new "Demo only" line, hotline still visible.
3. Investors page — filing rows render without runtime errors; unlinked rows are visibly non-clickable.
4. Footer and Contact page — both say "Corporate office".
5. The amber demo banner is still present sitewide: `Design proposal · sample / illustrative data · not the live site at kapstonservices.com`.

> **Note on builds:** an earlier audit hit `Cannot find module @rollup/rollup-linux-arm64-gnu` when building this repo in a foreign sandbox. That is an npm optional-dependency/arch artifact, not a source defect. If you see it, run `rm -rf node_modules package-lock.json && npm install` and rebuild. If it persists after a clean install, report it — do not work around it by editing source.

---

## Explicitly DO NOT

- Do not remove or weaken `DemoBanner.tsx` or its text.
- Do not change the hotline `+91 96 4050 4050` anywhere. It is real.
- Do not change the Plot # 75 address string. Only its label.
- Do not add, remove, or reword any client `highlight` other than on the three replaced entries.
- Do not touch `src/data/panIndiaBranches.ts`, `solutionsData.ts`, `industryVerticals.ts`, or any component under `src/components/investors/` beyond what Task A3's consumer fix requires.
- Do not invent a single number, name, URL, or date.
- Do not commit or push unless Chanakya asks. Leave changes in the working tree and report what you changed.

## Report back with

1. Each task ID (A1–A5) and its status: done / skipped / blocked-awaiting-answer.
2. The exact before → after for every string you changed.
3. Every question you hit, with the task ID it belongs to.
4. Build and typecheck output.
