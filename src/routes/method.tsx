import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MethodSection } from "@/components/method-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { STUDIO_NAME, FOUNDER_NAME } from "@/data/studio";

export const Route = createFileRoute("/method")({
  component: MethodPage,
  head: () => ({
    meta: [
      { title: `How a project runs — ${STUDIO_NAME}` },
      {
        name: "description",
        content: `How a ${STUDIO_NAME} project runs, from a free first call to a system your team uses every day. What you give at each step, and what you get back.`,
      },
    ],
  }),
});

function MethodPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500/20">
      {/* Top minimal header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to {STUDIO_NAME}</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="btn-sage-glow rounded-xl font-semibold shadow-xs text-xs px-3.5 py-1.5 h-9">
              <a href="/book">
                <span>Book a call</span>
                <ArrowRight className="ml-1 size-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Method Section */}
      <main id="main-content">
        <MethodSection />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border/60 py-12 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-5xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_NAME} · Built by {FOUNDER_NAME}</p>
          <div className="flex items-center gap-4 font-mono">
            <Link to="/" hash="systems" className="hover:text-foreground transition-colors">Work</Link>
            <Link to="/" hash="contact" className="hover:text-foreground transition-colors">Contact</Link>
            <a href="/book" className="hover:text-foreground transition-colors">Book a call</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
