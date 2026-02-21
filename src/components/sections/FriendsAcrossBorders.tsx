"use client";

import { useLocale, useTranslations } from "next-intl";

export default function FriendsAcrossBorders() {
  const t = useTranslations("friendsAcrossBorders");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <div className="w-full bg-[#7B2553]">
      <section className="min-h-0 py-10 md:py-14 pb-12 md:pb-16 bg-[#7B2553] shadow-none isolate">
        <div className={`content-nav-aligned ${isRtl ? "text-right" : "text-center"}`} dir={isRtl ? "rtl" : undefined}>
          <h2 className="text-2xl md:text-[45px] text-white font-bold uppercase tracking-tight mb-4 md:mb-6 -mt-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]">
              {t("title")}
            </span>
          </h2>
          <p className={`text-white leading-[1.2] text-base md:text-[28px] sm:max-w-[55.5rem] mx-auto mt-10 ${isRtl ? "text-right" : "text-center"}`}>
            {t("description")}
          </p>
        </div>
      </section>
    </div>
  );
}
