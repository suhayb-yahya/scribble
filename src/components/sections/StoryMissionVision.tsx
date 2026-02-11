import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function StoryMissionVision() {
  return (
      <section className={`${rubik.className} bg-white py-20 px-6 md:px-10`}>
        <div className="max-w-[1200px] mx-auto">
          {/* Top paragraph (center) */}
          <p className="mx-auto md:max-w-[790.4px] md:max-h-[1900px] text-center text-[28px] leading-[1.4] font-[400] text-primary">
            Founded in 2016, Scribble Media Production has delivered standout projects built on
            the creativity and passion of its team. With a unique artistic touch, our original work
            has defined the company’s identity and set it apart in the industry.
          </p>

          {/* Content */}
          <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-center gap-12 md:gap-[170px] w-full">
            {/* Left */}
            <div className="space-y-12 md:max-w-[480px] md:shrink-0">
              <div>
                <h3 className="text-primary text-[28px] leading-[1] font-[600] uppercase mb-3">
                  STORY
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-normal max-w-[460px]">
                  Our story is one of passion, creativity, and growth. What started as a simple idea
                  became a journey of turning visions into powerful visual experiences. With every
                  project, we continue to inspire, innovate, and leave a lasting impact.
                </p>
              </div>

              <div>
                <h3 className="text-primary text-[28px] leading-[1] font-[600] uppercase mb-3">
                  MISSION
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-normal max-w-[460px]">
                  In our graphic design work, we focus on delivering more than just beautiful visuals,
                  we craft designs that communicate, inspire, and achieve real impact.
                </p>
              </div>

              <div>
                <h3 className="text-primary text-[28px] leading-[1] font-[600] uppercase mb-3">
                  VISION
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-normal max-w-[460px]">
                  In our graphic design work, we focus on delivering more than just beautiful visuals,
                  we craft designs that communicate, inspire, and achieve real impact.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-center md:shrink-0">
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
