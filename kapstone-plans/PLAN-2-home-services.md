# Implementation Plan 2 — `Kapstone_home_services`

**Repo:** `Kapstone_home_services`
**Remote:** `https://github.com/Chanakya2006gt/Kapstone_home_services.git`
**Branch:** `main`
**Stack:** React 18 + Vite + **JavaScript (.jsx, not TypeScript)** + Tailwind v3
**Scope:** copy/attribution accuracy only. No new features, no refactors, no redesign.

---

## ⚠️ READ THIS ENTIRE SECTION BEFORE TOUCHING ANY FILE

### Rule 1 — Do not hallucinate. Ever.

This repo is an unsolicited design proposal for **Kapston Home Services Pvt Ltd**, a **real company** (CIN `U96020TS2026PTC210755`, incorporated 5 Feb 2026), a subsidiary of the **NSE-listed** Kapston Services Limited (NSE: `KAPSTON`). It references a **real, living public figure** — actor **Akkineni Nagarjuna** — who is genuinely their Brand Ambassador.

That means:

- **Do NOT invent or "improve" any quote attributed to Akkineni Nagarjuna, or to any Kapston executive.** The quote currently in this repo is real, published, and correctly attributed. Changing a single word of it turns a sourced quote into a fabricated one.
- **Do NOT invent customer names, reviews, testimonials, ratings, dates, societies, phone numbers, email addresses, addresses, prices, or technician names.**
- **Do NOT add specifics to make content feel more complete.** A vague placeholder is safe; a plausible fake is not.
- **Every value you write must come from one of exactly two places:** (a) this plan document, quoted verbatim, or (b) a value already present elsewhere in this repo that this plan explicitly tells you to reuse.

### Rule 2 — If anything is unclear, STOP and ask.

Stop and ask Chanakya before proceeding if:

- A string this plan tells you to find does not exist, or exists in a different form than quoted here.
- A line number does not match (**always match on the quoted string, never the line number**).
- You need a value not present in this plan.
- A task seems to require deciding what is factually true about Kapston, its customers, or Nagarjuna.

Ask a specific question. Do not guess, and do not silently skip the task.

### Rule 3 — This repo is JavaScript, not TypeScript.

Files are `.jsx` / `.js`. There is no `tsc`. Do not add type annotations, do not create `.ts`/`.tsx` files, do not add a `tsconfig.json`.

### Rule 4 — Scope discipline.

Do not reformat, reorder imports, change Tailwind classes, upgrade dependencies, or clean up anything not listed in a task.

---

## Step 0 — Confirm you are in the right repo

```bash
git remote get-url origin   # MUST print: https://github.com/Chanakya2006gt/Kapstone_home_services.git
git branch --show-current   # expect: main
git status --short
```

If the remote is `Kapstone_corporate_HQ`, `kapston-proposal`, `TRELIO` or anything else — **STOP.** Wrong directory.

---

## Task B1 — Add a source citation to the Nagarjuna modal

**File:** `src/components/NagarjunaVideoModal.jsx` (only this file).

### 🚨 Read this before you edit — the content here is REAL, not fake

An earlier draft audit wrongly flagged this modal as a fabricated celebrity endorsement. **It is not.** Verified against live press coverage:

- Akkineni Nagarjuna **was** genuinely appointed **Brand Ambassador for Kapston Home Services**.
- The launch **did** happen in **Hyderabad on 12 August 2026**.
- Chairman **Dr. C R Naidu** and Managing Director **Srikanth Kodali** **were** present, exactly as the modal says.
- The quote in the modal is **his actual published statement**, reported by Telangana Today and Social News XYZ.

**Therefore: do NOT delete this modal. Do NOT rewrite the quote. Do NOT soften the ambassador claim. Do NOT replace Nagarjuna with a fictional person.** Every one of those would make the page *less* accurate, not more.

The only thing missing is a source citation.

### The change

The modal currently ends with this footer line (around line 96):

```
Design proposal preview · Kapston Services Limited (NSE: KAPSTON).
```

