"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useTranslations } from "next-intl";

const rubik = Rubik({ weight: "600", subsets: ["latin", "arabic"] });

export default function JobsHero() {
  const t = useTranslations("jobs");
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden bg-[#7B2553]"
      aria-label="Jobs at Scribble"
    >
      <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] overflow-hidden">
        <Image
          src="/assets/jobs-main.png"
          alt="Join our team — modern creative studio at Scribble"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          unoptimized
        />

        {/* Bottom-left text overlay */}
        <div
          className="absolute left-0 bottom-0 p-4 pointer-events-none ml-[8%] flex flex-col justify-center mb-40 md:mb-48 w-[40%] max-w-[600px]"
          aria-hidden
        >
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
    </section>
  );
}
