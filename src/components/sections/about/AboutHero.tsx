import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "600", subsets: ["latin"] });

export default function AboutHero() {
  return (
    <section
      className="relative w-full min-w-0 overflow-hidden"
      aria-label="About Scribble"
    >
      <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[400px] md:min-h-[480px]">
        <Image
          src="/assets/about-main.jpg"
          alt="Scribble team — modern office, creative professionals at work"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={95}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #404040 0%, rgba(64, 64, 64, 0.5) 50%, transparent 100%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Bottom-left text overlay */}
        <div
          className="absolute left-0 bottom-0 p-4 pointer-events-none ml-[10%] flex flex-col justify-center mb-14 md:mb-20"
          style={{
            width: "716px",
            height: "124px",
          }}
          aria-hidden
        >
          <h1
            className={`${rubik.className} text-white uppercase leading-tight`}
            style={{
              fontSize: "clamp(28px, 6vw, 53.294px)",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            ABOUT
          </h1>
          <p
            className={`${rubik.className} text-white mt-4 leading-tight`}
            style={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Founded in 2016, Scribble Media Production is driven by creativity
            and passion. Known for its original artistic touch, we transform
            ideas into impactful visual experiences that inspire audiences and
            elevate brands.
          </p>
        </div>
      </div>
    </section>
  );
}
