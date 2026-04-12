"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { Rocket } from "lucide-react";

export function TaskProgressionCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const checkboxRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });

    const [tasks, setTasks] = useState([
        { id: 1, label: "Define MVP scope", completed: false },
        { id: 2, label: "Draft initial DB schemas", completed: false },
        { id: 3, label: "Build methodology page", completed: false },
    ]);

    const [scope, animateSequence] = useAnimate();

    useEffect(() => {
        if (!isInView) {
            setTasks(prev => prev.map(t => ({ ...t, completed: false })));
            return;
        }

        let isMounted = true;

        const sequence = async () => {
            while (isMounted) {
                setTasks(prev => prev.map(t => ({ ...t, completed: false })));
                await animateSequence(".task-cursor", { x: 200, y: 150, opacity: 0 }, { duration: 0 });
                await new Promise(resolve => setTimeout(resolve, 600));

                if (!isMounted) break;

                await animateSequence(".task-cursor", { opacity: 1 }, { duration: 0.4 });

                for (let i = 0; i < 3; i++) {
                    if (!isMounted) return;

                    const checkbox = checkboxRefs.current[i];
                    if (checkbox && scope.current) {
                        const containerRect = scope.current.getBoundingClientRect();
                        const boxRect = checkbox.getBoundingClientRect();

                        const targetX = boxRect.left - containerRect.left + (boxRect.width / 2);
                        const targetY = boxRect.top - containerRect.top + (boxRect.height / 2);

                        await animateSequence(".task-cursor", { x: targetX, y: targetY }, { duration: 0.6, ease: "easeInOut" });
                    } else {
                        const yPos = 30 + i * 44;
                        await animateSequence(".task-cursor", { x: 10, y: yPos }, { duration: 0.6, ease: "easeInOut" });
                    }

                    await animateSequence(".task-cursor", { scale: 0.85 }, { duration: 0.1 });

                    setTasks(prev => prev.map((t, index) => index === i ? { ...t, completed: true } : t));
                    animateSequence(`#checkbox-${i}`, { scale: 1.1 }, { duration: 0.1 }).then(() => {
                        if (isMounted) animateSequence(`#checkbox-${i}`, { scale: 1 }, { duration: 0.2, type: "spring" });
                    });

                    await animateSequence(".task-cursor", { scale: 1 }, { duration: 0.1 });
                    await new Promise(resolve => setTimeout(resolve, 600));
                }

                if (!isMounted) break;

                await animateSequence(".task-cursor", { x: 200, y: 220, opacity: 0 }, { duration: 0.8, ease: "easeIn" });
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        };

        sequence();

        return () => { isMounted = false; };
    }, [isInView, animateSequence, scope]);

    const completedCount = tasks.filter((t) => t.completed).length;
    const progressPercent = Math.round((completedCount / tasks.length) * 100);

    return (
        <div
            ref={containerRef}
            className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[300px]"
        >
            <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-serif italic text-3xl text-charcoal mb-3">Task-Based Projects</h4>
                <p className="text-sm text-charcoal font-medium mb-2">Linear Models</p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                    Linear, finite projects with explicitly defined subtasks. Each subtask drives the completion metric proportionally.
                </p>
            </div>

            <div ref={scope} className="w-full bg-cream border border-charcoal/5 p-6 rounded-lg flex flex-col gap-4 relative overflow-hidden">
                <motion.div
                    className="task-cursor absolute z-50 text-charcoal drop-shadow-lg pointer-events-none top-0 left-0"
                    initial={{ opacity: 0 }}
                    style={{ marginLeft: '-14px', marginTop: '-14px' }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                </motion.div>

                {tasks.map((task, idx) => (
                    <div key={task.id} className="flex items-center gap-3 relative z-0 min-h-[28px]">
                        <motion.div
                            id={`checkbox-${idx}`}
                            ref={(el) => { checkboxRefs.current[idx] = el; }}
                            layout
                            className={`size-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${task.completed ? 'border-primary' : 'border-charcoal/20'}`}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: task.completed ? 1 : 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="size-2.5 rounded-full bg-primary"
                            />
                        </motion.div>

                        <motion.span
                            layout
                            className={`text-sm font-medium transition-all duration-300 ${task.completed ? 'text-charcoal-light line-through opacity-70' : 'text-charcoal'}`}
                        >
                            {task.label}
                        </motion.span>
                    </div>
                ))}

                <div className="mt-4 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                    <span className="text-xs text-charcoal-light font-bold uppercase tracking-widest">Progress</span>
                    <motion.span className="text-xs text-primary font-bold">
                        {progressPercent}%
                    </motion.span>
                </div>

                <div className="w-full h-1.5 bg-charcoal/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-primary"
                    />
                </div>
            </div>
        </div>
    );
}
