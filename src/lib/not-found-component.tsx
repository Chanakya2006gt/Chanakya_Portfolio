import { Compass, ArrowLeft } from "lucide-react";

export function AppNotFoundComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <span className="flex size-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/10 text-sage" aria-hidden="true">
        <Compass className="size-6" strokeWidth={2} />
      </span>

      <p className="font-mono text-xs uppercase tracking-widest text-sage">404</p>

      <h1 className="font-serif text-2xl font-bold tracking-tight">
        This page doesn&apos;t exist
      </h1>

      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        The link may be out of date, or the page may have moved. Everything worth
        seeing is back on the main page.
      </p>

      <a
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-sage-foreground transition-opacity hover:opacity-90"
      >
        <ArrowLeft className="size-4" /> Back to the portfolio
      </a>
    </main>
  );
}
