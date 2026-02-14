"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useTranslations } from "next-intl";

const rubik = Rubik({ weight: "600", subsets: ["latin", "arabic"] });

export default function AboutHero() {
  const t = useTranslations("about");
  return (
    <div className="w-full bg-primary">
      <div className="w-full max-w-[1920px] mx-auto">
        <section
          className="relative w-full min-w-0 overflow-hidden"
          aria-label="About Scribble"
        >
          <div className="relative w-full max-w-[1920px] mx-auto">
            <Image
              src="/assets/about-main.png"
              alt="Scribble team — modern office, creative professionals at work"
              width={1920}
              height={1200}
              className="w-full h-auto block max-w-[1920px]"
              sizes="(max-width: 1920px) 100vw, 1920px"
              priority
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 mb-14 md:mb-20 px-6 md:px-10 flex justify-center pointer-events-none">
              <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center">
                <h1
                  className={`${rubik.className} text-white uppercase leading-tight`}
                  style={{
                    fontSize: "clamp(28px, 6vw, 48px)",
                    fontWeight: 500,
                    lineHeight: "1.2",
                  }}
                >
                  {t("title")}
                </h1>
                <p
                  className={`${rubik.className} text-white mt-4 leading-tight`}
                  style={{
                    fontSize: "24px",
                    fontWeight: 300,
                    lineHeight: "normal",
                  }}
                >
                  {t("intro")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
