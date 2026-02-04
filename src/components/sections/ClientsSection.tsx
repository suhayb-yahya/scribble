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
  { src: "/assets/clients/client-19.png", alt: "ASALA" },
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

export default function ClientsSection() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-10 bg-white"
      aria-label="Our clients"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`${rubik.className} text-2xl md:text-3xl font-semibold text-primary text-center uppercase tracking-wide mb-12 md:mb-16`}
        >
          Our Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-12 items-center justify-items-center">
          {clientsData.length > 0 ? (
            clientsData.map((client, index) => (
              <div
                key={`${client.alt}-${index}`}
                className="flex items-center justify-center w-full min-h-[100px] opacity-90 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width ?? 400}
                  height={client.height ?? 200}
                  className="object-contain w-full h-auto"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 400px"
                />
              </div>
            ))
          ) : (
            Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-full min-h-[100px] rounded border border-gray-200 bg-gray-50 text-gray-400 text-sm"
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
