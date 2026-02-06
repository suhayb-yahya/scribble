import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "600"] });

const DEFAULT_BOX_WIDTH = 1315.876;
const DEFAULT_BOX_MIN_HEIGHT = 359.863;
const NARROW_BOX_WIDTH = 746.66;
const NARROW_BOX_MIN_HEIGHT = 463.12;

export type ServicesPart = {
  id: string;
  title: string;
  description: string;
  /** Optional: when set, image is shown beside the text */
  imageSrc?: string;
  imageAlt?: string;
  /** "text-left" = text left, image right; "text-right" = image left, text right */
  layout: "text-left" | "text-right";
  /** Optional: text box width in px (1440px design). Default 1315.876. Use 746.66 for narrow (e.g. with image). */
  boxWidthPx?: number;
  /** Optional: text box min-height in px. Default 359.863. Use 463.12 for narrow box. */
  boxMinHeightPx?: number;
};

type ServicesPartsSectionProps = {
  parts: ServicesPart[];
};

const PRODUCTION_PHOTOGRAPHY_ID = "production-photography";

function PartBlock({ part }: { part: ServicesPart }) {
  const isTextLeft = part.layout === "text-left";
  const boxWidth = part.boxWidthPx ?? DEFAULT_BOX_WIDTH;
  const boxMinHeight = part.boxMinHeightPx ?? DEFAULT_BOX_MIN_HEIGHT;
  const lgWidthClass =
    boxWidth === NARROW_BOX_WIDTH ? "lg:w-[746.66px]" : "lg:w-[1315.876px]";
  const isProductionPhotography = part.id === PRODUCTION_PHOTOGRAPHY_ID;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-stretch max-w-[1440px] mx-auto pl-10 pr-4 sm:pl-16 sm:pr-6 lg:pl-20 py-12 lg:py-16">
      {/* Text box — width/minHeight per part (design 1440px) */}
      <div
        className={`flex flex-col justify-center shrink-0 ${
          isTextLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          className={`rounded-2xl p-[0.893px] shadow-lg w-full overflow-auto ${lgWidthClass}`}
          style={{
            maxWidth: `${boxWidth}px`,
            minHeight: `${boxMinHeight}px`,
            background:
              "linear-gradient(to right, #469098, #D17F64)",
          }}
        >
          <div
            className={`rounded-2xl p-6 sm:p-8 w-full overflow-auto ${
              isProductionPhotography ? "bg-[#4F1A39]" : "bg-[#7B2553]"
            }`}
            style={{
              minHeight: `${boxMinHeight - 2}px`,
            }}
          >
            <h2
              className={`${rubik.className} mb-4 text-[#FFF] text-[53.294px] font-semibold leading-normal`}
            >
              {part.title}
            </h2>
            <p
              className={`${rubik.className} text-[#FFF] text-[26px] font-semibold leading-normal`}
            >
              {part.description}
            </p>
          </div>
        </div>
      </div>

      {/* Image slot — 424.623×354.216 (design); Production Photography: nudge image left */}
      <div
        className={`flex-1 min-h-[200px] relative flex items-center ${
          isProductionPhotography ? "justify-start lg:pl-0" : "justify-center"
        } ${isTextLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        {part.imageSrc ? (
          <div
            className="relative w-[424.623px] max-w-full h-[354.216px] shrink-0"
            style={
              isProductionPhotography
                ? { transform: "translateX(-1.5rem)" }
                : undefined
            }
          >
            <Image
              src={part.imageSrc}
              alt={part.imageAlt ?? ""}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 424.623px"
            />
          </div>
        ) : null}
      </div>
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
