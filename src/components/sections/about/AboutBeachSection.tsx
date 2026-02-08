import { getTranslations, type Locale } from "@/lib/translations";

export default function AboutBeachSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  return (
    <section
      className="w-full min-w-0 overflow-hidden bg-white"
      aria-label="Our vibe"
    >
      <div className="w-full">
        <img
          src="/assets/about-beach.png"
          alt={t.about.beachAlt}
          className="block w-full h-auto"
          decoding="async"
        />
      </div>
    </section>
  );
}
