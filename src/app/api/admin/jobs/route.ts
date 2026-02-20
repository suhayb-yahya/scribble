import { NextResponse } from "next/server";
import { verifyAdminCookie } from "@/lib/auth";
import { getJobs, saveJobs, slugifyId, parseBilingualBody } from "@/lib/jobs";
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
  const parsed = parseBilingualBody(body);
  if (!parsed) {
    return NextResponse.json({ error: "At least one title (EN or AR) is required" }, { status: 400 });
  }
  const id = slugifyId(parsed.title.en || parsed.title.ar);
  const jobs = await getJobs();
  if (jobs.some((j) => j.id === id)) {
    return NextResponse.json({ error: "A job with this title already exists (duplicate id)" }, { status: 400 });
  }
  const newJob: JobItem = { id, ...parsed };
  await saveJobs([...jobs, newJob]);
  return NextResponse.json(newJob, { status: 201 });
}
