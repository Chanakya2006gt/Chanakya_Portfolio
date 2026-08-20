export function MarqueeTicker() {
  const items = [
    "FULL-STACK BUILDER",
    "FOUNDER @ TRELIO",
    "REACT & NODE.JS",
    "AUTHORIZATION-BEFORE-EXECUTION",
    "MULTI-TENANT SAAS",
    "POSTGRESQL",
    "TYPESCRIPT",
    "PAYMENTS & AUDIT LOGS",
  ];

  return (
    <div className="relative my-12 w-full overflow-hidden border-y border-border/60 bg-secondary/30 py-3.5 backdrop-blur-sm">
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center space-x-8">
            <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground/80 uppercase">
              {text}
            </span>
            <span className="size-1.5 rounded-full bg-sage/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
