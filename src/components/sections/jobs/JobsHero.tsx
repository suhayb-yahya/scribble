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
      <div className="content-nav-aligned relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] overflow-hidden">
        <Image
          src="/assets/jobs-main.png"
          alt="Join our team — modern creative studio at Scribble"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          unoptimized
        />

        {/* Text overlay: English = left (original), Arabic = right aligned to navbar */}
        <div
          className={`absolute bottom-0 pt-4 pb-0 pointer-events-none flex flex-col justify-center mb-6 md:mb-10 max-w-[800px] ${isRtl ? "right-0 pl-4 pr-0 items-end text-right" : "left-0 pl-0 pr-4 items-start text-left"}`}
          dir={isRtl ? "rtl" : undefined}
          aria-hidden
        >
          <h1
            className={`${rubik.className} text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10 max-w-4xl leading-tight text-white text-left`}
            dir={isRtl ? "rtl" : undefined}
          >
            {t("title")}
          </h1>
          <p
            className={`${rubik.className} font-normal text-xl md:text-3xl text-white max-w-6xl mb-16 leading-tight text-left`}
            dir={isRtl ? "rtl" : undefined}
          >
            {t("intro")}
          </p>
        </div>
      </div>
    </section>
  );
}
