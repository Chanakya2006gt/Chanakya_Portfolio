import { businesses as defaultBusinesses, sideProjects as defaultSideProjects, skills as defaultSkills, Project } from "./projects";
import portfolioDataJson from "./portfolio-data.json";
import type { ResumeContent } from "./resume-schema";

export interface DynamicData {
  businesses: Project[];
  sideProjects: Project[];
  skills: Record<string, string[]>;
  availabilityStatus: string;
  workAvailability?: string; // e.g. "Available for contract / freelance / full-time engineering work"
  hiringStatus?: string;     // e.g. "Not hiring team members at this moment"
  heroTagline: string;
  resume?: ResumeContent;
  resumeOverride?: {
    summary?: string;
    phone?: string;
    email?: string;
    education?: string;
    resumePdfUrl?: string;
    skills?: string[];
  };
}

export function getPortfolioData(): DynamicData {
  if (portfolioDataJson) {
    return portfolioDataJson as unknown as DynamicData;
  }

  // Fallback defaults
  return {
    businesses: defaultBusinesses,
    sideProjects: defaultSideProjects,
    skills: defaultSkills,
    availabilityStatus: "Taking 2 sprints per month · Next opening: September",
    workAvailability: "Available for 15-Day Systems Sprints and fixed-scope technical engagements",
    hiringStatus: "Not hiring for any roles at this time (Chanakya is an independent engineer taking fixed-scope sprints)",
    heroTagline: "I ship products under real constraints — not demos. Trelio is the primary work alongside focused software projects.",
  };
}
