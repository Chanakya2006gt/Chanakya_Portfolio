# PHASE 1: Stop the contradictions (ChanBuilds)

**Repo:** `Chanakya_Portfolio`
**Remote:** `https://github.com/Chanakya2006gt/Chanakya_Portfolio`
**Branch:** `dev`
**Base commit when this plan was written:** `40f6376`
**Source of truth for the decisions behind this plan:** `studio-refactor-plan.md` (repo root)

**Goal of this phase:** make the site say one consistent thing. It becomes the site of a small studio, ChanBuilds, that people book a call with.

- No prices anywhere.
- No "15 days".
- No student, resume or college material.
- Every call-to-action goes to one booking page, `/book`.

**This phase is not a redesign.** Colours, fonts, layout and theme stay as they are. The redesign is Phase 3.

---

## READ THIS FIRST: rules for the agent

**Rule 1. Do not hallucinate.**

- Every string you add must come from this plan, word for word.
- Do not invent any of these: prices, numbers, client names, testimonials, statistics, URLs, phone numbers, emails, dates, or claims.
- If you think some copy is missing, do not write it. Stop and ask (Rule 2).
- Never make up a booking link. `BOOKING_URL` stays an empty string until Chanakya gives you one.

**Rule 2. Stop and ask.** Stop and ask Chanakya before continuing if any of these happen:

- An "old string" in this plan does not match the file exactly.
- A file is missing.
- A grep finds usages this plan did not predict.
- A typecheck or build error is not obviously caused by your own edit.
- Anything else is unclear.

Say exactly what you found (file, line, text). Do not guess and carry on.

**Rule 3. Match on strings, not line numbers.** Line numbers in this plan were correct at `40f6376`, but they drift as soon as you edit. Find each edit by its exact text.

**Rule 4. Scope discipline.**

- Touch only the files named in each task.
- Do not reformat, rename or tidy anything else.
- Do not upgrade dependencies.
- Do not change colours, fonts, theme (dark/light) or spacing.
- Do not touch the production Vercel Blob (`content.json` / `content-backup.json`).

**Rule 5. Do not commit or push** unless Chanakya asks. Leave the changes in the working tree for review.

---

## Step 0: Confirm where you are

Run:

```bash
git remote get-url origin      # expect https://github.com/Chanakya2006gt/Chanakya_Portfolio(.git)
git branch --show-current      # expect dev
git status -s                  # expect only untracked: "Claude outputs/", brand-assets/, profile-copy/, studio-plans/
git log --oneline -1           # expect 40f6376 or a later commit
```

If the remote or branch is different, STOP and ask. If `git status` shows modified tracked files, STOP and ask. Do not stash or discard anything.

---

## Decisions still open (do NOT decide these yourself)

| # | Open decision | What to do in Phase 1 |
|---|---|---|
| D1 | Booking tool (Cal.com recommended) | Leave `BOOKING_URL = ""`. The UI falls back to WhatsApp (Task 2). |
| D2 | Is the diagnosis fee "credited in full" against the build? | Do not say it is credited anywhere. |
| D3 | Capacity line ("Taking 2 builds a month") | Remove it from the page (Task 4). |
| D4 | Final page title | Use the proposed title in Task 13. Chanakya may change it later. |
| D5 | Vercel subdomain rename to chanbuilds | Keep `SITE_URL` exactly as it is now. |
| D6 | Keep offering simple websites (FAQ 9)? | Keep the offering and remove only the price (Task 9). |

---

## Task 1: Create `src/data/studio.ts` (single source for names and contacts)

Create a new file, `src/data/studio.ts`, with exactly this content:

```ts
// Single source of truth for studio identity and contact details.
// Do not hard-code these values anywhere else.

export const STUDIO_NAME = "ChanBuilds";
export const FOUNDER_NAME = "Nagulagam Chanakya";

export const CONTACT_EMAIL = "nagulagamchanakya2211@gmail.com";

export const WHATSAPP_DISPLAY = "+91 76740 40571";
const WHATSAPP_NUMBER = "917674040571";
const WHATSAPP_GREETING =
  "Hi Chanakya, I found ChanBuilds and want to talk about how we handle quotes and jobs.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

// Empty until Chanakya sets up the booking tool. Never invent a URL here.
export const BOOKING_URL = "";

export const SITE_URL = "https://chanakya-portfolio-orcin.vercel.app";

export const GITHUB_URL = "https://github.com/Chanakya2006gt";
export const LINKEDIN_URL = "https://www.linkedin.com/in/nagulagam-chanakya-b93514315";
```

The GitHub and LinkedIn URLs are copied from the current footer in `src/components/portfolio-home.tsx`. Check that they match exactly. If they differ, STOP and ask.

**Verify:**

```bash
grep -n "BOOKING_URL = \"\"" src/data/studio.ts     # 1 hit
```

---

## Task 2: Create the `/book` route: `src/routes/book.tsx`

Create a new file, `src/routes/book.tsx`. Model its structure on `src/routes/method.tsx`:

- same `createFileRoute` pattern
- same `head()` pattern
- same minimal header with a back link
- same footer style

Import the constants from `@/data/studio`.

**Meta:**

- `title`: `Book a call — ChanBuilds`
- `description`: `Book a free 20-minute call with ChanBuilds. We look at how your business quotes and runs jobs today, and whether custom software is worth it for you.`

**Header:** a back link with the text `Back to ChanBuilds` that points to `/`.

**Page content, in this order and word for word:**

1. H1: `Book a 20-minute call`
2. Paragraph: `First call is free. You talk to the person who builds it.`
3. Primary button:
   - If `BOOKING_URL` is not empty: label `Pick a time`, `href={BOOKING_URL}`, `target="_blank" rel="noopener noreferrer"`.
   - If `BOOKING_URL` is empty (the current state): label `Message me on WhatsApp`, `href={WHATSAPP_URL}`, `target="_blank" rel="noopener noreferrer"`.
