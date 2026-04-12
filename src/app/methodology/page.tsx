"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CycleBentoCard } from "@/components/animations/CycleBentoCard";
import { DynamicPerformanceScore } from "@/components/animations/DynamicPerformanceScore";
import { TaskProgressionCard } from "@/components/animations/TaskProgressionCard";
import { CycleProgressionChart } from "@/components/animations/CycleProgressionChart";
import { VersionSelector } from "@/components/animations/VersionSelector";
import { DayBentoCard } from "@/components/animations/DayBentoCard";
import { ArrowRight, Layers, Target, Calendar, ChevronDown } from "lucide-react";

const modalities = [
    {
        icon: "visibility",
        title: "Visualization (Cinema Mode)",
        description: "A full-screen, minimalist, Zen-mode environment. Features 5 persistent slides: Me, Her, Purpose, Social, Material Life. Each slide consists of an editable image and dynamic caption text.",
    },
    {
        icon: "inventory_2",
        title: "The Archives (Knowledge Base)",
        description: "Text/Markdown-driven database entries that act as the permanent mental cache. Includes: My Routines, Mantra Archive, Life To-Do List, 5-Year Vision, and Theory Notes.",
    },
    {
        icon: "monitoring",
        title: "Analytics & Intelligence",
        description: "In-depth visualization of consistency: weekly progress plots, GitHub-style heatmaps, and aggregated 15-day / 90-day performance reviews with dynamic edge-case handling.",
    },
];

export default function MethodologyPage() {
    const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [gridRef, gridInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [modalitiesRef, modalitiesInView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <div className="relative w-full overflow-x-hidden bg-cream min-h-screen">
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
                    <motion.div
                        ref={heroRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs uppercase tracking-widest font-semibold rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Protocol v2.4
                        </span>

                        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight tracking-tight mb-6 text-balance">
                            The Engine
                        </h1>

                        <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed mb-10">
                            A high-fidelity behavioral feedback system designed for temporal hierarchy and peak performance optimization.
                        </p>

                        <Link
                            href="https://el-portal-app.vercel.app"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                        >
                            Explore Protocol
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </section>

                {/* Temporal Hierarchy Grid */}
                <section className="py-20 md:py-28 px-6 bg-warm-white">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            ref={gridRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={gridInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                Temporal Hierarchy
                            </span>
                            <div className="flex-1 h-px bg-charcoal/10" />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden shadow-sm"
                            >
                                <VersionSelector />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden shadow-sm"
                            >
                                <CycleBentoCard />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden shadow-sm"
                            >
                                <DayBentoCard />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Performance Dashboard */}
                <section className="py-20 md:py-28 px-6 bg-cream">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden shadow-sm p-6 md:p-8">
                            <DynamicPerformanceScore />
                        </div>
                    </div>
                </section>

                {/* Goal Architecture Grid */}
                <section className="py-20 md:py-28 px-6 bg-warm-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                Goal Architecture
                            </span>
                            <div className="flex-1 h-px bg-charcoal/10" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden shadow-sm">
                                <CycleProgressionChart />
                            </div>
                            <div className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden shadow-sm">
                                <TaskProgressionCard />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Modalities */}
                <section className="py-20 md:py-28 px-6 bg-cream">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            ref={modalitiesRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={modalitiesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center mb-16"
                        >
                            <h2 className="font-serif italic text-4xl md:text-5xl text-charcoal mb-4">
                                Core Modalities
                            </h2>
                            <p className="text-charcoal-light text-lg">
                                The distinct interaction paradigms governing the Portal system.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {modalities.map((modality, index) => (
                                <motion.details
                                    key={modality.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={modalitiesInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="group bg-white rounded-xl border border-charcoal/5 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                                    open={index === 0}
                                >
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-primary text-xl">
                                                    {modality.icon}
                                                </span>
                                            </div>
                                            <span className="font-semibold text-charcoal">
                                                {modality.title}
                                            </span>
                                        </div>
                                        <ChevronDown className="w-5 h-5 text-charcoal-light transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <div className="px-6 pb-6 pt-2 pl-20 text-charcoal-light leading-relaxed">
                                        {modality.description}
                                    </div>
                                </motion.details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
