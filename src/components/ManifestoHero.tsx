"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ManifestoHeroProps {
    badge?: string;
    title: string;
    subtitle: string;
}

export default function ManifestoHero({ badge = "The Zenith View", title, subtitle }: ManifestoHeroProps) {
    const prefersReducedMotion = useReducedMotion();

    const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };
    const animate = { opacity: 1, y: 0 };
    const ease = [0.25, 0.46, 0.45, 0.94] as const;

    return (
        <section className="relative flex flex-col items-center justify-center pt-32 pb-16 text-center">
            {/* Decorative portal ring behind heading */}
            <motion.div
                initial={prefersReducedMotion ? { opacity: 0.04, scale: 1 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.04, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="pointer-events-none absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white"
            />
            {/* Second larger ring for depth */}
            <motion.div
                initial={prefersReducedMotion ? { opacity: 0.02, scale: 1 } : { opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.02, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="pointer-events-none absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-white"
            />

            <motion.div
                initial={initial}
                animate={animate}
                transition={{ duration: 0.6, ease, delay: 0 }}
            >
                <Badge
                    variant="outline"
                    className="mb-6 rounded-full border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-blue-400"
                >
                    {badge}
                </Badge>
            </motion.div>

            <motion.h1
                initial={initial}
                animate={animate}
                transition={{ duration: 0.6, ease, delay: prefersReducedMotion ? 0 : 0.15 }}
                className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent tracking-tight text-5xl md:text-7xl font-bold leading-tight max-w-4xl text-glow-hero"
            >
                {title}
            </motion.h1>

            <motion.p
                initial={initial}
                animate={animate}
                transition={{ duration: 0.6, ease, delay: prefersReducedMotion ? 0 : 0.3 }}
                className="text-zinc-400 text-lg md:text-xl font-normal leading-relaxed mt-8 max-w-2xl"
            >
                {subtitle}
            </motion.p>

            {/* Horizontal gradient separator */}
            <motion.div
                initial={prefersReducedMotion ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.5 }}
                className="mt-12 h-px w-64 bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"
            />
        </section>
    );
}


