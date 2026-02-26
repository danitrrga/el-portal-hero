export default function LogoBar() {
    return (
        <div className="border-y border-white/5 bg-[#050507]/50 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <p className="text-center text-xs text-slate-600 mb-8 font-mono tracking-[0.2em] uppercase">
                    Built for modern teams
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <div className="h-6 flex items-center gap-2 text-white font-bold text-lg">
                        <span className="w-5 h-5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></span>{" "}
                        Vercel
                    </div>
                    <div className="h-6 flex items-center gap-2 text-white font-bold text-lg">
                        <span className="w-5 h-5 bg-white rounded-tr-lg shadow-[0_0_10px_rgba(255,255,255,0.3)]"></span>{" "}
                        Linear
                    </div>
                    <div className="h-6 flex items-center gap-2 text-white font-bold text-lg">
                        <span className="w-5 h-5 border-2 border-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.3)]"></span>{" "}
                        Raycast
                    </div>
                    <div className="h-6 flex items-center gap-2 text-white font-bold text-lg">
                        <span className="w-5 h-5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></span>{" "}
                        OpenAI
                    </div>
                    <div className="h-6 flex items-center gap-2 text-white font-bold text-lg">
                        <span className="w-5 h-5 bg-white skew-x-12 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></span>{" "}
                        Stripe
                    </div>
                </div>
            </div>
        </div>
    );
}
