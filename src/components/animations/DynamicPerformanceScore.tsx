"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate as framerAnimate, useAnimate } from "framer-motion";

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
    const [scope, animateSequence] = useAnimate();

    useEffect(() => {
        if (!isInView) {
            setCheckedIds([]);
            countValue.set(0);
            return;
        }

        let isMounted = true;

        const sequence = async () => {
            // Initial reset
            setCheckedIds([]);
            countValue.set(0);
            await framerAnimate(scope.current, { opacity: 1 }, { duration: 0 }); // ensure scope starts fresh
            await animateSequence(".cursor-svg", { x: 200, y: 300, opacity: 0 }, { duration: 0 });
            await new Promise((resolve) => setTimeout(resolve, 600));

            if (!isMounted) return;

            // Move cursor into view near the first row
            await animateSequence(".cursor-svg", { x: 40, y: 100, opacity: 1 }, { duration: 0.8, ease: "easeOut" });

            for (let i = 0; i < mockHabits.length; i++) {
                if (!isMounted) return;
                const habit = mockHabits[i];
                // Approximate row position
                const yPos = 100 + i * 56;

                // Move cursor to the specific row
                await animateSequence(".cursor-svg", { x: 40, y: yPos }, { duration: 0.5, ease: "easeInOut" });

                // "Click" depress
                await animateSequence(".cursor-svg", { scale: 0.9 }, { duration: 0.1 });

                // Ripple / scale down effect on the row itself
                animateSequence(`#row-${habit.id}`, { scale: 0.97 }, { duration: 0.1 }).then(() => {
                    if (isMounted) animateSequence(`#row-${habit.id}`, { scale: 1 }, { duration: 0.3, type: "spring" });
                });

                setCheckedIds((prev) => [...prev, habit.id]);

                // Target percentage up to this point
                const currentPoints = mockHabits.slice(0, i + 1).reduce((acc, h) => acc + h.weight, 0);
                const targetPercent = (currentPoints / 7) * 100;

                framerAnimate(countValue, targetPercent, { duration: 0.5, ease: "easeOut" });

                // Release "Click"
                await animateSequence(".cursor-svg", { scale: 1 }, { duration: 0.1 });
                await new Promise((resolve) => setTimeout(resolve, 400));
            }

            if (!isMounted) return;
            // Cursor leaves
            await animateSequence(".cursor-svg", { x: 200, y: 400, opacity: 0 }, { duration: 0.8, ease: "easeIn" });
        };

        sequence();

        return () => { isMounted = false; };
    }, [isInView, countValue, animateSequence, scope]);

    return (
        <div ref={containerRef} className="flex flex-col md:flex-row gap-8 w-full group">
            {/* Left Column: Habits List */}
            <div ref={scope} className="w-full md:w-[55%] glass-panel rounded-2xl p-6 md:p-8 border-border flex flex-col gap-4 relative overflow-hidden bg-white/[0.02]">

                {/* Custom SVG Cursor */}
                <motion.div
                    className="cursor-svg absolute z-50 text-white pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                    initial={{ opacity: 0 }}
                    style={{ marginLeft: '-12px', marginTop: '-12px' }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                </motion.div>

                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
                    <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">Habit Tracker</span>
                    <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-sm border border-primary/20">Active Cycle</span>
                </div>

                <div className="flex flex-col gap-3 relative z-10">
                    {mockHabits.map((habit) => {
                        const isChecked = checkedIds.includes(habit.id);
                        return (
                            <motion.div
                                id={`row-${habit.id}`}
                                key={habit.id}
                                className={`flex items-center justify-between p-3 rounded-xl border relative overflow-hidden transition-colors duration-300 ${isChecked ? 'bg-white/[0.04] border-primary/20 shadow-[0_0_15px_-5px_rgba(30,64,175,0.3)]' : 'bg-white/[0.02] border-white/5'}`}
                            >
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
                                    className="absolute inset-0 bg-primary/10 origin-left pointer-events-none"
                                />
                            </motion.div>
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
                        Efficiency Score
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

