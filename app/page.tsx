import Image from "next/image";

const navItems = ["Home", "About", "Services", "Jobs", "Contact", "عربي"];

const services = [
  {
    title: "Graphic Design",
    description:
      "In our graphic design work, we focus on delivering more than just beautiful visuals; we craft designs that communicate, inspire.",
  },
  {
    title: "Motion, Animation",
    description:
      "Motion graphics and animation are effective visual tools that convert complex ideas into clear, engaging, and interactive content.",
  },
  {
    title: "Branding",
    description:
      "Branding is more than just a logo or color palette; it shapes a brand’s identity and leaves an impression on audience.",
  },
  {
    title: "Production",
    description:
      "Transforming ideas into visual content begins with planning and scriptwriting, followed by filming, directing, and editing.",
  },
  {
    title: "Photography",
    description:
      "Professional photo sessions designed to capture moments and create images that showcase a brand’s identity at its best.",
  },
  {
    title: "Social Media",
    description:
      "Managing social media pages is more than posting; it builds a strong and consistent presence for the brand.",
  },
];

const socialIcons = [
  {
    label: "Facebook",
    path: "M9 8H7v3h2v7h3v-7h2.5L15 8h-3V6.5c0-.9.3-1.5 1.6-1.5H15V2.1C14.4 2 13.1 2 12 2c-2.9 0-4.9 1.7-4.9 4.8V8z",
  },
  {
    label: "Instagram",
    path: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2Zm5.4-8.6a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2ZM6.3 2h11.4A3.3 3.3 0 0 1 21 5.3v11.4A3.3 3.3 0 0 1 17.7 20H6.3A3.3 3.3 0 0 1 3 16.7V5.3A3.3 3.3 0 0 1 6.3 2Zm0 2A1.3 1.3 0 0 0 5 5.3v11.4A1.3 1.3 0 0 0 6.3 18h11.4A1.3 1.3 0 0 0 19 16.7V5.3A1.3 1.3 0 0 0 17.7 4Z",
  },
  {
    label: "Twitter / X",
    path: "M18.9 5h-2.2l-3 3.6L11 5H5.1l4.7 6.2L5 19h2.2l3.3-4 3 4h5.7l-5-6.6L18.9 5Zm-3.7 12-5-6.5L8 6.7h1.6l5 6.5 2 3.8Z",
  },
  {
    label: "YouTube",
    path: "M21.6 7.2a2.2 2.2 0 0 0-1.6-1.6C18.4 5.2 12 5.2 12 5.2s-6.4 0-8 .4A2.2 2.2 0 0 0 2.4 7.2 23 23 0 0 0 2 12a23 23 0 0 0 .4 4.8 2.2 2.2 0 0 0 1.6 1.6c1.6.4 8 .4 8 .4s6.4 0 8-.4a2.2 2.2 0 0 0 1.6-1.6A23 23 0 0 0 22 12a23 23 0 0 0-.4-4.8ZM10 15.3V8.7l5.3 3.3Z",
  },
  {
    label: "LinkedIn",
    path: "M6.4 9.5H3.5V20h2.9Zm-.2-5A1.5 1.5 0 1 0 4.6 6 1.5 1.5 0 0 0 6.2 4.5Zm7.4 5c-1.5 0-2.6.8-3 1.6v-1.6H7.8V20h2.9v-5.6a2.2 2.2 0 0 1 2-1.5c1 0 1.6.6 1.6 1.9V20h3V13c0-2.8-1.7-3.5-3.7-3.5Z",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f5f8] via-[#b31764] to-[#52062d] text-white">
      <div className="relative isolate overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0815] via-[#8e0f52] to-[#5b0731] opacity-90" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <nav className="w-full pt-8">
            <div className="flex items-center justify-between rounded-full bg-white/95 px-6 py-4 shadow-2xl ring-1 ring-black/5 backdrop-blur">
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-black px-4 py-2 text-lg font-black tracking-tight text-white">
                  Scribble
                </span>
                <div className="hidden h-10 w-px bg-neutral-200 sm:block" />
                <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700 sm:flex">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      className="transition-colors hover:text-[#8e0f52]"
                      href="#"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {socialIcons.map((icon) => (
                  <span
                    key={icon.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8e0f52] shadow-lg shadow-black/20 ring-1 ring-white/40"
                    aria-label={icon.label}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="h-4 w-4 fill-white"
                    >
                      <path d={icon.path} />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 sm:hidden">
              {navItems.map((item) => (
                <a key={item} href="#" className="hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </nav>

          <section className="relative mt-8 w-full">
            <div className="relative h-[360px] overflow-hidden rounded-[28px] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
              <Image
                src="/hero.jpg"
                alt="Creative professional in a magenta studio"
                fill
                priority
                sizes="(min-width: 1024px) 1080px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8e0f52]/30 to-[#5b0731]/85" />
            </div>
          </section>

          <section className="mt-14 flex flex-col items-center text-center">
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Nothing Pleases Us
              <br />
              Except The Strange
            </h1>
            <p className="mt-6 max-w-4xl text-base font-semibold leading-7 text-white/85 sm:text-lg">
              We strive to provide a comprehensive range of creative and
              professional services designed to meet the needs of brands in
              today&apos;s competitive digital world. From the first idea to the
              final execution.
            </p>
          </section>

          <section className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/12 bg-white/10 px-5 py-6 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.55)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15"
              >
                <h3 className="text-lg font-bold uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  {service.description}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
