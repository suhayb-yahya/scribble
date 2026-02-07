/**
 * Gradient strip between the hero image (#871B55) and ServicesSection (primary #7B2553).
 * Merges the two so there’s no hard edge.
 */
export default function HeroToServicesTransition() {
  return (
    <section
      className="w-full min-w-0 h-16 md:h-24"
      style={{
        background: "linear-gradient(180deg, #871B55 0%, #7E2240 50%, #7B2553 100%)",
      }}
      aria-hidden
    />
  );
}
