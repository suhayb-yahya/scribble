"use client";

import { Rubik } from "next/font/google";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin", "arabic"] });

const serviceKeys = [
  "graphicDesign",
  "motionAnimation",
  "branding",
  "production",
  "photography",
  "socialMedia",
] as const;
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
  const t = useTranslations("services");
  return (
      <section className="bg-primary text-white pt-22 pb-32">
        <div className="content-nav-aligned -mt-20 md:-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-center tracking-tight mb-10 max-w-4xl mx-auto leading-tight">
            {t("heading1")}<br />{t("heading2")}
          </h2>
          <p className="text-xl md:text-3xl  text-center text-white max-w-5xl mx-auto mb-16 leading-tight px-5">
            {t("intro")}
          </p>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
          >
            {serviceKeys.map((key) => (
                <motion.div
                    key={key}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="rounded-2xl p-[1px]"
                    style={{
                      background: "linear-gradient(90deg, #469098 0%, #D17F64 100%)",
                    }}
                >
                  <article
                      className="
                  bg-[#7B2553]
                  hover:bg-[#4F1A39]
                  transition-colors duration-200
                  rounded-[15px]
                  px-8
                  py-10
                  h-[240px]
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
                      {t(`${key}`)}
                    </h3>

                    <p
                        className={`${rubik.className} text-white/90 leading-relaxed line-clamp-5`}
                        style={{
                          fontWeight: 400,
                          fontSize: "18.43px",
                        }}
                    >
                      {t(`${key}Desc`)}
                    </p>
                  </article>
                </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
  );
}
