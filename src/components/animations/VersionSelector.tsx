"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fingerprint, ArrowRight } from "lucide-react";

const versions = [
    { id: "v40", label: "Version 40", status: "archived", date: "Q3 2025" },
    { id: "v41", label: "Version 41", status: "archived", date: "Q4 2025" },
    { id: "v42", label: "Version 42", status: "active", date: "Current", sub: "Internet Kid" },
];

export function VersionSelector() {
    const [activeTab, setActiveTab] = useState("v42");

    return (
        <div className="group p-6 flex flex-col justify-between overflow-hidden relative transition-all duration-300 h-full">
            <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Fingerprint className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-serif italic text-3xl text-charcoal mb-2">Version</h4>
                <p className="text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-4">
                    90 Days - Strategic
                </p>
                <p className="text-sm text-charcoal-light mb-6">
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
                                ? "text-charcoal"
                                : "text-charcoal-light hover:text-charcoal hover:bg-charcoal/5"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeVersionBg"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-lg"
                                />
                            )}

                            <div className="relative z-10 flex flex-col gap-1">
                                <span className={`text-sm font-medium ${isActive ? "text-primary" : ""}`}>
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
                                <ArrowRight className="relative z-10 w-4 h-4 text-primary" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
