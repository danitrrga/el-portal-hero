"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket, Sparkles, Wrench, Tag } from "lucide-react";

type FilterType = "All" | "Features" | "Fixes" | "Release";

const filterOptions: { label: FilterType; icon: React.ReactNode }[] = [
    { label: "All", icon: null },
    { label: "Features", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: "Fixes", icon: <Wrench className="w-3.5 h-3.5" /> },
    { label: "Release", icon: <Rocket className="w-3.5 h-3.5" /> },
];

const changelogData = [
    {
        version: "2.0.0",
        date: "March 14, 2026",
        type: "Release" as const,
        title: "Version 2.0 - Official Release",
        description: "Portal V2 is live. A ground-up rebuild delivering a mobile-first experience, unified architecture, semantic design system, and a completely overhauled interaction model.",
        highlight: "All existing user data has been seamlessly migrated. No action required.",
    },
    {
        version: "2.0.16",
        date: "April 02, 2026",
        type: "Features" as const,
        title: "Trends Mobile, Performance & Polish",
        description: "The Trends analytics dashboard has been optimized for mobile and polished for speed - lazy-loaded sections, single-pass computation, and a redesigned empty state.",
        items: [
            "Mobile trends page with responsive layout and floating pill navigator",
            "Skeleton loading during data fetch with lazy below-fold sections",
            "Monochromatic palette - all charts unified under a refined color scheme",
        ],
    },
    {
        version: "2.0.15",
        date: "March 19, 2026",
        type: "Features" as const,
        title: "Trends - Analytics Dashboard",
        description: "A full analytics dashboard for visualizing your Pulse data over time - mood trajectories, vitals, sleep, activities, emotions, and behavioral correlations across 5 time scales.",
        items: [
            "9 visualization sections including mood trends, vitals, sleep duration, and more",
            "5 time scales: Week, month, year, cycle, and version",
            "Correlation insights surfacing activities linked to mood patterns",
        ],
    },
    {
        version: "2.0.13",
        date: "March 18, 2026",
        type: "Features" as const,
        title: "Daily Pulse - Check-In System",
        description: "Track your daily well-being through structured morning and evening check-ins. Daily Pulse captures mood, vitals, emotions, and activities.",
        items: [
            "Morning check-in with mood via interactive MoodOrb",
            "Evening check-in with productivity, stress, and energy tracking",
            "PulseCard with animated sky and night gradients",
        ],
    },
    {
        version: "2.0.10",
        date: "March 28, 2026",
        type: "Fixes" as const,
        title: "Architecture, Accessibility & Performance",
        description: "A sweeping refactor pass decomposing monolithic pages, adding WCAG 2.1 AA compliance, and parallelizing data fetching.",
        items: [
            "Lab page decomposed into 6 focused components",
            "ARIA roles, labels, and keyboard navigation added",
            "Promise.all for parallel data fetching",
        ],
    },
    {
        version: "2.0.4",
        date: "March 12, 2026",
        type: "Features" as const,
        title: "Mobile-First Experience",
        description: "Portal is no longer desktop-only. A full mobile experience has been built from the ground up with dedicated routes and native-feeling navigation.",
        items: [
            "Dedicated mobile routes for all core features",
            "Bottom tab navigation with haptic feedback",
            "Pull-to-refresh and swipe gestures",
        ],
    },
];

export default function ChangelogPage() {
    const [filter, setFilter] = useState<FilterType>("All");
    const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });

    const filteredData = changelogData.filter(
        (item) => filter === "All" || item.type === filter
    );

    return (
        <div className="relative w-full overflow-x-hidden bg-cream min-h-screen">
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6">
                    <motion.div
                        ref={heroRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight tracking-tight mb-6 text-balance">
                            Changelog
                        </h1>

                        <p className="text-lg md:text-xl text-charcoal-light max-w-lg mx-auto leading-relaxed mb-10">
                            Every improvement, feature, and fix - documented and transparent.
                        </p>

                        {/* Filter Tabs */}
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            {filterOptions.map((option) => (
                                <button
                                    key={option.label}
                                    onClick={() => setFilter(option.label)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        filter === option.label
                                            ? "bg-primary text-white"
                                            : "bg-white text-charcoal-light border border-charcoal/10 hover:border-primary/30"
                                    }`}
                                >
                                    {option.icon}
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Timeline */}
                <section className="py-16 md:py-24 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-charcoal/10" />

                            <div className="space-y-12">
                                {filteredData.map((item, index) => (
                                    <motion.div
                                        key={item.version}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.05,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        viewport={{ once: true }}
                                        className="relative pl-8 md:pl-20"
                                    >
                                        {/* Timeline dot */}
                                        <div className={`absolute left-0 md:left-8 top-2 w-4 h-4 rounded-full border-2 -translate-x-1/2 ${
                                            item.type === "Release"
                                                ? "bg-accent border-accent"
                                                : item.type === "Features"
                                                ? "bg-primary border-primary"
                                                : "bg-charcoal-light border-charcoal-light"
                                        }`} />

                                        {/* Card */}
                                        <div className="bg-white rounded-2xl border border-charcoal/5 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                                            {/* Header */}
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                                                    item.type === "Release"
                                                        ? "bg-accent/10 text-accent"
                                                        : item.type === "Features"
                                                        ? "bg-primary/10 text-primary"
                                                        : "bg-charcoal/10 text-charcoal-light"
                                                }`}>
                                                    {item.type === "Release" && <Rocket className="w-3 h-3" />}
                                                    {item.type === "Features" && <Sparkles className="w-3 h-3" />}
                                                    {item.type === "Fixes" && <Wrench className="w-3 h-3" />}
                                                    {item.type}
                                                </span>
                                                <span className="text-xs text-charcoal-light flex items-center gap-1">
                                                    <Tag className="w-3 h-3" />
                                                    v{item.version}
                                                </span>
                                                <span className="text-xs text-charcoal-light">
                                                    {item.date}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-semibold text-charcoal mb-3">
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-charcoal-light leading-relaxed mb-4">
                                                {item.description}
                                            </p>

                                            {/* Highlight (for releases) */}
                                            {item.highlight && (
                                                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                                                    <Rocket className="w-5 h-5 text-primary shrink-0" />
                                                    <p className="text-sm font-medium text-primary">
                                                        {item.highlight}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Items list */}
                                            {item.items && (
                                                <ul className="space-y-2">
                                                    {item.items.map((listItem, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                                                            <span className="text-charcoal/30 mt-1">-</span>
                                                            {listItem}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
