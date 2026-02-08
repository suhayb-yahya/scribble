import { getTranslations, type Locale } from "@/lib/translations";

export default function HeroBanner({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  return (
    <section className="w-full min-w-0 overflow-hidden" aria-label="Hero">
      <img
        src="/assets/hero-banner.jpeg"
        alt={t.common.heroAlt}
        loading="eager"
        fetchPriority="high"
        className="w-full min-w-0 max-w-full h-auto object-cover object-center block"
      />
    </section>
  );
}
