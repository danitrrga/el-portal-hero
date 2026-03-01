"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { systemBlueprintData } from "@/data/systemBlueprintData";
import { VersionSelector } from "@/components/animations/VersionSelector";
import { CycleBentoCard } from "@/components/animations/CycleBentoCard";
import { DayBentoCard } from "@/components/animations/DayBentoCard";

export interface ReadonlySystemBlueprintSectionProps {
    className?: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function SystemBlueprintSection({ className = "" }: ReadonlySystemBlueprintSectionProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section id="methodology" className={`relative flex flex-col items-center py-24 md:py-32 px-6 sm:px-8 bg-zinc-950 text-slate-100 font-display selection:bg-primary/30 antialiased overflow-hidden border-t border-white/5 ${className}`}>

            {/* Universal Grid Texture */}
            <div
                className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
                style={{
                    maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)"
                }}
            />

            {/* Subtle Grain Noise Component-Level */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
                }}
            ></div>

            {/* Radial soft glow matching the Hero section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_50%_50%,_rgba(30,64,175,0.05)_0%,_rgba(9,9,11,0)_60%)] pointer-events-none -z-10"></div>

            <main className="w-full max-w-6xl flex flex-col gap-16 relative z-10 selection:bg-primary/30 mx-auto">

                {/* Header - Centered for cinematic impact */}
                <motion.section
                    initial={{ opacity: 0, y: -20 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
                    className="flex flex-col items-center text-center gap-6"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] uppercase tracking-widest font-semibold shadow-[0_0_20px_rgba(30,64,175,0.15)]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
                        {systemBlueprintData.header.badge}
                    </motion.div>

                    <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-zinc-100 max-w-4xl leading-[1.05] tracking-tight drop-shadow-sm">
                        {systemBlueprintData.header.title}
                    </h2>
                </motion.section>

                {/* Temporal Hierarchy Grid */}
                <motion.section
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <motion.div variants={itemVariants} className="h-full">
                        <VersionSelector />
                    </motion.div>
                    <motion.div variants={itemVariants} className="h-full">
                        <CycleBentoCard />
                    </motion.div>
                    <motion.div variants={itemVariants} className="h-full">
                        <DayBentoCard />
                    </motion.div>
                </motion.section>


            </main >
        </section >
    );
}
