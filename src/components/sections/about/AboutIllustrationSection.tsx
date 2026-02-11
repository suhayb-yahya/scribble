import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["700"], subsets: ["latin"] });

export default function AboutIllustrationSection() {
  

  return (
    <section
      className="w-full min-w-0 py-12 md:py-16 flex flex-col justify-center items-center gap-8 md:gap-10"
      style={{ backgroundColor: "#7B2553" }}
      aria-label="Different — nothing pleases us except the strange"
    >
      <div className="w-full max-w-[1920px] mx-auto flex flex-col justify-center items-center gap-8 md:gap-10">
      <div className="flex justify-center relative w-full max-w-[280px] md:max-w-[360px]">
        <Image
          src="/assets/char.svg"
          alt="Scribble character — creative at work"
          width={271}
          height={294}
          className="block w-full h-auto max-h-[280px] md:max-h-[360px] object-contain"
          unoptimized
        />
      </div>

      <div
        className={`${rubik.className} flex flex-col justify-center items-center uppercase font-bold max-w-full mt-10 md:mt-14`}
        style={{
          width: "50%",
          minWidth: "min(578px, 100%)",
          fontSize: "clamp(32px, 6vw, 56px)",
          letterSpacing: "0.02em",
          lineHeight: 1.2,
          background: "#FFFFFF",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >

        <h2 className="text-3xl md:text-4xl font-bold uppercase text-center tracking-tight mb-10 max-w-4xl mx-auto leading-tight">
        NOTHING PLEASES US <br /> EXCEPT THE STRANGE
        </h2>
        
      </div>
      </div>
    </section>
  );
}
