"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion";

export function TaskProgressionCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });

    const [tasks, setTasks] = useState([
        { id: 1, label: "Define MVP scope", completed: true },
        { id: 2, label: "Draft initial DB schemas", completed: true },
        { id: 3, label: "Build methodology page", completed: false },
    ]);

    useEffect(() => {
        if (isInView) {
            // Animate the 3rd task clicking itself after a delay
            const timer = setTimeout(() => {
                setTasks((prev) =>
                    prev.map((t) => (t.id === 3 ? { ...t, completed: true } : t))
                );
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            // Reset when out of view
            setTasks((prev) =>
                prev.map((t) => (t.id === 3 ? { ...t, completed: false } : t))
            );
        }
    }, [isInView]);

    const completedCount = tasks.filter((t) => t.completed).length;
    const progressPercent = Math.round((completedCount / tasks.length) * 100);

    return (
        <div
            ref={containerRef}
            className="glass-panel p-6 md:p-8 rounded-xl flex flex-col justify-between card-glow h-full min-h-[300px] bg-white/[0.03] border-white/5 hover:border-white/10"
        >
            <div className="mb-8">
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <h4 className="font-serif text-3xl text-foreground mb-3">Task-Based Projects</h4>
                <p className="text-sm text-muted-foreground font-medium mb-2">Linear Models</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    Linear, finite projects with explicitly defined subtasks. Each subtask drives the completion metric proportionally.
                </p>
            </div>

            <div className="w-full bg-background border border-border p-6 rounded-lg flex flex-col gap-4 relative overflow-hidden">
                {/* Invisible Cursor Animation */}
                <motion.div
                    initial={{ x: 100, y: 100, opacity: 0 }}
                    animate={isInView && !tasks[2].completed ? {
                        x: 20,
                        y: 80,
                        opacity: [0, 1, 1],
                        scale: [1, 1, 0.9] // "Click" press down
                    } : { x: 100, y: 100, opacity: 0 }}
                    transition={{ duration: 2, ease: "easeOut", times: [0, 0.8, 1] }}
                    className="absolute z-10 text-white/50 pointer-events-none"
                    style={{ marginLeft: '-12px', marginTop: '-12px' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                        <path d="M13 13l6 6" />
                    </svg>
                </motion.div>

                {tasks.map((task, idx) => (
                    <div key={task.id} className="flex items-center gap-3 relative z-0">
                        {/* Checkbox */}
                        <motion.div
                            layout
                            className={`size-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${task.completed ? 'border-primary' : 'border-border'}`}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: task.completed ? 1 : 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="size-2.5 rounded-full bg-primary"
                            />
                        </motion.div>

                        {/* Text */}
                        <motion.span
                            layout
                            className={`text-sm font-medium transition-all duration-300 ${task.completed ? 'text-slate-300 line-through opacity-70' : 'text-slate-100'
                                }`}
                        >
                            {task.label}
                        </motion.span>
                    </div>
                ))}

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Progress</span>
                    <motion.span
                        className="text-xs text-primary font-bold drop-shadow-[0_0_8px_rgba(30,64,175,0.8)]"
                    >
                        {progressPercent}%
                    </motion.span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: "66%" }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full bg-primary ${progressPercent === 100 ? 'shadow-[0_0_15px_-3px_rgba(30,64,175,1)]' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
}
