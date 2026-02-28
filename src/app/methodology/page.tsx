"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CycleBentoCard } from "@/components/animations/CycleBentoCard";
import { DynamicPerformanceScore } from "@/components/animations/DynamicPerformanceScore";
import { TaskProgressionCard } from "@/components/animations/TaskProgressionCard";
import { CycleProgressionChart } from "@/components/animations/CycleProgressionChart";
import { VersionSelector } from "@/components/animations/VersionSelector";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function MethodologyPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-zinc-950">
            {/* Grain texture overlay (matching Pricing) */}
            <div
                className="fixed inset-0 z-50 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Top radial blue gradient (DESIGN.md §2) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-zinc-950 to-zinc-950 pointer-events-none" />

            {/* Background grid texture */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <Navbar />

            <main className="flex-1 px-6 md:px-8 max-w-5xl mx-auto w-full py-16 md:py-24 space-y-24 relative z-10">

                {/* Hero Section */}
                <section className="flex flex-col items-center text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold text-primary tracking-widest uppercase">Protocol v2.4</span>
                    </div>

                    <h1 className="text-zinc-100 text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
                        The Engine
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        A high-fidelity behavioral feedback system designed for temporal hierarchy and peak performance optimization.
                    </p>

                    <div className="mt-10">
                        <ShinyButton>
                            Explore Protocol
                        </ShinyButton>
                    </div>
                </section>

                {/* Temporal Hierarchy Grid */}
                <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-forwards">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Temporal Hierarchy</h3>
                        <span className="h-px flex-1 bg-zinc-800/50 ml-4"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Version */}
                        <VersionSelector />

                        {/* Cycle */}
                        <CycleBentoCard />

                        {/* Day */}
                        <div className="group p-6 rounded-xl flex flex-col justify-between overflow-hidden relative transition-all duration-300 ease-out bg-zinc-950/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)]">
                            <div>
                                <span className="material-symbols-outlined text-blue-500 mb-4 opacity-80 text-3xl transition-transform group-hover:scale-110">event</span>
                                <h4 className="font-serif text-3xl text-zinc-100 mb-2">Day</h4>
                                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Execution Unit • Tactical</p>
                                <p className="text-sm text-zinc-400">The pure unit of execution. Drives the foundational operations that compound over Cycles.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Performance Dashboard */}
                <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-forwards">
                    <DynamicPerformanceScore />
                </section>

                {/* Goal Architecture Grid */}
                <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-forwards">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Goal Architecture</h3>
                        <span className="h-px flex-1 bg-zinc-800/50 ml-4"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Asymptotic Consistency */}
                        <CycleProgressionChart />

                        {/* Task-Based Projects */}
                        <TaskProgressionCard />
                    </div>
                </section>

                {/* Core Modalities Accordion */}
                <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-forwards max-w-4xl mx-auto w-full">
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-4xl text-zinc-100 mb-4">Core Modalities</h2>
                        <p className="text-zinc-400 text-lg">The distinct interaction paradigms governing the El Portal system.</p>
                    </div>

                    <div className="space-y-4">
                        {/* Cinema Mode */}
                        <details className="group rounded-xl overflow-hidden transition-all duration-300 ease-out [&_summary::-webkit-details-marker]:hidden bg-zinc-950/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30" open>
                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.02]">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <span className="material-symbols-outlined text-blue-500 text-2xl">theater_comedy</span>
                                    <span className="font-bold text-lg text-zinc-100">Visualization (Cinema Mode)</span>
                                </div>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-zinc-500 shrink-0 ml-4">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 sm:ml-12 mt-2">
                                A full-screen, minimalist, Zen-mode environment. Features 5 persistent slides: <strong>Me, Her, Purpose, Social, Material Life</strong>. Each slide consists of an editable image (pulled via signed URLs) and dynamic caption text.
                            </div>
                        </details>

                        {/* Archives */}
                        <details className="group rounded-xl overflow-hidden transition-all duration-300 ease-out [&_summary::-webkit-details-marker]:hidden bg-zinc-950/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30">
                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.02]">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <span className="material-symbols-outlined text-blue-500 text-2xl">inventory_2</span>
                                    <span className="font-bold text-lg text-zinc-100">The Archives (Knowledge Base)</span>
                                </div>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-zinc-500 shrink-0 ml-4">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 sm:ml-12 mt-2">
                                Text/Markdown-driven database entries that act as the permanent mental cache. Includes: My Routines, Mantra Archive, Life To-Do List, 5-Year Vision, and Theory Notes. Operates distinctly from daily tactical execution.
                            </div>
                        </details>

                        {/* Analytics */}
                        <details className="group rounded-xl overflow-hidden transition-all duration-300 ease-out [&_summary::-webkit-details-marker]:hidden bg-zinc-950/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30">
                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.02]">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <span className="material-symbols-outlined text-blue-500 text-2xl">monitoring</span>
                                    <span className="font-bold text-lg text-zinc-100">Analytics & Intelligence</span>
                                </div>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-zinc-500 shrink-0 ml-4">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4 sm:ml-12 mt-2">
                                In-depth visualization of consistency: weekly progress plots, GitHub-style heatmaps, and aggregated 15-day / 90-day performance reviews. Robustly handles edge-cases like missing cycle data dynamically.
                            </div>
                        </details>
                    </div>
                </section>
            </main>

            <div className="relative z-10 w-full mt-auto">
                <Footer />
            </div>
        </div>
    );
}
