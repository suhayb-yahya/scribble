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

function parseRequirements(v: unknown): string[] {
  if (Array.isArray(v)) {
    return v.filter((r: unknown) => typeof r === "string").map((r: string) => r.trim()).filter(Boolean);
  }
  if (typeof v === "string") {
    return v.split("\n").map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

export async function POST(request: Request) {
  const err = requireAdmin(request);
  if (err) return err;
  const body = await request.json().catch(() => ({}));
  const titleEn = typeof body.titleEn === "string" ? body.titleEn.trim() : "";
  const titleAr = typeof body.titleAr === "string" ? body.titleAr.trim() : "";
  const requirementsEn = parseRequirements(body.requirementsEn ?? body.requirements);
  const requirementsAr = parseRequirements(body.requirementsAr);
  const applyUrl = typeof body.applyUrl === "string" ? body.applyUrl.trim() || undefined : undefined;
  if (!titleEn && !titleAr) {
    return NextResponse.json({ error: "At least one of title (EN) or title (AR) is required" }, { status: 400 });
  }
  const id = slugifyId(titleEn || titleAr);
  const jobs = await getJobs();
  if (jobs.some((j) => j.id === id)) {
    return NextResponse.json({ error: "A job with this title already exists (duplicate id)" }, { status: 400 });
  }
  const newJob: JobItem = {
    id,
    title: { en: titleEn, ar: titleAr },
    requirements: { en: requirementsEn, ar: requirementsAr },
    applyUrl,
  };
  await saveJobs([...jobs, newJob]);
  return NextResponse.json(newJob, { status: 201 });
}
