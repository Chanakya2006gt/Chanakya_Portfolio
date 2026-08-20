export function TrelioPreview() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-secondary p-4 outline outline-1 -outline-offset-1 outline-white/10 hover:border-sage/30 transition-colors">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-sage" />
          </span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            Stage 02 · Design
          </span>
        </div>
        <span className="animate-pulse rounded-full bg-sage/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sage border border-sage/30">
          Awaiting approval
        </span>
      </div>
      <div className="grid gap-2">
        {["Scope locked", "Client sign-off", "Payment before execution"].map(
          (row, i) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-lg bg-card px-3.5 py-2.5 transition-all hover:translate-x-1 hover:border-sage/20 border border-transparent"
            >
              <span className="text-xs text-foreground/90">{row}</span>
              <span
                className={
                  i < 2
                    ? "text-[10px] font-medium uppercase tracking-wider text-sage"
                    : "text-[10px] font-medium uppercase tracking-wider text-muted-foreground animate-pulse"
                }
              >
                {i < 2 ? "✓ Done" : "⏳ Hold"}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export function SidePreview({ title }: { title: string }) {
  return (
    <div className="relative flex h-28 items-end overflow-hidden rounded-xl bg-secondary p-4 outline outline-1 -outline-offset-1 outline-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent,rgba(255,255,255,0.03))]" />
      <p className="relative font-serif text-xl text-foreground/80">{title}</p>
    </div>
  );
}
