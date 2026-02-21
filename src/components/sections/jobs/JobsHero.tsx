"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin", "arabic"] });

export default function JobsHero() {
  const t = useTranslations("jobs");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden bg-[#7B2553]"
      aria-label="Jobs at Scribble"
    >
      <div className="content-nav-aligned relative flex flex-col md:block w-full">
        {/* Image container */}
        <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] overflow-hidden shrink-0">
          <Image
            src="/assets/jobs-main.png"
            alt="Join our team — modern creative studio at Scribble"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            unoptimized
          />
        </div>

        {/* Text: below image on mobile, overlay on desktop */}
        <div
          className={`relative md:absolute md:bottom-0 pt-6 pb-6 md:pt-4 md:pb-0 pointer-events-none flex flex-col justify-center mb-0 md:mb-6 md:mb-10 max-w-[800px] w-full items-center md:items-start text-center ${isRtl ? "md:left-auto md:right-0 md:text-right" : "md:left-0 md:right-auto md:text-left"}`}
          dir={isRtl ? "rtl" : undefined}
          aria-hidden
        >
          <h1
            className={`${rubik.className} text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10 max-w-4xl leading-tight text-white ${isRtl ? "md:text-right md:self-start" : "md:text-left md:self-start"}`}
            dir={isRtl ? "rtl" : undefined}
          >
            {t("title")}
          </h1>
          <p
            className={`${rubik.className} font-normal text-xl md:text-3xl text-white max-w-6xl mb-16 leading-tight ${isRtl ? "md:text-right md:self-start" : "md:text-left md:self-start"}`}
            dir={isRtl ? "rtl" : undefined}
          >
            {t("intro")}
          </p>
        </div>
      </div>
    </section>
  );
}
