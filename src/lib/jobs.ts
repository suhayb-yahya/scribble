import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { JobItem } from "@/components/sections/jobs/JobsListSection";

const DATA_DIR = path.join(process.cwd(), "data");
const JOBS_PATH = path.join(DATA_DIR, "jobs.json");

export async function getJobs(): Promise<JobItem[]> {
  try {
    const data = await readFile(JOBS_PATH, "utf-8");
    const parsed = JSON.parse(data) as JobItem[];
    return Array.isArray(parsed) ? parsed : [];
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
