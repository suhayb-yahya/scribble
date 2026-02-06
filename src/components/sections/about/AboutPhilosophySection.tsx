import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin"] });

const boxes = [
  {
    title: "OUR PHILOSOPHY",
    body: "At our core, we believe true creativity can't be copied. That's why we create 100% original, tailor-made work through a collaborative Scribble team that crafts inspiring stories where every detail matters.",
  },
  {
    title: "WHY SCRIBBLE?",
    body: "We're not just executors—we're partners in success. We innovate with purpose, perfect every detail, and create cinematic experiences that resonate locally and globally, and are truly remembered.",
  },
];

export default function AboutPhilosophySection() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-10 bg-primary"
      aria-label="Our philosophy and why Scribble"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {boxes.map((box) => (
          <div
            key={box.title}
            className="rounded-2xl p-6 sm:p-8 md:p-10 border-2 flex flex-col justify-center min-h-[200px] bg-[#7B2553] hover:bg-[#4F1A39] transition-colors duration-200"
            style={{
              borderColor: "#D2A860",
            }}
          >
            <h2
              className={`${rubik.className} text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-wide mb-4`}
              style={{ color: "#D2A860" }}
            >
              {box.title}
            </h2>
            <p
              className={`${rubik.className} text-base md:text-lg font-normal leading-relaxed`}
              style={{ color: "#FFFFFF" }}
            >
              {box.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
