"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export function CycleBentoCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });
    const [resetCount, setResetCount] = useState(0);

    const countValue = useMotionValue(1);
    const roundedCount = useTransform(countValue, (latest) => Math.round(latest));

    // Restart animation sequence effectively when it completes
    useEffect(() => {
        if (!isInView) {
            countValue.set(1);
            return;
        }
        const interval = setInterval(() => {
            setResetCount((prev) => prev + 1);
        }, 8000); // 8 second cycle
        return () => clearInterval(interval);
    }, [isInView, countValue]);

    // Animate the counting from 1 to 15
    useEffect(() => {
        if (!isInView) return;

        countValue.set(1);
        const controls = animate(countValue, 15, {
            duration: 4, // Matches 50% fill time of the 8s circle animation
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
            className="group p-6 rounded-xl flex flex-col justify-between overflow-hidden relative transition-all duration-300 ease-out bg-zinc-950/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] min-h-[300px]"
        >
            <div>
                <span className="material-symbols-outlined text-blue-500 mb-4 opacity-80 text-3xl transition-transform group-hover:glow-blue-500">
                    all_inclusive
                </span>
                <h4 className="font-serif text-3xl text-zinc-100 mb-2">Cycle</h4>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    15 Days • Operational
                </p>
                <p className="text-sm text-zinc-400 mb-6">
                    A tactical sprint. Defines current friction (Problems) and internal mechanics (CCH).
                </p>
            </div>

            <div className="relative w-full h-48 bg-background/50 rounded-lg border border-border shadow-inner flex flex-col items-center justify-center overflow-hidden p-4">
                {/* Soft Radial Bloom on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Reset ripple effect */}
                <motion.div
                    key={`ripple-${resetCount}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? {
                        opacity: [0, 0.8, 0],
                        scale: [0.8, 1.05, 1.1],
                    } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 6.8, ease: "easeOut" }}
                    className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none"
                />

                {/* Circular Progress Indicator */}
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
                            className="text-zinc-800"
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
                                pathLength: [0, 1, 1, 0] // fill, hold, clear
                            } : { pathLength: 0 }}
                            transition={{
                                duration: 8,
                                times: [0, 0.5, 0.85, 1], // Smoothly fill over 4s (50% of 8s)
                                ease: "easeInOut"
                            }}
                            mask={`url(#cycle-mask-${resetCount})`}
                        />
                    </svg>
                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                        {/* Default Text */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col transition-opacity duration-500 group-hover:opacity-0">
                            <motion.span className="text-4xl font-serif text-white leading-none">{roundedCount}</motion.span>
                            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold mt-2">Days</span>
                        </div>
                        {/* Hover Text */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <span className="text-[13px] font-bold text-primary tracking-widest uppercase text-center leading-relaxed">Active<br />Sprint</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
