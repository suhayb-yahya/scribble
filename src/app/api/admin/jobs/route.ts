import { NextResponse } from "next/server";
import { verifyAdminCookie } from "@/lib/auth";
import { getJobs, saveJobs, slugifyId } from "@/lib/jobs";
import type { JobItem } from "@/components/sections/jobs/JobsListSection";

function requireAdmin(request: Request): NextResponse | null {
  const cookie = request.headers.get("cookie");
  if (!verifyAdminCookie(cookie)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET(request: Request) {
  const err = requireAdmin(request);
  if (err) return err;
  const jobs = await getJobs();
  return NextResponse.json(jobs);
}

export async function POST(request: Request) {
  const err = requireAdmin(request);
  if (err) return err;
  const body = await request.json().catch(() => ({}));
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const requirements = Array.isArray(body.requirements)
    ? body.requirements.filter((r: unknown) => typeof r === "string").map((r: string) => r.trim())
    : [];
  const applyUrl = typeof body.applyUrl === "string" ? body.applyUrl.trim() || undefined : undefined;
  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }
  const id = slugifyId(title);
  const jobs = await getJobs();
  if (jobs.some((j) => j.id === id)) {
    return NextResponse.json({ error: "A job with this title already exists (duplicate id)" }, { status: 400 });
  }
  const newJob: JobItem = { id, title, requirements, applyUrl };
  await saveJobs([...jobs, newJob]);
  return NextResponse.json(newJob, { status: 201 });
}