4. Secondary line: `Prefer email?` followed by a `mailto:` link to `CONTACT_EMAIL` that shows the email address as its text.
5. Sub-heading `Before we talk, it helps to know:` followed by this list:
   - `What your business does, and roughly how many people handle quotes or jobs.`
   - `How a quote goes out today: spreadsheet, WhatsApp, software, or on paper.`
   - `The one part of that process that wastes the most time or money.`
6. Sub-heading `What happens next` followed by this numbered list:
   1. `You pick a time, or message me on WhatsApp.`
   2. `I send you a WhatsApp message the day before.`
   3. `We talk for 20 minutes about how you quote today. If custom software isn't worth it for you, I'll say so.`

**Footer:** `© {year} ChanBuilds · Built by Nagulagam Chanakya`, using `new Date().getFullYear()` as `method.tsx` does.

**Styling:** reuse the classes already used in `method.tsx` and the existing `Button` component, with the same sage button class `btn-sage-glow`. Do not add new colours or fonts.

`src/routeTree.gen.ts` is auto-generated by the TanStack Router plugin. **Do not hand-edit it.** Run `npm run dev` (or `npm run build`) once and let the plugin regenerate it. If it does not regenerate, STOP and ask.

**Verify:**

```bash
grep -n "'/book'" src/routeTree.gen.ts           # at least 1 hit after regeneration
grep -n "Book a 20-minute call" src/routes/book.tsx
```

---

## Task 3: Navigation (`src/data/projects.ts` and `src/components/site-nav.tsx`)

### 3a. `src/data/projects.ts`: replace `navLinks`

Old:

```ts
export const navLinks = [
  { href: "#pricing", label: "Pricing" },
  { href: "#systems", label: "Live Systems" },
  { href: "/method", label: "Method" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "Trust & Terms" },
  { href: "#contact", label: "Contact" },
] as const;
```

New:

```ts
export const navLinks = [
  { href: "#systems", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;
```

Check that `site-nav.tsx` handles hash links correctly when the user is on `/method` or `/book`, not just on `/`. Look at how it currently builds the href. If it renders `#systems` as a bare hash, links from `/method` and `/book` break. In that case, prefix hash links with `/` when rendering (for example `/#systems`). Change only the nav rendering to do this. If it is unclear how, STOP and ask.

### 3b. `src/components/site-nav.tsx`

1. Logo. Replace:

   ```tsx
   Chanakya<span className="text-sage">.</span>
   ```

   with:

   ```tsx
   ChanBuilds<span className="text-sage">.</span>
   ```

2. There are three CTAs that currently point to `/#pricing`:
   - desktop: `Book a ₹20k Diagnosis`
   - mobile: `₹20k Diagnosis`
   - sheet: `Book a ₹20k Diagnosis →`

   For each one:
   - change `href="/#pricing"` to `href="/book"`
   - change the label to `Book a call` (for the sheet item, `Book a call →`)

3. Do not remove `ThemeToggle` in this phase. The theme change is Phase 3.

**Verify:**

```bash
grep -n "₹\|pricing\|Diagnosis" src/components/site-nav.tsx src/data/projects.ts   # 0 hits
grep -c "/book" src/components/site-nav.tsx                                         # 3
```

---

## Task 4: Hero (`src/components/portfolio-home.tsx`, function `Hero`)

1. **Delete the eyebrow pill**: the whole `<div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 ...">` block that contains the text `Quote-to-job systems · for businesses that quote, approve and deliver`.

2. **Keep the H1 exactly as it is** ("Quotes and jobs shouldn't live on WhatsApp.").

3. **Replace the sub-paragraph text.**

   Old: `I build the system a business actually runs: quote → confirm → work. Fixed price. You keep the repo. Live on an industrial converting workflow and on Trelio.`

   New: `I build the quoting and job system your business runs on, around your own rates.`

4. **Delete the capacity pill**: the whole `<div className="mt-6 inline-flex items-center gap-2 rounded-xl ...">` block that contains `Capacity:` and `{currentStatus}`. Also:
   - delete the line `const currentStatus = availabilityStatus || "Taking 2 builds a month · booking the next slot";`
   - remove the now-unused `availabilityStatus` prop from `Hero`, `HeroProps`, and the `<Hero ... />` call site in `PortfolioHome`

   Before deleting, run `grep -n "HeroProps\|<Hero" src/components/portfolio-home.tsx` to find them. If `HeroProps` is used anywhere else, STOP and ask.

5. **Primary CTA.** Replace:

   ```tsx
   <a href="#pricing">
     <span>Book a ₹20k Diagnosis →</span>
   </a>
   ```

   with:

   ```tsx
   <a href="/book">
     <span>Book a 20-minute call →</span>
   </a>
   ```

6. **Secondary CTA.** Replace the whole `<a href="https://industrial-packaging-platform.vercel.app" ...>` element (label `Open Live Plant Quote`, with an `ExternalLink` icon) with:

   ```tsx
   <a href="#systems" className="inline-flex items-center gap-2">
     <span>See the work</span>
   </a>
   ```

   Keep the surrounding `<Button asChild size="lg" variant="outline" ...>` wrapper unchanged. The live Apex link is removed because the live demo currently shows the wrong currency (Kwacha). It comes back only after Chanakya confirms the demo is fixed.

7. **Add a reassurance line** directly under the CTA row (after the closing `</div>` of `mt-8 flex flex-wrap ...`):

   ```tsx
   <p className="mt-4 text-sm text-muted-foreground">First call is free.</p>
   ```

8. `HeroQuoteCard` (the right column) stays in this phase.

**Verify:**

```bash
grep -n "currentStatus\|Capacity\|₹20k\|Open Live Plant\|Fixed price. You keep" src/components/portfolio-home.tsx   # 0 hits
```

---

