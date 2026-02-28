import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Player } from "@remotion/player";
import { AsymptoticCurve } from "@/components/remotion/AsymptoticCurve";
import { CyclicalRings } from "@/components/remotion/CyclicalRings";

export default function MethodologyPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-[#0a0a0a]">
            {/* Subtle Top Radial Gradient */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-700/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

            <Navbar />

            <main className="flex-1 px-6 md:px-20 lg:px-40 py-24">
                {/* Hero Section */}
                <section className="flex flex-col items-center text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/10 border border-blue-700/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse"></span>
                        <span className="text-xs font-bold text-blue-700 tracking-widest uppercase">Protocol v2.4</span>
                    </div>

                    <h1 className="text-slate-100 text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        The How
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Exploring the mathematical foundations of El Portal: CCH, Asymptotic Math, and Cycles. An authoritative framework for decentralized architectural scaling.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 group hover:brightness-110 transition-all shadow-[0_0_20px_-5px_rgba(37,106,244,0.4)]">
                            Explore Playbook
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button className="bg-slate-900 border border-slate-800 text-slate-100 px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                            Whitepaper
                        </button>
                    </div>
                </section>

                {/* Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

                    {/* CCH Pillar Card */}
                    <div className="md:col-span-1 bg-slate-900/40 border border-slate-800 rounded-xl p-8 shadow-[0_0_20px_-5px_rgba(37,106,244,0.2)] group hover:border-blue-700/30 transition-all flex flex-col justify-between">
                        <div>
                            <div className="size-12 rounded-lg bg-blue-700/10 border border-blue-700/20 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-blue-700">account_tree</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-4 tracking-tight">CCH Pillar</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Core Concept Hierarchy (CCH) defines the structural integrity of the protocol. It maps complex logical dependencies into a rigid, non-linear architectural framework designed for extreme fault tolerance.
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-800">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="material-symbols-outlined text-sm text-blue-700">check_circle</span>
                                    Hierarchical Data Routing
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="material-symbols-outlined text-sm text-blue-700">check_circle</span>
                                    Recursive Validation
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Asymptotic Math Pillar Card */}
                    <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden shadow-[0_0_20px_-5px_rgba(37,106,244,0.2)] group hover:border-blue-700/30 transition-all">
                        <div className="p-8 pb-0">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-100 tracking-tight">Asymptotic Math</h3>
                                    <p className="text-slate-400 text-sm mt-1">Convergence through recursive limit-approaching models.</p>
                                </div>
                                <span className="px-3 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-700">Live Demo</span>
                            </div>
                        </div>

                        {/* Remotion Embed: Asymptotic Curve */}
                        <div className="relative w-full aspect-video bg-slate-950 mt-4 mx-8 rounded-t-lg border-x border-t border-slate-800 overflow-hidden group-hover:bg-slate-900 transition-colors">
                            <Player
                                component={AsymptoticCurve}
                                durationInFrames={300}
                                compositionWidth={800}
                                compositionHeight={450}
                                fps={30}
                                controls={false}
                                autoPlay
                                loop
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </div>

                    {/* Cycles Pillar Card */}
                    <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden shadow-[0_0_20px_-5px_rgba(37,106,244,0.2)] group hover:border-blue-700/30 transition-all flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-8">
                            <div className="size-10 rounded-lg bg-blue-700/10 border border-blue-700/20 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-blue-700">sync</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-4 tracking-tight">Cycles Pillar</h3>
                            <p className="text-slate-400 leading-relaxed text-sm mb-6">
                                Harmonic oscillations and systemic rotation patterns. Cycles ensure the perpetual motion of the internal economy, balancing inflation and utility through fixed algorithmic phases.
                            </p>
                            <button className="text-blue-700 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                Documentation <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </button>
                        </div>

                        {/* Remotion Embed: Cyclical Rings */}
                        <div className="md:w-1/2 h-64 md:h-auto bg-slate-950 border-l border-slate-800 relative overflow-hidden">
                            <Player
                                component={CyclicalRings}
                                durationInFrames={300}
                                compositionWidth={400}
                                compositionHeight={400}
                                fps={30}
                                controls={false}
                                autoPlay
                                loop
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </div>

                    {/* Tech Summary Card */}
                    <div className="md:col-span-1 bg-slate-900/40 border border-slate-800 rounded-xl p-8 shadow-[0_0_20px_-5px_rgba(37,106,244,0.2)] group hover:border-blue-700/30 transition-all flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">System Health</h4>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-slate-100">Node Sync</span>
                                    <span className="text-blue-500">99.8%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-600 w-[99.8%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-slate-100">Math Proofs Validated</span>
                                    <span className="text-blue-500">1,024</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-600 w-[85%]"></div>
                                </div>
                            </div>

                            <div className="pt-4 grid grid-cols-2 gap-4">
                                <div className="p-3 bg-slate-800/50 rounded-lg text-center border border-slate-800">
                                    <div className="text-xs text-slate-400 mb-1">Latency</div>
                                    <div className="text-lg font-bold text-slate-100">12ms</div>
                                </div>
                                <div className="p-3 bg-slate-800/50 rounded-lg text-center border border-slate-800">
                                    <div className="text-xs text-slate-400 mb-1">Stability</div>
                                    <div className="text-lg font-bold text-blue-500">S++</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Deep-Dive Section (Accordions) */}
                <section className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-100 mb-4 tracking-tight">Technical Proofs</h2>
                        <p className="text-slate-400">Expand the technical documentation for deep-dive analysis of the core pillars.</p>
                    </div>

                    <div className="space-y-4">

                        {/* Accordion Item 1 */}
                        <div className="border border-white/5 bg-slate-900/30 rounded-lg overflow-hidden group">
                            <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                                <span className="text-lg font-semibold text-slate-100 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-700">data_object</span>
                                    CCH Architectural Proofs
                                </span>
                                <span className="material-symbols-outlined text-slate-500 group-hover:text-blue-700 transition-colors transform group-focus:-rotate-180">expand_more</span>
                            </button>
                            <div className="px-6 pb-6 pt-0 border-t border-slate-800/50 mt-2 p-4">
                                <div className="text-slate-400 text-sm leading-relaxed space-y-4 pt-4">
                                    <p>The Core Concept Hierarchy (CCH) functions as a directed acyclic graph (DAG) where each node represents a fundamental axiom of the system. The proof of architectural stability rests on the non-reversibility of transaction lineage within the DAG.</p>
                                    <pre className="bg-black/50 p-4 rounded-lg font-mono text-xs text-blue-400 overflow-x-auto border border-blue-900/30">
                                        {`Function ValidateNode(nodeID, proofSet):
  Result = recursive_hash_verify(nodeID.parents)
  If Result < threshold_asymptotic THEN
    Return Error_Convergence_Failure
  Return SUCCESS`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item 2 - Collapsed UI for demo */}
                        <div className="border border-white/5 bg-slate-900/30 rounded-lg overflow-hidden hover:border-white/10 transition-colors cursor-pointer">
                            <div className="w-full flex items-center justify-between p-6 text-left">
                                <span className="text-lg font-semibold text-slate-100 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-700">functions</span>
                                    Asymptotic Convergence Models
                                </span>
                                <span className="material-symbols-outlined text-slate-500 transition-colors">expand_more</span>
                            </div>
                        </div>

                        {/* Accordion Item 3 - Collapsed UI for demo */}
                        <div className="border border-white/5 bg-slate-900/30 rounded-lg overflow-hidden hover:border-white/10 transition-colors cursor-pointer">
                            <div className="w-full flex items-center justify-between p-6 text-left">
                                <span className="text-lg font-semibold text-slate-100 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-700">history_toggle_off</span>
                                    Cyclical Rotation Dynamics
                                </span>
                                <span className="material-symbols-outlined text-slate-500 transition-colors">expand_more</span>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
