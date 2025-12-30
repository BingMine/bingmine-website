"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full relative z-50">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
                <div className="flex items-center justify-between">

                    {/* LEFT: Logo */}
                    <Link href="/" className="flex items-center z-50">
                        <div className="relative h-12 w-32">
                            <Image
                                src="/assets/logo.png"
                                alt="BingMine Logo"
                                fill
                                priority
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* CENTER: Nav Links (Desktop) */}
                    <div className="hidden lg:flex items-center gap-12 text-gray-700 text-lg font-semibold">
                        <Link href="#" className="hover:text-brand-primary transition">
                            Home
                        </Link>
                        <Link href="#" className="hover:text-brand-primary transition">
                            Feature
                        </Link>
                        <Link href="#" className="hover:text-brand-primary transition">
                            Product
                        </Link>
                        <Link href="#" className="hover:text-brand-primary transition">
                            FAQ
                        </Link>
                    </div>

                    {/* RIGHT: Auth Buttons (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            className="flex items-center justify-center w-[100px] h-[50px] gap-[10px] rounded-[20px] text-gray-700 font-medium transition hover:opacity-80"
                            style={{
                                background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(91.05deg, #2C6975 0.24%, #68B2A0 100%) border-box",
                                border: "1px solid transparent",
                            }}
                        >
                            Login
                        </button>
                        <button className="flex items-center justify-center w-[100px] h-[50px] gap-[10px] rounded-[20px] bg-[linear-gradient(91.05deg,#2C6975_0.24%,#68B2A0_100%)] text-white font-medium hover:opacity-90 transition">
                            Sign up
                        </button>
                    </div>

                    {/* MOBILE TOGGLE (Visible < lg) */}
                    <button 
                        className="lg:hidden text-3xl text-gray-700 z-50 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                    </button>

                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div 
                className={`
                    fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out lg:hidden
                    ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
                `}
            >
                {/* Mobile Links */}
                <div className="flex flex-col items-center gap-8 text-gray-700 text-xl font-semibold">
                    <Link href="#" className="hover:text-brand-primary transition" onClick={() => setIsMobileMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="#" className="hover:text-brand-primary transition" onClick={() => setIsMobileMenuOpen(false)}>
                        Feature
                    </Link>
                    <Link href="#" className="hover:text-brand-primary transition" onClick={() => setIsMobileMenuOpen(false)}>
                        Product
                    </Link>
                    <Link href="#" className="hover:text-brand-primary transition" onClick={() => setIsMobileMenuOpen(false)}>
                        FAQ
                    </Link>
                </div>

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col items-center gap-4 mt-4">
                    <button
                        className="flex items-center justify-center w-[120px] h-[50px] gap-[10px] rounded-[20px] text-gray-700 font-medium transition hover:opacity-80"
                        style={{
                            background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(91.05deg, #2C6975 0.24%, #68B2A0 100%) border-box",
                            border: "1px solid transparent",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </button>
                    <button 
                        className="flex items-center justify-center w-[120px] h-[50px] gap-[10px] rounded-[20px] bg-[linear-gradient(91.05deg,#2C6975_0.24%,#68B2A0_100%)] text-white font-medium hover:opacity-90 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
