export default function HeroBanner() {
  return (
    <section className="w-full min-w-0 overflow-hidden bg-primary flex justify-center" aria-label="Hero">
      <div className="w-full max-w-[1920px]">
        <img
          src="/assets/hero-banner.png"
          alt="Scribble — modern workspace"
          loading="eager"
          fetchPriority="high"
          className="w-full min-w-0 max-w-full h-auto object-cover object-center block"
        />
      </div>
    </section>
  );
}
