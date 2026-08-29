import React from "react";
import { Layers, FileText, Database, Code2, ShieldCheck, ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function MethodSection() {
  const { ref, isVisible } = useScrollAnimation();

  const phases = [
    {
      phase: "Phase 01",
      days: "Days 1–2",
      title: "Workflow Teardown & Specification",
      badge: "Discovery & Spec",
      desc: "We analyze your current manual workflow (spreadsheets, WhatsApp, email) and map every state transition: quote generation, client approvals, revisions, and payment settlement.",
      deliverable: "Written Workflow Specification & Architecture Blueprint",
      icon: FileText,
      color: "emerald",
      points: [
        "Complete state machine & transition rules mapped",
        "Strict boundary checklist: core in-scope vs out-of-scope distractions",
        "Stack selection tailored to throughput & scale requirements",
      ],
    },
    {
      phase: "Phase 02",
      days: "Days 3–4",
      title: "Data Modeling & Security Guardrails",
      badge: "System Design",
      desc: "We establish the foundational data architecture before writing application code, locking down PostgreSQL schemas, multi-tenant boundaries, and cryptographic defenses.",
      deliverable: "Living ARCHITECTURE.md, SECURITY.md & Migration Schemas",
      icon: Database,
      color: "indigo",
      points: [
        "Multi-tenant PostgreSQL schema design with state invariants",
        "Row-Level Security (RLS), HMAC signatures & AES-256 deliverable encryption",
        "Accessible design token system (60-30-10 palette, WCAG 2.2 AA)",
      ],
    },
    {
      phase: "Phase 03",
      days: "Day 5",
      title: "Milestone Blueprint & Verification Gates",
      badge: "Implementation Plan",
      desc: "We break the full build into sequential 2-day milestones with explicit automated testing criteria and manual verification gates before execution begins.",
      deliverable: "Tailored implementation_plan.md & DECISION_LOG.md",
      icon: Layers,
      color: "cyan",
      points: [
        "Sequential milestone roadmap with zero ambiguity",
        "Automated test acceptance criteria defined in advance",
        "Single source of truth decision log initialized",
      ],
    },
    {
      phase: "Phase 04",
      days: "Days 6–11",
      title: "Full-Stack Execution & System Assembly",
      badge: "Core Engineering",
      desc: "Modular, high-velocity development assembling the client interface, API endpoints, payment gateway webhooks (Razorpay/Stripe), and deterministic business logic.",
      deliverable: "Working Staging Deployment on Live URL",
      icon: Code2,
      color: "purple",
      points: [
        "Frontend UI, SSR hydration & responsive layout implementation",
        "Deterministic isomorphic calculation engines (e.g. CPQ pricing math)",
        "Payment webhooks, audit trails & transactional locking",
      ],
    },
    {
      phase: "Phase 05",
      days: "Days 12–15",
      title: "Hardening, Automated Testing & Handover",
      badge: "Definition of Done",
      desc: "Zero-compromise verification: every user flow is battle-tested with automated Playwright suites, security headers are verified, and the full repository is handed over.",
      deliverable: "Production Go-Live on Custom Domain + 14-Day Warranty",
      icon: ShieldCheck,
      color: "emerald",
      points: [
        "Automated Playwright smoke & integration suites covering every route",
        "Web quality, Core Web Vitals & CSP security header audits",
        "Video walkthrough recording (Loom) + repository transfer + 14-day warranty",
      ],
    },
  ];

  return (
    <section
      id="method"
      ref={ref}
      className={`border-y border-border/60 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-sage" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">The Delivery Factory</p>
        </div>

        <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              The 15-Day Systems Factory
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
              How a single independent engineer delivers production-grade operational systems in 15 days with more predictability than a 10-person agency.
            </p>
          </div>

          <Badge variant="outline" className="border-border/80 font-mono text-xs px-3 py-1 self-start md:self-auto shrink-0">
            Repeatable 5-Phase Operating System
          </Badge>
        </div>

        {/* 5-Phase Timeline Card List */}
        <div className="mt-12 space-y-6">
          {phases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.phase}
                className="card-specular relative overflow-hidden rounded-2xl p-6 sm:p-7 border border-border/70 bg-card/90 shadow-sm transition-all hover:border-border"
              >
                <div className="grid gap-6 md:grid-cols-[1.2fr_1.8fr] items-start">
                  {/* Left Column: Phase & Overview */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-9 items-center justify-center rounded-xl bg-secondary border border-border/80 text-foreground">
                        <Icon className="size-4.5 text-sage" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-sage">{item.phase}</span>
                          <span className="text-xs font-mono text-muted-foreground">· {item.days}</span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl text-foreground font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="pt-1">
                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-secondary/80 px-2.5 py-1 border border-border/60 text-[11px] font-mono text-foreground font-semibold">
                        <Terminal className="size-3 text-sage" />
                        <span>Deliverable: {item.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Execution Checkpoints */}
                  <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 sm:p-5 space-y-2.5">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Execution Checkpoints:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-foreground/90">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 text-sage shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 rounded-2xl border border-border/70 bg-gradient-to-r from-card via-card to-emerald-500/10 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg text-foreground font-semibold">Ready to de-risk your workflow?</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Start with a 3-Day Paid Diagnosis (₹40,000) — 100% credited against the full build if you proceed.
            </p>
          </div>
          <a
            href="/#pricing"
            className="btn-sage-glow shrink-0 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md inline-flex items-center gap-2"
          >
            <span>View Fixed Pricing</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