## Task 5: Pricing section becomes the process section (`src/components/offer-ladder.tsx`)

Keep the file name and the `OfferLadder` export name, so the import in `portfolio-home.tsx` does not change.

1. Change `id="pricing"` to `id="process"`.

2. Eyebrow text. Replace the current eyebrow (`Quote-to-Job Systems`) with `How it works`.

3. Replace the H2 `Fixed-price technical engagements` with `How a project runs`.

4. Replace the sub-line `From a 3-day diagnosis to a complete workflow built and handed over in 15 days.` with `Four steps, from a first call to a system your team uses every day.`

5. **Keep** the "Three Types of Workflows Built:" block (the three doors) exactly as it is. If any text inside it contains `₹`, `15 days` or a price, STOP and report it. Do not rewrite it yourself.

6. **Delete** the "How I Quote" strip (the block that starts with the comment `{/* How I Quote Strip */}`).

7. **Delete** all three price cards (the ₹20,000 card, the "Step 2 · 15 Days" card and the "₹20k – ₹35k / month" card), including their buttons ("Book a Paid Diagnosis (₹20k)", "Inquire About a Build", "Ask About Retainers").

8. **In their place, add four step cards.** Reuse the existing `Card`/`CardHeader`/`CardContent` markup and classes from the deleted cards, so they look the same as before. Use a 1-column grid on mobile, 2 at `sm`, 4 at `lg`. The text must be verbatim:

   | Number | Title | Meta line | Body | "You leave with" line |
   |---|---|---|---|---|
   | `01` | `Intro call` | `20 minutes · free` | `You show me how a quote or job moves today. I tell you honestly if custom software is worth it for you.` | `You leave with: a straight yes or no.` |
   | `02` | `Workflow Diagnosis` | `About 3 days · paid` | `I map your rules and rates, and build one working screen on your real data.` | `You leave with: that screen, a written spec, and a fixed quote for the build.` |
   | `03` | `Build` | `Up to 8 weeks` | `Weekly check-ins. Your team tries it on real jobs before launch.` | `You leave with: the system, live on your domain. The code is yours.` |
   | `04` | `Keep it running` | `Optional · monthly` | `Changes as your business changes, and someone to call when something breaks.` | *(none; omit this line for card 04)* |

9. Under the cards, add two short lines in muted text:
   - `The diagnosis is paid because a real quote needs real work.`
   - `We talk about cost on the call, once I know what your workflow needs.`

   Do **not** write "credited", "100%" or any amount (open decision D2).

10. Add one centred primary button below those lines: label `Book a 20-minute call`, `href="/book"`, class `btn-sage-glow`, same size as the hero button.

11. Replace the bottom link text `How 15 days actually run step-by-step → Read the Systems Factory` with `See each step in detail →`. Keep `href="/method"`.

12. Use only the existing sage colour classes for accents in the new cards. Do not introduce emerald, cyan, teal or indigo in any new markup.

**Verify:**

```bash
grep -n "₹\|15 days\|15 Days\|pricing\|Retainer\|credited\|lakh" src/components/offer-ladder.tsx   # 0 hits
grep -n 'id="process"' src/components/offer-ladder.tsx                                              # 1 hit
```

---

## Task 6: Method page (`src/components/method-section.tsx` and `src/routes/method.tsx`)

### 6a. `src/components/method-section.tsx`

1. In the `phases` array, **delete the `days` property** from all five phase objects ("Days 1–3", "Days 4–5", "Days 6–10", "Days 11–13", "Days 14–15"). Also delete the render line:

   ```tsx
   <span className="text-xs font-mono text-muted-foreground">· {item.days}</span>
   ```

   If `days` is referenced anywhere else (for example a type), remove it there too. Grep first: `grep -n "days" src/components/method-section.tsx`.

2. In phase 01's points, delete the item `"100% of the ₹20k diagnosis credited against the full build"`. Do not replace it.

3. Read every remaining phase title and point. Report any that mention a day count, a price, "15" or "fixed price" to Chanakya, with the exact text. Do not rewrite them yourself.

   Exception: `"14 days of dedicated on-call support for any questions or tweaks"` stays. It is true and matches the FAQ.

4. Eyebrow: replace `The 15-Day Method` with `How it works`.

5. H2: replace `How 15 days actually run step-by-step.` with `How a project runs, step by step.`

6. Sub-line: replace the text that begins `Predictable, fixed-price engineering` (the whole sentence or paragraph) with `What you give at each step, and what you get back.`

7. Delete the badge `5 Grounded Phases · Fixed 15 Days` (the whole element).

8. Bottom banner:
   - Heading: replace `Start with Phase 1 · Paid Diagnosis` with `Start with a free 20-minute call`.
   - Body: replace `3 days, ₹20,000, 100% credited against the build. You get 1 working screen and a guaranteed fixed quote.` with `We look at how you quote today. If it's a fit, the next step is the diagnosis.`
   - Link: change `href="/#pricing"` to `href="/book"` and change the text `View Fixed Pricing` to `Book a call`.

### 6b. `src/routes/method.tsx`

1. Meta title: replace `The 15-Day Method — Quote-to-Job Systems for Operating Businesses` with `How a project runs — ChanBuilds`.
2. Meta description: replace the whole content string with `How a ChanBuilds project runs, from a free first call to a system your team uses every day. What you give at each step, and what you get back.`
3. Header back link: replace `Back to Systems` with `Back to ChanBuilds`.
4. Header CTA: replace:

   ```tsx
   <Link to="/" hash="pricing">
     <span>Book a ₹20k Diagnosis</span>
   ```

   with a plain anchor:

   ```tsx
   <a href="/book">
     <span>Book a call</span>
   ```

   (Close it with `</a>` instead of `</Link>`.) If the route type-checks with `<Link to="/book">` after Task 2, you may use that instead.

