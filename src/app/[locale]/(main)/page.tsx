import {
  HeroBanner,
  HeroToServicesTransition,
  ServicesSection,
  StoryMissionVision,
  ExploreSection,
  ClientsSection,
  FriendsAcrossBorders,
} from "@/components/sections";
import { getExploreCounters } from "@/lib/explore-counters";

export default async function Home() {
  const exploreCounters = await getExploreCounters();
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden">
      <HeroBanner />

      <ServicesSection />
      <StoryMissionVision />
      <ExploreSection
        videos={exploreCounters.videos}
        brands={exploreCounters.brands}
        clients={exploreCounters.clients}
      />
      <FriendsAcrossBorders />
      <ClientsSection />
    </main>
  );
}
