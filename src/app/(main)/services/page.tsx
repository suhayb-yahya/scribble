import type { Metadata } from "next";
import { getLocale } from "@/app/actions/locale";
import type { ServicesPart } from "@/components/sections/services/ServicesPartsSection";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesPartsSection from "@/components/sections/services/ServicesPartsSection";
import { getTranslations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Services — Scribble",
  description: "Our services at Scribble",
};

function buildServicesParts(locale: "en" | "ar"): ServicesPart[] {
  const t = getTranslations(locale);
  const s = t.servicesPage;
  return [
    {
      id: "motion-graphics",
      title: s.motionGraphics.title,
      description: s.motionGraphics.description,
      imageSrc: "/assets/services-motion-graphics.png",
      imageAlt: s.motionGraphics.imageAlt,
      layout: "text-left",
      boxWidthPx: 746.66,
      boxMinHeightPx: 260,
    },
    {
      id: "graphic-design",
      title: s.graphicDesign.title,
      description: s.graphicDesign.description,
      layout: "text-left",
      boxWidthPx: 1317,
      boxMinHeightPx: 260,
      fullWidth: true,
    },
    {
      id: "production-photography",
      title: s.productionPhotography.title,
      description: s.productionPhotography.description,
      imageSrc: "/assets/services-production-photography.png",
      imageAlt: s.productionPhotography.imageAlt,
      layout: "text-right",
      boxWidthPx: 748,
      boxMinHeightPx: 260,
    },
    {
      id: "social-media",
      title: s.socialMedia.title,
      description: s.socialMedia.description,
      imageSrc: "/assets/services-social-media.png",
      imageAlt: s.socialMedia.imageAlt,
      layout: "text-left",
      boxWidthPx: 746.66,
      boxMinHeightPx: 260,
    },
    {
      id: "branding",
      title: s.branding.title,
      description: s.branding.description,
      imageSrc: "/assets/services-branding.png",
      imageAlt: s.branding.imageAlt,
      layout: "text-right",
      boxWidthPx: 746.66,
      boxMinHeightPx: 260,
    },
    {
      id: "sound-identity",
      title: s.soundIdentity.title,
      description: s.soundIdentity.description,
      imageSrc: "/assets/services-sound-identity.png",
      imageAlt: s.soundIdentity.imageAlt,
      layout: "text-left",
      boxWidthPx: 746.66,
      boxMinHeightPx: 260,
    },
  ];
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const servicesParts = buildServicesParts(locale);
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden min-h-screen">
      <ServicesHero locale={locale} />
      <ServicesPartsSection parts={servicesParts} />
    </main>
  );
}
