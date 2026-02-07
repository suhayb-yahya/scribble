import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { put, list } from "@vercel/blob";

export type ExploreCounters = {
  videos: number;
  brands: number;
  clients: number;
};

const BLOB_PATH = "data/explore-counters.json";
const DATA_DIR = path.join(process.cwd(), "data");
const COUNTERS_PATH = path.join(DATA_DIR, "explore-counters.json");

const defaults: ExploreCounters = {
  videos: 743,
  brands: 39,
  clients: 76,
};

function useBlob(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function getExploreCounters(): Promise<ExploreCounters> {
  if (useBlob()) {
    try {
      const { blobs } = await list({ prefix: "data/" });
      const blob = blobs.find((b: { pathname: string }) => b.pathname === BLOB_PATH);
      if (blob?.url) {
        const res = await fetch(blob.url);
        const data = await res.text();
        const parsed = JSON.parse(data) as Partial<ExploreCounters>;
        return {
          videos: typeof parsed.videos === "number" ? parsed.videos : defaults.videos,
          brands: typeof parsed.brands === "number" ? parsed.brands : defaults.brands,
          clients: typeof parsed.clients === "number" ? parsed.clients : defaults.clients,
        };
      }
      // No blob yet: seed from built-in file
      const data = await readFile(COUNTERS_PATH, "utf-8");
      const parsed = JSON.parse(data) as Partial<ExploreCounters>;
      const counters = {
        videos: typeof parsed.videos === "number" ? parsed.videos : defaults.videos,
        brands: typeof parsed.brands === "number" ? parsed.brands : defaults.brands,
        clients: typeof parsed.clients === "number" ? parsed.clients : defaults.clients,
      };
      await put(BLOB_PATH, JSON.stringify(counters, null, 2), { access: "public", contentType: "application/json", addRandomSuffix: false, allowOverwrite: true });
      return counters;
    } catch {
      // fall through to defaults
    }
    return defaults;
  }
  try {
    const data = await readFile(COUNTERS_PATH, "utf-8");
    const parsed = JSON.parse(data) as Partial<ExploreCounters>;
    return {
      videos: typeof parsed.videos === "number" ? parsed.videos : defaults.videos,
      brands: typeof parsed.brands === "number" ? parsed.brands : defaults.brands,
      clients: typeof parsed.clients === "number" ? parsed.clients : defaults.clients,
    };
  } catch {
    return defaults;
  }
}

export async function saveExploreCounters(counters: ExploreCounters): Promise<void> {
  const body = JSON.stringify(counters, null, 2);
  if (useBlob()) {
    await put(BLOB_PATH, body, { access: "public", contentType: "application/json", addRandomSuffix: false, allowOverwrite: true });
    return;
  }
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(COUNTERS_PATH, body, "utf-8");
}
