import { useEffect, useState } from "react";

// ─── Cinematic timeline ─────────────────────────────────────────────────
// 0ms        Black screen visible (SSR renders this, covers content immediately)
// 0ms        Letters start dropping in one by one (staggered 80ms each)
// ~700ms     All 8 letters settled — full name visible with sage glow
// 700-2200ms HOLD: name sits with a pulsing aura bloom (1.5s commercial hold)
// 2200ms     Second bigger glow pulse + tagline + year stamp fade in
// 3500ms     Letters scatter/explode outward in unique directions
//            Overlay fades to transparent over 600ms
// 4100ms     Component unmounts itself — site content revealed
// ────────────────────────────────────────────────────────────────────────

// Each letter gets a unique scatter direction so they fan out dramatically
const SCATTER: Array<{ tx: string; ty: string; rot: string }> = [
  { tx: "-160px", ty: "-120px", rot: "-25deg" },
  { tx: "-80px",  ty: "-200px", rot: "-10deg" },
  { tx: "-40px",  ty: "-80px",  rot: "5deg"   },
  { tx: "20px",   ty: "-180px", rot: "15deg"  },
  { tx: "80px",   ty: "-100px", rot: "-5deg"  },
  { tx: "140px",  ty: "-220px", rot: "20deg"  },
  { tx: "200px",  ty: "-80px",  rot: "-15deg" },
  { tx: "160px",  ty: "-160px", rot: "30deg"  },
];

export function IntroOverlay() {
  // "entering" is the SSR-safe default — overlay is fully opaque black.
  // On the client, useEffect drives through the phases.
  const [phase, setPhase] = useState<"entering" | "hold" | "pulse2" | "explode" | "gone">("entering");

  useEffect(() => {
    // All timers are client-only. SSR renders static "entering" phase (solid black).
    const t1 = setTimeout(() => setPhase("hold"),    700);
    const t2 = setTimeout(() => setPhase("pulse2"),  2200);
    const t3 = setTimeout(() => setPhase("explode"), 3500);
    const t4 = setTimeout(() => setPhase("gone"),    4100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  if (phase === "gone") return null;

  const letters = "CHANAKYA".split("");
  const isExploding = phase === "explode";
  const isHolding   = phase === "hold" || phase === "pulse2";

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0b] overflow-hidden"
      style={{
        transition: isExploding ? "opacity 600ms ease-in" : undefined,
        opacity: isExploding ? 0 : 1,
        pointerEvents: isExploding ? "none" : "auto",
      }}
    >
      {/* ── Aura bloom layer 1 — ambient ── */}
      <div
        className="absolute rounded-full bg-sage/15 blur-3xl"
        style={{
          width: "500px",
          height: "500px",
          transform: phase === "pulse2" ? "scale(1.6)" : isHolding ? "scale(1.1)" : "scale(0.8)",
          opacity: phase === "pulse2" ? 0.6 : isHolding ? 0.4 : 0.15,
          transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
        }}
      />

      {/* ── Aura bloom layer 2 — tight sage halo ── */}
      <div
        className="absolute rounded-full bg-sage/25 blur-2xl"
        style={{
          width: "280px",
          height: "280px",
          transform: isHolding || isExploding ? "scale(1.3)" : "scale(0.4)",
          opacity: phase === "pulse2" ? 0.9 : isHolding ? 0.7 : 0,
          transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 800ms ease",
        }}
      />

      {/* ── Letters ── */}
      <div className="relative z-10 flex items-baseline gap-0 select-none">
        {letters.map((letter, idx) => {
          const scatter = SCATTER[idx];
          const entryDelay = idx * 80;

          let transform = "translateY(0) scale(1) rotate(0deg)";
          let opacity = 1;
          let filter = "blur(0px)";

          if (phase === "entering") {
            transform = "translateY(-60px) scale(0.7)";
            opacity = 0;
            filter = "blur(6px)";
          } else if (isExploding) {
            transform = `translate(${scatter.tx}, ${scatter.ty}) scale(2) rotate(${scatter.rot})`;
            opacity = 0;
            filter = "blur(12px)";
          }

          return (
            <span
              key={idx}
              style={{
                display: "inline-block",
                transform,
                opacity,
                filter,
                transition: isExploding
                  ? `transform 600ms cubic-bezier(0.55, 0, 1, 0.45) ${idx * 30}ms,
                     opacity 400ms ease ${idx * 20}ms,
                     filter 400ms ease`
                  : `transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1) ${entryDelay}ms,
                     opacity 400ms ease ${entryDelay}ms,
                     filter 400ms ease ${entryDelay}ms`,
              }}
              className="font-serif text-[clamp(3rem,12vw,7rem)] font-bold leading-none tracking-tighter text-white"
            >
              {letter}
            </span>
          );
        })}
      </div>

      {/* ── Sage glow duplicate (blurred) for letter bloom effect ── */}
      <div
        className="absolute z-10 flex items-baseline gap-0 select-none pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: isHolding ? (phase === "pulse2" ? 0.5 : 0.25) : 0,
          transition: "opacity 800ms ease",
          filter: "blur(8px)",
          color: "#8fa896",
        }}
      >
        {"CHANAKYA".split("").map((letter, idx) => (
          <span
            key={idx}
            className="font-serif text-[clamp(3rem,12vw,7rem)] font-bold leading-none tracking-tighter"
          >
            {letter}
          </span>
        ))}
      </div>

      {/* ── Tagline ── */}
      <p
        className="relative z-10 mt-6 font-mono text-[11px] tracking-[0.3em] uppercase"
        style={{
          color: "#8fa896",
          opacity: isHolding ? 1 : 0,
          transform: isHolding ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 600ms ease 200ms, transform 600ms ease 200ms",
        }}
      >
        Full-Stack Builder &nbsp;·&nbsp; Portfolio
      </p>

      {/* ── Year stamp ── */}
      <p
        className="relative z-10 mt-2 font-mono text-[10px] tracking-widest"
        style={{
          color: "rgba(143,168,150,0.4)",
          opacity: phase === "pulse2" ? 1 : 0,
          transition: "opacity 500ms ease",
        }}
      >
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
