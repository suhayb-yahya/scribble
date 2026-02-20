import { NextResponse } from "next/server";
import { verifyAdminCookie } from "@/lib/auth";
import { getJobs, saveJobs, parseBilingualBody } from "@/lib/jobs";
import type { JobItem } from "@/components/sections/jobs/JobsListSection";

function requireAdmin(request: Request): NextResponse | null {
  const cookie = request.headers.get("cookie");
  if (!verifyAdminCookie(cookie)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const err = requireAdmin(request);
  if (err) return err;
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const parsed = parseBilingualBody(body);
  if (!parsed) {
    return NextResponse.json({ error: "At least one title (EN or AR) is required" }, { status: 400 });
  }
  const jobs = await getJobs();
  const index = jobs.findIndex((j) => j.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }
  const updated: JobItem = { ...jobs[index], ...parsed };
  jobs[index] = updated;
  await saveJobs(jobs);
  return NextResponse.json(updated);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const err = requireAdmin(_request);
  if (err) return err;
  const { id } = await params;
  const jobs = await getJobs();
  const filtered = jobs.filter((j) => j.id !== id);
  if (filtered.length === jobs.length) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }
  await saveJobs(filtered);
  return NextResponse.json({ ok: true });
}
