import { useState } from "react";
import { ArrowUp, ExternalLink, Mail, ShieldCheck, CheckCircle2, XCircle, Code2, Github } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { TrelioPreview } from "@/components/trelio-preview";
import { ApexPreview } from "@/components/apex-preview";
import { OfferLadder } from "@/components/offer-ladder";
import { FaqSection } from "@/components/faq-section";
import { HeroQuoteCard } from "@/components/hero-quote-card";
import { SiteNav } from "@/components/site-nav";
import { Companion } from "@/components/mascot/companion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { DynamicData } from "@/data/store";

interface HeroProps {
  availabilityStatus?: string;
}

function Hero({ availabilityStatus }: HeroProps) {
  const currentStatus = availabilityStatus || "Taking 2 builds a month · booking the next slot";

  return (
    <section className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-5 py-16 lg:py-24 overflow-hidden">
      {/* Architectural Dot-Matrix Background Grid — visible in dark, hidden in light */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-0 dark:opacity-60" />
      {/* Subtle ambient multi-color glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1.1fr] lg:items-center">
        <div className="rise-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-800 dark:text-emerald-400 shadow-sm">
            <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
            Quote-to-job systems · for businesses that quote, approve and deliver
          </div>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.03em]">
            <span className="text-foreground">Quotes and jobs shouldn't </span>
            {/* Dark mode: gradient. Light mode: flat forest green — gradient is invisible on cream */}
            <span className="font-bold text-emerald-800 dark:bg-gradient-to-r dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
              live on WhatsApp.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
            I build the system a business actually runs: quote → confirm → work. Fixed price. You keep the repo. Live on an industrial converting workflow and on Trelio.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border/80 bg-secondary/50 px-3.5 py-1.5 text-xs text-foreground font-mono">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span>Capacity: <strong className="font-semibold text-emerald-700 dark:text-emerald-400">{currentStatus}</strong></span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button asChild size="lg" className="btn-sage-glow rounded-xl font-medium shadow-md active:scale-[0.98] transition-all px-6 py-2.5">
              <a href="#pricing">
                <span>Book a ₹20k Diagnosis →</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-border/80 hover:border-cyan-500/50 hover:text-cyan-800 dark:hover:text-cyan-300 font-medium shadow-sm active:scale-[0.98] transition-all">
              <a
                href="https://industrial-packaging-platform.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span>Open Live Plant Quote</span>
                <ExternalLink className="size-3.5" />
              </a>
            </Button>
          </div>
        </div>

        <div>
          <HeroQuoteCard />
        </div>
      </div>
    </section>
  );
}

function LiveSystems() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="systems"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Systems Built</p>
      </div>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Quote & Workflow Software — Built and Running
      </h2>
      <p className="mt-3 max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed">
        Two systems built to production standard: one CPQ platform modelled on an industrial label converter's quoting workflow, and Trelio — a live authorization-before-execution SaaS.
      </p>

      <div className="mt-10 space-y-12">
        <Card className="card-specular relative overflow-hidden p-2 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-card via-card to-cyan-500/10 dark:to-cyan-500/10 border-border/80 shadow-md">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />
          <div className="p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-cyan-500" />
                <span className="font-mono text-xs font-semibold text-cyan-800 dark:text-cyan-300">Industrial Converting Plant CPQ</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://industrial-packaging-platform.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-800 dark:text-cyan-300 hover:bg-cyan-500/20 shadow-xs transition-all"
                >
                  <ExternalLink className="size-3" />
                  <span>Open Live Demo ↗</span>
                </a>
                <a
                  href="https://github.com/Chanakya2006gt/Industrial-packaging-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all shadow-xs"
                >
                  <Github className="size-3" />
                  <span>Repo</span>
                </a>
              </div>
            </div>

            <ApexPreview />

            <CardHeader className="px-0 pb-2 pt-6">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="font-serif text-2xl sm:text-3xl">
                  Apex Packaging & Converting CPQ
                </CardTitle>
                <Badge variant="outline" className="shadow-xs font-mono text-[11px] uppercase tracking-wider bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30">
                  Reference Build
                </Badge>
              </div>
              <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2">
                CPQ and job estimating platform built to the spec of a working label converter's quoting operation. Models their exact floor workflow: FINAT rewind standards, substrate costing, roll geometry.
              </CardDescription>
            </CardHeader>

            {/* System output stat strip */}
            <div className="mx-0 mt-1 mb-2 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-border/60 bg-secondary/30 px-4 py-3 font-mono text-xs text-muted-foreground">
              <span><strong className="text-foreground">Output:</strong> 50,000-label BOPP 60μm roll quote</span>
              <span className="hidden sm:inline text-border/60">·</span>
              <span><strong className="text-foreground">Time:</strong> under 4 seconds, one pass</span>
              <span className="hidden sm:inline text-border/60">·</span>
              <span><strong className="text-foreground">Source:</strong> floor specs, not a spreadsheet</span>
            </div>

            <CardContent className="px-0 pt-3 pb-2">
              <div className="grid gap-3 sm:grid-cols-3 pt-2 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-border/60 bg-secondary/30">
                  <strong className="text-foreground block font-medium mb-1">Floor-Ready Math</strong>
                  <p className="text-muted-foreground text-xs leading-relaxed">Calculates running meters, substrate weights, and linear pricing directly from FINAT 1–8 roll unwind specs.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-border/60 bg-secondary/30">
                  <strong className="text-foreground block font-medium mb-1">One-Pass Estimating</strong>
                  <p className="text-muted-foreground text-xs leading-relaxed">Replaces multi-person spreadsheet chains with a quoting flow a plant clerk can finish in 90 seconds without errors.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-border/60 bg-secondary/30">
                  <strong className="text-foreground block font-medium mb-1">Production Security</strong>
                  <p className="text-muted-foreground text-xs leading-relaxed">Role-based sales operations, PostgreSQL RLS tenant data isolation, and instant PDF quote generation.</p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex flex-wrap items-center justify-between border-t border-border/60 gap-3">
              <span className="font-mono text-xs text-muted-foreground">Stack: React · TypeScript · PostgreSQL RLS · CPQ Math Engine</span>
              <Button asChild size="sm" className="btn-sage-glow rounded-xl font-semibold shadow-xs">
                <a href="https://industrial-packaging-platform.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span>Open Live Demo</span>
                  <ExternalLink className="ml-1.5 size-3.5" />
                </a>
              </Button>
            </CardFooter>
          </div>
        </Card>

        <Card className="card-specular relative overflow-hidden p-2 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-card via-card to-indigo/10 dark:to-indigo/10 border-border/80 shadow-md">
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-indigo via-purple-500 to-sage" />
          <div className="p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-indigo animate-pulse" />
                <span className="font-mono text-xs font-semibold text-indigo">Multi-Tenant Payment & Approval Platform</span>
              </div>
              <a
                href="https://trelio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-indigo/30 bg-indigo/10 px-3 py-1 text-xs font-semibold text-indigo hover:bg-indigo/20 shadow-xs transition-all"
              >
                <ExternalLink className="size-3" />
                <span>Open Trelio.in ↗</span>
              </a>
            </div>

            <TrelioPreview />

            <CardHeader className="px-0 pb-2 pt-6">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="font-serif text-2xl sm:text-3xl">
                  Trelio — Stage Lock & Direct Settlement
                </CardTitle>
                <Badge variant="outline" className="shadow-xs font-mono text-[11px] uppercase tracking-wider bg-indigo/15 text-indigo border-indigo/30">
                  Live SaaS
                </Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                In continuous development since March 2026 · 623 commits · 58 test suites · multi-tenant, payments, RLS, audit ledger
              </p>
              <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2">
                Authorization-Before-Execution SaaS for freelancers and creative studios to eliminate unpaid work and runaway revisions.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-0 pt-3 pb-2">
              <div className="grid gap-3 sm:grid-cols-3 pt-2 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-border/60 bg-secondary/30">
                  <strong className="text-foreground block font-medium mb-1">Stage Lock Control</strong>
                  <p className="text-muted-foreground text-xs leading-relaxed">Work stays locked and paused; Stage 02 never opens until the client authorizes and settles Stage 01.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-border/60 bg-secondary/30">
                  <strong className="text-foreground block font-medium mb-1">Direct Bank Settlement</strong>
                  <p className="text-muted-foreground text-xs leading-relaxed">Client payments flow straight into your merchant account. Zero escrow, no middleman holding your funds.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-border/60 bg-secondary/30">
                  <strong className="text-foreground block font-medium mb-1">Verified Audit Trail</strong>
                  <p className="text-muted-foreground text-xs leading-relaxed">448 automated test suites verifying immutable approval timestamps and multi-tenant security.</p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-0 pt-4 flex flex-wrap items-center justify-between border-t border-border/60 gap-3">
              <span className="font-mono text-xs text-muted-foreground">Stack: React · Node.js · Multi-Tenant Postgres · Payment Gateway</span>
              <Button asChild size="sm" className="btn-sage-glow rounded-xl font-semibold shadow-xs">
                <a href="https://trelio.in" target="_blank" rel="noopener noreferrer">
                  <span>Launch Trelio.in</span>
                  <ExternalLink className="ml-1.5 size-3.5" />
                </a>
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </section>
  );
}

