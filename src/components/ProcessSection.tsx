"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Define",
        description: "Set your north star goals and break them down into actionable cycles and daily habits.",
    },
    {
        number: "02",
        title: "Execute",
        description: "Track your deep work sessions and habits with beautiful, intuitive interfaces.",
    },
    {
        number: "03",
        title: "Reflect",
        description: "Review your progress, celebrate wins, and continuously optimize your systems.",
    },
];

export default function ProcessSection() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="py-24 md:py-32 px-6 bg-cream">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs uppercase tracking-widest font-semibold rounded-full mb-6">
                        Our Process
                    </span>
                    <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight tracking-tight text-balance max-w-3xl mx-auto">
                        A system that begins and ends with you
                    </h2>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >
                            {/* Number */}
                            <span className="block font-serif italic text-7xl md:text-8xl text-primary/20 leading-none mb-4">
                                {step.number}
                            </span>

                            {/* Content */}
                            <h3 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                                {step.title}
                            </h3>
                            <p className="text-charcoal-light leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-full w-12 h-px bg-charcoal/10 -translate-x-6" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <Link
                        href="/methodology"
                        className="group inline-flex items-center gap-2 text-primary font-medium transition-colors duration-300 hover:text-primary-dark"
                    >
                        Explore Our Methodology
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
