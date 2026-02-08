"use client";

import { Rubik } from "next/font/google";
import { motion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { getTranslations } from "@/lib/translations";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin", "arabic"] });
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

const serviceKeys = [
  "graphicDesign",
  "motionAnimation",
  "branding",
  "production",
  "photography",
  "socialMedia",
] as const;

export default function ServicesSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const servicesData = serviceKeys.map((key) => ({
    title: t.services[key].title,
    description: t.services[key].description,
  }));

  const headlineLines = t.services.headline.split("\n");

  return (
      <section className="bg-primary text-white pt-22 pb-32 px-6 md:px-10 rounded-b-[8vw] md:rounded-b-[6rem]">
        <div className="w-full max-w-[1280px] mx-auto -mt-20 md:-mt-24">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center tracking-tight mb-10 max-w-4xl mx-auto leading-tight">
            {headlineLines[0]}
            <br />
            {headlineLines[1]}
          </h2>
          <p className="text-xl md:text-3xl font-bold text-center text-white max-w-5xl mx-auto mb-16 leading-tight px-4">
            {t.services.subhead}
          </p>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1280px] mx-auto items-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
          >
            {servicesData.map((card) => (
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
                  hover:bg-[#4F1A39]
                  transition-colors duration-200
                  rounded-2xl
                  px-8
                  py-10
                  h-[280px]
                  flex
                  flex-col
                  justify-start
                  overflow-hidden
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
                        className={`${rubik.className} text-white/90 leading-relaxed line-clamp-5`}
                        style={{
                          fontWeight: 400,
                          fontSize: "18.43px",
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
