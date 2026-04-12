"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function CycleProgressionChart() {
    const [resetCount, setResetCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setResetCount((prev) => prev + 1);
        }, 11000);
        return () => clearInterval(interval);
    }, []);

    const performanceHeights = [
        60, 85, 90, 40, 75, 100, 80, 50, 95, 100, 70, 85, 90, 100, 100
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[300px] relative overflow-hidden group"
        >
            <motion.div
                key={`pulse-${resetCount}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 0, 0] }}
                transition={{ duration: 11, times: [0, 0.8, 0.85, 0.9, 1], ease: "easeOut" }}
                className="absolute inset-0 border-[3px] border-primary/30 rounded-xl pointer-events-none z-20"
            />

            <div className="mb-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <motion.div
                        key={`badge-${resetCount}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 0, 1, 0], scale: [0.8, 0.8, 1, 0.8] }}
                        transition={{ duration: 11, times: [0, 0.8, 0.85, 0.95] }}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/20"
                    >
                        Cycle Reset
                    </motion.div>
                </div>
                <h4 className="font-serif italic text-3xl text-charcoal mb-3">Habit Streaks</h4>
                <p className="text-sm text-charcoal font-medium mb-2">15-Day Cycle Progression</p>
                <p className="text-sm text-charcoal-light leading-relaxed max-w-sm">
                    Progress accumulates aggressively during the 15-day operational sprint before resetting the board for the next Cycle.
                </p>
            </div>

            <div className="w-full h-40 mt-auto relative z-10 flex flex-col justify-end border-b border-charcoal/10 pb-2">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-charcoal/20 border-t border-dashed" />
                    <div className="w-full h-px bg-charcoal/20 border-t border-dashed" />
                    <div className="w-full h-px" />
                </div>

                <div className="flex items-end justify-between gap-1 w-full h-full pt-6 relative px-1">
                    {performanceHeights.map((h, i) => (
                        <div key={`col-${resetCount}-${i}`} className="flex flex-col items-center flex-1 h-full justify-end gap-2 relative">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: [0, 1, 0], y: [-20, 0, -10] }}
                                transition={{ duration: 0.8, delay: i * 0.25, ease: "easeOut" }}
                                className="absolute top-0 text-primary opacity-50"
                            >
                                <div className="w-1 h-1 rounded-full bg-primary mx-auto" />
                            </motion.div>

                            <motion.div
                                initial={{ height: "0%", opacity: 0 }}
                                animate={{ height: ["0%", `${h}%`, `${h}%`, "0%"], opacity: [0, 1, 1, 0] }}
                                transition={{
                                    height: { duration: 8, times: [0, 0.2, 0.85, 1], delay: i * 0.15, ease: "easeInOut" },
                                    opacity: { duration: 8, times: [0, 0.2, 0.85, 1], delay: i * 0.15 }
                                }}
                                className={`w-full max-w-[12px] rounded-sm relative overflow-hidden ${h === 100 ? 'bg-primary' : 'bg-charcoal/20'}`}
                            >
                                {h === 100 && (
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: "-100%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                                        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-transparent w-full h-full"
                                    />
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ backgroundColor: "#E8DFD3" }}
                                animate={{
                                    backgroundColor: ["#E8DFD3", "#2D5A3D", "#2D5A3D", "#E8DFD3"],
                                    scale: [1, 1.5, 1.5, 1]
                                }}
                                transition={{ duration: 8, times: [0, 0.2, 0.85, 1], delay: i * 0.15, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 rounded-full z-10"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
