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
      <section className="bg-primary text-white pt-22 pb-32 px-6 md:px-10 rounded-b-[8vw] md:rounded-b-[6rem]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center tracking-tight mb-10 max-w-4xl mx-auto leading-tight">
            NOTHING PLEASES US<br />EXCEPT THE STRANGE
          </h2>
          <p className="text-xl md:text-3xl font-bold text-center text-white max-w-5xl mx-auto mb-16 leading-tight px-4">
            We strive to provide a comprehensive range of creative and professional services designed to meet the needs of brands in today&apos;s competitive digital world. From the first idea to the final execution.
          </p>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
          >
            {servicesData.map((card, index) => (
                <motion.div
                    key={card.title}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="rounded-2xl p-[1px]"
                    style={{
                      background:
                          "linear-gradient(90deg, #469098 -0.12%, #D17F64 100.12%)",
                    }}
                >
                  <article
                      className="
                  bg-[#7B2553]
                  rounded-2xl
                  px-8
                  py-10
                  h-full
                  flex
                  flex-col
                  justify-start
                "
                  >
                    <h3
                        className={`${rubik.className} font-semibold mb-4`}
                        style={{
                          fontSize: "28.12px",
                          lineHeight: "100%",
                        }}
                    >
                      {card.title}
                    </h3>

                    <p
                        className={`${rubik.className} text-white/90 leading-relaxed`}
                        style={{
                          fontWeight: 400,
                          fontSize: "18.43px",
                          // lineHeight: "100%",
                        }}
                    >
                      {card.description}
                    </p>
                  </article>
                </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
  );
}
