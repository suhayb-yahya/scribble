export default function StoryMissionVision() {
  return (
    <section className="py-20 px-6 md:px-10 bg-[#e5e5e5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold uppercase text-primary mb-4">STORY</h3>
            <p className="text-lg text-black font-medium leading-relaxed">
              Our story is one of passion, creativity, and growth. What started as a simple idea became a journey of turning visions into powerful visual experiences. With every project, we continue to inspire, innovate, and leave a lasting impact.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold uppercase text-primary mb-4">MISSION</h3>
            <p className="text-lg text-black font-medium leading-relaxed">
              In our graphic design work, we focus on delivering more than just beautiful visuals, we craft designs that communicate, inspire, and achieve real impact.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold uppercase text-primary mb-4">VISION</h3>
            <p className="text-lg text-black font-medium leading-relaxed">
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
