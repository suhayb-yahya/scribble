"use client";

import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin", "arabic"] });

const boxes = [
  { titleKey: "ourPhilosophy", bodyKey: "philosophyDesc" },
  { titleKey: "whyScribble", bodyKey: "whyScribbleDesc" },
] as const;

export default function AboutPhilosophySection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <section
      className="pt-16 md:pt-24 pb-0 bg-primary"
      aria-label="Our philosophy and why Scribble"
    >
      <div className={`${isRtl ? "content-nav-aligned-right" : "content-nav-aligned"} grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`} dir={isRtl ? "rtl" : undefined}>
        {boxes.map((box) => (
          <div
            key={box.titleKey}
            className="rounded-2xl p-6 sm:p-8 md:p-10 border-2 flex flex-col justify-center min-h-[200px] bg-primary hover:bg-[#4F1A39] transition-colors duration-200"
            style={{
              borderColor: "#D2A860",
            }}
          >
            <h2
              className={`${rubik.className} text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-wide mb-4 text-center md:text-left ${isRtl ? "md:text-right" : ""}`}
              style={{ color: "#D2A860" }}
            >
              {t(box.titleKey)}
            </h2>
            <p
              className={`${rubik.className} text-base md:text-lg font-normal leading-relaxed text-center md:text-left ${isRtl ? "md:text-right" : ""}`}
              style={{ color: "#FFFFFF" }}
            >
              {t(box.bodyKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
