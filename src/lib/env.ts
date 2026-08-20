import fs from "node:fs";
import path from "node:path";

const envCache: Record<string, string> = {};

function loadEnvFile(): Record<string, string> {
  const envPath = path.join(process.cwd(), ".env");
  const result: Record<string, string> = {};

  try {
    if (fs.existsSync(envPath)) {
      const rawContent = fs.readFileSync(envPath, "utf-8");
      // Standardize line endings (\r\n -> \n)
      const content = rawContent.replace(/\r\n/g, "\n");
      const lines = content.split("\n");

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;

        const equalsIndex = trimmed.indexOf("=");
        if (equalsIndex > 0) {
          const key = trimmed.slice(0, equalsIndex).trim();
          let value = trimmed.slice(equalsIndex + 1).trim();

          // Strip inline comments if not inside quotes
          if (!value.startsWith('"') && !value.startsWith("'") && value.includes("#")) {
            value = value.split("#")[0].trim();
          }

          // Remove surrounding quotes if present
          if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
          ) {
            value = value.slice(1, -1).trim();
          }

          result[key] = value;
        }
      }
    }
  } catch (error) {
    console.error("Error parsing .env file:", error);
  }

  return result;
}

export function getEnvVar(key: string, defaultValue = ""): string {
  // 1. Read directly from .env file first (so user edits in .env take immediate effect)
  const fileVars = loadEnvFile();
  if (fileVars[key] && fileVars[key].trim()) {
    return fileVars[key].trim();
  }

  // 2. Check process.env (Vercel / production environment variables)
  if (process.env[key] && process.env[key]?.trim()) {
    return process.env[key]!.trim();
  }

  return defaultValue;
}