5. Footer text: replace `© {new Date().getFullYear()} Nagulagam Chanakya · Quote-to-job systems` with `© {new Date().getFullYear()} ChanBuilds · Built by Nagulagam Chanakya`.

6. Footer links:
   - Delete the `Pricing` link (`<Link to="/" hash="pricing" ...>Pricing</Link>`).
   - Rename the remaining links: `Live Systems` → `Work`, `Trust & Terms` → delete it, `Contact` → keep.
   - Add a `Book a call` link to `/book`.

   If the footer has other links, list them to Chanakya before changing them.

**Verify:**

```bash
grep -n "₹\|15\|pricing\|Pricing\|Days \|Fixed 15\|credited" src/components/method-section.tsx src/routes/method.tsx
# Only allowed hit: "14 days of dedicated on-call support..."
```

---

## Task 7: Work section (`LiveSystems` in `portfolio-home.tsx`, `id="systems"`)

1. **Apex card.** Remove both links to `https://industrial-packaging-platform.vercel.app`:
   - the top link with text `Open Live Demo ↗`
   - the footer button with text `Open Live Demo`

   Keep the `Repo` link (to `https://github.com/Chanakya2006gt/Industrial-packaging-platform`) and the `Reference Build` badge. If removing the footer button leaves an empty `CardFooter`, remove the empty footer too.

2. **Trelio card.**

   - Old: `In continuous development since March 2026 · 623 commits · 58 test suites · multi-tenant, payments, RLS, audit ledger`
   - New: `In continuous development since March 2026 · multi-tenant, payments, RLS, audit ledger`

   - Old: `448 automated test suites verifying immutable approval timestamps and multi-tenant security.`
   - New: `Automated tests cover approval timestamps and multi-tenant security.`

3. Do not change `TrelioPreview` or `ApexPreview`. Their mock figures (for example `₹0.64 / pc`) are demo data inside a product preview and are allowed.

**Verify:**

```bash
grep -n "industrial-packaging-platform.vercel.app\|623 commits\|448 automated" src/components/portfolio-home.tsx   # 0 hits
```

---

## Task 8: Trust section (`TrustAndTerms` in `portfolio-home.tsx`, `id="about"`)

1. Old: `Clear terms, fixed prices, and direct senior engineering. No hidden scope creep, no junior handoffs.`

   New: `Clear terms, a fixed quote before you commit, and you work directly with the person who builds it.`

2. Old: `<strong>No generic brochure websites, no 50-page PowerPoint decks, and no unmanageable full-company ERPs in 15 days.</strong>`

   New: `<strong>No 50-page PowerPoint decks and no unmanageable full-company ERPs.</strong>`

   "Generic brochure websites" is removed because FAQ 9 says simple websites are offered (D6). Keep the rest of that paragraph unchanged.

3. Card heading: replace `How The Money Works` with `A fixed quote before you commit`.

4. Card body. Replace:

   ```
   <strong>Fixed prices with 100% diagnosis credit.</strong> The ₹20,000 paid diagnosis is fully credited against your 15-day build. Builds are structured in milestones: work pauses if a milestone payment is pending, so neither party ever takes unbounded risk.
   ```

   with:

   ```
   The diagnosis ends in a fixed quote for the build. Builds are structured in milestones: work pauses if a milestone payment is pending, so neither side takes unbounded risk.
   ```

5. Line 313 mentions `…operate a team of 3 on Trelio…`. **Do not change it.** Report it to Chanakya so he can confirm it is still accurate.

**Verify:**

```bash
grep -n "₹\|15 days\|15-day\|fixed prices\|100% diagnosis" src/components/portfolio-home.tsx   # 0 hits
```

---

## Task 9: FAQs (`src/data/faqs.ts` and `src/components/faq-section.tsx`)

In `src/data/faqs.ts`, make these changes and nothing else:

**FAQ 1.**

- Question: `What does a build actually cost?` → `What does it cost?`
- Answer (replace entirely): `It depends on your workflow. That's why the first call is free and the diagnosis ends in a fixed quote. You'll know the exact number before you commit.`

**FAQ 4** ("What happens after launch?"). Replace the answer entirely:

`Fourteen days of bug fixes are included. After that, optional monthly support covers maintenance, small changes and priority response. Plenty of projects don't need it.`

**FAQ 7.**

- Question: `What if it isn't finished in 15 days?` → `What if it isn't finished on time?`
- Answer (replace entirely): `The scope and timeline are fixed in the diagnosis precisely so this doesn't happen. If something in my control runs over, I finish it.`

**FAQ 8** ("What kinds of businesses do you build for?"). Change only the last sentence:

- Old: `The diagnosis tells us in three days whether it fits.`
- New: `The first call tells us whether it fits.`

**FAQ 9** ("Do you build regular websites too?"). Change only one phrase:

- Old: `The ₹20,000 diagnosis exists for work where I genuinely can't quote you honestly without digging first`
- New: `The paid diagnosis exists for work where I genuinely can't quote you honestly without digging first`

**New FAQ.** Insert it directly after FAQ 8 (before "Do you build regular websites too?"):

```ts
  {
    question: "Isn't custom software only for big companies?",
    answer:
      "It used to be. Today one builder can shape a system around your business in about two months, so it's within reach for a business your size.",
  },
```

**`src/components/faq-section.tsx`.** Replace the sub-line `Clear answers on pricing bands, technology choices, code ownership, and how builds actually run.` with `Straight answers on cost, ownership, timelines and fit.`

The FAQPage JSON-LD in `__root.tsx` is built from `faqs`, so it updates automatically. Do not edit it by hand.

**Verify:**

```bash
grep -n "₹\|lakh\|15 days\|retainer\|three days" src/data/faqs.ts   # 0 hits
grep -c "question:" src/data/faqs.ts                                # 10
```

---

## Task 10: Contact and footer (`portfolio-home.tsx`)

### 10a. `Contact` function

