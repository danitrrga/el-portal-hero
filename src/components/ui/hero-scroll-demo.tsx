"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden relative z-10">
            <ContainerScroll
                titleComponent={
                    <>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-medium mb-3 shadow-[0_0_20px_rgba(30,64,175,0.25)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(30,64,175,0.8)]"></span>
                            v2.0 is now live
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-6 leading-tight text-glow-hero">
                            Your shortcut to <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-glow via-blue-200 to-accent-neon-green">
                                high performance.
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={`/assets/showcase/dashboard_black.png`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
