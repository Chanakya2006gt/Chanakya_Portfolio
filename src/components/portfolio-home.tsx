import { useState, useEffect } from "react";
import { ArrowRight, ArrowUp, ExternalLink, Mail, Check, Copy, Terminal, Sparkles, FileText, Github } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

import { businesses as defaultBusinesses, sideProjects as defaultSideProjects, skills as defaultSkills, Project } from "@/data/projects";
import { TrelioPreview } from "@/components/trelio-preview";
import { ApexPreview } from "@/components/apex-preview";
import { SiteNav } from "@/components/site-nav";
import { LeftRailNav } from "@/components/left-rail-nav";
import { ParticleField } from "@/components/particle-field";
import { MarqueeTicker } from "@/components/marquee-ticker";
import { HeroStats } from "@/components/hero-stats";
import { ContactCards } from "@/components/contact-cards";
import { Companion } from "@/components/mascot/companion";
import { CompanionSvg } from "@/components/mascot/companion-svg";
import { IntroOverlay } from "@/components/intro-overlay";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import { ResumeModal } from "@/components/resume-modal";
import { DynamicData } from "@/data/store";

function HeroTerminal() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx chanakya@latest");
    setCopied(true);
    toast.success("Copied `npx chanakya@latest` to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-specular relative overflow-hidden rounded-2xl border border-border/80 bg-card backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] w-full max-w-md mx-auto">
      {/* Terminal Titlebar with macOS Controls */}
      <div className="flex items-center justify-between border-b border-border/70 bg-secondary/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
          <span className="size-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
          <span className="size-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
          <span className="ml-2 font-mono text-[11px] text-foreground/70 dark:text-muted-foreground font-semibold">chanakya.config.ts</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-card px-2.5 py-0.5 border border-border/60 shadow-xs">
          <CompanionSvg state="idle" size={14} />
          <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">v2.4</span>
        </div>
      </div>

      {/* Code Body with High-Contrast Dark & Light Syntax Highlighting */}
      <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-1.5 select-text text-left">
        <div>
          <span className="text-purple-700 dark:text-purple-400 font-bold">const</span>{" "}
          <span className="text-cyan-800 dark:text-cyan-300 font-bold">engineer</span> = &#123;
        </div>
        <div className="pl-4">
          <span className="text-foreground/70 dark:text-muted-foreground">name:</span>{" "}
          <span className="text-emerald-800 dark:text-emerald-400 font-medium">"Nagulagam Chanakya"</span>,
        </div>
        <div className="pl-4">
          <span className="text-foreground/70 dark:text-muted-foreground">role:</span>{" "}
          <span className="text-emerald-800 dark:text-emerald-400 font-medium">"AI-Native Systems Architect & Founder"</span>,
        </div>
        <div className="pl-4">
          <span className="text-foreground/70 dark:text-muted-foreground">benchmarks:</span> &#123;
        </div>
        <div className="pl-8">
          <span className="text-foreground/70 dark:text-muted-foreground">cpqThroughput:</span>{" "}
          <span className="text-emerald-800 dark:text-emerald-400 font-medium">"273k ops/s (p99: 0.01ms)"</span>,
        </div>
        <div className="pl-8">
          <span className="text-foreground/70 dark:text-muted-foreground">verifiedTests:</span>{" "}
          <span className="text-cyan-800 dark:text-cyan-300 font-medium">"448/448 pass (29 suites)"</span>,
        </div>
        <div className="pl-8">
          <span className="text-foreground/70 dark:text-muted-foreground">fuzzTesting:</span>{" "}
          <span className="text-purple-800 dark:text-purple-300 font-medium">"1k invariants (fast-check)"</span>
        </div>
        <div className="pl-4">&#125;,</div>
        <div className="pl-4">
          <span className="text-foreground/70 dark:text-muted-foreground">flagship:</span> [
          <span className="text-purple-800 dark:text-purple-300 font-medium">"Trelio.in"</span>,{" "}
          <span className="text-cyan-800 dark:text-cyan-300 font-medium">"Apex Packaging CPQ"</span>
          ],
        </div>
        <div className="pl-4">
          <span className="text-foreground/70 dark:text-muted-foreground">workflow:</span> [
          <span className="text-purple-800 dark:text-purple-300 font-medium">"Agentic AI"</span>,{" "}
          <span className="text-cyan-800 dark:text-cyan-300 font-medium">"Antigravity"</span>,{" "}
          <span className="text-emerald-800 dark:text-emerald-300 font-medium">"Claude Code"</span>
          ],
        </div>
        <div className="pl-4">
          <span className="text-foreground/70 dark:text-muted-foreground">stack:</span> [
          <span className="text-cyan-800 dark:text-cyan-300 font-medium">"React 19"</span>,{" "}
          <span className="text-cyan-800 dark:text-cyan-300 font-medium">"TypeScript"</span>,{" "}
          <span className="text-emerald-800 dark:text-emerald-300 font-medium">"Supabase / Postgres"</span>
          ],
        </div>
        <div className="pl-4">
          <span className="text-foreground/70 dark:text-muted-foreground">security:</span> [
          <span className="text-amber-800 dark:text-amber-300 font-medium">"AES-256-GCM"</span>,{" "}
          <span className="text-amber-800 dark:text-amber-300 font-medium">"PostgreSQL RLS"</span>
          ],
        </div>
        <div className="pl-4">
          <span className="text-foreground/70 dark:text-muted-foreground">status:</span>{" "}
          <span className="text-emerald-800 dark:text-emerald-400 font-bold">"Available for High-Impact Work"</span>
        </div>
        <div>&#125;;</div>

        {/* Interactive CLI Runner Footer */}
        <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between gap-2 bg-secondary/50 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-3 rounded-b-2xl">
          <div className="flex items-center gap-2 text-[11px] text-foreground truncate font-mono">
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">$</span>
            <code className="text-foreground/80 dark:text-muted-foreground truncate font-semibold">npx chanakya@latest</code>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-card border border-border/80 text-foreground hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all shadow-sm shrink-0"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-700 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3 text-muted-foreground" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

interface HeroProps {
  tagline?: string;
  availabilityStatus?: string;
  liveCount?: number;
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
  resume?: DynamicData["resume"];
}

function Hero({ tagline, availabilityStatus, liveCount, email, pdfUrl, summary, education, skillsList, resume }: HeroProps) {
  return (
    <section className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-5 py-20 lg:py-28 overflow-hidden">
      {/* Architectural Dot-Matrix Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-60 dark:opacity-70" />
      {/* Background ambient multi-color glow mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-indigo-500/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <ParticleField />
      
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1.1fr] lg:items-center">
        <div>
          <div className="rise-in inline-flex items-center gap-2 rounded-full border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-800 dark:text-emerald-400 shadow-sm backdrop-blur-sm">
            <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
            Full-Stack Builder · SaaS Founder
          </div>
          <h1 className="rise-in rise-in-1 mt-5 font-serif text-5xl leading-[1.08] tracking-[-0.035em] sm:text-6xl md:text-7xl">
            <span className="text-foreground font-bold">Nagulagam </span>
            <span className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent font-bold">
              Chanakya
            </span>
          </h1>
          <p className="rise-in rise-in-2 mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
            {tagline || "I ship products under real constraints — not demos. Trelio is the primary work alongside focused software projects."}
          </p>

          <HeroStats status={availabilityStatus} liveCount={liveCount} />

          <div className="rise-in rise-in-3 mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group btn-sage-glow rounded-xl font-medium shadow-md active:scale-[0.98] transition-all pl-5 pr-2.5 py-2 inline-flex items-center gap-2.5">
              <a
                href="#projects"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("portfolio-tab-switch", { detail: { tab: "side" } }));
                  }
                }}
              >
                <span>View projects</span>
                <span className="flex size-6 items-center justify-center rounded-lg bg-black/10 dark:bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </a>
            </Button>
            <ResumeModal
              resume={resume}
              email={email}
              pdfUrl={pdfUrl}
              summary={summary}
              education={education}
              skillsList={skillsList}
              trigger={
                <Button size="lg" variant="outline" className="rounded-xl border-border/80 hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium shadow-sm active:scale-[0.98] transition-all">
                  <FileText className="mr-1.5 size-4" />
                  View Resume
                </Button>
              }
            />
            <Button asChild size="lg" variant="outline" className="rounded-xl border-border/80 hover:bg-secondary shadow-sm active:scale-[0.98] transition-all">
              <a href="#contact">
                <Mail className="size-4" />
                Contact
              </a>
            </Button>
          </div>
        </div>

        {/* Hero Right Visual: Live macOS Interactive Developer Terminal */}
        <div className="rise-in rise-in-2 flex flex-col items-center justify-center">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}

interface AboutProps {
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
  resume?: DynamicData["resume"];
}

function About({ email, pdfUrl, summary, education, skillsList, resume }: AboutProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`border-y border-border/60 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-sage" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">About</p>
        </div>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          Builder first. Student second.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Engineering student at <span className="font-medium text-foreground">{education || "SR University (B.Tech in CSE, 2028)"}</span> focused on shipping real products. I care more
              about constraints — <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-sage font-mono">secure payments</code>, <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-sage font-mono">approvals</code>, and <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-sage font-mono">multi-tenant systems</code> —
              than collecting certificates.
            </p>
            <p>
              Right now most of my time goes to <span className="font-medium text-foreground">Trelio</span>: a SaaS that forces client
              approval before work is executed using an <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-indigo font-mono">Authorization-Before-Execution</code> model. The problem is simple: freelancers and agencies should never work for free.
            </p>

            {/* Quick-scan highlights pill strip for recruiters & visitors */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
              <div className="rounded-xl border border-border/70 bg-card/80 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-xs font-semibold text-foreground">Warangal, India</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-card/80 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Degree & Focus</p>
                <p className="text-xs font-semibold text-foreground">B.Tech CSE '28</p>
              </div>
              <div className="col-span-2 rounded-xl border border-border/70 bg-card/80 p-3 sm:col-span-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Core Focus</p>
                <p className="text-xs font-semibold text-sage">Agentic AI & SaaS</p>
              </div>
            </div>

            <div className="pt-2">
              <ResumeModal
                resume={resume}
                email={email}
                pdfUrl={pdfUrl}
                summary={summary}
                education={education}
                skillsList={skillsList}
                trigger={
                  <Button variant="outline" className="gap-2 border-border/80 hover:border-sage hover:text-sage text-foreground rounded-xl shadow-sm">
                    <FileText className="size-4" />
                    Read Full Resume & Credentials →
                  </Button>
                }
              />
            </div>
          </div>
          <div className="card-specular rounded-2xl p-6 space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <h4 className="text-sm font-semibold text-foreground">How I work · Agentic Velocity</h4>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Specification-first builder. I direct autonomous AI agents (Google Antigravity, Claude Code) with specialized skill plugins, strict design tokens (60-30-10 palette, WCAG 2.2 AA), and cryptographic guardrails (AES-256-GCM, Postgres RLS) to ship hardened production systems in days instead of months.
              </p>
            </div>
            <Separator className="bg-border/60" />
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-indigo shadow-[0_0_8px_#818cf8]" />
                <h4 className="text-sm font-semibold text-foreground">What I am doing now</h4>
              </div>
              <ul className="mt-2.5 space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-indigo shrink-0" />
                  <span><strong className="text-foreground font-medium">Trelio SaaS:</strong> Scaling milestone authorization and direct settlement engine.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-cyan-400 shrink-0" />
                  <span><strong className="text-foreground font-medium">Industrial CPQ:</strong> Refining FINAT 1–8 automated rewind geometry math.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-sage shrink-0" />
                  <span><strong className="text-foreground font-medium">Agentic Tooling:</strong> Designing multi-agent skill systems for rapid software delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-amber-400 shrink-0" />
                  <span><strong className="text-foreground font-medium">Availability:</strong> Open for contract engagements & high-impact software roles.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BusinessCardProps {
  items: Project[];
}

function BusinessCard({ items }: BusinessCardProps) {
  return (
    <div className="grid gap-8">
      {items.map((project) => {
        const isApex = project.id === "apex";
        const gradientBorder = isApex
          ? "from-cyan-400 via-blue-500 to-indigo-500"
          : "from-emerald-400 via-teal-400 to-cyan-500";
        const cardGradient = isApex
          ? "to-cyan-500/10 dark:to-cyan-500/10"
          : "to-emerald-500/10 dark:to-emerald-500/10";
        const liveBadgeColor = isApex
          ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.18)]"
          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 shadow-[0_0_12px_rgba(52,211,153,0.18)]";
        const pingColor = isApex ? "bg-cyan-400" : "bg-emerald-400";
        const badgeColor = isApex
          ? "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30"
          : "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30";

        return (
          <Card
            key={project.id}
            className={`card-specular relative overflow-hidden p-2 rounded-2xl bg-gradient-to-br from-card via-card ${cardGradient}`}
          >
            {/* Top multi-stop chromatic gradient accent line */}
            <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${gradientBorder}`} />
            <div className="p-4 sm:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-semibold transition-all ${liveBadgeColor}`}
                  >
                    <span className={`size-1.5 rounded-full ${pingColor} animate-ping`} />
                    <ExternalLink className="size-3" />
                    {project.liveUrl.replace(/^https?:\/\//, "")}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all shadow-xs"
                    title="View Source Repository"
                  >
                    <Github className="size-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              {/* Project-specific Interactive Telemetry Preview */}
              {isApex ? <ApexPreview /> : <TrelioPreview />}

              <CardHeader className="px-0 pb-0 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="font-serif text-2xl sm:text-3xl">{project.title}</CardTitle>
                  {project.badge && (
                    <Badge variant="outline" className={`shadow-xs font-mono text-[11px] uppercase tracking-wider ${badgeColor}`}>
                      {project.badge}
                    </Badge>
                  )}
                </div>
                <CardDescription className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="mt-5 flex flex-wrap gap-2 px-0">
                {project.stack.map((tech) => {
                  const isFrontend = ["React", "TypeScript", "Tailwind", "Next.js", "GSAP", "Vite"].includes(tech);
                  const isBackend = ["Node.js", "PostgreSQL", "REST APIs", "Express", "Supabase RLS"].includes(tech);
                  const isSecurity = ["AES-256-GCM", "HMAC", "Clerk", "Audit logs"].some((s) => tech.includes(s));
                  const isProduct = ["Payments", "Multi-tenant", "Razorpay", "UPI", "CPQ Engine"].some((s) => tech.includes(s));

                  let badgeStyle = "bg-secondary text-foreground border-border";
                  if (isFrontend) badgeStyle = "border-cyan-300 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300";
                  else if (isBackend) badgeStyle = "border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300";
                  else if (isSecurity) badgeStyle = "border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300";
                  else if (isProduct) badgeStyle = "border-amber-300 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300";

                  return (
                    <span
                      key={tech}
                      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium border shadow-xs ${badgeStyle}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </CardFooter>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
function PortfolioSitePreview() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-secondary/80 p-3.5 border border-border/70 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/60 pb-2 mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#ff5f56]" />
          <span className="size-2 rounded-full bg-[#ffbd2e]" />
          <span className="size-2 rounded-full bg-[#27c93f]" />
          <span className="ml-1.5 font-mono text-[10px] text-muted-foreground font-semibold">tanstack-start.config.ts</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-purple-800 dark:text-purple-300 font-semibold bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded border border-purple-300 dark:border-purple-500/20">
          <span className="size-1.5 rounded-full bg-purple-500 animate-pulse" />
          Nitro Edge
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono">
        <div className="p-1.5 rounded-lg bg-card border border-border/50">
          <span className="text-muted-foreground block text-[9px]">Framework</span>
          <span className="font-semibold text-foreground">TanStack Start</span>
        </div>
        <div className="p-1.5 rounded-lg bg-card border border-border/50">
          <span className="text-muted-foreground block text-[9px]">React Core</span>
          <span className="font-semibold text-emerald-800 dark:text-emerald-400">React 19 SSR</span>
        </div>
        <div className="p-1.5 rounded-lg bg-card border border-border/50">
          <span className="text-muted-foreground block text-[9px]">Styling</span>
          <span className="font-semibold text-cyan-800 dark:text-cyan-400">Tailwind v4</span>
        </div>
        <div className="p-1.5 rounded-lg bg-card border border-border/50">
          <span className="text-muted-foreground block text-[9px]">Deployment</span>
          <span className="font-semibold text-purple-800 dark:text-purple-400">Serverless Nitro</span>
        </div>
      </div>
    </div>
  );
}

interface ProjectsProps {
  businessesList: Project[];
  sideProjectsList: Project[];
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
  resume?: DynamicData["resume"];
}

function Projects({ businessesList, sideProjectsList, email, pdfUrl, summary, education, skillsList, resume }: ProjectsProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<string>("businesses");

  useEffect(() => {
    const handleSwitchTab = (e: any) => {
      if (e.detail?.tab) {
        setActiveTab(e.detail.tab);
      }
    };
    window.addEventListener("portfolio-tab-switch" as any, handleSwitchTab);

    const checkHash = () => {
      if (window.location.hash === "#projects") {
        setActiveTab("side");
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("portfolio-tab-switch" as any, handleSwitchTab);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Work</p>
      </div>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Featured Projects
      </h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Serious SaaS products and engineered software built under real constraints.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-10">
        <TabsList className="bg-secondary/80 p-1 border border-border/70 flex-wrap h-auto rounded-xl shadow-inner">
          <TabsTrigger value="businesses" className="data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm rounded-lg">
            Flagship Products
          </TabsTrigger>
          <TabsTrigger value="contracts" className="data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm rounded-lg">
            Freelance Work
          </TabsTrigger>
          <TabsTrigger value="side" className="data-[state=active]:bg-card data-[state=active]:shadow-sm text-xs sm:text-sm rounded-lg">
            Projects
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Flagship Products */}
        <TabsContent value="businesses" className="mt-6 animate-in fade-in-50 duration-200">
          <BusinessCard items={businessesList} />
        </TabsContent>

        {/* Tab 2: Freelance Work */}
        <TabsContent value="contracts" className="mt-6 animate-in fade-in-50 duration-200">
          <Card className="card-specular p-8 sm:p-12 text-center rounded-2xl relative overflow-hidden bg-gradient-to-br from-card via-card to-amber-500/10 dark:to-amber-500/10">
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
            <div className="mx-auto max-w-md space-y-3">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/15 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-500/30 shadow-sm dark:shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <FileText className="size-5" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Available for Client & Freelance Engagements</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am currently open for freelance projects, full-stack consulting, and selective client work. As new engagements are delivered and cleared for public showcase, case studies and deliverables will be documented here.
              </p>
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="sm" className="group rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold shadow-md active:scale-[0.98] transition-all pl-4 pr-2 py-1.5 inline-flex items-center gap-2">
                  <a href="#contact">
                    <span>Discuss a Project</span>
                    <span className="flex size-5 items-center justify-center rounded-md bg-black/15 transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="size-3 text-black" />
                    </span>
                  </a>
                </Button>
                <ResumeModal
                  resume={resume}
                  email={email}
                  pdfUrl={pdfUrl}
                  summary={summary}
                  education={education}
                  skillsList={skillsList}
                  trigger={
                    <Button size="sm" variant="outline" className="rounded-xl border-border/80 hover:text-amber-800 dark:hover:text-amber-400 shadow-sm active:scale-[0.98] transition-all">
                      View Credentials
                    </Button>
                  }
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Tab 3: Projects */}
        <TabsContent value="side" className="mt-6 animate-in fade-in-50 duration-200">
          <div className="grid gap-6 sm:grid-cols-2">
            {sideProjectsList.map((project) => {
              const isApex = project.id === "apex";

              return (
                <Card
                  key={project.id}
                  className={`card-specular relative overflow-hidden p-2 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-card via-card ${
                    isApex
                      ? "to-cyan-500/10 dark:to-cyan-500/10 sm:col-span-2"
                      : "to-purple-500/10 dark:to-purple-500/10 sm:col-span-2"
                  }`}
                >
                  <div
                    className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${
                      isApex
                        ? "from-cyan-400 via-blue-500 to-indigo-500"
                        : "from-purple-400 via-indigo-400 to-cyan-500"
                    }`}
                  />
                  <div className="p-4 sm:p-6">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
                            isApex
                              ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.18)]"
                              : "border-purple-500/30 bg-purple-500/10 text-purple-800 dark:text-purple-300 hover:bg-purple-500/20"
                          }`}
                        >
                          <span className={`size-1.5 rounded-full ${isApex ? "bg-cyan-400" : "bg-purple-400"} animate-ping`} />
                          <ExternalLink className="size-3" />
                          {project.liveUrl.replace(/^https?:\/\//, "")}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all shadow-xs"
                          title="View Source Repository"
                        >
                          <Github className="size-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    {isApex ? <ApexPreview /> : <PortfolioSitePreview />}

                    <CardHeader className="px-0 pb-2 pt-5">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="font-serif text-2xl sm:text-3xl">
                          {project.title}
                        </CardTitle>
                        {project.badge && (
                          <Badge
                            variant="outline"
                            className={`shadow-xs font-mono text-[11px] uppercase tracking-wider ${
                              isApex
                                ? "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30"
                                : "bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30"
                            }`}
                          >
                            {project.badge}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2 px-0 pt-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium border shadow-2xs ${
                            isApex
                              ? "border-cyan-300 dark:border-cyan-500/25 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300"
                              : "border-purple-300 dark:border-purple-500/25 bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </CardContent>
                  </div>
                </Card>
              );
            })}

            {/* Polite 'More to come' card */}
            <Card className="relative overflow-hidden p-6 border-dashed border-border/80 bg-secondary/30 flex flex-col items-center justify-center text-center min-h-[160px] rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:col-span-2">
              <span className="size-2 rounded-full bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse mb-2" />
              <p className="font-serif text-base text-foreground/90">More Projects in Progress</p>
              <p className="text-xs text-muted-foreground mt-1.5 max-w-sm leading-relaxed">
                Active tools, packages, and open-source software will be posted here as they are published.
              </p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

interface SkillsProps {
  skillsList: Record<string, string[]>;
}

function Skills({ skillsList }: SkillsProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getDomainConfig = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("agentic") || cat.includes("ai")) {
      return {
        dotClass: "bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]",
        badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/25 dark:hover:bg-emerald-500/20",
        borderGlow: "from-emerald-400 via-teal-400 to-cyan-500",
      };
    }
    if (cat.includes("frontend")) {
      return {
        dotClass: "bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_8px_#38bdf8]",
        badgeClass: "bg-cyan-50 text-cyan-800 border-cyan-300 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/25 dark:hover:bg-cyan-500/20",
        borderGlow: "from-cyan-400 via-blue-400 to-indigo-500",
      };
    }
    if (cat.includes("backend")) {
      return {
        dotClass: "bg-indigo dark:bg-indigo shadow-[0_0_8px_#818cf8]",
        badgeClass: "bg-indigo-50 text-indigo-900 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo/10 dark:text-indigo-300 dark:border-indigo/30 dark:hover:bg-indigo/20",
        borderGlow: "from-indigo-400 via-purple-400 to-indigo-500",
      };
    }
    if (cat.includes("product") || cat.includes("database")) {
      return {
        dotClass: "bg-purple-600 dark:bg-purple-400 shadow-[0_0_8px_#c084fc]",
        badgeClass: "bg-purple-50 text-purple-800 border-purple-300 hover:bg-purple-100 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/25 dark:hover:bg-purple-500/20",
        borderGlow: "from-purple-400 via-indigo-400 to-purple-500",
      };
    }
    return {
      dotClass: "bg-amber-600 dark:bg-amber-400 shadow-[0_0_8px_#fbbf24]",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/25 dark:hover:bg-amber-500/20",
      borderGlow: "from-amber-400 via-yellow-400 to-amber-500",
    };
  };

  return (
    <section
      id="skills"
      ref={ref}
      className={`border-y border-border/60 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stack</p>
        </div>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          Skills & Core Technologies
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Production-tested toolchain across full-stack architecture, systems security, and reliable databases.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {Object.entries(skillsList).map(([category, items]) => {
            const config = getDomainConfig(category);
            return (
              <div key={category} className="card-specular relative overflow-hidden rounded-2xl p-6">
                <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${config.borderGlow}`} />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`size-2 rounded-full ${config.dotClass}`} />
                    <h3 className="text-xs font-bold tracking-wider text-foreground/90 uppercase">{category}</h3>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">{items.length} skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium tracking-normal transition-all hover:scale-105 cursor-default border shadow-xs ${config.badgeClass}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
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
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "").trim();
    const body = String(data.get("body") || "").trim();

    if (!subject || !body) {
      toast.error("Please fill in both subject and message");
      return;
    }

    toast.success("Opening your email client...");
    setDialogOpen(false);

    const encSubject = encodeURIComponent(subject);
    const encBody = encodeURIComponent(body);
    window.location.href = `mailto:nagulagamchanakya2211@gmail.com?subject=${encSubject}&body=${encBody}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative mx-auto max-w-5xl px-5 py-24 transition-all duration-700 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Subtle top glow for landing zone */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-b from-sage/10 via-indigo/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-sage" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</p>
      </div>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Open for freelance work & conversations
      </h2>
      <p className="mt-4 max-w-lg text-lg text-foreground/90 font-serif italic">
        "Let's build something. I am available for freelance work, consulting, and select software engineering opportunities."
      </p>

      <div className="mt-10">
        <ContactCards />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
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
                <Input id="subject" name="subject" placeholder="Project / Freelance Inquiry..." required className="rounded-xl bg-secondary/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="body" className="text-xs">Message</Label>
                <Textarea id="body" name="body" placeholder="What are the details of the project or opportunity?" required rows={4} className="rounded-xl bg-secondary/50" />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="rounded-xl mt-2 flex-1 btn-sage-glow">Open mail client</Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl mt-2 border-border/80 hover:border-sage hover:text-sage"
                  onClick={() => {
                    navigator.clipboard.writeText("nagulagamchanakya2211@gmail.com");
                    toast.success("Email address copied to clipboard!");
                  }}
                >
                  Copy Address
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Button
          size="lg"
          variant="outline"
          className="rounded-xl border-border/80 hover:border-sage/50 hover:bg-secondary/60 transition-all"
          onClick={() => {
            navigator.clipboard.writeText("nagulagamchanakya2211@gmail.com");
            toast.success("Copied nagulagamchanakya2211@gmail.com to clipboard!");
          }}
        >
          Copy Email Address
        </Button>
      </div>
    </section>
  );
}

export function PortfolioHome({ initialData }: { initialData?: DynamicData | null }) {
  const [data] = useState<DynamicData | null>(initialData || null);

  const businessesList = data?.businesses || defaultBusinesses;
  const sideProjectsList = data?.sideProjects || defaultSideProjects;
  const skillsList = data?.skills || defaultSkills;

  return (
    <div id="top" className="min-h-screen bg-background text-foreground relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-card focus:text-foreground focus:border focus:border-sage focus:rounded-xl focus:shadow-xl font-medium text-sm transition-all"
      >
        Skip to main content
      </a>
      <IntroOverlay />

      <LeftRailNav resume={data?.resume} />
      <SiteNav />
      <Companion />

      <main id="main-content">
        <Hero
          tagline={data?.heroTagline}
          availabilityStatus={data?.availabilityStatus}
          liveCount={businessesList.filter((p) => Boolean(p.liveUrl)).length + sideProjectsList.filter((p) => p.id === "apex").length}
          email={data?.resumeOverride?.email}
          pdfUrl={data?.resumeOverride?.resumePdfUrl}
          summary={data?.resumeOverride?.summary}
          education={data?.resumeOverride?.education}
          skillsList={skillsList}
          resume={data?.resume}
        />
        <Separator />
        <About
          email={data?.resumeOverride?.email}
          pdfUrl={data?.resumeOverride?.resumePdfUrl}
          summary={data?.resumeOverride?.summary}
          education={data?.resumeOverride?.education}
          skillsList={skillsList}
          resume={data?.resume}
        />
        <Separator />
        <Projects
          businessesList={businessesList}
          sideProjectsList={sideProjectsList}
          email={data?.resumeOverride?.email}
          pdfUrl={data?.resumeOverride?.resumePdfUrl}
          summary={data?.resumeOverride?.summary}
          education={data?.resumeOverride?.education}
          skillsList={skillsList}
          resume={data?.resume}
        />
        <MarqueeTicker />
        <Skills skillsList={skillsList} />
        <Separator />
        <Contact />
      </main>

      <footer className="border-t border-border/80 bg-card/40 pt-16 pb-12">
        <div className="mx-auto max-w-5xl px-5 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                LET'S BUILD SOMETHING{" "}
                <span className="rounded-md bg-sage/20 px-2 py-0.5 text-sage border border-sage/30">
                  REAL
                </span>{" "}
                TOGETHER.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Building Trelio. Open for high-impact software engineering roles.
              </p>
            </div>
            <a
              href="#top"
              className="flex size-12 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-sage hover:text-sage hover:scale-110"
              title="Back to top"
            >
              <ArrowUp className="size-5" />
            </a>
          </div>

          <Companion footerOnly />

          <Separator className="my-8" />

          <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Nagulagam Chanakya. All rights reserved.</p>
            <p>Designed & Engineered with care · Trelio SaaS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
