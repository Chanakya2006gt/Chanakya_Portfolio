import { FileText, Database, Code2, ShieldCheck, ArrowRight, CheckCircle2, UserCheck, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function MethodSection() {
  const { ref, isVisible } = useScrollAnimation();

  const phases = [
    {
      phase: "Phase 01",
      days: "Days 1–3",
      title: "Paid Diagnosis & Live Prototype",
      badge: "De-Risking",
      desc: "We tear down your current manual quoting or payment path and map every edge case into deterministic software rules.",
      whatYouGive: "2 sample quotes, 1 rate sheet/spreadsheet, and a 45-minute phone walkthrough.",
      whatYouClickOrSign: "1 deployed working screen on a live URL + written workflow map + guaranteed fixed quote for the build.",
      icon: FileText,
      points: [
        "Every quote state, revision rule, and approval bottleneck mapped",
        "100% of the ₹40k diagnosis credited against the full build",
        "You test the working UI on your phone before committing to the build",
      ],
    },
    {
      phase: "Phase 02",
      days: "Days 4–5",
      title: "Math & Logic Lock",
      badge: "Architecture",
      desc: "We encode your floor specs, material yields, roll geometries, or milestone payment triggers into automated calculation logic.",
      whatYouGive: "Confirmation of rate tiers, material specs, and team role permissions (e.g. clerk vs GM).",
      whatYouClickOrSign: "Calculation engine verified against 100% of your sample quotes with zero math drift.",
      icon: Database,
      points: [
        "Deterministic rate formulas passing all your historical test cases",
        "Role-based access rules locking down operator vs management actions",
        "Zero calculation errors before a single frontend screen is styled",
      ],
    },
    {
      phase: "Phase 03",
      days: "Days 6–10",
      title: "Core System Assembly",
      badge: "Engineering",
      desc: "Full-stack construction: assembling the clerk interface, PDF quote generators, audit ledger, and payment integrations.",
      whatYouGive: "Logo/brand assets, custom domain DNS access, and gateway credentials (if collecting payments).",
      whatYouClickOrSign: "Private staging environment where your staff can create real quotes and export confirmed PDFs.",
      icon: Code2,
      points: [
        "Clerk can configure a complete quote in under 90 seconds",
        "Instant branded PDF quote generator matching floor specs",
        "Stage locks and direct bank settlement routes connected",
      ],
    },
    {
      phase: "Phase 04",
      days: "Days 11–13",
      title: "Floor Stress Testing & Review",
      badge: "Verification",
      desc: "Your team runs live production quotes through the staging system in parallel with your existing WhatsApp/Excel process.",
      whatYouGive: "5 real incoming quote requests run in parallel by your clerks.",
      whatYouClickOrSign: "Review and sign-off on the staging system after verifying speed, quote accuracy, and UX.",
      icon: UserCheck,
      points: [
        "Clerks test real jobs to catch real-world workflow friction",
        "Automated regression suites ensuring no edge cases break",
        "Refinements completed within 24 hours of feedback",
      ],
    },
    {
      phase: "Phase 05",
      days: "Days 14–15",
      title: "Custom Domain Go-Live & Code Handover",
      badge: "Handover",
      desc: "We point the system to your custom domain, transfer the full git repository, and begin your 14-day operational warranty.",
      whatYouGive: "Final sign-off and custom domain DNS pointer.",
      whatYouClickOrSign: "Live system on your domain + full repository transfer + 10-minute video walkthrough + 14-day warranty.",
      icon: ShieldCheck,
      points: [
        "100% repository handover: you own the code and the database",
        "Complete video walkthrough for your team and future maintenance",
        "14 days of dedicated on-call support for any questions or tweaks",
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
      <div className="mx-auto max-w-5xl px-5 py-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-sage" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">The 15-Day Method</p>
        </div>

        <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              How 15 days actually run step-by-step.
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
              Predictable, fixed-price engineering without agency overhead. You know exactly what you provide, what you click, and when your system goes live.
            </p>
          </div>

          <Badge variant="outline" className="border-border/80 font-mono text-xs px-3 py-1 self-start md:self-auto shrink-0">
            5 Grounded Phases · Fixed 15 Days
          </Badge>
        </div>

        {/* 5-Phase Timeline Card List */}
        <div className="mt-10 space-y-6">
          {phases.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.phase}
                className="card-specular relative overflow-hidden rounded-2xl p-6 sm:p-7 border border-border/70 bg-card/90 shadow-sm"
              >
                <div className="grid gap-6 md:grid-cols-[1.1fr_1.9fr] items-start">
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

                    <ul className="space-y-2 text-xs text-foreground/90 pt-1">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-sage shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: What you give vs what you click/sign */}
                  <div className="space-y-3">
                    <div className="rounded-xl border border-border/60 bg-secondary/40 p-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        <UserCheck className="size-3.5 text-sage" />
                        <span>What You Must Give:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                        {item.whatYouGive}
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 p-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1.5">
                        <PlayCircle className="size-3.5 text-emerald-700 dark:text-emerald-400" />
                        <span>What You Can Click / Sign:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground font-semibold leading-relaxed">
                        {item.whatYouClickOrSign}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 rounded-2xl border border-border/70 bg-gradient-to-r from-card via-card to-emerald-500/10 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg text-foreground font-semibold">Start with Phase 1 · Paid Diagnosis</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              3 days, ₹40,000, 100% credited against the build. You get 1 working screen and a guaranteed fixed quote.
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
