export default function ExploreSection() {
  return (
    <section
      className="relative z-0 min-h-screen pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10 overflow-hidden rounded-t-[100px] bg-cover bg-[50%_28%] bg-no-repeat bg-[url('/assets/explore-bg.png')] shadow-none"
      aria-label="Explore"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#5A1F46] to-transparent pointer-events-none" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-end items-center md:items-start text-right min-h-[68vh] md:min-h-[72vh]">
        <div className="w-full max-w-[520px]">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold uppercase text-white tracking-[0.04em] mb-4">
            EXPLORE
          </h2>
          <p className="text-sm md:text-[15px] text-[#EDEDED] leading-[1.6] max-w-[420px] ml-auto mb-10">
            At Scribble Production Company, ordinary is never enough. We constantly seek creativity that stands out, turning ideas into powerful visuals and sound that leave a lasting impression. With passion and expertise, we craft work that elevates your brand and speaks to your audience in the best way possible.
          </p>

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
  );
}
