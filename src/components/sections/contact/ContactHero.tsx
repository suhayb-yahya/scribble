import Image from "next/image";
import { Rubik } from "next/font/google";
import { getTranslations, type Locale } from "@/lib/translations";

const rubik = Rubik({ weight: ["600", "700"], subsets: ["latin", "arabic"] });

export default function ContactHero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const { title1, title2, title3 } = t.contact.hero;
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden aspect-[3/2] min-h-[360px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px]"
      aria-label="Contact Scribble"
    >
      <Image
        src="/assets/contact-main.png"
        alt="Scribble studio — creative team and production environment"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        unoptimized
      />

      <div
        className="absolute inset-0 pl-[calc(5%+60px)] pr-4 pb-[200px] pointer-events-none flex flex-col justify-end text-left max-w-2xl rtl:text-right rtl:pl-4 rtl:pr-[calc(5%+60px)]"
        aria-hidden
      >
        <h1
          className={`${rubik.className} text-[#FFF] font-semibold uppercase tracking-tight`}
          style={{
            fontSize: "53.294px",
            lineHeight: "normal",
          }}
        >
          {title1}
          <br />
          {title2}
          <br />
          <span className="whitespace-nowrap">{title3}</span>
        </h1>
      </div>
    </section>
  );
}
