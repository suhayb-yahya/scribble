"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: ["600", "700"], subsets: ["latin", "arabic"] });

export default function ContactHero() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden"
      aria-label="Contact Scribble"
    >
      <div className="content-nav-aligned relative w-full aspect-[3/2] min-h-[360px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px] shadow-none">
        <Image
          src="/assets/contact-main.png"
          alt="Scribble studio — creative team and production environment"
          fill
          className="object-cover object-center shadow-none"
          sizes="100vw"
          priority
          unoptimized
        />

        <div
          className={`absolute inset-y-0 bottom-0 pb-[200px] pointer-events-none flex flex-col justify-end max-w-2xl ${isRtl ? "left-auto right-0 mr-3 md:mr-4 items-end text-right" : "left-0 right-auto ml-3 md:ml-4 items-start text-left"}`}
          dir={isRtl ? "rtl" : undefined}
          aria-hidden
        >
          <h1
            className={`${rubik.className} text-[#FFF] font-semibold uppercase tracking-tight ${isRtl ? "text-right" : "text-left"}`}
            dir={isRtl ? "rtl" : undefined}
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 500,
              lineHeight: "1.2",
            }}
          >
            {t("title1")}<br />{t("title2")}<br /><span className="whitespace-nowrap">{t("title3")}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
