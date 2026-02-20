"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { Rubik } from "next/font/google";
import { useTranslations } from "next-intl";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["600"],
});
const navBase =
    "font-[600] text-[15.67px] leading-none tracking-normal transition-colors";

const navInactive = "text-[#19140F] hover:text-[#7B2553]";
const navActive = "text-[#7B2553]";
const navInactiveOnPrimary = "text-white/90 hover:text-white";
const navActiveOnPrimary = "text-white";

export default function Footer() {
    const pathname = usePathname();
    const t = useTranslations("footer");
    const usePrimaryFooter = pathname === "/about" || pathname === "/services" || pathname === "/contact";

    const isActive = (href: string) => pathname === href;

    const footerBg = usePrimaryFooter ? "bg-[#7B2553]" : "bg-white";
    const infoColor = usePrimaryFooter ? "text-white/90" : "text-[#0A031A]";
    const navLinkClass = (href: string) =>
        `${navBase} ${usePrimaryFooter ? (isActive(href) ? navActiveOnPrimary : navInactiveOnPrimary) : (isActive(href) ? navActive : navInactive)}`;
    const dividerClass = usePrimaryFooter ? "bg-white/30" : "bg-[#8B1E4D]";
    const copyrightClass = usePrimaryFooter ? "text-white/80" : "text-gray-900";

    return (
        <footer className={`${footerBg} pt-12 pb-6`}>
            <div className="content-nav-aligned flex flex-col md:flex-row items-start md:items-end justify-between gap-12">

                {/* LEFT */}
                <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-20 w-full">

                    {/* Logo & Info */}
                    <div className="space-y-3">
                        <Image src="/assets/logo-scribble.svg" alt="Scribble" width={150} height={50} className={usePrimaryFooter ? "brightness-0 invert" : undefined} />
                        <p className={`${rubik.className} font-[700] text-[14.61px] leading-none ${infoColor}`}>
                            {t("atScribble")}
                        </p>
                        <p className={`${rubik.className} font-[700] text-[14.61px] leading-none ${infoColor}`}>
                            {t("address")}{" "}
                            <span dir="ltr">{t("addressPhone")}</span>
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-6 md:mt-0">
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className={navLinkClass("/")}>{t("home")}</Link>
                            <Link href="/about" className={navLinkClass("/about")}>{t("aboutUs")}</Link>
                            <Link href="/services" className={navLinkClass("/services")}>{t("services")}</Link>
                        </nav>
                        <nav className="flex flex-col gap-4">
                            <Link href="/portfolio" className={navLinkClass("/portfolio")}>{t("portfolio")}</Link>
                            <Link href="/contact" className={navLinkClass("/contact")}>{t("contactUs")}</Link>
                            <Link href="/jobs" className={navLinkClass("/jobs")}>{t("jobs")}</Link>
                        </nav>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="shrink-0 self-end md:self-auto mx-auto md:mx-0">
                    <Image src="/assets/character.png" alt="Scribble Character" width={170} height={170} />
                </div>
            </div>

            <div className="content-nav-aligned mt-6">
                <div className={`h-px ${dividerClass}`} />
            </div>

            <div className={`content-nav-aligned mt-3 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2 text-xs font-medium ${copyrightClass}`}>
                <div className={`text-left ${copyrightClass} opacity-80`}>
                    {t("poweredBy")}{" "}
                    <a
                        href="https://techvara.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline hover:opacity-100 transition-opacity ${usePrimaryFooter ? "text-white" : "text-[#7B2553]"}`}
                    >
                        TechVara
                    </a>
                </div>
                <div className="text-center sm:text-right">{t("copyright")}</div>
            </div>
        </footer>

    );
}
