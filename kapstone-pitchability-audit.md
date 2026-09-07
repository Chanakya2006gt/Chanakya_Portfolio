# Kapstone repos — pitchability audit

**No code changed.** Read-only audit of all three repos: `Kapstone_corporate_HQ`, `Kapstone_home_services`, `kapston-proposal`.

## The one thing to read before anything else

All three are built around a **real, NSE-listed company** — Kapston Services Limited (NSE: `KAPSTON`, real CIN `L15400TG2009PLC062658`, real domain `kapstonservices.com`) — not a fictional stand-in. That changes the risk profile of everything below: this isn't "did I forget a Lorem Ipsum," it's "did I put words in a real company's mouth, or a real person's."

One finding needs to be pulled out from the rest because it's not a polish issue: **`Kapstone_home_services/src/components/NagarjunaVideoModal.jsx`** invents a first-person quote and attributes it, by name, to the real actor **Akkineni Nagarjuna** — *"A home is built on trust... Kapston has earned that trust during the last two decades..."* — presented alongside a fabricated "August 2026 launch event" and real named Kapston executives, with only a 10px disclaimer at the bottom. Putting invented words in a real, identifiable public figure's mouth is a defamation / right-of-publicity exposure, and the small-print disclaimer doesn't neutralize that. This should come out (or be entirely rebuilt around a fictional ambassador) before this repo is shown to anyone outside your own screen, independent of anything else in this report.

With that flagged, here's the honest per-repo verdict.

---

## 1. `Kapstone_corporate_HQ` — pitchable with disclosure

This one is the most carefully handled of the three. It's a corporate/investor-relations redesign concept, and it mostly knows what it is:

- `DemoBanner.tsx` runs a persistent, honest strip: *"Design proposal · sample / illustrative data · not the live site at kapstonservices.com."*
- Real numbers (revenue, shareholding split) and real board member names sit next to their own disclaimers almost everywhere — *"Sample operating series... not audited figures,"* *"Confirm any number from NSE filings before use."*
- README states plainly: *"This branch is a pitch surface. Figures, charts, and filings rows are illustrative unless sourced from an official deck."*
- The RFP calculator is genuinely wired (real sqft/sector formula, live state) — not a static shell.

Two real gaps, though:

- **The RFP modal's success screen is the one form on the site with no disclosure.** It says *"Our Regional Operations Lead... has been notified"* and shows a fake hotline number, as if a real workflow fired — but `handleSubmit` only sets local state and shows confetti. Nothing goes anywhere. Every other form on this site (Contact, Careers) says "demo only" at the equivalent moment; this one doesn't.
- **Five different "filing" download links all point to the same PDF.** That's not illustrative, that's just wrong — a viewer who clicks "Q1 FY26 Results" and gets the FY25 annual report notices.

Minor: the client-logo marquee (Wipro, L&T, Dr. Reddy's, etc.) is labeled illustrative, but a client list is the kind of claim that generates disputes even with fine print — I'd trim it or make the caveat louder before this goes in front of anyone at Kapston itself.

**Bottom line:** fixable with copy changes, not a rebuild. Add a disclosure line to the RFP success state, fix or stub the filing links, and this is honestly presentable.

---

## 2. `Kapstone_home_services` — needs real changes

Code quality here is actually the strongest of the three — the booking flow (`BookingDrawer.jsx` + `BookingContext.jsx`) is a real multi-step state machine with working coupon logic and add-ons, and `AmcCalculator.jsx` / `SparePartsModal.jsx` are genuinely interactive, not screenshots. The problem is entirely in the content layer:

- **The Nagarjuna modal** (above) — the standalone reason this repo isn't pitchable as-is.
- `testimonialsData.js` has four fully invented reviews with a `verified: true` flag, tied to specific real Hyderabad societies (My Home Bhooja, Aparna Sarovar Zenith). Nothing in the UI marks these as illustrative — they render exactly like real verified reviews. That's fake social proof, and it's the kind of thing that's fine to build as a mockup and not fine to demo without a label.
- README's "Corporate Lineage" section states a real HQ address, phone number, and support email as established fact, plus "Akkineni Nagarjuna Brand Endorsement... official brand ambassador" — worded as if it already happened, not as pitch copy.
- The "confirmed" booking is fully fake under the hood: OTP is hardcoded (`5820`), verification is a `setTimeout`, the booking ID and assigned technician are fixed strings. Fine for a demo, but if you ever click through this live with a prospect watching, know that nothing behind it is real.

**Bottom line:** pull or rebuild the Nagarjuna modal first — that's not optional — then label the testimonials as illustrative before this is shown to anyone, including Kapston.

---

## 3. `kapston-proposal` — pitchable as-is, to Kapston specifically

This is the most functionally credible of the three, and it's the only one with evidence of a deliberate "honesty pass" already done (commit `98ee331`, "chrome and honesty updates"). It's not a static Figma-to-React shell — buttons actually do things:

- `AppContext.tsx` has real state mutation, `localStorage` persistence, and audit-log generation.
- Approve/reject KYC, approve/rework a job, clear a payout batch — all wired end-to-end, no no-op buttons.
- Disclosure is baked in three places: the banner, the page `<title>`, and the meta description.
- Git history plus the presence of a `dist/` build suggest this has already been deployed live via Vercel.

Two things to fix, in order of how much they matter:

- **The mock data is too realistic.** `mockPartners.ts` has full-looking PAN numbers, bank account numbers, IFSC codes, and even a fabricated Aadhaar-style UID. `mockAuditLogs.ts` has NEFT reference numbers and payout totals. None of it is real, but a screenshot cropped without the banner could plausibly pass as real PII — worth softening before this circulates further.
- **There's no README at all.** Every other repo in your portfolio has one; this is the gap.
- If you ever want to reuse this shell for a different prospect, the Kapston name and logo are hardcoded throughout (including as the favicon) — that's a rebrand pass, not a quick edit.

**Bottom line:** this is your strongest pitch artifact of the three. Show it to Kapston as-is once you've confirmed the live URL still resolves with the banner intact.

---

## What "pitchable" means here — one more thing worth saying plainly

All three repos are unsolicited proposal work, not shipped client work — that boundary should stay exactly where it already is on your site and in your positioning. Being pitchable to Kapston is a different bar than being safe to show a *different* prospect as a generic template or portfolio sample: two of the three (home services, and to a lesser extent the corporate HQ) currently only work as a pitch to the one real company they're built around, because they use that company's real name, logo, executives, and (in the worst case) a real celebrity's invented words. If the plan is ever to reuse any of this shell for someone else, that's a rebrand-and-strip pass, not a copy-paste.

## Priority order if you're doing anything before sending these anywhere

1. Fix or remove `NagarjunaVideoModal.jsx` — not optional, do this first.
2. Label `testimonialsData.js` reviews as illustrative (home services).
3. Add a disclosure line to the RFP modal's success state, and fix the five-links-one-PDF issue (corporate HQ).
4. Write a README for `kapston-proposal`.
5. Confirm all three build cleanly from a fresh `npm i` on your own machine — all three failed `npm run build` in the sandboxed audit environment on a Rollup native-binary/arch mismatch (`@rollup/rollup-linux-arm64-gnu`), which reads as an environment issue rather than a source defect, but it should be verified locally before any live demo, not assumed.
