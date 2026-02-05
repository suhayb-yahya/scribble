"use client";

import { useState } from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin"] });

const tabs = [
  { id: "story", label: "OUR STORY" },
  { id: "vision", label: "OUR VISION" },
  { id: "mission", label: "OUR MISSION" },
] as const;

const tabContent: Record<(typeof tabs)[number]["id"], string[]> = {
  story: [
    "Our story began with a simple idea: to turn creativity into meaningful visual experiences. Since the very first project, our vision has been clear to combine art, technology, and storytelling in a way that inspires audiences and strengthens brands.",
    "Over the years, we've grown into a team of passionate creatives, each adding a unique touch that shaped our identity and set us apart. What started as a small vision has become a trusted partner for businesses and individuals seeking originality, professionalism, and innovation. And our story is still being written with every new project, every new challenge, and every new success.",
  ],
  vision: [
    "Our vision is to be the go-to creative partner for brands that dare to stand out. We aim to push boundaries, blend art with technology, and deliver visual experiences that leave a lasting impression.",
    "We see a future where every brand has access to bold, original storytelling—and we're here to make that happen, one project at a time.",
  ],
  mission: [
    "Our mission is to deliver more than beautiful visuals: we craft work that communicates, inspires, and drives real impact. We combine creativity with strategy so every project strengthens your brand and connects with your audience.",
    "We're committed to originality, professionalism, and innovation in everything we do—from the first idea to the final deliverable.",
  ],
};

export default function AboutTabsSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("story");

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-10 bg-white"
      aria-label="Our story, vision, and mission"
    >
      <div className="max-w-6xl mx-auto">
        {/* Tab navigation: line runs through the indicator boxes */}
        <div className="relative">
          <div className="flex flex-wrap gap-8 md:gap-12 items-end">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`${rubik.className} flex flex-col items-center uppercase tracking-wide transition-colors pb-0 hover:opacity-90 ${
                    isActive ? "text-[#469098]" : "text-[#7B2553]"
                  }`}
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                  aria-selected={isActive}
                  role="tab"
                >
                  {tab.label}
                  {/* Tab indicator: SVG pill centered under the label */}
                  <span className="block mt-1 relative z-10 flex justify-center" aria-hidden>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="17"
                      viewBox="0 0 84 17"
                      fill="none"
                      className="block"
                    >
                      <path
                        d="M74.804 0H8.36C3.7429 0 0 3.74288 0 8.35999V8.36096C0 12.9781 3.7429 16.7209 8.36 16.7209H74.804C79.4211 16.7209 83.164 12.9781 83.164 8.36096V8.35999C83.164 3.74288 79.4211 0 74.804 0Z"
                        fill={isActive ? "#469098" : "#7B2553"}
                      />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
          {/* Baseline: runs through the tab indicator boxes */}
          <div
            className="absolute left-0 right-0 h-px bg-gray-300 z-0"
            style={{ bottom: "8px" }}
            aria-hidden
          />
        </div>

        {/* Content + CREATIVE block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-[120px]">
          <div role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            <div className="space-y-6">
              {tabContent[activeTab].map((paragraph, i) => (
                <p
                  key={i}
                  className={rubik.className}
                  style={{
                    color: "#19140F",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-first lg:order-none">
            <span
              className={`${rubik.className} font-bold uppercase text-6xl md:text-7xl lg:text-8xl tracking-tight select-none`}
              style={{
                background:
                  "linear-gradient(91deg, #D17F64 -8.44%, #469098 809.64%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
              aria-hidden
            >
              CREATIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
