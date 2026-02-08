import {
  HeroBanner,
  ServicesSection,
  StoryMissionVision,
  ExploreSection,
  ClientsSection,
  FriendsAcrossBorders,
} from "@/components/sections";
import { getLocale } from "@/app/actions/locale";
import { getExploreCounters } from "@/lib/explore-counters";

export default async function Home() {
  const [locale, exploreCounters] = await Promise.all([
    getLocale(),
    getExploreCounters(),
  ]);
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden">
      <HeroBanner locale={locale} />

      <ServicesSection />
      <StoryMissionVision locale={locale} />
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
