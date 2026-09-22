import React from "react";
import { ArrowRight, PhoneCall, FileSpreadsheet, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function OfferLadder() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="how-we-work"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Process</p>
      </div>

      <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            How we work
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            From first conversation to live deployment in three clear steps.
          </p>
        </div>
      </div>

      {/* 3 Steps Section */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
        {/* Step 01: Discovery Call */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sage">01</span>
              <span className="text-xs font-mono text-muted-foreground">20 minutes · free</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <PhoneCall className="size-4 text-emerald-800 dark:text-emerald-400" />
              <h3 className="font-serif text-xl font-semibold">Discovery Call</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We look at how your quotes or jobs move today. If an off-the-shelf software tool solves your problem better or cheaper, we tell you directly.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: An honest assessment of whether custom software makes business sense.
            </p>
          </div>
        </Card>

        {/* Step 02: Scope & Fixed Quote */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sage">02</span>
              <span className="text-xs font-mono text-muted-foreground">Problem-sized</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <FileSpreadsheet className="size-4 text-cyan-800 dark:text-cyan-400" />
              <h3 className="font-serif text-xl font-semibold">Scope & Fixed Quote</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Based on your exact workflow complexity and problem size, we provide a transparent, fixed-price quote and timeline before any build begins. No hidden hourly fees.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: A clear technical specification, defined deliverables, and guaranteed fixed pricing.
            </p>
          </div>
        </Card>

        {/* Step 03: Build & Handover */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sage">03</span>
              <span className="text-xs font-mono text-muted-foreground">100% Code Handover</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Rocket className="size-4 text-indigo" />
              <h3 className="font-serif text-xl font-semibold">Build & Handover</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We engineer the system around your real data, test it on real jobs with your team, and deploy it to your cloud accounts.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: The live software on your custom domain, and 100% repository and database ownership.
            </p>
          </div>
        </Card>
      </div>

      {/* Primary CTA */}
      <div className="mt-10 text-center">
        <Button asChild size="lg" className="btn-sage-glow rounded-xl font-medium shadow-md px-6 py-2.5">
          <a href="/book">
            <span>Book a 20-minute call</span>
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
