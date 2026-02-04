import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "600", subsets: ["latin"] });

export default function ExploreSection() {
  return (
    <section
      className="relative z-0 min-h-screen pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-10 overflow-hidden rounded-t-[8vw] md:rounded-t-[6rem] bg-cover bg-[50%_28%] bg-no-repeat bg-[url('/assets/explore-bg.png')] shadow-none"
      aria-label="Explore"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#5A1F46] to-transparent pointer-events-none" aria-hidden />
      <div className="relative z-10 flex flex-col min-h-[68vh] md:min-h-[72vh]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-end items-center md:items-start w-full px-0">
          <div className="w-full max-w-[90%] sm:max-w-[32rem] text-left mt-24 md:mt-44">
            <h2
              className={`${rubik.className} uppercase tracking-[0.04em] mb-4 text-white`}
              style={{
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                fontSize: 'clamp(2rem, 5vw, 3.33rem)',
              }}
            >
              EXPLORE
            </h2>
            <p
              className={`${rubik.className} max-w-[85%] sm:max-w-[26rem] mb-10 text-white`}
              style={{
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              }}
            >
              At Scribble Production Company, ordinary is never enough. We constantly seek creativity that stands out, turning ideas into powerful visuals and sound that leave a lasting impression. With passion and expertise, we craft work that elevates your brand and speaks to your audience in the best way possible.
            </p>
          </div>
        </div>

        {/* Counters box: bigger, shifted below */}
        <div className="max-w-6xl mx-auto w-full flex mt-14 md:mt-20 overflow-visible -mr-6 md:-mr-10">
          <div className="flex-1 min-w-0" aria-hidden />
          <div className="flex-[0_0_auto] w-full min-w-0 max-w-[95%] md:max-w-[48rem] h-auto min-h-0 rounded-l-[5rem] md:rounded-l-[6rem] rounded-r-none border-t border-l border-b border-white pl-8 md:pl-10 pr-0 pt-0 pb-4 md:pb-6 bg-black/20 backdrop-blur-sm flex items-start gap-0 relative overflow-hidden">
            <div className="flex items-stretch gap-6 md:gap-10 flex-1 min-h-full py-3 md:py-4 pl-0 pr-8 md:pr-10">
              <div className="flex flex-col justify-center">
                <span className="block w-[6rem] h-[3.6rem] md:w-[7rem] md:h-[4.2rem] shrink-0" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 50" fill="none" className="w-full h-full">
                    <path d="M7.96899 48.5068C7.55299 48.5068 7.20699 48.3579 6.92999 48.0569C6.65299 47.7569 6.51398 47.3989 6.51398 46.9829C6.51398 46.7979 6.55895 46.5909 6.65295 46.3589L23.006 9.28784H1.73297C1.27097 9.28784 0.866958 9.12598 0.519958 8.80298C0.173959 8.47998 0 8.087 0 7.625V1.73389C0 1.22589 0.172958 0.810816 0.519958 0.486816C0.865958 0.164816 1.26997 0.00195312 1.73297 0.00195312H33.123C33.677 0.00195312 34.104 0.164816 34.405 0.486816C34.705 0.810816 34.855 1.22589 34.855 1.73389V6.93091C34.855 7.62391 34.7969 8.18993 34.6819 8.62793C34.5659 9.06793 34.393 9.51898 34.162 9.97998L17.878 46.844C17.739 47.121 17.497 47.4678 17.15 47.8828C16.804 48.2988 16.26 48.5068 15.522 48.5068H7.96899Z" fill="url(#paint0_linear_explore_743)"/>
                    <path d="M61.671 48.5068C61.209 48.5068 60.816 48.346 60.493 48.022C60.169 47.7 60.008 47.2839 60.008 46.7749V38.46H38.18C37.718 38.46 37.325 38.2988 37.002 37.9758C36.678 37.6528 36.517 37.2368 36.517 36.7278V31.116C36.517 30.793 36.586 30.4469 36.725 30.0769C36.864 29.7069 37.048 29.3609 37.279 29.0369L57.582 1.18188C58.182 0.396885 59.037 0.00292969 60.146 0.00292969H68.946C69.407 0.00292969 69.8 0.165793 70.124 0.487793C70.447 0.811793 70.6089 1.22686 70.6089 1.73486V29.2449H76.776C77.33 29.2449 77.757 29.407 78.058 29.73C78.358 30.053 78.508 30.447 78.508 30.908V36.7278C78.508 37.2368 78.346 37.6528 78.0229 37.9758C77.6989 38.2988 77.306 38.46 76.845 38.46H70.6089V46.7749C70.6089 47.2839 70.447 47.7 70.124 48.022C69.8 48.346 69.407 48.5068 68.946 48.5068H61.671ZM47.258 29.5898H60.216V11.365L47.258 29.5898Z" fill="url(#paint1_linear_explore_743)"/>
                    <path d="M102.762 49.2C99.343 49.2 96.41 48.7839 93.962 47.9519C91.513 47.1209 89.503 46.0579 87.933 44.7639C86.362 43.4719 85.184 42.0509 84.399 40.5029C83.613 38.9549 83.197 37.466 83.152 36.033C83.152 35.617 83.291 35.2699 83.568 34.9929C83.845 34.7169 84.192 34.5779 84.607 34.5779H92.229C92.737 34.5779 93.153 34.6819 93.476 34.8899C93.799 35.0979 94.1 35.4559 94.377 35.9639C94.746 37.0269 95.347 37.8809 96.179 38.5269C97.011 39.1739 97.991 39.6249 99.124 39.8789C100.255 40.1329 101.468 40.2598 102.762 40.2598C105.349 40.2598 107.381 39.6598 108.86 38.4578C110.338 37.2578 111.077 35.5709 111.077 33.3989C111.077 31.1819 110.384 29.5879 108.998 28.6179C107.612 27.6479 105.648 27.1628 103.108 27.1628H95.694C95.232 27.1628 94.839 27.002 94.516 26.679C94.192 26.356 94.031 25.963 94.031 25.5V22.105C94.031 21.55 94.135 21.0888 94.343 20.7178C94.551 20.3488 94.77 20.072 95.001 19.887L106.92 8.93896H87.379C86.87 8.93896 86.454 8.77786 86.132 8.45386C85.808 8.13186 85.647 7.73788 85.647 7.27588V1.73193C85.647 1.22393 85.808 0.808863 86.132 0.484863C86.455 0.162863 86.87 0 87.379 0H118.145C118.653 0 119.069 0.162863 119.392 0.484863C119.715 0.808863 119.877 1.22393 119.877 1.73193V6.72095C119.877 7.22995 119.784 7.65693 119.6 8.00293C119.415 8.34993 119.184 8.6148 118.907 8.7998L107.612 19.9558L108.305 20.0249C111.03 20.3019 113.455 20.9719 115.581 22.0349C117.705 23.0969 119.38 24.61 120.605 26.573C121.828 28.537 122.441 31.02 122.441 34.022C122.441 37.164 121.586 39.8669 119.877 42.1289C118.167 44.3929 115.834 46.1369 112.878 47.3599C109.921 48.5839 106.548 49.1968 102.761 49.1968L102.762 49.2Z" fill="url(#paint2_linear_explore_743)"/>
                    <defs>
                      <linearGradient id="paint0_linear_explore_743" x1="-2.566" y1="35.2749" x2="153.112" y2="37.4079" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D17F64"/>
                        <stop offset="0.971" stopColor="#469098"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_explore_743" x1="-2.56606" y1="35.2749" x2="153.112" y2="37.4079" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D17F64"/>
                        <stop offset="0.971" stopColor="#469098"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_explore_743" x1="-2.56602" y1="35.275" x2="153.112" y2="37.408" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D17F64"/>
                        <stop offset="0.971" stopColor="#469098"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-sm md:text-base font-semibold text-white uppercase tracking-[0.2em] mt-1.5">VIDEOS</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="block w-[6rem] h-[3.6rem] md:w-[7rem] md:h-[4.2rem] shrink-0" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 50" fill="none" className="w-full h-full">
                    <text x="0" y="48" fill="url(#paint_linear_explore_39)" fontFamily="Rubik, sans-serif" fontSize="70" fontWeight="700">39</text>
                    <defs>
                      <linearGradient id="paint_linear_explore_39" x1="-2.566" y1="35.27" x2="153.112" y2="37.41" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D17F64"/>
                        <stop offset="0.971" stopColor="#469098"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-sm md:text-base font-semibold text-white uppercase tracking-[0.2em] mt-1.5">BRAND</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="block w-[6rem] h-[3.6rem] md:w-[7rem] md:h-[4.2rem] shrink-0" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 50" fill="none" className="w-full h-full">
                    <text x="0" y="48" fill="url(#paint_linear_explore_76)" fontFamily="Rubik, sans-serif" fontSize="70" fontWeight="700">76</text>
                    <defs>
                      <linearGradient id="paint_linear_explore_76" x1="-2.566" y1="35.27" x2="153.112" y2="37.41" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D17F64"/>
                        <stop offset="0.971" stopColor="#469098"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-sm md:text-base font-semibold text-white uppercase tracking-[0.2em] mt-1.5">CLIENTS</span>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 self-start flex items-center justify-center h-10 md:h-12 min-w-[9rem] md:min-w-[11rem] bg-white border-t border-r border-b border-white rounded-r-none hover:opacity-95 transition-opacity pl-5 pr-5 md:pl-6 md:pr-6 mr-8 md:mr-10"
              aria-label="View portfolio"
            >
              <span
                className={`${rubik.className} uppercase whitespace-nowrap text-[#19140F]`}
                style={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                  fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
                }}
              >
                PORTFOLIO
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
