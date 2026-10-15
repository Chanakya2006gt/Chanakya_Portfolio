# PHASE 3: Everything that remains (for Antigravity)

**Repo:** `Chanakya_Portfolio` · **Written against commit:** the commit that adds this file (on top of `3e6b92e`, Phase 2)
**Earlier plans (history, do not re-execute):** `studio-refactor-plan.md`, `studio-plans/PHASE-1-stop-the-contradictions.md`, `studio-plans/PHASE-2-light-only-and-palette.md`

> **Dry-run checked when this plan was written:** Tasks 0, 2, 3 (with D2 = warm) and 5 (all blocks, 5g = Yes, all D9 questions) were applied exactly as written to a copy of the repo. Every "old" string matched its stated count. Typecheck, lint (0 errors, same 5 warnings), `check:invariants` and build passed, and `npm run smoke` gave `SMOKE PASSED: 16/16 page loads` with the Task 2 CSP applied. If an old string doesn't match for you, the repo changed since: stop and ask.

> **Where the earlier plans and the code disagree, the code wins.** `studio-refactor-plan.md` says "ChanBuilds", Instrument Serif, a four-step process with a paid diagnosis and the H1 "Quotes and jobs shouldn't live on WhatsApp". The live site says **CK Builds**, **IBM Plex Sans**, **three steps**, and the H1 **"We build software that runs businesses."** Do not bring any of the old wording back. This file is the only source of text for this phase.

---

## How Chanakya uses this file

1. Fill in the **Decisions** table (section 3). An empty answer blocks the tasks that depend on it.
2. Open a **new** Antigravity conversation for each task and paste:

   ```
   Read studio-plans/PHASE-3-remaining-work.md from top to bottom before doing anything.
   Do Task <N> only. Follow every rule in section 1. Do not start any other task.
   When finished, reply with the report from section 1, rule 12, and stop.
   ```

3. Read the report and look at the screenshots in `smoke-output/` yourself before starting the next task.

Do tasks in numeric order. One task per conversation. A long conversation is where agents drift.

---

## 1. Rules for the agent (Antigravity)

Read all of these. Breaking any one means the task failed, even if the site looks fine.

**Rule 1. Do not invent anything.**
Every piece of text a visitor can see (headings, sentences, button labels, alt text, meta tags, error messages, `llms.txt`) must be copied **character for character** from this file. Do not make up prices, numbers, durations, client names, testimonials, statistics, phone numbers, emails, URLs, dates, cities, or claims. Do not "improve" the wording. If you need text this file doesn't give you, **stop and ask** (rule 11).

**Rule 2. One task only.**
Do the task you were given. Do not start the next one, do not "also fix" something you noticed. Write anything you noticed under "Noticed, not touched" in your report.

**Rule 3. Touch only the files the task lists.**
Before committing, run `git diff --name-only`. Every path must be in the task's **Files** list. If another file changed, undo that change.

**Never touch these, in any task, unless a task names them:**
- `src/data/studio.ts` (contact facts)
- `src/routes/api/chat.ts` (chatbot rules)
- `package.json`, `package-lock.json` (no new dependencies, no upgrades)
- `scripts/check-invariants.mjs`, `scripts/smoke.mjs` (the checks that test *you*)
- `src/routeTree.gen.ts` (generated; let the build regenerate it)
- every `*.md` file except `DECISION_LOG.md`
- `.env*` files (never print, create or commit secrets)

**Rule 4. Match on exact text, not line numbers.**
Each edit gives an exact **old** string and an exact **new** string. Find the old string with search. If it is not found exactly, or is found a different number of times than the task says, **stop and ask**. Do not edit "the closest match".

**Rule 5. Change only what the edit says.**
No reformatting, no reordering imports, no renaming, no running Prettier on a whole file, no converting quotes, no "tidying". Diffs must be small enough for Chanakya to read line by line.

**Rule 6. Never weaken a check to make it pass.**
Do not add `// @ts-ignore`, `// eslint-disable`, `as any`, `!important` (unless the task gives it), `try {} catch {}` that swallows errors, or skip/delete a test. Never edit `scripts/check-invariants.mjs` or `scripts/smoke.mjs`, except the exact edits a task explicitly allows.

**Rule 7. Keep what already works working.**
These work today and must still work after every task:
- `/` renders all sections; `/book` renders the form; `/method` redirects to `/#how-we-work`; `/admin/login` renders.
- The "Questions?" chat button opens the chat panel.
- Every "Book a 20-minute call" button goes to `/book`. The WhatsApp links go to `https://wa.me/917674040571?...`.
- The page is light only (Phase 2). No `dark:` classes, no theme toggle.
- Colours follow the Phase 2 roles: walnut ink (`text-foreground`), sage only on clickable things (`text-sage`, `bg-primary`), amber only on data (`text-data`), pale sage only for surfaces (`bg-surface`, `border-border`). No other hues.

**Rule 8. Prove it by running commands, not by saying so.**
"Should work", "verified" or "looks correct" without command output is a failed task. Every task ends with the **Verification** block (section 2), and you paste the **real, unedited output** into `DECISION_LOG.md`.

**Rule 9. Git.**
- Before starting: `git status` must be clean. If it isn't, stop and ask.
- Work on the branch Chanakya names. **Never** push to `main`, never merge, never deploy, never run `vercel` commands, never force-push.
- One commit per task, with the commit message the task gives.

**Rule 10. Secrets.**
Never write an API key, password or token into any file, command output you paste, or commit. Environment variables are set by Chanakya in the Vercel dashboard or in his local `.env`, never by you.

**Rule 11. Stop and ask. Stop and ask Chanakya, and do nothing else, if:**
- An old string isn't found exactly, or is found a different number of times.
- A file the task names doesn't exist.
- The task depends on a decision (section 3) whose answer is empty.
- The **baseline** (section 2) doesn't match what this file says it should be.
- Any command in the Verification block fails and the cause is not obviously your own edit.
- `npm run check:invariants` reports a new external host, or a banned word you didn't add.
- You think the task needs text, a file or a dependency this plan doesn't give.

Say exactly what you found: file, line, the text, the command and its output.

**Rule 12. The report.** End every task with exactly this, filled in truthfully:

```
Task: <N> — <title>
Status: DONE | STOPPED (reason)
Files changed (git diff --name-only):
  ...
Verification output: pasted in DECISION_LOG.md under "<date>: Phase 3 Task <N>"
  typecheck: exit <code>
  lint: <N> errors, <N> warnings (baseline: 0 errors, 5 warnings)
  check:invariants: <OK | failures>
  build: exit <code>
  smoke: <the final SMOKE line, copied exactly>
Manual checks Chanakya should do: ...
Noticed, not touched: ...
```

