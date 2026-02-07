import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export type ExploreCounters = {
  videos: number;
  brands: number;
  clients: number;
};

const DATA_DIR = path.join(process.cwd(), "data");
const COUNTERS_PATH = path.join(DATA_DIR, "explore-counters.json");

const defaults: ExploreCounters = {
  videos: 743,
  brands: 39,
  clients: 76,
};

export async function getExploreCounters(): Promise<ExploreCounters> {
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
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(COUNTERS_PATH, JSON.stringify(counters, null, 2), "utf-8");
}
