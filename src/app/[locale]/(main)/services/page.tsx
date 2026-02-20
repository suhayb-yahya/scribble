import type { Metadata } from "next";
import type { ServicesPart } from "@/components/sections/services/ServicesPartsSection";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesPartsSection from "@/components/sections/services/ServicesPartsSection";

export const metadata: Metadata = {
  title: "Services — Scribble",
  description: "Our services at Scribble",
};

const servicesParts: ServicesPart[] = [
  {
    id: "motion-graphics",
    translationKey: "motionGraphics",
    imageSrc: "/assets/services-motion-graphics.png",
    imageAlt: "Motion graphics and creative production",
    layout: "text-left",
    boxWidthPx: 746.66,
    boxMinHeightPx: 260,
  },
  {
    id: "graphic-design",
    translationKey: "graphicDesign",
    layout: "text-left",
    boxWidthPx: 1317,
    boxMinHeightPx: 260,
    fullWidth: true,
  },
  {
    id: "production-photography",
    translationKey: "productionPhotography",
    imageSrc: "/assets/services-production-photography.png",
    imageAlt: "Production photography and visual content creation",
    layout: "text-right",
    boxWidthPx: 748,
    boxMinHeightPx: 260,
  },
  {
    id: "social-media",
    translationKey: "socialMedia",
    imageSrc: "/assets/services-social-media.png",
    imageAlt: "Social media management and brand presence",
    layout: "text-left",
    boxWidthPx: 746.66,
    boxMinHeightPx: 260,
  },
  {
    id: "branding",
    translationKey: "branding",
    imageSrc: "/assets/services-branding.png",
    imageAlt: "Branding and brand identity",
    layout: "text-right",
    boxWidthPx: 746.66,
    boxMinHeightPx: 260,
  },
  {
    id: "sound-identity",
    translationKey: "soundIdentity",
    imageSrc: "/assets/services-sound-identity.png",
    imageAlt: "Sound identity and sonic branding",
    layout: "text-left",
    boxWidthPx: 746.66,
    boxMinHeightPx: 260,
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden min-h-screen">
      <ServicesHero />
      <ServicesPartsSection parts={servicesParts} />
    </main>
  );
}
