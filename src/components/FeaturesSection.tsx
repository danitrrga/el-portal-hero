export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-background-base relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        A new species of productivity tool.
                    </h2>
                    <p className="text-lg text-slate-400">
                        Purpose-built for high-performers. Portal sets a new standard for
                        planning, executing, and reviewing your work cycles.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* AI-Driven Workflows */}
                    <div className="group relative bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary-glow border border-primary/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <span className="material-icons">auto_awesome</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                            AI-Driven Workflows
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Portal learns from your habits. Automatic scheduling, intelligent
                            task sorting, and friction warnings help you stay in flow.
                        </p>
                    </div>

                    {/* Smart Habit Tracking */}
                    <div className="group relative bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-accent-green/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mb-6 text-accent-neon-green border border-accent-green/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                            <span className="material-icons">track_changes</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Smart Habit Tracking
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Chain habits together. Visualise your consistency with heatmaps and
                            get nudges when you&apos;re about to break a streak.
                        </p>
                    </div>

                    {/* Integrated Learning Focus */}
                    <div className="group relative bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-purple-500/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                            <span className="material-icons">psychology</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Integrated Learning Focus
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Dedicate cycles to specific skills. Track &quot;Learning
                            Focus&quot; blocks and associate them with your active projects
                            automatically.
                        </p>
                    </div>

                    {/* Friction Monitoring — Full Width */}
                    <div className="col-span-1 lg:col-span-3 group relative bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 overflow-hidden mt-6 shadow-xl">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-6 backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-red shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                                    FRICTION MONITORING
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Identify bottlenecks before they become blockers.
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    Portal analyzes your log data to identify inconsistent sleep
                                    patterns, distraction triggers, and workload imbalances. Get
                                    actionable insights to reclaim your focus.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-sm text-slate-300">
                                        <span className="material-icons text-primary-glow text-lg mt-0.5">
                                            check_circle
                                        </span>
                                        <span>
                                            Real-time distraction alerts based on browser activity.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-300">
                                        <span className="material-icons text-primary-glow text-lg mt-0.5">
                                            check_circle
                                        </span>
                                        <span>
                                            Sleep consistency correlation with output metrics.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-300">
                                        <span className="material-icons text-primary-glow text-lg mt-0.5">
                                            check_circle
                                        </span>
                                        <span>Automated &quot;Deep Work&quot; protection mode.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Panel */}
                            <div className="relative group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-xl opacity-20"></div>
                                <div className="bg-[#0c0c0e]/90 backdrop-blur-xl rounded-xl border border-white/10 p-6 font-mono text-xs text-slate-400 shadow-2xl relative z-10">
                                    {/* Window dots */}
                                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <div className="ml-auto text-[10px] text-slate-600">
                                            analysis.json
                                        </div>
                                    </div>
                                    {/* Code lines */}
                                    <div className="space-y-2">
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">1</span>{" "}
                                            <span className="text-purple-400">const</span>{" "}
                                            <span className="text-blue-400">frictionReport</span> ={" "}
                                            {"{"}
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">2</span>
                                            {"  "}
                                            <span className="text-slate-300">
                                                &quot;status&quot;
                                            </span>
                                            :{" "}
                                            <span className="text-accent-red drop-shadow-[0_0_3px_rgba(239,68,68,0.8)]">
                                                &quot;CRITICAL&quot;
                                            </span>
                                            ,
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">3</span>
                                            {"  "}
                                            <span className="text-slate-300">
                                                &quot;detected_issues&quot;
                                            </span>
                                            : [
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">4</span>
                                            {"   "}
                                            {"{"}
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">5</span>
                                            {"    "}
                                            <span className="text-slate-300">
                                                &quot;type&quot;
                                            </span>
                                            :{" "}
                                            <span className="text-emerald-400">
                                                &quot;sleep_deprivation&quot;
                                            </span>
                                            ,
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">6</span>
                                            {"    "}
                                            <span className="text-slate-300">
                                                &quot;impact&quot;
                                            </span>
                                            :{" "}
                                            <span className="text-orange-400">
                                                &quot;-35% cognitive load&quot;
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">7</span>
                                            {"   "}
                                            {"},"}
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">8</span>
                                            {"   "}
                                            {"{"}
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">9</span>
                                            {"    "}
                                            <span className="text-slate-300">
                                                &quot;type&quot;
                                            </span>
                                            :{" "}
                                            <span className="text-emerald-400">
                                                &quot;context_switching&quot;
                                            </span>
                                            ,
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">
                                                10
                                            </span>
                                            {"    "}
                                            <span className="text-slate-300">
                                                &quot;frequency&quot;
                                            </span>
                                            :{" "}
                                            <span className="text-orange-400">
                                                &quot;High (12/hr)&quot;
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">
                                                11
                                            </span>
                                            {"   "}
                                            {"}"}
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">
                                                12
                                            </span>
                                            {"  "}]
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 text-slate-700 select-none">
                                                13
                                            </span>{" "}
                                            {"}"}
                                        </div>
                                    </div>

                                    {/* Friction Alert Popup */}
                                    <div
                                        className="absolute -right-4 -bottom-4 bg-[#18181b]/90 border border-accent-red/40 p-4 rounded-lg shadow-2xl backdrop-blur-md max-w-[200px] animate-bounce z-20"
                                        style={{
                                            animationDuration: "3s",
                                            boxShadow: "0 0 20px rgba(239, 68, 68, 0.1)",
                                        }}
                                    >
                                        <div className="flex items-center gap-2 text-accent-red text-xs font-bold mb-1 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
                                            <span className="material-icons text-sm">warning</span>{" "}
                                            FRICTION DETECTED
                                        </div>
                                        <div className="text-[10px] text-slate-300 italic">
                                            &quot;Inconsistent sleep, distraction&quot;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
