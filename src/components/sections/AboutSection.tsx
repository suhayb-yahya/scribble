import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className={`${rubik.className} text-xl md:text-2xl lg:text-3xl font-normal leading-normal text-primary`}>
          Founded in 2016, Scribble Media Production has delivered standout projects built on the creativity and passion of its team. With a unique artistic touch, our original work has defined the company&apos;s identity and set it apart in the industry.
        </p>
      </div>
    </section>
  );
}
