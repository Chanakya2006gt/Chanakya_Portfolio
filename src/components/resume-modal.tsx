import { FileText, Printer, ExternalLink, Mail, MapPin, Building2, GraduationCap, Code2, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ResumeModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
}

export function ResumeModal({
  trigger,
  open,
  onOpenChange,
  email,
  pdfUrl = import.meta.env.VITE_RESUME_PDF_URL || "/resume.pdf",
  summary,
  education,
  skillsList,
}: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  const contactEmail = email || "nagulagamchanakya2211@gmail.com";
  const execSummary =
    summary ||
    "Computer and Information Science student with hands-on experience building and shipping a full-stack, security-conscious SaaS product. Comfortable owning architecture, security, and product decisions across the full development lifecycle.";
  const eduText = education || "SR University — B.Tech CIS (Expected 2028)";

  const content = (
    <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-6 text-foreground font-sans print:max-h-none print:overflow-visible">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="text-2xl font-bold font-serif tracking-tight text-white sm:text-3xl">
            NAGULAGAM CHANAKYA
          </h2>
          <p className="text-sm font-medium text-sage mt-1">
            Full-Stack & Security-Conscious Software Engineer
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5 text-sage" /> Warangal, Telangana, India
            </span>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-1 hover:text-sage transition-colors">
              <Mail className="size-3.5 text-sage" /> {contactEmail}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto print:hidden">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download="Nagulagam_Chanakya_Resume.pdf">
            <Button variant="sage" size="sm" className="gap-1.5">
              <FileText className="size-4" />
              Download PDF Resume
            </Button>
          </a>
          <Button onClick={handlePrint} variant="outline" size="sm" className="gap-1.5">
            <Printer className="size-4" />
            Print / Save PDF
          </Button>
        </div>
      </div>

      {/* Summary */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-sage mb-2 flex items-center gap-1.5">
          <FileText className="size-4" /> Executive Summary
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {execSummary}
        </p>
      </section>

      <Separator />

      {/* Education */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-sage mb-3 flex items-center gap-1.5">
          <GraduationCap className="size-4" /> Education
        </h3>
        <div className="rounded-xl border border-border/80 bg-secondary/30 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h4 className="font-semibold text-sm text-foreground">SR University</h4>
            <span className="text-xs text-muted-foreground">Warangal, Telangana</span>
          </div>
          <p className="text-xs font-medium text-sage mt-0.5">
            {eduText}
          </p>
          <div className="mt-3">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Relevant Coursework:</p>
            <p className="text-xs text-muted-foreground mt-1">
              Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Technical Skills */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-sage mb-3 flex items-center gap-1.5">
          <Code2 className="size-4" /> Technical Skills
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {skillsList ? (
            Object.entries(skillsList).map(([cat, items]) => (
              <div key={cat} className="rounded-lg border border-border/60 bg-secondary/20 p-3">
                <span className="text-xs font-semibold text-foreground block mb-1 uppercase tracking-wider text-[11px]">{cat}</span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <Badge key={s} variant="outline" className="text-[11px]">{s}</Badge>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="rounded-lg border border-border/60 bg-secondary/20 p-3">
                <span className="text-xs font-semibold text-foreground block mb-1">Languages & Core</span>
                <div className="flex flex-wrap gap-1.5">
                  {["JavaScript", "Java", "SQL", "TypeScript"].map((s) => (
                    <Badge key={s} variant="outline" className="text-[11px]">{s}</Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border/60 bg-secondary/20 p-3">
                <span className="text-xs font-semibold text-foreground block mb-1">Frontend Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Tailwind CSS", "React Query", "Vite", "shadcn/ui"].map((s) => (
                    <Badge key={s} variant="outline" className="text-[11px]">{s}</Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border/60 bg-secondary/20 p-3">
                <span className="text-xs font-semibold text-foreground block mb-1">Backend & Databases</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Redis"].map((s) => (
                    <Badge key={s} variant="outline" className="text-[11px]">{s}</Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border/60 bg-secondary/20 p-3">
                <span className="text-xs font-semibold text-foreground block mb-1">Security & Infrastructure</span>
                <div className="flex flex-wrap gap-1.5">
                  {["REST APIs", "Razorpay", "AES-256-GCM", "HMAC Webhooks", "Clerk Auth"].map((s) => (
                    <Badge key={s} variant="outline" className="text-[11px]">{s}</Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Separator />

      {/* Projects */}
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-sage mb-3 flex items-center gap-1.5">
          <Building2 className="size-4" /> Featured Product & Projects
        </h3>
        <div className="rounded-xl border border-border/80 bg-card p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif text-xl font-bold text-white">Trelio</h4>
                <Badge variant="sage">Live Product · 3-member team</Badge>
              </div>
              <p className="text-xs text-sage font-medium mt-0.5">
                Multi-Tenant SaaS for Freelancers & Agencies
              </p>
            </div>
            <a
              href="https://trelio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-sage hover:underline"
            >
              trelio.in <ExternalLink className="size-3" />
            </a>
          </div>

          <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed list-disc list-inside">
            <li>
              <strong className="text-foreground">Authorization-Before-Execution (ABE):</strong> Built & shipped milestone locking system requiring client approval + payment before work executes, eliminating unpaid scope.
            </li>
            <li>
              <strong className="text-foreground">Multi-Tenant Architecture:</strong> Designed full data model (<code className="text-sage">users → teams → clients → projects → milestones</code>) owning architecture & security across the stack.
            </li>
            <li>
              <strong className="text-foreground">Contract Lifecycle & SHA-256:</strong> Milestone agreements generated, SHA-256 hashed, and bound to client e-signatures with automatic re-consent triggers on scope edits.
            </li>
            <li>
              <strong className="text-foreground">Tamper-Evident Event Ledger:</strong> Built per-workspace hash chains for critical actions (signing, payments, scope changes) continuously verified by background workers.
            </li>
            <li>
              <strong className="text-foreground">Encrypted Billing & Razorpay:</strong> Integrated Razorpay with per-team AES-256-GCM encrypted credentials, idempotent webhooks, and multi-tier billing engine.
            </li>
            <li>
              <strong className="text-foreground">Security Audits & IDOR Fixes:</strong> Led security reviews identifying and fixing IDOR and payment-recording vulnerabilities before production.
            </li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Leadership & Additional Information */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border/80 bg-secondary/30 p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sage mb-2 flex items-center gap-1.5">
            <ShieldCheck className="size-4" /> Leadership
          </h3>
          <ul className="space-y-1.5 text-xs text-muted-foreground leading-relaxed list-disc list-inside">
            <li>Lead 3-member engineering team building Trelio.</li>
            <li>Own technical direction, architecture, and code/security reviews.</li>
            <li>Define scope and enforce correctness standards before merge.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border/80 bg-secondary/30 p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sage mb-2 flex items-center gap-1.5">
            <Award className="size-4" /> Practices & Interests
          </h3>
          <ul className="space-y-1.5 text-xs text-muted-foreground leading-relaxed list-disc list-inside">
            <li>Ongoing practice in Data Structures & Algorithms & Java (LeetCode).</li>
            <li>Directing AI-assisted development workflows for rapid production iteration.</li>
            <li>Focus: Fintech, distributed backend systems, & applied software security.</li>
          </ul>
        </div>
      </section>
    </div>
  );

  if (trigger) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="max-w-3xl sm:max-w-4xl p-6 sm:p-8">
          <DialogHeader className="sr-only">
            <DialogTitle>Nagulagam Chanakya — Resume</DialogTitle>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl sm:max-w-4xl p-6 sm:p-8">
        <DialogHeader className="sr-only">
          <DialogTitle>Nagulagam Chanakya — Resume</DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}
