 "use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Rubik } from "next/font/google";
import Image from "next/image";

const rubik = Rubik({ weight: "600", subsets: ["latin"] });

export type ClientLogo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const clientsData: ClientLogo[] = [
  { src: "/assets/clients/client-10.png", alt: "UNESCO" },
  { src: "/assets/clients/client-11.png", alt: "DENT - Qdent" },
  { src: "/assets/clients/client-12.png", alt: "REACH GROUP" },
  { src: "/assets/clients/client-13.png", alt: "Palestine Investment Fund" },
  { src: "/assets/clients/client-14.png", alt: "Al-Hiba Center for Pregnancy Assistance" },
  { src: "/assets/clients/client-15.png", alt: "Super Pharma" },
  { src: "/assets/clients/client-16.png", alt: "AMG - Adel El Masry Real Estate Group" },
  { src: "/assets/clients/client-17.png", alt: "Reflect" },
  { src: "/assets/clients/client-18.png", alt: "UN Women" },
  // { src: "/assets/clients/client-19.png", alt: "ASALA" },
  { src: "/assets/clients/client-20.png", alt: "Client" },
  { src: "/assets/clients/client-21.png", alt: "UN-HABITAT" },
  { src: "/assets/clients/client-22.png", alt: "PALPAY" },
  { src: "/assets/clients/client-23.png", alt: "Gateway" },
  { src: "/assets/clients/client-24.png", alt: "Arabcare Hospital" },
  { src: "/assets/clients/client-25.png", alt: "The Palestinian Museum" },
  { src: "/assets/clients/client-26.png", alt: "Client" },
  { src: "/assets/clients/client-27.png", alt: "Client" },
  { src: "/assets/clients/client-28.png", alt: "Client" },
  { src: "/assets/clients/client-29.png", alt: "Client" },
  { src: "/assets/clients/client-30.png", alt: "Client" },
  { src: "/assets/clients/client-31.png", alt: "Client" },
  { src: "/assets/clients/client-32.png", alt: "Palestine Monetary Authority" },
  { src: "/assets/clients/client-33.png", alt: "Client" },
  { src: "/assets/clients/client-34.png", alt: "Client" },
  { src: "/assets/clients/client-35.png", alt: "Client" },
  { src: "/assets/clients/client-36.png", alt: "Client" },
  { src: "/assets/clients/client-37.png", alt: "Client" },
  { src: "/assets/clients/client-38.png", alt: "Client" },
  { src: "/assets/clients/client-39.png", alt: "Client" },
  { src: "/assets/clients/client-40.png", alt: "Client" },
  { src: "/assets/clients/client-41.png", alt: "Client" },
  { src: "/assets/clients/client-42.png", alt: "Client" },
  { src: "/assets/clients/client-43.png", alt: "Client" },
  { src: "/assets/clients/client-44.png", alt: "Client" },
  { src: "/assets/clients/client-45.png", alt: "Client" },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

function AnimatedClientLogo({ client, index }: { client: ClientLogo; index: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const delayMs = useMemo(() => {
    // Stagger a bit, but cap so the last rows don't feel sluggish.
    return Math.min(index * 45, 450);
  }, [index]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      style={prefersReducedMotion ? undefined : { transitionDelay: `${delayMs}ms` }}
      className={[
        "flex items-center justify-center w-full min-h-[6.25rem]",
        // reveal
        prefersReducedMotion
          ? "opacity-90"
          : isInView
            ? "opacity-90 translate-y-0"
            : "opacity-0 translate-y-4",
        // motion + hover
        "motion-safe:transition-[transform,opacity] motion-safe:duration-500 motion-safe:ease-out",
        "hover:opacity-100 motion-safe:hover:scale-[1.3] motion-safe:hover:-translate-y-[1px]",
        "transform-gpu will-change-transform",
      ].join(" ")}
    >
      <Image
        src={client.src}
        alt={client.alt}
        width={client.width ?? 420}
        height={client.height ?? 200}
        className="object-contain w-full h-auto"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 25rem"
      />
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-10 bg-white"
      aria-label="Our clients"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-10 md:gap-15 items-center justify-items-center">
          {clientsData.length > 0 ? (
            clientsData.map((client, index) => (
              <AnimatedClientLogo
                key={`${client.alt}-${index}`}
                client={client}
                index={index}
              />
            ))
          ) : (
            Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-full min-h-[6.25rem] rounded border border-gray-200 bg-gray-50 text-gray-400 text-sm"
                aria-hidden
              >
                Logo {i + 1}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
