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
import type { ResumeContent } from "@/data/resume-schema";

interface ResumeModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  email?: string;
  pdfUrl?: string;
  summary?: string;
  education?: string;
  skillsList?: Record<string, string[]>;
  resume?: ResumeContent;
}

export function ResumeModal({
  trigger,
  open,
  onOpenChange,
  email,
  pdfUrl = import.meta.env.VITE_RESUME_PDF_URL || "/api/resume",
  summary,
  education,
  skillsList,
  resume,
}: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  const fullName = resume?.fullName || "NAGULAGAM CHANAKYA";
  const jobTitle = resume?.title || "Full-Stack & Security-Conscious Software Engineer";
  const loc = resume?.location || "Warangal, Telangana, India";
  const contactEmail = resume?.email || email || "nagulagamchanakya2211@gmail.com";
  const execSummary =
    resume?.summary ||
    summary ||
    "Full-stack software engineer with hands-on experience architecting and shipping production SaaS platforms and deterministic calculation engines. Comfortable owning system design, database security, and end-to-end product implementation.";

  const eduInstitution = resume?.education?.institution || "SR University";
  const eduLocation = resume?.education?.location || "Warangal, Telangana";
  const eduDegree = resume?.education?.degree || education || "SR University — B.Tech CSE (Expected 2028)";
  const eduCoursework =
    resume?.education?.coursework ||
    "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering";

  const effectiveSkills = resume?.skills || skillsList;

  const defaultSections = [
    {
      title: "Trelio",
      badge: "Live Product · 3-member team",
      subtitle: "Multi-Tenant SaaS for Freelancers & Agencies",
      url: "https://trelio.in",
      bullets: [
        "Authorization-Before-Execution (ABE): Built & shipped milestone locking system requiring client approval + payment before work executes, eliminating unpaid scope.",
        "Multi-Tenant Architecture: Designed full data model (users → teams → clients → projects → milestones) owning architecture & security across the stack.",
        "Contract Lifecycle & SHA-256: Milestone agreements generated, SHA-256 hashed, and bound to client e-signatures with automatic re-consent triggers on scope edits.",
        "Tamper-Evident Event Ledger: Built per-workspace hash chains for critical actions (signing, payments, scope changes) continuously verified by background workers.",
        "Encrypted Billing & Razorpay: Integrated Razorpay with per-team AES-256-GCM encrypted credentials, idempotent webhooks, and multi-tier billing engine.",
        "Security Audits & IDOR Fixes: Led security reviews identifying and fixing IDOR and payment-recording vulnerabilities before production.",
      ],
    },
  ];

  const sectionsToRender =
    resume?.sections && resume.sections.length > 0 ? resume.sections : defaultSections;

  const defaultLeadership = [
    "Lead 3-member engineering team building Trelio.",
    "Own technical direction, architecture, and code/security reviews.",
    "Define scope and enforce correctness standards before merge.",
  ];

  const leadershipToRender =
    resume?.leadership && resume.leadership.length > 0 ? resume.leadership : defaultLeadership;

  const defaultPractices = [
    "Ongoing practice in Data Structures & Algorithms & Java (LeetCode).",
    "Directing AI-assisted development workflows for rapid production iteration.",
    "Focus: Fintech, distributed backend systems, & applied software security.",
  ];

  const practicesToRender =
    resume?.practices && resume.practices.length > 0 ? resume.practices : defaultPractices;

  const renderBullet = (b: string) => {
    const colonIdx = b.indexOf(":");
    if (colonIdx === -1) {
      return b;
    }
    const prefix = b.slice(0, colonIdx);
    const rest = b.slice(colonIdx + 1);
    return (
      <>
        <strong className="text-foreground">{prefix}:</strong>
        {rest}
      </>
    );
  };

  const content = (
    <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-6 text-foreground font-sans print:max-h-none print:overflow-visible">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="text-2xl font-bold font-serif tracking-tight text-white sm:text-3xl">
            {fullName}
          </h2>
          <p className="text-sm font-medium text-sage mt-1">
            {jobTitle}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5 text-sage" /> {loc}
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
            <h4 className="font-semibold text-sm text-foreground">{eduInstitution}</h4>
            <span className="text-xs text-muted-foreground">{eduLocation}</span>
          </div>
          <p className="text-xs font-medium text-sage mt-0.5">
            {eduDegree}
          </p>
          <div className="mt-3">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Relevant Coursework:</p>
            <p className="text-xs text-muted-foreground mt-1">
              {eduCoursework}
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
          {effectiveSkills ? (
            Object.entries(effectiveSkills).map(([cat, items]) => (
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
        {sectionsToRender.map((sec, idx) => (
          <div key={sec.title || idx} className="rounded-xl border border-border/80 bg-card p-5 space-y-3 mb-4 last:mb-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-xl font-bold text-white">{sec.title}</h4>
                  {sec.badge && <Badge variant="sage">{sec.badge}</Badge>}
                </div>
                {sec.subtitle && (
                  <p className="text-xs text-sage font-medium mt-0.5">
                    {sec.subtitle}
                  </p>
                )}
              </div>
              {sec.url && (
                <a
                  href={sec.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-sage hover:underline"
                >
                  {sec.url.replace(/^https?:\/\//, "")} <ExternalLink className="size-3" />
                </a>
              )}
            </div>

            <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed list-disc list-inside">
              {sec.bullets.map((b, bIdx) => (
                <li key={bIdx}>
                  {renderBullet(b)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Separator />

      {/* Leadership & Additional Information */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border/80 bg-secondary/30 p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sage mb-2 flex items-center gap-1.5">
            <ShieldCheck className="size-4" /> Leadership
          </h3>
          <ul className="space-y-1.5 text-xs text-muted-foreground leading-relaxed list-disc list-inside">
            {leadershipToRender.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border/80 bg-secondary/30 p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sage mb-2 flex items-center gap-1.5">
            <Award className="size-4" /> Practices & Interests
          </h3>
          <ul className="space-y-1.5 text-xs text-muted-foreground leading-relaxed list-disc list-inside">
            {practicesToRender.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
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