---

## 2. Baseline and the verification block

### Setup (once per machine)

```bash
npm ci
npx playwright install chromium     # browser for the smoke test
```

### Verification block (run at the start AND at the end of every task)

```bash
npm run typecheck
npm run lint
npm run check:invariants
npm run build
npm run smoke
```

`npm run smoke` starts the built site on `127.0.0.1:8081` by itself, opens every route at 390px and 1440px with the OS set to dark and to light, scrolls each page, and saves screenshots to `smoke-output/` (git-ignored). Do not start another server on port 8081 first. If it prints `something is already listening on http://127.0.0.1:8081`, an old preview server is still running and would have served an **old build**: stop that server and re-run. Never test against a server you started earlier.

### Known baseline (what the block prints before Task 0)

| Command | Expected result today |
|---|---|
| `npm run typecheck` | exit 0 |
| `npm run lint` | `✖ 5 problems (0 errors, 5 warnings)`, all pre-existing (badge.tsx, button.tsx, admin/index.tsx, api/admin/data.ts, api/admin/login.ts). Leave them. |
| `npm run check:invariants` | `check-invariants: OK (53 files scanned)` (the count can grow as files are added) |
| `npm run build` | exit 0 |
| `npm run smoke` | `SMOKE FAILED: 4 problem(s) across 16 page loads`. All 4 are `✗ 0 <h1> elements, expected exactly 1` on `/admin/login`. **Task 0 fixes this.** After Task 0 the baseline is `SMOKE PASSED: 16/16 page loads`. |

If you see anything else at the start, stop and ask (rule 11).

---

## 3. Decisions (Chanakya fills these in before the tasks that need them)

| ID | Question | Options | Recommended | Answer | Blocks |
|---|---|---|---|---|---|
| D1 | How should `/book` form submissions reach you? **Today they reach nobody** (see Task 1). | (a) Email to your Gmail through Resend (free tier, no domain needed). (b) Remove the form; `/book` keeps only WhatsApp and email buttons. | (a) | | Task 1, Task 6 |
| D1b | The `/book` success message promises a reply "within 24 hours". Can you keep that, including exam weeks? | Keep / change to "within one working day" / change to "within two working days" | Your call | | Task 1 |
| D2 | Grey body text (`--muted-foreground #4a524c`) is cool green-grey next to walnut. Warm it? | Keep `#4a524c` (7.53:1) / warm `#6b5a4e` (6.13:1 on paper, 5.66:1 on pale-sage surfaces) | Warm `#6b5a4e` | | Task 3 |
| D3 | Card edges: sage at 12% is ~1.1:1, so cards keep a faint neutral outline. | Keep neutral outline / make card borders `rgba(135,169,107,0.35)` | Keep | | Task 3 |
| D4 | Approve the plain-language copy in Task 5? Tick each block (5a–5h) you approve; unticked blocks are skipped. | per block | Approve all | | Task 5 |
| D5 | Has the Apex demo (`industrial-packaging-platform.vercel.app`) been fixed to quote in rupees, with no ZMW / Kwacha / Zambian VAT on any screen? (`twin-repos-security-review.md`, Finding 1) | Yes, fixed and I checked every screen / No | — | | Task 5g |
| D6 | Founder block on the homepage: provide (1) the photo file, copied by you to `public/images/founder.jpg`, about 960×1200, black and white; (2) the exact name to show; (3) exactly two lines about you (who you are, where you work from). Antigravity uses them word for word. | Provide / skip for now | Provide when ready | | Task 8 |
| D7 | Turn on Vercel Web Analytics (page views only, no cookies)? You also enable it in Vercel → Project → Analytics. | Yes / No | Yes | | Task 9 |
| D8 | New free subdomain (e.g. `ckbuilds.vercel.app`) added in Vercel → Settings → Domains? Write the exact hostname once it's live. | hostname / not yet | — | | Task 10 |
| D9 | Questions to add to the FAQ (Task 5f). Tick the ones that are true for you. | "Do you build regular websites?" / "Isn't custom software only for big companies?" / "Can you work with a business outside India?" (answer must be yes) | All three, if true | | Task 5f |

---

## 4. Tasks

Each task has: **Why**, **Files**, **Edits** (exact old → new), **Verification**, **Commit message**. If a task is blocked by an empty decision, reply `STOPPED: blocked on D<n>` and stop.

---

### Task 0 — Give `/admin/login` a real heading

**Why:** the page has no `<h1>` (its title is a styled `<div>`), so screen readers get no page heading. It's the only thing failing the smoke test today.

**Files:** `src/routes/admin/login.tsx`

**Edit 0.1** (found exactly once)

Old:
```tsx
          <CardTitle className="font-sans text-3xl font-semibold tracking-tight text-foreground">
            Admin Portal
          </CardTitle>
```
New:
```tsx
          <h1 className="font-sans text-3xl font-semibold leading-snug tracking-tight text-foreground">
            Admin Portal
          </h1>
```

**Edit 0.2** (found exactly once)

Old: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";`
New: `import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";`

**Verification:** the block in section 2. `npm run smoke` must now end with `SMOKE PASSED: 16/16 page loads`.

**Commit:** `fix(a11y): admin login page has an h1`

---

### Task 1 — Make the `/book` form actually reach Chanakya (D1, D1b)

**Why:** `src/routes/api/contact.ts` only writes the lead to the server log (`console.info`), and it doesn't even log the workflow text. It sends no email and stores nothing. Vercel Hobby keeps runtime logs for about an hour. The visitor is told "we'll get back to you within 24 hours" while the lead is effectively lost. This is the most important task in this file.

#### If D1 = (a) Resend email

**Chanakya does first (not the agent):**
1. Sign up at resend.com **with `nagulagamchanakya2211@gmail.com`**. On the free tier without a domain, Resend only delivers to the account's own address, which is exactly what's needed.
2. Create an API key. In Vercel → Project → Settings → Environment Variables add `RESEND_API_KEY` (Production and Preview). For local testing, add it to your own `.env` (git-ignored).
3. Add `RESEND_API_KEY=` (empty value) under a new heading in `.env.example` yourself, or allow the agent to do it (Edit 1.3).