Add a source attribution near the quote block (the quote is around line 66, and the descriptive paragraph naming the executives is around line 75). Place the citation directly **below** the descriptive paragraph, styled as small muted caption text consistent with the existing footer line's treatment.

Use this exact copy:

```
Quote and launch details as reported by Telangana Today and Social News XYZ, 12 August 2026.
```

That is the entire change to this file. Do not alter the quote text, the executive names, the date, the headings `Brand Ambassador & Launch Note` / `Brand Ambassador · Kapston Home Services`, the line `App launch · Hyderabad · August 2026`, or the existing footer disclaimer.

### Verify B1

```bash
grep -n "Telangana Today and Social News XYZ" src/components/NagarjunaVideoModal.jsx   # expect: 1 match
grep -n "A home is built on trust" src/components/NagarjunaVideoModal.jsx              # expect: still present, unchanged
npm run build
```

---

## Task B2 — Make the `verified` flag on testimonials honest

**File:** `src/data/testimonialsData.js` (only this file).

### The problem

`testimonialsData` contains four reviews. All four carry `verified: true`:

| id | name | society |
|---|---|---|
| 1 | `Srinivas Reddy` | `My Home Bhooja` |
| 2 | `Ananya Sharma` | `Aparna Sarovar Zenith` |
| 3 | `Vikram K.` | `Cybercity Rainbow Vistas` |
| 4 | `Pooja Chawla` | `Road No. 12 Villas` |

These are placeholder reviews written for the pitch. There is no public record for any of them (unlike the Nagarjuna quote, which is genuinely sourced). They render in the UI exactly like real verified customer reviews, with named real Hyderabad societies and 5-star ratings.

Chanakya's plan is to replace these with genuine reviews once he is actually engaged with Kapston. Until then, the `verified: true` flag is the one part that is affirmatively untrue.

### The change

Set `verified: false` on **all four** entries.

Then check how the flag renders before you stop:

```bash
grep -rn "verified" src/components/Testimonials.jsx
```

- If `verified` gates a "Verified" badge that simply disappears when false — that is the correct outcome. Done.
- If setting it false produces a visibly broken or empty UI slot, **STOP and ask Chanakya** whether he wants the badge replaced with a `Sample review` label instead. Do not design that label yourself without asking.

**Do NOT change the names, comments, societies, ratings, dates, services, avatars, or `savedAmount` values.** Only the boolean.

### Verify B2

```bash
grep -c "verified: true" src/data/testimonialsData.js    # expect: 0
grep -c "verified: false" src/data/testimonialsData.js   # expect: 4
npm run build
```

---

## Task B3 — Fix the one wrong contact field in the README

**File:** `README.md` (only this file).

### 🚨 Two of these three fields are CORRECT — do not "fix" them

The README's `## 🏢 Corporate Lineage` section (around lines 50–54) currently reads:

```
- **HQ:** 75, Kavuri Hills, Madhapur, Hyderabad - 500034
- **Support:** +91 96405 80000 | support@kapstonhomeservices.in
```

Verified against the live official site `kapstonhomeservices.in`:

| Field | Repo value | Verdict |
|---|---|---|
| Phone `+91 96405 80000` | matches the official site **exactly** | ✅ **CORRECT — do not change.** |
| Address `75, Kavuri Hills, Madhapur, Hyderabad - 500034` | official site lists this as its **Corporate** address | ✅ **CORRECT — do not change.** |
| Email `support@kapstonhomeservices.in` | official site publishes `info@kapston.in` | ❌ **Not a published address. Fix this one.** |

> A prior review claimed the phone number was wrong. **That review was mistaken** — it confused this number with the parent company's control room (`+91 96 4050 4050`). Both numbers are real and they are different numbers for different entities. Leave `+91 96405 80000` alone everywhere it appears, including `src/components/Header.jsx` and `src/components/Footer.jsx`.

### The change

In `README.md` only, replace `support@kapstonhomeservices.in` with `info@kapston.in`.

