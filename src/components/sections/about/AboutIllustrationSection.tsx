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
      className="w-full min-w-0 pt-[100px] pb-12 md:pt-[100px] md:pb-16 flex flex-col justify-center items-center gap-8 md:gap-10"
      style={{ backgroundColor: "#7B2553" }}
      aria-label="Different — nothing pleases us except the strange"
    >
      <div className={`content-nav-aligned w-full flex flex-col justify-center gap-8 md:gap-10 items-center text-center`} dir={isRtl ? "rtl" : undefined}>
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
        className={`${rubik.className} flex flex-col justify-center items-center uppercase font-bold max-w-full mt-10 md:mt-14`}
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
          className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10 max-w-4xl leading-tight text-center mx-auto"
          dir={isRtl ? "rtl" : undefined}
        >
          {t("heading1")} <br /> {t("heading2")}
        </h2>
        
      </div>
      </div>
    </section>
  );
}
