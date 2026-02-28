import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,64,175,0.1)_0%,_transparent_70%)]"></div>
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>
            <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    Ready to optimize your <br />
                    <span className="text-primary-glow">existence?</span>
                </h2>
                <p className="text-lg text-slate-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of engineers, designers, and founders who use EL PORTAL to
                    manage their life&apos;s work.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <ShinyButton asChild>
                        <Link href="#">
                            Start for free
                        </Link>
                    </ShinyButton>
                    <span className="text-sm text-slate-500">
                        No credit card required
                    </span>
                </div>
            </div>
        </section>
    );
}