1. Delete the `dialogOpen` state and the whole `handleNoteSubmit` function (the mailto builder).

2. Change the H2 `Let's build your operational workflow.` to `Let's look at how you quote today.`

3. Replace the italic quote paragraph `"Fixed-price quote-to-job systems for operating businesses. Straight to engineering."` with a plain (non-italic) muted paragraph: `Twenty minutes, free. If custom software isn't worth it for you, I'll say so.`

4. Replace the whole `<Dialog>...</Dialog>` block with three actions, in this order:
   - Primary button `Book a 20-minute call` → `href="/book"` (class `btn-sage-glow`, `size="lg"`)
   - Outline button `Message on WhatsApp` → `href={WHATSAPP_URL}`, `target="_blank" rel="noopener noreferrer"`
   - Text link showing `CONTACT_EMAIL` → `href={\`mailto:${CONTACT_EMAIL}\`}`

5. Below the actions, add the heading `What happens next` and this ordered list:
   1. `You pick a time.`
   2. `I send you a WhatsApp message the day before.`
   3. `We talk for 20 minutes about how you quote today.`

6. Import `WHATSAPP_URL` and `CONTACT_EMAIL` from `@/data/studio`.

7. Remove imports that are now unused: likely `Dialog*`, `Input`, `Label`, `Textarea`, `toast`, `Mail`. Remove each one **only if** a grep of this file shows no remaining use. `useState` is still used by `PortfolioHome`, so keep it.

### 10b. Footer (bottom of `PortfolioHome`)

1. Replace `<p className="font-medium text-foreground">Nagulagam Chanakya</p>` with `ChanBuilds`.

2. Replace the line `Quote-to-job systems for operating businesses · nagulagamchanakya2211@gmail.com` with `Built by Nagulagam Chanakya · {CONTACT_EMAIL}`.

3. Replace the footer link list with:
   - `Work` → `#systems`
   - `Process` → `#process`
   - `FAQ` → `#faq`
   - `Book a call` → `/book`
   - `WhatsApp` → `{WHATSAPP_URL}` (new tab)
   - `GitHub` → `{GITHUB_URL}` (new tab)
   - `LinkedIn` → `{LINKEDIN_URL}` (new tab)

   Keep `/method` out of the footer. It is reached from the process section.

4. Replace `© {new Date().getFullYear()} Nagulagam Chanakya. Fixed-price operational software.` with `© {new Date().getFullYear()} ChanBuilds. Built by Nagulagam Chanakya.`

5. The `#about` section (TrustAndTerms) stays on the page. It just has no nav or footer link now.

**Verify:**

```bash
grep -n "mailto:nagulagam\|Fixed-price\|#pricing\|Trust & Terms\|Dialog" src/components/portfolio-home.tsx   # 0 hits
```

---

## Task 11: Chatbot rewrite

### 11a. `src/components/mascot/companion.tsx`: plain launcher button

1. Replace the mascot launcher with a plain button:
   - lucide icon `MessageCircle`
   - visible text `Questions?`
   - `aria-label="Ask a question about ChanBuilds"`

   Keep the same fixed position (bottom-right) and the open/close logic that renders `companion-chat.tsx`.

2. Remove `SPEECH_BUBBLES`, the greeting timer, `CompanionSvg` and `useMascotState` from this file.

### 11b. `src/components/mascot/companion-chat.tsx`

1. Remove the `CompanionSvg` import and the `<CompanionSvg state="idle" size={32} />` element in the header. Put nothing in its place, or a small `MessageCircle` icon.
2. Header title: `Chanakya's Assistant` → `Ask about ChanBuilds`.
3. Header sub: `Answers about pricing, scope and fit` → `Answers about how a project runs and whether it fits`.
4. Welcome message: replace `👋 I'm Chanakya's assistant. Ask me about pricing, how a build runs, what you own at the end, or whether your workflow is a fit.` with `Hi, I can answer questions about how ChanBuilds works, what you own at the end, and whether your workflow is a fit.`
5. `PREBUILT_QUESTIONS`: replace the array's items with these four. Keep the existing object shape (label/question fields, whatever they are called), and use no emoji:
   - `What do you build?`
   - `How does a project run?`
   - `Is this right for my business?`
   - `How do I start?`
6. Placeholder: `Ask anything about builds or pricing...` → `Ask about how a project runs...`
7. Keep `renderInlineMarkdown`, `role="dialog"` and the Escape handler unchanged.

### 11c. Delete the mascot files, only after a grep

```bash
grep -rn "companion-svg\|use-mascot-state\|CompanionSvg\|useMascotState" src
```

The expected result after 11a and 11b is **only** hits inside `src/components/mascot/companion-svg.tsx` and `src/hooks/use-mascot-state.ts`. If so, delete those two files. If anything else still imports them, STOP and ask.

### 11d. `src/routes/api/chat.ts`

1. Remove `import { getPortfolioData } from "@/data/store";` and every use of `getPortfolioData`, `resumeOverride`, `education` and `PUBLIC_EMAIL` in this file.

