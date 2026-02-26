"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 backdrop-blur-xl border-b border-white/5 bg-background-base/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/30 rounded-full blur-md"></div>
                            <span className="font-bold text-2xl text-white tracking-tighter relative z-10">
                                P<span className="text-primary-glow">O</span>RTAL
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
                        <Link
                            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
                            href="#features"
                        >
                            Features
                        </Link>
                        <Link
                            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
                            href="#manifesto"
                        >
                            Manifesto
                        </Link>
                        <Link
                            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
                            href="#changelog"
                        >
                            Changelog
                        </Link>
                        <Link
                            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
                            href="#pricing"
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        <Link
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block"
                            href="#"
                        >
                            Log in
                        </Link>
                        <Link
                            className="bg-white/5 hover:bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg border border-white/10 transition-all backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-primary/20 hover:border-primary/30"
                            href="#"
                        >
                            Download
                        </Link>
                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden text-slate-400 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-icons text-2xl">
                                {mobileMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/5 bg-background-base/95 backdrop-blur-xl">
                    <div className="px-4 py-4 space-y-3">
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
                            href="#features"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
                            href="#manifesto"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Manifesto
                        </Link>
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
                            href="#changelog"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Changelog
                        </Link>
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
                            href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            className="block text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
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
