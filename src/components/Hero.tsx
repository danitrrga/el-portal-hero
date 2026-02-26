import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.15)_0%,_rgba(9,9,11,0)_70%)] pointer-events-none opacity-80"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-medium mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    v2.0 is now live
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight text-glow-hero">
                    Your shortcut to <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-glow via-blue-200 to-accent-neon-green">
                        high performance.
                    </span>
                </h1>

                {/* Subtext */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                    Portal is the all-in-one productivity engine for teams and agents.
                    Manage habits, track deep work cycles, and align your foundational
                    goals in one keyboard-centric interface.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] text-sm md:text-base border border-transparent"
                        href="#"
                    >
                        Get Started -&gt;
                    </Link>
                    <Link
                        className="w-full sm:w-auto px-8 py-3.5 glass-panel text-slate-300 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all text-sm md:text-base flex items-center justify-center gap-2 group"
                        href="#"
                    >
                        <span className="font-mono text-xs opacity-50 bg-black/30 px-1.5 py-0.5 rounded border border-white/10 group-hover:border-white/30 transition-colors">
                            ⌘K
                        </span>
                        Read Documentation
                    </Link>
                </div>
            </div>
        </div>
    );
}