**Files:** `src/routes/api/contact.ts`, `scripts/check-invariants.mjs` (Edit 1.2 only), `.env.example` (Edit 1.3 only), and `src/routes/book.tsx` only if D1b changes the wording.

**Edit 1.1** — replace the **entire contents** of `src/routes/api/contact.ts` with the code below. This exact code was typechecked and linted against this repo when the plan was written. Do not modify it. Do not add the Resend npm package: it uses `fetch`.

```ts
import { createFileRoute } from "@tanstack/react-router";
import { getEnvVar } from "@/lib/env";
import { CONTACT_EMAIL, STUDIO_NAME } from "@/data/studio";

interface ContactPayload {
  name: string;
  emailOrPhone: string;
  workflowDescription: string;
}

const MAX_LENGTH = { name: 200, emailOrPhone: 200, workflowDescription: 4000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DELIVERY_FAILED =
  "The form isn't working right now. Please message us on WhatsApp or email instead.";

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: Partial<ContactPayload>;
        try {
          body = (await request.json()) as Partial<ContactPayload>;
        } catch {
          return json(400, {
            success: false,
            error: "Invalid request payload. Please try again or reach out on WhatsApp.",
          });
        }

        const name = typeof body.name === "string" ? body.name.trim() : "";
        const emailOrPhone = typeof body.emailOrPhone === "string" ? body.emailOrPhone.trim() : "";
        const workflowDescription =
          typeof body.workflowDescription === "string" ? body.workflowDescription.trim() : "";

        if (!name || !emailOrPhone || !workflowDescription) {
          return json(400, {
            success: false,
            error: "Please provide your name, contact information, and workflow description.",
          });
        }

        if (
          name.length > MAX_LENGTH.name ||
          emailOrPhone.length > MAX_LENGTH.emailOrPhone ||
          workflowDescription.length > MAX_LENGTH.workflowDescription
        ) {
          return json(400, {
            success: false,
            error: "That message is too long. Please shorten it, or send it on WhatsApp.",
          });
        }

        const intakeId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
        const apiKey = getEnvVar("RESEND_API_KEY");
        if (!apiKey) {
          console.error("[CK Builds Lead Intake] RESEND_API_KEY is not set; lead NOT delivered", { intakeId });
          return json(503, { success: false, error: DELIVERY_FAILED });
        }

        const text = [
          `Name: ${name}`,
          `Email or WhatsApp: ${emailOrPhone}`,
          "",
          "What quoting or job workflow slows you down?",
          workflowDescription,
          "",
          `Intake ID: ${intakeId}`,
        ].join("\n");

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: `${STUDIO_NAME} website <onboarding@resend.dev>`,
              to: [CONTACT_EMAIL],
              subject: `New inquiry from ${name}`,
              text,
              ...(EMAIL_PATTERN.test(emailOrPhone) ? { reply_to: emailOrPhone } : {}),
            }),
          });
          if (!res.ok) {
            console.error("[CK Builds Lead Intake] Resend rejected the email; lead NOT delivered", {
              intakeId,
              status: res.status,
            });
            return json(502, { success: false, error: DELIVERY_FAILED });
          }
        } catch {
          console.error("[CK Builds Lead Intake] Could not reach Resend; lead NOT delivered", { intakeId });
          return json(502, { success: false, error: DELIVERY_FAILED });
        }

        console.info("[CK Builds Lead Intake] delivered", { intakeId });
        return json(200, {
          success: true,
          intakeId,
          message:
            "Thank you. We have received your inquiry and will review your workflow to get back to you within 24 hours.",
        });
      },
    },
  },
});
```

If D1b is not "Keep", change only the phrase `within 24 hours` in that last message (and the same phrase in `src/routes/book.tsx` if it appears there; search for it) to the exact wording Chanakya chose. Nothing else.

**Edit 1.2** — the one permitted edit to `scripts/check-invariants.mjs`. Old: `  "api.openai.com",` New:
```js
  "api.openai.com",
  "api.resend.com", // /book form email delivery (Phase 3 Task 1)
```

**Edit 1.3** — append to the end of `.env.example`:
```
# ==============================================================================
# Lead delivery for the /book form (Resend, https://resend.com)
# ==============================================================================
RESEND_API_KEY=
```

**Extra verification for this task** (after the block in section 2), with no `RESEND_API_KEY` in your local `.env`:
```bash
npx vite preview --port 8082 --host 127.0.0.1 &   # separate port from the smoke test
sleep 5
curl -s -o /dev/null -w "%{http_code}\n" -X POST http://127.0.0.1:8082/api/contact -H "Content-Type: application/json" -d '{}'
# expect 400
curl -s -w "\n%{http_code}\n" -X POST http://127.0.0.1:8082/api/contact -H "Content-Type: application/json" -d '{"name":"Test","emailOrPhone":"test@test.dev","workflowDescription":"smoke test"}'
# expect 503 and the DELIVERY_FAILED message (no key configured locally)
kill %1
```
Paste both outputs into `DECISION_LOG.md`. **Do not claim an email was delivered.** Only Chanakya can confirm that, after deploying a preview with the key set: he submits the form once and checks his inbox (and spam).

#### If D1 = (b) Remove the form

Stop and ask Chanakya for the exact text of the replacement `/book` page. This plan doesn't contain it.

**Commit:** `fix(book): deliver form submissions by email via Resend; fail honestly when delivery fails`

---

### Task 2 — Security headers and Content-Security-Policy

**Why:** no response from the site sends a CSP or the standard security headers today (checked with `curl -I`). Chanakya's Definition of Done requires them.

**How (tested when this plan was written):** Nitro's `routeRules` writes headers into `.vercel/output/config.json`, which Vercel applies. `vite preview` does **not** send these headers, so `npm run smoke` reads them from `.vercel/output/config.json` and applies them in the browser. A CSP that breaks the page therefore fails the smoke test locally. With exactly the policy below, the smoke run had **zero CSP violations**.

**Files:** `vite.config.ts`

**Edit 2.1** (found exactly once)

Old:
```ts
          nitro({
            preset: "vercel",
          }),
```
New:
```ts
          nitro({
            preset: "vercel",
            routeRules: {
              "/**": {
                headers: {
                  "Content-Security-Policy":
                    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
                  "X-Content-Type-Options": "nosniff",
                  "Referrer-Policy": "strict-origin-when-cross-origin",
                  "X-Frame-Options": "DENY",
                  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
                  "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
                },
              },
            },
          }),
```

