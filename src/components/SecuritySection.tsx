export default function SecuritySection() {
    return (
        <section className="py-24 border-t border-white/5 bg-[#050507]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Login Card */}
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute top-10 left-10 w-full h-full bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                            <div className="glass-panel rounded-[32px] p-8 border border-white/10 shadow-2xl max-w-sm mx-auto transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 relative z-10">
                                <div className="flex justify-center mb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 blur-[2px] shadow-[0_0_10px_rgba(37,99,235,0.6)]"></div>
                                        <span className="font-bold text-xl text-white tracking-tight">
                                            PORTAL
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center mb-8">
                                    <h4 className="text-white text-lg font-medium mb-1">
                                        Log in
                                    </h4>
                                    <p className="text-[10px] text-slate-400">
                                        Access your secure encrypted performance hub.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-black/30 border border-white/5 rounded-lg p-3 flex items-center gap-3">
                                        <span className="material-icons text-slate-500 text-sm">
                                            email
                                        </span>
                                        <div className="text-xs text-slate-500">Email address</div>
                                    </div>
                                    <div className="bg-black/30 border border-white/5 rounded-lg p-3 flex items-center gap-3 justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="material-icons text-slate-500 text-sm">
                                                lock
                                            </span>
                                            <div className="text-xs text-slate-500">Password</div>
                                        </div>
                                        <span className="material-icons text-slate-600 text-sm cursor-pointer hover:text-white transition-colors">
                                            visibility
                                        </span>
                                    </div>
                                    <button className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 text-white text-xs font-bold py-3 rounded-lg tracking-wider transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                                        AUTHENTICATE
                                    </button>
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                    <div className="text-[9px] uppercase tracking-widest text-slate-600 mb-4">
                                        Network Protocol
                                    </div>
                                    <button className="w-full bg-white/5 hover:bg-white/10 text-slate-300 text-[10px] font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors border border-white/5">
                                        <span className="font-bold text-blue-500">G</span> LOG IN
                                        WITH GOOGLE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text + Stats */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Security meets speed.
                        </h2>
                        <p className="text-lg text-slate-400 mb-8">
                            Every interaction in Portal is encrypted and designed for
                            milliseconds of latency. Keep your data private and your workflows
                            instant.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-primary pl-4 relative">
                                <div className="absolute -left-[3px] top-0 h-full w-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                <div className="text-2xl font-bold text-white mb-1">
                                    &lt; 50ms
                                </div>
                                <div className="text-sm text-slate-500">
                                    Interaction latency
                                </div>
                            </div>
                            <div className="border-l-2 border-primary pl-4 relative">
                                <div className="absolute -left-[3px] top-0 h-full w-[2px] bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                <div className="text-2xl font-bold text-white mb-1">E2EE</div>
                                <div className="text-sm text-slate-500">
                                    End-to-end encryption
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
