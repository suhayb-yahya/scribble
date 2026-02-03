const servicesData = [
  {
    title: "GRAPHIC DESIGN",
    description:
      "In our graphic design work, we focus on delivering more than just beautiful visuals, we craft designs that communicate, inspire.",
  },
  {
    title: "MOTION, ANIMATION",
    description:
      "Motion graphics and animation are effective visual tools that convert complex ideas into clear, engaging, and interactive content.",
  },
  {
    title: "BRANDING",
    description:
      "Branding is more than just a logo or a color palette; it is the experience that shapes a brand's identity and leaves an impression on audience.",
  },
  {
    title: "PRODUCTION",
    description:
      "Transforming ideas into visual content begins with planning and scriptwriting, followed by filming, directing, and editing, all using cinematic equipment.",
  },
  {
    title: "PHOTOGRAPHY",
    description:
      "We offer professional photo sessions carefully designed to capture moments and create images that showcase a brand's identity at its best.",
  },
  {
    title: "SOCIAL MEDIA",
    description:
      "Managing social media pages is more than just posting: it's a complete process designed to build a strong and consistent presence for the brand.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero banner — image extends behind navbar */}
      <section className="w-full overflow-hidden" aria-label="Hero">
        <img
          src="/assets/hero-banner.png"
          alt="Scribble — modern workspace"
          className="w-full h-auto object-cover object-center block"
        />
      </section>

      {/* Services section - primary bg, no top border, rounded bottom */}
      <section className="bg-primary text-white pt-24 pb-32 px-6 md:px-10 rounded-b-[3rem] md:rounded-b-[4rem]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
            NOTHING PLEASES US<br />EXCEPT THE STRANGE
          </h2>
          <p className="text-xl md:text-2xl font-bold text-center text-white max-w-5xl mx-auto mb-16 leading-tight px-4">
            We strive to provide a comprehensive range of creative and professional services designed to meet the needs of brands in today&apos;s competitive digital world. From the first idea to the final execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {servicesData.map((card) => (
              <article
                key={card.title}
                className="bg-primary border border-white/40 rounded-2xl p-8 text-left h-full flex flex-col justify-start transition-colors duration-200 hover:bg-[#6a2049]"
              >
                <h3 className="text-lg font-bold uppercase tracking-wide mb-4">
                  {card.title}
                </h3>
                <p className="text-base text-white/90 leading-relaxed">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About text section */}
      <section className="py-24 px-6 md:px-10 bg-[#e5e5e5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[32px] font-medium leading-relaxed text-primary">
            Founded in 2016, Scribble Media Production has delivered standout projects built on the creativity and passion of its team. With a unique artistic touch, our original work has defined the company’s identity and set it apart in the industry.
          </p>
        </div>
      </section>

      {/* Story, Mission, Vision Section */}
      <section className="py-20 px-6 md:px-10 bg-[#e5e5e5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
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

          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/avatar.png"
              alt="Scribble Mascot"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Explore Section — rounded top; fades into primary for smooth merge */}
      <section
        className="relative min-h-[72vh] md:min-h-[76vh] py-16 md:py-24 px-6 md:px-10 overflow-hidden rounded-t-[80px] md:rounded-t-[96px] bg-cover bg-center bg-no-repeat bg-[url('/assets/explore-bg.png')]"
        aria-label="Explore"
      >
        {/* Overlay: darkens right for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50 rounded-t-[80px] md:rounded-t-[96px]" aria-hidden />
        {/* Bottom gradient: dark to primary so image flows into section below */}
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#5A1F46] to-transparent pointer-events-none" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-end items-center md:items-start text-right min-h-[50vh] md:min-h-[55vh]">
          <div className="w-full max-w-[520px]">
            <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold uppercase text-white tracking-[0.04em] mb-4">
              EXPLORE
            </h2>
            <p className="text-sm md:text-[15px] text-[#EDEDED] leading-[1.6] max-w-[420px] ml-auto mb-10">
              At Scribble Production Company, ordinary is never enough. We constantly seek creativity that stands out, turning ideas into powerful visuals and sound that leave a lasting impression. With passion and expertise, we craft work that elevates your brand and speaks to your audience in the best way possible.
            </p>

            {/* Stats Pill — 72px height, muted border, 28px numbers, 11px labels */}
            <div className="mt-10 flex justify-end">
              <div className="flex items-center gap-7 min-h-[72px] border border-[#6B5B52] rounded-full pl-6 pr-6 py-3 bg-black/20 backdrop-blur-sm">
                <div className="flex flex-col justify-center">
                  <span className="block text-[28px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#C79A7A] to-[#5C8CA6]">743</span>
                  <span className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.2em] mt-1">VIDEOS</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="block text-[28px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#C79A7A] to-[#5C8CA6]">39</span>
                  <span className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.2em] mt-1">BRAND</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="block text-[28px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#C79A7A] to-[#5C8CA6]">76</span>
                  <span className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.2em] mt-1">CLIENTS</span>
                </div>
                <button
                  type="button"
                  className="ml-2 shrink-0 bg-white text-black text-[11px] font-semibold uppercase px-[14px] py-2 rounded-md hover:opacity-90 transition-opacity"
                  aria-label="View portfolio"
                >
                  PORTFOLIO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Friends Across Borders — merged with Explore; no top rounding, only bottom */}
      <section className="bg-[#5A1F46] pt-12 md:pt-[48px] pb-16 md:pb-24 px-6 md:px-10 rounded-b-[48px]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl md:text-[24px] font-bold uppercase tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C79A7A] to-[#5C8CA6]">
              FRIENDS ACROSS BORDERS
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-[1.6] opacity-90">
            Our clients are the true reflection of our success, and their testimonials are the most genuine proof of the quality we deliver. We take pride in their trust and value their words as a testament to our commitment to always providing the best.
          </p>
        </div>
      </section>
    </main>
  );
}
