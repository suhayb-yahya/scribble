import { Rubik } from "next/font/google";
import { getTranslations, type Locale } from "@/lib/translations";

const rubik = Rubik({ weight: ["700"], subsets: ["latin", "arabic"] });

export default function AboutIllustrationSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const textGradient =
    "linear-gradient(to right, #c08060 0%, #a07070 40%, #6090a0 70%, #60b0b0 100%)";
  const { taglineLine1, taglineLine2, alt } = t.about.illustration;

  return (
    <section
      className="w-full min-w-0 py-12 md:py-16 flex flex-col justify-center items-center gap-8 md:gap-10"
      style={{ backgroundColor: "#7B2553" }}
      aria-label="Different — nothing pleases us except the strange"
    >
      <div className="flex justify-center">
        <img
          src="/assets/about-chair-illustration.png"
          alt={alt}
          className="block max-w-full w-auto h-auto max-h-[280px] md:max-h-[360px]"
          decoding="async"
        />
      </div>

      <div
        className={`${rubik.className} flex flex-col justify-center items-center uppercase font-bold max-w-full mt-10 md:mt-14`}
        style={{
          width: "50%",
          minWidth: "min(578px, 100%)",
          fontSize: "clamp(32px, 6vw, 56px)",
          letterSpacing: "0.02em",
          lineHeight: 1.2,
          background: textGradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <p
          className="flex flex-wrap justify-center items-center mb-4"
          style={{ gap: "0.4em" }}
        >
          {taglineLine1.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
        <p
          className="flex flex-wrap justify-center items-center"
          style={{ gap: "0.4em" }}
        >
          {taglineLine2.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