Notes for the agent:
- `'unsafe-inline'` in `script-src` is required: TanStack Start inlines its hydration data and the JSON-LD. Do not try to add nonces in this task.
- If a later task embeds Cal.com (`BOOKING_URL`), the CSP will need `frame-src` for that host. That's a separate change Chanakya approves; do not pre-add hosts.
- **If any CSP violation shows up in smoke, do not loosen the policy** (no `*`, no `unsafe-eval`). Stop and ask, with the violation text.

**Extra verification:**
```bash
node -e "const c=require('./.vercel/output/config.json');console.log(JSON.stringify(c.routes.find(r=>r.src==='/(.*)'&&r.headers),null,2))"
```
Paste the output. `npm run smoke` must print `Applying CSP from build output: ...` and end with `SMOKE PASSED`.

**Chanakya after deploying a preview:** `curl -sI https://<preview-url>/ | grep -iE "content-security|x-frame|nosniff|referrer|strict-transport|permissions"` should list all six headers.

**Commit:** `feat(security): CSP and standard security headers via Nitro routeRules`

---

### Task 3 — Visual tells, motion and the chatbot's colours (no copy changes) (D2, D3)

**Why:** the leftovers from `studio-refactor-plan.md` §4.6 and §11.2 that make the page look generated: spaced capital labels, a pill above the H1, cards that lift on hover but can't be clicked, a box inside a card, mono type on things that aren't figures, heavy motion, and sage used on non-clickable chat elements (breaking Phase 2's "sage means clickable" rule).

**This task changes no words.** If an edit would change visible text, other than removing the hero pill (3.3), you're doing it wrong.

**Files:** `src/styles.css`, `src/hooks/use-scroll-animation.ts`, `src/components/portfolio-home.tsx`, `src/components/offer-ladder.tsx`, `src/components/faq-section.tsx`, `src/routes/book.tsx`, `src/components/ui/badge.tsx`, `src/components/mascot/companion.tsx`, `src/components/mascot/companion-chat.tsx`

**3.1 Section labels: no spaced capitals.** Replace every occurrence (expected **7**: portfolio-home ×4, offer-ladder ×1, faq-section ×1, book ×1) of
`text-xs font-semibold uppercase tracking-wider text-muted-foreground`
with
`text-sm font-medium text-muted-foreground`

**3.2 Badges: no spaced capitals.**
- In `src/components/ui/badge.tsx`, old: `text-[11px] font-medium uppercase tracking-wider transition-colors` → new: `text-xs font-medium transition-colors` (found once).
- In `portfolio-home.tsx`, replace both occurrences (expected **2**) of `font-mono text-[11px] uppercase tracking-wider bg-surface text-data border-border` with `text-xs bg-surface text-data border-border`.

**3.3 Remove the pill above the H1** (`portfolio-home.tsx`, found once). Delete these three lines entirely:
```tsx
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-mono text-muted-foreground mb-6 shadow-xs">
            <span>{STUDIO_NAME} · Operational software</span>
          </div>
```
`STUDIO_NAME` is still used elsewhere in the file. Don't touch the import.

**3.4 Cards that aren't links must not lift on hover.** In `src/styles.css` replace this exact block (found once). Note that the `transition:` line alone appears **twice** in the file; the other copy is in `.card-hover-elevate`, so match the whole block.

Old:
```css
.card-specular {
  background-color: #ffffff;
  border: 1px solid var(--border);
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.95),
    0 1px 3px 0 rgba(0, 0, 0, 0.04),
    0 8px 24px -4px rgba(0, 0, 0, 0.06);
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 220ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease;
}

.card-specular:hover {
  transform: translateY(-3px);
  border-color: rgba(31, 101, 59, 0.35);
  box-shadow: 
    inset 0 1px 0 0 #ffffff,
    0 0 20px -4px rgba(31, 101, 59, 0.12),
    0 16px 40px -8px rgba(0, 0, 0, 0.10);
}
```
(The `box-shadow: ` lines end with a trailing space in the file.)

New:
```css
.card-specular {
  background-color: #ffffff;
  border: 1px solid var(--border);
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.95),
    0 1px 3px 0 rgba(0, 0, 0, 0.04),
    0 8px 24px -4px rgba(0, 0, 0, 0.06);
}
```
In `portfolio-home.tsx` replace both occurrences (expected **2**) of ` transition-transform duration-500 group-hover:scale-[1.02]` with an empty string (note the leading space).

**3.5 No box inside a card.** In `portfolio-home.tsx`, replace both occurrences (expected **2**) of
`rounded-xl border border-border/60 bg-secondary/40 p-4 text-xs sm:text-sm text-foreground/90 space-y-1.5`
with
`border-l-2 border-border pl-4 text-xs sm:text-sm text-foreground/90 space-y-1.5`

**3.6 Mono type only for figures.**
- `portfolio-home.tsx`: `<p className="mt-4 text-xs sm:text-sm text-muted-foreground font-mono">` → `<p className="mt-4 text-xs sm:text-sm text-muted-foreground">` (once)
- `portfolio-home.tsx`: `<p className="mt-3 text-center sm:text-left font-mono text-xs text-muted-foreground">` → `<p className="mt-3 text-center sm:text-left text-xs text-muted-foreground">` (once)
- `portfolio-home.tsx`: both (expected **2**) `inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sage hover:underline` → `inline-flex items-center gap-1.5 text-xs font-medium text-sage hover:underline`
- `portfolio-home.tsx`: both (expected **2**) `pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground border-t border-border/60` → `pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground border-t border-border/60`
- `portfolio-home.tsx`: `<div className="flex flex-wrap items-center gap-4 text-xs font-mono">` → `<div className="flex flex-wrap items-center gap-4 text-xs">` (once)
- `book.tsx`: `<div className="flex items-center gap-4 font-mono text-[11px]">` → `<div className="flex items-center gap-4 text-xs">` (once)
- `offer-ladder.tsx`: all (expected **3**) `<span className="text-xs font-mono text-muted-foreground">` → `<span className="text-xs text-muted-foreground">`
- **Keep** `font-mono` on: the step numbers `01/02/03` (`font-mono text-xs font-bold text-data`), `QUOTE READY`, and everything inside the hero mock quote card. Those are figures/data.

**3.7 Calmer reveal motion, and respect reduced motion.**
- In `portfolio-home.tsx`, `offer-ladder.tsx`, `faq-section.tsx`: replace every `duration-700` (expected **6** total: 4 + 1 + 1) with `duration-500`, and every `"opacity-0 translate-y-8"` (expected **6** total) with `"opacity-0 translate-y-3"`.
- In `src/hooks/use-scroll-animation.ts`, old (found once):
```ts
    const element = ref.current;
    if (!element) return;

    const observer
```
new:
```ts
    const element = ref.current;
    if (!element) return;

    // No reveal animation for people who asked for less motion, or old browsers.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer
```

**3.8 Chatbot: sage only on clickable things, no heavy black shadows.** In `src/components/mascot/companion-chat.tsx` (each found once):

| Old | New |
|---|---|
| `<span className="text-sage mt-0.5">•</span>` | `<span className="text-muted-foreground mt-0.5">•</span>` |
| `rounded-2xl border border-border bg-card shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-xl rise-in` | `rounded-2xl border border-border bg-card shadow-xl rise-in` |
| `<div className="relative flex size-8 items-center justify-center rounded-full border border-sage/40 bg-card">` | `<div className="relative flex size-8 items-center justify-center rounded-full border border-border bg-surface">` |
| `<MessageCircle className="size-4 text-sage" />` | `<MessageCircle className="size-4 text-foreground" />` |
| `<span className="flex size-2 rounded-full bg-sage animate-pulse" />` | *(delete the line)* |
| `rounded-full bg-sage/20 border border-sage/30 text-sage mt-0.5` | `rounded-full bg-surface border border-border text-foreground mt-0.5` |
| `? "bg-sage text-sage-foreground font-medium rounded-tr-none"` | `? "bg-surface border border-border text-foreground font-medium rounded-tr-none"` |
| `<RefreshCw className="size-3.5 animate-spin text-sage" />` | `<RefreshCw className="size-3.5 animate-spin text-muted-foreground" />` |

**Keep** sage on: the inline link (`text-sage font-medium underline`), the quick-question buttons, the input focus border and the send button. Those are clickable.

In `src/components/mascot/companion.tsx` (once): `shadow-[0_0_25px_rgba(0,0,0,0.3)] backdrop-blur-md` → `shadow-md`.
Inside `companion.tsx`, `<MessageCircle className="size-4 text-sage" />` **stays** sage: it's inside the button.

**3.9 D2 (only if the answer is "warm"):** in `src/styles.css`, `  --muted-foreground: #4a524c;` → `  --muted-foreground: #6b5a4e;` (once).
**3.10 D3 (only if the answer is "sage borders"):** in `src/styles.css`, in the `.card-specular` rule, `  border: 1px solid var(--border);` → `  border: 1px solid rgba(135, 169, 107, 0.35);` (once in that rule).

**3.11 Remove unused CSS.** First run, and paste the output:
```bash
grep -rnE "animate-particle-float|animate-marquee|animate-bob|animate-wave|animate-spin-slow" src --include=*.tsx
```
**Only if it prints nothing**, delete from `src/styles.css`: the `@keyframes particle-float`, `@keyframes marquee`, `@keyframes bob`, `@keyframes wave`, `@keyframes spin-slow` blocks and the `.animate-particle-float`, `.animate-marquee`, `.animate-bob`, `.animate-wave`, `.animate-spin-slow` rules. Keep `rise-in` (used). If grep prints anything, skip 3.11 and note it.

**Verification:** section 2 block. Then compare `smoke-output/home-1440-light.png` and `home-390-light.png` against the previous run, and list in the report every visual difference you see. **Text must be identical** except the removed hero pill.

**Commit:** `style: remove generated-UI tells, calmer motion, chatbot follows colour roles`

---

### Task 4 — Fix nothing; measure (web quality and accessibility audit)

**Why:** Chanakya's Definition of Done needs a web-quality and accessibility pass on `/` and one inner page. This task **only measures and reports**; it changes no product code.

**Files:** `DECISION_LOG.md` only.

**Steps:**
```bash
npm run build
npx vite preview --port 8082 --host 127.0.0.1 &
sleep 5
npx --yes lighthouse@12 http://127.0.0.1:8082/ --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=smoke-output/lh-home.json --chrome-flags="--headless=new" --quiet
npx --yes lighthouse@12 http://127.0.0.1:8082/book --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=smoke-output/lh-book.json --chrome-flags="--headless=new" --quiet
node -e "for (const f of ['lh-home','lh-book']) { const r=require('./smoke-output/'+f+'.json'); console.log(f, Object.fromEntries(Object.entries(r.categories).map(([k,v])=>[k,Math.round(v.score*100)]))); for (const a of Object.values(r.audits)) if (a.score!==null && a.score<0.9 && a.scoreDisplayMode==='binary') console.log('  FAIL', a.id, '-', a.title); }"
kill %1
```
(If `npx lighthouse` can't find Chrome, set `CHROME_PATH` to your Chrome binary. Do not install anything else.)

Paste the printed scores and the full FAIL list into `DECISION_LOG.md`. Then propose fixes **in the report only**, one line each, with file and reason. Chanakya decides which become a follow-up task. Scores run against `vite preview` on a laptop: say so, and don't present them as production field data.

**Commit:** `docs: Lighthouse and a11y audit of / and /book (Phase 3 Task 4)`

---

### Task 5 — Plain-language copy (D4; D5 for 5g; D9 for 5f)

**Why:** the copy still talks like an engineer to a plant owner ("CPQ engines", "PostgreSQL RLS", "deterministic", "multi-tenant", "What Was Engineered"). These replacements keep every claim the site already makes and add none. Do **only** the blocks Chanakya ticked in D4.

**Files:** `src/components/portfolio-home.tsx`, `src/components/offer-ladder.tsx`, `src/data/faqs.ts`, `src/routes/__root.tsx`, `public/llms.txt`

Every row: the old string is found **exactly once** unless the row says otherwise. Replace only the text shown. Do not change surrounding markup.

**5a. Hero** (`portfolio-home.tsx`)

| Old | New |
|---|---|
| `Quotes, pricing, and operations shouldn't live in WhatsApp and spreadsheets. We build CPQ engines, stage-locked workflows, and internal tools around your rules.` | `Quotes, pricing and jobs shouldn't live in WhatsApp and spreadsheets. We build the quoting and job software your business runs on, around your own rates and rules.` |
| `First call is free · Fixed quotes scoped to your problem size · 100% code ownership` | `The first call is free. You get a fixed quote before any build starts, and you own the code.` |
| `You keep the repo · deployed on your cloud` | `Illustration based on our Apex Packaging reference build.` |

**5b. Work section** (`portfolio-home.tsx`)

| Old | New |
|---|---|
| `Systems Built & Operating` | `Our work` |
| `Production systems engineered around real business constraints: one live multi-tenant SaaS product and one industrial manufacturing CPQ reference build.` | `Trelio, a product we built and run ourselves, and Apex Packaging, a reference build of a quoting system for a label converter.` |
| `Studio product · live` | `Our product, live` |
| `Trelio — Milestone Authorization & Client Portal` | `Trelio — client portal with payment-locked stages` |
| `A multi-tenant client portal and payment authorization platform for creative studios and service firms.` | `A client portal for studios and service firms. Each project stage stays locked until the client approves and pays.` |
| `What Was Engineered:` (found **2** times; replace both) | `What we built:` |
| `Built the authorization-before-execution engine, milestone escrow stage locks, immutable audit ledger, and multi-tenant billing so work never runs ahead of payment.` | `Stages that unlock only after client approval and payment, a record of every approval that can't be edited afterwards, and billing for many studios on one system.` |
| `<span>Stack: React · Node.js · PostgreSQL RLS · Stripe/Razorpay</span>` | *(delete this whole line)* |
| `<span>Open Live Platform ↗</span>` | `<span>Open trelio.in ↗</span>` |
| `Reference build · industrial manufacturing` | `Reference build (demo company)` |
| `Apex Packaging — Industrial CPQ & Estimating Suite` | `Apex Packaging — quoting for a label converter` |
| `Configure, Price, Quote (CPQ) software engineered to the exact manufacturing floor specs of an industrial label converter.` | `A reference build: quoting software set up around a label converter's real press and material specs. Apex is a demo company, not a client.` |
| `Replaced multi-sheet spreadsheet chains with floor-accurate FINAT 1–8 roll unwind calculators, substrate costing, and automated PDF job spec generation.` | `Turns a chain of spreadsheets into one screen: roll and rewind calculations, material costs, and a PDF job sheet for the floor.` |
| `<span>Stack: React · TypeScript · PostgreSQL RLS · CPQ Math Engine</span>` | *(delete this whole line)* |
| `<span>View Reference Build ↗</span>` | `<span>Open the demo ↗</span>` |
| `alt="Trelio Milestone Authorization and Client Portal Dashboard Preview"` | `alt="Trelio client portal: project stages and approvals"` |
| `alt="Apex Packaging Industrial CPQ and Estimating Suite Preview"` | `alt="Apex Packaging reference build: quoting screen"` |

After deleting the two `Stack:` lines, the `<div>` that held them still holds the button. Leave the `<div>` as it is.

**5c. What we build** (`portfolio-home.tsx`)

| Old | New |
|---|---|
| `We specialize in operational systems where revenue, accuracy, or delivery depends on complex business rules.` | `Software for businesses where money, accuracy or delivery depends on your own rules.` |
| `Custom Quoting & CPQ Engines` | `Quoting systems` |
| `Deterministic pricing software that models your actual material yields, setup times, volume tiers, and floor geometry into instant, error-free customer quotes.` | `Your rates, material use, setup time and volume breaks, turned into a quote in seconds and worked out the same way every time.` |
| `Operational Workflows & Stage Locks` | `Approval and payment steps` |
| `Digital gates that protect your team from scope creep and unpaid work. Work, design revisions, or shipping only unlock once milestone sign-off and payments clear.` | `Work, revisions or shipping move to the next stage only after the customer signs off or pays, so work doesn't run ahead of approval.` |
| `Internal Dashboards & Client Portals` | `Dashboards and client portals` |
| `Centralized, role-based tools that replace messy WhatsApp chains and fragmented email threads with clean tracking for clerks, managers, and clients.` | `One place where staff, managers and customers see where each job stands, instead of searching WhatsApp and email.` |

**5d. Working with us** (`portfolio-home.tsx`)

| Old | New |
|---|---|
| `Direct Partnership & Ownership` | `Working with us` |
| `Direct to Builders` | `You talk to the builder` |
| `100% Code & Cloud IP` | `You own everything` |
| `You receive complete repository, database schema, and cloud deployment configs. Everything runs on your custom domain with zero vendor lock-in.` | `You get the code, the database and the hosting accounts. It runs on your own domain, and you can take it anywhere.` |
| `Problem-Sized Scope` | `Sized to the problem` |
| `We don't sell bloated 50-page ERPs. We solve the specific operational bottleneck that costs your business time or revenue.` | `We don't sell a giant ERP. We fix the one bottleneck that costs you the most time or money.` |

**5e. How we work** (`offer-ladder.tsx`)

| Old | New |
|---|---|
| `<span className="text-xs text-muted-foreground">Problem-sized</span>` (after Task 3; before Task 3 it has `font-mono`) | `<span className="text-xs text-muted-foreground">Before any build</span>` |
| `<span className="text-xs text-muted-foreground">100% Code Handover</span>` (same note) | `<span className="text-xs text-muted-foreground">Yours to keep</span>` |
| `You leave with: A clear technical specification, defined deliverables, and guaranteed fixed pricing.` | `You leave with: a written scope, what you'll get, and a fixed quote.` |
| `We engineer the system around your real data, test it on real jobs with your team, and deploy it to your cloud accounts.` | `We build it around your real data, your team tries it on real jobs, and it goes live on your own accounts.` |
| `You leave with: The live software on your custom domain, and 100% repository and database ownership.` | `You leave with: the system live on your domain, and the code and data in your name.` |

**5f. FAQ** (`src/data/faqs.ts`). The FAQ structured data in `__root.tsx` is generated from this file, so don't edit `__root.tsx` for this.

Replace (once): `Generic off-the-shelf software works fine for basic linear sales funnels, but breaks down when you have proprietary pricing logic, custom machine specs, or staged approval gates. We build exact-fit systems tailored to your rules, with zero recurring per-seat subscription taxes.`
with: `Off-the-shelf software works for simple sales. It breaks down when your pricing has its own logic, your machines have their own specs, or work moves through approval stages. We build around your rules, and you don't pay a monthly fee per user.`

Then, **only for the questions ticked in D9**, add these objects at the end of the `faqs` array (after the last `},`, before `];`), in this order, exactly:

```ts
  {
    question: "Do you build regular websites?",
    answer:
      "Not as our focus. If you need a simple brochure site, we'll point you to someone faster and cheaper.",
  },
  {
    question: "Isn't custom software only for big companies?",
    answer:
      "It used to be. Today a small team can build a system around how your business works, so it's within reach for a business your size.",
  },
  {
    question: "Can you work with a business outside India?",
    answer:
      "Yes. Calls happen over video, and the software runs on your own accounts wherever you are.",
  },
```

**5g. Apex demo links** (D5). If D5 = **No**: in `portfolio-home.tsx` delete the two links to `https://industrial-packaging-platform.vercel.app` (the small "Live demo" `<a>` block, and the `<Button asChild ...>` block around `Open the demo ↗` / `View Reference Build ↗`), and nothing else. If D5 = **Yes**: do nothing. Either way, leave the JSON-LD in `__root.tsx` alone.

**5h. Meta tags and `llms.txt`**
- `__root.tsx`, old: `const APP_DESC = "CK Builds designs and engineers custom operational software, CPQ platforms, and workflow systems for growing businesses. Talk directly to the people who build it.";`
  new: `const APP_DESC = "CK Builds builds quoting and job software around your own rates and rules, for businesses that run on quotes and approvals. Talk directly to the people who build it.";`
- `__root.tsx`, old: `{ name: "keywords", content: "CK Builds, Quote-to-job systems, industrial CPQ platform, packaging converting quoting, FINAT unwind standards, milestone authorization SaaS, Trelio, operational software" },`
  new: `{ name: "keywords", content: "CK Builds, quoting software, job tracking software, approval workflow software, label printing quoting, Trelio" },`
- `public/llms.txt`: replace these lines (each once):

| Old | New |
|---|---|
| `> CK Builds is a boutique software studio that designs and builds custom quoting engines (CPQ), stage-locked operational workflows, and internal systems for growing businesses.` | `> CK Builds is a small software studio. We build quoting and job software around a business's own rates and rules, for businesses whose work runs on quotes and approvals.` |
| `- Custom Quoting & CPQ Engines: Deterministic pricing logic modeling floor geometry, material yields, and volume tiers into instant quotes.` | `- Quoting systems: rates, material use, setup time and volume breaks turned into a quote in seconds, worked out the same way every time.` |
| `- Operational Workflows & Stage Locks: Milestone authorization gates preventing unpaid work and scope creep.` | `- Approval and payment steps: work moves to the next stage only after the customer signs off or pays.` |
| `- Internal Dashboards & Client Portals: Centralized operational tools replacing spreadsheets and WhatsApp threads.` | `- Dashboards and client portals: one place where staff, managers and customers see where each job stands.` |
| `3. Build & Handover: Direct engineering around real data, staff stress testing, and live deployment. The client receives 100% repository and database ownership.` | `3. Build & Handover: built around the client's real data, tried by their team on real jobs, then live on their own accounts. The client owns the code and the data.` |
| `- Apex Packaging & Converting: A reference build demonstrating an industrial CPQ estimating platform for packaging converters. Source: https://github.com/Chanakya2006gt/Industrial-packaging-platform` | `- Apex Packaging & Converting: a reference build (demo company, not a client) of a quoting system for a label converter. Source: https://github.com/Chanakya2006gt/Industrial-packaging-platform` |

**Do not** edit `src/routes/api/chat.ts`. The chatbot keeps its current wording. Chanakya will decide separately whether to align it.

**Extra verification:** paste the output of
```bash
grep -rnE "CPQ|RLS|multi-tenant|Deterministic|engineered|Engineered|escrow|immutable" src/components src/data/faqs.ts public/llms.txt
```
Expected: exactly one hit, the code comment `{/* Card 2: Apex Packaging CPQ */}` in `portfolio-home.tsx` (comments aren't visible; leave it). Anything else means a row was missed: list it in the report.

**Commit:** `copy: plain-language rewrite of homepage, FAQ, meta and llms.txt (approved blocks: <list>)`

---

### Task 6 — Privacy page (after Task 1; D1)

**Why:** `/book` collects a name, an email or phone number and a description, and the chatbot sends messages to OpenAI. A short, honest privacy page is needed once data is collected (`studio-refactor-plan.md` §7.1).

**Files:** `src/routes/privacy.tsx` (new), `src/components/portfolio-home.tsx` (footer link), `src/routes/book.tsx` (footer link), `public/sitemap.xml`, `scripts/smoke.mjs` (the one permitted edit below)

**6.1** Create `src/routes/privacy.tsx`. Base it on the structure of `src/routes/book.tsx`: same header with the "Back to {STUDIO_NAME}" link, same `<main id="main-content" className="mx-auto max-w-2xl px-5 py-12 sm:py-20 w-full">`, same footer. Use **no new components or styles**. Head: `{ title: \`Privacy — ${STUDIO_NAME}\` }` and `{ name: "description", content: "What the CK Builds website collects, why, and how to have it deleted." }`. Exactly one `<h1>`: `Privacy`. Body, verbatim, as `<h2>` + `<p>` pairs (paragraph text exactly as written; `{CONTACT_EMAIL}` is the constant from `@/data/studio`, rendered as a `mailto:` link with `text-sage underline`):

- **What we collect** — `If you use the form on the booking page, we receive your name, your email or WhatsApp number, and what you write about your workflow. If you use the "Questions?" chat, we receive the messages you type there.`
- **Why** — `Only to reply to you and to understand whether we can help. We don't sell or share it for marketing.`
- **Where it goes** — `Form submissions are sent to our email inbox through Resend, an email delivery service. Chat messages are sent to OpenAI to generate the answers. The site is hosted on Vercel, which keeps short-lived technical logs.`
  (If D1 = (b), omit the first sentence.)
- **Cookies** — `This site doesn't use advertising or tracking cookies.` (If Task 9 is done with D7 = Yes, add: `We count page views with Vercel Web Analytics, which doesn't use cookies.`)
- **Deleting your data** — `Email {CONTACT_EMAIL} and we'll delete what we hold about you.`

**6.2 Footer links.** In `portfolio-home.tsx` footer, old: `<a href="/book" className="hover:text-foreground transition-colors">Book a call</a>` → new: the same line, then on the next line `<a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>`. In `book.tsx` footer, old: `<Link to="/" hash="faq" className="hover:text-foreground transition-colors">FAQ</Link>` → new: the same line, then `<Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>`.

**6.3 Sitemap.** In `public/sitemap.xml` add a `<url>` block for `https://chanakya-portfolio-orcin.vercel.app/privacy` after the `/book` block, copying the `/book` block's format, with `<priority>0.3</priority>` and `<lastmod>` = today's date.

**6.4 Permitted edit to `scripts/smoke.mjs`:** old: `  { path: "/admin/login", expectPath: "/admin/login" },` → new: that line followed by `  { path: "/privacy", expectPath: "/privacy" },`. Smoke then reports `20/20`.

**Commit:** `feat: privacy page, linked from footers and sitemap`

---

### Task 7 — New link-preview image (`public/og.jpg`)

**Why:** WhatsApp and LinkedIn previews still show the old dark "CHANAKYA / BUILDER" card. It must show CK Builds on paper. **No AI image generation.** The image is rendered from HTML, so it's exact and repeatable.

**Files:** `scripts/og/og.html` (new), `scripts/og/render-og.mjs` (new), `public/og.jpg` (replaced)

**7.1** Create `scripts/og/og.html` with exactly:
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600&display=swap" rel="stylesheet">
<style>
  html, body { margin: 0; width: 1200px; height: 630px; }
  body { background: #f8f7f4; color: #5a3e2b; font-family: "IBM Plex Sans", sans-serif;
         display: flex; flex-direction: column; justify-content: center; padding: 0 96px; box-sizing: border-box; }
  .mark { font-size: 32px; font-weight: 600; }
  .mark span { color: #1f653b; }
  h1 { font-size: 76px; line-height: 1.08; letter-spacing: -0.03em; font-weight: 600; margin: 28px 0 0; max-width: 900px; }
  .rule { width: 96px; height: 4px; background: #1f653b; margin-top: 40px; }
</style>
</head>
<body>
  <div class="mark">CK Builds<span>.</span></div>
  <h1>We build software that runs businesses.</h1>
  <div class="rule"></div>
</body>
</html>
```

**7.2** Create `scripts/og/render-og.mjs` with exactly:
```js
// Renders scripts/og/og.html to public/og.jpg (1200x630). Run: node scripts/og/render-og.mjs
import { chromium } from "playwright";
const html = new URL("./og.html", import.meta.url).href;
const out = new URL("../../public/og.jpg", import.meta.url).pathname;
const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH } : {},
);
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, type: "jpeg", quality: 90 });
await browser.close();
console.log("wrote", out);
```

**7.3** Run `node scripts/og/render-og.mjs`. Open `public/og.jpg` and describe it in the report. It must be exactly 1200×630: run `node -e "const b=require('fs').readFileSync('public/og.jpg');let i=2;while(i<b.length){const m=b[i+1],l=b.readUInt16BE(i+2);if(m>=0xc0&&m<=0xc3){console.log(b.readUInt16BE(i+7)+'x'+b.readUInt16BE(i+5));break}i+=2+l}"` and paste the output.

If the H1 in `src/components/portfolio-home.tsx` is no longer `We build software that runs businesses.`, stop and ask. The image must match the live H1.

**Commit:** `feat(seo): render og.jpg from HTML in the light palette`

---

### Task 8 — Founder block (D6)

**Blocked until D6 has all three items:** the photo at `public/images/founder.jpg` (Chanakya copies it; the agent never edits, generates, upscales or crops images), the exact name, and the exact two lines.

**Files:** `src/components/portfolio-home.tsx`

Inside `function Standards()`, directly after the closing `</div>` of the three-card grid (the `<div className="mt-10 grid gap-6 sm:grid-cols-3">` block), add:

```tsx
      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
        <img
          src="/images/founder.jpg"
          alt="<NAME FROM D6>"
          width={160}
          height={200}
          className="h-[200px] w-[160px] rounded-2xl border border-border object-cover"
          loading="lazy"
        />
        <div className="max-w-md">
          <p className="text-base font-semibold text-foreground"><NAME FROM D6></p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed"><LINE 1 FROM D6></p>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed"><LINE 2 FROM D6></p>
        </div>
      </div>
```

Replace the `<…>` placeholders with D6's text **verbatim**. If any is missing, stop.

**Commit:** `feat: founder block in "Working with us"`

---

### Task 9 — Page-view analytics (D7 = Yes)

**Blocked unless D7 = Yes.** This is the only task allowed to change `package.json` / `package-lock.json`.

**Files:** `package.json`, `package-lock.json`, `src/routes/__root.tsx`

1. `npm install @vercel/analytics` (no other packages). Paste the resulting `package.json` diff.
2. In `__root.tsx` add `import { Analytics } from "@vercel/analytics/react";` after the line `import { Toaster } from "sonner";`.
3. Old: `          <Toaster position="bottom-right" theme="light" />` → new: that line, then `          <Analytics />` on the next line.
4. The script loads from `/_vercel/insights/script.js` on the same origin, so the Task 2 CSP needs no change. If smoke shows a CSP violation, stop and ask.
5. If Task 6 is done, add the analytics sentence to the Cookies paragraph of `/privacy` (text in Task 6.1). That's allowed in this task.

Locally the script 404s (it only exists on Vercel). If that shows up as a smoke console error, stop and ask. Don't hide it.

**Commit:** `feat: Vercel Web Analytics (page views only)`

---

### Task 10 — Move to the new subdomain (D8)

**Blocked until D8 holds a hostname that already serves the site.** Chanakya adds the domain in Vercel and keeps the old one redirecting.

**Files:** `src/data/studio.ts` (only the `SITE_URL` line), `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`, `scripts/check-invariants.mjs` (only adding the new host to `ALLOWED_HOSTS`)

Replace every `https://chanakya-portfolio-orcin.vercel.app` with `https://<D8 hostname>` in exactly those files. Then `grep -rn "chanakya-portfolio-orcin" src public` must print nothing. Paste it.

**Commit:** `chore: canonical URL is now <D8 hostname>`

---

### Not in this plan (needs Chanakya first)

- **PrintFast case study and testimonial.** Only after the handover and written permission. The agent must never write a testimonial, a client quote or an outcome number. Chanakya supplies the exact words. `check-invariants` blocks the word "testimonial" until he adds an exemption.
- **Cal.com embed on `/book`.** Needs the real booking link in `BOOKING_URL`, plus a CSP `frame-src` change.
- **Chatbot wording** (`api/chat.ts`), to align with Task 5's copy.
- **Lint warnings** (5, pre-existing).

---

## 5. DECISION_LOG.md entry format (every task)

```
## <YYYY-MM-DD>: Phase 3 Task <N> — <title>

### What changed and why
- <one line per edit, naming the file>

### Commands run (exact, in order)
<each command>

### Output
<paste the real output of the verification block — the full smoke output, not a summary>

### Routes checked
<the route/width/scheme lines from smoke>

### Not done / noticed
- ...
```
