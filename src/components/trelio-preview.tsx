import { useState } from "react";
import { CheckCircle2, Clock, Lock, ShieldCheck, Database, Zap } from "lucide-react";

export function TrelioPreview() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 0,
      title: "Stage 01 · Scope Lock",
      desc: "Client requirements & milestone deliverables cryptographically locked.",
      status: "Verified",
      done: true,
    },
    {
      id: 1,
      title: "Stage 02 · Authorization & Escrow",
      desc: "Payment authorized into escrow before contractor writes a single line of code.",
      status: "Awaiting Client Auth",
      done: false,
      active: true,
    },
    {
      id: 2,
      title: "Stage 03 · Execution & Settlement",
      desc: "Milestone proof verified; funds automatically settle to freelancer UPI.",
      status: "Standby",
      done: false,
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-secondary/70 p-4 sm:p-5 border border-border/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
      {/* Real Architecture / Constraints Proof Strip */}
      <div className="mb-4 grid grid-cols-3 gap-2.5 border-b border-border/60 pb-3.5 text-center">
        <div className="rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm">
          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-0.5">
            <Database className="size-3" />
            <p className="text-[10px] font-mono uppercase tracking-wider">Schema</p>
          </div>
          <p className="text-xs font-semibold text-foreground">38 DB Tables</p>
        </div>
        <div className="rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm">
          <div className="flex items-center justify-center gap-1 text-indigo mb-0.5">
            <Lock className="size-3" />
            <p className="text-[10px] font-mono uppercase tracking-wider">Key Security</p>
          </div>
          <p className="text-xs font-semibold text-indigo">AES-256-GCM</p>
        </div>
        <div className="rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm">
          <div className="flex items-center justify-center gap-1 text-sage mb-0.5">
            <Zap className="size-3" />
            <p className="text-[10px] font-mono uppercase tracking-wider">Settlement</p>
          </div>
          <p className="text-xs font-semibold text-sage">Direct UPI/Rzp</p>
        </div>
      </div>

      {/* Interactive Authorization-Before-Execution Lifecycle Visualizer */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-sage" />
          <span className="text-xs font-semibold tracking-wide text-foreground">
            Authorization-Before-Execution Protocol
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-sage/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-sage border border-sage/30">
          <span className="size-1.5 rounded-full bg-sage animate-pulse" />
          Interactive Demo
        </span>
      </div>

      <div className="grid gap-2">
        {stages.map((stage, i) => {
          const isSelected = activeStage === i;
          return (
            <button
              key={stage.title}
              type="button"
              onClick={() => setActiveStage(i)}
              className={`w-full text-left rounded-xl p-3 transition-all duration-200 border ${
                isSelected
                  ? "bg-card border-sage/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_16px_rgba(0,0,0,0.3)]"
                  : "bg-card/40 border-border/40 hover:bg-card/70 hover:border-border/70"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`text-xs font-medium ${isSelected ? "text-foreground font-semibold" : "text-foreground/80"}`}>
                  {stage.title}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                    stage.done
                      ? "text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/20"
                      : isSelected
                      ? "text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-400/10 border-amber-300 dark:border-amber-400/20 animate-pulse"
                      : "text-muted-foreground bg-secondary border-border/40"
                  }`}
                >
                  {stage.done ? <CheckCircle2 className="size-3" /> : <Clock className="size-3" />}
                  {stage.status}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                {stage.desc}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SidePreview({ title }: { title: string }) {
  return (
    <div className="relative flex h-28 items-end overflow-hidden rounded-xl bg-secondary/80 p-4 border border-border/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,194,171,0.08),transparent_70%)]" />
      <p className="relative font-serif text-xl text-foreground/90">{title}</p>
    </div>
  );
}
