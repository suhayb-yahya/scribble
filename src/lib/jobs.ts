import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { put, list } from "@vercel/blob";
import type { JobItem } from "@/components/sections/jobs/JobsListSection";

const BLOB_PATH = "data/jobs.json";
const DATA_DIR = path.join(process.cwd(), "data");
const JOBS_PATH = path.join(DATA_DIR, "jobs.json");

function useBlob(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function getJobs(): Promise<JobItem[]> {
  if (useBlob()) {
    try {
      const { blobs } = await list({ prefix: "data/" });
      const blob = blobs.find((b: { pathname: string }) => b.pathname === BLOB_PATH);
      if (blob?.url) {
        const res = await fetch(blob.url);
        const data = await res.text();
        const parsed = JSON.parse(data) as JobItem[];
        return Array.isArray(parsed) ? parsed : [];
      }
      // No blob yet: seed from built-in file (read-only works on Vercel)
      const data = await readFile(JOBS_PATH, "utf-8");
      const parsed = JSON.parse(data) as JobItem[];
      const jobs = Array.isArray(parsed) ? parsed : [];
      if (jobs.length > 0) await put(BLOB_PATH, JSON.stringify(jobs, null, 2), { access: "public", contentType: "application/json", addRandomSuffix: false, allowOverwrite: true });
      return jobs;
    } catch {
      // fall through
    }
    return [];
  }
  try {
    const data = await readFile(JOBS_PATH, "utf-8");
    const parsed = JSON.parse(data) as JobItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveJobs(jobs: JobItem[]): Promise<void> {
  const body = JSON.stringify(jobs, null, 2);
  if (useBlob()) {
    await put(BLOB_PATH, body, { access: "public", contentType: "application/json", addRandomSuffix: false, allowOverwrite: true });
    return;
  }
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(JOBS_PATH, body, "utf-8");
}

export function slugifyId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