2. Replace `buildDynamicSystemPrompt()` with a function `buildSystemPrompt()` that returns the static prompt below. Import the constants from `@/data/studio` and use them in the template string.

   ```ts
   function buildSystemPrompt(): string {
     return `You are the assistant on the ${STUDIO_NAME} website. ${STUDIO_NAME} is a small software studio run by ${FOUNDER_NAME}. You answer visitors' questions about how ${STUDIO_NAME} works and whether it fits their business.

   WHAT ${STUDIO_NAME} BUILDS
   Custom software for businesses where work starts with a quote or an approval: the system that takes a job from quote, to confirmation, to delivery, built around the business's own rates and rules. Examples of fitting businesses: fabrication, interiors, printing, packaging, events, equipment rental, contracting. Simple websites are also built; those get a free quote after one conversation.

   HOW A PROJECT RUNS
   1. Intro call: 20 minutes, free. The visitor shows how a quote or job moves today and gets an honest yes or no on whether custom software is worth it.
   2. Workflow Diagnosis: about 3 days, paid. ${FOUNDER_NAME} maps the rules and rates and builds one working screen on real data. The visitor gets that screen, a written spec, and a fixed quote for the build.
   3. Build: up to 8 weeks, with weekly check-ins. The team tries it on real jobs before launch. The client gets the system live on their own domain and owns the code.
   4. Keep it running: optional monthly support. Fourteen days of bug fixes after launch are included.

   WORK
   - Trelio (trelio.in): a live product ${FOUNDER_NAME} built and runs. Clients approve and pay for each stage of work before the next stage unlocks.
   - Apex Packaging & Converting: a reference build showing a quoting system for an industrial packaging converter. It is a demonstration, not a client project.

   HOW TO START
   - Book a call: [Book a call](/book)
   - WhatsApp: [${WHATSAPP_DISPLAY}](${WHATSAPP_URL})
   - Email: [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})

   RULES (follow all of them)
   - Never state a price, a price range, a ballpark, a day rate or a monthly fee. If asked about cost, say that cost depends on the workflow, that the first call is free, and that the diagnosis ends in a fixed quote. Then offer the booking link.
   - If the visitor suggests a number ("is it around X?"), do not confirm, deny or react to the number. Give the answer above.
   - Never mention education, college, degrees, age or being a student.
   - Never invent clients, testimonials, results, statistics or timelines. Only mention Trelio and Apex, as described above.
   - Never promise a faster timeline than "up to 8 weeks" for a build.
   - Only share the contact details listed under HOW TO START. Never produce any other phone number, email or link.
   - If you do not know something, say so and suggest a call.
   - Keep answers under 80 words. Plain sentences. No emoji. No headings.`;
   }
   ```

   Update the call site that used `buildDynamicSystemPrompt()` to use `buildSystemPrompt()`.

3. Replace the whole body of `getFallbackReply(messages)` (currently keyword branches for price/apex/trelio/tech/hire/default) with a single reply that ignores the messages. Keep the function signature so the call sites still compile:

   ```ts
   function getFallbackReply(_messages: any[]): string {
     return `I can't answer right now. The quickest way to talk is a free 20-minute call: [Book a call](/book). You can also message [WhatsApp ${WHATSAPP_DISPLAY}](${WHATSAPP_URL}) or email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).`;
   }
   ```

4. **Do not change** the rate limiter, the message caps, `max_completion_tokens`, `temperature`, the model env var, or the OpenAI request shape.

5. `/book` is a relative link. `renderInlineMarkdown` opens only `http` links in a new tab, so `/book` will open in the same tab. That is intended.

### 11e. Acceptance test (run locally with `npm run dev` and a valid `OPENAI_API_KEY`)

Ask these 8 questions in the chat widget and paste every answer into your report.

| # | Question | Pass if the answer... |
|---|---|---|
| 1 | `How much does a build cost?` | has no number or ₹ and points to the call or `/book` |
| 2 | `Is it around 2 lakh?` | does not confirm or deny the number |
| 3 | `What's your day rate?` | has no number |
| 4 | `Which college did you go to?` | does not mention any college or degree |
| 5 | `Who are your clients?` | mentions only Trelio and Apex (as a demo), with no invented names |
| 6 | `Can you finish in 2 weeks?` | does not promise under 8 weeks |
| 7 | `What's your phone number?` | gives only +91 76740 40571 / the WhatsApp link |
| 8 | `How do I start?` | links to `/book` |

If any answer fails, report it with the exact text. Do not keep rewording the prompt on your own. STOP and ask.

If you have no `OPENAI_API_KEY` locally, say so in the report and test only the fallback reply.

---

## Task 12: Remove the resume and student system

### 12a. Delete these files

After confirming each one with the grep in 12e:

- `src/components/resume-modal.tsx` (currently imported by nothing)
- `src/routes/api/resume.ts`
- `src/routes/api/admin/resume.ts`
- `src/data/resume-schema.ts`

Then let the router plugin regenerate `src/routeTree.gen.ts` (run `npm run dev` once). Do not hand-edit it.

### 12b. `src/data/store.ts`

1. Remove the import `import type { ResumeContent } from "./resume-schema";`.

2. Remove `skills as defaultSkills` from the `./projects` import.

3. In `DynamicData`, remove these fields: `skills`, `workAvailability`, `hiringStatus`, `heroTagline`, `resume`, `resumeOverride`. Keep `businesses`, `sideProjects` and `availabilityStatus`. Result:

   ```ts
   export interface DynamicData {
     businesses: Project[];
     sideProjects: Project[];
     availabilityStatus: string;
   }
   ```

4. In the fallback object, remove the `skills`, `workAvailability`, `hiringStatus` and `heroTagline` lines. Keep `availabilityStatus` with its current value. It is no longer rendered, but the admin still edits it. Result:

   ```ts
   return {
     businesses: defaultBusinesses,
     sideProjects: defaultSideProjects,
     availabilityStatus: "Taking 2 builds a month · booking the next slot",
   };
   ```

### 12c. `src/data/portfolio-data.json`

Remove the top-level keys `skills`, `heroTagline`, `resumeOverride` and `resume`. Keep `businesses`, `sideProjects` and `availabilityStatus` unchanged. Make sure the JSON is still valid: `node -e "JSON.parse(require('fs').readFileSync('src/data/portfolio-data.json','utf8'))"`.

### 12d. `src/data/projects.ts`

Delete the `export const skills ...` block (the "Agentic & AI" / Frontend / Backend / Product / Tools object).

### 12e. Admin: `src/routes/admin/index.tsx`

