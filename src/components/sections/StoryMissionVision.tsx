import { Rubik } from "next/font/google";
import { getTranslations, type Locale } from "@/lib/translations";

const rubik = Rubik({
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700"],
});

export default function StoryMissionVision({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const { intro, story, mission, vision } = t.storyMissionVision;

  return (
      <section className={`${rubik.className} bg-white py-20 px-6 md:px-10`}>
        <div className="max-w-6xl mx-auto">
          {/* Top paragraph (center) */}
          <p className="mx-auto md:max-w-[760.4px] md:max-h-[210px] text-center text-[32px] leading-[1.4] font-[400] text-primary">
            {intro}
          </p>

          {/* Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Start side (left in LTR, right in RTL) */}
            <div className="space-y-12">
              <div>
                <h3 className="text-primary text-[32px] leading-[1] font-[600] uppercase mb-3">
                  {story.title}
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-[600] max-w-[460px]">
                  {story.body}
                </p>
              </div>

              <div>
                <h3 className="text-primary text-[32px] leading-[1] font-[600] uppercase mb-3">
                  {mission.title}
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-[600] max-w-[460px]">
                  {mission.body}
                </p>
              </div>

              <div>
                <h3 className="text-primary text-[32px] leading-[1] font-[600] uppercase mb-3">
                  {vision.title}
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-[600] max-w-[460px]">
                  {vision.body}
                </p>
              </div>
            </div>

            {/* End side */}
            <div className="flex justify-center md:justify-end rtl:md:justify-start">
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
