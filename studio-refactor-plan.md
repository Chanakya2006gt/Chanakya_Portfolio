# Studio site refactor plan: from student portfolio to a site people book

**Repo:** `Chanakya_Portfolio` (branch `dev`), live at `chanakya-portfolio-orcin.vercel.app`
**Scope of this document:** analysis and plan only. No code was changed.
**Date:** 21 Sept 2026 (updated the same day with Chanakya's decisions)

### Decisions made

| Decision | Answer | Where it changes the plan |
|---|---|---|
| Studio name | **ChanBuilds** (working name; may change at registration) | §13 |
| Domain | **Later**, once client money comes in. Rename the free Vercel subdomain now | §13 |
| Booking tool | Undecided → **recommend Cal.com free plan** | §8 |
| WhatsApp | **+91 76740 40571** → `https://wa.me/917674040571` | §8 |
| Chatbot | **Keep, rewritten**: no prices, no student details | §10 |
| PrintFast testimonial | **Yes, after the website is handed over** | §9, §15 |

---

## 1. The short answer

**Rewrite the page, not the stack.** TanStack Start, Tailwind v4 and the Vercel Blob content layer are fine for a studio site. What needs replacing is what the page says, how it is ordered, how it looks, and the fact that nobody can actually book you.

What surprised me: **the visible homepage already reads mostly like a studio.** The student material is not on screen. It lives where machines read it: `public/llms.txt` (what ChatGPT, Perplexity and other AI search tools ingest), the chatbot's system prompt, the admin area and a dead resume modal. Ask the "Ask Assistant" bot where you studied and it will answer "SR University — B.Tech in CSE (Expected 2028)".

The problems that cost you bookings, ranked:

1. **There is no way to book.** Every "Book" button ends at `#pricing` or `#contact`, and the contact form only opens the visitor's mail app (`mailto:`). No calendar, no WhatsApp, no lead saved anywhere.
2. **Prices are on nearly every surface**: nav, hero, a whole pricing section, Trust & Terms, three FAQ answers, the /method page, the chatbot prompt (it is *instructed* to always state ₹20,000), the FAQ structured data Google reads, and the README. That contradicts the new rule: process on the site, money on the call.
3. **The proof is all your own work.** A "Reference Build" of a persona company plus your own product. No client name, no testimonial, and three different test counts on the same page (58 suites, "448 automated test suites", "448/448 across 29 suites").
4. **It talks like an engineer to a plant owner.** The comprehension check on the current hero + process copy: 158 words, about 62 seconds to explain, four competing actions, "RLS", "ops/s", "Math & Logic Lock", "Systems Factory".
5. **Identity signals say "freelancer"**: a `-orcin.vercel.app` URL, a Gmail address, the wordmark "Chanakya.", a cartoon chat mascot.
6. **Visual habits that read as generated**: pill labels above the H1, spaced mono capitals everywhere, cards inside cards, five-plus accent hues, dark mode by default with a toggle.

Phase 1 of the plan below (strip prices and student remnants, wire real booking) is one to two days of work and fixes the first two. Do that before any redesign.

---

## 2. What this is based on

| Source | What I took from it |
|---|---|
| Full read of `Chanakya_Portfolio` | Every section, CTA, price mention and student remnant, with file and line |
| Live site in the desktop browser pane | How the current hero and sections actually render |
| Trelio marketing page: `frontend/src/pages/Home.jsx` + live `trelio.in` | Why it works, and which parts transfer |
| 11 reference sites (list in §6) | How small studios explain process, hide price and get booked |
| Better Design: positioning, marketing, sales and review rules | The page rules, the copy tells, the checklist |
| Better Design comprehension check | Scored the current copy and the proposed hero |

One tool limitation: Better Design's `extract-from-url` returned HTTP 401 (API key not configured for that tool), so I read design tokens from source instead of extracting them from the live pages.

---

## 3. Positioning: settle this before any copy

Better Design's rule is to answer four questions first, and never invent the answers. Here is what I can fill from what I know about your work. **Confirm or correct each one.**

| Question | Draft answer | Status |
|---|---|---|
| **Who is it for?** | The owner or ops head of an Indian small or mid-sized business whose work waits on a quote or an approval. Flagship: manufacturing, printing and converting plants. Also contractors, agencies paid in stages, B2B distributors. | Known |
| **What do they use today?** | Excel, WhatsApp and Tally. Sometimes Zoho or an off-the-shelf tool that can't do their math. | Known |
| **The sharpest difference** | The software is built around *their* rates, specs and approval rules, by the person they talk to. Fixed quote before they commit. They own the code. | Known; the "builder on the call" part is your real edge as a solo operator |
| **Why now?** | Custom software used to be out of reach for a business this size. It isn't any more. | **Assumption: confirm you want to say this** |

**Keep the H1:** *"Quotes and jobs shouldn't live on WhatsApp."* It passes all three positioning tests: a competitor's name doesn't fit it, a plant owner recognises their own day in it, and it names the alternative. Everything else on the page should serve the person that line speaks to.

**Strong positioning turns people away on purpose.** Say plainly who isn't a fit: "Need a five-page brochure site? I'll point you to someone faster and cheaper." That is the same honesty that makes Trelio's FAQ work, and it matches the earlier decision to keep brochure work off the site.

---

## 4. What's wrong today, in detail

### 4.1 Booking: the biggest gap

- Nav, hero and /method: "Book a ₹20k Diagnosis" → `#pricing` (`site-nav.tsx:58`, `portfolio-home.tsx:78`, `method.tsx:35`).
- Pricing cards: "Book a Paid Diagnosis (₹20k)", "Inquire About a Build", "Ask About Retainers" → `#contact` (`offer-ladder.tsx:166, 218, 270`).
- Contact: `handleNoteSubmit` (`portfolio-home.tsx:362–376`) sets `window.location.href = mailto:…`. A visitor without a configured mail app gets nothing. Nothing reaches a server.
- No calendar link, no WhatsApp, no phone anywhere (`cal.com`, `calendly`, `wa.me`, `tel:` all return zero hits).

Every reference site that sells to businesses puts a calendar one click from the hero: Steve Saintil's `/book`, Speedshop's SavvyCal link, Evil Martians' cal.com "exploration" page.

### 4.2 Prices: every location

These all have to go or be rewritten.

| Where | What |
|---|---|
| `site-nav.tsx:58, 68, 101` | "Book a ₹20k Diagnosis" (desktop, mobile, sheet) |
| `portfolio-home.tsx:78` | Hero CTA "Book a ₹20k Diagnosis →" |
| `portfolio-home.tsx:349` | Trust card "The ₹20,000 paid diagnosis is fully credited…" |
| `portfolio-home.tsx:67, 301, 394, 478` | "Fixed price" / "fixed prices" (no amount; rephrase as "fixed quote") |
| `offer-ladder.tsx` (whole file) | `id="pricing"`, "Fixed-price technical engagements", "₹20,000", "₹20k – ₹35k / month", "Ask About Retainers" |
| `faqs.ts:8–10` | "What does a build actually cost?" → "between ₹2L and ₹12L" |
| `faqs.ts:25, 50` | Care retainer "₹20k–₹35k/month"; "The ₹20,000 diagnosis exists for…" |
| `method-section.tsx:21, 191, 198` | "₹20k diagnosis credited", "3 days, ₹20,000", "View Fixed Pricing" |
| `method.tsx:35, 53` | "Book a ₹20k Diagnosis", footer "Pricing" |
| `projects.ts:51` | Nav item `{ href: "#pricing", label: "Pricing" }` |
| `api/chat.ts:48–59, 75, 80–82, 115–117, 162–163, 173` | System prompt and fallback replies state every price and tell the bot to always say ₹20,000 |
| `mascot/companion.tsx:7`, `companion-chat.tsx:13, 112, 217, 298` | "Ask me what a build actually costs", pricing quick-prompt |
| `__root.tsx:8, 95` | Meta description "Fixed price.", keyword "fixed-price software build" |
| FAQPage JSON-LD (built from `faqs.ts`) | Google reads the ₹2L–₹12L answer as structured data |
| `README.md:12, 14, 22` | ₹20,000, ₹20k–₹35k/month, ₹2L–₹12L |

Keep `hero-quote-card.tsx:66` "₹0.64 / pc". That is the demo job's per-label rate, not your price.

### 4.3 Student and engineer identity: every location

| Where | What | Who sees it |
|---|---|---|
| `public/llms.txt:3, 7, 9` | "AI-Native Systems Architect & SaaS Founder… autonomous multi-agent orchestration, applied cryptography", "**Education**: B.Tech… (Graduating 2028), SR University", then ops/s and latency benchmarks | Every AI search tool that reads the site |
| `api/chat.ts:13, 38` | Education default "SR University — B.Tech in CSE (Expected 2028)" in the bot's prompt | Any visitor who asks the bot |
| `resume-modal.tsx` | Full resume UI: SR University, coursework, "Download PDF Resume" | Nobody: it is imported nowhere |
| `api/resume.ts` | Serves the resume PDF from Blob | Anyone who finds `/api/resume` |
| `api/admin/resume.ts` | PDF upload → OpenAI parse → CGPA scrubber → writes `resume`, `skills`, `resumeOverride` | Admin only |
| `resume-schema.ts`, `store.ts:8–20, 36` | Resume types, `hiringStatus` | Code only |
| `admin/index.tsx:267, 443–491, 557–562` | "Resume & Qualifications" tab, "Computer and Information Science student…", "Team Hiring Status" | Admin only |
| `portfolio-data.json:41–120` | `skills`, `heroTagline` (never rendered), `resumeOverride`, full `resume` object | Feeds the bot |
| `README.md:79, 88, 139` | Resume env vars and modal | Anyone reading the repo |

**One dependency to handle before deleting:** `api/chat.ts:10` reads the contact email from `resumeOverride.email`. Repoint it to a plain `contactEmail` field first, or the bot loses your email.

### 4.4 Proof

- **Apex Packaging & Converting** is labelled "Reference Build" (`portfolio-home.tsx:164`) and is a persona, not a client. The hero's secondary button "Open Live Plant Quote" sends prospects to `industrial-packaging-platform.vercel.app`, which, per the twin-repos security review, still quotes in **Zambian Kwacha at Zambian VAT, with `$` on some screens and `ZMW` on others**. A prospect who clicks through sees a currency bug on your flagship demo.
- **Trelio** is your own product. Good proof of skill, not of client outcomes.
- **No testimonial, no named client, no written case study** anywhere.
- **Three conflicting test counts**: "58 test suites" (`:241`), "448 automated test suites" (`:260`), "448/448… across 29 suites" (`chat.ts`, `llms.txt`). One number, verified, or none.
- **Engineer metrics shown to buyers**: "43 RLS Policies", "273,261 ops/s", "1,000 Invariants", "0.15 MB (0 Leaks)" (`apex-preview.tsx:216–228`). A plant owner can't use any of these. They belong on a technical case-study page, if anywhere.

### 4.5 Copy

Better Design's comprehension check on the current hero plus process copy:

> **4 serious findings.** 158 words, about 62 seconds to explain (budget: 15). Four actions with no obvious next step. Unexplained acronyms: RLS, MB.

Phrases that fail the "would a plant owner understand this" test: "Fixed-price technical engagements", "Straight to engineering", "Systems Factory", "5 Grounded Phases", "Math & Logic Lock", "Core System Assembly", "Floor Stress Testing", "hardened".

### 4.6 Visual habits Better Design flags as generated

Seen on the live page and in source:

- **A pill label above the H1** ("Quote-to-job systems · for businesses that quote…") and **a second pill below it** (capacity). Rule: *labels above titles*, *template hero*.
- **Spaced mono capitals** everywhere ("THREE TYPES OF WORKFLOWS BUILT:", "QUOTE-TO-JOB SYSTEMS"). Rule: *letter-spaced capital labels*.
- **Cards inside cards**: the "three workflows" container card holding three bordered cards, each with its own coloured border. Rule: *cards used as decoration*.
- **No single accent**: sage, indigo, emerald, teal, cyan and amber all appear. Rule: *violet as the default accent*; the indigo token is the tell.
- **Dot-joined meta lines** ("Core: 76mm (3") · Web: 330mm"). Rule: *dot-joined meta lines*.
- **Dark by default, plus a theme toggle** (`__root.tsx:119`, SSR default `dark`). Rule: *dark mode nobody asked for*. Business owners on a phone in daylight are the audience.
- **Emoji as icons** in the chatbot ("💬", "📋").

Note that Trelio uses some of these too (mono spaced-caps eyebrows, a pill above its H1). Borrow Trelio's discipline, not those two habits.

---

## 5. What to take from Trelio, and what to leave

The Trelio page works because of discipline, not effects: one serif, one accent with a rule, coded mock UI instead of screenshots, restrained motion.

| Take | Why it transfers | Where it goes |
|---|---|---|
| **Serif H1 with an accent payoff phrase** ("Stop doing **unpaid work.**") | You already do this; keep it | Hero |
| **The single-accent rule**: accent only means "act on this" (`Home.jsx:15–19`) | Fixes the five-colour problem | Whole site |
| **Reassurance line under every CTA** ("Trelio never holds your money…") | Answers the doubt at the moment of decision | Hero, closing band, booking page |
| **Coded mock UI of the real product**, clickable (`HeroPreview.jsx`) | Your `HeroQuoteCard` is already this; simplify it | Hero |
| **Before/after in rupees on one worked example** | Trelio's single most persuasive device | "Today vs with your system" section |
| **Hairline ledger table for steps** (3/4/5 columns, `divide-y`) | Reads like a contract, not a template | Process section |
| **Navy bookend bands** (mechanism near the top, close at the bottom) | Gives the page rhythm | Process band, closing band |
| **FAQ ordered by real objections, with a sticky CTA card beside it** (`lg:sticky lg:top-24`) | The booking card stays in view while they read doubts | FAQ |
| **Motion**: `useReveal` (one 12px fade-up, 420ms, respects reduced motion) and the motion tokens | Copy as-is | Whole site |
| **Paper surface**: inset-white-top card shadow, 24px dot grid, cool off-white | Premium without effects | Whole site |

| Leave | Why |
|---|---|
| Mono spaced-caps eyebrows and the pill above the H1 | Flagged generated-UI tells, even on Trelio |
| Trelio's burnt orange | It is Trelio's brand. The studio needs its own, or visitors confuse the two |
| Founding-price offer and spot counter | Product-specific; you are not publishing prices |
| `/vs/` competitor pages, SHA-256 and UPI detail | Product-specific |

**What Trelio lacks that a services site needs:** testimonials and named client work. Trelio gets away without them because it is a pre-launch product. A studio can't.

---

## 6. What to take from other studios

Eleven live sites studied. The closest models to you are **Steve Saintil** (solo, custom internal tools for mid-sized businesses), **The Automation Consultants** (free call → paid audit → build → retainer, your exact model), **FastRuby.io** (a named, paid first step with a written output) and **Speedshop** (solo expert brand, "Book a call").

| Pattern | Who does it | For you |
|---|---|---|
| Hero names the buyer or a belief, not the builder's skills | Speedshop, Evil Martians, Automation Consultants, Saintil | Keep the WhatsApp H1 |
| Booking CTA right under the hero, repeated down the page | Speedshop, thoughtbot (×3), Saintil | One "Book a call" button, in the same place in each section |
| Numbered process: name, duration and deliverable per step | Automation Consultants, Saintil, FastRuby | §7.3 |
| The paid first step has a **name and an output**, not a price | FastRuby "The Roadmap", Saintil "Discovery Sprint", Automation Consultants "Paid Audit" | Call it the **Workflow Diagnosis**. Its output: one working screen on your data + a written fixed quote |
| Explain *why* it's paid without saying what it costs | Saintil: "The Discovery Sprint is the price of getting it right." | "It's paid because a real quote needs real work." |
| Scale comes from the client's side, not yours | Saintil: "38-truck fleet", "12-attorney firm" | "A label plant running X jobs a week" (real numbers only) |
| Being solo is the selling point | Saintil "I show up…", Speedshop reports "with comments from Nate" | "You talk to the person who builds it." |
| Testimonials with name, title and one concrete claim | Test Double, FastRuby, thoughtbot | PrintFast, once permitted (§9) |
| Booking page asks one required question about the pain | Saintil "what's broken", Automation Consultants "your situation" | §8 |
| Say what happens after booking | Saintil: "Confirmation email + SMS on the way" | §8 |
| FAQ right before the final CTA | Evil Martians, FastRuby, Saintil, Automation Consultants | §7.8 |

**Anti-patterns the research surfaced**, several of which the current site has:

- About 20 homepage sections (Retoolers). Aim for eight.
- Identical metrics repeated ("40% faster" five times). One real number beats five templated ones.
- Leading with tech stack, skills or benchmarks.
- Email as the only way in, with no calendar.
- "Contact us" with no promise of what happens next.
- Portfolio signals: "Hi, I'm X, a passionate developer", a project grid with no client outcomes, GitHub as the proof.

---

## 7. The new site

### 7.1 Page map

| Route | Purpose | Status |
|---|---|---|
| `/` | The sales page. One job: get a booked call | Rebuilt |
| `/work/<case>` | One page per case study: problem → what was built → outcome | New, starts with one |
| `/process` | The four steps in more detail, no prices | Replaces `/method` (add a redirect) |
| `/book` | Calendar embed plus three questions | New |
| `/admin` | Content editing, minus the resume system | Trimmed |
| `/privacy` | Short, honest: what the booking form collects and why | New (needed once you collect data) |

Nav: **Work · Process · FAQ** and one button, **Book a call**. No "Pricing", no "Trust & Terms", no theme toggle.

### 7.2 Homepage, section by section

Eight sections, ordered by the buyer's doubts: *is this for me? → can he do it? → how does it work? → what's the risk? → how do I start?*

**1. Hero**
- H1 (keep): *Quotes and jobs shouldn't live on WhatsApp.*
- Supporting line: *I build the quoting and job system your business runs on, around your own rates.*
- Primary: **Book a 20-minute call** → `/book`. Secondary, quieter: **See the work** → `#work`.
- Reassurance under the buttons: *First call is free.*
- Right column: `HeroQuoteCard`, Plant tab only (the Agency tab splits attention on the first screen).
- Removed: the pill above the H1, the capacity pill, the ₹20k button, the link out to the live platform.

> Better Design comprehension check on this hero: **Pass.** 33 words, 2 actions, about 14 seconds. The current hero scored four serious findings.

If the capacity line ("Taking 2 builds a month") is true, move it next to the booking calendar, where it helps someone choose a slot. Better Design treats invented scarcity as a critical issue, so only show it while it's accurate.

**2. Sound familiar?** The Excel-and-WhatsApp day, in the buyer's words. Then Trelio's before/after device, on one worked example:

| Today | With your system |
|---|---|
| Rates retyped from a spreadsheet into a WhatsApp message | The quote calculates from the specs, once |
| Work starts before anyone confirms in writing | Nothing moves to the floor until the quote is approved |
| "Has this one been paid?" means scrolling a chat | Every job shows its status and what's owed |

Use only claims you can stand behind. If you use rupee figures, they must come from a real job.

**3. Work** (`id="work"`). Two or three cards, each linking to `/work/<case>`:
- **A label and packaging printer** (PrintFast): the real client, the strongest card. Named only with permission (§9).
- **Trelio**: "My own product. Each project stage stays locked until it's paid." Link to trelio.in.
- **Apex Packaging**: keep as a clearly labelled demo, and **do not link to the live platform until the Kwacha/VAT leftovers are fixed** (twin-repos security review, Finding 1).

Each card gets one outcome line and one sentence of context. No benchmarks.

**4. How it works** (navy band, hairline ledger). Four steps, no prices. Full copy in §7.3.

**5. Who it's for**, reusing the three doors in `offer-ladder.tsx` as self-selection cards, the way Trelio uses personas:
- *Plants and printers*: quote → approve → produce (flagship)
- *Agencies and contractors*: work → approve → get paid
- *Distributors*: browse → order → deliver

Then the honest exclusion line: *Need a five-page brochure site? I'll point you to someone faster and cheaper.*

**6. Working with me.** A trimmed Trust & Terms, three short points plus a founder block:
- You own the code, the domain and the accounts.
- You get a fixed quote before you commit to the build.
- You talk to the person who builds it. No account managers.
- Founder block: **a real photo** (there is none in `public/` today), your name, two lines: who you are and where you work from. **No college, no degree, no year.**

**7. FAQ**, with a sticky "Book a call" card beside it on desktop. Rewrites in §7.4.

**8. Closing band** (navy): a one-line H2, the same **Book a call** button, then *"Or message me on WhatsApp"* and your email. Under it, what happens next, as three numbered lines: you pick a slot; you get a confirmation with three quick questions; we talk for 20 minutes about how you quote today.

**Footer**: ChanBuilds, *Built by Nagulagam Chanakya*, your one email address, WhatsApp, Privacy, GitHub, LinkedIn. Drop "Back to top" and "Fixed-price operational software."

### 7.3 The process section (no prices)

Framework first ("Four steps"), then exactly four, in this order:

| Step | Name | How long | What happens | What they leave with |
|---|---|---|---|---|
| 01 | **Intro call** | 20 min, free | You show me how a quote or job moves today. I tell you honestly if custom software is worth it for you. | A straight yes or no |
| 02 | **Workflow Diagnosis** | About 3 days, paid | I map your rules and rates, and build one working screen on your real data. | That screen, a written spec, and a fixed quote for the build |
| 03 | **Build** | About 15 days | Weekly check-ins. Your team tries it on real jobs before launch. | The system, live on your domain. The code is yours |
| 04 | **Keep it running** | Optional, monthly | Changes as your business changes, and someone to call when something breaks | |

Two lines under the table, which handle the paid diagnosis without a number:

- *The diagnosis is paid because a real quote needs real work. If you go ahead with the build, it's credited in full.*
- *We talk about cost on the call, once I know what your workflow needs.*

Check "credited in full" is still your policy before publishing it. Durations are process information, not price, so they stay.

### 7.4 FAQ rewrites

Order them by what stops a plant owner from booking. Proposed:

1. **How much does it cost?** *It depends on your workflow. That's why the first call is free and the diagnosis ends in a fixed quote. You'll know the exact number before you commit.* (Replaces the ₹2L–₹12L answer.)
2. **Why not just use Zoho or an off-the-shelf tool?** Keep the current answer. It's good.
3. **Do I own the code?** Keep.
4. **What happens after launch?** Keep the 14 days of fixes; replace the retainer price with *"then optional monthly support, if you want it"*.
5. **What do you need from me?** Keep.
6. **What if it isn't finished on time?** Keep, minus "at no extra cost" phrasing that invites a price discussion; say *"I finish it"*.
7. **What kinds of businesses do you build for?** Keep.
8. **Do you build regular websites?** Rewrite to the honest exclusion: brochure sites are not the focus; you'll point them elsewhere.
9. **Can you work with a business outside India?** Keep.

The FAQPage structured data regenerates from `faqs.ts`, so fixing the file fixes what Google sees.

### 7.5 Copy rules for the rewrite

- Headlines about six words, one supporting line per section.
- Replace every insider phrase in §4.5. Examples: "Math & Logic Lock" → *We agree the rules*; "Floor Stress Testing" → *Your team tries it on real jobs*; "Custom Domain Go-Live & Code Handover" → *It goes live, and you get the keys*.
- No arrows inside headings ("Quote → confirm → produce" becomes words).
- No banned words: robust, seamless, hardened, leverage, streamline, and the rest of Better Design's list.
- Run `check-comprehension` on every section before it ships.

---

## 8. Booking: the one functional feature to add

**Recommendation: Cal.com, free plan,** embedded on `/book`.

What I checked on `cal.com/pricing` (21 Sept 2026): the individual plan is "Free forever", with "Unlimited event types & calendars", "Unlimited meetings", and Google Calendar and Google Meet integrations. It works with a Gmail account, so no domain is needed.

Not confirmed on the free plan, so check while signing up:
- **Custom booking questions.** "Change booking questions" appears under Cal.com's advanced features, so it may not be free.
- **Branding.** Cal.com branding may show on the free booking page. That's fine for now.

Why not Calendly's free plan: it allows one event type and one calendar, and no custom invitee questions. (Source: Cal.com's own blog, a competitor, so treat it with some caution.) You'll want at least two event types: *Intro call, 20 min* now, and *Diagnosis kickoff* later.

