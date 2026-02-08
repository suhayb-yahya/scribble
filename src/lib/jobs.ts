import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { JobItem } from "@/components/sections/jobs/JobsListSection";

const DATA_DIR = path.join(process.cwd(), "data");
const JOBS_PATH = path.join(DATA_DIR, "jobs.json");

/** Legacy shape from older jobs.json (single language). */
type LegacyJob = {
  id: string;
  title?: string;
  requirements?: string[];
  applyUrl?: string;
  [k: string]: unknown;
};

function normalizeJob(raw: LegacyJob | JobItem): JobItem {
  const id = typeof raw.id === "string" ? raw.id : "";
  const rawApplyUrl = (raw as JobItem).applyUrl;
  const applyUrl = typeof rawApplyUrl === "string" ? rawApplyUrl.trim() || undefined : undefined;
  const hasNewShape = typeof (raw as JobItem).title === "object" && (raw as JobItem).title !== null;
  if (hasNewShape) {
    const t = (raw as JobItem).title as { en?: string; ar?: string };
    const r = (raw as JobItem).requirements as { en?: string[]; ar?: string[] };
    return {
      id,
      title: { en: t.en ?? "", ar: t.ar ?? "" },
      requirements: {
        en: Array.isArray(r.en) ? r.en : [],
        ar: Array.isArray(r.ar) ? r.ar : [],
      },
      applyUrl,
    };
  }
  const rawTitle = (raw as LegacyJob).title;
  const title: string = typeof rawTitle === "string" ? rawTitle : "";
  const requirements = Array.isArray((raw as LegacyJob).requirements)
    ? (raw as LegacyJob).requirements!.filter((x): x is string => typeof x === "string")
    : [];
  return {
    id,
    title: { en: title, ar: title },
    requirements: { en: requirements, ar: requirements },
    applyUrl,
  };
}

export async function getJobs(): Promise<JobItem[]> {
  try {
    const data = await readFile(JOBS_PATH, "utf-8");
    const parsed = JSON.parse(data) as (LegacyJob | JobItem)[];
    const list = Array.isArray(parsed) ? parsed : [];
    return list.map(normalizeJob);
  } catch {
    return [];
  }
}

export async function saveJobs(jobs: JobItem[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(JOBS_PATH, JSON.stringify(jobs, null, 2), "utf-8");
}

export function slugifyId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
