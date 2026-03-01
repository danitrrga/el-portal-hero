"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Fingerprint, Cpu, Terminal } from "lucide-react";

// Stagger variants for the Bento grid
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function SystemBlueprintSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section id="methodology" className="py-24 lg:py-32 bg-zinc-950 relative z-10 border-t border-white/5 font-sans overflow-hidden">
            <div className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
                    className="mb-20 space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-5xl text-zinc-100 font-bold leading-[1.05] tracking-tighter max-w-3xl">
                        Identity modeled through strict temporal hierarchies.
                    </h2>
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-zinc-400 text-[11px] font-medium border border-zinc-800 px-1.5 py-0.5 rounded uppercase tracking-wider">
                            v4.0.2
                        </span>
                        <p className="text-zinc-500 text-sm font-normal">
                            System Architecture Substrate — Active Execution Layer
                        </p>
                    </div>
                </motion.div>

                {/* Temporal Hierarchy (3-Column Bento Grid) */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
                >
                    {/* Version */}
                    <motion.div variants={itemVariants}>
                        <div className="h-full group relative overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded p-5 flex flex-col justify-between min-h-[160px] transition-all duration-300 ease-out hover:bg-zinc-900/60 shadow-[0_0_20px_-10px_rgba(255,255,255,0.05)]">
                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-0.5">
                                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest font-mono">Version (90D)</p>
                                    <h3 className="text-zinc-100 text-3xl font-black tracking-tight group-hover:text-zinc-50 transition-colors">v4.0</h3>
                                </div>
                                <Fingerprint className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-zinc-500 text-[11px] font-medium group-hover:text-zinc-400 transition-colors">+2.4%</span>
                                <div className="h-0.5 flex-1 bg-zinc-800/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-600 w-3/4 group-hover:bg-zinc-500 transition-colors duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cycle */}
                    <motion.div variants={itemVariants}>
                        <div className="h-full group relative overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded p-5 flex flex-col justify-between min-h-[160px] transition-all duration-300 ease-out hover:bg-zinc-900/60 shadow-[0_0_20px_-10px_rgba(255,255,255,0.05)]">
                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-0.5">
                                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest font-mono">Cycle (15D)</p>
                                    <h3 className="text-zinc-100 text-3xl font-black tracking-tight group-hover:text-zinc-50 transition-colors">C-12</h3>
                                </div>
                                <Cpu className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-zinc-500 text-[11px] font-medium group-hover:text-zinc-400 transition-colors">+0.8%</span>
                                <div className="h-0.5 flex-1 bg-zinc-800/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-600 w-1/2 group-hover:bg-zinc-500 transition-colors duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Day */}
                    <motion.div variants={itemVariants}>
                        <div className="h-full group relative overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded p-5 flex flex-col justify-between min-h-[160px] transition-all duration-300 ease-out hover:bg-zinc-900/60 shadow-[0_0_20px_-10px_rgba(255,255,255,0.05)]">
                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-0.5">
                                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest font-mono">Day (Execution)</p>
                                    <h3 className="text-zinc-100 text-3xl font-black tracking-tight group-hover:text-zinc-50 transition-colors">Active</h3>
                                </div>
                                <Terminal className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-zinc-500 text-[11px] font-medium group-hover:text-zinc-400 transition-colors">-0.2%</span>
                                <div className="h-0.5 flex-1 bg-zinc-800/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-600 w-1/3 group-hover:bg-zinc-500 transition-colors duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Goal Architecture (2 Columns below) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                >
                    {/* Left: Type A (Asymptotic Consistency) */}
                    <motion.div variants={itemVariants}>
                        <div className="h-full bg-zinc-900/40 backdrop-blur-xl rounded border border-white/5 p-6 shadow-[0_0_20px_-10px_rgba(255,255,255,0.05)] space-y-4 hover:bg-zinc-900/60 transition-colors duration-300">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="text-zinc-100 text-lg font-bold tracking-tight">Asymptotic Streaks</h4>
                                    <p className="text-zinc-600 text-[11px] font-mono uppercase tracking-tight mt-1">Real-time performance metrics</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-zinc-100 text-2xl font-black font-mono tracking-tighter">98.42</p>
                                    <p className="text-zinc-500 text-[10px] font-mono">+0.04% Δ</p>
                                </div>
                            </div>

                            {/* Vector Graph */}
                            <div className="relative pt-2 pb-1">
                                <svg className="w-full h-32 overflow-visible" viewBox="0 0 500 150">
                                    <motion.path
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                                        d="M0 120 Q 50 110, 100 130 T 200 80 T 300 100 T 400 40 T 500 60"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.15)"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                    ></motion.path>
                                    <g className="font-mono text-[11px] fill-zinc-500">
                                        <text x="0" y="145">00:00</text>
                                        <text x="125" y="145">06:00</text>
                                        <text x="250" y="145">12:00</text>
                                        <text x="375" y="145">18:00</text>
                                        <text x="465" y="145">23:59</text>
                                    </g>
                                    <line stroke="white" strokeDasharray="2" strokeOpacity="0.03" x1="0" x2="500" y1="20" y2="20"></line>
                                    <line stroke="white" strokeDasharray="2" strokeOpacity="0.03" x1="0" x2="500" y1="70" y2="70"></line>
                                    <line stroke="white" strokeDasharray="2" strokeOpacity="0.03" x1="0" x2="500" y1="120" y2="120"></line>
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Type B (Linear Projects) */}
                    <motion.div variants={itemVariants}>
                        <div className="h-full bg-zinc-900/40 backdrop-blur-xl rounded border border-white/5 p-6 shadow-[0_0_20px_-10px_rgba(255,255,255,0.05)] flex flex-col hover:bg-zinc-900/60 transition-colors duration-300">
                            <div className="mb-5">
                                <h4 className="text-zinc-100 text-lg font-bold tracking-tight">Linear Projects</h4>
                                <p className="text-zinc-600 text-[11px] font-mono uppercase tracking-tight mt-1">Task orchestration stack</p>
                            </div>
                            <div className="space-y-3 font-mono text-[12px]">
                                {[
                                    { status: "[x]", text: "Initialize Kernel Substrate", state: "DONE", color: "text-zinc-500", highlight: "text-zinc-300" },
                                    { status: "[x]", text: "Temporal Sync Protocols", state: "DONE", color: "text-zinc-500", highlight: "text-zinc-300" },
                                    { status: "[ ]", text: "Build UI/UX Assets (v4)", state: "QUEUED", color: "text-zinc-700", highlight: "text-zinc-500" },
                                    { status: "[ ]", text: "Deploy Shards to Edge", state: "PENDING", color: "text-zinc-700", highlight: "text-zinc-500" },
                                    { status: "[ ]", text: "Audit Execution Logs", state: "PENDING", color: "text-zinc-700", highlight: "text-zinc-500" }
                                ].map((task, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                                        transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                                        className="flex items-center gap-3 group cursor-default"
                                    >
                                        <span className={task.color}>{task.status}</span>
                                        <span className={`${task.highlight} group-hover:text-zinc-100 transition-colors duration-300 tracking-tight`}>{task.text}</span>
                                        <span className={`ml-auto ${task.color} text-[10px] uppercase`}>{task.state}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-auto pt-6 flex justify-between items-center border-t border-white/5">
                                <span className="text-zinc-600 text-[10px] font-mono tracking-widest uppercase">Kernel Progress: 40%</span>
                                <div className="w-4 h-4 rounded text-zinc-500 hover:text-zinc-300 transition-colors flex items-center justify-center cursor-pointer">
                                    <span className="text-lg leading-none">+</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
