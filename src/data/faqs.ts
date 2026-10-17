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
      "Any business where revenue, production, or delivery is gated on a quote, approval, or staged workflow — including industrial manufacturing, custom fabrication, distribution, trade services, and creative studios.",
  },
  {
    question: "What is required from our team to begin?",
    answer:
      "A decision-maker who understands your current operations, access to your existing rate sheets or spreadsheets, and 20 minutes for an initial workflow review.",
  },
];
