import { businesses as defaultBusinesses, sideProjects as defaultSideProjects, Project } from "./projects";
import portfolioDataJson from "./portfolio-data.json";

export interface DynamicData {
  businesses: Project[];
  sideProjects: Project[];
  availabilityStatus: string;
}

export function getPortfolioData(): DynamicData {
  if (portfolioDataJson) {
    return portfolioDataJson as unknown as DynamicData;
  }

  // Fallback defaults
  return {
    businesses: defaultBusinesses,
    sideProjects: defaultSideProjects,
    availabilityStatus: "Taking 2 builds a month · booking the next slot",
  };
}
