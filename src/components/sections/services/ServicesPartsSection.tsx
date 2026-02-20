"use client";

import Image from "next/image";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({ subsets: ["latin", "arabic"], weight: ["400", "600"] });

export type ServicesPart = {
  id: string;
  /** Translation key under servicesParts (e.g. "motionGraphics") */
  translationKey: string;
  /** Optional: when set, image is shown beside the text */
  imageSrc?: string;
  imageAlt?: string;
  /** "text-left" = text left, image right; "text-right" = image left, text right */
  layout: "text-left" | "text-right";
  /** @deprecated Box width is always 50% of row. Kept for backwards compatibility. */
  boxWidthPx?: number;
  /** Optional: text box min-height in px. Default 260. Fixed so boxes don't grow on wide screens. */
  boxMinHeightPx?: number;
  /** When true, box spans full width of the section (e.g. Graphic Design). */
  fullWidth?: boolean;
};

type ServicesPartsSectionProps = {
  parts: ServicesPart[];
};

function PartBlock({ part }: { part: ServicesPart }) {
  const t = useTranslations("servicesParts");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const title = t(`${part.translationKey}.title`);
  const description = t(`${part.translationKey}.description`);
  const isTextLeft = part.layout === "text-left";
  const hasImage = Boolean(part.imageSrc);
  const fullWidth = Boolean(part.fullWidth);
  const boxMinHeightPx = part.boxMinHeightPx ?? 260;
  const textBox = (
    <div
      className={`flex flex-col justify-center shrink-0 ${
        fullWidth ? "w-full" : `lg:w-1/2 ${hasImage ? (isTextLeft ? "lg:order-1" : "lg:order-2") : "w-full"}`
      }`}
    >
      <div
        className="rounded-2xl p-[1px] w-full overflow-visible my-6 lg:my-8"
        style={{
          minHeight: `${boxMinHeightPx}px`,
          background: "linear-gradient(90deg, #469098 0%, #D17F64 100%)",
        }}
      >
        <div
          className="rounded-[15px] py-6 px-6 sm:py-8 sm:px-8 w-full overflow-auto bg-[#7B2553] hover:bg-[#4F1A39] transition-colors duration-200"
          style={{
            minHeight: `${boxMinHeightPx - 2}px`,
          }}
        >
          <h2
            className={`${rubik.className} mb-6 leading-[1.85] text-lg sm:text-xl md:text-2xl lg:text-[36px]`}
            style={{ color: "#FFF", fontWeight: 600 }}
            dir={isRtl ? "rtl" : undefined}
          >
            {title}
          </h2>
          <p
            className={`${rubik.className}`}
            style={{
              color: "#FFF",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
            dir={isRtl ? "rtl" : undefined}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col lg:flex-row gap-2 lg:gap-0 items-stretch w-full py-3 lg:py-4 ${isRtl ? "content-nav-aligned-right" : `content-nav-aligned ${!hasImage && !fullWidth ? "lg:justify-center" : ""}`}`}
      dir={isRtl ? "rtl" : undefined}
    >
      {textBox}

      {/* Image slot — 50% width when present */}
      {hasImage && (
        <div
          className={`lg:w-1/2 min-h-[200px] relative flex items-center justify-center shrink-0 ${isTextLeft ? "lg:order-2" : "lg:order-1"}`}
        >
          <div
            className="relative w-[424.623px] max-w-full h-[354.216px] shrink-0 mx-auto lg:mx-0"
          >
            <Image
              src={part.imageSrc!}
              alt={part.imageAlt ?? ""}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 424.623px"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServicesPartsSection({
  parts,
}: ServicesPartsSectionProps) {
  return (
    <section
      className="w-full min-w-0 relative -mt-32 sm:-mt-40 md:-mt-52 z-20 overflow-visible"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(123, 37, 83, 0.4) 30px, rgba(123, 37, 83, 0.9) 60px, #7B2553 90px, #7B2553 100%)",
      }}
      aria-label="Services overview"
    >
      <div className="relative -mt-[100px]">
        {parts.map((part) => (
          <PartBlock key={part.id} part={part} />
        ))}
      </div>
    </section>
  );
}
