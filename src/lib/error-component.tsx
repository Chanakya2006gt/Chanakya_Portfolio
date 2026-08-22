import { useEffect } from "react";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert, RotateCw, ArrowLeft } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  // Keep the technical detail for debugging, but never show it to visitors.
  useEffect(() => {
    console.error("[app error]", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <span className="flex size-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/10 text-sage" aria-hidden="true">
        <TriangleAlert className="size-6" strokeWidth={2} />
      </span>

      <h1 className="font-serif text-2xl font-bold tracking-tight">
        Something went wrong on our side
      </h1>

      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        Sorry about that — this one is on us, not you. Refreshing usually sorts it
        out. If it keeps happening, I&apos;d genuinely like to know.
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 rounded-lg bg-sage px-4 py-2 text-sm font-medium text-sage-foreground transition-opacity hover:opacity-90"
        >
          <RotateCw className="size-4" /> Try again
        </button>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="size-4" /> Back to the portfolio
        </a>
      </div>

      <a
        href="mailto:nagulagamchanakya2211@gmail.com?subject=Something%20broke%20on%20your%20portfolio"
        className="mt-2 text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-sage"
      >
        Tell me what happened
      </a>
    </main>
  );
}
