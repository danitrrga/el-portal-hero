"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface PrincipleSectionProps {
    number: string;
    title: string;
    description: string;
}

export default function PrincipleSection({ number, title, description }: PrincipleSectionProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {/* Separator with decorative dot */}
            <div className="relative mb-8">
                <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-[6px] h-[6px] rounded-full bg-blue-700/30" />
                <Separator className="bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
            </div>

            <div className="group">
                <div className="flex items-start gap-6">
                    <span
                        className="font-serif italic text-blue-700 text-lg pt-0.5 select-none tabular-nums"
                        style={{ textShadow: "0 0 20px rgba(30,64,175,0.3)" }}
                    >
                        {number}
                    </span>
                    <div className="border-l-2 border-blue-700/20 pl-6 transition-colors duration-300 ease-out group-hover:border-blue-700">
                        <h3 className="text-zinc-100 font-semibold text-xl tracking-tight mb-2">
                            {title}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

