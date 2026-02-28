"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-3xl border-b border-slate-800/50 shadow-2xl shadow-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-bold text-2xl text-white tracking-tighter relative z-10 flex items-center">
                            P
                            <img src="/icon.svg" alt="El Portal Icon" className="w-[1em] h-[1em] mx-[1px] pl-0px pr-0px" />
                            RTAL
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
                        <Link
                            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(30,64,175,0.5)] transition-all duration-300"
                            href="/manifesto"
                        >
                            Manifesto
                        </Link>
                        <Link
                            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(30,64,175,0.5)] transition-all duration-300"
                            href="/changelog"
                        >
                            Changelog
                        </Link>
                        <Link
                            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(30,64,175,0.5)] transition-all duration-300"
                            href="/methodology"
                        >
                            Methodology
                        </Link>
                        <Link
                            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(30,64,175,0.5)] transition-all duration-300"
                            href="/pricing"
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        <Link
                            className="text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 hidden sm:block"
                            href="#"
                        >
                            Log in
                        </Link>
                        <Link
                            className="bg-slate-900/50 hover:bg-slate-800/70 text-white text-sm font-medium px-5 py-2.5 rounded-xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-black/20 hover:shadow-[0_0_20px_5px_rgba(30,64,175,0.2)]"
                            href="#"
                        >
                            Download
                        </Link>
                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden text-slate-400 hover:text-white transition-all duration-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-3xl">
                    <div className="px-4 py-4 space-y-3">
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 py-2"
                            href="/manifesto"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Manifesto
                        </Link>
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 py-2"
                            href="/changelog"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Changelog
                        </Link>
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 py-2"
                            href="/methodology"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Methodology
                        </Link>
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 py-2"
                            href="/pricing"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 py-2"
                            href="#"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
