import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  STUDIO_NAME,
  FOUNDER_NAME,
  CONTACT_EMAIL,
  WHATSAPP_URL,
  BOOKING_URL,
} from "@/data/studio";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: `Book a call — ${STUDIO_NAME}` },
      {
        name: "description",
        content: `Book a free 20-minute call with ${STUDIO_NAME}. We look at how your business quotes and runs jobs today, and whether custom software is worth it for you.`,
      },
    ],
  }),
});

function BookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500/20 flex flex-col justify-between">
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="mx-auto max-w-2xl px-5 py-16 sm:py-24 w-full">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Book a 20-minute call
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          First call is free. You talk to the person who builds it.
        </p>

        <div className="mt-8">
          {BOOKING_URL ? (
            <Button asChild size="lg" className="btn-sage-glow rounded-xl font-medium shadow-md px-6 py-2.5">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Pick a time
              </a>
            </Button>
          ) : (
            <Button asChild size="lg" className="btn-sage-glow rounded-xl font-medium shadow-md px-6 py-2.5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Message me on WhatsApp
              </a>
            </Button>
          )}
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Prefer email?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-foreground underline underline-offset-4 hover:text-sage transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <div className="mt-12 pt-8 border-t border-border/70">
          <h2 className="text-base font-semibold text-foreground">
            Before we talk, it helps to know:
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>What your business does, and roughly how many people handle quotes or jobs.</li>
            <li>How a quote goes out today: spreadsheet, WhatsApp, software, or on paper.</li>
            <li>The one part of that process that wastes the most time or money.</li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-border/70">
          <h2 className="text-base font-semibold text-foreground">
            What happens next
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-muted-foreground list-decimal list-inside">
            <li>You pick a time, or message me on WhatsApp.</li>
            <li>I send you a WhatsApp message the day before.</li>
            <li>We talk for 20 minutes about how you quote today. If custom software isn't worth it for you, I'll say so.</li>
          </ol>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border/60 py-12 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-5xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_NAME} · Built by {FOUNDER_NAME}</p>
        </div>
      </footer>
    </div>
  );
}
