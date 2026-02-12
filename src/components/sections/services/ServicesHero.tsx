import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden z-0 flex justify-center"
      aria-label="Services"
    >
      <div className="relative w-full max-w-[1920px] aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px]">
        <Image
          src="/assets/services-hero.png"
          alt="Creative studio — professional photography and media production at Scribble"
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
