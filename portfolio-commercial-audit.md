# Portfolio Commercial Audit — does the site do justice to the work?

**Question asked:** does `chanakya-portfolio-orcin.vercel.app` do justice to a factory that ships Printfast-class systems in 7–15 days and intends to sell ₹3.5–6L sprints?

**Verdict: No — and the gap is structural, not cosmetic.**

The site does justice to the **engineering**. It does not do justice to the **business**. Every architectural decision on the page answers the question *"should we hire him?"* — not *"should we buy this?"* Those are different pages for different buyers, and right now the code is unambiguously built for the first one.

Read-only audit. No code changed.

---

## 1. The single most damaging element

**The hero's second CTA is `View Resume`.** (`portfolio-home.tsx:227`)

```
[ View projects ]  [ 📄 View Resume ]  [ ✉ Contact ]
```

No studio selling ₹5L operational systems has "View Resume" in its hero. A résumé is the artifact of a candidate. Its presence in the primary action row frames everything below it — the Trelio card, the CPQ benchmarks, the security stack — as *evidence for a hiring decision* rather than *capability for a purchase decision*.

This one button silently re-prices the entire site. Everything else in this audit is downstream of it.

---

## 2. Four different availability statements, all pointing at employment

The site declares availability in **four separate places**, and they don't agree with each other:

| Location | Text | Signal |
|---|---|---|
| `hero-stats.tsx:5` + `portfolio-data.json` | "Open for collaborations & **full-time roles**" | Job seeker |
| Hero config card (`portfolio-home.tsx:131`) | `status: "Available for High-Impact Work"` | Vague |
| Projects tab (`:588`) | "Available for Client & **Freelance** Engagements" | Freelancer tier |
| Contact (`:866`) | "Open for **freelance work** & conversations" | Freelancer tier |

Two problems:

1. **"full-time roles"** is the exact phrase your own report flags as killing vendor pricing. It appears in **two places** — the JSON *and* the component default — so changing only the data leaves the fallback intact.
2. **"Freelance" appears 8+ times across the site.** Your own pricing table puts *freelancer* at ₹20–80k and *your actual shape* at ₹4–15L. The site self-selects into the tier **below** the one you want to sell. A buyer anchors on the word before they ever read the ABE explanation.

---

## 3. The commercial tab is an empty state

`portfolio-home.tsx:583–600` — there is a dedicated **"Freelance Work"** tab. Its entire content:

> *"I am currently open for freelance projects, full-stack consulting, and selective client work. As new engagements are delivered and cleared for public showcase, case studies and deliverables will be documented here."*

This is the one place on the site where a buyer's intent is highest, and it contains **no offer, no scope, no timeline, no price, and no proof** — only a promise that proof will exist later.

An empty commercial tab is worse than no tab. It reads as *"nobody has hired me yet."* It converts the highest-intent click on the page into the weakest moment on the page.

---

## 4. No offer exists anywhere in the codebase

I grepped the entire `src/` tree for commercial vocabulary — `sprint`, `scope`, `deliverable`, `timeline`, `pricing`, `quote`, `retainer`, `GST`, `starting at`, `₹`.

**Result: zero matches** outside of Trelio's own product copy.

Your report specifies the unit precisely: *a 15-day systems sprint, one workflow, written scope, tests, hardening, ₹3.5–6L, plus care at ₹20–35k/month.* None of it is on the site. The page sells **a person**, not **a productized engagement**. A buyer cannot self-qualify, cannot anchor on price, and cannot tell what they'd receive on day 15.

---

## 5. The About section leads with "student" three times

`portfolio-home.tsx:277–298`:

- **H2:** "Builder first. **Student second.**"
- **First sentence:** "**Engineering student** at SR University (B.Tech in CSE, 2028)…"
- **Info card:** "Degree & Focus — **B.Tech CSE '28**"

The H2 is trying to pre-empt the objection, but naming it three times in one viewport does the opposite — it *installs* the frame. A plant owner or SME CFO evaluating a ₹8L portal reads "student" and mentally moves the decimal. The honest facts don't need to be hidden; they need to stop being the **first** thing in your credibility section.

---

## 6. The hero visual is developer flex, not purchase proof

The right half of the hero is a fake `chanakya.config.ts` terminal card (`:55–160`) containing:

