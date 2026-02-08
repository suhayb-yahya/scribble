"use client";

import React, { useEffect, useRef, useState } from "react";
import { Rubik } from "next/font/google";
import { useLocale } from "@/components/LocaleProvider";
import { getTranslations } from "@/lib/translations";

/** Physical margins for Explore content so they never flip in RTL */
function useExploreInsets() {
  const [left, setLeft] = useState("0.75rem");
  const [right, setRight] = useState("180px");
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setLeft(mq.matches ? "1.5rem" : "0.75rem");
      setRight(mq.matches ? "320px" : "180px");
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return { left, right };
}

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
  const locale = useLocale();
  const t = getTranslations(locale);
  const { left: insetLeft, right: insetRight } = useExploreInsets();
  const { videos, brands, clients } = { ...defaultCounters, ...props };
  const videosCount = useCountUp(videos, 1000);
  const brandsCount = useCountUp(brands, 1000);
  const clientsCount = useCountUp(clients, 1000);

  const isRtl = locale === "ar";

  return (
    <section
      className="relative z-0 min-h-screen pt-36 md:pt-44 pb-16 md:pb-24 pr-0 overflow-hidden rounded-t-[8vw] md:rounded-t-[6rem] bg-cover bg-[50%_28%] bg-no-repeat bg-[url('/assets/explore-bg.jpg')] shadow-none"
      aria-label="Explore"
      dir="ltr"
      style={{ paddingLeft: "2.5rem" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50" aria-hidden />
      <div className="relative z-10 flex flex-col min-h-[68vh] md:min-h-screen" dir="ltr">
        <div className="max-w-6xl mx-auto mr-0 w-full px-0" dir="ltr">
          <div className="flex flex-col md:flex-row md:justify-end" dir="ltr">
            <div className="w-full max-w-[90%] sm:max-w-[55rem] md:ml-auto">
              <div
                className={`mt-22 md:mt-24 ${isRtl ? "text-right" : "text-left"}`}
                dir={isRtl ? "rtl" : "ltr"}
                style={{ marginLeft: insetLeft, marginRight: insetRight }}
              >
              <h2
                  className={`
                    ${rubik.className}
                    uppercase
                    tracking-[0.04em]
                    mb-4
                    text-white
                    text-[48px]
                    md:text-[60px]
                    leading-none
                  `}
              >
                  {t.explore.headline}
              </h2>

              <p
              className={`${rubik.className} max-w-[85%] sm:max-w-[26rem] leading-[1.5] tracking-tight text-white`}
              style={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              }}
            >
              {t.explore.intro1}
            </p>
            <p
              className={`${rubik.className} max-w-[85%] sm:max-w-[26rem] leading-[1.5] tracking-tight mb-7 text-white`}
              style={{
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              }}
            >
                {t.explore.intro2}
            </p>
              </div>

        {/* Counters box: left edge aligns with text, extends to right edge */}
        <div
          className="flex w-full mt-20 md:mt-28 -mr-6 md:-mr-10 overflow-visible"
          style={{ marginLeft: insetLeft }}
        >
          <div className="flex-1 min-w-0 rounded-l-[5rem] md:rounded-l-[6rem] rounded-r-none border-t border-l border-b border-white pl-[5rem] md:pl-[6rem] pr-6 md:pr-10 pt-0 pb-2 md:pb-3 bg-black/20 backdrop-blur-sm flex items-center gap-0 justify-start">
            <div className="flex flex-1 justify-start">
                  <div className="flex items-center gap-4 md:gap-8 py-1 md:py-2">
                  {/* VIDEOS */}
                  <div className="flex flex-col items-center justify-center">
                      <div ref={videosCount.ref as React.RefObject<HTMLDivElement>}>
                          <span
                              className={`${rubik.className} block w-[7rem] md:w-[8.3rem] text-[3.5rem] md:text-[4.2rem] font-bold leading-none tabular-nums text-center`}
                              style={{
                                  background: 'linear-gradient(90deg, #D17F64 0%, #469098 97.1%)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  fontWeight: 700,
                                  fontVariantNumeric: 'tabular-nums',
                              }}
                          >
                            {videosCount.count}
                        </span>

                      </div>
                      <span
                          className="uppercase tracking-[0.2em] mt-2"
                          style={{
                              color: '#D57C61',
                              fontFamily: 'Rubik, sans-serif',
                              fontSize: '1.119rem',
                              fontWeight: 600,
                          }}
                      >
                          {t.explore.videos}
                      </span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                      <div ref={brandsCount.ref as React.RefObject<HTMLDivElement>}>
                          <span
                              className={`${rubik.className} block w-[7rem] md:w-[8rem] text-[3.5rem] md:text-[4.2rem] font-bold leading-none tabular-nums text-center`}
                              style={{
                                  background: 'linear-gradient(90deg, #D17F64 0%, #469098 97.1%)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  fontWeight: 700,
                                  fontVariantNumeric: 'tabular-nums',
                              }}
                          >
                            {brandsCount.count}
                          </span>
                      </div>
                      <span
                          className="uppercase tracking-[0.2em] mt-2"
                          style={{
                              color: '#D57C61',
                              fontFamily: 'Rubik, sans-serif',
                              fontSize: '1.119rem',
                              fontWeight: 600,
                          }}
                      >
                          {t.explore.brand}
                      </span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                      <div ref={clientsCount.ref as React.RefObject<HTMLDivElement>}>
                          <span
                              className={`${rubik.className} block w-[7rem] md:w-[8rem] text-[3.5rem] md:text-[4.2rem] font-bold leading-none tabular-nums text-center`}
                              style={{
                                  background: 'linear-gradient(90deg, #D17F64 0%, #469098 97.1%)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  fontWeight: 700,
                                  fontVariantNumeric: 'tabular-nums',
                              }}
                          >
                            {clientsCount.count}
                          </span>
                      </div>
                      <span
                          className="uppercase tracking-[0.2em] mt-2"
                          style={{
                              color: '#D57C61',
                              fontFamily: 'Rubik, sans-serif',
                              fontSize: '1.119rem',
                              fontWeight: 600,
                          }}
                      >
                        {t.explore.clients}
                      </span>
                  </div>
                  </div>
              </div>
            <button
              type="button"
              className="shrink-0 self-start flex items-center justify-center h-10 md:h-12 min-w-[7rem] md:min-w-[8rem] bg-white border-t border-r border-b border-white rounded-r-none rounded-b-xl hover:opacity-95 transition-opacity pl-5 pr-5 md:pl-6 md:pr-6 mr-20 md:mr-32"
              aria-label={t.explore.viewPortfolioAria}
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
                {t.explore.portfolioButton}
              </span>
            </button>
          </div>
        </div>
            </div>
        </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-[#4F1A39] to-transparent pointer-events-none" aria-hidden />

    </section>
  );
}
