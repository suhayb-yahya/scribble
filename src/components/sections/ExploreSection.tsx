"use client";

import React, { useEffect, useRef, useState } from "react";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: "600", subsets: ["latin", "arabic"] });

function useCountUp(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true,
  triggerRef?: React.RefObject<HTMLElement | null>
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLDivElement>(null);
  const observedRef = triggerRef ?? elementRef;

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

    if (observedRef.current) {
      observer.observe(observedRef.current);
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
  const countTriggerRef = useRef<HTMLDivElement>(null);
  const videosCount = useCountUp(videos, 1000, true, countTriggerRef);
  const brandsCount = useCountUp(brands, 1000, true, countTriggerRef);
  const clientsCount = useCountUp(clients, 1000, true, countTriggerRef);

  const textBlock = (
    <>
      <h2 className={`${rubik.className} uppercase tracking-[0.04em] mb-6 text-white text-[28px] leading-none`}>
        {t("title")}
      </h2>
      <p
        className={`${rubik.className} leading-[1.5] text-white`}
        style={{ fontStyle: "normal", fontWeight: 600, fontSize: "clamp(1rem, 2vw, 1rem)" }}
      >
        {t("paragraph1")}
      </p>
      <p
        className={`${rubik.className} leading-[1.5] mb-0 md:mb-7 text-white`}
        style={{ fontStyle: "normal", fontWeight: 600, fontSize: "clamp(1rem, 2vw, 1rem)" }}
      >
        {t("paragraph2")}
      </p>
    </>
  );

  return (
    <div
      className="relative w-full min-w-0 overflow-hidden"
      style={{
        background: "linear-gradient(to right, #7B2553 0%, #7B2553 35%, #7B2553 65%, #7B2553 100%)",
      }}
      aria-label="Explore"
    >
      <div className="w-full flex justify-center">
        <section className="relative flex justify-center min-w-0 overflow-hidden w-full">
          {/* Image - full width section, image at natural size centered */}
          <div ref={countTriggerRef} className="relative w-fit max-w-full">
            <img
              src="/assets/explore-bg.jpeg"
              alt=""
              className="block w-auto max-w-full h-auto mx-auto"
              aria-hidden
              decoding="async"
              fetchPriority="high"
            />
            {/* Desktop: counters at image's right edge */}
            <div
              className="hidden md:flex absolute right-0 bottom-6 justify-end z-20"
              dir={isRtl ? "ltr" : undefined}
            >
              <div className="flex flex-nowrap justify-end rounded-l-[6rem] rounded-r-none border border-white p-4 pl-6 pr-0 pt-0 pb-3 bg-black/20 backdrop-blur-sm items-center" style={{ width: '700px', height: '128px' }}>
                <div className="flex items-center gap-[70px] mr-8">
                {/* VIDEOS */}
                <div className="flex flex-col items-center justify-center">
                  <div ref={videosCount.ref as React.RefObject<HTMLDivElement>} style={{ marginTop: '25px' }}>
                    <span
                      className={`${rubik.className} block w-[4rem] md:w-[6rem] text-3xl md:text-[50px] font-bold leading-none tabular-nums text-center`}
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
                      marginBottom: '25px',
                    }}
                  >
                    {t("videos")}
                  </span>
                </div>

                {/* BRAND */}
                <div className="flex flex-col items-center justify-center">
                  <div ref={brandsCount.ref as React.RefObject<HTMLDivElement>} style={{ marginTop: '25px' }}>
                    <span
                      className={`${rubik.className} block w-[4rem] md:w-[6rem] text-3xl md:text-[50px] leading-none tabular-nums text-center`}
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
                      marginBottom: '25px',
                    }}
                  >
                    {t("brand")}
                  </span>
                </div>

                {/* CLIENTS */}
                <div className="flex flex-col items-center justify-center">
                  <div ref={clientsCount.ref as React.RefObject<HTMLDivElement>} style={{ marginTop: '25px' }}>
                    <span
                      className={`${rubik.className} block w-[4rem] md:w-[6rem] text-3xl md:text-[50px] leading-none tabular-nums text-center`}
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
                      marginBottom: '25px',
                    }}
                  >
                    {t("clients")}
                  </span>
                </div>
                </div>
                <button
                  type="button"
                  className="shrink-0 self-start flex items-center justify-center h-10 md:h-12 min-w-[7rem] md:min-w-[8rem] bg-white border-t border-r border-b border-white rounded-b-xl hover:opacity-95 transition-opacity pl-5 pr-5 md:pl-6 md:pr-6 ml-4 mr-4"
                  aria-label={t("viewPortfolio")}
                >
                  <span
                    className={`${rubik.className} uppercase whitespace-nowrap text-[#19140F]`}
                    style={{ fontStyle: "normal", fontWeight: 600, lineHeight: "normal", fontSize: "0.9rem" }}
                  >
                    {t("portfolio")}
                  </span>
                </button>
              </div>
            </div>
            {/* Desktop: text overlay on image */}
            <div className="hidden md:flex absolute inset-0 z-10 flex-col pointer-events-none">
              <div className="flex-1" />
              <div className="flex-1 flex flex-col justify-center w-full -translate-y-6">
                <div className="content-nav-aligned w-full">
                  <div className={`flex flex-col w-full md:max-w-[48rem] ${isRtl ? "md:mr-auto items-start" : "md:ml-auto items-end"}`} dir={isRtl ? "rtl" : undefined}>
                    <div className="w-full max-w-[420px] text-start" dir={isRtl ? "rtl" : "ltr"}>
                      {textBlock}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1" />
            </div>
          </div>
        </section>
      </div>

      {/* Mobile: text below image */}
      <div className="content-nav-aligned w-full py-8 md:hidden flex flex-col items-center">
        <div className={`flex flex-col w-full max-w-[420px] mx-auto ${isRtl ? "items-end text-right" : "items-center text-center"}`} dir={isRtl ? "rtl" : "ltr"}>
          {textBlock}
        </div>
      </div>

      {/* Counters - mobile only: in flow centered */}
      <div
        className="content-nav-aligned w-full flex justify-center pb-6 md:hidden"
        dir={isRtl ? "ltr" : undefined}
      >
        <div className="flex flex-wrap justify-center rounded-2xl border border-white p-4 bg-black/20 backdrop-blur-sm items-center gap-4 md:gap-8">
                  {/* VIDEOS */}
                  <div className="flex flex-col items-center justify-center">
                      <div ref={videosCount.ref as React.RefObject<HTMLDivElement>} style={{ marginTop: '25px' }}>
                          <span
                              className={`${rubik.className} block w-[4rem] md:w-[6rem] text-3xl md:text-[50px] font-bold leading-none tabular-nums text-center`}
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
                              marginBottom: '25px',
                          }}
                      >
                          {t("videos")}
                      </span>
                  </div>

                  {/* BRAND */}
                  <div className="flex flex-col items-center justify-center">
                      <div ref={brandsCount.ref as React.RefObject<HTMLDivElement>} style={{ marginTop: '25px' }}>
                          <span
                              className={`${rubik.className} block w-[4rem] md:w-[6rem] text-3xl md:text-[50px] leading-none tabular-nums text-center`}
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
                              marginBottom: '25px',
                          }}
                      >
                          {t("brand")}
                      </span>
                  </div>

                  {/* CLIENTS */}
                  <div className="flex flex-col items-center justify-center">
                      <div ref={clientsCount.ref as React.RefObject<HTMLDivElement>} style={{ marginTop: '25px' }}>
                          <span
                              className={`${rubik.className} block w-[4rem] md:w-[6rem] text-3xl md:text-[50px] leading-none tabular-nums text-center`}
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
                              marginBottom: '25px',
                          }}
                      >
                        {t("clients")}
                      </span>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 self-start flex items-center justify-center h-10 md:h-12 min-w-[7rem] md:min-w-[8rem] bg-white border-t border-r border-b border-white rounded-b-xl hover:opacity-95 transition-opacity pl-5 pr-5 md:pl-6 md:pr-6"
                    aria-label={t("viewPortfolio")}
                  >
                    <span
                      className={`${rubik.className} uppercase whitespace-nowrap text-[#19140F]`}
                      style={{ fontStyle: "normal", fontWeight: 600, lineHeight: "normal", fontSize: "0.9rem" }}
                    >
                      {t("portfolio")}
                    </span>
                  </button>
        </div>
      </div>
    </div>
  );
}
