import { useState } from "react";
import { CheckCircle2, Clock, Database, Layers, Disc, Calculator } from "lucide-react";

export function ApexPreview() {
  const [activeMode, setActiveMode] = useState(0);

  // Mode 1: FINAT Technical Rewind Selector
  const [finatDir, setFinatDir] = useState(1);

  const finatOptions = [
    { dir: 1, name: "FINAT 1", type: "Wound Out", edge: "Top Off First", rot: 0 },
    { dir: 2, name: "FINAT 2", type: "Wound Out", edge: "Bottom Off First", rot: 180 },
    { dir: 3, name: "FINAT 3", type: "Wound Out", edge: "Right Off First", rot: 90 },
    { dir: 4, name: "FINAT 4", type: "Wound Out", edge: "Left Off First", rot: 270 },
    { dir: 5, name: "FINAT 5", type: "Wound In", edge: "Top Off First", rot: 0 },
    { dir: 6, name: "FINAT 6", type: "Wound In", edge: "Bottom Off First", rot: 180 },
  ];

  // Mode 2: Real-Time CPQ Estimator Preview
  const [quantity, setQuantity] = useState(25000);
  const widthMm = 85;
  const heightMm = 120;
  const webGapMm = 3;
  const linearMeters = Math.round((quantity * (heightMm + webGapMm)) / 1000);
  const totalSqM = Number(((quantity * widthMm * (heightMm + webGapMm)) / 1000000).toFixed(1));
  const ctpPlates = 6; // CMYK + 2 Spot

  return (
    <div className="relative overflow-hidden rounded-2xl bg-secondary/70 p-4 sm:p-5 border border-border/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
      {/* Real Architecture / Constraints Proof Strip */}
      <div className="mb-4 grid grid-cols-3 gap-2.5 border-b border-border/60 pb-3.5 text-center">
        <div className="rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm">
          <div className="flex items-center justify-center gap-1 text-cyan-700 dark:text-cyan-400 mb-0.5">
            <Disc className="size-3" />
            <p className="text-[10px] font-mono uppercase tracking-wider">Standards</p>
          </div>
          <p className="text-xs font-semibold text-foreground">FINAT 1–8 Engine</p>
        </div>
        <div className="rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm">
          <div className="flex items-center justify-center gap-1 text-emerald-700 dark:text-emerald-400 mb-0.5">
            <Calculator className="size-3" />
            <p className="text-[10px] font-mono uppercase tracking-wider">Math Model</p>
          </div>
          <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Isomorphic CPQ</p>
        </div>
        <div className="rounded-xl bg-card/80 px-2.5 py-2 border border-border/50 shadow-sm">
          <div className="flex items-center justify-center gap-1 text-purple-700 dark:text-purple-400 mb-0.5">
            <Database className="size-3" />
            <p className="text-[10px] font-mono uppercase tracking-wider">Security</p>
          </div>
          <p className="text-xs font-semibold text-purple-700 dark:text-purple-400">Supabase RLS</p>
        </div>
      </div>

      {/* Mode Selector Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="size-4 text-cyan-600 dark:text-cyan-400" />
          <span className="text-xs font-semibold tracking-wide text-foreground">
            B2B Manufacturing Architecture
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 border border-cyan-500/30">
          <span className="size-1.5 rounded-full bg-cyan-500 animate-pulse" />
          Interactive Telemetry
        </span>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-card/60 border border-border/60 mb-3 text-[11px] font-medium text-center">
        <button
          type="button"
          onClick={() => setActiveMode(0)}
          className={`py-1.5 px-2 rounded-lg transition-all ${
            activeMode === 0
              ? "bg-card text-foreground font-semibold shadow-xs border border-border/60"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          FINAT Rewind
        </button>
        <button
          type="button"
          onClick={() => setActiveMode(1)}
          className={`py-1.5 px-2 rounded-lg transition-all ${
            activeMode === 1
              ? "bg-card text-foreground font-semibold shadow-xs border border-border/60"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          CPQ Math Parity
        </button>
        <button
          type="button"
          onClick={() => setActiveMode(2)}
          className={`py-1.5 px-2 rounded-lg transition-all ${
            activeMode === 2
              ? "bg-card text-foreground font-semibold shadow-xs border border-border/60"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Sales CRM & SLA
        </button>
      </div>

      {/* Mode 0: FINAT 1–8 Unwind Orientation Loop */}
      {activeMode === 0 && (
        <div className="rounded-xl bg-card/90 border border-border/60 p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">
              European Automated Rewind Standards
            </span>
            <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-500/20 font-medium">
              High-Speed Applicator Ready
            </span>
          </div>

          {/* Interactive FINAT Selector Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            {finatOptions.map((f) => {
              const isSelected = finatDir === f.dir;
              return (
                <button
                  key={f.dir}
                  type="button"
                  onClick={() => setFinatDir(f.dir)}
                  className={`p-2 rounded-lg text-center transition-all border ${
                    isSelected
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-500/10 shadow-xs"
                      : "border-border/50 bg-secondary/40 hover:bg-secondary"
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-foreground">{f.name}</div>
                  <div className="text-[9px] text-muted-foreground truncate">{f.type}</div>
                  <div
                    className="mx-auto my-1 size-5 rounded border border-border flex items-center justify-center font-mono text-[9px] font-bold bg-card"
                    style={{ transform: `rotate(${f.rot}deg)` }}
                  >
                    A
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/40 font-mono">
            <span>Orientation: <strong className="text-foreground">{finatOptions.find((f) => f.dir === finatDir)?.name} ({finatOptions.find((f) => f.dir === finatDir)?.type})</strong></span>
            <span>Lead: <strong className="text-cyan-700 dark:text-cyan-400">{finatOptions.find((f) => f.dir === finatDir)?.edge}</strong></span>
          </div>
        </div>
      )}

      {/* Mode 1: Isomorphic Dual-Engine CPQ Estimator */}
      {activeMode === 1 && (
        <div className="rounded-xl bg-card/90 border border-border/60 p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">
              Deterministic Estimating Math Model
            </span>
            <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/20 font-medium">
              100% Client/Server Test Parity
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setQuantity(10000)}
              className={`py-1 px-2 rounded-lg text-xs font-mono transition-all border ${
                quantity === 10000 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 font-bold" : "border-border/50 bg-secondary/30"
              }`}
            >
              10,000 pcs
            </button>
            <button
              type="button"
              onClick={() => setQuantity(25000)}
              className={`py-1 px-2 rounded-lg text-xs font-mono transition-all border ${
                quantity === 25000 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 font-bold" : "border-border/50 bg-secondary/30"
              }`}
            >
              25,000 pcs
            </button>
            <button
              type="button"
              onClick={() => setQuantity(100000)}
              className={`py-1 px-2 rounded-lg text-xs font-mono transition-all border ${
                quantity === 100000 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 font-bold" : "border-border/50 bg-secondary/30"
              }`}
            >
              100,000 pcs
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-secondary/50 border border-border/40">
              <div className="text-[10px] font-mono text-muted-foreground">Linear Web</div>
              <div className="font-semibold text-foreground font-mono">{linearMeters.toLocaleString()} m</div>
            </div>
            <div className="p-2 rounded-lg bg-secondary/50 border border-border/40">
              <div className="text-[10px] font-mono text-muted-foreground">Surface Area</div>
              <div className="font-semibold text-foreground font-mono">{totalSqM} m²</div>
            </div>
            <div className="p-2 rounded-lg bg-secondary/50 border border-border/40">
              <div className="text-[10px] font-mono text-muted-foreground">CTP Plates</div>
              <div className="font-semibold text-emerald-700 dark:text-emerald-400 font-mono">{ctpPlates} Sets (6-Col)</div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Sales CRM Decision Gates & SLA Monitor */}
      {activeMode === 2 && (
        <div className="rounded-xl bg-card/90 border border-border/60 p-3 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">
              Operational Decision Gates & 4-Hr SLA
            </span>
            <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-500/20 font-medium">
              Offline Wire / ACH Clearance
            </span>
          </div>

          <div className="grid gap-1.5 text-[11px]">
            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/40 border border-border/40">
              <span className="font-medium text-foreground">01. RFQ Intake & Pre-flight</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[10px] flex items-center gap-1 font-semibold">
                <CheckCircle2 className="size-3" /> Magic Bytes Verified
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <span className="font-medium text-foreground">02. Estimator CPQ Dispatch</span>
              <span className="text-amber-800 dark:text-amber-400 font-mono text-[10px] flex items-center gap-1 font-semibold">
                <Clock className="size-3 animate-spin" /> 4-Hr SLA Active
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/40 border border-border/40">
              <span className="font-medium text-foreground">03. Production Run & Dispatch</span>
              <span className="text-muted-foreground font-mono text-[10px]">
                Heidelberg / Flexo Line
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
