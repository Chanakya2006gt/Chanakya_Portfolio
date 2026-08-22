import { head, put } from "@vercel/blob";
import { getPortfolioData, type DynamicData } from "./store";

const BLOB_PATH = "content.json";
const BACKUP_PATH = "content-backup.json";
const CACHE_TTL_MS = 60_000;

let cached: { data: DynamicData; at: number } | null = null;

/** Read live content: Blob, falling back to the bundled JSON. Never throws. */
export async function readContent(): Promise<DynamicData> {
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.data;

  try {
    const meta = await head(BLOB_PATH);
    if (meta?.url) {
      const res = await fetch(meta.url, { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as DynamicData;
        if (data && Array.isArray(data.businesses)) {
          cached = { data, at: Date.now() };
          return data;
        }
      }
    }
  } catch {
    // No blob yet, or Blob unreachable — fall back to bundled defaults.
  }

  const fallback = getPortfolioData();
  cached = { data: fallback, at: Date.now() };
  return fallback;
}

/** Persist content to Blob, backing up the previous version first. */
export async function writeContent(data: DynamicData): Promise<boolean> {
  try {
    // Back up whatever is currently live, so a bad write is recoverable.
    try {
      const previous = await readContent();
      await put(BACKUP_PATH, JSON.stringify(previous, null, 2), {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/json",
        cacheControlMaxAge: 60,
      });
    } catch (backupErr) {
      console.error("[content] backup failed (continuing):", backupErr);
    }

    await put(BLOB_PATH, JSON.stringify(data, null, 2), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      cacheControlMaxAge: 60,
    });
    cached = { data, at: Date.now() };
    return true;
  } catch (err) {
    console.error("[content] Blob write failed:", err);
    return false;
  }
}

/** Restore the backup over the live content. */
export async function restoreBackup(): Promise<boolean> {
  try {
    const meta = await head(BACKUP_PATH);
    if (!meta?.url) return false;
    const res = await fetch(meta.url, { cache: "no-store" });
    if (!res.ok) return false;
    const data = (await res.json()) as DynamicData;
    await put(BLOB_PATH, JSON.stringify(data, null, 2), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      cacheControlMaxAge: 60,
    });
    cached = { data, at: Date.now() };
    return true;
  } catch (err) {
    console.error("[content] restore failed:", err);
    return false;
  }
}
