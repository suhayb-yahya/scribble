"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: ["400", "600", "700"], subsets: ["latin", "arabic"] });

function PlayIcon({ className, rtl }: { className?: string; rtl?: boolean }) {
  return (
    <svg
      className={`${className ?? ""} ${rtl ? "rotate-180" : ""}`.trim()}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M0 0 L0 24 L24 12 Z" />
    </svg>
  );
}

export type JobItem = {
  id: string;
  title: string;
  requirements: string[];
  applyUrl?: string;
};

type JobsListSectionProps = {
  jobs: JobItem[];
};

export default function JobsListSection({ jobs }: JobsListSectionProps) {
  const t = useTranslations("jobs");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <section
      className="py-16 md:py-24 bg-white min-h-0"
      aria-label={t("availablePositions")}
      dir={isRtl ? "rtl" : undefined}
    >
      <div className={isRtl ? "content-nav-aligned-right" : "content-nav-aligned"}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] min-h-0">
      {/* Left half: jobs list */}
      <div className={`max-w-4xl flex flex-col gap-12 md:gap-16 pr-6 md:pr-10 ${isRtl ? "text-right" : ""}`}>
        {jobs.map((job) => (
          <article
            key={job.id}
            className="flex flex-col gap-6"
            aria-labelledby={`job-title-${job.id}`}
          >
            {/* Job title with play icon */}
            <div className="flex items-center gap-3">
              <span className="text-black shrink-0" aria-hidden>
                <PlayIcon className="w-4 h-4 md:w-5 md:h-5" rtl={isRtl} />
              </span>
              <h2
                id={`job-title-${job.id}`}
                className={rubik.className}
                style={{
                  color: "#7B2553",
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                {job.title}
              </h2>
            </div>

            {/* Requirements list */}
            <ul className="list-none pl-0 space-y-2 text-gray-800 text-base md:text-lg leading-relaxed">
              {job.requirements.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-gray-500 shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Apply button: black by default, gradient on hover */}
            <div className="pt-2">
              <a
                href={job.applyUrl ?? "#"}
                className={`${rubik.className} apply-now-btn inline-flex items-center gap-2 uppercase font-bold text-white text-sm tracking-wide rounded-full px-6 py-3 transition-[background] duration-300`}
              >
                {t("applyNow")}
                <PlayIcon className="w-4 h-4 text-white shrink-0" rtl={isRtl} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Right half: character illustration (smaller to give more room to jobs list) */}
      <div className="relative w-full min-h-[280px] lg:min-h-[360px] flex items-start justify-center lg:justify-start px-6 lg:pl-6 lg:pr-10 pt-8 lg:pt-[100px]">
        <Image
          src="/assets/jobs-character.png"
          alt="Creative professional at work — join our team at Scribble"
          width={430}
          height={400}
          className="object-contain"
          unoptimized
        />
      </div>
        </div>
      </div>
    </section>
  );
}
