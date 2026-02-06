export default function HeroBanner() {
  return (
    <section className="w-full min-w-0 overflow-hidden" aria-label="Hero">
      <img
        src="/assets/hero-banner.jpg"
        alt="Scribble — modern workspace"
        loading="eager"
        fetchPriority="high"
        className="w-full min-w-0 max-w-full h-auto object-cover object-center block"
      />
    </section>
  );
}
