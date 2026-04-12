"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
    product: [
        { label: "Features", href: "/#features" },
        { label: "Methodology", href: "/methodology" },
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "/changelog" },
    ],
    company: [
        { label: "Manifesto", href: "/manifesto" },
        { label: "About", href: "/manifesto" },
    ],
    legal: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white py-16 md:py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="font-serif italic text-2xl text-white">
                                Portal
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Your personal operating system for achieving peak performance and life optimization.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/40">
                        {new Date().getFullYear()} Portal. All rights reserved.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="https://el-portal-app.vercel.app"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/20"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </div>

                {/* Large Brand Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 text-center overflow-hidden"
                >
                    <span className="font-serif italic text-[clamp(4rem,15vw,12rem)] text-white/5 leading-none select-none">
                        Portal
                    </span>
                </motion.div>
            </div>
        </footer>
    );
}
