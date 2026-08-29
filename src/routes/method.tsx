import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MethodSection } from "@/components/method-section";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/method")({
  component: MethodPage,
  head: () => ({
    meta: [
      { title: "The 15-Day Systems Factory — Nagulagam Chanakya" },
      { name: "description", content: "The 5-phase operating system used by independent engineer Nagulagam Chanakya to build, test, and ship hardened quote-to-cash operational software in 15 days." },
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
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="btn-sage-glow rounded-xl font-semibold shadow-sm">
              <Link to="/" hash="offers">
                <span>View Offers</span>
                <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
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
          <p>© {new Date().getFullYear()} Nagulagam Chanakya · Independent Systems Engineer</p>
          <div className="flex items-center gap-4">
            <Link to="/" hash="offers" className="hover:text-foreground transition-colors">Offers</Link>
            <Link to="/" hash="projects" className="hover:text-foreground transition-colors">Live Systems</Link>
            <Link to="/" hash="contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
