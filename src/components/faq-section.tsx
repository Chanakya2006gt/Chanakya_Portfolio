import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What does a build actually cost?",
    answer:
      "Most builds land between ₹2L and ₹12L, depending on how many workflows and sites are involved. A single workflow for one location sits at the lower end; multi-site or multi-department systems at the upper. You get an exact fixed number out of the ₹20,000 diagnosis — before you commit to anything.",
  },
  {
    question: "Why not just use Zoho, or an off-the-shelf tool?",
    answer:
      "If your sales process is a standard linear funnel, Zoho is genuinely the right answer and I'll tell you so. Off-the-shelf tools break when the workflow is specific to how your operation actually runs — job specs, machine constraints, approval gates, staged payments. That's what I build. It's also one-time: no per-seat fee as your team grows.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. Full repository handover, your domain, your database, your accounts. Nothing is locked to me — you can hand it to any engineer afterwards.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Fourteen days of bug fixes are included. After that, an optional care retainer (₹20k–₹35k/month) covers maintenance, small changes and priority response. It's optional — plenty of projects don't need it.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Roughly two hours in the diagnosis, one decision-maker who can answer questions about the process, and access to whatever you use today — spreadsheets, WhatsApp threads, existing software. Content and any API credentials by day two of the build.",
  },
  {
    question: "Can you work with a business outside India?",
    answer:
      "Yes. The work is remote and async by default, with scheduled calls in your working hours.",
  },
  {
    question: "What if it isn't finished in 15 days?",
    answer:
      "The scope is fixed in the diagnosis precisely so this doesn't happen. If something in my control runs over, I finish it at no extra cost — the price was agreed before the work started.",
  },
  {
    question: "What kinds of businesses do you build for?",
    answer:
      "Any business where work is gated on a quote or an approval. So far that's been an industrial converting line and a multi-tenant payment platform — but the same shape appears in fabrication, interiors, printing, events, equipment rental and contracting. If your process is someone asks for a price → someone approves → work starts → someone pays, it's the same system. The diagnosis tells us in three days whether it fits.",
  },
];

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="faq"
      ref={ref}
      className={`mx-auto max-w-5xl px-5 py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">FAQ</p>
      </div>
      <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
        Clear answers on pricing bands, technology choices, code ownership, and how builds actually run.
      </p>

      <div className="mt-10 divide-y divide-border/60 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md overflow-hidden shadow-sm">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group p-5 sm:p-6 transition-colors hover:bg-secondary/30 open:bg-secondary/40"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-left font-serif text-lg sm:text-xl font-medium text-foreground outline-none">
              <span>{faq.question}</span>
              <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed pr-6">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
