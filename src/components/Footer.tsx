"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white px-6 md:px-16 pt-16 pb-8">
            {/* Main content */}
            <div className="max-w-[100rem]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                {/* Left: Logo & Info */}
                <div className="space-y-4">
                    <Image
                        src="/assets/logo-scribble.svg"
                        alt="Scribble"
                        width={140}
                        height={50}
                        className="object-contain"
                    />

                    <p className="text-sm text-gray-700 max-w-xs">
                        At Scribble Production Company
                    </p>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        PALESTINE, RAMALLAH<br />
                        00970 2 2975232
                    </p>
                </div>

                {/* Center: Navigation */}
                <div className="grid grid-cols-2 gap-6 text-sm font-medium">
                    <nav className="flex flex-col space-y-3">
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

                    <nav className="flex flex-col space-y-3">
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
                <div className="flex md:justify-end justify-center">
                    <Image
                        src="/assets/character.png"
                        alt="Scribble Character"
                        width={160}
                        height={160}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-[100rem] mx-auto mt-8">
                <div className="h-px bg-[#8B1E4D]" />
            </div>

            {/* Bottom */}
            <div className="max-w-[100rem] mx-auto mt-3 text-right text-sm text-gray-700">
                © 2016 SCRIBBLE. All rights reserved
            </div>
        </footer>
    );
}
