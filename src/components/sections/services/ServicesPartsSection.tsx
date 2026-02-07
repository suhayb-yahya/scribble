import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "600"] });

const DESIGN_WIDTH = 1440;
const BOX_HEIGHT_SCALE = 0.55; // Compact box height
function pxToMinHeightVw(px: number) {
  return (px / DESIGN_WIDTH) * 100 * BOX_HEIGHT_SCALE;
}

export type ServicesPart = {
  id: string;
  title: string;
  description: string;
  /** Optional: when set, image is shown beside the text */
  imageSrc?: string;
  imageAlt?: string;
  /** "text-left" = text left, image right; "text-right" = image left, text right */
  layout: "text-left" | "text-right";
  /** @deprecated Box width is always 50% of row. Kept for backwards compatibility. */
  boxWidthPx?: number;
  /** Optional: text box min-height in px (1440px design). Default 359.863. Converted to vw in layout. */
  boxMinHeightPx?: number;
  /** When true, box spans full width of the section (e.g. Graphic Design). */
  fullWidth?: boolean;
};

type ServicesPartsSectionProps = {
  parts: ServicesPart[];
};

function PartBlock({ part }: { part: ServicesPart }) {
  const isTextLeft = part.layout === "text-left";
  const hasImage = Boolean(part.imageSrc);
  const fullWidth = Boolean(part.fullWidth);
  const boxMinHeightPx = part.boxMinHeightPx ?? 359.863;
  const minHeightVw = pxToMinHeightVw(boxMinHeightPx);
  const isProductionPhotography = part.id === "production-photography";
  const textBox = (
    <div
      className={`flex flex-col justify-center shrink-0 ${
        fullWidth ? "w-full" : `lg:w-1/2 ${hasImage ? (isTextLeft ? "lg:order-1" : "lg:order-2") : "w-full"}`
      }`}
    >
      <div
        className="rounded-[8px] p-[0.893px] shadow-lg w-full overflow-auto my-6 lg:my-8"
        style={{
          minHeight: `${minHeightVw}vw`,
          backgroundImage:
            "linear-gradient(to right, transparent 748px, #D17F64 748px), linear-gradient(to right, #469098 0%, #D17F64 100%)",
          backgroundSize: "1500px 100%, 748px 100%",
          backgroundPosition: "0 0, 0 0",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div
          className="rounded-[7.1px] py-6 px-6 sm:py-8 sm:px-8 w-full overflow-auto"
          style={{
            minHeight: `calc(${minHeightVw}vw - 2px)`,
            backgroundColor: isProductionPhotography ? "#4F1A39" : "#7B2553",
          }}
        >
          <h2
            className={`${rubik.className} mb-6 leading-[1.85] text-lg sm:text-xl md:text-2xl lg:text-[36px]`}
            style={{ color: "#FFF", fontWeight: 600 }}
          >
            {part.title}
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
          >
            {part.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col lg:flex-row gap-2 lg:gap-0 items-stretch max-w-[1440px] mx-auto px-10 sm:px-16 lg:px-20 py-3 lg:py-4 ${!hasImage && !fullWidth ? "lg:justify-center" : ""}`}
    >
      {textBox}

      {/* Image slot — 50% width when present */}
      {hasImage && (
        <div
          className={`lg:w-1/2 min-h-[200px] relative flex items-center justify-center shrink-0 ${
            isProductionPhotography ? "lg:justify-start lg:pl-0" : ""
          } ${isTextLeft ? "lg:order-2" : "lg:order-1"}`}
        >
          <div
            className="relative w-[424.623px] max-w-full h-[354.216px] shrink-0 mx-auto lg:mx-0"
            style={
              isProductionPhotography
                ? { transform: "translateX(-1.5rem)" }
                : undefined
            }
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
