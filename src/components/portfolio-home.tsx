import { useState } from "react";
import { ArrowUp, ArrowRight, ExternalLink, ShieldCheck, Code2, CheckCircle2 } from "lucide-react";
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
import { STUDIO_NAME, FOUNDER_NAME, LOCATION, WHATSAPP_URL, CONTACT_EMAIL, GITHUB_URL } from "@/data/studio";

function Hero() {
  return (
    <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-hero-ink text-hero-ink-foreground lg:min-h-[700px]">
      {/* depth behind the figure — not decoration, it is what separates a dark shirt from a dark field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(52% 64% at 72% 52%, rgba(245,242,238,0.24), transparent 72%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-end gap-4 px-5 py-12 sm:gap-8 lg:block lg:py-20">
        <div className="max-w-[46rem]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-data-on-ink">
            {FOUNDER_NAME} · {LOCATION}
          </p>

          <h1 className="mt-5 font-sans text-[2.5rem] font-bold leading-[1.04] tracking-[-0.03em] text-balance sm:mt-6 sm:text-6xl sm:leading-[1.02] lg:text-7xl">
            I build the software{" "}
            <span className="block text-sage-on-ink">a business runs on.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-hero-ink-foreground/88 sm:mt-6 sm:text-xl">
            Quotes, pricing and jobs shouldn't live in WhatsApp and spreadsheets. I build quoting engines, stage-locked workflows and internal tools around your own rules — and the websites and small systems that sit around them.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6 sm:mt-9">
            <a
              href="/book"
              className="inline-flex items-center gap-2 rounded-xl bg-sage-on-ink px-6 py-3 text-sm font-semibold text-hero-ink shadow-md transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Book a 20-minute call
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#work"
              className="text-sm font-medium underline underline-offset-[6px] decoration-hero-ink-muted/60 hover:decoration-hero-ink-foreground"
            >
              See the work →
            </a>
          </div>

          <div className="mt-8 inline-flex max-w-full flex-col overflow-hidden rounded-xl border border-sage-on-ink/30 bg-sage-on-ink/[0.08] font-mono text-xs text-hero-ink-foreground/90 sm:mt-10 sm:flex-row">
            <span className="px-4 py-3">First call is free</span>
            <span className="border-t border-sage-on-ink/25 px-4 py-3 sm:border-l sm:border-t-0">Fixed quote before you commit</span>
            <span className="border-t border-sage-on-ink/25 px-4 py-3 sm:border-l sm:border-t-0">You own the code</span>
          </div>
        </div>

        {/* below lg the figure sits in the flow; from lg it is anchored to the band, not to the text column,
            so the right edge of the band is deliberate instead of leftover. One <img>, never two fetches. */}
        <div className="relative flex justify-center lg:absolute lg:inset-0 lg:mx-auto lg:block lg:max-w-[100rem]">
          <img
            src="/images/chanakya-hero.webp"
            alt="Nagulagam Chanakya"
            width={528}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="pointer-events-none max-h-[300px] w-auto select-none object-contain object-bottom sm:max-h-[360px] lg:absolute lg:bottom-0 lg:right-6 lg:h-[96%] lg:max-h-[680px] xl:right-12"
          />
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
      className={`mx-auto max-w-5xl px-5 pt-20 pb-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-foreground" />
        <p className="text-xs font-semibold uppercase tracking-wider text-data">Selected Work</p>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        Systems Built & Operating
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
        Two systems built to production standard: my own live product, and a reference build for an industrial label converter.
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
                <Badge variant="outline" className="font-mono text-[11px] uppercase tracking-wider bg-surface text-data border-border">
                  My product · live
                </Badge>
                <a
                  href="https://trelio.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sage hover:underline"
                >
                  <span>Visit trelio.in</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                Trelio — Milestone Authorization & Client Portal
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                My own product: a multi-tenant client portal and payment authorisation platform for studios and service firms. I founded it and I build it.
              </p>

              <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 text-xs sm:text-sm text-foreground/90 space-y-1.5">
                <strong className="text-foreground block font-medium">What I built:</strong>
                <p className="text-muted-foreground leading-relaxed">
                  I built the authorisation-before-execution engine, milestone stage locks, the audit ledger and multi-tenant billing, so work never runs ahead of payment.
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
                <Badge variant="outline" className="font-mono text-[11px] uppercase tracking-wider bg-surface text-data border-border">
                  Reference build · industrial manufacturing
                </Badge>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                Apex Packaging — Industrial CPQ & Estimating Suite
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Quoting software modelled on the exact floor specs of an industrial label converter. A reference build, not a client project.
              </p>

              <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 text-xs sm:text-sm text-foreground/90 space-y-1.5">
                <strong className="text-foreground block font-medium">What I built:</strong>
                <p className="text-muted-foreground leading-relaxed">
                  I replaced multi-sheet spreadsheet chains with floor-accurate FINAT 1–8 unwind calculators, substrate costing and automated PDF job specs.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground border-t border-border/60">
                <span>Stack: React · TypeScript · PostgreSQL RLS · CPQ Math Engine</span>
                <Button asChild size="sm" variant="outline" className="rounded-xl border-border/80 text-xs">
                  <a href="https://github.com/Chanakya2006gt/Industrial-packaging-platform" target="_blank" rel="noopener noreferrer">
                    <span>View the code ↗</span>
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
        <span className="h-4 w-1 rounded-full bg-foreground" />
        <p className="text-xs font-semibold uppercase tracking-wider text-data">Capabilities</p>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        What I build
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
        I build operational systems where revenue, accuracy or delivery depends on rules that are specific to your business — and the websites and smaller tools around them.
      </p>

      <div className="mt-12">
        <div className="grid gap-4 border-t border-border py-8 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-8">
          <span className="font-mono text-xs text-data">01</span>
          <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">Custom Quoting & CPQ Engines</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Deterministic pricing software that models your actual material yields, setup times, volume tiers, and floor geometry into instant, error-free customer quotes.
          </p>
        </div>

        <div className="grid gap-4 border-t border-border py-8 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-8">
          <span className="font-mono text-xs text-data">02</span>
          <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">Operational Workflows & Stage Locks</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Digital gates that protect your team from scope creep and unpaid work. Work, design revisions, or shipping only unlock once milestone sign-off and payments clear.
          </p>
        </div>

        <div className="grid gap-4 border-t border-border py-8 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-8">
          <span className="font-mono text-xs text-data">03</span>
          <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">Internal Dashboards & Client Portals</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Centralized, role-based tools that replace messy WhatsApp chains and fragmented email threads with clean tracking for clerks, managers, and clients.
          </p>
        </div>

        <div className="grid gap-4 border-y border-border py-8 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-8">
          <span className="font-mono text-xs text-data">04</span>
          <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">Websites &amp; small systems</h3>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              A landing page, a site for your business, an appointment or booking system, a form that feeds your team, or a fix to something you already have. Scoped in one conversation, built in days.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-sage underline underline-offset-4 hover:opacity-80"
            >
              WhatsApp me what you need →
            </a>
          </div>
        </div>
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
        <span className="h-4 w-1 rounded-full bg-foreground" />
        <p className="text-xs font-semibold uppercase tracking-wider text-data">Standards</p>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        How I work with you
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
        Clear terms, a fixed quote before you commit, and you deal with the person writing the code.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-surface text-foreground border border-border">
              <ShieldCheck className="size-4" />
            </div>
            <h3 className="font-sans text-base font-semibold text-foreground tracking-tight">You talk to me</h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            No account manager, no sales layer, no hand-off to someone junior. The person you call is the person building it.
          </p>
        </Card>

        <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-surface text-foreground border border-border">
              <Code2 className="size-4" />
            </div>
            <h3 className="font-sans text-base font-semibold text-foreground tracking-tight">100% Code & Cloud IP</h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            You receive the complete repository, database schema and deployment configs. Everything runs on your domain, with no lock-in to me.
          </p>
        </Card>

        <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-surface text-foreground border border-border">
              <CheckCircle2 className="size-4" />
            </div>
            <h3 className="font-sans text-base font-semibold text-foreground tracking-tight">Problem-Sized Scope</h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            I don't sell bloated 50-page ERPs. I solve the one bottleneck that's costing you time or revenue.
          </p>
        </Card>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-sage" />
        <p className="text-xs font-semibold uppercase tracking-wider text-data">About</p>
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14 md:items-start">
        <img
          src="/images/chanakya-about.webp"
          alt="Nagulagam Chanakya"
          width={1200}
          height={1200}
          className="w-full rounded-2xl border border-border object-cover shadow-sm"
        />

        <div className="max-w-[60ch] space-y-5">
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl">
            I'm Chanakya. I work on my own.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            I build operational software from Warangal — quoting engines, approval workflows, internal tools, and the websites that sit around them. You talk to me, and I write the code.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Trelio is my own product — I'm the founder, I designed the data model and the payment flow, and I build it. In continuous development since March 2026.
          </p>
          <p className="text-base text-foreground leading-relaxed">
            I ride. It's the only part of my week with no spec.
          </p>
          <p className="font-mono text-xs text-muted-foreground pt-2">
            THIS SITE: TANSTACK START · IBM PLEX · DEPLOYED ON VERCEL ·{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
              SOURCE ON GITHUB
            </a>
          </p>
        </div>
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
        <span className="h-4 w-1 rounded-full bg-foreground" />
        <p className="text-xs font-semibold uppercase tracking-wider text-data">Consultation</p>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        Let's look at how your business runs today.
      </h2>
      <p className="mt-4 max-w-lg text-base text-muted-foreground">
        Twenty minutes, free. If custom software isn't worth it for you, I'll say so.
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
          <li>You send an enquiry from <a href="/book" className="underline hover:text-foreground">/book</a> or message on WhatsApp.</li>
          <li>I confirm a time for a 20-minute call.</li>
          <li>We talk through your workflow and I give you an honest recommendation.</li>
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
        <About />
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
              <p className="text-muted-foreground mt-0.5">{LOCATION} · {CONTACT_EMAIL}</p>
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
            <p>© {new Date().getFullYear()} {FOUNDER_NAME}.</p>
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
