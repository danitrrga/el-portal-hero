"use client";

import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Zap } from "lucide-react";

export function DayBentoCard() {
    const dotRef = useRef<HTMLDivElement>(null);
    const dayRadialGlowRef = useRef<HTMLDivElement>(null);
    const nightRadialGlowRef = useRef<HTMLDivElement>(null);

    const virtualTime = useRef(0);
    const timeScale = useRef(1);
    const isHovered = useRef(false);

    useAnimationFrame((time, delta) => {
        const targetScale = isHovered.current ? 0.2 : 1;
        timeScale.current += (targetScale - timeScale.current) * 0.05;
        const safeDelta = Math.min(delta, 50);
        virtualTime.current += safeDelta * timeScale.current;

        const DURATION = 10000;
        const progress = (virtualTime.current % DURATION) / DURATION;
        const angle = Math.PI + progress * Math.PI * 2;

        const radius = 100;
        const xOffset = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle) * radius;

        const isDay = Math.sin(angle) < 0;
        const dayIntensity = Math.max(0, -Math.sin(angle));
        const nightIntensity = Math.max(0, Math.sin(angle));

        if (dotRef.current) {
            dotRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;

            if (isDay) {
                dotRef.current.style.backgroundColor = `rgba(255, 200, 100, 1)`;
                dotRef.current.style.boxShadow = `0 0 ${15 + dayIntensity * 10}px ${2 + dayIntensity * 4}px rgba(255, 180, 100, ${0.5 * dayIntensity})`;
            } else {
                dotRef.current.style.backgroundColor = `rgba(45, 90, 61, 1)`;
                dotRef.current.style.boxShadow = `0 0 ${10 + nightIntensity * 10}px ${2 + nightIntensity * 4}px rgba(45, 90, 61, ${0.3 * nightIntensity})`;
            }
        }

        if (dayRadialGlowRef.current) {
            dayRadialGlowRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            dayRadialGlowRef.current.style.opacity = `${dayIntensity}`;
        }

        if (nightRadialGlowRef.current) {
            nightRadialGlowRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            nightRadialGlowRef.current.style.opacity = `${nightIntensity}`;
        }
    });

    return (
        <div
            className="group p-6 flex flex-col justify-between overflow-hidden relative transition-all duration-300 min-h-[300px]"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
        >
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 120%, rgba(45, 90, 61, 0.1), transparent 70%)'
                }}
            />

            <div className="relative z-10 pointer-events-none">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-serif italic text-3xl text-charcoal mb-2">Day</h4>

                <div className="flex items-center gap-2 mb-4">
                    <p className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">
                        Execution Unit - Tactical
                    </p>
                    <div className="flex items-center justify-center">
                        <motion.div
                            className="size-1.5 rounded-full bg-primary"
                            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                <p className="text-sm text-charcoal-light">
                    The pure unit of execution. Drives the foundational operations that compound over Cycles.
                </p>
            </div>

            <div className="relative w-full h-48 sm:h-56 mt-6 rounded-lg border border-charcoal/5 bg-cream flex items-center justify-center overflow-hidden z-0">
                <div className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 bg-charcoal/10 group-hover:bg-charcoal/20 transition-all duration-500 z-10" />

                <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-charcoal/10 pointer-events-none z-0" />

                <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-full left-1/2 w-0 h-0">
                        <div
                            ref={dayRadialGlowRef}
                            className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(255, 200, 100, 0.4) 0%, transparent 60%)',
                                filter: 'blur(12px)',
                                opacity: 0
                            }}
                        />
                    </div>
                </div>

                <div className="absolute top-1/2 left-0 w-full h-1/2 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 left-1/2 w-0 h-0">
                        <div
                            ref={nightRadialGlowRef}
                            className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(45, 90, 61, 0.3) 0%, transparent 60%)',
                                filter: 'blur(10px)',
                                opacity: 0
                            }}
                        />
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 w-0 h-0 z-20 pointer-events-none">
                    <div
                        ref={dotRef}
                        className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    />
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white z-30 opacity-80" />
            </div>
        </div>
    );
}
