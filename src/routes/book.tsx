import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  STUDIO_NAME,
  CONTACT_EMAIL,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  BOOKING_URL,
} from "@/data/studio";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: `Book a 20-minute call — ${STUDIO_NAME}` },
      {
        name: "description",
        content: `Schedule a 20-minute consultation with ${STUDIO_NAME}. We review your quoting, approval, or job workflow and determine whether custom software makes sense.`,
      },
    ],
  }),
});

function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    workflowDescription: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit request. Please reach out via WhatsApp or email.");
    }
  };

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
      <main id="main-content" className="mx-auto max-w-2xl px-5 py-12 sm:py-20 w-full">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Consultation</p>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Book a 20-minute call
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            First call is free. You talk directly to the people who design, write, and deploy the system.
          </p>
        </div>

        {/* Calendar option if BOOKING_URL is set */}
        {BOOKING_URL && (
          <div className="mt-8 p-6 rounded-2xl border border-sage/40 bg-card shadow-sm">
            <h2 className="text-base font-semibold text-foreground">Pick a calendar slot</h2>
            <p className="mt-1 text-xs text-muted-foreground">Directly select a time on our schedule.</p>
            <Button asChild size="lg" className="mt-4 rounded-xl font-medium shadow-md">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <span>Open Calendar →</span>
              </a>
            </Button>
          </div>
        )}

        {/* Intake Form */}
        <div className="mt-8 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
          {status === "success" ? (
            <div className="py-6 text-center space-y-4">
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mb-2">
                <CheckCircle2 className="size-6" />
              </div>
              <h2 className="font-sans text-2xl font-semibold text-foreground tracking-tight">Inquiry Received</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you. We have received your details and will review your workflow. You will hear back within 24 hours to schedule the 20-minute call.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <Button asChild variant="outline" className="rounded-xl">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 size-4 text-emerald-600" />
                    <span>Need immediate response? WhatsApp</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" className="rounded-xl">
                  <Link to="/">Back to home</Link>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-medium text-foreground">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl bg-secondary/50 border-border/70"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact" className="text-xs font-medium text-foreground">
                  Work Email or WhatsApp Number *
                </Label>
                <Input
                  id="contact"
                  type="text"
                  required
                  placeholder="e.g. alex@company.com or +91 98765 43210"
                  value={formData.emailOrPhone}
                  onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  className="rounded-xl bg-secondary/50 border-border/70"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="workflow" className="text-xs font-medium text-foreground">
                  What quoting or job workflow slows you down? *
                </Label>
                <Textarea
                  id="workflow"
                  required
                  rows={4}
                  placeholder="e.g. Quotes take 2 days in Excel, rates get mis-entered between sales and production floor..."
                  value={formData.workflowDescription}
                  onChange={(e) => setFormData({ ...formData, workflowDescription: e.target.value })}
                  className="rounded-xl bg-secondary/50 border-border/70 text-sm"
                />
              </div>

              {status === "error" && (
                <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
                  {errorMessage}
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  size="lg"
                  className="rounded-xl font-medium shadow-md px-6"
                >
                  {status === "submitting" ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="ml-2 size-4" />
                    </>
                  )}
                </Button>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>or</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-emerald-800 dark:text-emerald-400 hover:underline"
                  >
                    <MessageSquare className="size-3.5" />
                    <span>WhatsApp directly</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Direct Contact Alternatives */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground px-2">
          <span>Prefer direct email?</span>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=CK%20Builds%20Workflow%20Inquiry`}
            className="text-foreground underline underline-offset-4 hover:text-sage transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <span className="text-border/80">·</span>
          <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
        </div>

        {/* Expectation Setting */}
        <div className="mt-12 pt-8 border-t border-border/70 space-y-6">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Before we talk, it helps to prepare:
            </h2>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-inside">
              <li>How quotes or jobs move today (Excel spreadsheets, WhatsApp threads, or bespoke software).</li>
              <li>Roughly how many team members create quotes, approve orders, or handle job dispatches.</li>
              <li>The single biggest bottleneck causing delays, miscalculations, or unpaid revisions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              What happens on the call:
            </h2>
            <ol className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground list-decimal list-inside">
              <li>We spend 20 minutes walking through your exact workflow bottleneck.</li>
              <li>If an off-the-shelf software tool solves your problem better or cheaper, we tell you directly.</li>
              <li>If custom software is the right fit, we provide a transparent, fixed-price quote and scope based on your problem size.</li>
            </ol>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-5xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <Link to="/" hash="work" className="hover:text-foreground transition-colors">Work</Link>
            <Link to="/" hash="what-we-build" className="hover:text-foreground transition-colors">Capabilities</Link>
            <Link to="/" hash="how-we-work" className="hover:text-foreground transition-colors">Process</Link>
            <Link to="/" hash="faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