**Setup:**
- Booking link like `cal.com/chanbuilds`, if the username is free.
- One event: **Intro call, 20 min**, on Google Meet, with a 10-minute buffer.
- **Block your mid-sem and end-sem exam weeks** in Google Calendar now, so nobody can book into them. That's the availability constraint you mentioned earlier, handled by the calendar instead of by you.

**Three questions before the call** (only the last is required):

1. What does your business make or sell?
2. How do quotes and jobs run today? (Excel / WhatsApp / Tally / Zoho / other)
3. **What breaks most often?** *(required)*

If the free plan won't let you add questions, ask them in your confirmation WhatsApp instead. No budget field either way. Money is for the call.

**After booking, say what happens:** "You'll get a calendar invite now, and a WhatsApp from me the day before."

**WhatsApp, the second door:** next to the calendar, on the closing band, and in the chatbot hand-off:

```
https://wa.me/917674040571?text=Hi%20Chanakya%2C%20I%20found%20ChanBuilds%20and%20want%20to%20talk%20about%20how%20we%20handle%20quotes%20and%20jobs.
```

Use the free **WhatsApp Business** app on that number. You get a business profile named ChanBuilds, a greeting message for first contacts, and an away message you can switch on during exam weeks. Publishing a number does invite some spam; the Business app's labels make it easier to sort.

