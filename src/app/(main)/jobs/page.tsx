import type { Metadata } from "next";
import { getLocale } from "@/app/actions/locale";
import JobsHero from "@/components/sections/jobs/JobsHero";
import JobsListSection from "@/components/sections/jobs/JobsListSection";
import { getJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Jobs — Scribble",
  description: "Careers and opportunities at Scribble",
};

export default async function JobsPage() {
  const [locale, jobsList] = await Promise.all([getLocale(), getJobs()]);
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden min-h-screen">
      <JobsHero locale={locale} />
      <JobsListSection jobs={jobsList} locale={locale} />
    </main>
  );
}
