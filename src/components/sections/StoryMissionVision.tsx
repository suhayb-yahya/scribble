"use client";

import { Rubik } from "next/font/google";
import { useTranslations } from "next-intl";

const rubik = Rubik({
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700"],
});

export default function StoryMissionVision() {
  const t = useTranslations("storyMissionVision");
  return (
      <section className={`${rubik.className} bg-white py-20 px-6 md:px-10`}>
        <div className="max-w-[1200px] mx-auto">
          {/* Top paragraph (center) */}
          <p className="mx-auto md:max-w-[790.4px] text-center text-[28px] leading-[1.4] font-[400] text-primary">
            {t("intro")}
          </p>

          {/* Content */}
          <div className="mt-16 flex flex-row items-center justify-center gap-12 md:gap-[170px] w-full">
            {/* Left - content to the left of image */}
            <div className="space-y-12 max-w-[480px] shrink-0 w-full">
              <div className="w-full max-w-[460px]">
                <h3 className="text-primary text-[28px] leading-[1] font-[600] uppercase mb-3">
                  {t("story")}
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-normal">
                  {t("storyDesc")}
                </p>
              </div>

              <div className="w-full max-w-[460px]">
                <h3 className="text-primary text-[28px] leading-[1] font-[600] uppercase mb-3">
                  {t("mission")}
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-normal">
                  {t("missionDesc")}
                </p>
              </div>

              <div className="w-full max-w-[460px]">
                <h3 className="text-primary text-[28px] leading-[1] font-[600] uppercase mb-3">
                  {t("vision")}
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-normal">
                  {t("visionDesc")}
                </p>
              </div>
            </div>

            {/* Right - image */}
            <div className="flex justify-center shrink-0">
              <img
                  src="/assets/avatar.png"
                  alt="Scribble Mascot"
                  className="w-full max-w-[380px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