1. Delete `handleResumeUpload` (it POSTs to `/api/admin/resume`) and any state it uses.
2. Delete the "Resume & Qualifications" tab trigger and its whole tab content (including the email field bound to `resumeOverride.email`).
3. In the Status tab, delete the inputs for `heroTagline`, `workAvailability` and `hiringStatus`. Keep the `availabilityStatus` input.
4. Remove any imports that become unused.

Check that nothing else still references the removed pieces:

```bash
grep -rn "resume\|Resume\|resumeOverride\|heroTagline\|workAvailability\|hiringStatus\|defaultSkills\|skills" src --include=*.ts --include=*.tsx | grep -v routeTree.gen.ts
```

Expected remaining hits: only the string `"skills"` inside the `__root.tsx` JSON-LD, if one exists. Report any other hit and STOP.

### 12f. Server code that reads Blob

`src/data/content.server.ts` spreads `...fallback, ...data`. The live Blob still contains the old fields (`resume`, `skills`, and so on). They will be carried along but never read. **This is fine. Do not modify `content.server.ts` and do not write to Blob.** The next time Chanakya saves from the admin, the old fields may persist in Blob. That is harmless.

If TypeScript complains that `admin/index.tsx` or `api/admin/data.ts` references a removed field, fix only that reference. If the fix is not a simple deletion, STOP and ask.

### 12g. `README.md`

Remove or reword only these lines. Find them by text, not line number.

- Lines that state prices (`₹20,000`, `₹2L`, `₹12L`, `₹20k`, `₹35k`) or "15 days" / "15-day". Reword the sentence without the number or price. If a sentence cannot be reworded without inventing content, delete it.
- The env line for `OPENAI_RESUME_MODEL`.
- The env line for `PUBLIC_RESUME_PDF_URL`.
- Any section that documents the resume upload or `/api/resume`.

Show Chanakya the README diff in your report.

---

## Task 13: `src/routes/__root.tsx` (meta and structured data)

1. Delete the line `const SITE_URL = "https://chanakya-portfolio-orcin.vercel.app";` and add `import { SITE_URL, STUDIO_NAME, FOUNDER_NAME, CONTACT_EMAIL } from "@/data/studio";`.

2. Replace:

   ```ts
   const APP_NAME = "Nagulagam Chanakya — Quote-to-Job Systems for Operating Businesses";
   ```

   with:

   ```ts
   const APP_NAME = "ChanBuilds — quoting and job software, built around your business";
   ```

   This title is proposed and pending Chanakya's confirmation (D4). Use it as written.

3. Replace the `APP_DESC` value with `I build the quoting and job system your business runs on, around your own rates. You own the code. First call is free.`

4. Keywords. In the content string, delete `fixed-price software build, ` and add `ChanBuilds, ` at the start. Leave the other keywords alone.

5. Replace `og:site_name` `"Nagulagam Chanakya — Quote-to-Job Systems"` with `STUDIO_NAME`.

6. JSON-LD Person node:
   - `jobTitle`: `"Quote-to-Job Systems Engineer & Founder"` → `"Founder, ChanBuilds"`
   - `worksFor`: replace the current object with `{ "@id": \`${SITE_URL}/#studio\` }`

   First read what the current `worksFor` object contains (it references Trelio) and quote it in your report.

7. Add a new node to the `@graph` array, directly after the Person node:

   ```ts
   {
     "@type": "ProfessionalService",
     "@id": `${SITE_URL}/#studio`,
     "name": STUDIO_NAME,
     "url": SITE_URL,
     "founder": { "@id": `${SITE_URL}/#person` },
     "description": APP_DESC,
     "areaServed": "Worldwide",
     "contactPoint": {
       "@type": "ContactPoint",
       "contactType": "sales",
       "telephone": "+91-7674040571",
       "email": CONTACT_EMAIL,
     },
   },
   ```

   `APP_DESC` must be defined above `JSON_LD` for this to work. It already is. If not, STOP and ask.

8. Do not change the theme script, the `dark` class on `<html>`, or `Toaster theme="dark"`. That is Phase 3.

**Verify:**

```bash
grep -n "fixed-price\|Quote-to-Job Systems Engineer\|chanakya-portfolio-orcin" src/routes/__root.tsx   # 0 hits (SITE_URL now comes from studio.ts)
```

---

## Task 14: Public files

### 14a. `public/llms.txt`: replace the whole file

Replace the whole file with exactly this text:

```
# ChanBuilds

> ChanBuilds is a small software studio run by Nagulagam Chanakya. It builds the quoting and job system a business runs on, around the business's own rates and rules.

## Who it is for
Businesses where work starts with a quote or an approval: fabrication, interiors, printing, packaging, events, equipment rental, contracting. Simple websites are also built, with a free quote.

## How a project runs
1. Intro call: 20 minutes, free. An honest yes or no on whether custom software is worth it.
2. Workflow Diagnosis: about 3 days, paid. One working screen on real data, a written spec, and a fixed quote for the build.
3. Build: up to 8 weeks, with weekly check-ins. The client owns the code and it runs on their domain.
4. Keep it running: optional monthly support. Fourteen days of bug fixes after launch are included.

Pricing is discussed on the call, once the workflow is understood.

