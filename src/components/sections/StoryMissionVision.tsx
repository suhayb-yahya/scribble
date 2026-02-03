import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "600", subsets: ["latin"] });

export default function StoryMissionVision() {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-12 ml-6 md:ml-[220px]">
          <div>
            <h3 className={`${rubik.className} text-[35.868px] font-semibold leading-normal uppercase text-primary mb-4`}>STORY</h3>
            <p className={`${rubik.className} text-[18.513px] font-semibold leading-normal text-[#19140F]`}>
              Our story is one of passion, creativity, and growth. What started as a simple idea became a journey of turning visions into powerful visual experiences. With every project, we continue to inspire, innovate, and leave a lasting impact.
            </p>
          </div>
          <div>
            <h3 className={`${rubik.className} text-[35.868px] font-semibold leading-normal uppercase text-primary mb-4`}>MISSION</h3>
            <p className={`${rubik.className} text-[18.513px] font-semibold leading-normal text-[#19140F]`}>
              In our graphic design work, we focus on delivering more than just beautiful visuals, we craft designs that communicate, inspire, and achieve real impact.
            </p>
          </div>
          <div>
            <h3 className={`${rubik.className} text-[35.868px] font-semibold leading-normal uppercase text-primary mb-4`}>VISION</h3>
            <p className={`${rubik.className} text-[18.513px] font-semibold leading-normal text-[#19140F]`}>
              In our graphic design work, we focus on delivering more than just beautiful visuals, we craft designs that communicate, inspire, and achieve real impact.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/avatar.png"
            alt="Scribble Mascot"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
