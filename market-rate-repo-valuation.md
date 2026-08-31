# Market-Rate & Portfolio Valuation — Honest Assessment

**Method:** measured every connected repo directly (LOC, commits, dates, tests, backend depth, RLS, e2e), then benchmarked against India 2026 custom-software pricing and paid-discovery norms. No code changed.

---

## PART 1 — What you actually have

Measured, not estimated:

| Repo | Src LOC | Commits | Built | Tests | Backend | Verdict |
|---|---|---|---|---|---|---|
| **Trelio** | 68,967 | 623 | Mar 25 → Aug 31 (5 mo) | 58 files | Full | **Real product** |
| **Industrial-packaging** | 10,174 | 12 | Aug 25 → 29 (4 days) | 12 | Supabase + 43 RLS + e2e | Real system |
| **Printfast Zambia** | 11,000 | 33 | Aug 24 → 29 (5 days) | 12 | Supabase + 61 RLS + e2e | Real system |
| Kapstone corporate HQ | 3,662 | 24 | Aug 26–27 (2 days) | 0 | None | Frontend |
| Kapstone home services | 4,147 | 13 | Aug 26–27 (2 days) | 0 | None | Frontend |
| kapston-proposal | 5,909 | 3 | Aug 26–27 (2 days) | 0 | None | Frontend |

### 🔴 Finding 1: the two packaging repos are largely one codebase
Comparing `frontend/src` file trees: **43 shared filenames, 2 unique to packaging, 17 unique to Printfast.** Identical `auth.tsx`, identical role model (`superadmin | sales`), same structure.

That is **one build with a variant**, not two independent portfolio pieces. Your own report already treats them as one line — correct. Never present them as two systems; anyone technical who opens both will see it in thirty seconds, and that costs more credibility than the second logo gains.

### 🔴 Finding 2: the Kapstone repos are not assets
3.6k–5.9k LOC, **zero tests, zero backend, two days each, never shipped.** Your report already says "proposal only — not a case study." That is right and you should keep holding that line. As proof of the thing you now sell (operational systems with roles, state and money), they contribute **nothing**. They are not evidence you can build a plant portal; they're evidence you can build a good-looking front end fast.

### ✅ Finding 3: Trelio is genuinely substantial
69k LOC, 623 commits, five months of sustained work, 58 test files, multi-tenant, RLS, payments, audit ledger. **This is the only asset in the set that a technical buyer cannot dismiss.** It is also the only one with real longitudinal evidence — 623 commits over five months proves persistence, which is precisely the thing buyers doubt about a solo operator.

### ✅ Finding 4: the packaging platform is real, and better than it looks on LOC
10–11k LOC undersells it. It has a Supabase backend, **43–61 RLS policies**, role-based access (superadmin/sales), Playwright e2e specs, and PRD/ARCHITECTURE/SECURITY docs. RLS policy count is a good proxy for genuine multi-tenant thinking, and 40–60 is not decorative.

---

## PART 2 — Market rate, benchmarked

