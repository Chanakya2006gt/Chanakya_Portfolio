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
      "Authorization-before-execution SaaS for freelancers and agencies. Work is broken into stages that clients approve and pay one at a time, so execution never runs ahead of payment.",
    liveUrl: "https://trelio.in",
    stack: ["React", "Node.js", "Multi-tenant", "Payments", "Audit logs"],
    featured: true,
    badge: "Live product",
    kind: "business",
  },
];

export const sideProjects: Project[] = [
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
  Frontend: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Vite"],
  Backend: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  Product: ["Multi-tenant", "Payments", "Audit logs", "Auth flows"],
  Tools: ["Git", "Playwright", "Vercel", "Razorpay"],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
