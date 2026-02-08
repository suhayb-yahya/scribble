import Image from "next/image";
import { Rubik } from "next/font/google";
import { getTranslations, type Locale } from "@/lib/translations";

const rubik = Rubik({ weight: "600", subsets: ["latin", "arabic"] });

export default function AboutHero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden"
      aria-label="About Scribble"
    >
      <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px]">
        <Image
          src="/assets/about-main.jpg"
          alt={t.common.aboutTeamAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={95}
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

        {/* Bottom-left text overlay — aligned with content sections (px-6 md:px-10, max-w-6xl) */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none mb-14 md:mb-20 px-6 md:px-10 flex justify-center"
          aria-hidden
        >
          <div className="w-full max-w-6xl flex flex-col justify-center">
            <h1
              className={`${rubik.className} text-white uppercase leading-tight`}
              style={{
                fontSize: "clamp(28px, 6vw, 53.294px)",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              {t.about.hero.title}
            </h1>
            <p
              className={`${rubik.className} text-white mt-4 leading-tight`}
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              {t.about.hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
