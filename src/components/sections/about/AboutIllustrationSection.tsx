"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: ["700"], subsets: ["latin", "arabic"] });

export default function AboutIllustrationSection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className="w-full min-w-0 pt-16 pb-4 md:pt-20 md:pb-6 flex flex-col justify-center items-center gap-6 md:gap-8"
      style={{ backgroundColor: "#7B2553" }}
      aria-label="Different — nothing pleases us except the strange"
    >
      <div className={`content-nav-aligned w-full flex flex-col justify-center gap-6 md:gap-8 items-center text-center ${isRtl ? "md:items-end md:text-right" : ""}`} dir={isRtl ? "rtl" : undefined}>
      <div className="flex justify-center items-center relative w-full max-w-[280px] md:max-w-[360px] mx-auto">
        <Image
          src="/assets/char.svg"
          alt="Scribble character — creative at work"
          width={271}
          height={294}
          className="block w-full h-auto max-h-[280px] md:max-h-[360px] object-contain"
          unoptimized
        />
      </div>

      <div
        className={`${rubik.className} flex flex-col justify-center items-center ${isRtl ? "md:items-end" : ""} uppercase font-bold max-w-full mt-6 md:mt-8`}
        style={{
          width: "50%",
          minWidth: "min(578px, 100%)",
          fontSize: "clamp(32px, 6vw, 56px)",
          letterSpacing: "0.02em",
          lineHeight: 1.2,
          background: "#FFFFFF",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >

        <h2
          className={`text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 max-w-4xl leading-tight mx-auto text-center ${isRtl ? "md:text-right" : ""}`}
          dir={isRtl ? "rtl" : undefined}
        >
          {t("heading1")} <br /> {t("heading2")}
        </h2>
        
      </div>
      </div>
    </section>
  );
}
