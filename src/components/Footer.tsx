"use client";

import Image from "next/image";
import Link from "next/link";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["600"],
});
const navBase =
    "font-[600] text-[15.67px] leading-none tracking-normal transition-colors";

const navInactive = "text-[#19140F] hover:text-[#7B2553]";
const navActive = "text-[#7B2553]";

export default function Footer() {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <footer className="bg-white px-6 md:px-16 pt-14 pb-6">
            {/* Main content */}
            <div className="max-w-[100rem] mx-auto flex items-end justify-between gap-12">
                {/* LEFT SIDE: logo + info + nav (together) */}
                <div className="flex items-end gap-20">
                    {/* Logo & Info */}
                    <div className="space-y-3">
                        <Image
                            src="/assets/logo-scribble.svg"
                            alt="Scribble"
                            width={150}
                            height={50}
                            className="object-contain"
                        />

                        <p className={`${rubik.className} font-[700] text-[14.61px] leading-none text-[#0A031A]`}>
                            At Scribble Production Company
                        </p>

                        <p className={`${rubik.className} font-[700] text-[14.61px] leading-none tracking-normal text-[#0A031A]`}>
                            PALESTINE, RAMALLAH, 00970 2 2975232
                        </p>
                    </div>

                    {/* Navigation (2 columns) */}
                    <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className={`${navBase} ${isActive("/") ? navActive : navInactive}`}>
                                HOME
                            </Link>
                            <Link href="/about" className={`${navBase} ${isActive("/about") ? navActive : navInactive}`}>
                                ABOUT US
                            </Link>
                            <Link href="/services" className={`${navBase} ${isActive("/services") ? navActive : navInactive}`}>
                                SERVICES
                            </Link>
                        </nav>

                        <nav className="flex flex-col gap-4">
                            <Link href="/portfolio" className={`${navBase} ${isActive("/portfolio") ? navActive : navInactive}`}>
                                PORTFOLIO
                            </Link>
                            <Link href="/contact" className={`${navBase} ${isActive("/contact") ? navActive : navInactive}`}>
                                CONTACT US
                            </Link>
                            <Link href="/jobs" className={`${navBase} ${isActive("/jobs") ? navActive : navInactive}`}>
                                JOBS
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* RIGHT SIDE: character */}
                <div className="shrink-0">
                    <Image
                        src="/assets/character.png"
                        alt="Scribble Character"
                        width={170}
                        height={170}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-[100rem] mx-auto mt-8">
                <div className="h-px bg-[#8B1E4D]" />
            </div>

            {/* Bottom */}
            <div className="max-w-[100rem] mx-auto mt-2 text-right text-xs font-medium text-gray-900">
                © 2016 SCRIBBLE. All rights reserved
            </div>
        </footer>
    );
}
