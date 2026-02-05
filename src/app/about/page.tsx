import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutTabsSection from "@/components/sections/about/AboutTabsSection";
import AboutBeachSection from "@/components/sections/about/AboutBeachSection";
import AboutPhilosophySection from "@/components/sections/about/AboutPhilosophySection";
import AboutIllustrationSection from "@/components/sections/about/AboutIllustrationSection";

export const metadata: Metadata = {
  title: "About — Scribble",
  description: "Our story, mission, and vision at Scribble Media Production",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden min-h-screen">
      <AboutHero />
      <AboutTabsSection />
      <AboutBeachSection />
      <AboutPhilosophySection />
      <AboutIllustrationSection />
    </main>
  );
}