function TrustAndTerms() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`border-y border-border/60 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 py-20">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-sage" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Trust & Ground Rules</p>
        </div>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          How engagements work and what you actually own.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
          Clear terms, fixed prices, and direct senior engineering. No hidden scope creep, no junior handoffs.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card/80">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="size-4" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Who Builds Your System</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Nagulagam Chanakya</strong> (Warangal, India). I build operational software full-time and operate a team of 3 on Trelio. You work directly with the engineer who designs the data model, writes the code, and supports the release. No account managers or sub-contracting.
            </p>
          </Card>

          <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card/80">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30">
                <Code2 className="size-4" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">What You Keep & Own</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>100% Code & Infrastructure Ownership.</strong> You receive the complete git repository, database migrations, CI/CD pipelines, and deployment configs. Everything deploys to your own cloud infrastructure and custom domain.
            </p>
          </Card>

          <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card/80">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                <XCircle className="size-4" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">What I Refuse To Build</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>No generic brochure websites, no 50-page PowerPoint decks, and no unmanageable full-company ERPs in 15 days.</strong> I build the whole of one critical, revenue-blocking operational workflow (quotes, approvals, or payments) and engineer it to absolute completion.
            </p>
          </Card>

          <Card className="card-specular p-6 rounded-2xl border-border/70 bg-card/80">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-indigo/15 text-indigo border border-indigo/30">
                <CheckCircle2 className="size-4" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">How The Money Works</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Fixed prices with 100% diagnosis credit.</strong> The ₹20,000 paid diagnosis is fully credited against your 15-day build. Builds are structured in milestones: work pauses if a milestone payment is pending, so neither party ever takes unbounded risk.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleNoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = (formData.get("subject") as string) || "";
    const body = (formData.get("body") as string) || "";

    if (!subject.trim() || !body.trim()) {
      toast.error("Please fill in both subject and message");
      return;
    }

    toast.success("Opening your email client...");
    setDialogOpen(false);
    window.location.href = `mailto:nagulagamchanakya2211@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative mx-auto max-w-5xl px-5 py-20 transition-all duration-700 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-sage" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</p>
      </div>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Let's build your operational workflow.
      </h2>
      <p className="mt-4 max-w-lg text-lg text-foreground/90 font-serif italic">
        "Fixed-price quote-to-job systems for operating businesses. Straight to engineering."
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="btn-sage-glow rounded-xl px-7 shadow-md">
              <Mail className="mr-2 size-4" />
              Send a direct note
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl border-border/70 bg-card">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Send a direct message</DialogTitle>
              <DialogDescription>
                Opens your mail client directly to <strong className="text-foreground">nagulagamchanakya2211@gmail.com</strong>.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 mt-2" onSubmit={handleNoteSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="subject" className="text-xs">Subject</Label>
                <Input id="subject" name="subject" placeholder="Paid Diagnosis / Quoting Workflow..." required className="rounded-xl bg-secondary/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="body" className="text-xs">Message</Label>
                <Textarea id="body" name="body" placeholder="What are the details of your operational workflow?" required rows={4} className="rounded-xl bg-secondary/50" />
              </div>
              <Button type="submit" className="rounded-xl mt-2 btn-sage-glow">Open mail client</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export function PortfolioHome({ initialData }: { initialData?: DynamicData | null }) {
  const [data] = useState<DynamicData | null>(initialData || null);

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
        <Hero availabilityStatus={data?.availabilityStatus} />
        <Separator />
        <OfferLadder />
        <Separator />
        <LiveSystems />
        <Separator />
        <TrustAndTerms />
        <Separator />
        <FaqSection />
        <Separator />
        <Contact />
      </main>

      <footer className="border-t border-border/80 bg-card/40 py-12">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
            <div>
              <p className="font-medium text-foreground">Nagulagam Chanakya</p>
              <p className="text-muted-foreground mt-0.5">Quote-to-job systems for operating businesses · nagulagamchanakya2211@gmail.com</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
              <a href="#systems" className="hover:text-foreground transition-colors">Live Systems</a>
              <a href="/method" className="hover:text-foreground transition-colors">Method</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="#about" className="hover:text-foreground transition-colors">Trust & Terms</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
              <a href="https://github.com/Chanakya2006gt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/nagulagam-chanakya-b93514315" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <p>© {new Date().getFullYear()} Nagulagam Chanakya. Fixed-price operational software.</p>
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
