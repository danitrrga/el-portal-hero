import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function Hero() {
    return (
        <div className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_50%_0%,_rgba(30,64,175,0.18)_0%,_rgba(2,6,23,0)_70%)] pointer-events-none opacity-80"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Subtext */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-medium mb-10 leading-relaxed">
                    EL PORTAL is the all-in-one productivity engine for teams and agents.
                    Manage habits, track deep work cycles, and align your foundational
                    goals in one keyboard-centric interface.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <ShinyButton asChild>
                        <Link href="#">
                            Get Started -&gt;
                        </Link>
                    </ShinyButton>
                    <Link
                        className="w-full sm:w-auto px-6 py-2.5 bg-slate-900/50 hover:bg-slate-800/70 text-slate-300 font-medium rounded-xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 ease-out text-xs flex items-center justify-center gap-2 group backdrop-blur-sm shadow-lg shadow-black/20 hover:shadow-[0_0_20px_5px_rgba(30,64,175,0.15)]"
                        href="#"
                    >
                        <span className="font-mono text-[10px] opacity-50 bg-black/30 px-1.5 py-0.5 rounded border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-300">
                            ⌘K
                        </span>
                        Read Documentation
                    </Link>
                </div>
            </div>
        </div>
    );
}
