import type { Metadata } from "next";
import type { ServicesPart } from "@/components/sections/services/ServicesPartsSection";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesPartsSection from "@/components/sections/services/ServicesPartsSection";

export const metadata: Metadata = {
  title: "Services — Scribble",
  description: "Our services at Scribble",
};

// Replace or extend with your content and add more parts as needed
const servicesParts: ServicesPart[] = [
  {
    id: "motion-graphics",
    title: "MOTION GRAPHICS",
    description:
      "Motion graphics and animation turn complex ideas into simple, engaging visual stories. Through carefully crafted movement, design, and effects, we create impactful videos that capture attention, strengthen brand identity, and deliver messages clearly—whether for awareness, education, or marketing.",
    imageSrc: "/assets/services-motion-graphics.png",
    imageAlt: "Motion graphics and creative production",
    layout: "text-left",
    boxWidthPx: 746.66,
    boxMinHeightPx: 260,
  },
  {
    id: "graphic-design",
    title: "GRAPHIC DESIGN",
    description:
      "In our graphic design work, we go beyond visuals to create designs that communicate, inspire, and make an impact. By blending creativity with strategy, we craft meaningful designs that reflect each brand's identity—from logos and brand identities to social media, marketing, and print materials—ensuring every detail builds connection, trust, and a strong, lasting presence.",
    layout: "text-left",
    boxWidthPx: 1317,
    boxMinHeightPx: 260,
    fullWidth: true,
  },
  // Next section — two parts (same structure as first)
  {
    id: "production-photography",
    title: "PRODUCTION PHOTOGRAPHY",
    description:
      "The journey from idea to final visual content begins with planning and scripting, then moves through filming, directing, and editing using the latest cinematic tools. Every detail is crafted with precision to deliver professional, creative work that reflects the brand's identity and leaves a strong, lasting impression.",
    imageSrc: "/assets/services-production-photography.png",
    imageAlt: "Production photography and visual content creation",
    layout: "text-right",
    boxWidthPx: 748,
    boxMinHeightPx: 260,
  },
  {
    id: "social-media",
    title: "SOCIAL MEDIA",
    description:
      "Social media management is more than posting—it's a strategic process to build a strong, consistent brand presence. From audience analysis and content planning to creating engaging visuals, scheduling, and performance tracking, we focus on driving real interaction and meaningful connections with the audience.",
    imageSrc: "/assets/services-social-media.png",
    imageAlt: "Social media management and brand presence",
    layout: "text-left",
    boxWidthPx: 746.66,
    boxMinHeightPx: 260,
  },
  {
    id: "branding",
    title: "BRANDING",
    description:
      "At Scribble Production Company, we believe branding is the soul of a business. Through strategic thinking and creative design, we build complete brand identities—from voice and personality to visuals and guidelines—turning brands into memorable experiences that inspire trust and lasting recognition.",
    imageSrc: "/assets/services-branding.png",
    imageAlt: "Branding and brand identity",
    layout: "text-right",
    boxWidthPx: 746.66,
    boxMinHeightPx: 260,
  },
  {
    id: "sound-identity",
    title: "SOUND IDENTITY",
    description:
      "Sound adds an undeniable dimension of emotion to branding. Tuned to the right moments and touch points, sound is essential in creating atmosphere and strengthening recognition.",
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
      {/* More sections will be added here */}
    </main>
  );
}
