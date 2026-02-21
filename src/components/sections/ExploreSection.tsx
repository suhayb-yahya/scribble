"use client";

import React, { useEffect, useRef, useState } from "react";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: "600", subsets: ["latin", "arabic"] });

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

export type ExploreCountersProps = {
  videos?: number;
  brands?: number;
  clients?: number;
};

const defaultCounters = { videos: 743, brands: 39, clients: 76 };

export default function ExploreSection(props: ExploreCountersProps = {}) {
  const { videos, brands, clients } = { ...defaultCounters, ...props };
  const locale = useLocale();
  const t = useTranslations("explore");
  const isRtl = locale === "ar";
  const videosCount = useCountUp(videos, 1000);
  const brandsCount = useCountUp(brands, 1000);
  const clientsCount = useCountUp(clients, 1000);

  return (
    <div
      className="relative w-full min-w-0 overflow-hidden"
      style={{
        background: "linear-gradient(to right, #7B2553 0%, #7B2553 35%, #7B2553 65%, #7B2553 100%)",
      }}
    >
      <div className="content-nav-aligned max-w-full">
      <section
        className="relative w-screen left-1/2 -translate-x-1/2 min-w-0 overflow-hidden"
        aria-label="Explore"
      >
        {/* Image - full length, fixed aspect ratio for consistent layout across deployments */}
        <div className="relative w-full" style={{ aspectRatio: "1600/780" }}>
          <img
            src="/assets/explore-bg.jpeg"
            alt=""
            className="block w-full h-full object-cover object-center"
            aria-hidden
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col">
          <div className="flex-1" />
          {/* Text block: vertically centered, aligned to navbar edges */}
          <div className="flex-1 flex flex-col justify-center w-full -translate-y-6">
            <div className="content-nav-aligned w-full">
              <div className={`flex flex-col w-full md:max-w-[48rem] ${isRtl ? "md:mr-auto items-start" : "md:ml-auto items-end"}`} dir={isRtl ? "rtl" : undefined}>
              <div className="w-full max-w-[420px] text-start" dir={isRtl ? "rtl" : "ltr"}>
                <h2
                  className={`
                    ${rubik.className}
                    uppercase
                    tracking-[0.04em]
                    mb-4
                    text-white
                    text-[28px]
                    md:text-[28px]
                    leading-none
                  `}
                >
                  {t("title")}
                </h2>
                <p
                  className={`${rubik.className} leading-[1.5] text-white`}
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 'clamp(1rem, 2vw, 1rem)',
                  }}
                >
                  {t("paragraph1")}
                </p>
                <p
                  className={`${rubik.className} leading-[1.5] mb-0 md:mb-7 text-white`}
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 'clamp(1rem, 2vw, 1rem)',
                  }}
                >
                  {t("paragraph2")}
                </p>
              </div>
            </div>
            </div>
          </div>
          <div className="flex-1" />
        </div>
      </section>
      </div>

      {/* Counters box: absolute, sticks to right edge (dir="ltr" in RTL) */}
      <div
        className="absolute right-0 bottom-6 z-20 pl-4 md:pl-0"
        style={{ right: 0, marginRight: 0, paddingRight: 0 }}
        dir={isRtl ? "ltr" : undefined}
      >
        <div className="flex rounded-l-[5rem] md:rounded-l-[6rem] rounded-r-xl md:rounded-r-none border-t border-l border-b border-r border-white pl-[5rem] md:pl-[6rem] pr-6 md:pr-10 pt-0 pb-2 md:pb-3 bg-black/20 backdrop-blur-sm items-center gap-4 md:gap-8">
                  {/* VIDEOS */}
                  <div className="flex flex-col items-center justify-center">
                      <div ref={videosCount.ref as React.RefObject<HTMLDivElement>}>
                          <span
                              className={`${rubik.className} block w-[7rem] md:w-[8.3rem] text-[3.5rem] md:text-[4.2rem] font-bold leading-none tabular-nums text-center`}
                              style={{
                                  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 97.1%)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  fontWeight: 300,
                                  fontVariantNumeric: 'tabular-nums',
                              }}
                          >
                            {videosCount.count}
                        </span>

                      </div>
                      <span
                          className="uppercase tracking-[0.2em] mt-2"
                          style={{
                              color: '#FFFFFF',
                              fontFamily: 'Rubik, sans-serif',
                              fontSize: '1.0rem',
                              fontWeight: 300,
                          }}
                      >
                          {t("videos")}
                      </span>
                  </div>

                  {/* BRAND */}
                  <div className="flex flex-col items-center justify-center">
                      <div ref={brandsCount.ref as React.RefObject<HTMLDivElement>}>
                          <span
                              className={`${rubik.className} block w-[7rem] md:w-[8rem] text-[3.5rem] md:text-[4.2rem] leading-none tabular-nums text-center`}
                              style={{
                                background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 97.1%)',
                                WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  fontWeight: 300,
                                  fontVariantNumeric: 'tabular-nums',
                              }}
                          >
                            {brandsCount.count}
                          </span>
                      </div>
                      <span
                          className="uppercase tracking-[0.2em] mt-2"
                          style={{  
                              color: '#FFFFFF',
                              fontFamily: 'Rubik, sans-serif',
                              fontSize: '1.0rem',
                              fontWeight: 300,
                          }}
                      >
                          {t("brand")}
                      </span>
                  </div>

                  {/* CLIENTS */}
                  <div className="flex flex-col items-center justify-center">
                      <div ref={clientsCount.ref as React.RefObject<HTMLDivElement>}>
                          <span
                              className={`${rubik.className} block w-[7rem] md:w-[8rem] text-[3.5rem] md:text-[4.2rem]  leading-none tabular-nums text-center`}
                              style={{
                                  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 97.1%)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  fontWeight: 300,
                                  fontVariantNumeric: 'tabular-nums',
                              }}
                          >
                            {clientsCount.count}
                          </span>
                      </div>
                      <span
                          className="uppercase tracking-[0.2em] mt-2"
                          style={{
                              color: '#FFFFFF',
                              fontFamily: 'Rubik, sans-serif',
                              fontSize: '1.0rem',
                              fontWeight: 300,
                          }}
                      >
                        {t("clients")}
                      </span>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 self-start flex items-center justify-center h-10 md:h-12 min-w-[7rem] md:min-w-[8rem] bg-white border-t border-r border-b border-white rounded-r-xl rounded-b-xl hover:opacity-95 transition-opacity pl-5 pr-5 md:pl-6 md:pr-6"
                    aria-label={t("viewPortfolio")}
                  >
                    <span
                      className={`${rubik.className} uppercase whitespace-nowrap text-[#19140F]`}
                      style={{
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        fontSize: 'clamp(1rem, 1vw, 0.9rem)',
                      }}
                    >
                      {t("portfolio")}
                    </span>
                  </button>
        </div>
      </div>
    </div>
  );
}
