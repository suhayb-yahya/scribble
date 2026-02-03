import {
  HeroBanner,
  ServicesSection,
  AboutSection,
  StoryMissionVision,
  ExploreSection,
  FriendsAcrossBorders,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden">
      <HeroBanner />
      <ServicesSection />
      <AboutSection />
      <StoryMissionVision />
      <ExploreSection />
      <FriendsAcrossBorders />
    </main>
  );
}
