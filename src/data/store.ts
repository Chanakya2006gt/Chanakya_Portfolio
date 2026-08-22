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
    availabilityStatus: "Open for contracts & software engineering roles",
    workAvailability: "Open for contract work, consulting & engineering roles",
    hiringStatus: "Not hiring for any roles at this time (Chanakya is open to being hired for contracts/work)",
    heroTagline: "I ship products under real constraints — not demos. Trelio is the serious work. Everything else stays in experiments.",
  };
}
