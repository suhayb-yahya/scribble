import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["600", "700"], subsets: ["latin"] });

export default function ContactHero() {
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px]"
      aria-label="Contact Scribble"
    >
      {/* Main image — text overlays sit on top of this */}
      <Image
        src="/assets/contact-main.png"
        alt="Scribble studio — creative team and production environment"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Text overlay — lower-left of the image, raised ~200px from bottom */}
      <div
        className="absolute inset-0 pl-[calc(10%+100px)] pr-4 pb-[350px] pointer-events-none flex flex-col justify-end text-left max-w-2xl"
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
