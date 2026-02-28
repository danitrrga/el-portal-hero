import Link from "next/link";
import { Github, X } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-transparent py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="font-bold text-xl text-white tracking-tighter flex items-center transition-opacity duration-300 group-hover:opacity-80">
                            P
                            <img
                                src="/icon.svg"
                                alt="El Portal Icon"
                                className="w-[1em] h-[1em] mx-[1px]"
                            />
                            RTAL
                        </span>
                    </Link>
                </div>

                {/* Links Section */}
                <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-zinc-400">
                    <Link
                        className="transition-colors duration-300 ease-out hover:text-zinc-100 focus-visible:ring-1 focus-visible:ring-blue-500/50 focus-visible:outline-none rounded-md px-2 py-1 -mx-2"
                        href="#"
                    >
                        Privacy
                    </Link>
                    <Link
                        className="transition-colors duration-300 ease-out hover:text-zinc-100 focus-visible:ring-1 focus-visible:ring-blue-500/50 focus-visible:outline-none rounded-md px-2 py-1 -mx-2"
                        href="#"
                    >
                        Terms
                    </Link>
                    <Link
                        className="flex items-center gap-2 transition-colors duration-300 ease-out hover:text-zinc-100 focus-visible:ring-1 focus-visible:ring-blue-500/50 focus-visible:outline-none rounded-md px-2 py-1 -mx-2"
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <X size={14} />
                        <span>X</span>
                    </Link>
                    <Link
                        className="flex items-center gap-2 transition-colors duration-300 ease-out hover:text-zinc-100 focus-visible:ring-1 focus-visible:ring-blue-500/50 focus-visible:outline-none rounded-md px-2 py-1 -mx-2"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={14} />
                        <span>GitHub</span>
                    </Link>
                </div>

                {/* Copyright & Status Section */}
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>All systems operational</span>
                    </div>
                    <div className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} PORTAL. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
