# TASK 12 — 60/30/10 Colour Discipline, Border & Radius System

> Addendum to `portfolio-gemini-plan.md`. **All "ABSOLUTE RULES" still apply.** Run `npm run typecheck` after every step. If an anchor is not found EXACTLY, STOP and report. Change only what is specified.
>
> **This task is PURELY VISUAL.** It must not alter behaviour, data flow, props, state, routing, or any API. If a change requires editing logic, you have misread the instruction — STOP.

---

## THE 60/30/10 RULE (what is being applied)
A classic interior-design ratio adopted by UI design. Split the visual field into three budgets:
- **60% — dominant/neutral.** The page ground: `background`, large empty space, body text. Carries no attention on its own.
- **30% — secondary/supporting.** Surfaces that sit *on* the ground: cards, panels, badges, borders, muted text. Creates structure and depth.
- **10% — accent.** Reserved for what the eye should land on: primary CTAs, active states, key highlights.

The rule works because attention is **zero-sum**. The accent only reads as "important" while it stays scarce. Past roughly 10% of the visual field it stops signalling anything and becomes decoration.

---

## AUDIT RESULT — the site does NOT follow it

Measured across `src/components` and `src/routes`:

| Signal | Measured | Verdict |
|---|---|---|
| `sage` accent utilities | **~175 uses** (`text-sage` alone: **69**) | ❌ Far above a 10% budget |
| `indigo` accent utilities | **13 uses** | ❌ Vestigial second accent |
| `border-border` opacity tiers | **5** (`solid`, `/80`, `/60`, `/50`, `/40`) | ❌ No system |
| `rounded-*` values | **6** (`sm`,`md`,`lg`,`xl`,`2xl`,`full`) | ⚠️ Cards mix `xl` and `2xl` |
| Section rhythm (`py-24`, `max-w-5xl`, `px-5`) | Consistent | ✅ **Already good — do not touch** |
| `gap-*` scale | Concentrated on 1.5/2/3/4 | ✅ Fine |

**Diagnosis.** The 60 and 30 layers are healthy — the neutral ground and card surfaces are well-built. The failure is entirely in the **10**: sage is applied to nearly every icon, eyebrow label, inline code chip, and border on the page. When every element is the accent colour, the eye has no focal point, and genuine calls-to-action (the résumé button, contact CTA) carry no more weight than a decorative icon.

`indigo` is the mirror problem: too rare and too scattered to read as intentional, so it registers as inconsistency.

**Goal: cut sage usage roughly in half, concentrating it on interactive and high-priority elements, and give indigo one defined job.**

---

# STEP 1 — Establish the rules (documentation only, no visual change)

Create `DESIGN.md` in the project root with exactly this content. It is the reference for every later step and for future work.

