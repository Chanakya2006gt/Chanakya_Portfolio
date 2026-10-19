import React from "react";
import { ArrowRight, PhoneCall, FileSpreadsheet, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function OfferLadder() {
  return (
    <section id="how-we-work" className="mx-auto max-w-5xl px-5 py-24">
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-foreground" />
        <p className="text-xs font-semibold uppercase tracking-wider text-data">Process</p>
      </div>

      <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
            How a project runs
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            From the first conversation to a system your team uses, in three steps.
          </p>
        </div>
      </div>

      {/* 3 Steps Section */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
        {/* Step 01: Discovery Call */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-data">01</span>
              <span className="text-xs font-mono text-data">20 minutes · free</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <PhoneCall className="size-4 text-foreground" />
              <h3 className="font-sans text-xl font-semibold tracking-tight">Discovery Call</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              I look at what you have and what you need. If an off-the-shelf tool or a template solves it better or cheaper, I'll tell you so.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: a straight yes or no on whether custom software is worth it.
            </p>
          </div>
        </Card>

        {/* Step 02: Scope & Fixed Quote */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-data">02</span>
              <span className="text-xs font-mono text-data">Problem-sized</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <FileSpreadsheet className="size-4 text-foreground" />
              <h3 className="font-sans text-xl font-semibold tracking-tight">Scope & Fixed Quote</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              I scope the work against your actual workflow and give you a fixed price and timeline before anything is built. No hourly surprises.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: a written spec, defined deliverables and a fixed price.
            </p>
          </div>
        </Card>

        {/* Step 03: Build & Handover */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-data">03</span>
              <span className="text-xs font-mono text-data">100% Code Handover</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Rocket className="size-4 text-foreground" />
              <h3 className="font-sans text-xl font-semibold tracking-tight">Build & Handover</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              I build the system around your real data, test it on real jobs with your team, and deploy it to your accounts.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-xs font-medium text-foreground/90">
              You leave with: the system live on your domain, and full ownership of the code and database.
            </p>
          </div>
        </Card>
      </div>

      {/* Primary CTA */}
      <div className="mt-10 text-center">
        <Button asChild size="lg" className="rounded-xl font-medium shadow-md px-6 py-2.5">
          <a href="/book">
            <span>Book a 20-minute call</span>
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
