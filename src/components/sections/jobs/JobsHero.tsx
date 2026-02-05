import Image from "next/image";

export default function JobsHero() {
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden"
      aria-label="Jobs at Scribble"
    >
      <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] overflow-hidden rounded-b-[8vw] md:rounded-b-[6rem]">
        <Image
          src="/assets/jobs-main.png"
          alt="Join our team — modern creative studio at Scribble"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
