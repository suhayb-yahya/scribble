import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["600", "700"], subsets: ["latin"] });

export default function ContactHero() {
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden"
      aria-label="Contact Scribble"
    >
      <div className="relative w-full max-w-[1920px] mx-auto aspect-[3/2] min-h-[360px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px] shadow-none">
        <Image
          src="/assets/contact-main.png"
          alt="Scribble studio — creative team and production environment"
          fill
          className="object-cover object-center shadow-none"
          sizes="100vw"
          priority
          unoptimized
        />

        <div
          className="absolute inset-0 pl-[calc(5%+60px)] min-[1920px]:pl-[156px] pr-4 pb-[200px] pointer-events-none flex flex-col justify-end text-left max-w-2xl"
          aria-hidden
        >
          <h1
            className={`${rubik.className} text-[#FFF] font-semibold uppercase tracking-tight`}
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 500,
              lineHeight: "1.2",
            }}
          >
            LET&apos;S REACH
            <br />
            YOUR TARGET
            <br />
            <span className="whitespace-nowrap">AUDIENCE TOGETHER</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
