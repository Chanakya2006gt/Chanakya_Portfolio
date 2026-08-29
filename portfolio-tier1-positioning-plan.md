# Implementation Plan — Restructuring the Portfolio on Tier-1 Solo-Operator Patterns

**Method:** 25+ live sites fetched and analysed (not listicles). Benchmark set chosen to match *your* shape — solo/1–3 person operators selling $5k–$50k fixed-scope technical engagements — not large agencies.

**Primary references:** [Speedshop](https://www.speedshop.co/) (Nate Berkopec, Rails performance) · [CSS Wizardry](https://csswizardry.com/) (Harry Roberts) · [Go Make Things](https://gomakethings.com/consulting/) (Chris Ferdinandi) · [Amatrix Studio](https://amatrix.studio/) · [Kai Davis](https://www.kaidavis.com/) · [Proof of Work Studio](https://proofofwork.studio/) · [Jonathan Stark](https://jonathanstark.com/) · [Lickability](https://lickability.com/) · [Philip Morgan](https://philipmorganconsulting.com/)

**Contrast group** (real, live, and deliberately price-free — what *not* to copy): Set Studio, Bendyworks, Simple Focus, Brad Frost, 84EM.

---

## PART A — What the top of this market actually does

Eight patterns held across every strong site. Each is quoted from a live page.

### 1. The offer has a proper noun, a duration, and a deliverable list
Not "web development." Amatrix: **"Proof of One Screen — 1 week — $1,495."** Chris Ferdinandi: **"Fractional JavaScript Developer… $7,500/month."** Proof of Work: **"Brand Sprint — a complete brand in two weeks."** Harry Roberts productised monitoring into a *named thing*: **"Sentinel: Your Web-Performance Watchman — $5,999/mo."**

A named offer makes the thing un-price-shoppable, makes scope finite, and makes the deliverable inspectable before purchase. The contrast group all list **capabilities** ("Design systems," "Branding," "Front-end architecture") — and capabilities require a sales call to convert. Named offers convert themselves.

### 2. There is a paid entry rung that credits toward the big engagement
**This is the highest-leverage structure in the entire sample, and you don't have it.**

- Amatrix: **"Proof of One Screen — $1,495 USD (fixed, credited to next sprint)."**
- CSS Wizardry: **"If we go on to work together more fully after our initial consultation, it gets discounted from your first consultancy invoice."**
- Kai Davis: **Marketing Roadmap $1,500**, **SEO Opportunity Report $5,000** — with *"execution quoted separately."*

It replaces the free discovery call — which attracts tyre-kickers and gives away your thinking — with a small paid transaction that qualifies on willingness-to-pay, produces the information needed to scope accurately, and makes the big engagement a *continuation* rather than a second decision.

### 3. Thinking is priced publicly; building is quoted privately
Fixed-price *analysis* has genuinely bounded scope, so you can publish a number with no risk. Fixed-price *building* doesn't, so it gets scoped after you've been paid to look. Kai Davis is the clearest example of the split.

### 4. The price question is answered on the site — exact, band, or FAQ
Three graduated levels, all present in the sample:
- **Exact:** Amatrix ($1,495–$99,995), Ferdinandi ($7,500/mo), Speedshop ($3,000/mo), Proof of Work ($15,000), Upspire ($25,000).
- **Band:** CSS Wizardry — **"From $1,000 to $100,000, there's always something we'll be able to do to help solve your problem."** Framed as *range of solutions*, not range of invoices — which is why a 100× spread doesn't read as evasive.
- **FAQ:** Lickability — **"A fully-featured, polished app typically costs $100K+, while smaller projects with tighter scope are usually in the $50K–$100K range."**

The failure mode is 84EM: a page titled *"How Pricing Works"* with no prices on it. **Worse than no pricing page.**

### 5. Availability is capacity, with a number and a month
Speedshop publishes a live table: **"September: ⚠️ Limited — 1-2 spots remaining."** Ferdinandi: **"Limited availability. Reserve your spot now."** Stark: **"I usually only take on a handful of new private coaching students per year."**

This is *structurally true* for a solo operator, which is what makes it land. The agencies in the contrast group state availability nowhere, because for them it isn't true.

### 6. The CTA names a specific artifact, never "contact us"
**"Start a sprint →"** (Amatrix). **"Schedule Your Sprint Briefing"** (Upspire). **"Arrange a Masterclass"** (CSS Wizardry). And there is *always* a second, lower-commitment CTA for people not ready: **"or join the daily letter →"** (Kai Davis).

### 7. Solo-ness is named and reframed as the guarantee of seniority
Chris Ferdinandi's line is the template:
> **"Unlike big agencies, I won't hand you off to junior or outsourced developers. You work directly with me."**

The buyer's fear is "one person = not enough capacity." The counter is "one person = no bait-and-switch, no juniors, no account manager." That reframe only works **if you say it out loud.**

Also universal: the word is **"independent," never "freelance."** Harry Roberts: *"I'm an independent web performance consultant."* Sara Soueidan: *"I'm an independent inclusive Web UI engineer."*

### 8. Nobody puts a CV on the About page
Not one credible solo site uses résumé format. Harry Roberts opens conversationally and closes on a principle (*"The two things I care most about are practicality and outcomes"*). Philip Morgan opens on a **research question** with zero credentials on the page. Roberts *does* keep a literal CV — parked at `/csscv/` as a side exhibit, never the About page.

**What they conspicuously never do:** no hourly/day rate; no portfolio grid as hero; no "we do everything" service list; no employee-count theatre; no "request a proposal" (the offer *is* the proposal); no unbounded free discovery call as the only entry point.

### 9. What replaces logos when you have none — in observed priority order
1. **Open source you maintain** — Speedshop's Nate maintains **Puma**; his partner is a **Ruby Core Team member**. Verifiable by a stranger in 30 seconds.
2. **A body of writing large enough to be a credential** — Roberts states the count: **"over 240 articles," "over 150 conference talks."**
3. **Books.**
4. **An owned audience** — Speedshop's **Rails Performance Slack, 6,000+ developers.**
5. **Named peer testimonials with numbers and time-stamps** — Philip Morgan's page has **zero logos**; instead: *"Three months in, it's turned out that working on my positioning with Philip has led to a complete shift…"* Note the time-stamp device — it reads as a progress report, not a compliment.
6. **Aggregate portfolio numbers** — Proof of Work: **"$3.2B+ combined value built," "60+ brands since founding in 2024."** When you can't name who, name how much.
7. **A published process document** — Simple Focus `/method/` with named exercises and real durations; Proof of Work's day-by-day sprint calendar.
8. **The deliverable, specified in advance** — Amatrix: **"ZIP file with all source files, a screen walkthrough video (Loom or equivalent), and a README."**

---

## PART B — Your gap against these patterns

| # | Pattern | Your site today | Gap |
|---|---|---|---|
| 1 | Named offer + duration + deliverables | None. "Freelance Work" tab is an empty state | **Total** |
| 2 | Paid entry rung, credited | None. Not even in your own report | **Total — biggest opportunity** |
| 3 | Thinking priced / building quoted | None | Total |
| 4 | Price answered somewhere | Zero `₹` on the site | Total |
| 5 | Availability as capacity | 4 conflicting statements, all employment-flavoured | Wrong direction |
| 6 | CTA names an artifact | "View projects" / **"View Resume"** / "Contact" | Wrong direction |
| 7 | Solo-ness reframed | Not addressed; "student" ×3 instead | **Total** |
| 8 | About as thesis | Résumé button in hero; "Builder first. Student second." | Wrong direction |
| 9 | Proof without logos | Artifacts exist but are framed as flex | Mis-framed, not missing |

**The good news:** #9 is a framing problem, not a substance problem. You already own more verifiable proof than most people at this tier — you're just presenting it as GitHub stats instead of as risk reduction.

---

## PART C — Your offer ladder

Your report defines two rungs. The research says you're missing the one that actually converts strangers. Proposed ladder:

### Rung 0 — the paid entry rung (NEW — build this first)
> **Scope & Proof — 3 days — ₹40,000, credited in full against the sprint**

**Deliverables (specify exactly, Amatrix-style):**
- A written scope document: the workflow, its states, and what is explicitly out of scope
- A data model + architecture sketch for the system
- **One working screen** of the real thing, deployed to a URL you can click
- A 10-minute Loom walking through all of the above
- A fixed quote for the full sprint

**Why this rung is the unlock:** it converts "can I trust this 19-year-old with ₹5L" into "will I risk ₹40k to find out" — and because it's credited, the buyer loses nothing by continuing. It also solves *your* problem: you get paid to do the scoping you're currently doing free, and you never quote a build blind again.

### Rung 1 — the main engagement (from your report)
> **15-Day Systems Sprint — ₹3.5–6L**
> One workflow — RFQ, booking, or approvals-and-payments — built, tested, hardened, documented.

**Deliverables, stated up front:** working system on staging + production; written scope honoured; Playwright suite with pass count; security pass (RLS/auth/payment integrity); repo handover + README; 30-minute walkthrough recording; 14 days of post-launch bug fixes.

**Client-side constraints published as scope** (Upspire's move — a confidence signal only a senior person makes):
> *"One workflow per sprint. Maximum two decision-makers. Content and API credentials supplied by day 2. UAT, live payment-gateway certification, and visual revisions are quoted separately."*

### Rung 2 — after the sprint
> **Harden & Go-Live — ₹1–2L** · **Care — ₹20–35k/month** (allowance + ABE on extras; work pauses on failed payment)

### How to publish the prices
Given no logos yet, use **exact for Rung 0**, **band for Rung 1** — CSS Wizardry's framing:
> *"Engagements run from ₹40,000 for a scoping sprint to ₹6L+ for a full workflow build. There's almost always a rung that fits."*

Exact on the cheap rung removes friction where the risk is low; a band on the build keeps room to scope. Do **not** ship a pricing page with no numbers on it.

---

## PART D — Page-by-page implementation

### D1. Hero — own a noun, name the outcome
Kill the name-splash and the `View Resume` CTA.

**Structure:** `H1 = what you build` · `sub = the outcome` · `CTA = "Start a Scope & Proof →"` + secondary `"See a live system →"`

**Headline options** (pick one — all follow Speedshop's *"X is a Y consultancy that does Z"*):
- *"I build the operational software that runs quotes, approvals, and payments."*
- *"Operational systems for businesses still running quotes and approvals on WhatsApp and Excel."*
- *"Quote-to-cash systems for Indian manufacturers and agencies."*

**Sub:** *"Independent engineer. One workflow, built and hardened in 15 days — with a written scope, automated tests, and a repo you own."*

**Hero visual: replace `chanakya.config.ts` with a real product screen** — the Apex RFQ flow or Trelio's ABE lock. Your report says this; the research confirms it. Amatrix, Proof of Work, MobiLoud all lead with the artefact.

**Delete `npx chanakya@latest`.** It isn't a published package. It has a copy button. A technical buyer will run it, and it will fail — an avoidable own-goal on a site whose entire pitch is rigour.

**Delete `workflow: ["Agentic AI", "Antigravity", "Claude Code"]`.** It argues against your own price by telling the buyer AI does the work. Your speed is margin, not a feature to advertise.

### D2. The offer block — the single biggest addition
A new section directly under the hero, above everything else. Three rungs, each with **name, duration, deliverables, price**, and its own CTA verb (*"Book"* / *"Start"* / *"Ask about"* — Stark uses three different verbs on one page, matched to commitment level).

Add a **fit paragraph** (CSS Wizardry's device — routes rather than rejects):
> **A Scope & Proof is a good idea if:** you have one workflow that's currently held together by spreadsheets, WhatsApp, or manual follow-up; you want a fixed quote before committing to a build; you'd rather see one working screen than a slide deck.

### D3. Proof — reorder from flex to risk-reduction
Same assets, different frame. Order them the way the sample does:

1. **Two live systems, cold-clickable** — Trelio (*"Free: one client, one project, authorisation through final payment"* — your exact sentence) and Apex Packaging. This is your MobiLoud "free preview": a stranger can verify you before contacting you.
2. **The process page** (see D5) — your strongest asset in the absence of logos.
3. **Engineering evidence, reframed as risk reduction, not scores.** Today: *"448/448 pass (29 suites)"*, *"273k ops/s"*. Instead: *"Every sprint ships with a Playwright suite you can run yourself — the last one shipped 448 passing tests across 29 suites."* Same number, now an answer to *"what happens when you disappear?"*
4. **Aggregate numbers instead of logos** — "2 live systems," "4 workflows shipped," "X states modelled in the ABE engine."
5. **Build logs** — your report already prescribes these; the research shows writing volume *is* a credential (Roberts states his counts explicitly).
6. **Testimonials last, when real.** Until then, no anonymised "Fortune 500 client" placeholders — Bendyworks does this and it's the weakest proof in the sample.

**Promote Apex out of `sideProjects`.** It's filed as a side project with badge "B2B Platform." It is your only cold-clickable proof of the exact object you sell. Filing it as a side project tells buyers it was a hobby.

### D4. About — thesis, not CV
Kill **"Builder first. Student second."** and the "Degree & Focus — B.Tech CSE '28" card. Naming *student* three times in one viewport installs the frame you're fighting.

Open on the thesis (Philip Morgan's move):
> *"Most small manufacturers and agencies lose money in the same place: the gap between a quote and a confirmed payment. I build the software that closes it."*

Then the seniority reframe (Ferdinandi's line, adapted — **this sentence is the highest-value copy on the whole site**):
> *"You work directly with me. No account manager, no junior developer, no handoff. The person who scopes it is the person who writes it and the person you call when it breaks."*

Then **"independent,"** never "freelance." Education stays — one line, low in the page, stated plainly. Your report is right that honesty matters; it just shouldn't be your headline credential.

**Purge "freelance" sitewide** (8+ instances). Your own pricing table puts *freelancer* at ₹20–80k and your shape at ₹4–15L. The word self-selects you into the tier below the one you're selling.

### D5. New page: `/method` — publish the 5-phase factory
Simple Focus's `/method/` and Proof of Work's day-by-day sprint calendar are the strongest trust assets small teams have. **You have a genuine 5-phase workflow — it is your single most under-used asset.**

Publish it with real durations, day by day: research → scope/docs → implementation → tests/hardening → handover. Name what lands at the end of each phase. This proves *repeatability*, which is what a nervous buyer actually means when they say they want "a real company." **One person with a published method is more predictable than five people without one — and this page is what lets you charge lakhs as an individual.**

### D6. Availability — capacity, not employment
Replace all four statements with one, Speedshop-style:
> **"Taking 2 sprints per month. Next opening: [month]."**

Delete `"Open for collaborations & full-time roles"` from **both** `portfolio-data.json` **and** the `hero-stats.tsx` default — changing only the data leaves the fallback live.

### D7. Companion + footer
Change the chat quick-action from **"💼 Open for hiring?"** to **"What does a 15-day sprint include?"**. The site is currently prompting every visitor to ask whether you want a job.

Footer: studio identity + GST-capable signal, not *"Designed & Engineered with care."*

---

## PART E — Sequence

**Step 1 — Strings only (highest leverage-per-risk).** Six changes: availability chip (×2 locations), hero CTA label, companion quick-action, About H2, two "freelance" headings. Moves you out of the job-seeker frame **without touching layout or component structure.**

**Step 2 — The offer block + `/method` page.** The two genuine additions. Nothing else matters until a stranger can see what you sell and how you work.

**Step 3 — Hero rebuild.** Product UI replaces the config card; `npx` and the agent-workflow line deleted.

**Step 4 — Proof reorder.** Apex promoted out of side projects; test/perf numbers reframed as risk reduction.

**Step 5 — Sell one Scope & Proof at ₹40k.** The site is now capable of converting; the constraint moves to distribution. Per your own report, one outsider pilot with a written testimonial clause beats another month of portfolio chrome.

---

## The one-line version

The top of this market sells **a named thing, for a named price, in a named number of days, with the deliverable listed before you buy** — and replaces client logos with *published process, live artefacts, and verifiable engineering*. You have the artefacts and the process. You have never named the thing or the price. That, not design, is the gap.

---

**No code changed.** Say which step to start with and I'll write it as a precise Gemini-ready spec in the format we've been using.
