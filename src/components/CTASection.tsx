import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden bg-background-base">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]"></div>
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                    Ready to optimize your <br />
                    <span className="text-primary-glow">existence?</span>
                </h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                    Join thousands of engineers, designers, and founders who use Portal to
                    manage their life&apos;s work.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        className="px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-full transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] text-lg w-full sm:w-auto"
                        href="#"
                    >
                        Start for free
                    </Link>
                    <span className="text-sm text-slate-500">
                        No credit card required
                    </span>
                </div>
            </div>
        </section>
    );
}
