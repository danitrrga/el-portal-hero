"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RefreshCcw, Clock, Layers, Terminal, ListTodo, Check } from "lucide-react";

// Stagger variants for the Bento grid
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function SystemBlueprintSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section id="methodology" className="py-24 bg-zinc-950 relative z-10 border-t border-white/5 font-sans overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="mx-auto flex w-full max-w-6xl flex-col px-8">

                {/* Header Section */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-600 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </div>
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500">System Operational</span>
                    </div>
                    <h2 className="text-5xl font-bold tracking-tighter text-zinc-100 mb-4">The Engine</h2>
                    <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
                        A recursive architecture designed for hyper-growth. Mapping the convergence of asymptotic habits and linear progression cycles.
                    </p>
                </motion.header>

                {/* Bento Grid: Temporal Hierarchy */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    {/* Card 1: Version (90D) */}
                    <motion.div variants={itemVariants} className="bg-zinc-950/80 backdrop-blur-xl border border-white/5 p-6 rounded-xl hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Version</h3>
                                <p className="text-xl font-semibold mt-1 text-zinc-100">90D Horizon</p>
                            </div>
                            <span className="text-blue-400 text-xs font-mono bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded">v4.2</span>
                        </div>
                        <div className="space-y-4">
                            {[
                                { width: "w-8", text: "Infrastructure Rebuild" },
                                { width: "w-12", text: "Cognitive Refinement" },
                                { width: "w-6", text: "Market Expansion" },
                                { width: "w-10", text: "Synthesis Phase", dim: true }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={controls}
                                    variants={{ visible: { opacity: 1, x: 0, transition: { delay: 0.6 + (i * 0.1) } } }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className={`h-1 ${item.width} ${item.dim ? 'bg-blue-600/20' : 'bg-blue-600/40'} rounded-full group-hover:bg-blue-500 transition-colors`}></div>
                                    <span className={`text-sm ${item.dim ? 'text-zinc-600' : 'text-zinc-400'} font-mono`}>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 2: Cycle (15D) */}
                    <motion.div variants={itemVariants} className="bg-zinc-950/80 backdrop-blur-xl border border-white/5 p-6 rounded-xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Cycle</h3>
                                <p className="text-xl font-semibold mt-1 text-zinc-100">15D Sprint</p>
                            </div>
                            <RefreshCcw className="text-zinc-500" size={16} />
                        </div>
                        <div className="flex justify-center items-center h-32 relative">
                            {/* Animated Progress Ring */}
                            <svg className="w-28 h-28 transform -rotate-90">
                                <circle className="text-white/5" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeWidth="6"></circle>
                                <motion.circle
                                    initial={{ strokeDashoffset: 301.59 }}
                                    animate={inView ? { strokeDashoffset: 105.55 } : { strokeDashoffset: 301.59 }} // 65% of 301.59
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                                    className="text-blue-600"
                                    cx="56" cy="56" fill="transparent" r="48" stroke="currentColor"
                                    strokeDasharray="301.59"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                ></motion.circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={controls}
                                    variants={{ visible: { opacity: 1, scale: 1, transition: { delay: 1.2 } } }}
                                    className="text-2xl font-bold font-mono text-zinc-100"
                                >
                                    65%
                                </motion.span>
                                <span className="text-[10px] uppercase font-mono text-zinc-500">Day 10</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Day (24H) */}
                    <motion.div variants={itemVariants} className="bg-zinc-950/80 backdrop-blur-xl border border-white/5 p-6 rounded-xl hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Day</h3>
                                <p className="text-xl font-semibold mt-1 text-zinc-100">24H Flow</p>
                            </div>
                            <Clock className="text-zinc-500" size={16} />
                        </div>
                        <div className="h-32 flex items-end gap-1 px-2 relative overflow-hidden">
                            {/* Animated Sine Wave Sweep */}
                            {[1 / 4, 1 / 3, 1 / 2, 3 / 4, 1, 3 / 4, 1 / 2, 1 / 3, 1 / 4, 1 / 6].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={inView ? { height: `${height * 100}%` } : { height: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 + (i * 0.05) }}
                                    className="flex-1 rounded-t-sm"
                                    style={{ backgroundColor: `rgba(37, 99, 235, ${height * 0.8})` }}
                                ></motion.div>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-between text-[10px] font-mono text-zinc-600 uppercase">
                            <span>00:00</span>
                            <span>Noon</span>
                            <span>23:59</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Data Progression Architecture */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16"
                >
                    {/* Left: Asymptotic Habits */}
                    <motion.div variants={itemVariants}>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-semibold flex items-center gap-3 text-zinc-100">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Asymptotic Habits
                            </h3>
                            <div className="flex gap-4">
                                <div className="text-right">
                                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Consistency</p>
                                    <p className="text-sm font-mono text-zinc-200">98.4%</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Streak</p>
                                    <p className="text-sm font-mono text-zinc-200">14</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Decay</p>
                                    <p className="text-sm font-mono text-rose-500">-0.01</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-950/40 p-1 rounded-xl border border-white/5">
                            <div className="h-64 relative overflow-hidden rounded-lg bg-zinc-900/50">
                                {/* Animated Area Chart */}
                                <div className="absolute inset-0 flex items-end">
                                    <svg className="w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 400 200">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#1d4fd7" stopOpacity="0.4"></stop>
                                                <stop offset="100%" stopColor="#1d4fd7" stopOpacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                                            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                                            d="M0,200 L0,180 Q50,170 100,140 T200,80 T300,50 T400,20 L400,200 Z"
                                            fill="url(#chartGradient)"
                                        ></motion.path>
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                                            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                                            d="M0,180 Q50,170 100,140 T200,80 T300,50 T400,20"
                                            fill="none" stroke="#1d4fd7" strokeWidth="2"
                                        ></motion.path>
                                    </svg>
                                </div>
                                {/* UI Overlays */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-600/20"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-600/40"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Linear Projects */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-semibold flex items-center gap-3 mb-8 text-zinc-100">
                            <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                            Linear Projects
                        </h3>

                        <div className="space-y-6">
                            {/* Project 1 */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-zinc-950/80 p-5 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all cursor-default"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 rounded border border-blue-600 flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={inView ? { scale: 1 } : { scale: 0 }}
                                                transition={{ type: "spring", delay: 1.5 }}
                                                className="w-2.5 h-2.5 bg-blue-600 rounded-sm"
                                            ></motion.div>
                                        </div>
                                        <span className="text-sm font-medium text-zinc-100">Neural Engine Alpha Testing</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-500">Critical</span>
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: "88%" } : { width: 0 }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                        className="h-full bg-blue-600 rounded-full"
                                    ></motion.div>
                                </div>
                            </motion.div>

                            {/* Project 2 */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-zinc-950/80 p-5 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all cursor-default"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 rounded border border-white/10 flex items-center justify-center"></div>
                                        <span className="text-sm font-medium text-zinc-500">API Documentation Synthesis</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-500">Secondary</span>
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: "42%" } : { width: 0 }}
                                        transition={{ duration: 1, delay: 1.4 }}
                                        className="h-full bg-zinc-600 rounded-full"
                                    ></motion.div>
                                </div>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-zinc-950/80 p-5 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all cursor-default"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 rounded border border-white/10 flex items-center justify-center"></div>
                                        <span className="text-sm font-medium text-zinc-500">Spatial Interface Deployment</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-500">Backlog</span>
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: "12%" } : { width: 0 }}
                                        transition={{ duration: 1, delay: 1.6 }}
                                        className="h-full bg-zinc-600 rounded-full"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Grid Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="mt-24 pt-8 border-t border-white/5 grid grid-cols-4 gap-4"
                >
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase">Core Latency</span>
                        <span className="text-xs font-mono text-zinc-400">14ms</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase">Node Sync</span>
                        <span className="text-xs font-mono text-blue-500">Active</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase">Architecture</span>
                        <span className="text-xs font-mono text-zinc-400">El Portal v2</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase">Temporal Drift</span>
                        <span className="text-xs font-mono text-zinc-400">± 0.0004</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
