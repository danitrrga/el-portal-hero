"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Layers, Zap, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Target,
        title: "Goal Alignment",
        description: "Connect daily habits to your north star vision with intelligent goal tracking and progress visualization.",
    },
    {
        icon: Layers,
        title: "Deep Work Cycles",
        description: "Track focused work sessions with our proven cycle methodology for sustainable high performance.",
    },
    {
        icon: Zap,
        title: "Habit Systems",
        description: "Build lasting habits with drag-and-drop simplicity and science-backed streak mechanics.",
    },
    {
        icon: BarChart3,
        title: "Performance Analytics",
        description: "Gain insights into your productivity patterns with beautiful, actionable dashboards.",
    },
];

export default function FeaturesSection() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="py-24 md:py-32 px-6 bg-warm-white">
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
                        Features
                    </span>
                    <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight tracking-tight text-balance max-w-3xl mx-auto">
                        Everything you need to optimize your life
                    </h2>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative p-8 md:p-10 bg-cream rounded-2xl border border-charcoal/5 transition-all duration-400 hover:shadow-xl hover:shadow-charcoal/5 hover:border-charcoal/10"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-semibold text-charcoal mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-charcoal-light leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover accent */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
