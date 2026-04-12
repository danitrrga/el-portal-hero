"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
            {/* Hero Content */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.2,
                        },
                    },
                }}
                className="flex flex-col items-center max-w-5xl mx-auto text-center"
            >
                {/* Headline */}
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[1.05] tracking-tight text-balance"
                >
                    Optimal organization{" "}
                    <br className="hidden sm:block" />
                    meets exquisite design
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                    className="mt-8 text-lg md:text-xl text-charcoal-light max-w-2xl leading-relaxed text-pretty"
                >
                    Transform your daily workflow into a seamless experience
                    with Portal&apos;s intuitive personal operating system.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                    className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="https://el-portal-app.vercel.app"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                    >
                        Get Started
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/methodology"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-charcoal rounded-full font-medium text-sm border border-charcoal/20 transition-all duration-300 hover:border-charcoal/40 hover:bg-charcoal/5"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="mt-20 w-full max-w-5xl mx-auto"
            >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/10 border border-charcoal/5">
                    <Image
                        src="/assets/showcase/dashboard_black.png"
                        alt="Portal Dashboard Preview"
                        width={1400}
                        height={800}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </motion.div>

            {/* Side navigation hints */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-20 left-8 hidden lg:flex flex-col items-center gap-3"
            >
                <Link
                    href="/manifesto"
                    className="group flex flex-col items-center text-charcoal-light hover:text-primary transition-colors duration-300"
                >
                    <span className="text-xs uppercase tracking-widest font-medium">Learn Our</span>
                    <span className="text-xs uppercase tracking-widest font-medium">Philosophy</span>
                    <div className="mt-2 w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-20 right-8 hidden lg:flex flex-col items-center gap-3"
            >
                <Link
                    href="/pricing"
                    className="group flex flex-col items-center text-charcoal-light hover:text-primary transition-colors duration-300"
                >
                    <span className="text-xs uppercase tracking-widest font-medium">View Our</span>
                    <span className="text-xs uppercase tracking-widest font-medium">Plans</span>
                    <div className="mt-2 w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}
