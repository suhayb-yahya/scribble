"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dancing_Script } from "next/font/google";
import { useEffect, useId, useState, type ComponentType } from "react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "JOBS", href: "/jobs" },
  { label: "CONTACT", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: "f" },
  { name: "Instagram", href: "#", icon: "camera" },
  { name: "YouTube", href: "#", icon: "play" },
  { name: "LinkedIn", href: "#", icon: "in" },
];

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  LinkedIn: LinkedInIcon,
};

export default function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Close the menu after navigation.
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Prevent background scroll while the mobile menu is open.
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 w-full px-4 py-4 mt-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl md:rounded-full shadow-md flex items-center justify-between gap-3 md:gap-6 px-4 md:px-8 py-3 md:py-6">
        {/* Left: Logo + desktop nav */}
        <div className="flex items-center gap-4 shrink min-w-0">
          <Link href="/" className="flex flex-col items-start inline-flex shrink-0">
            <span aria-label="Scribble logo" className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90.323"
                height="44.851"
                viewBox="0 0 91 45"
                fill="none"
                className="w-[72px] h-auto md:w-[90px]"
              >
                <path
                  d="M78.9444 42.5383C63.9994 40.4463 48.6224 39.8393 33.4794 39.9913C28.4194 40.0883 23.3364 40.2703 18.3844 40.8933C16.4064 41.2053 14.2834 41.3983 12.5474 42.3283C12.3864 42.4163 12.4234 42.5053 12.4994 42.2343C12.5324 41.9973 12.4364 41.6703 12.2394 41.4903C15.5944 42.0963 29.4254 41.8333 33.6574 41.9273C43.8774 42.0403 54.1094 42.5083 64.2774 43.6093C65.0474 43.6923 64.9824 44.9123 64.1594 44.8483C49.5014 43.5633 33.1384 43.9323 18.3614 44.3243C15.9844 44.2873 13.6184 44.5243 11.2524 43.8903C10.9994 43.7793 10.7544 43.7343 10.3384 43.3413C9.91844 42.9173 9.75945 42.2683 9.88645 41.7033C10.6664 38.9153 15.6314 38.5803 17.9774 38.0673C28.2294 36.6183 38.4644 36.5163 48.7634 36.5173C59.0164 36.6163 69.2544 36.9853 79.5394 38.2203C82.4004 38.6353 81.8754 42.9043 78.9434 42.5373L78.9444 42.5383Z"
                  fill="#7B2553"
                />
                <path
                  d="M16.2774 9.48542C17.4314 8.00942 19.3934 5.75642 19.3554 4.14642C15.1744 3.37942 10.6494 5.77942 7.26438 8.16342C5.73738 9.34542 4.10937 10.7144 3.54837 12.3974C3.48137 12.7514 3.47438 12.7954 3.62638 13.1034C3.84438 13.6264 5.08337 14.3514 6.43637 14.8044C9.55537 15.9204 12.7644 16.2304 15.9464 17.8984C16.8074 18.3754 17.7814 19.0734 18.4654 20.2484C21.9794 26.3614 12.9414 36.7674 6.70137 32.7864C4.14637 30.0124 8.10838 26.4594 10.2404 24.8704C10.9734 24.3624 11.7354 23.8924 12.7254 23.5764C14.1464 23.1434 14.8554 25.2324 13.4704 25.7574C11.5564 26.4974 8.96238 28.8824 8.46538 30.8054C12.7524 32.2124 19.3424 23.3514 14.4154 20.7164C10.1364 18.4544 3.82438 19.2414 0.624378 14.9134C-3.18662 7.97442 11.4604 0.19242 17.1804 0.45742C19.5134 0.34942 22.8694 1.32442 22.5994 4.38342C22.1854 7.28142 19.9074 9.36542 17.8674 11.1254C16.7964 12.0094 15.3724 10.5074 16.2794 9.48542H16.2774Z"
                  fill="black"
                />
                <path
                  d="M27.9614 23.7495C27.9704 23.3855 27.9494 22.6755 27.7484 22.5515C27.7604 22.5965 27.8634 22.6815 27.8674 22.6895C27.8754 22.7055 27.5074 22.7725 27.1464 22.9625C25.1484 24.0445 23.8814 26.3095 22.8184 28.2645C22.3934 29.0575 22.1234 29.9435 22.1514 30.4525C22.1664 30.7065 22.1794 30.8235 22.2644 30.9405C23.6904 32.4085 26.3344 29.9405 27.5804 28.8495C27.8714 28.5835 28.3244 28.6035 28.5904 28.8955C28.8144 29.1405 28.8344 29.4995 28.6624 29.7655C27.9954 30.7975 27.2564 31.7005 26.3074 32.5285C25.3614 33.2955 24.1094 34.0605 22.5124 33.9445C20.9244 33.8655 19.3804 32.5115 19.1744 30.9375C18.6334 26.5815 22.2444 21.8815 26.0914 20.2285C27.7574 19.4355 30.0854 19.8355 30.5334 22.0355C30.8024 23.3175 30.8674 25.5415 29.0724 25.3825C28.2774 25.2705 27.8354 24.5005 27.9624 23.7505L27.9614 23.7495Z"
                  fill="black"
                />
                <path
                  d="M34.7253 22.7415L33.6263 32.4915L30.5593 31.6745C31.4523 28.0155 32.7093 24.2755 35.8443 21.8315C37.0143 20.9695 38.6953 20.4605 40.1573 20.8385C40.9393 20.9315 41.5873 21.6055 41.3673 22.4195C41.2153 23.0085 40.6593 23.3865 40.0733 23.3345C36.9213 23.2745 35.4833 26.9355 34.5343 29.4895C34.1123 30.6445 33.9403 31.7185 33.5533 32.9295C32.8113 34.7535 30.0573 33.9345 30.4183 32.0145C30.4163 32.0125 32.2583 22.3705 32.2573 22.3685C32.5753 20.8155 34.8823 21.1705 34.7263 22.7425L34.7253 22.7415Z"
                  fill="black"
                />
                <path
                  d="M46.0124 23.1703C44.9074 25.4833 43.9304 28.9053 44.1424 31.1003C44.0764 31.0313 43.8034 31.0413 43.8634 31.0513C45.3204 30.2663 46.4704 28.4073 47.4454 26.9863C48.4444 25.4663 49.3574 23.8443 50.1424 22.2083C50.4284 21.6113 51.1434 21.3603 51.7404 21.6463C52.3894 21.9523 52.5834 22.7313 52.2684 23.3433C51.0134 26.3633 46.8064 36.2073 42.4624 33.7403C39.1814 31.3783 41.7764 24.6413 43.1854 21.8153C44.1144 19.9963 46.8484 21.3063 46.0124 23.1703Z"
                  fill="black"
                />
                <path
                  d="M50.4204 22.0806C53.3724 18.7596 55.9074 14.7946 57.1934 10.5446C57.8594 7.92855 58.9054 5.12456 58.6734 2.50756C58.6574 2.42656 58.6254 2.42155 58.6704 2.46355C58.7114 2.51955 58.8714 2.55256 58.8774 2.54156C59.0224 2.49856 58.8004 2.59655 58.6744 2.76855C55.6474 7.43655 54.3374 13.2456 52.9074 18.6426C51.8094 23.1246 50.8714 27.6596 50.0064 32.1876L47.9794 31.6646C49.0004 27.6156 50.5634 22.3286 54.8684 20.4746C57.5444 19.5456 59.4524 22.0196 59.5314 24.3346C60.1114 28.9996 55.9034 37.0686 50.6244 32.9166C49.2004 31.5146 48.9004 29.6996 49.0514 28.1456C49.1874 26.8236 51.1244 26.9286 51.1394 28.2386C51.0224 30.2386 52.6224 32.5276 54.5474 31.0436C56.2844 29.3756 57.5354 25.5496 56.3444 23.2766C56.1164 23.0306 56.0944 23.0206 55.6944 23.1056C54.7554 23.4386 53.8844 24.4636 53.2674 25.3306C51.8514 27.3846 50.7934 29.8636 49.9804 32.2896C49.6324 33.5496 47.7324 33.1466 47.9394 31.8476C49.6244 22.5716 51.1304 13.3436 54.9074 4.58156C55.5884 3.18556 56.1464 1.73756 57.4384 0.649558C58.5874 -0.337442 60.5624 0.195557 60.9604 1.77656C61.5574 5.02056 60.2084 8.24255 59.4944 11.1996C57.9724 15.9716 55.2474 19.9666 51.9714 23.4906C51.0474 24.4806 49.5214 23.0986 50.4194 22.0816L50.4204 22.0806Z"
                  fill="black"
                />
                <path
                  d="M61.9164 22.1404C64.6164 18.4664 67.2354 14.5784 69.0484 10.4524C69.9524 7.98045 71.0954 5.15944 70.5964 2.60944C70.5664 2.54744 70.5374 2.51344 70.5464 2.51844C70.5564 2.52944 70.6144 2.54944 70.6094 2.54644C70.7204 2.50244 70.5374 2.58545 70.3954 2.75745C67.3444 7.42145 65.9964 13.2544 64.6474 18.6804C63.5954 23.1824 62.7224 27.7404 61.9284 32.2894L59.5124 31.7404C60.5734 27.5744 61.8334 22.0354 66.2664 20.1764C71.1154 18.9674 71.9094 25.5964 70.8074 28.7984C69.9274 32.6854 66.0014 36.2274 62.2964 33.0924C60.7124 31.6604 60.3524 29.6284 60.6714 27.9504C60.9444 26.4384 63.1724 26.6944 63.1184 28.2084C62.9314 30.0394 64.5854 32.1964 66.2784 30.8404C67.9964 29.0474 68.9084 25.3964 67.6194 23.1974C67.3754 22.9654 67.4014 22.9754 67.0834 23.0304C66.2154 23.3144 65.3804 24.3634 64.8374 25.2074C63.5194 27.3034 62.5884 29.8684 61.9154 32.3414C61.5764 33.8984 59.2364 33.4744 59.4834 31.8874C61.1774 22.5684 62.6884 13.3254 66.4944 4.52044C67.3884 2.46644 69.3334 -1.45156 72.1344 0.556442C74.1134 2.47744 73.0674 5.67344 72.5834 7.90044C70.9534 13.7884 67.3684 18.8604 63.9084 23.6104C62.9254 24.9014 60.9704 23.4694 61.9144 22.1434L61.9164 22.1404Z"
                  fill="black"
                />
                <path
                  d="M72.9834 25.5934C77.1944 21.2624 80.0594 15.8434 81.7804 10.1094C82.4204 7.89337 83.2784 5.27937 83.0564 3.23437C83.0804 3.27837 83.2054 3.41037 83.3754 3.45937C83.7474 3.52537 83.6784 3.43337 83.5784 3.51637C81.5764 5.38937 80.6184 8.31637 79.5094 10.8564C78.0554 14.6254 76.8324 18.5264 76.1394 22.4744C75.8184 25.1124 74.7764 28.3454 75.9264 30.6684C78.4084 33.2784 85.5194 27.6484 86.5724 25.1884C87.3024 23.7504 86.4354 22.9214 85.0664 23.8184C82.1154 25.6374 81.3114 30.3114 84.9574 31.7174C86.5854 32.0784 88.1404 30.4884 88.9234 29.0844C89.1284 28.7244 89.5864 28.5994 89.9454 28.8034C90.2854 28.9954 90.4034 29.4054 90.2684 29.7514C89.0234 34.2284 83.9624 36.0854 80.8354 31.9464C78.0624 28.5064 79.8974 23.3154 83.4534 21.1754C84.8624 20.2004 87.3724 19.9254 88.7244 21.3664C92.8384 26.0284 85.3764 31.6514 81.5204 33.4284C78.1494 35.1924 73.3784 34.7934 72.5304 30.3224C72.0354 27.4564 72.7074 24.5474 73.1244 21.9414C73.9144 17.7154 75.2174 13.7104 76.7734 9.78437C77.8004 7.32237 78.8854 4.75437 80.5594 2.53237C81.0354 1.92037 81.8664 1.00637 82.9174 0.730374C85.4114 0.151374 86.1704 2.73937 85.8964 4.57837C84.9284 10.9674 82.3754 17.1014 78.6834 22.3024C77.4174 24.0214 76.0724 25.6084 74.5324 27.1364C74.1034 27.5614 73.4114 27.5594 72.9864 27.1304C72.5624 26.7044 72.5654 26.0154 72.9844 25.5914L72.9834 25.5934Z"
                  fill="black"
                />
                <path
                  d="M46.6183 19.9315C47.9228 19.9315 48.9803 18.874 48.9803 17.5695C48.9803 16.265 47.9228 15.2075 46.6183 15.2075C45.3139 15.2075 44.2563 16.265 44.2563 17.5695C44.2563 18.874 45.3139 19.9315 46.6183 19.9315Z"
                  fill="#7B2553"
                />
              </svg>
            </span>
          </Link>

          <span className="hidden md:block h-6 w-0.5 bg-black" aria-hidden="true" />

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 mx-2 min-w-0">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded ${
                    isActive ? "text-primary" : "text-black hover:text-primary/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <span className="text-black text-sm font-bold uppercase tracking-wide whitespace-nowrap">
              عربي
            </span>
          </nav>
        </div>

        {/* Right: desktop social icons + mobile menu button */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Social icons (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map(({ name, href }) => {
              const Icon = socialIcons[name];
              return (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                </a>
              );
            })}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls={menuId}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <HamburgerIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-20 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-lg p-5">
            <nav id={menuId} className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-bold uppercase tracking-wide transition-colors px-3 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                      isActive ? "text-primary bg-primary/5" : "text-black hover:text-primary/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="h-px bg-black/10 my-2" aria-hidden="true" />

              <div className="flex items-center justify-between gap-3">
                <span className="text-black text-sm font-bold uppercase tracking-wide">
                  عربي
                </span>

                <div className="flex items-center gap-2">
                  {socialLinks.map(({ name, href }) => {
                    const Icon = socialIcons[name];
                    return (
                      <a
                        key={name}
                        href={href}
                        aria-label={name}
                        className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
