import React, { useState } from "react";
import { Calculator, CheckCircle2, Lock, ArrowRight, ShieldCheck, Factory, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroQuoteCard() {
  const [tab, setTab] = useState<"plant" | "agency">("plant");

  return (
    <div className="card-specular relative overflow-hidden rounded-2xl border border-border/80 bg-card backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] w-full max-w-md mx-auto">
      {/* Top Header / Mode Switcher */}
      <div className="flex items-center justify-between border-b border-border/70 bg-secondary/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-emerald-500 inline-block shadow-sm" />
          <span className="font-mono text-xs font-semibold text-foreground">
            {tab === "plant" ? "Apex Packaging · Plant Quote" : "Trelio · Milestone Lock"}
          </span>
        </div>

        {/* Plant vs Agency Switcher */}
        <div className="flex items-center gap-1 rounded-lg bg-card p-0.5 border border-border/70 text-[11px] font-mono">
          <button
            type="button"
            onClick={() => setTab("plant")}
            className={`px-2 py-0.5 rounded-md transition-colors ${
              tab === "plant" ? "bg-emerald-600 text-white font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Plant
          </button>
          <button
            type="button"
            onClick={() => setTab("agency")}
            className={`px-2 py-0.5 rounded-md transition-colors ${
              tab === "agency" ? "bg-indigo text-white font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Agency
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-4 text-left">
        {tab === "plant" ? (
          <>
            {/* Plant Screen Still */}
            <div className="rounded-xl border border-border/70 bg-secondary/50 p-3.5 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                <span>Job: Beverage Roll Labels (BOPP 60μm)</span>
                <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-emerald-600/30 text-emerald-800 dark:text-emerald-400">
                  FINAT 4
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="rounded-lg bg-card p-2 border border-border/60">
                  <p className="text-[10px] text-muted-foreground">Quantity</p>
                  <p className="font-bold text-foreground">50,000</p>
                </div>
                <div className="rounded-lg bg-card p-2 border border-border/60">
                  <p className="text-[10px] text-muted-foreground">Running Meters</p>
                  <p className="font-bold text-foreground">3,850 m</p>
                </div>
                <div className="rounded-lg bg-card p-2 border border-border/60">
                  <p className="text-[10px] text-muted-foreground">Calculated Rate</p>
                  <p className="font-bold text-emerald-800 dark:text-emerald-400">₹0.64 / pc</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 text-muted-foreground">
                <span>Core: 76mm (3") · Web: 330mm</span>
                <span className="text-emerald-800 dark:text-emerald-400 font-semibold">Ready for Press</span>
              </div>
            </div>

            {/* Grounded Plant Bullets */}
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Calculates running meters & substrate costs in one pass.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Rates generated from the exact specs the floor runs.</span>
              </li>
            </ul>
          </>
        ) : (
          <>
            {/* Agency Screen Still */}
            <div className="rounded-xl border border-border/70 bg-secondary/50 p-3.5 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                <span>Project: Brand Identity & Web App</span>
                <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-indigo/30 text-indigo">
                  Stage 02 Locked
                </Badge>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between rounded-lg bg-card p-2 border border-border/60 text-xs">
                  <span className="text-muted-foreground">Stage 01 · Wireframes</span>
                  <span className="text-emerald-800 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="size-3" /> Paid & Released
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-card p-2 border border-indigo/40 text-xs">
                  <span className="text-foreground font-semibold">Stage 02 · Full Build</span>
                  <span className="text-indigo font-semibold flex items-center gap-1">
                    <Lock className="size-3" /> Awaiting Client Auth
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 text-muted-foreground">
                <span>Settlement: Direct UPI / Bank</span>
                <span className="text-indigo font-semibold">Work pauses on delay</span>
              </div>
            </div>

            {/* Grounded Agency Bullets */}
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-indigo shrink-0 mt-0.5" />
                <span>Next stage stays locked until the current milestone is paid.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-3.5 text-indigo shrink-0 mt-0.5" />
                <span>Client pays directly into your account; we don't hold the funds.</span>
              </li>
            </ul>
          </>
        )}

        {/* Footer Link */}
        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
          <a
            href="#projects"
            className="text-muted-foreground hover:text-foreground font-medium transition-colors inline-flex items-center gap-1"
          >
            <span>Try live interactive system</span>
            <ArrowRight className="size-3" />
          </a>
          <span className="font-mono text-[11px] text-muted-foreground">Fixed price · You keep repo</span>
        </div>
      </div>
    </div>
  );
}
