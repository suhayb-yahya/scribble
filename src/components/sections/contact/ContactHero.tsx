import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["600", "700"], subsets: ["latin"] });

export default function ContactHero() {
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden aspect-[3/2] min-h-[360px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px]"
      aria-label="Contact Scribble"
    >
      {/* Main image — natural aspect ratio, no cropping; displays at full width × proportional height */}
      <Image
        src="/assets/contact-main.png"
        alt="Scribble studio — creative team and production environment"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        unoptimized
      />

      {/* Text overlay — lower-left of the image */}
      <div
        className="absolute inset-0 pl-[calc(5%+60px)] pr-4 pb-[200px] pointer-events-none flex flex-col justify-end text-left max-w-2xl"
        aria-hidden
      >
        <h1
          className={`${rubik.className} text-[#FFF] font-semibold uppercase tracking-tight`}
          style={{
            fontSize: "53.294px",
            lineHeight: "normal",
          }}
        >
          LET&apos;S REACH
          <br />
          YOUR TARGET
          <br />
          <span className="whitespace-nowrap">AUDIENCE TOGETHER</span>
        </h1>
      </div>
    </section>
  );
}
