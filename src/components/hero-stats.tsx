interface HeroStatsProps {
  status?: string;
  liveCount?: number;
}

export function HeroStats({ status = "Taking 2 builds a month · booking the next slot", liveCount = 2 }: HeroStatsProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {/* Blinking availability dot */}
      <div className="flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-xs font-medium text-sage">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-sage" />
        </span>
        {status}
      </div>

      <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{liveCount}</span> Live Systems
      </div>
      <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Trelio</span> Founder
      </div>
    </div>
  );
}
