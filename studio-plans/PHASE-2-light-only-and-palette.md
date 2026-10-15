# PHASE 2: Light only, and a four-role palette (CK Builds)

**Repo:** `Chanakya_Portfolio`
**Remote:** `https://github.com/Chanakya2006gt/Chanakya_Portfolio`
**Base commit when this plan was written:** `f63d73b`
**Source of truth for the decisions behind this plan:** `studio-refactor-plan.md` §11.2 ("Light only", "One accent"), plus the brief below.

> **Note on numbering.** `studio-refactor-plan.md` §15 puts "light only" in its Phase 3 (visual system). This plan pulls that one item, plus the colour tokens, forward into Phase 2, because the dark theme is live and nobody is checking it. The rest of §11.2 (motion, Trelio patterns, removing the remaining tells) stays in the later visual phase.

---

## The brief (Chanakya's prompt, recorded verbatim)

> Then the code disagrees with you, and that's worth fixing while we're in there.
>
> Right now `__root.tsx` sets `<html className="dark">`, there's a theme script reading `localStorage`, a working ThemeToggle in the nav (the moon icon in your screenshot), 22 `dark:` classes across the components, and the dark values are the *defaults* in `styles.css` — `:root` is the dark theme and `.light` overrides it. You're seeing light because your Mac prefers light. Anyone whose system is set to dark gets the dark version of your site, and that's the version nobody has been checking.
>
> So: **delete dark mode properly.** Move the light values into `:root`, drop the `.light` block, remove the toggle, the theme script and every `dark:` class, set `Toaster theme="light"`. It's a clean task, it kills a whole class of "did anyone look at this in dark mode?" bugs, and stripping those 22 conditional branches makes the remaining styling easier to get right.
>
> That also changes the colour answer, in your favour — one background to design against instead of two:
>
> | Role | Colour | Contrast on `#f8f7f4` |
> |---|---|---|
> | Ink (headings, body) | **Walnut `#5A3E2B`** | 9.08 ✓ |
> | Action (buttons, links, active nav) | **Your sage `#1f653b`** | 6.57 ✓ |
> | Data (mono labels, numbers, statuses) | **Amber, deepened to `#96570C`** | 5.35 ✓ |
> | Surfaces (card fills, borders, rules) | **Sage `#87A96B` at 8–12% opacity** | n/a — never text |
>
> Palette 1 is the one that blends, and light-only lets you use more of it. Walnut as the ink instead of near-black `#121413` warms the entire page in one line — paper and brown ink rather than paper and screen-black. That single change will do more for "not bland" than any accent.
>
> Two cautions. The amber must be deepened — `#D5851F` straight from the reel is 2.72 on your background, so any text in it fails. And keep the jobs separate: sage always means "you can click this", amber always means "this is data". The moment amber appears on a button, the system stops being readable.
>
> Want me to fold both into the Phase 2 plan — the dark-mode removal as a task, and these four tokens with usage rules?

Answer: yes. Both are folded in below as Task A and Task B.

### Contrast check (re-computed, WCAG 2.x relative luminance)

| Colour | On `#f8f7f4` | On `#ffffff` | Use as text? |
|---|---|---|---|
| Walnut `#5A3E2B` | 9.08 | 9.73 | Yes |
| Sage `#1f653b` | 6.57 | 7.04 | Yes (white on sage: 7.04) |
| Amber `#96570C` | 5.35 | 5.73 | Yes |
| Amber `#D5851F` (raw) | 2.72 | 2.92 | **No** |
| Sage `#87A96B` (raw) | 2.48 | 2.65 | **No**, surfaces only |

---

## Rules for the agent

Phase 1's rules still apply (`PHASE-1-stop-the-contradictions.md`, "READ THIS FIRST"): no invented copy, stop and ask on surprises, match on strings not line numbers, touch only the files named.

This phase **does** change colours and theme. It does **not** change copy, fonts, layout, spacing or section order.

---

## Task A: delete dark mode

| # | File | Change |
|---|---|---|
| A1 | `src/styles.css` | Replace the dark `:root` values with the light values (then apply Task B tokens). Delete the `.light { … }` block. Delete `@custom-variant dark`. Delete `html.dark body` and fold the light body background into a plain `body` rule. Merge `.light .card-specular` into its base rule. Delete `.nav-dot-active` and `.btn-indigo-glow` (no usages; the latter is an indigo hue). |
| A2 | `src/routes/__root.tsx` | `<html className="dark antialiased">` → `<html lang="en" className="antialiased">`. Delete the inline theme script (the one reading `localStorage.getItem("theme")`). `Toaster theme="dark"` → `theme="light"`. `theme-color` meta `#0a0a0b` → `#f8f7f4`. |
| A3 | `src/components/theme-toggle.tsx` | Delete the file. |
| A4 | `src/components/site-nav.tsx`, `src/routes/book.tsx` | Remove the `ThemeToggle` import and both/each `<ThemeToggle />`. |
| A5 | `offer-ladder.tsx`, `portfolio-home.tsx`, `faq-section.tsx`, `book.tsx` | Remove all 22 `dark:` classes (replace the base class with a Task B token at the same time). |
| A6 | `public/site.webmanifest` | `background_color` and `theme_color` `#08090b` → `#f8f7f4`. |
| A7 | `src/routes/admin/login.tsx`, `src/routes/admin/index.tsx` | Five headings use `text-white`, written for the dark default and invisible on paper. → `text-foreground`. (Found while auditing; same class of bug the brief describes.) |
| A8 | `portfolio-home.tsx` | Delete the `bg-grid-pattern … opacity-0 dark:opacity-60` div: in light mode it was always invisible. Delete the `.bg-grid-pattern` CSS. |

