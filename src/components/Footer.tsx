"use client";

import Image from "next/image";
import Link from "next/link";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";
import { localeHref } from "@/lib/locale-utils";
import { getTranslations, type Locale } from "@/lib/translations";

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

export default function Footer({ locale }: { locale: Locale }) {
    const pathname = usePathname();
    const t = getTranslations(locale);
    const usePrimaryFooter = pathname === "/about" || pathname === "/services" || pathname === "/contact";

    const isActive = (href: string) => pathname === href;

    const footerBg = usePrimaryFooter ? "bg-[#7B2553]" : "bg-white";
    const infoColor = usePrimaryFooter ? "text-white/90" : "text-[#0A031A]";
    const navLinkClass = (href: string) =>
        `${navBase} ${usePrimaryFooter ? (isActive(href) ? navActiveOnPrimary : navInactiveOnPrimary) : (isActive(href) ? navActive : navInactive)}`;
    const dividerClass = usePrimaryFooter ? "bg-white/30" : "bg-[#8B1E4D]";
    const copyrightClass = usePrimaryFooter ? "text-white/80" : "text-gray-900";

    return (
        <footer className={`${footerBg} px-6 md:px-16 pt-12 pb-6`}>
            <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">

                {/* LEFT */}
                <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-20 w-full">

                    {/* Logo & Info */}
                    <div className="space-y-3">
                        <Image src="/assets/logo-scribble.svg" alt="Scribble" width={150} height={50} className={usePrimaryFooter ? "brightness-0 invert" : undefined} />
                        <p className={`${rubik.className} font-[700] text-[14.61px] leading-none ${infoColor}`}>
                            {t.footer.atScribble}
                        </p>
                        <p className={`${rubik.className} font-[700] text-[14.61px] leading-none ${infoColor}`}>
                            {t.footer.address}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-6 md:mt-0">
                        <nav className="flex flex-col gap-4">
                            <Link href={localeHref("/", locale)} className={navLinkClass("/")}>{t.nav.home}</Link>
                            <Link href={localeHref("/about", locale)} className={navLinkClass("/about")}>{t.nav.aboutUs}</Link>
                            <Link href={localeHref("/services", locale)} className={navLinkClass("/services")}>{t.nav.services}</Link>
                        </nav>
                        <nav className="flex flex-col gap-4">
                            <Link href={localeHref("/portfolio", locale)} className={navLinkClass("/portfolio")}>{t.nav.portfolio}</Link>
                            <Link href={localeHref("/contact", locale)} className={navLinkClass("/contact")}>{t.nav.contactUs}</Link>
                            <Link href={localeHref("/jobs", locale)} className={navLinkClass("/jobs")}>{t.nav.jobs}</Link>
                        </nav>
                    </div>
                </div>

                {/* End side (right in LTR, left in RTL) */}
                <div className="shrink-0 self-end md:self-auto mx-auto md:mx-0">
                    <Image src="/assets/character.png" alt="Scribble Character" width={170} height={170} />
                </div>
            </div>

            <div className="max-w-[100rem] mx-auto mt-6">
                <div className={`h-px ${dividerClass}`} />
            </div>

            <div className={`max-w-[100rem] mx-auto mt-3 text-center md:text-end text-xs font-medium ${copyrightClass}`}>
                {t.footer.copyright}
            </div>
        </footer>

    );
}
