import { Mail, Lock, Eye } from "lucide-react";

export default function SecuritySection() {
    return (
        <section className="py-24 border-t border-slate-800/30 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Login Card */}
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute top-10 left-10 w-full h-full bg-blue-500/8 rounded-full blur-[80px] pointer-events-none"></div>
                            <div className="glass-panel rounded-[32px] p-8 border border-slate-800/50 shadow-2xl shadow-black/20 max-w-sm mx-auto transform rotate-[-5deg] hover:rotate-0 transition-all duration-500 ease-out relative z-10 hover:shadow-[0_0_40px_10px_rgba(30,64,175,0.12)]">
                                <div className="flex justify-center mb-8">
                                    <span className="font-bold text-xl text-white tracking-tight flex items-center">
                                        EL P<img src="/icon.svg" alt="El Portal Icon" className="w-[1em] h-[1em] mx-[1px]" />RTAL
                                    </span>
                                </div>
                                <div className="text-center mb-8">
                                    <h4 className="text-white text-lg font-medium mb-1">
                                        Log in
                                    </h4>
                                    <p className="text-[10px] text-slate-500">
                                        Access your secure encrypted performance hub.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-black/30 border border-slate-800/30 rounded-lg p-3 flex items-center gap-3">
                                        <Mail size={14} className="text-slate-500" />
                                        <div className="text-xs text-slate-500">Email address</div>
                                    </div>
                                    <div className="bg-black/30 border border-slate-800/30 rounded-lg p-3 flex items-center gap-3 justify-between">
                                        <div className="flex items-center gap-3">
                                            <Lock size={14} className="text-slate-500" />
                                            <div className="text-xs text-slate-500">Password</div>
                                        </div>
                                        <Eye size={14} className="text-slate-600 cursor-pointer hover:text-white transition-all duration-300" />
                                    </div>
                                    <button className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 hover:border-blue-500/50 text-white text-xs font-bold py-3 rounded-xl tracking-wider transition-all duration-500 ease-out shadow-[0_0_15px_rgba(30,64,175,0.15)] hover:shadow-[0_0_25px_rgba(30,64,175,0.3)]">
                                        AUTHENTICATE
                                    </button>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-800/30 text-center">
                                    <div className="text-[9px] uppercase tracking-widest text-slate-600 mb-4">
                                        Network Protocol
                                    </div>
                                    <button className="w-full bg-slate-900/50 hover:bg-slate-800/70 text-slate-300 text-[10px] font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 border border-slate-800/50 hover:border-blue-500/30">
                                        <span className="font-bold text-blue-500">G</span> LOG IN
                                        WITH GOOGLE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text + Stats */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Security meets speed.
                        </h2>
                        <p className="text-lg text-slate-300 font-medium mb-8 leading-relaxed">
                            Every interaction in EL PORTAL is encrypted and designed for
                            milliseconds of latency. Keep your data private and your workflows
                            instant.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-primary pl-4 relative">
                                <div className="absolute -left-[3px] top-0 h-full w-[2px] bg-primary shadow-[0_0_10px_rgba(30,64,175,0.8)]"></div>
                                <div className="text-2xl font-bold text-white mb-1">
                                    &lt; 50ms
                                </div>
                                <div className="text-sm text-slate-500">
                                    Interaction latency
                                </div>
                            </div>
                            <div className="border-l-2 border-primary pl-4 relative">
                                <div className="absolute -left-[3px] top-0 h-full w-[2px] bg-primary shadow-[0_0_10px_rgba(30,64,175,0.8)]"></div>
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
