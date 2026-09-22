export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How do you price projects?",
    answer:
      "Pricing is scoped directly to your workflow complexity and problem size. On our initial 20-minute call, we review your current operations and provide an honest assessment followed by a transparent, fixed-price quote before any commitment.",
  },
  {
    question: "Why custom software over off-the-shelf SaaS (Zoho, Salesforce, etc.)?",
    answer:
      "Generic off-the-shelf software works fine for basic linear sales funnels, but breaks down when you have proprietary pricing logic, custom machine specs, or staged approval gates. We build exact-fit systems tailored to your rules, with zero recurring per-seat subscription taxes.",
  },
  {
    question: "Who owns the code and data?",
    answer:
      "You own 100% of the code, database, and infrastructure. We transfer the complete repository, deployment scripts, and credentials directly to your cloud accounts. You are never locked in.",
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