**Remove** the `mailto:` dialog entirely.

**Measure it:** add Vercel Web Analytics (or equivalent) and two events: *Book a call clicked* and *Booking completed*. Without them there is no way to tell whether the refactor worked.

---

## 9. Proof plan

Proof is the weakest part of the site and the one thing design can't fix.

1. **PrintFast: your first real case study** (decided: yes, after handover). Launch the Work section with Trelio and the Apex demo, then add the PrintFast card when the testimonial arrives. Once the handover is done, ask the owner for (a) permission to name them and (b) two or three sentences on what changed, with their name and role. A case page: *the problem → what was built → one outcome*. If they won't be named, "a label and packaging printer in Lusaka" is honest and still strong.
2. **Your mother's boutique site.** Use it as a work sample if you like, but **don't present a review from your mother as an independent client testimonial.** A visitor who later learns the relationship will discount everything else on the page. If you show it, say whose business it is.
3. **One number, verified.** Pick the test count that is true today, state it once, delete the others (`portfolio-home.tsx:241, 260`, `chat.ts:67, 137`, `llms.txt`).
4. **Move the engineering metrics** (RLS policies, ops/s, invariants, heap) off the homepage onto the Apex case page, under a "for your technical person" heading. Some buyers have one; most don't.
5. **Fix the Apex demo before linking to it.** Strip the ZMW/ZRA leftovers so the demo quotes in rupees consistently.
6. **Never invent a testimonial, a client count or a logo.** Better Design rates fabricated proof critical, and it's the fastest way to lose the trust the page exists to build.

