export default function HeroBanner() {
  return (
    <section className="w-full min-w-0 overflow-hidden bg-primary flex justify-center" aria-label="Hero">
      <div className="content-nav-aligned max-w-full">
        <img
          src="/assets/hero-banner.png"
          alt="Scribble — modern workspace"
          loading="eager"
          fetchPriority="high"
          className="w-auto max-w-full h-auto block mx-auto"
        />
      </div>
    </section>
  );
}
