"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Fingerprint, Cpu, Terminal } from "lucide-react";

const STAGGER_DELAY = 0.15;

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: STAGGER_DELAY,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom Raycast-style easing
        },
    },
};

export default function NorthStarSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="space-y-10"
            >
                {/* Hero Statement */}
                <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-[family-name:var(--font-instrument-serif)] italic tracking-tight leading-tight">
                        "Build tools so refined they disappear — leaving only the creator and the craft."
                    </h2>
                    <div className="flex items-center justify-center gap-3 text-zinc-500 uppercase tracking-widest text-xs font-semibold">
                        <span className="w-8 h-px bg-zinc-800"></span>
                        Our North Star
                        <span className="w-8 h-px bg-zinc-800"></span>
                    </div>
                </motion.div>

                {/* 3-Column Bento Grid */}
                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* The System: Version */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full group/card card-glow relative overflow-hidden border-zinc-800 bg-zinc-900/80 backdrop-blur-xl shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] transition-all duration-300 ease-out hover:border-blue-500/30">
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-700/[0.03] to-transparent" />
                            <CardHeader className="relative pb-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-950/50 border border-white/5 flex items-center justify-center mb-6 transition-colors duration-300 group-hover/card:border-blue-500/30">
                                    <Fingerprint className="w-6 h-6 text-blue-500/70 group-hover/card:text-blue-400 transition-colors duration-300" />
                                </div>
                                <CardTitle className="text-white font-bold text-lg tracking-tight">The System</CardTitle>
                                <CardDescription className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Version / Identity</CardDescription>
                            </CardHeader>
                            <CardContent className="relative">
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    The architectural foundation. 90-day identity phases where macro goals are defined and past versions are permanently archived.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* The Engine: Cycle */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full group/card card-glow relative overflow-hidden border-zinc-800 bg-zinc-900/80 backdrop-blur-xl shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] transition-all duration-300 ease-out hover:border-blue-500/30">
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-700/[0.03] to-transparent" />
                            <CardHeader className="relative pb-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-950/50 border border-white/5 flex items-center justify-center mb-6 transition-colors duration-300 group-hover/card:border-blue-500/30">
                                    <Cpu className="w-6 h-6 text-blue-500/70 group-hover/card:text-blue-400 transition-colors duration-300" />
                                </div>
                                <CardTitle className="text-white font-bold text-lg tracking-tight">The Engine</CardTitle>
                                <CardDescription className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Cycle / Strategy</CardDescription>
                            </CardHeader>
                            <CardContent className="relative">
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Our 15-day tactical sprint. This is where behaviors are monitored, performance is snapshotted, and habits transition dynamically.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* The Execution: Day */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full group/card card-glow relative overflow-hidden border-zinc-800 bg-zinc-900/80 backdrop-blur-xl shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] transition-all duration-300 ease-out hover:border-blue-500/30">
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-700/[0.03] to-transparent" />
                            <CardHeader className="relative pb-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-950/50 border border-white/5 flex items-center justify-center mb-6 transition-colors duration-300 group-hover/card:border-blue-500/30">
                                    <Terminal className="w-6 h-6 text-blue-500/70 group-hover/card:text-blue-400 transition-colors duration-300" />
                                </div>
                                <CardTitle className="text-white font-bold text-lg tracking-tight">The Execution</CardTitle>
                                <CardDescription className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Day / Action</CardDescription>
                            </CardHeader>
                            <CardContent className="relative">
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    The pure unit of progress. Logs are strict, daily performance scores are deterministic, and consistency is the only metric that matters.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
