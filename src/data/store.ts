import fs from "node:fs";
import path from "node:path";
import { businesses as defaultBusinesses, sideProjects as defaultSideProjects, skills as defaultSkills, Project } from "./projects";

export interface DynamicData {
  businesses: Project[];
  sideProjects: Project[];
  skills: Record<string, string[]>;
  availabilityStatus: string;
  workAvailability?: string; // e.g. "Available for contract / freelance / full-time engineering work"
  hiringStatus?: string;     // e.g. "Not hiring team members at this moment"
  heroTagline: string;
  resumeOverride?: {
    summary?: string;
    phone?: string;
    email?: string;
    education?: string;
    resumePdfUrl?: string;
    skills?: string[];
  };
}

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "portfolio-data.json");

export function getPortfolioData(): DynamicData {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      return JSON.parse(fileContent);
    }
  } catch (error) {
    console.error("Error reading portfolio-data.json:", error);
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

export function savePortfolioData(data: DynamicData): boolean {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing portfolio-data.json:", error);
    return false;
  }
}
