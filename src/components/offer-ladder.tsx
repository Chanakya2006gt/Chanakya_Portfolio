import React from "react";
import { CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Clock, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function OfferLadder() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="offers"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Productized Engagements</p>
      </div>

      <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Fixed-Scope Systems Sprints
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            Engagements run from ₹40,000 for a scoping sprint to ₹6L for a full workflow build. There is almost always a rung that fits.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Badge variant="outline" className="border-emerald-600/30 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-500/10 font-mono text-xs px-3 py-1">
            <span className="size-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse inline-block" />
            2 Sprints / Month Capacity
          </Badge>
        </div>
      </div>

      {/* 3-Tier Offer Ladder Grid */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
        {/* RUNG 0: Scope & Proof (Entry Rung - Highlighted) */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border-2 border-emerald-600/40 dark:border-emerald-500/40 bg-gradient-to-b from-card via-card to-emerald-500/5 shadow-lg">
          <div className="absolute -top-3 left-6">
            <Badge className="bg-emerald-600 text-white font-semibold text-[11px] px-2.5 py-0.5 shadow-sm">
              Recommended Entry
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between pt-1">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Rung 0 · Entry Scoping</p>
                <h3 className="font-serif text-2xl text-foreground mt-0.5">Scope & Proof</h3>
              </div>
            </div>

            <div className="border-y border-border/60 py-3.5 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono tracking-tight text-foreground">₹40,000</span>
                <span className="text-xs text-muted-foreground font-mono">fixed</span>
              </div>
              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                <Sparkles className="size-3 shrink-0" />
                100% credited against full sprint
              </p>
              <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5 pt-1">
                <Clock className="size-3 shrink-0" />
                3 Business Days Turnaround
              </p>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              De-risks your project before committing to a full build. You receive exact architecture and a working deployed screen.
            </p>

            {/* Deliverables */}
            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold">Deliverables Included:</p>
              <ul className="space-y-2 text-xs text-foreground/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Written Workflow Specification</strong> (States, rules & out-of-scope bounds)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Data Model & Architecture Sketch</strong> (PostgreSQL schemas & RLS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>1 Deployed Working Screen</strong> (Live clickable URL you can test)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>10-Minute Loom Walkthrough</strong> explaining technical trade-offs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Guaranteed Fixed Quote</strong> for the full 15-day sprint</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-border/60">
            <Button asChild className="w-full btn-sage-glow rounded-xl font-semibold shadow-md active:scale-[0.98] transition-all">
              <a href="#contact">
                <span>Book a Scope & Proof</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </Card>

        {/* RUNG 1: 15-Day Systems Sprint (Main Engagement) */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-indigo">Rung 1 · Full Build</p>
                <h3 className="font-serif text-2xl text-foreground mt-0.5">15-Day Systems Sprint</h3>
              </div>
            </div>

            <div className="border-y border-border/60 py-3.5 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono tracking-tight text-foreground">₹3.5L – ₹6.0L</span>
                <span className="text-xs text-muted-foreground font-mono">fixed</span>
              </div>
              <p className="text-xs text-muted-foreground">
                One workflow (Quotes/CPQ, Approvals, or Payments)
              </p>
              <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5 pt-1">
                <Clock className="size-3 shrink-0 text-indigo" />
                15 Business Days to Staging & Production
              </p>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Complete operational software built, tested, security-hardened, and documented.
            </p>

            {/* Deliverables */}
            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold">Deliverables Included:</p>
              <ul className="space-y-2 text-xs text-foreground/90">
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                  <span><strong>Production Workflow Deployed</strong> on client custom domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                  <span><strong>Automated Test Suite</strong> covering every state transition</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                  <span><strong>Security Hardening Pass</strong> (Postgres RLS, HMAC, sanitization)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                  <span><strong>Complete Repository Handover</strong> + documented README & specs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                  <span><strong>14 Days Post-Launch Warranty</strong> for immediate bug fixes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-border/60">
            <Button asChild variant="outline" className="w-full rounded-xl border-border/80 hover:border-indigo hover:text-indigo font-semibold shadow-sm active:scale-[0.98] transition-all">
              <a href="#contact">
                <span>Inquire for Sprint</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </Card>

        {/* RUNG 2: Harden & Care (Post-Sprint Retainer) */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">Rung 2 · Retainer</p>
                <h3 className="font-serif text-2xl text-foreground mt-0.5">Harden & Care</h3>
              </div>
            </div>

            <div className="border-y border-border/60 py-3.5 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono tracking-tight text-foreground">₹20k – ₹35k</span>
                <span className="text-xs text-muted-foreground font-mono">/ month</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Optional post-launch care & priority SLA
              </p>
              <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5 pt-1">
                <ShieldCheck className="size-3 shrink-0 text-amber-800 dark:text-amber-400" />
                Direct priority engineer access
              </p>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Keeps your operational software running with zero downtime, dependency updates, and priority bug resolution.
            </p>

            {/* Deliverables */}
            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold">Deliverables Included:</p>
              <ul className="space-y-2 text-xs text-foreground/90">
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Monthly Maintenance Allowance</strong> for small tweaks & updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Priority SLA Response</strong> on operational blockers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Security Patching & Upgrades</strong> for dependencies & databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Authorization-Before-Execution Rule</strong>: work pauses if invoice unpaid</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-border/60">
            <Button asChild variant="outline" className="w-full rounded-xl border-border/80 hover:text-amber-800 dark:hover:text-amber-400 font-semibold shadow-sm active:scale-[0.98] transition-all">
              <a href="#contact">
                <span>Ask About Care</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>

      {/* Fit & Qualification Callout */}
      <div className="mt-10 rounded-2xl border border-border/70 bg-secondary/40 p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-800 dark:text-emerald-400" />
              <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">A Scope & Proof is a good fit if:</h4>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 dark:text-emerald-400 font-bold">•</span>
                <span>You have an operational workflow currently held together by spreadsheets, WhatsApp, or manual follow-ups.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 dark:text-emerald-400 font-bold">•</span>
                <span>You want a guaranteed, fixed quote and architecture spec before committing to a full build.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-800 dark:text-emerald-400 font-bold">•</span>
                <span>You would rather inspect 1 real working screen than sit through a vague slide deck presentation.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-4 text-amber-800 dark:text-amber-400" />
              <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">Client-Side Sprint Constraints:</h4>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              To guarantee 15-day delivery: <strong>One workflow per sprint. Maximum two decision-makers.</strong> API keys, branding assets, and domain DNS provided by Day 2. Visual redesigns outside agreed tokens and multi-region DB clustering are quoted separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
