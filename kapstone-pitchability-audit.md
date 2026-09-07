# Kapstone repos — pitchability audit

**No code changed.** Read-only audit of all three repos: `Kapstone_corporate_HQ`, `Kapstone_home_services`, `kapston-proposal`.

> **Corrections (Sept 7):** the first version of this doc flagged two things as fabricated that turned out to be real: the Nagarjuna modal in `Kapstone_home_services` (verified against live press coverage) and the client-logo marquee in `Kapstone_corporate_HQ` (verified against the live `kapstonservices.com/clients/` page). Sections 1 and 2 have been rewritten accordingly.

## The one thing to read before anything else

All three are built around a **real, NSE-listed company** — Kapston Services Limited (NSE: `KAPSTON`, real CIN `L15400TG2009PLC062658`, real domain `kapstonservices.com`) — not a fictional stand-in. That's worth knowing going in: any content that *isn't* grounded in something real or clearly marked as a placeholder carries more weight than it would for a fictional demo brand.

One thing to flag positively rather than negatively: **`Kapstone_home_services/src/components/NagarjunaVideoModal.jsx`** turns out to be grounded in a real, dated event, not invented. Verified via web search: Akkineni Nagarjuna was genuinely appointed Brand Ambassador for Kapston Home Services at a real launch event in Hyderabad on August 12, 2026, alongside Chairman Dr. C R Naidu and MD Srikanth Kodali — matching the names in the repo exactly. He's on record (Telangana Today, Social News XYZ) saying almost the exact line the modal uses: *"A home is built on trust, and every service that enters a customer's home should also be built on trust"* and *"Kapston has earned that trust during the last two decades by delivering manpower solution services to leading organizations across India."* So this isn't a fabricated quote — it's real reporting, correctly attributed. The one improvement worth making is presentational, not corrective: cite the source (Telangana Today / Social News XYZ, Aug 12 2026) next to the quote instead of presenting it as said directly to the site — that reads as more credible, not less.

With that corrected, here's the honest per-repo verdict.

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

**The client-logo marquee is grounded in reality, with one specific exception to fix.** Verified directly against the live `kapstonservices.com/clients/` page (screenshotted by Chanakya): it's a large, genuine client wall — Wipro confirmed present, alongside dozens of other real named clients (Wells Fargo, Hyundai, Shapoorji Pallonji, Hindalco, Aurobindo, ServiceNow, Yashoda Hospitals, KIMS Hospitals, Pfizer, Lodha, and more). My first pass here undersold this — an earlier automated fetch of that same URL only surfaced a small testimonials section and missed the logo wall entirely, which is a tool limitation on image-heavy pages, not evidence the marquee was fabricated. But Chanakya confirmed directly against the real page that **L&T, Dr. Reddy's, and Tech Mahindra are *not* on it** — those three specific names in the repo's marquee don't match the real client list, unlike Wipro. So this isn't "trim the whole marquee," it's narrower: swap those three names for real ones from the actual wall (Hyundai, Wells Fargo, Hindalco, Aurobindo, Shapoorji Pallonji are all confirmed real and unused) before this goes in front of Kapston.

**Bottom line:** fixable with copy changes, not a rebuild. Add a disclosure line to the RFP success state, and fix or stub the filing links.

---

## 2. `Kapstone_home_services` — pitchable with disclosure

Code quality here is actually the strongest of the three — the booking flow (`BookingDrawer.jsx` + `BookingContext.jsx`) is a real multi-step state machine with working coupon logic and add-ons, and `AmcCalculator.jsx` / `SparePartsModal.jsx` are genuinely interactive, not screenshots.

- **The Nagarjuna modal** is grounded in real, dated press coverage (see above) — not a risk. Add a source citation next to the quote as a credibility upgrade, not a correction.
- `testimonialsData.js` has four customer reviews with a `verified: true` flag, tied to specific real Hyderabad societies (My Home Bhooja, Aparna Sarovar Zenith). Unlike the Nagarjuna quote, these have no public record to check against — by construction they're placeholder copy standing in for reviews you'll collect once you're actually engaged with Kapston, which is a reasonable way to build a pitch. The one thing worth remembering: clear the `verified: true` flag when you swap in real reviews if the real ones aren't independently verified either — the flag should only ever be true when it's actually true.
- README's "Corporate Lineage" section states a real HQ address, phone number, and support email, plus the Nagarjuna Brand Ambassador appointment — worded as established fact rather than pitch copy, which is fine given it's now confirmed accurate, but double-check the address/phone/email against Kapston's real published contact details before this goes out, since those weren't independently verified here.
- The "confirmed" booking is fully fake under the hood: OTP is hardcoded (`5820`), verification is a `setTimeout`, the booking ID and assigned technician are fixed strings. Fine for a demo, but if you ever click through this live with a prospect watching, know that nothing behind it is real.

**Bottom line:** no rebuild needed. Cite the Nagarjuna quote's source, and keep the `verified` flag honest when the testimonials get swapped for real ones.

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

All three repos are unsolicited proposal work, not shipped client work — that boundary should stay exactly where it already is on your site and in your positioning. Being pitchable to Kapston is a different bar than being safe to show a *different* prospect as a generic template or portfolio sample: all three currently only work as a pitch to the one real company they're built around, because they use that company's real name, logo, and (for home services) its real, confirmed brand ambassador. If the plan is ever to reuse any of this shell for someone else, that's a rebrand-and-strip pass, not a copy-paste.

## Priority order if you're doing anything before sending these anywhere

1. Swap L&T, Dr. Reddy's, and Tech Mahindra out of the client-logo marquee for real Kapston clients (corporate HQ) — the one confirmed inaccuracy across all three repos.
2. Cite the source next to the Nagarjuna quote (home services) — a credibility upgrade, not a fix.
3. Add a disclosure line to the RFP modal's success state, and fix the five-links-one-PDF issue (corporate HQ).
4. Write a README for `kapston-proposal`.
5. When you swap in real testimonials/reviews after reaching out to Kapston, make sure `verified: true` only stays set where it's actually true (home services).
6. Confirm all three build cleanly from a fresh `npm i` on your own machine — all three failed `npm run build` in the sandboxed audit environment on a Rollup native-binary/arch mismatch (`@rollup/rollup-linux-arm64-gnu`), which reads as an environment issue rather than a source defect, but it should be verified locally before any live demo, not assumed.