**Done when:** `grep -rn "dark:\|ThemeToggle\|theme-toggle\|localStorage.getItem(\"theme\")\|\.light\b\|className=\"dark" src` returns nothing.

---

## Task B: four tokens, with usage rules

### B1. Tokens in `src/styles.css` (`:root`, light only)

| Token | Value | Tailwind | Role |
|---|---|---|---|
| `--foreground`, `--card-foreground`, `--popover-foreground`, `--secondary-foreground`, `--accent-foreground` | `#5A3E2B` | `text-foreground` | **Ink** |
| `--primary`, `--sage`, `--ring` | `#1f653b` (fg `#ffffff`) | `bg-primary`, `text-sage`, `bg-sage` | **Action** |
| `--data` (new) | `#96570C` | `text-data` | **Data** |
| `--surface` (new) | `rgba(135,169,107,0.08)` | `bg-surface` | **Surface** fill |
| `--secondary`, `--muted`, `--accent` | `rgba(135,169,107,0.10)` | `bg-muted` etc. | **Surface** fill |
| `--border` | `rgba(135,169,107,0.12)` | `border-border` | **Surface** rule |
| `--indigo*` | delete | — | Removed (§11.2: one accent) |

`--background` stays `#f8f7f4`. `--card` stays `#ffffff` (paper-white card on paper). `--muted-foreground` stays `#4a524c` for now (open question below).

### B2. Usage rules

1. **Walnut is the ink.** Headings and body text. Section markers (the small vertical bars before section labels) use ink, with no glow.
2. **Sage `#1f653b` means "you can click this".** Primary buttons, text links, active nav, hover states, focus rings, the selection highlight. Nothing that is not interactive is coloured sage. *Exception, recorded:* the wordmark dot in the nav is inside the home link, so it qualifies.
3. **Amber `#96570C` means "this is data".** Step numbers, status words ("QUOTE READY"), work-card badges. Never on a button, never on a link, never as a background behind text.
   - Supporting mono metadata (durations, footnotes) stays `text-muted-foreground`. Amber is for the figure the eye should land on, not every mono string; if everything is amber, nothing is data.
4. **Sage `#87A96B` at 8–12% is for surfaces only.** Icon tiles, badge fills, borders, rules. Never text, never an icon colour.
5. **No other hues.** Remove `emerald-*`, `cyan-*`, `indigo`, and the `#10b981` glow from the files touched in this phase.

### B3. Class mapping for the files in A5

| Old | New |
|---|---|
| `bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]` (section bar) | `bg-foreground` |
| Icon tile `bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border-emerald-500/30` (and cyan, indigo versions) | `bg-surface text-foreground border-border` |
| Work-card badge `bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/30` (and cyan) | `bg-surface text-data border-border` |
| Mono link `text-emerald-800 dark:text-emerald-400 hover:underline` (and cyan) | `text-sage hover:underline` |
| Status `text-emerald-800 dark:text-emerald-400` ("QUOTE READY") | `text-data` |
| Step numbers `text-sage` (01/02/03, not clickable) | `text-data` |
| Outline button hover `hover:border-emerald-500/50 hover:text-emerald-800 dark:hover:text-emerald-300` | `hover:border-sage/50 hover:text-sage` |
| Offer-ladder icons `text-emerald-800 …` / `text-cyan-800 …` / `text-indigo` | `text-foreground` |
| book.tsx success tile `bg-emerald-500/15 text-emerald-600 dark:text-emerald-400` | `bg-surface text-data` |
| book.tsx WhatsApp link `text-emerald-800 dark:text-emerald-400` | `text-sage` |
| book.tsx `selection:bg-emerald-500/20`, icon `text-emerald-600` | `selection:bg-sage/20`, icon inherits |

### Out of scope (later visual phase)

- The chatbot (`src/components/mascot/*`) uses sage on non-interactive elements (avatar, spinner, live dot). Left as is; it is one widget and is due its own rewrite.
- Other unused CSS utilities (`animate-marquee`, `animate-wave`, …), motion, the remaining "tells" in §4.6.

### Open questions for Chanakya

1. `--muted-foreground` is a cool grey-green (`#4a524c`). Next to walnut ink it may read slightly cold. A warm alternative would be a walnut tint; not changed without your say.
2. Sage at 12% as the border is very light on paper (about 1.1:1). Cards keep their existing neutral `--shadow-border` ring so they still have an edge. If you want the edge itself in sage, it needs to go above 12%.

---

## Definition of done

1. `npm run typecheck`, `npm run lint`, `npm run build` pass.
2. The Task A grep returns nothing; `grep -rnE "emerald|cyan|indigo|#10b981" src/components/offer-ladder.tsx src/components/portfolio-home.tsx src/components/faq-section.tsx src/routes/book.tsx src/routes/__root.tsx` returns nothing.
3. Playwright smoke on `/`, `/book`, `/method`, `/admin/login` at 390 and 1440, **with `colorScheme: "dark"` emulated**: the page background is `rgb(248, 247, 244)`, `<html>` has no `dark` class, no theme toggle button exists.
4. Contrast check of rendered ink, link and data colours against the page background ≥ 4.5.
5. Every command and route recorded in `DECISION_LOG.md`.
