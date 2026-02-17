import type { Metadata } from "next";
import JobsHero from "@/components/sections/jobs/JobsHero";
import JobsListSection from "@/components/sections/jobs/JobsListSection";
import { getJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Jobs — Scribble",
  description: "Careers and opportunities at Scribble",
};

export default async function JobsPage() {
  const jobsList = await getJobs();
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden min-h-screen">
      <JobsHero />
      <JobsListSection jobs={jobsList} />
    </main>
  );
}
