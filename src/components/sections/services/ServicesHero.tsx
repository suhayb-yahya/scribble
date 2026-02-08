import Image from "next/image";
import { getTranslations, type Locale } from "@/lib/translations";

export default function ServicesHero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden z-0"
      aria-label="Services"
    >
      <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px]">
        <Image
          src="/assets/services-hero.jpg"
          alt={t.common.servicesHeroAlt}
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
          priority
          unoptimized
        />
        {/* Bottom gradient: fade into primary so content container merges smoothly */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #7B2553 0%, rgba(123, 37, 83, 0.85) 20%, rgba(85, 58, 74, 0.5) 50%, transparent 100%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
