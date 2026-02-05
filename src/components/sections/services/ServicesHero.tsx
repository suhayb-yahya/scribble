import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden"
      aria-label="Services"
    >
      <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px]">
        <Image
          src="/assets/services-hero.png"
          alt="Creative studio — professional photography and media production at Scribble"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Bottom gradient: fade to black so transition strip below blends in */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #404040 0%, rgba(64, 64, 64, 0.5) 50%, transparent 100%)",
          }}
          aria-hidden
        />
        {/* Optional overlay for title on the gradient floor area — add when we have copy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
