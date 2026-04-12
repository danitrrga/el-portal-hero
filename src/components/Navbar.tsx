"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/manifesto", label: "Manifesto" },
    { href: "/methodology", label: "Methodology" },
    { href: "/changelog", label: "Changelog" },
    { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-cream/90 backdrop-blur-xl border-b border-charcoal/5 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1">
                        <span className="font-serif italic text-2xl text-charcoal tracking-tight">
                            Portal
                        </span>
                    </Link>

                    {/* Desktop Nav Links - Center */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors duration-300 ${
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-charcoal-light hover:text-charcoal"
                                }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://el-portal-app.vercel.app/login"
                            className="hidden sm:block text-sm font-medium text-charcoal-light hover:text-charcoal transition-colors duration-300"
                        >
                            Log in
                        </Link>
                        <Link
                            href="https://el-portal-app.vercel.app"
                            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden w-10 h-10 flex items-center justify-center text-charcoal hover:text-primary transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-cream border-t border-charcoal/5 overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block py-3 text-base font-medium transition-colors duration-300 ${
                                            pathname === link.href
                                                ? "text-primary"
                                                : "text-charcoal-light hover:text-charcoal"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="pt-4 border-t border-charcoal/10"
                            >
                                <Link
                                    href="https://el-portal-app.vercel.app/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-3 text-base font-medium text-charcoal-light hover:text-charcoal transition-colors duration-300"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="https://el-portal-app.vercel.app"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-2 block w-full text-center px-5 py-3 bg-primary text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-dark"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
