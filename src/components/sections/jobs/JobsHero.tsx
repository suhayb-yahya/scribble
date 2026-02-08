import Image from "next/image";
import { Rubik } from "next/font/google";
import { getTranslations, type Locale } from "@/lib/translations";

const rubik = Rubik({ weight: "600", subsets: ["latin", "arabic"] });

export default function JobsHero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden"
      aria-label="Jobs at Scribble"
    >
      <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] overflow-hidden rounded-b-[8vw] md:rounded-b-[6rem]">
        <Image
          src="/assets/jobs-main.jpg"
          alt={t.common.jobsHeroAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          unoptimized
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #404040 0%, rgba(64, 64, 64, 0.5) 50%, transparent 100%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Bottom-left text overlay */}
        <div
          className="absolute left-0 bottom-0 p-4 pointer-events-none ml-[14%] flex flex-col justify-center mb-40 md:mb-48 w-[40%] max-w-[600px]"
          aria-hidden
        >
          <h1
            className={`${rubik.className} text-white uppercase leading-tight`}
            style={{
              fontSize: "clamp(28px, 6vw, 53.294px)",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {t.jobs.hero.title}
          </h1>
          <p
            className={`${rubik.className} text-white mt-4 leading-tight`}
            style={{
              fontSize: "clamp(16px, 2.5vw, 24px)",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {t.jobs.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