## Work
- Trelio (https://trelio.in): a live product built and run by Nagulagam Chanakya. Clients approve and pay for each stage of work before the next stage unlocks.
- Apex Packaging & Converting: a reference build of a quoting system for an industrial packaging converter. Source: https://github.com/Chanakya2006gt/Industrial-packaging-platform

## Contact
- Book a call: https://chanakya-portfolio-orcin.vercel.app/book
- WhatsApp: +91 76740 40571 (https://wa.me/917674040571)
- Email: nagulagamchanakya2211@gmail.com
```

### 14b. `public/sitemap.xml`

Keep the existing `<url>` for the home page. Add two `<url>` entries using the same format and the same domain as the existing one:

- `https://chanakya-portfolio-orcin.vercel.app/book`
- `https://chanakya-portfolio-orcin.vercel.app/method`

Set `lastmod` on all three to the date you make the change (`YYYY-MM-DD`).

### 14c. `public/robots.txt`

No change.

---

## Task 15 (optional; only if Chanakya says yes): Vercel Web Analytics, page views only

Vercel's Hobby plan **does not include custom events**. Do not call `track()` anywhere. Page views on `/book` are the metric for booking intent.

1. Run `npm install @vercel/analytics`.
2. In `src/routes/__root.tsx`, import `{ Analytics } from "@vercel/analytics/react"` and render `<Analytics />` once, inside the root component's body, next to `<Toaster ... />`.
3. Chanakya enables Web Analytics himself in the Vercel dashboard (Project → Analytics → Enable).

If `@vercel/analytics/react` does not work with TanStack Start SSR (for example a build error or a hydration warning), STOP and ask. Do not try other packages.

---

## Global verification (run all of these; paste the outputs in your report)

```bash
# 1. No prices, student or resume material, old timelines or old nav left in source
grep -rn "₹\|lakh\|SR University\|B\.Tech\|CGPA\|resume\|Resume\|Pricing\|15 days\|15-day\|15 Days\|15 business\|Days 1\|#pricing\|Diagnosis (₹" src public README.md \
  | grep -v "src/routeTree.gen.ts" \
  | grep -v "src/components/trelio-preview.tsx" \
  | grep -v "src/components/apex-preview.tsx" \
  | grep -v "src/components/hero-quote-card.tsx"
# Expected: 0 hits.
# The excluded preview files contain mock demo figures (e.g. "₹0.64 / pc"). That is allowed.
# Also run the grep on those 3 files separately and paste the output so Chanakya can see what remains.

# 2. Only studio.ts hard-codes contact details
grep -rn "7674040571\|nagulagamchanakya2211" src public | grep -v "src/data/studio.ts" | grep -v "public/llms.txt"
# Expected: 0 hits

# 3. No invented booking link
grep -rn "cal.com\|calendly" src public
# Expected: 0 hits

# 4. Types, lint, build
npm run typecheck
npm run lint
npm run build
```

`hero-quote-card.tsx` is excluded from grep 1 because it may contain demo quote figures. **Read it** and report whether it shows a ₹ figure that looks like ChanBuilds' own price rather than a demo quote. Do not change it.

**Manual check with `npm run dev`** (port 8080). Report each item as pass/fail:

- [ ] `/`: no ₹, no "15 days", no capacity pill, no eyebrow pill.
- [ ] `/`: nav shows ChanBuilds · Work · Process · FAQ · Book a call.
- [ ] Every "Book a call" button on `/`, `/method` and `/book` goes to `/book`.
- [ ] Nav links Work / Process / FAQ work from `/`, `/method` and `/book`.
- [ ] `/book` shows "Message me on WhatsApp" (because `BOOKING_URL` is empty) and the WhatsApp link opens `wa.me/917674040571` with the greeting pre-filled.
- [ ] `#process` shows four step cards with the exact text from Task 5.
- [ ] `/method`: no days, no ₹, and the bottom banner goes to `/book`.
- [ ] The Apex card has no live demo link. The Repo link works.
- [ ] Contact section: 3 actions plus "What happens next". No dialog.
- [ ] Chat launcher says "Questions?" (no mascot). The 8 acceptance questions pass (Task 11e).
- [ ] `/admin` loads, has no Resume tab, and saving the Status tab still works. **Test save only on a local/preview environment, never on production Blob.** If you cannot test without production Blob, skip it and say so.
- [ ] Mobile width (390px): nav sheet shows "Book a call →" and nothing overflows.

---

## DO NOT

- Do not redesign anything or change colours, fonts, spacing, dark/light theme or the logo style. That is Phase 3.
- Do not invent a booking URL, price, client, testimonial, statistic, phone number, email or domain.
- Do not write "credited in full", "100% credited" or any fee amount.
- Do not change `SITE_URL`'s value.
- Do not hand-edit `src/routeTree.gen.ts`.
- Do not modify `src/data/content.server.ts`, and do not read from or write to production Vercel Blob.
- Do not change the chat rate limiter, message caps, model env var or OpenAI request shape.
- Do not edit `trelio-preview.tsx`, `apex-preview.tsx` or `hero-quote-card.tsx`.
- Do not use `track()` or custom analytics events (not available on Vercel Hobby).
- Do not commit or push unless Chanakya asks.

---

## Things only Chanakya can do (list them in your report; do not attempt them)

1. Set up the booking tool (Cal.com free plan recommended) and send the event link. Then set `BOOKING_URL` in `src/data/studio.ts`.
2. Decide on the Vercel subdomain rename (for example `chanbuilds.vercel.app`). After that, update `SITE_URL`, `llms.txt` and `sitemap.xml` together.
3. Set up WhatsApp Business on +91 76740 40571.
4. Set a monthly spend cap on the OpenAI key.
5. Delete the `OPENAI_RESUME_MODEL` and `PUBLIC_RESUME_PDF_URL` env vars in Vercel.
6. Optionally delete the old `resume.pdf` from Vercel Blob.
7. Confirm open decisions D2 (diagnosis credit), D4 (page title) and D6 (websites offering), and whether "team of 3 on Trelio" is still accurate.

---

## Report back with

1. The output of Step 0.
2. For each task: done / skipped / stopped. If stopped, include the exact text you found.
3. The full output of every **Verify** grep and of the global verification.
4. The `typecheck`, `lint` and `build` results (the last 20 lines of each if any failed).
5. The chat acceptance test: all 8 questions and answers, word for word.
6. The manual checklist with pass/fail for each line.
7. Anything you noticed but did not change (for example leftover strings in preview files, the "team of 3" line, anything that looked like invented data).
8. `git status -s` and `git diff --stat` at the end.
