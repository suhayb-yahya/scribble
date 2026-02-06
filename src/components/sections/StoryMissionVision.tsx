import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function StoryMissionVision() {
  return (
      <section className={`${rubik.className} bg-white py-20 px-6 md:px-10`}>
        <div className="max-w-6xl mx-auto">
          {/* Top paragraph (center) */}
          <p className="mx-auto md:max-w-[760.4px] md:max-h-[210px] text-center text-[32px] leading-[1.4] font-[400] text-primary">
            Founded in 2016, Scribble Media Production has delivered standout projects built on
            the creativity and passion of its team. With a unique artistic touch, our original work
            has defined the company’s identity and set it apart in the industry.
          </p>

          {/* Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-12">
              <div>
                <h3 className="text-primary text-[32px] leading-[1] font-[600] uppercase mb-3">
                  STORY
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-[600] max-w-[460px]">
                  Our story is one of passion, creativity, and growth. What started as a simple idea
                  became a journey of turning visions into powerful visual experiences. With every
                  project, we continue to inspire, innovate, and leave a lasting impact.
                </p>
              </div>

              <div>
                <h3 className="text-primary text-[32px] leading-[1] font-[600] uppercase mb-3">
                  MISSION
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-[600] max-w-[460px]">
                  In our graphic design work, we focus on delivering more than just beautiful visuals,
                  we craft designs that communicate, inspire, and achieve real impact.
                </p>
              </div>

              <div>
                <h3 className="text-primary text-[32px] leading-[1] font-[600] uppercase mb-3">
                  VISION
                </h3>
                <p className="text-[#19140F] text-[18px] leading-[1.5] font-[600] max-w-[460px]">
                  In our graphic design work, we focus on delivering more than just beautiful visuals,
                  we craft designs that communicate, inspire, and achieve real impact.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
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