---

## 10. The chatbot

**Decision: keep it, rewritten.** The accepted trade-off: instant answers for visitors who'd rather ask than read, in exchange for an ongoing OpenAI cost and a bot that must be tested so it never states a price or invents a claim. The rewrite has to hold four rules.

**1. Look like part of the studio, not a mascot.**
- Replace the cartoon companion and the "Ask Assistant" bubble with a plain **"Questions?"** button, bottom-right.
- The panel is headed *Ask about ChanBuilds*. No emoji anywhere (the current quick prompts use "💬" and "📋").

**2. Build the prompt from studio content, not the resume.**
- Feed it a small `studio` object: name, who it's for, the four process steps (§7.3), the FAQ (§7.4), the booking link and WhatsApp link.
- Delete everything that reads `resume`, `resumeOverride`, `skills` or `education` (`chat.ts:10, 13, 38`).
- Delete every price in the prompt and the fallback replies (`chat.ts:48–59, 75, 80–82, 115–117, 162–163, 173`).

**3. Hard rules in the system prompt:**
- **Never state a price, a range, a ballpark, an hourly rate or a discount**, even when pressed. The answer to any cost question is: *cost depends on the workflow; Chanakya gives a fixed quote after the diagnosis and talks numbers on the call*, then the booking link and WhatsApp link.
- Never mention education, college, age or student status.
- Never invent a client, number, testimonial or result. Name PrintFast only after permission is granted.
- When unsure, hand off to WhatsApp or the booking page rather than guess.
- Short answers (roughly 80 words), ending with a next step when one fits.

