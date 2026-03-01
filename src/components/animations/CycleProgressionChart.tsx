"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export function CycleProgressionChart() {
    const [resetCount, setResetCount] = useState(0);

    // Restart sequence effectively
    useEffect(() => {
        const interval = setInterval(() => {
            setResetCount((prev) => prev + 1);
        }, 11000); // Increased to 11s to allow slower build-up and deliberate decay
        return () => clearInterval(interval);
    }, []);

    // Mock performance data for 15 days (heights)
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
            className="glass-panel p-6 md:p-8 rounded-xl flex flex-col justify-between card-glow h-full min-h-[300px] bg-white/[0.03] border-white/5 hover:border-white/10 relative overflow-hidden group"
        >
            {/* Cycle Reset Pulse effect on the border */}
            <motion.div
                key={`pulse-${resetCount}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 0, 0] }}
                transition={{ duration: 11, times: [0, 0.8, 0.85, 0.9, 1], ease: "easeOut" }}
                className="absolute inset-0 border-[3px] border-primary/50 rounded-xl pointer-events-none z-20"
            />

            <div className="mb-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">ssid_chart</span>
                    </div>
                    <motion.div
                        key={`badge-${resetCount}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 0, 1, 0], scale: [0.8, 0.8, 1, 0.8] }}
                        transition={{ duration: 11, times: [0, 0.8, 0.85, 0.95] }}
                        className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/30 shadow-[0_0_15px_-3px_rgba(30,64,175,0.5)]"
                    >
                        Cycle Reset
                    </motion.div>
                </div>
                <h4 className="font-serif text-3xl text-foreground mb-3">Habit Streaks</h4>
                <p className="text-sm text-muted-foreground font-medium mb-2">15-Day Cycle Progression</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-sm">
                    Progress accumulates aggressively during the 15-day operational sprint before resetting the board for the next Cycle.
                </p>
            </div>

            <div className="w-full h-40 mt-auto relative z-10 flex flex-col justify-end border-b border-white/10 pb-2">

                {/* Graph background lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-white/20 border-t border-dashed" />
                    <div className="w-full h-px bg-white/20 border-t border-dashed" />
                    <div className="w-full h-px" />
                </div>

                <div className="flex items-end justify-between gap-1 w-full h-full pt-6 relative px-1">
                    {performanceHeights.map((h, i) => (
                        <div key={`col-${resetCount}-${i}`} className="flex flex-col items-center flex-1 h-full justify-end gap-2 relative">

                            {/* Sweeping Indicator Light */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: [0, 1, 0], y: [-20, 0, -10] }}
                                transition={{ duration: 0.8, delay: i * 0.25, ease: "easeOut" }}
                                className="absolute top-0 text-primary opacity-50 drop-shadow-[0_0_8px_rgba(30,64,175,0.8)]"
                            >
                                <div className="w-1 h-1 rounded-full bg-white mx-auto shadow-[0_0_10px_3px_rgba(30,64,175,0.8)]" />
                            </motion.div>

                            {/* Bar Graph Fill */}
                            <motion.div
                                initial={{ height: "0%", opacity: 0 }}
                                animate={{ height: ["0%", `${h}%`, `${h}%`, "0%"], opacity: [0, 1, 1, 0] }}
                                transition={{
                                    height: { duration: 8, times: [0, 0.2, 0.85, 1], delay: i * 0.15, ease: "easeInOut" },
                                    opacity: { duration: 8, times: [0, 0.2, 0.85, 1], delay: i * 0.15 }
                                }}
                                className={`w-full max-w-[12px] rounded-sm relative overflow-hidden ${h === 100 ? 'bg-primary' : 'bg-white/20'}`}
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

                            {/* Node Dot below */}
                            <motion.div
                                initial={{ backgroundColor: "#27272a" }} // zinc-800
                                animate={{
                                    backgroundColor: ["#27272a", "hsl(222, 84%, 35%)", "hsl(222, 84%, 35%)", "#27272a"],
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

