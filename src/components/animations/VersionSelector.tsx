"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const versions = [
    { id: "v40", label: "Version 40", status: "archived", date: "Q3 2025" },
    { id: "v41", label: "Version 41", status: "archived", date: "Q4 2025" },
    { id: "v42", label: "Version 42", status: "active", date: "Current", sub: "Internet Kid" },
];

export function VersionSelector() {
    const [activeTab, setActiveTab] = useState("v42");

    return (
        <div className="group p-6 rounded-xl flex flex-col justify-between overflow-hidden relative transition-all duration-300 ease-out bg-zinc-950/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] h-full">
            <div>
                <span className="material-symbols-outlined text-blue-500 mb-4 opacity-80 text-3xl transition-transform group-hover:scale-110">
                    layers
                </span>
                <h4 className="font-serif text-3xl text-zinc-100 mb-2">Version</h4>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    90 Days • Strategic
                </p>
                <p className="text-sm text-zinc-400 mb-6">
                    Represents an identity phase. Permanently archived to log personal eras.
                </p>
            </div>

            <div className="flex flex-col gap-2 mt-auto">
                {versions.map((v) => {
                    const isActive = activeTab === v.id;
                    return (
                        <button
                            key={v.id}
                            onClick={() => setActiveTab(v.id)}
                            className={`relative flex items-center justify-between p-3 rounded-lg text-left transition-all duration-300 ${isActive
                                ? "text-zinc-100"
                                : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]"
                                }`}
                        >
                            {/* Active Background Glow */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeVersionBg"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-white/[0.04] border border-zinc-800 backdrop-blur-xl rounded-lg shadow-[0_0_15px_-3px_rgba(30,64,175,0.2)]"
                                />
                            )}

                            <div className="relative z-10 flex flex-col gap-1">
                                <span className={`text-sm font-medium ${isActive ? 'text-primary drop-shadow-[0_0_8px_rgba(30,64,175,0.5)]' : ''}`}>
                                    {v.label} {v.sub && <span className="text-xs italic font-serif ml-1 opacity-80">{v.sub}</span>}
                                </span>
                                <span className="text-[10px] tracking-widest uppercase opacity-70">
                                    {v.status === "active" ? (
                                        <span className="text-primary flex items-center gap-1">
                                            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                                            Active Phase
                                        </span>
                                    ) : (
                                        v.date
                                    )}
                                </span>
                            </div>

                            {isActive && (
                                <span className="relative z-10 material-symbols-outlined text-primary text-sm">
                                    arrow_forward
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
