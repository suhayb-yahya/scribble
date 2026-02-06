"use client";

import { Rubik } from "next/font/google";
import { motion } from "framer-motion";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin"] });

const servicesData = [
  {
    title: "GRAPHIC DESIGN",
    description:
      "In our graphic design work, we focus on delivering more than just beautiful visuals, we craft designs that communicate, inspire.",
  },
  {
    title: "MOTION, ANIMATION",
    description:
      "Motion graphics and animation are effective visual tools that convert complex ideas into clear, engaging, and interactive content.",
  },
  {
    title: "BRANDING",
    description:
      "Branding is more than just a logo or a color palette; it is the experience that shapes a brand's identity and leaves an impression on audience.",
  },
  {
    title: "PRODUCTION",
    description:
      "Transforming ideas into visual content begins with planning and scriptwriting, followed by filming, directing, and editing, all using cinematic equipment.",
  },
  {
    title: "PHOTOGRAPHY",
    description:
      "We offer professional photo sessions carefully designed to capture moments and create images that showcase a brand's identity at its best.",
  },
  {
    title: "SOCIAL MEDIA",
    description:
      "Managing social media pages is more than just posting: it's a complete process designed to build a strong and consistent presence for the brand.",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="bg-primary text-white pt-24 pb-32 px-6 md:px-10 rounded-b-[8vw] md:rounded-b-[6rem]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold uppercase text-center tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
          NOTHING PLEASES US<br />EXCEPT THE STRANGE
        </h2>
        <p className="text-xl md:text-2xl font-bold text-center text-white max-w-5xl mx-auto mb-16 leading-tight px-4">
          We strive to provide a comprehensive range of creative and professional services designed to meet the needs of brands in today&apos;s competitive digital world. From the first idea to the final execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {servicesData.map((card) => (
            <article
              key={card.title}
              className="bg-primary border border-white/40 rounded-2xl p-8 text-left h-full flex flex-col justify-start transition-colors duration-200 hover:bg-[#6a2049]"
            >
              <h3 className="text-lg font-bold uppercase tracking-wide mb-4">
                {card.title}
              </h3>
              <p className="text-base text-white/90 leading-relaxed">
                {card.description}
              </p>
            </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
