import React from "react";
import { ArrowRight, Factory, Briefcase, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function OfferLadder() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="process"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">How it works</p>
      </div>

      <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            How a project runs
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            Four steps, from a first call to a system your team uses every day.
          </p>
        </div>
      </div>

      {/* Workflow Doors Section */}
      <div className="mt-12 rounded-2xl border border-border/80 bg-secondary/40 p-6 sm:p-8">
        <div className="border-b border-border/60 pb-4 mb-6">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
            Three Types of Workflows Built:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Door 1: Physical / Converting / Fabricating Workflow */}
          <div className="rounded-xl border border-emerald-600/40 bg-card p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Factory className="size-4.5 text-emerald-800 dark:text-emerald-400" />
              <h3 className="font-serif text-lg font-semibold text-foreground">Quote → confirm → produce</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>The Problem:</strong> Quotes die in Excel and WhatsApp; specs and rates get mis-entered on the way to the floor.
            </p>
            <p className="text-xs sm:text-sm text-foreground/90 font-medium mt-2 leading-relaxed">
              <strong>The Result:</strong> A quoting path a plant clerk can finish in one pass — calculating linear meters, substrate weights, and rates directly from the specs your production floor runs.
            </p>
          </div>

          {/* Door 2: Services / Agencies / Contractors Workflow */}
          <div className="rounded-xl border border-indigo/40 bg-card p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="size-4.5 text-indigo" />
              <h3 className="font-serif text-lg font-semibold text-foreground">Work → approve → get paid</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>The Problem:</strong> Work runs ahead of payment; clients demand urgent changes while milestone invoices sit unpaid.
            </p>
            <p className="text-xs sm:text-sm text-foreground/90 font-medium mt-2 leading-relaxed">
              <strong>The Result:</strong> Stage locks where the next phase of work stays locked until the current milestone is paid directly into your merchant account.
            </p>
          </div>

          {/* Door 3: B2B Commerce / Distributors / Portals Workflow */}
          <div className="rounded-xl border border-cyan-500/40 bg-card p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingBag className="size-4.5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="font-serif text-lg font-semibold text-foreground">Browse → order → fulfil</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>The Problem:</strong> Your buyers don't pay list price. Every account has its own rates, credit terms and someone who has to approve the order before it ships — and none of that fits a standard store.
            </p>
            <p className="text-xs sm:text-sm text-foreground/90 font-medium mt-2 leading-relaxed">
              <strong>The Result:</strong> A storefront that knows who is logged in: account-specific pricing, credit limits, approval before dispatch, and stock that matches what the ERP actually says.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Steps Section */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {/* Step 01: Intro call */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sage">01</span>
              <span className="text-xs font-mono text-muted-foreground">20 minutes · free</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Intro call</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              You show me how a quote or job moves today. I tell you honestly if custom software is worth it for you.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: a straight yes or no.
            </p>
          </div>
        </Card>

        {/* Step 02: Workflow Diagnosis */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sage">02</span>
              <span className="text-xs font-mono text-muted-foreground">About 3 days · paid</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Workflow Diagnosis</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              I map your rules and rates, and build one working screen on your real data.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: that screen, a written spec, and a fixed quote for the build.
            </p>
          </div>
        </Card>

        {/* Step 03: Build */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sage">03</span>
              <span className="text-xs font-mono text-muted-foreground">Up to 8 weeks</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Build</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Weekly check-ins. Your team tries it on real jobs before launch.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: the system, live on your domain. The code is yours.
            </p>
          </div>
        </Card>

        {/* Step 04: Keep it running */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sage">04</span>
              <span className="text-xs font-mono text-muted-foreground">Optional · monthly</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Keep it running</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Changes as your business changes, and someone to call when something breaks.
            </p>
          </div>
        </Card>
      </div>

      {/* Reassurance text */}
      <div className="mt-8 text-center space-y-1">
        <p className="text-xs sm:text-sm text-muted-foreground">
          The diagnosis is paid because a real quote needs real work.
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground">
          We talk about cost on the call, once I know what your workflow needs.
        </p>
      </div>

      {/* Primary CTA */}
      <div className="mt-6 text-center">
        <Button asChild size="lg" className="btn-sage-glow rounded-xl font-medium shadow-md px-6 py-2.5">
          <a href="/book">
            <span>Book a 20-minute call</span>
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>

      {/* Lightweight Link to /method */}
      <div className="mt-8 text-center">
        <a
          href="/method"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
        >
          <span>See each step in detail →</span>
        </a>
      </div>
    </section>
  );
}
