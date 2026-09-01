export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
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
  {
    question: "Do you build regular websites too?",
    answer:
      "Yes — marketing sites, landing pages, straightforward builds. Those don't need a paid diagnosis: the scope is clear from one conversation, so the quote is free and usually same-day. The ₹20,000 diagnosis exists for work where I genuinely can't quote you honestly without digging first — quoting logic, approval flows, anything wired into a system you already run. If I can quote it for free, I will.",
  },
];
