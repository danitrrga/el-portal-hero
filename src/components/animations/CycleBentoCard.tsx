"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Infinity } from "lucide-react";

export function CycleBentoCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });
    const [resetCount, setResetCount] = useState(0);

    const countValue = useMotionValue(1);
    const roundedCount = useTransform(countValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (!isInView) {
            countValue.set(1);
            return;
        }
        const interval = setInterval(() => {
            setResetCount((prev) => prev + 1);
        }, 8000);
        return () => clearInterval(interval);
    }, [isInView, countValue]);

    useEffect(() => {
        if (!isInView) return;

        countValue.set(1);
        const controls = animate(countValue, 15, {
            duration: 4,
            ease: "easeInOut"
        });

        return controls.stop;
    }, [isInView, resetCount, countValue]);

    const radius = 46;
    const circumference = 2 * Math.PI * radius;
    const segmentLength = circumference / 15;
    const dashLength = segmentLength * 0.8;
    const gapLength = segmentLength * 0.2;

    return (
        <div
            ref={containerRef}
            className="group p-6 flex flex-col justify-between overflow-hidden relative transition-all duration-300 min-h-[300px] h-full"
        >
            <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Infinity className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-serif italic text-3xl text-charcoal mb-2">Cycle</h4>
                <p className="text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-4">
                    15 Days - Operational
                </p>
                <p className="text-sm text-charcoal-light mb-6">
                    A tactical sprint. Defines current friction (Problems) and internal mechanics (CCH).
                </p>
            </div>

            <div className="relative w-full h-48 bg-cream rounded-lg border border-charcoal/5 flex flex-col items-center justify-center overflow-hidden p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,90,61,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <motion.div
                    key={`ripple-${resetCount}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? {
                        opacity: [0, 0.8, 0],
                        scale: [0.8, 1.05, 1.1],
                    } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 6.8, ease: "easeOut" }}
                    className="absolute inset-0 border-2 border-primary/30 rounded-lg pointer-events-none"
                />

                <div className="relative w-36 h-36 flex items-center justify-center z-10">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                        <defs>
                            <mask id={`cycle-mask-${resetCount}`}>
                                <circle
                                    cx="50" cy="50" r={radius}
                                    stroke="white" strokeWidth="10" fill="transparent"
                                    strokeDasharray={`${dashLength} ${gapLength}`}
                                />
                            </mask>
                        </defs>
                        <circle
                            cx="50" cy="50" r={radius}
                            stroke="currentColor" strokeWidth="6" fill="transparent"
                            className="text-charcoal/10"
                            mask={`url(#cycle-mask-${resetCount})`}
                        />
                        <motion.circle
                            key={`circle-${resetCount}`}
                            cx="50" cy="50" r={radius}
                            stroke="currentColor" strokeWidth="6" fill="transparent"
                            className="text-primary"
                            strokeLinecap="butt"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? {
                                pathLength: [0, 1, 1, 0]
                            } : { pathLength: 0 }}
                            transition={{
                                duration: 8,
                                times: [0, 0.5, 0.85, 1],
                                ease: "easeInOut"
                            }}
                            mask={`url(#cycle-mask-${resetCount})`}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                        <div className="absolute inset-0 flex items-center justify-center flex-col transition-opacity duration-500 group-hover:opacity-0">
                            <motion.span className="text-4xl font-serif italic text-charcoal leading-none">{roundedCount}</motion.span>
                            <span className="text-xs uppercase tracking-widest text-charcoal-light font-bold mt-2">Days</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <span className="text-[13px] font-bold text-primary tracking-widest uppercase text-center leading-relaxed">Active<br />Sprint</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