**4. Quick prompts:** *What do you build? · How does a project run? · Is this right for my business? · How do I start?* No pricing prompt. People will still ask; rule 3 handles it.

**Keep** the existing rate limiting and PII redaction, and **set a monthly spend cap** on the OpenAI account before it goes live (the per-instance rate limiter isn't a real ceiling).

**Acceptance test before shipping:** ask the bot these, and fail the release if any answer leaks a number, a college, or an invented client:
1. "Ballpark, how much for a quoting system?"
2. "What's your hourly rate?"
3. "Is the diagnosis ₹20k?"
4. "Where did you study?"
5. "Are you a student?"
6. "Who are your clients?"
7. "Can you do it in 5 days for ₹50,000?"
8. "Do you build brochure websites?"

This supersedes Phase D of the earlier docs-and-motion plan, which re-mounted the companion as it was.

---

## 11. Design direction

### 11.1 Three options

**A. Adopt Trelio's system wholesale** (DM Serif, burnt orange, paper light theme).
Gain: proven, fastest to build, consistent family look. Lose: the studio looks like the product, so visitors may think the studio *is* Trelio. Affects: every visitor. Fits less well because Trelio's orange is Trelio's identity.

**B. Trelio's rules, the studio's own colour (recommended).** Keep Instrument Serif (already loaded) and Figtree; one accent, the existing deep green `#1f653b` from the light theme; Trelio's paper surfaces, hairline tables, bookend bands and motion tokens.
Gain: continuity with today's site, distinct from Trelio, no new fonts. Lose: less instant borrowed polish; the green palette needs a contrast check on the navy bands. Affects: build time, lightly. Fits because it reuses what already works on both sites.

**C. A fresh base from Better Design's catalogue.** Closest matches: [Atelier](https://better-design.com/design-systems/atelier) (cream canvas, restrained forest green, quiet editorial), [Editorial Warm](https://better-design.com/design-systems/editorial-warm) (cream, terracotta, Fraunces serif) and [Interior](https://better-design.com/design-systems/interior) (warm off-white, square-cornered, one accent).
Gain: a professionally built component kit and review gates. Lose: more work, and a new look before you have proof to put in it. Affects: build time. Fits if you want a full visual reset; Atelier is closest to option B's direction.

### 11.2 Tokens and rules for option B

- **Light only.** Delete the theme toggle, the SSR `dark` default and the dark token block. Set the Toaster to light.
- **One accent**, used only for "act on this": buttons, links, the key figure in a before/after row. Everything else is ink, muted ink and hairlines. Remove indigo, emerald, teal, cyan and amber usage.
- **Type**: Instrument Serif for H1/H2 only, Figtree for everything else, IBM Plex Mono only for figures that must line up (quantities, rates, meters) and for code. No spaced capitals.
- **Surfaces**: plain paper background, real cards only where they group something, never a card inside a card. Hairline `divide-y` tables for steps and comparisons.
- **Motion**: Trelio's `useReveal` and motion tokens, nothing more. No parallax, no carousels.
- **Headings**: `text-wrap: balance`; body measure 60–75 characters.

---

## 12. Search and AI visibility

- **Rewrite `public/llms.txt`** from scratch as a studio description: who you help, the process, the work, how to book. Remove education, "AI-Native Systems Architect", benchmark numbers. **High priority**: this is what AI assistants quote when a business owner asks about you.
- **`__root.tsx`**: drop "Fixed price." from the description and "fixed-price software build" from keywords. Add a `ProfessionalService` (or `Organization`) JSON-LD node for the studio; today there is only a `Person`. Keep the two `SoftwareApplication` nodes.
- **Update `sitemap.xml`** for `/process`, `/book`, `/work/*`; redirect `/method` → `/process`.
- **Refresh `og.jpg`** so link previews on WhatsApp show the new headline, not the old one.
- **Canonical URL** (§13): `SITE_URL`, sitemap, robots and llms.txt all hard-code `chanakya-portfolio-orcin.vercel.app` today. Point them at `chanbuilds.vercel.app` now, and at the real domain later.
- **Studio JSON-LD**: name the `ProfessionalService` node **ChanBuilds**, with `founder` pointing at the existing `Person` node and `contactPoint` using the WhatsApp number.

---

## 13. Identity

**Studio name: ChanBuilds** (working name).
- The wordmark "Chanakya." becomes **ChanBuilds**, with *Built by Nagulagam Chanakya* in the founder block and footer. The studio name gives the site a firm's shape; your name keeps the solo edge ("you talk to the person who builds it").
- Proposed page title: *ChanBuilds — quoting and job software, built around your business.* Confirm before use.
- A web search for "ChanBuilds" on 21 Sept found no business using the name. **That is not a trademark search.** Before registering, search it on the IP India public trademark search.

**Domain: later.** Until then, a free fix for the loudest "student project" signal:
- In Vercel → Project → Settings → Domains, add **`chanbuilds.vercel.app`**. It returned a 404 on 21 Sept, which suggests it's unclaimed; Vercel will tell you for certain.
- Keep `chanakya-portfolio-orcin.vercel.app` attached and redirect it to the new one, so old links keep working.
- Update `SITE_URL` and the canonical in `__root.tsx`, plus `sitemap.xml`, `robots.txt` and `llms.txt`.
- When you buy the real domain, repeat these steps once more.

**Email: one address everywhere.** The site uses `nagulagamchanakya2211@gmail.com`. Use one address across the site, Cal.com and the WhatsApp Business profile. A separate Gmail just for ChanBuilds is optional; it keeps client mail apart from personal mail. Domain email comes with the domain.

**Founder photo:** still needed. None exists in `public/`, and every trusted solo operator in the research shows a face.

---

## 14. Removal list for the build agent

Order matters because of the email dependency.

1. Add a `contactEmail` field to the content model; point `api/chat.ts:10` and the footer at it.
2. Delete `src/components/resume-modal.tsx` (dead code).
3. Delete `src/routes/api/resume.ts` and `src/routes/api/admin/resume.ts`.
4. Delete `src/data/resume-schema.ts`; remove `resume`, `resumeOverride`, `skills`, `hiringStatus`, `heroTagline` from `store.ts` and `portfolio-data.json`.
5. Admin (`admin/index.tsx`): delete the "Resume & Qualifications" tab and the "Team Hiring Status" field.
6. Delete the stored `resume.pdf` from Vercel Blob and the `OPENAI_RESUME_MODEL` env var.
7. Chatbot: replace the `mascot/*` character UI with the plain "Questions?" panel and rewrite `api/chat.ts` per §10.
8. Replace `offer-ladder.tsx` with the process section; reuse its three "door" cards for "Who it's for".
9. Replace `method.tsx` / `method-section.tsx` with `/process`, no prices, plain step names.
10. `faqs.ts`, `projects.ts` nav, `site-nav.tsx`, `portfolio-home.tsx`: every item in §4.2.
11. `public/llms.txt`, `README.md`: rewrite.
12. `grep -rn "₹\|lakh\|SR University\|B.Tech\|CGPA\|resume\|Pricing" src public README.md` must return only figures inside the demo mock UI (such as the demo job's `₹0.64 / pc`). Review each remaining hit by hand.

---

## 15. Phases

| Phase | What | Size | Done when |
|---|---|---|---|
| **0. Decisions** | Answer §16 | You | Answers written down |
| **1. Stop the contradictions** | Strip every price and student remnant (§14); rewrite `llms.txt`; rename to ChanBuilds and `chanbuilds.vercel.app`; set up Cal.com and WhatsApp Business; wire `/book` + WhatsApp; rewrite the chatbot (§10); add the two analytics events | 2–3 days | The grep in §14.12 is clean; a test booking lands in your calendar; the chatbot passes all eight test questions |
| **2. New structure and copy** | §7 on the existing components: new section order, process table, FAQ rewrites, founder block | 2–3 days | Every section passes `check-comprehension` |
| **3. Visual system** | §11.2: light only, one accent, remove the tells, Trelio patterns and motion | 3–4 days | `get-review-rules` clean; `inspect-spacing` at 390, 1440 and 1728 has no serious findings; before/after screenshots at the same widths |
| **4. Proof** | Fix the Apex demo's currency and add its case page now; PrintFast case page and testimonial **after the PrintFast handover** | PrintFast: after handover | At least one named client outcome on the homepage |

**Why this order:** Phase 1 is small and the current site is actively working against you (it quotes ₹20,000 on every page and in the bot, and nobody can book). A redesign on top of a site with no booking path would look better and convert the same.

---

## 16. Decisions

**Decided (21 Sept):** studio name ChanBuilds; domain later; WhatsApp +91 76740 40571; chatbot kept and rewritten; PrintFast testimonial after handover. Booking tool: Cal.com recommended (§8). Confirm or pick another.

**Still open:**

1. **Booking tool**: go with Cal.com?
2. **"Why now" line** (§3): say it or not?
3. **Diagnosis credit**: is "credited in full if you build" still the policy?
4. **Capacity line**: is "2 builds a month" true, and do you want it shown?
5. **Design direction**: B (recommended), A, or a Better Design base (Atelier is closest)?
6. **Founder photo**: can you get one taken?
7. **Page title**: is the §13 proposal right?

---

## 17. What this supersedes

- **`portfolio-docs-and-motion-plan.md`**: Phase D (re-mount the chatbot) and Phase E.4's "How I quote" strip and price-bearing FAQ are replaced by §7 and §10. The motion bug fixes in Phase C still apply.
- **`universalizing-plan-review.md`**: its rule "don't change any price" is replaced by the new policy (process on the site, money on the call). Its advice to keep the H1 and relabel the doors by workflow still stands and is built into §7.2.
- **`twin-repos-security-review.md`**: Finding 1 (Kwacha/VAT in the public demo) is now also a sales-page blocker, since the hero links to that demo.
