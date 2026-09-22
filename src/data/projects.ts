export type Project = {
  id: string;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  featured?: boolean;
  badge?: string;
  kind: "business" | "side";
};

export const businesses: Project[] = [
  {
    id: "trelio",
    title: "Trelio",
    description:
      "Authorization-before-execution SaaS for freelancers and agencies. Work is split into stages that clients must approve and pay before the next stage unlocks — so execution never runs ahead of payment.",
    liveUrl: "https://trelio.in",
    stack: ["Multi-tenant", "PostgreSQL RLS", "Payments", "Audit ledger", "React", "Node.js"],
    featured: true,
    badge: "Live product",
    kind: "business",
  },
];

export const sideProjects: Project[] = [
  {
    id: "apex",
    title: "Apex Packaging & Converting",
    description:
      "Enterprise B2B manufacturing & CPQ platform for industrial packaging converters. Features an interactive FINAT 1–8 rewind visualizer, isomorphic linear-meter estimating math with 100% test parity, and a role-based sales operations CRM.",
    liveUrl: "https://industrial-packaging-platform.vercel.app",
    githubUrl: "https://github.com/Chanakya2006gt/Industrial-packaging-platform",
    stack: ["React", "TypeScript", "Supabase RLS", "Node.js", "GSAP", "CPQ Engine"],
    featured: true,
    badge: "B2B Platform",
    kind: "side",
  },
];

export const navLinks = [
  { href: "#systems", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;
