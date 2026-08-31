# FINAL CONSOLIDATED PLAN — Phases A–E (revised)

> Addendum to `portfolio-gemini-plan.md`. **All "ABSOLUTE RULES" still apply.** Run `npm run typecheck` after every phase. If an anchor string is not found EXACTLY, STOP and report. Change only what is specified.

**Revision note:** diagnosis price changed to **₹20,000** throughout; client-specific naming replaced with generic industry wording.

---

## 🔴 PHASE 0 — CONFIRM THE REPOSITORY (mandatory)

A previous session ran a fix in the wrong repo (`TRELIO--Execution-authorization-layer`), reported success, and changed nothing here.

```
git remote get-url origin
```
**Expected:** `https://github.com/Chanakya2006gt/Chanakya_Portfolio.git`
**If it contains `TRELIO` or anything else — STOP and report.**

---

## VERIFIED CURRENT STATE (measured)

| Item | Status |
|---|---|
| `.vercel` untracked + gitignored | ✅ Done |
| `/method` linked via `navLinks` in `src/data/projects.ts` | ✅ Done |
| Offer ladder + `/method` page exist | ✅ Done |
| **Diagnosis price** | ❌ `₹40k` in **6 files** — must become `₹20,000` |
| **Build band on offer card** | ❌ Still `₹3.5L – ₹6.0L` |
| **FAQ section** | ❌ Does not exist |
| **Task 13** (Trelio scale, proof metric, "This site") | ❌ None of it landed |
| **Client-specific naming** | ❌ 2 occurrences to genericise |

**Do the phases in order. STOP and report after each.**

---

# PHASE A — Diagnosis price → ₹20,000

`₹40k` / `₹40,000` appears in **6 files**. Every instance becomes ₹20,000. Work file by file; **do not run a blind global replace** — check each hit is a price and not part of an unrelated string.

| File | Hits |
|---|---|
| `src/components/offer-ladder.tsx` | 2 |
| `src/components/portfolio-home.tsx` | 2 |
| `src/components/site-nav.tsx` | 3 |
| `src/components/method-section.tsx` | 2 |
| `src/routes/method.tsx` | 1 |
| `src/routes/api/chat.ts` | 6 |

Apply these substitutions:
- `₹40,000` → `₹20,000`
- `₹40k` → `₹20k`
- `Book a ₹40k Diagnosis` → `Book a ₹20k Diagnosis`
- `40k Diagnosis` → `20k Diagnosis`

**Verify:**
```
grep -rn "₹40k\|₹40,000\|40k Diagnosis" src/    # expect: no matches
grep -rc "₹20,000\|₹20k" src/ --include=*.tsx --include=*.ts | grep -v ":0"
npm run typecheck
```
> ⚠️ `src/components/offer-ladder.tsx` also legitimately contains **`₹20k – ₹35k`** for the monthly care tier. That is a different number — **leave it unchanged** and make sure your edits don't collide with it.

**COMMIT:** `feat(pricing): set paid diagnosis to ₹20,000`

---

# PHASE B — Remove the public build band

**Why:** a published band anchors buyers on its low end and reads as inflation when the real quote lands higher, while the high end scares smaller buyers off before they book. The diagnosis exists to produce the exact number.

**File:** `src/components/offer-ladder.tsx` (~line 179)

**Find:**
```
                <span className="text-3xl font-bold font-mono tracking-tight text-foreground">₹3.5L – ₹6.0L</span>
                <span className="text-xs text-muted-foreground font-mono">fixed</span>
```
**Replace with:**
```
                <span className="text-3xl font-bold font-mono tracking-tight text-foreground">Fixed quote</span>
                <span className="text-xs text-muted-foreground font-mono">from the diagnosis</span>
```

Then **find:**
```
                15 business days to staging & production
```
**Replace with:**
```
                15 business days to staging &amp; production · exact price quoted before you commit
```

**Verify:** `grep -rn "3.5L" src/components/offer-ladder.tsx` → no matches. `npm run typecheck`.

**COMMIT:** `feat(pricing): quote the build from the diagnosis instead of publishing a band`

---

# PHASE C — Genericise client-specific naming

Two occurrences name a specific company. Replace with industry-generic wording that still describes the real object.

**File:** `src/components/portfolio-home.tsx`

**C.1 — Find (~line 120):**
```
Two systems built to production standard: one CPQ platform modelled on a real Zambian packaging converter's quoting workflow
```
**Replace with:**
```
Two systems built to production standard: one CPQ platform modelled on an industrial label converter's quoting workflow
```

**C.2 — Find (~line 166):**
```
CPQ and job estimating platform built to the spec of Printfast Zambia — a real label converter's quoting oper
```
**Replace the company reference so the sentence reads:**
```
CPQ and job estimating platform built to the spec of a working label converter's quoting oper
```
(keep the remainder of that sentence exactly as it currently continues)

