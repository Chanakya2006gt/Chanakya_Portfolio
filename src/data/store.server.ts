import fs from "node:fs";
import path from "node:path";
import type { DynamicData } from "./store";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "portfolio-data.json");

/**
 * Server-only. Persists edited portfolio data to the JSON file (local dev).
 * Kept out of `store.ts` because that module is imported by the client route
 * loader — `fs`/`path`/`process` must never reach the browser bundle.
 * No-ops harmlessly on Vercel's read-only filesystem (returns false).
 */
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
