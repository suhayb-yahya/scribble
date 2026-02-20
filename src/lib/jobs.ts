import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { JobItem } from "@/components/sections/jobs/JobsListSection";

const DATA_DIR = path.join(process.cwd(), "data");
const JOBS_PATH = path.join(DATA_DIR, "jobs.json");

/** Raw job from JSON - may be legacy (title/requirements as strings) or bilingual */
type RawJob = {
  id: string;
  title?: string | { en: string; ar: string };
  requirements?: string[] | { en: string[]; ar: string[] };
  applyUrl?: string;
};

function normalizeJob(raw: RawJob): JobItem {
  const title =
    typeof raw.title === "object" && raw.title !== null && "en" in raw.title && "ar" in raw.title
      ? raw.title
      : { en: String(raw.title ?? ""), ar: String(raw.title ?? "") };
  const requirements =
    typeof raw.requirements === "object" &&
    Array.isArray(raw.requirements)
      ? { en: raw.requirements, ar: raw.requirements }
      : typeof raw.requirements === "object" &&
          raw.requirements !== null &&
          "en" in raw.requirements &&
          "ar" in raw.requirements
        ? (raw.requirements as { en: string[]; ar: string[] })
        : { en: [] as string[], ar: [] as string[] };
  return {
    id: raw.id,
    title,
    requirements,
    applyUrl: raw.applyUrl,
  };
}

export async function getJobs(): Promise<JobItem[]> {
  try {
    const data = await readFile(JOBS_PATH, "utf-8");
    const parsed = JSON.parse(data) as RawJob[];
    return Array.isArray(parsed) ? parsed.map(normalizeJob) : [];
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

export type BilingualJobPayload = {
  title: { en: string; ar: string };
  requirements: { en: string[]; ar: string[] };
  applyUrl?: string;
};

export function parseBilingualBody(body: unknown): BilingualJobPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const titleObj = b.title;
  let title: { en: string; ar: string };
  if (titleObj && typeof titleObj === "object" && "en" in titleObj && "ar" in titleObj) {
    title = {
      en: String((titleObj as { en: unknown }).en ?? "").trim(),
      ar: String((titleObj as { ar: unknown }).ar ?? "").trim(),
    };
  } else {
    const fallback = typeof b.title === "string" ? (b.title as string).trim() : "";
    title = { en: fallback, ar: fallback };
  }
  const reqObj = b.requirements;
  let requirements: { en: string[]; ar: string[] };
  if (reqObj && typeof reqObj === "object" && "en" in reqObj && "ar" in reqObj) {
    const enArr = (reqObj as { en: unknown }).en;
    const arArr = (reqObj as { ar: unknown }).ar;
    requirements = {
      en: Array.isArray(enArr)
        ? (enArr as unknown[]).filter((r: unknown) => typeof r === "string").map((r: string) => r.trim()).filter(Boolean)
        : [],
      ar: Array.isArray(arArr)
        ? (arArr as unknown[]).filter((r: unknown) => typeof r === "string").map((r: string) => r.trim()).filter(Boolean)
        : [],
    };
  } else {
    const fallback = Array.isArray(b.requirements)
      ? (b.requirements as unknown[])
          .filter((r: unknown) => typeof r === "string")
          .map((r: string) => r.trim())
          .filter(Boolean)
      : [];
    requirements = { en: fallback, ar: fallback };
  }
  const applyUrl = typeof b.applyUrl === "string" ? (b.applyUrl as string).trim() || undefined : undefined;
  if (!title.en && !title.ar) return null;
  return {
    title: { en: title.en || title.ar, ar: title.ar || title.en },
    requirements,
    applyUrl,
  };
}
