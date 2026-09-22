import { useState } from "react";
import { ArrowUp, ArrowRight, ExternalLink, ShieldCheck, Code2, CheckCircle2, Layers, Calculator, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { OfferLadder } from "@/components/offer-ladder";
import { FaqSection } from "@/components/faq-section";
import { SiteNav } from "@/components/site-nav";
import { Companion } from "@/components/mascot/companion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { DynamicData } from "@/data/store";
import { STUDIO_NAME, WHATSAPP_URL, CONTACT_EMAIL, GITHUB_URL } from "@/data/studio";

function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 lg:py-20">
      {/* Architectural Dot-Matrix Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-0 dark:opacity-60" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,400px)] lg:gap-14">
        {/* LEFT: existing copy block */}
        <div className="max-w-xl text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-mono text-muted-foreground mb-6 shadow-xs">
            <span>{STUDIO_NAME} · Operational software</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[-0.03em] font-semibold text-foreground">
            We build software that runs businesses.
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground font-normal">
            Quotes, pricing, and operations shouldn't live in WhatsApp and spreadsheets. We build CPQ engines, stage-locked workflows, and internal tools around your rules.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button asChild size="lg" className="rounded-xl font-medium shadow-md active:scale-[0.98] transition-all px-6 py-2.5">
              <a href="/book">
                <span>Book a 20-minute call</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-border/80 hover:border-emerald-500/50 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium shadow-sm active:scale-[0.98] transition-all">
              <a href="#work">
                <span>See our work</span>
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-mono">
            First call is free · Fixed quotes scoped to your problem size · 100% code ownership
          </p>
        </div>

        {/* RIGHT: static product artifact card */}
        <div className="w-full">
          <Card className="border border-border/80 bg-card p-5 sm:p-6 shadow-sm rounded-2xl space-y-5">
            {/* Header row */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Apex Packaging · Plant quote</p>
                <p className="text-xs text-muted-foreground">Beverage roll labels · BOPP 60μm</p>
              </div>
              <Badge variant="outline" className="font-mono text-[10px] tracking-wider text-muted-foreground border-border/80 shrink-0">
                Reference build
              </Badge>
            </div>

            {/* Panel */}
            <div className="rounded-xl border border-border/60 bg-secondary/30 p-3.5 space-y-1">
              <p className="font-mono text-[10px] tracking-wide text-emerald-800 dark:text-emerald-400 font-medium">QUOTE READY</p>
              <p className="text-xs sm:text-sm font-medium text-foreground">50,000 labels · FINAT 4 rewind</p>
              <p className="text-xs text-muted-foreground">Meters and substrate from the same spec the press uses.</p>
            </div>

            {/* Workflow section */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>WORKFLOW</span>
                <span>4 steps</span>
              </div>
              <div className="divide-y divide-border/60 rounded-xl border border-border/60 bg-secondary/20 overflow-hidden text-xs">
                <div className="flex items-center gap-3 px-3 py-2">
                  <span className="font-mono text-[11px] text-muted-foreground">01</span>
                  <span className="text-foreground/90">Request in — WhatsApp / spreadsheet</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <span className="font-mono text-[11px] text-muted-foreground">02</span>
                  <span className="text-foreground/90">Price — Floor rules + yield</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <span className="font-mono text-[11px] text-muted-foreground">03</span>
                  <span className="text-foreground/90">Confirm — Buyer sign-off</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <span className="font-mono text-[11px] text-muted-foreground">04</span>
                  <span className="text-foreground/90">Release — Job ticket + stage lock</span>
                </div>
              </div>
            </div>
          </Card>

          <p className="mt-3 text-center sm:text-left font-mono text-xs text-muted-foreground">
            You keep the repo · deployed on your cloud
          </p>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="work"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Selected Work</p>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        Systems Built & Operating
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
        Production systems engineered around real business constraints: one live multi-tenant SaaS product and one industrial manufacturing CPQ reference build.
      </p>

      <div className="mt-12 space-y-12">
        {/* Card 1: Trelio */}
        <Card className="card-specular relative overflow-hidden rounded-2xl border-border/80 bg-card shadow-md p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            {/* Image Preview */}
            <div className="relative overflow-hidden rounded-xl border border-border/80 bg-secondary/30 shadow-inner group">
              <img
                src="/images/trelio-preview.png"
                alt="Trelio Milestone Authorization and Client Portal Dashboard Preview"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="outline" className="font-mono text-[11px] uppercase tracking-wider bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/30">
                  Studio product · live
                </Badge>
                <a
                  href="https://trelio.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 hover:underline"
                >
                  <span>Visit trelio.in</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                Trelio — Milestone Authorization & Client Portal
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A multi-tenant client portal and payment authorization platform for creative studios and service firms.
              </p>

              <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 text-xs sm:text-sm text-foreground/90 space-y-1.5">
                <strong className="text-foreground block font-medium">What Was Engineered:</strong>
                <p className="text-muted-foreground leading-relaxed">
                  Built the authorization-before-execution engine, milestone escrow stage locks, immutable audit ledger, and multi-tenant billing so work never runs ahead of payment.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground border-t border-border/60">
                <span>Stack: React · Node.js · PostgreSQL RLS · Stripe/Razorpay</span>
                <Button asChild size="sm" variant="outline" className="rounded-xl border-border/80 text-xs">
                  <a href="https://trelio.in" target="_blank" rel="noopener noreferrer">
                    <span>Open Live Platform ↗</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Card 2: Apex Packaging CPQ */}
        <Card className="card-specular relative overflow-hidden rounded-2xl border-border/80 bg-card shadow-md p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            {/* Image Preview */}
            <div className="relative overflow-hidden rounded-xl border border-border/80 bg-secondary/30 shadow-inner group">
              <img
                src="/images/apex-preview.png"
                alt="Apex Packaging Industrial CPQ and Estimating Suite Preview"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="outline" className="font-mono text-[11px] uppercase tracking-wider bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-500/30">
                  Reference build · industrial manufacturing
                </Badge>
                <a
                  href="https://industrial-packaging-platform.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-800 dark:text-cyan-400 hover:underline"
                >
                  <span>Live demo</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                Apex Packaging — Industrial CPQ & Estimating Suite
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Configure, Price, Quote (CPQ) software engineered to the exact manufacturing floor specs of an industrial label converter.
              </p>

              <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 text-xs sm:text-sm text-foreground/90 space-y-1.5">
                <strong className="text-foreground block font-medium">What Was Engineered:</strong>
                <p className="text-muted-foreground leading-relaxed">
                  Replaced multi-sheet spreadsheet chains with floor-accurate FINAT 1–8 roll unwind calculators, substrate costing, and automated PDF job spec generation.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground border-t border-border/60">
                <span>Stack: React · TypeScript · PostgreSQL RLS · CPQ Math Engine</span>
                <Button asChild size="sm" variant="outline" className="rounded-xl border-border/80 text-xs">
                  <a href="https://industrial-packaging-platform.vercel.app" target="_blank" rel="noopener noreferrer">
                    <span>View Reference Build ↗</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Capabilities() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="what-we-build"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Capabilities</p>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        What We Build
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
        We specialize in operational systems where revenue, accuracy, or delivery depends on complex business rules.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {/* Capability 1 */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-sm">
          <div className="space-y-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30">
              <Calculator className="size-5" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-foreground tracking-tight">
              Custom Quoting & CPQ Engines
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Deterministic pricing software that models your actual material yields, setup times, volume tiers, and floor geometry into instant, error-free customer quotes.
            </p>
          </div>
        </Card>

        {/* Capability 2 */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-sm">
          <div className="space-y-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-800 dark:text-cyan-400 border border-cyan-500/30">
              <Lock className="size-5" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-foreground tracking-tight">
              Operational Workflows & Stage Locks
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Digital gates that protect your team from scope creep and unpaid work. Work, design revisions, or shipping only unlock once milestone sign-off and payments clear.
            </p>
          </div>
        </Card>

        {/* Capability 3 */}
        <Card className="card-specular relative flex flex-col justify-between rounded-2xl p-6 border border-border/80 bg-card shadow-sm">
          <div className="space-y-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-indigo/15 text-indigo border border-indigo/30">
              <Layers className="size-5" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-foreground tracking-tight">
              Internal Dashboards & Client Portals
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Centralized, role-based tools that replace messy WhatsApp chains and fragmented email threads with clean tracking for clerks, managers, and clients.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Standards() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Standards</p>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        Direct Partnership & Ownership
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
        Clear terms, fixed quotes, and direct communication.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="size-4" />
            </div>
            <h3 className="font-sans text-base font-semibold text-foreground tracking-tight">Direct to Builders</h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            You talk directly to the people who design, write, and deploy the system. No account managers or salespeople in the middle.
          </p>
        </Card>

        <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-800 dark:text-cyan-400 border border-cyan-500/30">
              <Code2 className="size-4" />
            </div>
            <h3 className="font-sans text-base font-semibold text-foreground tracking-tight">100% Code & Cloud IP</h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            You receive complete repository, database schema, and cloud deployment configs. Everything runs on your custom domain with zero vendor lock-in.
          </p>
        </Card>

        <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-indigo/15 text-indigo border border-indigo/30">
              <CheckCircle2 className="size-4" />
            </div>
            <h3 className="font-sans text-base font-semibold text-foreground tracking-tight">Problem-Sized Scope</h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We don't sell bloated 50-page ERPs. We solve the specific operational bottleneck that costs your business time or revenue.
          </p>
        </Card>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative mx-auto max-w-5xl px-5 py-24 transition-all duration-700 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Consultation</p>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        Let's look at how your business runs today.
      </h2>
      <p className="mt-4 max-w-lg text-base text-muted-foreground">
        Twenty minutes, free. If custom software isn't worth it for you, we'll tell you directly.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button asChild size="lg" className="rounded-xl px-7 shadow-md">
          <a href="/book">
            <span>Book a 20-minute call</span>
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-xl border-border/80 font-medium">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <span>Message on WhatsApp</span>
          </a>
        </Button>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=CK%20Builds%20Inquiry`}
          className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-sage transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <div className="mt-12 pt-8 border-t border-border/70 max-w-md">
        <h3 className="text-sm font-semibold text-foreground">
          What happens next
        </h3>
        <ol className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground list-decimal list-inside">
          <li>You submit an inquiry on <a href="/book" className="underline hover:text-foreground">/book</a> or message on WhatsApp.</li>
          <li>We confirm a time for a 20-minute call.</li>
          <li>We review your quoting or workflow bottleneck and give you an honest recommendation.</li>
        </ol>
      </div>
    </section>
  );
}

export function PortfolioHome({ initialData }: { initialData?: DynamicData | null }) {
  const [_data] = useState<DynamicData | null>(initialData || null);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-card focus:text-foreground focus:border focus:border-sage focus:rounded-xl focus:shadow-xl font-medium text-sm transition-all"
      >
        Skip to main content
      </a>

      <SiteNav />

      <main id="main-content">
        <Hero />
        <Separator />
        <SelectedWork />
        <Separator />
        <Capabilities />
        <Separator />
        <OfferLadder />
        <Separator />
        <Standards />
        <Separator />
        <FaqSection />
        <Separator />
        <Contact />
      </main>

      <footer className="border-t border-border/80 bg-card/40 py-12">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
            <div>
              <p className="font-medium text-foreground text-sm">{STUDIO_NAME}</p>
              <p className="text-muted-foreground mt-0.5">Bespoke Software for Operations · {CONTACT_EMAIL}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a href="#work" className="hover:text-foreground transition-colors">Work</a>
              <a href="#what-we-build" className="hover:text-foreground transition-colors">Capabilities</a>
              <a href="#how-we-work" className="hover:text-foreground transition-colors">Process</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="/book" className="hover:text-foreground transition-colors">Book a call</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp</a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <p>© {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved.</p>
            <a href="#top" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
              Back to top <ArrowUp className="size-3" />
            </a>
          </div>
        </div>
      </footer>

      <Companion />
    </div>
  );
}
