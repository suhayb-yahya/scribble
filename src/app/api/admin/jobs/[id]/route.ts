import { NextResponse } from "next/server";
import { verifyAdminCookie } from "@/lib/auth";
import { getJobs, saveJobs } from "@/lib/jobs";
import type { JobItem } from "@/components/sections/jobs/JobsListSection";

function requireAdmin(request: Request): NextResponse | null {
  const cookie = request.headers.get("cookie");
  if (!verifyAdminCookie(cookie)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

function parseRequirements(v: unknown): string[] {
  if (Array.isArray(v)) {
    return v.filter((r: unknown) => typeof r === "string").map((r: string) => r.trim()).filter(Boolean);
  }
  if (typeof v === "string") {
    return v.split("\n").map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const err = requireAdmin(request);
  if (err) return err;
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const titleEn = typeof body.titleEn === "string" ? body.titleEn.trim() : "";
  const titleAr = typeof body.titleAr === "string" ? body.titleAr.trim() : "";
  const requirementsEn = parseRequirements(body.requirementsEn ?? body.requirements);
  const requirementsAr = parseRequirements(body.requirementsAr);
  const applyUrl = typeof body.applyUrl === "string" ? body.applyUrl.trim() || undefined : undefined;
  if (!titleEn && !titleAr) {
    return NextResponse.json({ error: "At least one of title (EN) or title (AR) is required" }, { status: 400 });
  }
  const jobs = await getJobs();
  const index = jobs.findIndex((j) => j.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }
  const updated: JobItem = {
    ...jobs[index],
    title: { en: titleEn, ar: titleAr },
    requirements: { en: requirementsEn, ar: requirementsAr },
    applyUrl,
  };
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
