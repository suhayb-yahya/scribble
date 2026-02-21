"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { Rubik } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const rubik = Rubik({
    subsets: ["latin", "arabic"],
    weight: ["600"],
});
const navBase =
    "font-[600] text-sm md:text-[15.67px] leading-none tracking-normal transition-colors";

const navInactive = "text-[#19140F] hover:text-[#7B2553]";
const navActive = "text-[#7B2553]";
const navInactiveOnPrimary = "text-white/90 hover:text-white";
const navActiveOnPrimary = "text-white";

export default function Footer() {
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("footer");
    const isRtl = locale === "ar";
    const usePrimaryFooter = pathname === "/about" || pathname === "/services" || pathname === "/contact";

    const isActive = (href: string) => pathname === href;

    const footerBg = usePrimaryFooter ? "bg-[#7B2553]" : "bg-white";
    const infoColor = usePrimaryFooter ? "text-white/90" : "text-[#0A031A]";
    const navLinkClass = (href: string) =>
        `${navBase} ${usePrimaryFooter ? (isActive(href) ? navActiveOnPrimary : navInactiveOnPrimary) : (isActive(href) ? navActive : navInactive)}`;
    const dividerClass = usePrimaryFooter ? "bg-white/30" : "bg-[#8B1E4D]";
    const copyrightClass = usePrimaryFooter ? "text-white/80" : "text-gray-900";

    return (
        <footer className={`${footerBg} pt-10 pb-6 md:pt-12`}>
            <div className="content-nav-aligned flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-12">

                {/* LEFT */}
                <div className={`flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-20 w-full text-center ${isRtl ? "md:text-right" : "md:text-left"}`} dir={isRtl ? "rtl" : undefined}>
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-20 w-full">
                        {/* Logo & Info */}
                        <div className={`space-y-3 flex flex-col items-center ${isRtl ? "md:items-end" : "md:items-start"}`}>
                            <Image src="/assets/logo-scribble.svg" alt="Scribble" width={150} height={50} className={`${usePrimaryFooter ? "brightness-0 invert" : ""} w-[120px] md:w-[150px] h-auto`} />
                            <p className={`${rubik.className} font-[700] text-sm md:text-[14.61px] leading-snug ${infoColor}`}>
                                {t("atScribble")}
                            </p>
                            <p className={`${rubik.className} font-[700] text-sm md:text-[14.61px] leading-snug ${infoColor}`}>
                                {t("address")}{" "}
                                <span dir="ltr">{t("addressPhone")}</span>
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 md:gap-y-4">
                            <nav className="flex flex-col gap-3 md:gap-4">
                                <Link href="/" className={navLinkClass("/")}>{t("home")}</Link>
                                <Link href="/about" className={navLinkClass("/about")}>{t("aboutUs")}</Link>
                                <Link href="/services" className={navLinkClass("/services")}>{t("services")}</Link>
                            </nav>
                            <nav className="flex flex-col gap-3 md:gap-4">
                                <Link href="/portfolio" className={navLinkClass("/portfolio")}>{t("portfolio")}</Link>
                                <Link href="/contact" className={navLinkClass("/contact")}>{t("contactUs")}</Link>
                                <Link href="/jobs" className={navLinkClass("/jobs")}>{t("jobs")}</Link>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* RIGHT - Character */}
                <div className="shrink-0 self-center">
                    <Image src="/assets/character.png" alt="Scribble Character" width={170} height={170} className="w-24 h-auto md:w-[170px] md:h-[170px]" />
                </div>
            </div>

            <div className="content-nav-aligned mt-6">
                <div className={`h-px ${dividerClass}`} />
            </div>

            <div className={`content-nav-aligned mt-4 md:mt-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 text-xs font-medium ${copyrightClass}`} dir={isRtl ? "rtl" : undefined}>
                <div className={`text-center ${isRtl ? "sm:text-right" : "sm:text-left"} ${copyrightClass} opacity-80`}>
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
                <div className={`text-center ${isRtl ? "sm:text-left" : "sm:text-right"}`}>{t("copyright")}</div>
            </div>
        </footer>

    );
}
