"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin", "arabic"] });

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
            <div className={`relative md:absolute md:inset-x-0 md:bottom-0 pt-6 px-0 md:pt-0 md:mb-8 md:mb-12 flex pointer-events-none justify-center md:justify-start bg-primary md:bg-transparent`} dir={isRtl ? "rtl" : undefined}>
              <div className={`content-nav-aligned w-full flex flex-col justify-center items-center md:items-start text-center ${isRtl ? "md:text-right" : "md:text-left"}`} dir={isRtl ? "rtl" : undefined}>
                {(() => {
                  const [title, paragraph] = t("heroText").split("\n\n");
                  return (
                    <>
                      <h1
                        className={`${rubik.className} text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10 max-w-4xl leading-tight text-white ${isRtl ? "md:text-right" : "md:text-left"}`}
                        dir={isRtl ? "rtl" : undefined}
                      >
                        {title}
                      </h1>
                      <p
                        className={`${rubik.className} font-normal text-xl md:text-3xl text-white max-w-[800px] mb-16 leading-tight ${isRtl ? "md:text-right md:self-start" : "md:text-left md:self-start"}`}
                        dir={isRtl ? "rtl" : undefined}
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