That is the whole task. Do not restructure the section, do not add the separate registered address (`Vasista Bhavan, APHB Colony, Gachibowli`) unless Chanakya asks, and do not touch the `HQ:` or phone values.

### Verify B3

```bash
grep -n "support@kapstonhomeservices.in" README.md   # expect: no matches
grep -n "info@kapston.in" README.md                  # expect: 1 match
grep -n "96405 80000" README.md                      # expect: still present, unchanged
```

---

## Task B4 — Reconcile the footer email (ask first)

**File:** `src/components/Footer.jsx`.

Around line 104 the footer displays:

```
info@kapstonservices.com
```

That is the **parent** company's address (Kapston Services Limited), not the home-services entity's. The live `kapstonhomeservices.in` site publishes `info@kapston.in`.

Both are real addresses; this is not a fabrication. It may well be intentional — a subsidiary site pointing at the group's main inbox is normal.

### 🚨 Do not change this without asking

**Ask Chanakya** whether he wants the footer to show `info@kapston.in` (the home-services entity's published address) or keep `info@kapstonservices.com` (the parent's). Implement only what he says. If he does not answer, leave it as-is — the current value is not wrong, just parent-level.

---

## Task B5 — Leave the fake booking flow alone (informational, no action)

**No file changes. This exists so you do not "fix" it.**

The booking flow is intentionally a client-side simulation with no backend:

- `src/components/BookingDrawer.jsx` (~line 58): `const [otpInput, setOtpInput] = useState(['5', '8', '2', '0']);` — the OTP is pre-filled.
- `handleVerifyOtp` (~line 84) is a `setTimeout`, then advances to step 4 and fires confetti.
- The booking ID and assigned technician are fixed strings.

This is **appropriate for a pitch demo** and is covered by the sitewide banner in `src/components/DemoBanner.jsx`:

> `Design proposal · sample booking UI · not a live consumer app`

**Do NOT** wire this to a real backend, **do NOT** add a real OTP provider, **do NOT** remove the pre-filled OTP, and **do NOT** remove or weaken the demo banner. If you think this flow needs to become real, that is a scope conversation for Chanakya, not a task in this plan.

---

## Global verification before you report done

```bash
git remote get-url origin      # confirm still Kapstone_home_services
npm run build                  # expect: clean build (no tsc in this repo)
npm run dev                    # then click through manually:
```

Manual pass:
1. Open the Nagarjuna modal — quote unchanged, new source citation visible below the executive paragraph.
2. Testimonials section renders all four reviews without a "Verified" badge, and nothing looks broken.
3. Header and Footer still show `+91 96405 80000`.
4. The demo banner is still present: `Design proposal · sample booking UI · not a live consumer app`.
5. Booking drawer still opens and completes its simulated flow.

> **Note on builds:** an earlier audit hit `Cannot find module @rollup/rollup-linux-arm64-gnu` in a foreign sandbox. That is an npm optional-dependency/arch artifact, not a source defect. If you see it: `rm -rf node_modules package-lock.json && npm install`, then rebuild. If it persists, report it — do not edit source to work around it.

---

## Explicitly DO NOT

- Do not delete, rewrite, soften, or "balance" the Nagarjuna quote or the ambassador claim. It is verified fact.
- Do not replace Nagarjuna with a fictional ambassador.
- Do not change `+91 96405 80000` anywhere. It is the real published number.
- Do not change the `75, Kavuri Hills` address. It is the real published corporate address.
- Do not rewrite testimonial names, comments, or societies — only the `verified` boolean.
- Do not convert any file to TypeScript.
- Do not remove or weaken `DemoBanner.jsx`.
- Do not invent a single number, name, email, review, or date.
- Do not commit or push unless Chanakya asks. Leave changes in the working tree and report.

## Report back with

1. Each task ID (B1–B5) and its status: done / skipped / blocked-awaiting-answer.
2. The exact before → after for every string you changed.
3. Every question you hit, with the task ID it belongs to.
4. Build output.