- `role: "AI-Native Systems Architect & Founder"` — a title no buyer searches for
- `cpqThroughput: "273k ops/s (p99: 0.01ms)"` — impressive to engineers, meaningless to the person signing the cheque
- `verifiedTests: "448/448 pass"`, `fuzzTesting: "1k invariants"`
- `workflow: ["Agentic AI", "Antigravity", "Claude Code"]` — **actively counterproductive.** It advertises that AI does the work, which invites the buyer to ask why they're paying lakhs. Your report's own position is that the market pays for *a workflow that survives month 4*, not for agent velocity.
- `$ npx chanakya@latest` with a copy button

**Credibility risk:** `npx chanakya@latest` is not a real published package. A technical buyer *will* run it, and it will fail. A copy-to-clipboard button on a command that doesn't work is a small, avoidable own-goal on a site whose entire pitch is rigor.

Your report's prescription — hero = **product UI** (Apex walkthrough or Trelio 1×1×1) — is correct. Right now the most prominent visual on the page is a picture of a config file that doesn't exist.

---

## 7. The AI companion asks the job-seeker question for you

`companion-chat.tsx:16` — a suggested quick-action chip:

> **💼 Open for hiring?** → *"Is Chanakya open for full-time software engineering roles?"*

The site is literally prompting visitors to ask whether you want a job. On a page meant to sell engagements, this is the assistant volunteering the wrong frame to every visitor who opens it.

---

## 8. What is already right (don't break these)

| Item | Status |
|---|---|
| **Kapston absent** from all project data | ✅ Correctly excluded — matches your "not shipped, no logo" rule |
| **Apex Packaging** present with live URL | ✅ Real, cold-clickable |
| **Trelio** as flagship, single business entry | ✅ Not 12 clone landings |
| Typography, cream/serif restraint | ✅ Genuinely not Elementor-tier |
| Tagline: *"I ship products under real constraints — not demos"* | ✅ The strongest commercial sentence on the site |
| Security/test proof exists | ✅ Real — just positioned as flex rather than as risk-reduction |

**Apex is misfiled.** It sits under `sideProjects`, tagged "B2B Platform". Your report says lead with it for plant/sprint buyers — it is your only cold-clickable proof of the exact object you want to sell. Filing it as a *side project* tells buyers it was a hobby.

---

## 9. Footer

`portfolio-home.tsx` footer: *"Designed & Engineered with care · Trelio SaaS"*

No entity name, no studio framing, no GST-capable signal, no "systems studio" descriptor. The last thing a serious buyer reads gives them nothing to expense against.

---

## 10. Bottom line

The site is a **very good student-founder portfolio**. It is not a studio site.

The taste is genuinely ahead of most Indian dev portfolios — the restraint, the serif, the refusal to list 40 skills. That's real and worth protecting. But the **information architecture** is built for a hiring manager: name splash → résumé → skills → projects → "open for roles." A buyer evaluating a ₹5L plant portal arrives, finds a résumé button and the word "student," and re-prices you into the ₹20–80k freelancer bracket your own report is trying to escape.

**The gap in one sentence:** the site proves you *can build it* and never states *what you sell, in what time, for how much, with what guarantee.*

### Ranked by commercial damage
1. `View Resume` as hero CTA (§1)
2. "full-time roles" / "freelance" language, 4 conflicting availability statements (§2)
3. No offer anywhere — no sprint, scope, timeline, or price (§4)
4. Empty "Freelance Work" tab at the highest-intent click (§3)
5. "Student" three times in the credibility section (§5)
6. Hero visual = fake config file instead of product UI; broken `npx` command (§6)
7. Companion prompting "Open for hiring?" (§7)
8. Apex filed as a side project; footer has no studio identity (§8, §9)

### Cheapest high-impact moves
Changing **six strings** — the availability chip, the hero CTA label, the companion quick-action, the About H2, and the two "freelance" headings — would move the site out of the job-seeker frame **without touching layout, design, or a single component's structure**. That's the highest leverage-per-risk change available.

The structural work (offer block, product-UI hero, Apex promoted to proof, studio footer) is a second pass, and it's what your report already prescribes.

---

**Nothing in this audit has been implemented.** Say the word and I'll turn any section into a precise Gemini-ready spec in the format we've been using.
