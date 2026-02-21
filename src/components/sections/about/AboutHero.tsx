"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: "600", subsets: ["latin", "arabic"] });

export default function AboutHero() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <div className="w-full bg-primary">
      <div className="content-nav-aligned max-w-full">
        <section
          className="relative w-full min-w-0 overflow-hidden"
          aria-label="About Scribble"
        >
          <div className="relative w-full">
            <Image
              src="/assets/about-main.png"
              alt="Scribble team — modern office, creative professionals at work"
              width={1920}
              height={1200}
              className="w-full h-auto block max-w-full"
              sizes="(max-width: 1920px) 100vw, 1920px"
              priority
              unoptimized
            />
            <div className={`absolute inset-x-0 bottom-0 mb-14 md:mb-20 flex pointer-events-none justify-start`}>
              <div className={`content-nav-aligned w-full flex flex-col justify-center items-start`}>
                {(() => {
                  const [title, paragraph] = t("heroText").split("\n\n");
                  return (
                    <>
                      <h1
                        className={`${rubik.className} mb-4 ${isRtl ? "text-right" : "text-left"}`}
                        style={{
                          color: "#FFF",
                          fontFamily: "Rubik",
                          fontSize: "53.294px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "normal",
                        }}
                        dir={isRtl ? "rtl" : undefined}
                      >
                        {title}
                      </h1>
                      <p
                        className={`${rubik.className} mt-4 max-w-[700px] text-start self-start`}
                        dir={isRtl ? "rtl" : undefined}
                        style={{
                          color: "#FFF",
                          fontFamily: "Rubik",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "normal",
                        }}
                      >
                        {paragraph}
                      </p>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
