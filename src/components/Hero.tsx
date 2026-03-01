"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="flex flex-col overflow-hidden relative z-10 w-full">
            {/* Ambient Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_50%_0%,_rgba(30,64,175,0.18)_0%,_rgba(2,6,23,0)_70%)] pointer-events-none opacity-80 -z-10"></div>

            <ContainerScroll
                titleComponent={
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2,
                                },
                            },
                        }}
                        className="flex flex-col items-center max-w-4xl mx-auto relative z-10 text-center"
                    >
                        {/* Ambient Glow has been moved to top edge of the page */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                            }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] uppercase tracking-widest font-semibold mb-6 shadow-[0_0_20px_rgba(30,64,175,0.15)]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                            V1.0 Access
                        </motion.div>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                            }}
                            className="text-5xl md:text-7xl font-black tracking-[-0.04em] bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-6 leading-tight text-glow-hero"
                        >
                            Your shortcut to <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-glow via-blue-200 to-accent-neon-green">
                                high performance.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                            }}
                            className="max-w-xl mx-auto text-base md:text-lg text-zinc-400 font-medium mb-8 leading-relaxed"
                        >
                            EL PORTAL is the all-in-one productivity engine for teams and agents.
                            Manage habits, track deep work cycles, and align your foundational
                            goals in one keyboard-centric interface.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                            }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                        </motion.div>
                    </motion.div>
                }
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="h-full w-full rounded-2xl shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] relative"
                >
                    <Image
                        src={`/assets/showcase/dashboard_black.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </motion.div>
            </ContainerScroll>
        </div>
    );
}
