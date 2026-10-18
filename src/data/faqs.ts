export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How do you price projects?",
    answer:
      "Pricing is scoped directly to your workflow complexity and problem size. On the first 20-minute call, I look at how you work today and give you an honest assessment, then a fixed price before you commit.",
  },
  {
    question: "Why custom software over off-the-shelf SaaS (Zoho, Salesforce, etc.)?",
    answer:
      "Generic off-the-shelf software works fine for basic linear sales funnels, but breaks down when you have proprietary pricing logic, custom machine specs, or staged approval gates. I build systems that fit your rules exactly, with no per-seat subscription.",
  },
  {
    question: "Who owns the code and data?",
    answer:
      "You own 100% of the code, database, and infrastructure. I hand over the complete repository, deployment scripts and credentials to your own accounts. You are never locked in.",
  },
  {
    question: "What types of businesses do you build for?",
    answer:
      "Any of them. The work ranges from a one-page site for a local business to a quoting system for a factory floor. If you can describe the problem in a sentence, the first call will tell you whether I'm the right person to build it.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "Twenty minutes, and whatever you already have — a sketch, a spreadsheet, a site you don't like, or just the problem said out loud. For a bigger system I'll also want time with whoever knows how the work actually flows today.",
  },
];