**Verify:**
```
grep -rni "printfast\|zambia" src/    # expect: no matches
npm run typecheck
```
> Keep "modelled on" / "built to the spec of" — the phrasing is accurate and was corrected deliberately in an earlier commit. Do **not** replace it with "delivered for", "client", or "customer".

**COMMIT:** `chore(copy): use generic industry wording for the reference system`

---

# PHASE D — Add the FAQ section

**Why:** the price question needs an answer somewhere — a page that raises it and refuses to answer is worse than one that never raises it. An FAQ reads as candour rather than a price list, lets a buyer self-qualify, and answers objections **without requiring them to open the AI companion**, which most visitors never will.

### D.1 — Create `src/components/faq-section.tsx`
Follow the conventions in `method-section.tsx`: same `useScrollAnimation` hook, same `max-w-5xl px-5 py-24` section wrapper, same eyebrow-label heading pattern. Use a native `<details>/<summary>` accordion — **do not add a dependency**. Give the section `id="faq"`.

**Use these seven Q&As verbatim:**

**1. What does a build actually cost?**
> Most builds land between ₹2L and ₹12L, depending on how many workflows and sites are involved. A single workflow for one location sits at the lower end; multi-site or multi-department systems at the upper. You get an exact fixed number out of the ₹20,000 diagnosis — before you commit to anything.

**2. Why not just use Zoho, or an off-the-shelf tool?**
> If your sales process is a standard linear funnel, Zoho is genuinely the right answer and I'll tell you so. Off-the-shelf tools break when the workflow is specific to how your operation actually runs — job specs, machine constraints, approval gates, staged payments. That's what I build. It's also one-time: no per-seat fee as your team grows.

**3. Do I own the code?**
> Yes. Full repository handover, your domain, your database, your accounts. Nothing is locked to me — you can hand it to any engineer afterwards.

**4. What happens after launch?**
> Fourteen days of bug fixes are included. After that, an optional care retainer (₹20k–₹35k/month) covers maintenance, small changes and priority response. It's optional — plenty of projects don't need it.

**5. What do you need from me?**
> Roughly two hours in the diagnosis, one decision-maker who can answer questions about the process, and access to whatever you use today — spreadsheets, WhatsApp threads, existing software. Content and any API credentials by day two of the build.

**6. Can you work with a business outside India?**
> Yes. The work is remote and async by default, with scheduled calls in your working hours.

**7. What if it isn't finished in 15 days?**
> The scope is fixed in the diagnosis precisely so this doesn't happen. If something in my control runs over, I finish it at no extra cost — the price was agreed before the work started.

> **Do not invent additional questions.** Do not soften Q2 — conceding that Zoho is sometimes the right answer is what makes the rest credible.

### D.2 — Render it
**File:** `src/components/portfolio-home.tsx`. Section order is `Hero → OfferLadder → … → Contact` (~lines 440–448). Import `FaqSection` and render it **immediately before `<Contact />`**.

### D.3 — Nav entry
**File:** `src/data/projects.ts`. **Find:**
```
  { href: "#about", label: "Trust & Terms" },
```
**Add directly ABOVE it:**
```
  { href: "#faq", label: "FAQ" },
```

**Verify:** `npm run typecheck && npm run build`, then `npm run dev` — FAQ renders, accordions open/close, correct in **both light and dark** themes.

**COMMIT:** `feat(faq): add buyer-facing FAQ covering price band, alternatives and ownership`

---

# PHASE E — Make the site do justice to the assets

### E.1 — Measure first (do NOT copy numbers from this document — they drift)
Against the **Trelio** repo (read-only):
```
cd ~/TRELIO--Execution-authorization-layer
git rev-list --count HEAD
git log --reverse --format=%ad --date=format:'%B %Y' | head -1
find . -path ./node_modules -prune -o -type f \( -name '*.test.*' -o -name '*.spec.*' \) -print | grep -vc node_modules
```
And the RLS count:
```
cd ~/Industrial-packaging-platform && grep -ci "policy" supabase/migrations/*.sql | awk -F: '{s+=$2} END {print s}'
```
Then `cd` back and **re-run Phase 0's repo check** before editing. **Record all four; use YOURS.**

> **Durability:** write **"in continuous development since {Month Year}"**, never "five months." The first stays true; the second rots, and a stale number on a page arguing for rigour is worse than none.

### E.2 — Reframe the Trelio card
**File:** `src/components/portfolio-home.tsx`. **Find:**
```
Agency Milestone & Payment System
```
**Replace with:**
```
Multi-Tenant Payment & Approval Platform
```
Immediately after that headline element, add, using your measured values:
```
<p className="mt-1 text-xs text-muted-foreground">
  In continuous development since {MONTH YEAR} · {N} commits · {N} test suites · multi-tenant, payments, RLS, audit ledger
</p>
```
Match surrounding className conventions if they differ.

