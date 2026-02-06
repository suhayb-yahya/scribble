"use client";

import React, { useEffect, useRef, useState } from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "600", subsets: ["latin"] });

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref: elementRef };
}

export default function ExploreSection() {
  const videosCount = useCountUp(743, 2000);
  const brandsCount = useCountUp(39, 2000);
  const clientsCount = useCountUp(76, 2000);

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
          <div className="flex-[0_0_auto] w-full min-w-0 max-w-[95%] md:max-w-[48rem] h-auto min-h-0 rounded-l-[5rem] md:rounded-l-[6rem] rounded-r-none border-t border-l border-b border-white pl-[5rem] md:pl-[6rem] pr-0 pt-0 pb-4 md:pb-6 bg-black/20 backdrop-blur-sm flex items-start gap-0 relative overflow-hidden">
            <div className="flex items-stretch gap-6 md:gap-10 flex-1 min-h-full py-3 md:py-4 pl-0 pr-8 md:pr-10">
              <div className="flex flex-col justify-center items-center">
                <div ref={videosCount.ref as React.RefObject<HTMLDivElement>} >
                  <span
                    className={`${rubik.className} block w-[6rem] h-[3.6rem] md:w-[8rem] md:h-[4.2rem] shrink-0 text-[3.5rem] md:text-[4.2rem] font-bold leading-none`}
                    style={{
                      background: 'linear-gradient(90deg, #D17F64 0%, #469098 97.1%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'Rubik, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {videosCount.count}
                  </span>
                </div>
                <span
                  className="uppercase tracking-[0.2em] mt-1.5"
                  style={{
                    color: '#D57C61',
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '1.119rem',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',
                  }}
                >
                  VIDEOS
                </span>
              </div>
              <div className="flex flex-col justify-center gap-2 md:gap-3">
                <div className="flex items-center gap-4 md:gap-6 ">
                  <div ref={brandsCount.ref as React.RefObject<HTMLDivElement>}>
                    <span
                      className={`${rubik.className} block w-[6rem] h-[3.6rem] md:w-[7rem] md:h-[4.2rem] shrink-0 text-[3.5rem] md:text-[4.2rem] font-bold leading-none`}
                      style={{
                        background: 'linear-gradient(90deg, #D17F64 0%, #469098 97.1%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Rubik, sans-serif',
                        fontWeight: 700,
                      }}
                    >
                      {brandsCount.count}
                    </span>
                  </div>
                  <div ref={clientsCount.ref as React.RefObject<HTMLDivElement>}>
                    <span
                      className={`${rubik.className} block w-[6rem] h-[3.6rem] md:w-[7rem] md:h-[4.2rem] shrink-0 text-[3.5rem] md:text-[4.2rem] font-bold leading-none`}
                      style={{
                        background: 'linear-gradient(90deg, #D17F64 0%, #469098 97.1%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Rubik, sans-serif',
                        fontWeight: 700,
                      }}
                    >
                      {clientsCount.count}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <span
                    className="uppercase tracking-[0.2em]"
                    style={{
                      color: '#D57C61',
                      fontFamily: 'Rubik, sans-serif',
                      fontSize: '1.119rem',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                    }}
                  >
                    BRAND
                  </span>
                  <span
                    className="uppercase tracking-[0.2em]"
                    style={{
                      color: '#D57C61',
                      fontFamily: 'Rubik, sans-serif',
                      fontSize: '1.119rem',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                    }}
                  >
                    CLIENTS
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 self-start flex items-center justify-center h-10 md:h-12 min-w-[9rem] md:min-w-[11rem] bg-white border-t border-r border-b border-white rounded-r-none rounded-b-xl hover:opacity-95 transition-opacity pl-5 pr-5 md:pl-6 md:pr-6 mr-8 md:mr-10"
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
