import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Clock, Check, ShieldCheck, Factory, Briefcase, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function OfferLadder() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeDoor, setActiveDoor] = useState<"plant" | "agency">("plant");

  return (
    <section
      id="pricing"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quote-to-Job Systems</p>
      </div>

      <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Fixed-price technical engagements
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            From a 3-day diagnosis to a complete workflow built and handed over in 15 days.
          </p>
        </div>

        <Badge variant="outline" className="border-emerald-600/30 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-500/10 font-mono text-xs px-3 py-1 self-start md:self-auto shrink-0">
          <span className="size-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse inline-block" />
          Taking 2 builds a month · booking the next slot
        </Badge>
      </div>

      {/* Two Doors Section (Plant vs Agency) */}
      <div className="mt-12 rounded-2xl border border-border/80 bg-secondary/40 p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
            Two Types of Workflows Built:
          </p>
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-card border border-border/70 text-xs">
            <button
              type="button"
              onClick={() => setActiveDoor("plant")}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                activeDoor === "plant"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For Plants & Converting
            </button>
            <button
              type="button"
              onClick={() => setActiveDoor("agency")}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                activeDoor === "agency"
                  ? "bg-indigo text-white shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For Agencies & Studios
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Door 1: Manufacturing & Converting */}
          <div
            className={`rounded-xl border p-5 transition-all ${
              activeDoor === "plant"
                ? "border-emerald-600/40 bg-card shadow-sm"
                : "border-border/60 bg-card/50 opacity-75 hover:opacity-100"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Factory className="size-4.5 text-emerald-800 dark:text-emerald-400" />
              <h3 className="font-serif text-lg font-semibold text-foreground">Plants & Converting Lines</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>The Problem:</strong> Quotes die in Excel and WhatsApp; roll specs and core sizes get mis-entered.
            </p>
            <p className="text-xs sm:text-sm text-foreground/90 font-medium mt-2 leading-relaxed">
              <strong>The Result:</strong> A quoting path a plant clerk can finish in one pass — calculating linear meters, substrate weights, and rates directly from the specs your production floor runs.
            </p>
          </div>

          {/* Door 2: Agencies & Production Studios */}
          <div
            className={`rounded-xl border p-5 transition-all ${
              activeDoor === "agency"
                ? "border-indigo/40 bg-card shadow-sm"
                : "border-border/60 bg-card/50 opacity-75 hover:opacity-100"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="size-4.5 text-indigo" />
              <h3 className="font-serif text-lg font-semibold text-foreground">Agencies & Studios</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>The Problem:</strong> Work runs ahead of payment; clients demand urgent changes while milestone invoices sit unpaid.
            </p>
            <p className="text-xs sm:text-sm text-foreground/90 font-medium mt-2 leading-relaxed">
              <strong>The Result:</strong> Stage locks where the next phase of work stays locked until the current milestone is paid directly into your merchant account.
            </p>
          </div>
        </div>
      </div>

      {/* 3-Tier Price Cards */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3 items-stretch">
        {/* Card 1: Paid Diagnosis */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border-2 border-emerald-600/40 dark:border-emerald-500/40 bg-gradient-to-b from-card via-card to-emerald-500/5 shadow-md">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Step 1 · 3 Days</p>
              <h3 className="font-serif text-2xl text-foreground mt-0.5">Paid diagnosis</h3>
            </div>

            <div className="border-y border-border/60 py-3.5 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono tracking-tight text-foreground">₹40,000</span>
                <span className="text-xs text-muted-foreground font-mono">fixed</span>
              </div>
              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-400">
                100% credited against the build
              </p>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              De-risks your project before committing to a full build. You see the exact architecture and one working screen.
            </p>

            <ul className="space-y-2 text-xs text-foreground/90 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>1 deployed working screen</strong> on a live URL you can test</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Guaranteed fixed quote</strong> for the 15-day build</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Written workflow map & operational rules</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Data model & database schema layout</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>10-minute video walkthrough explaining the build</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-border/60">
            <Button asChild className="w-full btn-sage-glow rounded-xl font-semibold shadow-md active:scale-[0.98] transition-all">
              <a href="#contact">
                <span>Book a Paid Diagnosis (₹40k)</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </Card>

        {/* Card 2: One Workflow Built */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-indigo">Step 2 · 15 Days</p>
              <h3 className="font-serif text-2xl text-foreground mt-0.5">One workflow built</h3>
            </div>

            <div className="border-y border-border/60 py-3.5 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono tracking-tight text-foreground">₹3.5L – ₹6.0L</span>
                <span className="text-xs text-muted-foreground font-mono">fixed</span>
              </div>
              <p className="text-xs text-muted-foreground">
                15 business days to staging & production
              </p>
            </div>

            <p className="text-xs text-foreground font-medium leading-relaxed bg-secondary/50 p-2.5 rounded-lg border border-border/60">
              The whole of one live process — e.g. RFQ through confirmed order — not a brochure, not the entire company.
            </p>

            <ul className="space-y-2 text-xs text-foreground/90 pt-1">
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                <span>Working system deployed on your custom domain</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                <span>Automated test suite covering every state transition</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                <span>Security pass (PostgreSQL RLS, webhook verification)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-indigo shrink-0 mt-0.5" />
                <span>Full source code repository handover + 14-day bug fix warranty</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-border/60">
            <Button asChild variant="outline" className="w-full rounded-xl border-border/80 hover:border-indigo hover:text-indigo font-semibold shadow-sm active:scale-[0.98] transition-all">
              <a href="#contact">
                <span>Inquire About a Build</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </Card>

        {/* Card 3: Keep It Running */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">Step 3 · Ongoing</p>
              <h3 className="font-serif text-2xl text-foreground mt-0.5">Keep it running</h3>
            </div>

            <div className="border-y border-border/60 py-3.5 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono tracking-tight text-foreground">₹20k – ₹35k</span>
                <span className="text-xs text-muted-foreground font-mono">/ month</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Optional post-launch maintenance & priority SLA
              </p>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Keeps your operational software running with database maintenance, dependency updates, and priority bug resolution.
            </p>

            <ul className="space-y-2 text-xs text-foreground/90 pt-1">
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Monthly maintenance allowance for workflow tweaks</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Priority response on operational blockers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Security patching & database backups</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-3.5 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Direct engineer access — no ticketing queues</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-border/60">
            <Button asChild variant="outline" className="w-full rounded-xl border-border/80 hover:text-amber-800 dark:hover:text-amber-400 font-semibold shadow-sm active:scale-[0.98] transition-all">
              <a href="#contact">
                <span>Ask About Retainers</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>

      {/* Lightweight Link to /method */}
      <div className="mt-8 text-center">
        <a
          href="/method"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
        >
          <span>How 15 days actually run step-by-step → Read the Systems Factory</span>
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
