"use client";

import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700"],
});

export default function StoryMissionVision() {
  const t = useTranslations("storyMissionVision");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
      <section className={`${rubik.className} bg-white py-12 md:py-20 w-full`}>
        <div className="content-nav-aligned w-full" dir={isRtl ? "rtl" : undefined}>
          {/* Top paragraph (center) */}
          <p className={`mx-auto max-w-[790.4px] text-lg md:text-[28px] leading-[1.4] font-[400] text-primary px-2 ${isRtl ? "text-right" : "text-center"}`}>
            {t("intro")}
          </p>

          {/* Content: stacked on mobile, side-by-side on desktop */}
          <div className="mt-10 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[170px] w-full">
            {/* Left - content blocks */}
            <div className={`space-y-8 md:space-y-12 max-w-[480px] w-full order-2 md:order-1 ${isRtl ? "text-right" : ""}`}>
              <div className="w-full max-w-[460px]">
                <h3 className="text-primary text-xl md:text-[28px] leading-[1] font-[600] uppercase mb-2 md:mb-3">
                  {t("story")}
                </h3>
                <p className="text-[#19140F] text-base md:text-[18px] leading-[1.5] font-normal">
                  {t("storyDesc")}
                </p>
              </div>

              <div className="w-full max-w-[460px]">
                <h3 className="text-primary text-xl md:text-[28px] leading-[1] font-[600] uppercase mb-2 md:mb-3">
                  {t("mission")}
                </h3>
                <p className="text-[#19140F] text-base md:text-[18px] leading-[1.5] font-normal">
                  {t("missionDesc")}
                </p>
              </div>

              <div className="w-full max-w-[460px]">
                <h3 className="text-primary text-xl md:text-[28px] leading-[1] font-[600] uppercase mb-2 md:mb-3">
                  {t("vision")}
                </h3>
                <p className="text-[#19140F] text-base md:text-[18px] leading-[1.5] font-normal">
                  {t("visionDesc")}
                </p>
              </div>
            </div>

            {/* Right - image: above content on mobile */}
            <div className="flex justify-center shrink-0 order-1 md:order-2">
              <img
                  src="/assets/avatar.png"
                  alt="Scribble Mascot"
                  className="w-full max-w-[240px] md:max-w-[380px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
