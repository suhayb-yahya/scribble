import { NextResponse } from "next/server";
import { getJobs } from "@/lib/jobs";

export async function GET() {
  const jobs = await getJobs();
  return NextResponse.json(jobs);
}