India 2026 custom web application pricing ([Selyst](https://www.selyst.com/en-in/articles/services/custom-web-application-development-cost-india-2026/)):

| Tier | Market price | Typical timeline | What it includes |
|---|---|---|---|
| Simple internal tool | ₹2.5–5L | 2–3 months | Directory, tracker, no payments |
| **Medium / customer-facing MVP** | **₹5–9L** | 3–5 months | Registration, CRUD, reporting |
| **Complex** | **₹10–20L** | 5–8 months | **Payment gateway, role-based access, integrations** |
| Enterprise / multi-tenant SaaS | ₹18–50L+ | 8–14 months | Subscription billing, white-label |

Also: three roles cost ~40% more than admin-only; payment integration alone ₹60k–1.5L.

### Where your work actually lands

- **The packaging platform** — RBAC (2 roles), Supabase, RLS, quoting logic, e2e — sits at the **top of Medium / bottom of Complex: ₹6–10L** at market.
- **Trelio** — multi-tenant, payments, subscription billing, audit ledger, white-label — is an **Enterprise-tier object: ₹18L+** if a client had commissioned it.

### 🔴 The uncomfortable conclusion: you are UNDER-priced, not over-priced

Your sprint is **₹3.5–6L** for an object the market prices at **₹6–10L**. You are asking roughly **50–60% of market rate** for the class of system you actually build.

You are not overcharging. You have been talking yourself *down*.

**The one number that isn't in your favour:** market timelines for that tier are **3–5 months**. You do it in 15 days. That gap is your margin — and it is exactly why you must never sell time. If you quote "15 days" and they anchor on ₹10–15k/day, you have destroyed ₹5L of value with one sentence. Sell **the system**; the 15 days is your internal cost structure, not the customer's pricing basis.

---

## PART 3 — Your three questions

### Q1: "₹40k diagnosis is too high — maybe ₹20k"

**The benchmark:** paid discovery should be **"less than 10% of the future engagement's budget, but not *too* cheap"** ([Sakas & Company](https://sakasandcompany.com/paid-discovery/)).

Run the arithmetic against your own ladder:

| Build price | 10% ceiling | Your ₹40k is… | Your ₹20k would be… |
|---|---|---|---|
| ₹3.5L | ₹35,000 | 11% — **slightly above, correctly placed** | 5.7% — **too cheap** |
| ₹6L | ₹60,000 | 6.7% — **comfortably inside** | 3.3% — **far too cheap** |

**₹40,000 is the right number. ₹20,000 is not "considerate" — it's a signal.**

Here is the mechanism, and it's the part that matters. The diagnosis is not priced to cover your time; it is priced to **qualify the buyer**. Its job is to separate someone with a ₹5L budget from someone shopping ₹15k websites. At ₹40k, only a serious buyer says yes — and everyone who says yes is someone you'd want to build for. At ₹20k, you invite exactly the buyer your own report told you to refuse, and you'll spend three days producing a scope for someone who was never going to spend ₹4L.

The instinct to be "considerate" is real and worth respecting — but the considerate move is **not lowering the price**. It's making the ₹40k risk-free: it's 100% credited, and they leave with a written spec, an architecture, and a working screen they own **even if they never hire you**. That's already what you're offering. That's the generosity. Price is not where you're kind.

**One caveat where ₹20k IS right:** if you deliberately create a *smaller* rung for smaller jobs — a ₹1.5–2L build — then ₹20k is proportionally correct for that. **The rule is that the diagnosis is always ~10% of the build it leads to.** Never set the two independently.

### Q2: "Pricing shouldn't be fixed — it should be discussed"

**You're right about the build. You're wrong about the diagnosis.** And the split is the whole design:

- **Diagnosis: fixed and public (₹40,000).** Bounded scope — 3 days, defined deliverables — so you can publish a number with zero risk. Publishing it is what removes friction and pre-qualifies. This is Kai Davis's model exactly: *Marketing Roadmap $1,500* public, *"execution quoted separately."*
- **Build: a band publicly, exact number privately.** ₹3.5–6L on the site is fine as a **qualifying band**, but the final figure should come **out of the diagnosis**, quoted per project. That is exactly the right instinct — scope varies enormously across sectors and you cannot honestly fix it in advance.

**But do not remove the numbers entirely.** The failure mode in the research was 84EM: a page titled *"How Pricing Works"* with no prices on it — worse than having no pricing page, because it raises the question and refuses to answer. CSS Wizardry's framing is the model: *"From ₹X to ₹Y, there's always something we'll be able to do"* — a range presented as **range of solutions**, not range of invoices.

**Suggested wording change** (this is the change you're actually reaching for):
> Engagements start at a ₹40,000 diagnosis. Builds typically run ₹3.5L–₹6L depending on scope — the exact figure comes out of the diagnosis, before you commit to anything.

That keeps the qualifying anchor, makes the build genuinely discussable, and is honest.

### Q3: "We serve all sectors, not one"

**You're right, and — importantly — your current positioning already solves this. You may not have noticed.**

The research finding was "own a noun." The trap people fall into is assuming the noun must be an **industry** (packaging, home services, logistics). It doesn't. Your H1 is:

> *"Quotes and jobs shouldn't live on WhatsApp."*

That is a **workflow**, not a sector. And that workflow — quote → approve → pay → deliver — exists in packaging, printing, security services, interiors, fabrication, events, equipment rental, every one of them. So you are **horizontally applicable across all sectors while still owning one specific problem.** That's the best of both, and you already have it.

Speedshop is the proof: "Rails performance" is not an industry either. Their clients are Shopify, GitLab, Zendesk — retail, devtools, support. One problem, every sector.

**What you must NOT do** is broaden from *problem* to *capability*. The moment the site says "web development, mobile apps, and custom software for all industries," you become un-priceable and land back in the ₹15k bracket. Serving all sectors is fine. Doing all *things* is not.

---

## PART 4 — The real constraint (not price)

Your pricing is defensible. Your repos support the claim. **The binding constraint is something else entirely:**

Everything except Trelio was built between **24–29 August 2026** — one week ago. Nothing in the portfolio has a **paying client**. Not one.

That is the actual discount you're paying. Not because the work is weak — measured against market tiers it isn't — but because a buyer's first question is "who else has paid you for this," and the honest answer today is nobody.

Which means: **no price change on the site will move the needle as much as one paying pilot.** At ₹40k, a diagnosis is small enough that a real business will try it. That is the cheapest possible route from zero to a reference — and it's already built.

---

## Summary

1. **Keep ₹40,000.** It's 7–11% of your build — precisely the benchmark. ₹20k reads as unsure and buys you worse clients.
2. **You're under-priced, not over-priced.** ₹3.5–6L against a ₹6–10L market. Room to raise once you have one reference.
3. **Make the build price a band + "quoted from the diagnosis."** Keep the diagnosis fixed and public.
4. **All sectors is fine — you're niched by workflow, not industry.** Already correct. Don't drift to a capability list.
5. **Trelio is your one unassailable asset.** Lead with it.
6. **The packaging repos are one asset.** Present them as one.
7. **Kapstone stays off the shipped list.** Your report already says this; measurement confirms it.
8. **Never quote in days.** 15 days ÷ ₹5L invites a day-rate argument you cannot win.

**Sources:** [Custom web app cost India 2026 — Selyst](https://www.selyst.com/en-in/articles/services/custom-web-application-development-cost-india-2026/) · [Paid Discovery pricing — Sakas & Company](https://sakasandcompany.com/paid-discovery/)
