"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const mockHabits = [
    { id: 1, label: "Deep Work (4hrs)", weight: 4 },
    { id: 2, label: "Workout", weight: 2 },
    { id: 3, label: "Reading", weight: 1 },
];

export function DynamicPerformanceScore() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.4 });
    const [checkedIds, setCheckedIds] = useState<number[]>([]);

    const countValue = useMotionValue(0);
    const displayCount = useTransform(countValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (!isInView) {
            setCheckedIds([]);
            countValue.set(0);
            return;
        }

        // Sequence the check-offs
        const sequence = async () => {
            for (let i = 0; i < mockHabits.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, i === 0 ? 800 : 600));
                setCheckedIds((prev) => [...prev, mockHabits[i].id]);

                // Target percentage up to this point
                const currentPoints = mockHabits.slice(0, i + 1).reduce((acc, h) => acc + h.weight, 0);
                const targetPercent = (currentPoints / 7) * 100;

                animate(countValue, targetPercent, { duration: 0.5, ease: "easeOut" });
            }
        };

        sequence();
    }, [isInView, countValue]);

    return (
        <div ref={containerRef} className="flex flex-col md:flex-row gap-8 w-full group">
            {/* Left Column: Habits List */}
            <div className="w-full md:w-[55%] glass-panel rounded-2xl p-6 md:p-8 border-border flex flex-col gap-4 relative overflow-hidden bg-white/[0.02]">
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
                    <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">Daily Operations</span>
                    <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-sm border border-primary/20">Active Cycle</span>
                </div>

                <div className="flex flex-col gap-4 relative z-10">
                    {mockHabits.map((habit) => {
                        const isChecked = checkedIds.includes(habit.id);
                        return (
                            <div key={habit.id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
                                <div className="flex items-center gap-4 relative z-10">
                                    <motion.div
                                        layout
                                        className={`size-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${isChecked ? 'border-primary' : 'border-zinc-700'}`}
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: isChecked ? 1 : 0 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            className="size-2.5 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(30,64,175,0.8)]"
                                        />
                                    </motion.div>
                                    <span className={`text-sm font-medium transition-all duration-300 ${isChecked ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>
                                        {habit.label}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 relative z-10">
                                    {/* P_daily Weight Badge */}
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-[4px] uppercase tracking-wider transition-colors duration-300 ${isChecked ? 'bg-primary/20 text-primary border border-primary/30 shadow-[0_0_15px_-3px_rgba(30,64,175,0.4)]' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'}`}>
                                        {habit.weight} pt{habit.weight > 1 ? 's' : ''}
                                    </span>
                                </div>

                                {/* Checked Highlight Background */}
                                <motion.div
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute inset-0 bg-primary/5 origin-left pointer-events-none"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Column: Score Calculator */}
            <div className="w-full md:w-[45%] flex flex-col items-center justify-center gap-6 glass-panel p-8 rounded-2xl relative bg-white/[0.03] border-white/5 hover:border-white/10 overflow-hidden card-glow">

                {/* Progress Bars showing the makeup of the score */}
                <div className="w-full max-w-[200px] flex gap-1 h-1.5 mb-2">
                    {mockHabits.map(h => (
                        <motion.div
                            key={`bar-${h.id}`}
                            className="h-full rounded-full bg-primary"
                            style={{ flexGrow: h.weight }}
                            initial={{ opacity: 0.1, scaleX: 0 }}
                            animate={checkedIds.includes(h.id) ? {
                                opacity: 1,
                                scaleX: 1,
                                boxShadow: "0 0 10px 1px rgba(30, 64, 175, 0.4)"
                            } : { opacity: 0.1, scaleX: 1, boxShadow: "none" }}
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </div>

                <div className="relative flex flex-col items-center">
                    <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase mb-1">
                        P_daily Score
                    </span>
                    <motion.div
                        className="font-serif text-[5rem] leading-none text-foreground relative z-10 transition-all duration-300"
                        animate={{
                            textShadow: checkedIds.length === 3
                                ? "0 0 60px rgba(30, 64, 175, 0.6), 0 0 15px rgba(255, 255, 255, 0.2)"
                                : "none",
                            color: checkedIds.length === 3 ? "#fff" : "#f4f4f5"
                        }}
                    >
                        <motion.span>{displayCount}</motion.span>%
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
