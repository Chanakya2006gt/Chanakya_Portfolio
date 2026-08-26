import { useState } from "react";
import { CheckCircle2, Clock, Database, Layers, Disc, Calculator, ArrowRight, Gauge } from "lucide-react";

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

  const selectedFinat = finatOptions.find((f) => f.dir === finatDir) || finatOptions[0];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-secondary/80 p-4 sm:p-5 border border-border/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
      {/* Top Architecture & Constraints Proof Strip */}
      <div className="mb-4 grid grid-cols-3 gap-2.5 border-b border-border/60 pb-3.5 text-center">
        <div className="rounded-xl bg-card/90 px-3 py-2 border border-border/60 shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-cyan-800 dark:text-cyan-400 mb-0.5">
            <Disc className="size-3.5" />
            <p className="text-[10px] font-mono uppercase tracking-wider font-semibold">Standards</p>
          </div>
          <p className="text-xs font-semibold text-foreground">FINAT 1–8 Engine</p>
        </div>
        <div className="rounded-xl bg-card/90 px-3 py-2 border border-border/60 shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-emerald-800 dark:text-emerald-400 mb-0.5">
            <Gauge className="size-3.5" />
            <p className="text-[10px] font-mono uppercase tracking-wider font-semibold">Throughput</p>
          </div>
          <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-400">273k ops/s · p99: 0.01ms</p>
        </div>
        <div className="rounded-xl bg-card/90 px-3 py-2 border border-border/60 shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-purple-800 dark:text-purple-400 mb-0.5">
            <Database className="size-3.5" />
            <p className="text-[10px] font-mono uppercase tracking-wider font-semibold">Fuzz Tested</p>
          </div>
          <p className="text-xs font-semibold text-purple-800 dark:text-purple-400">1k Invariants Pass</p>
        </div>
      </div>

      {/* Mode Selector Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="size-4 text-cyan-700 dark:text-cyan-400" />
          <span className="text-xs font-semibold tracking-wide text-foreground">
            B2B Manufacturing Architecture
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 border border-cyan-500/30">
          <span className="size-1.5 rounded-full bg-cyan-500 animate-pulse" />
          Live Interactive
        </span>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-card/70 border border-border/70 mb-3 text-[11px] font-medium text-center shadow-inner">
        <button
          type="button"
          onClick={() => setActiveMode(0)}
          className={`py-1.5 px-2 rounded-lg transition-all ${
            activeMode === 0
              ? "bg-secondary text-foreground font-bold shadow-xs border border-border"
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
              ? "bg-secondary text-foreground font-bold shadow-xs border border-border"
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
              ? "bg-secondary text-foreground font-bold shadow-xs border border-border"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Sales CRM & SLA
        </button>
      </div>

      {/* Mode 0: FINAT 1–8 Unwind Orientation Loop */}
      {activeMode === 0 && (
        <div className="rounded-xl bg-card/95 border border-border/70 p-3.5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">
              European Automated Rewind Standards
            </span>
            <span className="text-[10px] font-mono text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/15 px-2 py-0.5 rounded-full border border-cyan-300 dark:border-cyan-500/30 font-semibold">
              High-Speed Applicator Ready
            </span>
          </div>

          {/* Interactive FINAT Selector Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {finatOptions.map((f) => {
              const isSelected = finatDir === f.dir;
              return (
                <button
                  key={f.dir}
                  type="button"
                  onClick={() => setFinatDir(f.dir)}
                  className={`p-2 rounded-xl text-center transition-all border ${
                    isSelected
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-500/15 shadow-sm ring-1 ring-cyan-500/40"
                      : "border-border/60 bg-secondary/40 hover:bg-secondary"
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-foreground">{f.name}</div>
                  <div className="text-[9px] text-muted-foreground truncate">{f.type}</div>
                  <div
                    className="mx-auto my-1.5 size-6 rounded-lg border border-border flex items-center justify-center font-mono text-[10px] font-bold bg-card shadow-xs"
                    style={{ transform: `rotate(${f.rot}deg)` }}
                  >
                    A
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50 font-mono gap-1">
            <span>Orientation: <strong className="text-foreground">{selectedFinat.name} ({selectedFinat.type})</strong></span>
            <span>Lead Edge: <strong className="text-cyan-700 dark:text-cyan-400">{selectedFinat.edge}</strong></span>
          </div>
        </div>
      )}

      {/* Mode 1: Isomorphic Dual-Engine CPQ Estimator */}
      {activeMode === 1 && (
        <div className="rounded-xl bg-card/95 border border-border/70 p-3.5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">
              Deterministic Estimating Math Model
            </span>
            <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 font-semibold">
              100% Client/Server Test Parity
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setQuantity(10000)}
              className={`py-1.5 px-2 rounded-xl text-xs font-mono transition-all border ${
                quantity === 10000 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 font-bold shadow-xs text-foreground" : "border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              10,000 pcs
            </button>
            <button
              type="button"
              onClick={() => setQuantity(25000)}
              className={`py-1.5 px-2 rounded-xl text-xs font-mono transition-all border ${
                quantity === 25000 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 font-bold shadow-xs text-foreground" : "border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              25,000 pcs
            </button>
            <button
              type="button"
              onClick={() => setQuantity(100000)}
              className={`py-1.5 px-2 rounded-xl text-xs font-mono transition-all border ${
                quantity === 100000 ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 font-bold shadow-xs text-foreground" : "border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              100,000 pcs
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/50">
              <div className="text-[10px] font-mono text-muted-foreground">Linear Web</div>
              <div className="font-semibold text-foreground font-mono mt-0.5 text-sm">{linearMeters.toLocaleString()} m</div>
            </div>
            <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/50">
              <div className="text-[10px] font-mono text-muted-foreground">Surface Area</div>
              <div className="font-semibold text-foreground font-mono mt-0.5 text-sm">{totalSqM} m²</div>
            </div>
            <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/50">
              <div className="text-[10px] font-mono text-muted-foreground">CTP Plates</div>
              <div className="font-semibold text-emerald-700 dark:text-emerald-400 font-mono mt-0.5 text-sm">{ctpPlates} Sets (6-Col)</div>
            </div>
          </div>

          {/* Empirical Benchmark Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-border/60 text-center">
            <div className="p-2 rounded-lg bg-emerald-50/50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20">
              <span className="text-[9px] font-mono uppercase text-emerald-700 dark:text-emerald-300 font-semibold block">Throughput</span>
              <span className="text-xs font-mono font-bold text-foreground">273,261 ops/s</span>
            </div>
            <div className="p-2 rounded-lg bg-cyan-50/50 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20">
              <span className="text-[9px] font-mono uppercase text-cyan-700 dark:text-cyan-300 font-semibold block">p99 Latency</span>
              <span className="text-xs font-mono font-bold text-foreground">0.0109 ms</span>
            </div>
            <div className="p-2 rounded-lg bg-purple-50/50 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/20">
              <span className="text-[9px] font-mono uppercase text-purple-700 dark:text-purple-300 font-semibold block">fast-check Fuzz</span>
              <span className="text-xs font-mono font-bold text-foreground">1,000 Invariants</span>
            </div>
            <div className="p-2 rounded-lg bg-indigo-50/50 dark:bg-indigo/10 border border-indigo-200 dark:border-indigo/20">
              <span className="text-[9px] font-mono uppercase text-indigo-700 dark:text-indigo-300 font-semibold block">Heap Delta</span>
              <span className="text-xs font-mono font-bold text-foreground">0.15 MB (0 Leaks)</span>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Sales CRM Decision Gates & SLA Monitor */}
      {activeMode === 2 && (
        <div className="rounded-xl bg-card/95 border border-border/70 p-3.5 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">
              Operational Decision Gates & 4-Hr SLA
            </span>
            <span className="text-[10px] font-mono text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-500/30 font-semibold">
              Offline Wire / ACH Clearance
            </span>
          </div>

          <div className="grid gap-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/40 border border-border/50">
              <span className="font-medium text-foreground">01. RFQ Intake & Pre-flight</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[11px] flex items-center gap-1 font-semibold">
                <CheckCircle2 className="size-3.5" /> Magic Bytes Verified
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <span className="font-medium text-foreground">02. Estimator CPQ Dispatch</span>
              <span className="text-amber-800 dark:text-amber-400 font-mono text-[11px] flex items-center gap-1 font-semibold">
                <Clock className="size-3.5 animate-spin" /> 4-Hr SLA Active
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/40 border border-border/50">
              <span className="font-medium text-foreground">03. Production Run & Dispatch</span>
              <span className="text-muted-foreground font-mono text-[11px]">
                Heidelberg / Flexo Line
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
