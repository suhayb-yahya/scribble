"use client";

import { Rubik } from "next/font/google";
import { useTranslations } from "next-intl";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin", "arabic"] });

const boxes = [
  { titleKey: "ourPhilosophy", bodyKey: "philosophyDesc" },
  { titleKey: "whyScribble", bodyKey: "whyScribbleDesc" },
] as const;

export default function AboutPhilosophySection() {
  const t = useTranslations("about");
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-10 bg-primary"
      aria-label="Our philosophy and why Scribble"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {boxes.map((box) => (
          <div
            key={box.titleKey}
            className="rounded-2xl p-6 sm:p-8 md:p-10 border-2 flex flex-col justify-center min-h-[200px] bg-primary hover:bg-[#4F1A39] transition-colors duration-200"
            style={{
              borderColor: "#D2A860",
            }}
          >
            <h2
              className={`${rubik.className} text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-wide mb-4`}
              style={{ color: "#D2A860" }}
            >
              {t(box.titleKey)}
            </h2>
            <p
              className={`${rubik.className} text-base md:text-lg font-normal leading-relaxed`}
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