### E.3 — Strengthen stack tags
**File:** `src/data/portfolio-data.json`, `businesses[0]`. **Find:**
```
"stack": ["React", "Node.js", "Multi-tenant", "Payments", "Audit logs"]
```
**Replace with:**
```
"stack": ["Multi-tenant", "PostgreSQL RLS", "Payments", "Audit ledger", "React", "Node.js"]
```
**Do not change the `description`.**

### E.4 — Add a buyer-facing proof metric
**File:** `src/components/apex-preview.tsx` (~line 216) currently shows `273,261 ops/s` as the only proof number on the site. **Do NOT delete it** — demote it, and add in the same stat strip, using your measured RLS value:
```
{N} row-level security policies
```
with a short label such as `Tenant data isolation`.

> Throughput answers *"is it fast?"* — nobody asked. RLS policy count answers *"can another customer see my data?"* — which every buyer wonders and none says aloud.

### E.5 — Remove portfolio filler
**File:** `src/data/portfolio-data.json`. Delete the entire `sideProjects` entry titled `"This site"`. Leave the other entry untouched. If any component indexes `sideProjects[1]` or assumes a fixed length, **STOP and report**.

**Verify:**
```
npm run typecheck && npm run lint && npm run build
grep -rn "This site" src/data/portfolio-data.json   # expect: none
grep -rn "Agency Milestone" src/                     # expect: none
grep -rn "273,261" src/                              # expect: still present
```
**COMMIT:** `feat(positioning): surface real platform scale and buyer-facing proof metrics`

---

# PHASE F — Align the AI companion

**Why:** `src/routes/api/chat.ts` instructs the model to *"Always provide transparent pricing numbers (₹40k Paid Diagnosis, ₹3.5L–₹6L One Workflow Built)."* After Phases A and B both numbers are wrong, and an assistant contradicting the page is worse than either alone.

**F.1 — Find (~line 79):**
```
   * Always provide transparent pricing numbers (₹40k Paid Diagnosis, ₹3.5L–₹6L One Workflow Built) when asked about rates.
```
**Replace with:**
```
   * Always state the ₹20,000 Paid Diagnosis price (3 days, 100% credited) when asked about rates.
   * For the build price, say most builds land between ₹2L and ₹12L depending on scope, and that the exact fixed quote comes out of the diagnosis. Never quote a narrower range than that.
```

**F.2** — Search the file for any remaining `₹3.5L` / `₹6L` and replace with the same "₹2L–₹12L, exact quote from the diagnosis" framing. Confirm Phase A already converted every `₹40k` here to `₹20k`.

**F.3** — Search `chat.ts` for `Printfast` / `Zambia` and genericise consistently with Phase C if present.

**Verify:**
```
grep -rn "3.5L\|₹40" src/routes/api/chat.ts    # expect: no matches
grep -rni "printfast\|zambia" src/              # expect: no matches
npm run typecheck
```
**COMMIT:** `fix(chat): align companion pricing and wording with the site`

---

## FINAL VERIFICATION
```
npm run typecheck && npm run lint && npm run build
grep -rn "₹40k\|₹40,000" src/       # expect: none
grep -rni "printfast\|zambia" src/   # expect: none
grep -rn "3.5L" src/                 # expect: none
```
Then `npm run dev` and confirm in **both themes**: diagnosis reads ₹20,000 everywhere including nav; offer card reads "Fixed quote / from the diagnosis"; FAQ renders and expands; Trelio card shows the scale line; systems section renders correctly with one entry removed.

## DO NOT
- Do **not** touch the `₹20k – ₹35k` monthly care price while doing Phase A.
- Do **not** touch any repo other than `Chanakya_Portfolio` — the others are **read-only measurement sources**.
- Do **not** invent or round any number. Every figure must come from a command run in E.1.
- Do **not** claim 58 *tests* from 58 test *files* — say "test suites".
- Do **not** change "modelled on" / "built to the spec of" to "delivered for", "client", or "customer".
- Do **not** re-add Kapstone anywhere.
- Do **not** add a dependency for the FAQ accordion.
- Do **not** restyle or re-layout. A, B, C, E, F are copy/data only; D is one new section following existing conventions.

## REPORT BACK
- The four values measured in E.1 and whether they differed from this document.
- Confirmation `git remote get-url origin` returned the portfolio repo before editing.
- Confirmation the care price `₹20k – ₹35k` survived Phase A intact.
- Any `sideProjects` indexing assumption hit in E.5.
- Confirmation typecheck, lint and build are green and both themes were checked.