```markdown
# Design System — Colour, Border & Radius

## Colour budget (60/30/10)

**60% — Ground.** `bg-background`, page whitespace, `text-foreground` body copy.
Never tint the page ground with an accent.

**30% — Surface.** `bg-card`, `bg-secondary/*`, `border-border/*`, `text-muted-foreground`.
All structural separation lives here. Section eyebrow labels, metadata, timestamps,
and decorative icons belong to this layer — NOT the accent layer.

**10% — Accent (`sage`).** Reserved for:
- Primary buttons and the active/hover state of interactive controls
- The single most important link or CTA in a section
- Active navigation state
- Live/availability status indicators

**Accent is NOT for:** decorative icons, every eyebrow label, inline `<code>` chips,
body text emphasis, or default (non-hover) borders.

**Secondary accent (`indigo`).** ONE job only: the AI companion / chat surface.
Nothing else uses indigo.

## Borders — exactly three tiers
| Token | Use |
|---|---|
| `border-border` | Default: cards, panels, inputs |
| `border-border/60` | Subtle: internal dividers inside a card |
| `border-sage/40` | Accent: only on hover/active of an interactive element |

Do not invent new opacities (`/80`, `/50`, `/30`, `/20` are retired).

## Radius — exactly four values
| Token | Use |
|---|---|
| `rounded-full` | Pills, badges, avatars, dots |
| `rounded-2xl` | Cards and large panels |
| `rounded-lg` | Buttons, inputs, small controls |
| `rounded-md` | Inline chips, code fragments |

`rounded-xl` and `rounded-sm` are retired — map to the nearest value above.

## Spacing (already compliant — preserve)
Sections: `max-w-5xl px-5 py-24`. Hero: `py-20` + `min-h-[90vh]`.
Gaps: prefer `gap-2` / `gap-3` / `gap-4`. Do not introduce new section paddings.
```

**VERIFY:** file exists. No code changed yet.
**COMMIT:** `docs: add DESIGN.md defining the 60/30/10 colour, border and radius system`

---

# STEP 2 — Normalise borders to three tiers

Purely mechanical. **Only** change the opacity suffix on `border-border*` and accent-border classes — never the element, layout, or any other class.

**File-by-file, apply these exact substitutions across `src/components/**/*.tsx` and `src/routes/**/*.tsx`:**

| Find | Replace with |
|---|---|
| `border-border/80` | `border-border` |
| `border-border/50` | `border-border/60` |
| `border-border/40` | `border-border/60` |

Leave `border-border` and `border-border/60` as they are.

> **Do NOT use a blind global sed.** Apply per file and re-read each change to confirm you only altered a border class. `border-b`, `border-t`, `border-y` and similar direction classes must be left intact.

**VERIFY:**
```
grep -rn "border-border/80\|border-border/50\|border-border/40" src   # expect: NO matches
npm run typecheck
```

---

# STEP 3 — Normalise radius

| Find | Replace with |
|---|---|
| `rounded-xl` | `rounded-2xl` **only when the element is a card/panel** (has `bg-card`, `bg-secondary/*`, or `border` + padding) |
| `rounded-xl` | `rounded-lg` **when the element is a button, input, or small control** |
| `rounded-sm` | `rounded-md` |

`rounded-full`, `rounded-2xl`, `rounded-lg`, `rounded-md`, `rounded-tl`, `rounded-tr` stay as they are.

> There are **25** `rounded-xl` occurrences (15 in `portfolio-home.tsx`, 4 in `resume-modal.tsx`, 2 in `trelio-preview.tsx`, 1 in `contact-cards.tsx`, rest elsewhere). Each needs the card-vs-control judgement above. **Do not batch-replace.** If an element's role is genuinely ambiguous, leave it as `rounded-xl` and list it in your report rather than guessing.

**VERIFY:**
```
grep -rn "rounded-sm" src        # expect: NO matches
npm run typecheck && npm run build
```
**COMMIT (Steps 2–3):** `style: normalise border tiers and radius scale`

---

# STEP 4 — Bring the accent back to a 10% budget

**This is the substantive step.** The rule: **sage stays on anything interactive or genuinely primary; sage comes off anything purely decorative or structural.**

### 4.1 Demote decorative icons
Icons that merely label a section or sit inside a static card are **surface**, not accent.

In `src/components/resume-modal.tsx`, the section-heading icons and inline icons currently use `text-sage`:
- `<FileText className="size-4" />`, `<GraduationCap …>`, `<Code2 …>`, `<Building2 …>`, `<ShieldCheck …>`, `<Award …>` inside `<h3>` headings
- `<MapPin className="size-3.5 text-sage" />` and `<Mail className="size-3.5 text-sage" />` in the contact row

For each of these, change the icon's `text-sage` → `text-muted-foreground`.
**Keep `text-sage` on the `<h3>` heading text itself** — the heading is a real hierarchy signal; its icon is not.

> The `<a href={mailto:…}>` wrapping the email **is** interactive — keep its `hover:text-sage`. Only the `<Mail>` icon inside it is demoted.

### 4.2 Demote eyebrow labels
In `src/components/portfolio-home.tsx`, the small uppercase section labels use the accent:
- line ~147: `<p className="text-xs font-semibold uppercase tracking-wider text-sage">About</p>`
- line ~306: `<p className="text-xs font-semibold uppercase tracking-wider text-sage">Work</p>`
- any other `uppercase tracking-wider text-sage` eyebrow in this file

Change `text-sage` → `text-muted-foreground` on **these eyebrow `<p>` elements only**. They are navigational metadata, not focal points.

### 4.3 Demote inline code chips
Line ~156 of `portfolio-home.tsx` has three inline `<code>` chips using `text-sage`:
```
<code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-sage font-mono">secure payments</code>
```
For each such `<code>` chip, change `text-sage` → `text-foreground` and `rounded` → `rounded-md`.
> Rationale: three accent-coloured chips inside one paragraph is the single densest accent cluster on the page, and none of them is clickable.

### 4.4 KEEP the accent (do not touch these)
Leave `text-sage` / `bg-sage` / `border-sage` exactly as-is on:
- The availability/status pill (line ~66) — a live status indicator is a legitimate accent.
- All `<Button variant="sage">` and `btn-sage-glow` elements.
- Hover states: `hover:text-sage`, `hover:border-sage`, `hover:bg-sage/20`.
- Active navigation state in `left-rail-nav.tsx` and `site-nav.tsx`, and `.nav-dot-active`.
- The `<h3>` résumé section heading text.
- The stat/feature circles at line ~338 (`bg-sage/10 text-sage border-sage/20`) — these ARE the section's focal elements.
- Anything inside `src/routes/admin/**` — the admin panel is a private tool, out of scope.

### 4.5 Give indigo one job
Currently 13 scattered uses. Confine it to the AI companion surface.
- In `src/components/mascot/**`, keep every indigo usage.
- In `src/components/portfolio-home.tsx` and any other non-mascot file, replace indigo utilities with the sage or neutral equivalent (`text-indigo`→`text-muted-foreground`, `bg-indigo`→`bg-sage`, `border-indigo/50`→`border-border`, gradient stops `via-indigo/5`→`via-sage/5`).
- If a usage sits in a file that is genuinely part of the chat/companion experience, keep it and say so in your report.

**VERIFY:**
```
npm run typecheck && npm run build
grep -rIoh "text-sage" src/components src/routes --include=*.tsx | wc -l
```
Report the before (**69**) and after count. **Target: 30–40.** If it is still above 50, sub-steps were skipped; if below 20, too much was stripped — report either case rather than "correcting" further.

**COMMIT:** `style: restore 60/30/10 accent balance — sage reserved for interactive and primary elements`

---

# STEP 5 — Visual verification (REQUIRED)

Run `npm run dev` and check **both light and dark themes**:
1. Hero, About, Projects, Skills, Contact, and the résumé modal all render with no layout shift versus before.
2. On each screen the eye should land on a **button or status pill first** — not on a decorative icon.
3. No element lost its border or became borderless.
4. No card has visibly mismatched corner rounding next to a sibling card.
5. Hover states still turn sage.

Report anything that looks wrong **instead of** making further changes.

---

## DO NOT
- Do **not** change `src/styles.css` — the token values are correct; this task is about *how often* they are applied.
- Do **not** change any section padding, `max-w-*`, or `gap-*` — spacing already passes.
- Do **not** touch `src/routes/admin/**`.
- Do **not** change component structure, props, state, handlers, or imports.
- Do **not** add new colours, tokens, or CSS classes.
- Do **not** run a blind global find-and-replace across `src/`.

## REPORT BACK
- `text-sage` count before (69) and after.
- Any `rounded-xl` you left in place because the element's role was ambiguous.
- Any indigo usage you kept, and why.
- Confirmation `typecheck` and `build` are green, and that both themes were visually checked.
