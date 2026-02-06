"use client";

import Image from "next/image";
import Link from "next/link";
import { Rubik } from "next/font/google";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["600"],
});

export default function Footer() {
    return (
        <footer className="bg-white px-6 md:px-16 pt-14 pb-6">
            {/* Main content */}
            <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 items-start">

                {/* Left: Logo & Info */}
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
                        PALESTINE, RAMALLAH<br />
                        00970 2 2975232
                    </p>

                </div>

                {/* Center: Navigation */}
                <div className="grid grid-cols-2 gap-x-12 text-sm font-semibold text-gray-900 mt-2">
                    <nav className="flex flex-col space-y-4">
                        <Link href="/" className="hover:text-[#8B1E4D] transition">
                            HOME
                        </Link>
                        <Link href="/about" className="hover:text-[#8B1E4D] transition">
                            ABOUT US
                        </Link>
                        <Link href="/services" className="hover:text-[#8B1E4D] transition">
                            SERVICES
                        </Link>
                    </nav>

                    <nav className="flex flex-col space-y-4">
                        <Link href="/portfolio" className="hover:text-[#8B1E4D] transition">
                            PORTFOLIO
                        </Link>
                        <Link href="/contact" className="hover:text-[#8B1E4D] transition">
                            CONTACT US
                        </Link>
                        <Link href="/jobs" className="hover:text-[#8B1E4D] transition">
                            JOBS
                        </Link>
                    </nav>
                </div>

                {/* Right: Illustration */}
                <div className="flex justify-center md:justify-end">
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
