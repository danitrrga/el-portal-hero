"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion";

export function CycleBentoCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });
    const [resetCount, setResetCount] = useState(0);

    // Restart animation sequence effectively when it completes
    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setResetCount((prev) => prev + 1);
        }, 4500); // 15 nodes * 0.2s + reset time
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div
            ref={containerRef}
            className="group p-6 rounded-xl flex flex-col justify-between overflow-hidden relative transition-all duration-300 ease-out bg-zinc-950/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] min-h-[300px]"
        >
            <div>
                <span className="material-symbols-outlined text-blue-500 mb-4 opacity-80 text-3xl transition-transform group-hover:rotate-180">
                    autorenew
                </span>
                <h4 className="font-serif text-3xl text-zinc-100 mb-2">Cycle</h4>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    15 Days • Operational
                </p>
                <p className="text-sm text-zinc-400 mb-6">
                    A tactical sprint. Defines current friction (Problems) and internal mechanics (CCH).
                </p>
            </div>

            <div className="relative w-full h-32 bg-background/50 rounded-lg border border-border shadow-inner flex flex-col items-center justify-center overflow-hidden p-4">
                {/* Reset ripple effect */}
                <motion.div
                    key={`ripple-${resetCount}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? {
                        opacity: [0, 0.8, 0],
                        scale: [0.8, 1.05, 1.1],
                    } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 3.2, ease: "easeOut" }}
                    className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none"
                />

                {/* 15 Nodes Timeline */}
                <div className="flex items-center gap-1 w-full max-w-[200px] justify-between relative z-10">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <motion.div
                            key={`${resetCount}-${i}`}
                            className="h-6 w-1 rounded-full bg-zinc-800 relative overflow-hidden"
                            initial={{ backgroundColor: "#27272a" }} // zinc-800
                            animate={isInView ? {
                                backgroundColor: ["#27272a", "hsl(222, 84%, 35%)", "#27272a", "#27272a"],
                                opacity: [1, 1, 1, 0] // Fade out at the end for reset
                            } : {}}
                            transition={{
                                backgroundColor: { duration: 0.4, delay: i * 0.2 },
                                opacity: { duration: 0.3, delay: 3.2 }, // Wipe clean
                                times: [0, 0.5, 1]
                            }}
                        />
                    ))}
                </div>

                {/* Habit Carryover Metric */}
                <motion.div
                    key={`carryover-${resetCount}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? {
                        opacity: [0, 0, 1, 0],
                        y: [10, 10, 0, -10]
                    } : { opacity: 0 }}
                    transition={{ duration: 4, times: [0, 0.85, 0.9, 1], ease: "easeOut" }}
                    className="absolute bottom-3 text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1"
                >
                    <span className="material-symbols-outlined text-sm">download_done</span>
                    Habit Carryover
                </motion.div>
            </div>
        </div>
    );
}
