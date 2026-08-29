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
    stack: ["React", "Node.js", "Multi-tenant", "Payments", "Audit logs"],
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
  {
    id: "portfolio",
    title: "This site",
    description:
      "Personal developer portfolio built with TanStack Start, React 19 SSR, and Tailwind CSS v4 with full theme synchronization and Nitro serverless deployment.",
    stack: ["TanStack Start", "React 19", "Tailwind v4", "shadcn/ui"],
    liveUrl: "https://github.com/Chanakya2006gt/Chanakya_Portfolio",
    kind: "side",
  },
];

export const skills: Record<string, string[]> = {
  "Agentic & AI": ["Google Antigravity", "Claude Code", "Agentic Workflows", "Custom Skill Plugins", "Automated Auditing"],
  Frontend: ["React", "TypeScript", "Tailwind", "shadcn/ui", "GSAP"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Supabase RLS", "REST APIs"],
  Product: ["Multi-tenant", "CPQ Engines", "Payments", "Audit logs", "Auth flows"],
  Tools: ["Git", "Playwright", "Vercel", "Razorpay"],
};

export const navLinks = [
  { href: "#pricing", label: "Pricing" },
  { href: "#projects", label: "Live Systems" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
