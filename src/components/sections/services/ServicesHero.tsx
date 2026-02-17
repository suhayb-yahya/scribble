import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden z-0 flex justify-center"
      aria-label="Services"
    >
      <div className="relative w-full flex justify-center">
        <Image
          src="/assets/services-hero.png"
          alt="Creative studio — professional photography and media production at Scribble"
          width={1920}
          height={1200}
          className="w-full h-auto max-w-[1920px] object-contain"
          sizes="(max-width: 1920px) 100vw, 1920px"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
