import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_50%_0%,_rgba(30,64,175,0.18)_0%,_rgba(2,6,23,0)_70%)] pointer-events-none opacity-80"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-medium mb-8 shadow-[0_0_20px_rgba(30,64,175,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(30,64,175,0.8)]"></span>
                    v2.0 is now live
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-6 leading-tight text-glow-hero">
                    Your shortcut to <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-glow via-blue-200 to-accent-neon-green">
                        high performance.
                    </span>
                </h1>

                {/* Subtext */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-medium mb-10 leading-relaxed">
                    Portal is the all-in-one productivity engine for teams and agents.
                    Manage habits, track deep work cycles, and align your foundational
                    goals in one keyboard-centric interface.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:rounded-2xl transition-all duration-500 ease-out shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm md:text-base border border-transparent"
                        href="#"
                    >
                        Get Started -&gt;
                    </Link>
                    <Link
                        className="w-full sm:w-auto px-8 py-3.5 bg-slate-900/50 hover:bg-slate-800/70 text-slate-300 font-medium rounded-xl hover:rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 ease-out text-sm md:text-base flex items-center justify-center gap-2 group backdrop-blur-sm shadow-lg shadow-black/20 hover:shadow-[0_0_20px_5px_rgba(30,64,175,0.15)]"
                        href="#"
                    >
                        <span className="font-mono text-xs opacity-50 bg-black/30 px-1.5 py-0.5 rounded border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-300">
                            ⌘K
                        </span>
                        Read Documentation
                    </Link>
                </div>
            </div>
        </div>
    );
}
