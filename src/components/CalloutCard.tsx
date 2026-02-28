"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CalloutCardProps {
    title: string;
    quote: string;
    className?: string;
}

export default function CalloutCard({ title, quote, className }: CalloutCardProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn("relative mx-auto max-w-2xl", className)}
        >
            {/* Decorative rotated square — top-left */}
            <div className="absolute -top-3 -left-3 w-2 h-2 rotate-45 border border-white/[0.06]" />
            {/* Decorative rotated square — bottom-right */}
            <div className="absolute -bottom-3 -right-3 w-2 h-2 rotate-45 border border-white/[0.06]" />

            {/* Gradient border wrapper */}
            <div className="rounded-xl p-px bg-gradient-to-b from-blue-700/50 to-transparent">
                <Card
                    className="card-glow border-0 bg-[#0a0a0a] rounded-[11px] py-0"
                    style={{
                        boxShadow:
                            "0 0 40px -10px rgba(30, 64, 175, 0.25), inset 0 1px 0 rgba(255,255,255,0.04), inset 0 0 60px rgba(30,64,175,0.03)",
                    }}
                >
                    <CardContent className="px-10 py-12 text-center">
                        <h2 className="text-white text-2xl font-bold mb-4 tracking-tight">
                            {title}
                        </h2>
                        <p className="font-serif italic text-zinc-300 text-lg leading-relaxed max-w-md mx-auto">
                            &ldquo;{quote}&rdquo;
                        </p>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
}

