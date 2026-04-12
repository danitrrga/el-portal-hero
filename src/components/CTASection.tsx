"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section className="py-24 md:py-32 px-6 bg-primary relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-dark/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-4xl mx-auto text-center z-10"
            >
                <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-8 text-balance">
                    Ready to transform your productivity?
                </h2>

                <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of high performers who use Portal to
                    optimize their lives and achieve their goals.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="https://el-portal-app.vercel.app"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium text-sm transition-all duration-300 hover:bg-cream hover:shadow-xl hover:shadow-black/10"
                    >
                        Start for Free
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span className="text-sm font-medium text-white/60">
                        No credit card required
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
