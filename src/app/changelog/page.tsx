"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChangelogItem } from "@/components/ChangelogItem";

// Filter type
type FilterType = "All" | "Features" | "Fixes" | "Release";

export default function ChangelogPage() {
    const [filter, setFilter] = useState<FilterType>("All");

    // Extracted changelog data to cleanly filter and map
    const changelogData = [
        {
            version: "1.2.0",
            date: "March 15, 2026",
            tags: ["New Feature", "Optimization"],
            type: "Features",
            title: "Performance Heatmaps & Dual-Progression System V2",
            description: (
                <>
                    <p>We've completely rewritten our core synchronization engine to reduce latency by 45% in high-concurrency environments while heavily upgrading the statistics visualization.</p>
                    <ul className="list-none space-y-2 mt-3">
                        <li className="flex items-start gap-2"><span className="text-zinc-700 mt-1">-</span><span>Implemented asymptotic habit consistency formula (`Progress % = 100 × (1 − e^(−0.061 × streak_days))`).</span></li>
                        <li className="flex items-start gap-2"><span className="text-zinc-700 mt-1">-</span><span>Upgraded weekly progress area plots and introduced GitHub-style day-of-week performance heatmaps.</span></li>
                        <li className="flex items-start gap-2"><span className="text-zinc-700 mt-1">-</span><span>Added support for offline persistence via IndexedDB ensuring day-logs are never lost.</span></li>
                    </ul>
                </>
            ),
        },
        {
            version: "1.1.5",
            date: "March 02, 2026",
            tags: ["Improvement"],
            type: "Features",
            title: "Cinema Mode Enhancements",
            description: (
                <>
                    <p>Visualizing your goals is a core mechanic of El Portal. Cinema Mode has been upgraded for better immersion and focus.</p>
                    <ul className="list-none space-y-2 mt-3">
                        <li className="flex items-start gap-2"><span className="text-zinc-700 mt-1">-</span><span>You can now edit the dynamic caption text overlaying the 5 persistent life slides: Me, Her, Purpose, Social, Material Life.</span></li>
                        <li className="flex items-start gap-2"><span className="text-zinc-700 mt-1">-</span><span>Smoother transitions between slides utilizing Framer Motion.</span></li>
                    </ul>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-950/30 border border-blue-900/50 mt-4">
                        <span className="material-symbols-outlined text-blue-200">info</span>
                        <p className="text-sm font-medium text-blue-200">Existing custom images from Supabase Storage will remain unaffected.</p>
                    </div>
                </>
            ),
        },
        {
            version: "1.1.0",
            date: "February 18, 2026",
            tags: ["New Feature"],
            type: "Features",
            title: "The Archives: Advanced Search Syntax",
            description: (
                <>
                    <p>Unlock the power of writing across My Routines, Mantra Archive, and Theory Notes.</p>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-950/30 border border-blue-900/50 mt-4">
                        <span className="material-symbols-outlined text-blue-200">edit_note</span>
                        <p className="text-sm font-medium text-blue-200">
                            Unleash the power of reflecting on your life and growth.
                        </p>
                    </div>
                </>
            ),
        },
        {
            version: "1.0.0",
            date: "January 26, 2026",
            tags: ["Release"],
            type: "Release",
            title: "Deployment of Version 1",
            description: (
                <>
                    <p>The initial release of El Portal.</p>
                </>
            ),
        },
    ];

    const filteredData = changelogData.filter(item => {
        if (filter === "All") return true;
        if (filter === "Features") return item.tags.some(t => t.toLowerCase().includes("feature") || t.toLowerCase().includes("improvement") || t.toLowerCase().includes("optimization"));
        if (filter === "Fixes") return item.tags.some(t => t.toLowerCase().includes("fix"));
        return true;
    });

    return (
        <div className="relative min-h-screen w-full flex-col overflow-x-hidden bg-zinc-950">
            {/* Background grid texture */}
            <div
                className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
                style={{
                    maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)"
                }}
            />

            {/* Subtle Top Radial Gradient */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-700/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

            <Navbar />

            <main className="relative z-10 mx-auto flex w-full max-w-[960px] flex-1 flex-col px-6 pt-56 pb-24 lg:px-10">
                {/* Title & Filter */}
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-black tracking-tight text-zinc-100 lg:text-5xl">Changelog</h1>
                        <p className="text-zinc-400 text-lg">Stay updated with our latest improvements and technical milestones.</p>
                    </div>

                    {/* Segmented Control (Shadcn Style) */}
                    <div className="flex h-9 items-center rounded-xl bg-zinc-900/80 p-1 border border-white/5 shadow-inner backdrop-blur-md">
                        {(["All", "Features", "Fixes"] as FilterType[]).map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`flex h-full flex-1 items-center justify-center rounded-lg px-5 text-xs font-semibold shadow-sm transition-colors ${filter === f
                                    ? "bg-zinc-800 text-zinc-100" // Active state
                                    : "text-zinc-400 hover:text-zinc-300" // Inactive state
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative mt-8">
                    {/* The absolute vertical line running exactly through the dots */}
                    <div className="absolute left-0 top-4 bottom-0 w-px bg-white/5 z-0 md:top-6" />

                    {filteredData.map((item, index) => (
                        <ChangelogItem
                            key={index}
                            version={item.version}
                            date={item.date}
                            tags={item.tags}
                            title={item.title}
                            description={item.description}
                        />
                    ))}

                    {filteredData.length === 0 && (
                        <div className="text-center py-12 border border-white/5 bg-zinc-900/50 rounded-xl">
                            <p className="text-zinc-400">No entries found for this category.</p>
                        </div>
                    )}
                </div>

            </main>

            <Footer />
        </div>
    );
}
