"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: "600", subsets: ["latin", "arabic"] });

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
          className={`absolute bottom-0 p-4 pointer-events-none flex flex-col justify-center mb-12 md:mb-16 max-w-[600px] ${isRtl ? "right-0 items-start text-right" : "left-0 items-start text-left"}`}
          dir={isRtl ? "rtl" : undefined}
          aria-hidden
        >
          <h1
            className={`${rubik.className} mb-4 ${isRtl ? "text-right" : "text-left"}`}
            dir={isRtl ? "rtl" : undefined}
            style={{
              color: "#FFF",
              fontFamily: "Rubik",
              fontSize: "53.294px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {t("title")}
          </h1>
          <p
            className={`${rubik.className} mt-4 ${isRtl ? "text-right" : "text-left"}`}
            dir={isRtl ? "rtl" : undefined}
            style={{
              color: "#FFF",
              fontFamily: "Rubik",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {t("intro")}
          </p>
        </div>
      </div>
    </section>
  );
}
