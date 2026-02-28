import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ChangelogPage() {
    return (
        <div className="relative min-h-screen w-full flex-col overflow-x-hidden bg-[#0a0a0a]">
            {/* Subtle Top Radial Gradient */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-700/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

            <Navbar />

            <main className="mx-auto flex w-full max-w-[960px] flex-1 flex-col px-6 py-32 lg:px-10">
                {/* Title & Filter */}
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-black tracking-tight text-slate-100 lg:text-5xl">Changelog</h1>
                        <p className="text-slate-400 text-lg">Stay updated with our latest improvements and technical milestones.</p>
                    </div>

                    {/* Segmented Control (Shadcn Style) */}
                    <div className="flex h-11 items-center rounded-xl bg-slate-900/80 p-1 border border-slate-800 shadow-inner">
                        <button className="flex h-full flex-1 items-center justify-center rounded-lg bg-slate-800 px-6 text-sm font-semibold text-white shadow-sm transition-colors">All</button>
                        <button className="flex h-full flex-1 items-center justify-center rounded-lg px-6 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors">Features</button>
                        <button className="flex h-full flex-1 items-center justify-center rounded-lg px-6 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors">Fixes</button>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative border-l border-slate-800 ml-3 pl-8 pb-12">

                    {/* Entry 1 */}
                    <div className="group relative mb-16">
                        {/* Glowing Dot */}
                        <div className="absolute -left-[41px] top-1.5 size-5 rounded-full border-4 border-[#0a0a0a] bg-blue-700 shadow-[0_0_15px_rgba(37,106,244,0.6)] group-hover:shadow-[0_0_25px_rgba(37,106,244,0.8)] transition-all"></div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-blue-700/10 px-3 py-1 text-xs font-bold tracking-wider text-blue-500 uppercase">v1.2.0</span>
                                <span className="text-sm font-medium text-slate-500">March 15, 2024</span>
                                <div className="flex gap-2">
                                    <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-500 border border-emerald-500/20">New Feature</span>
                                    <span className="rounded-md bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-500 border border-blue-500/20">Optimization</span>
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition-all hover:border-blue-700/30 hover:bg-slate-900/50 shadow-sm">
                                <h3 className="mb-3 text-xl font-bold text-slate-100">Core Engine Optimization & Real-time Sync</h3>
                                <div className="space-y-3 text-slate-400 leading-relaxed">
                                    <p>We've completely rewritten our core synchronization engine to reduce latency by 45% in high-concurrency environments.</p>
                                    <ul className="list-inside list-disc space-y-1 ml-2">
                                        <li>Implemented WebAssembly-based data parsing for 3x faster processing.</li>
                                        <li>Optimized GraphQL fragments to reduce payload size by 20kb per request.</li>
                                        <li>Added support for offline persistence via IndexedDB.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Entry 2 */}
                    <div className="group relative mb-16">
                        <div className="absolute -left-[41px] top-1.5 size-5 rounded-full border-4 border-[#0a0a0a] bg-blue-700/40 shadow-none transition-all group-hover:bg-blue-700 group-hover:shadow-[0_0_15px_rgba(37,106,244,0.6)]"></div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-blue-700/10 px-3 py-1 text-xs font-bold tracking-wider text-blue-500 uppercase">v1.1.5</span>
                                <span className="text-sm font-medium text-slate-500">March 02, 2024</span>
                                <div className="flex gap-2">
                                    <span className="rounded-md bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-purple-500 border border-purple-500/20">Collaborative</span>
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition-all hover:border-blue-700/30 hover:bg-slate-900/50 shadow-sm">
                                <h3 className="mb-3 text-xl font-bold text-slate-100">Collaborative Workspaces & Multi-tenant Roles</h3>
                                <div className="space-y-3 text-slate-400 leading-relaxed">
                                    <p>Introducing enterprise-grade workspace management. You can now define granular permissions and invite external contributors to specific sub-modules.</p>
                                    <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-700/5 border border-blue-700/10 mt-4">
                                        <span className="material-symbols-outlined text-blue-700">info</span>
                                        <p className="text-sm font-medium text-blue-700">This update requires workspace administrators to re-validate user roles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Entry 3 */}
                    <div className="group relative mb-16">
                        <div className="absolute -left-[41px] top-1.5 size-5 rounded-full border-4 border-[#0a0a0a] bg-blue-700/40 shadow-none transition-all group-hover:bg-blue-700 group-hover:shadow-[0_0_15px_rgba(37,106,244,0.6)]"></div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-blue-700/10 px-3 py-1 text-xs font-bold tracking-wider text-blue-500 uppercase">v1.1.0</span>
                                <span className="text-sm font-medium text-slate-500">February 18, 2024</span>
                                <div className="flex gap-2">
                                    <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-500 border border-amber-500/20">Search</span>
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition-all hover:border-blue-700/30 hover:bg-slate-900/50 shadow-sm">
                                <h3 className="mb-3 text-xl font-bold text-slate-100">Advanced Search Syntax</h3>
                                <div className="space-y-3 text-slate-400 leading-relaxed">
                                    <p>Unlock the power of your data with our new search query language. Use filters like `from:user`, `has:attachment`, and boolean operators `AND`, `OR`, `NOT`.</p>
                                    <code className="block bg-slate-800 p-4 rounded-lg text-sm text-pink-400 overflow-x-auto">
                                        type:document AND status:active AND (author:me OR label:urgent)
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Entry 4 (Fix) */}
                    <div className="group relative mb-8">
                        <div className="absolute -left-[41px] top-1.5 size-5 rounded-full border-4 border-[#0a0a0a] bg-blue-700/40 shadow-none transition-all group-hover:bg-blue-700 group-hover:shadow-[0_0_15px_rgba(37,106,244,0.6)]"></div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-blue-700/10 px-3 py-1 text-xs font-bold tracking-wider text-blue-500 uppercase">v1.0.4</span>
                                <span className="text-sm font-medium text-slate-500">February 10, 2024</span>
                                <div className="flex gap-2">
                                    <span className="rounded-md bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-rose-500 border border-rose-500/20">Hotfix</span>
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition-all hover:border-blue-700/30 hover:bg-slate-900/50 shadow-sm">
                                <h3 className="mb-3 text-xl font-bold text-slate-100">Performance Hotfix</h3>
                                <div className="space-y-2 text-slate-400 text-sm">
                                    <p>• Fixed a memory leak in the dashboard charts when switching views rapidly.</p>
                                    <p>• Corrected timestamp formatting for users in GMT+13 timezone.</p>
                                    <p>• Resolved a UI glitch where the sidebar would flicker on mobile Safari.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Call to Action */}
                <div className="mt-12 flex flex-col items-center justify-center rounded-2xl bg-blue-700/5 border border-blue-700/20 p-12 text-center">
                    <h2 className="mb-4 text-2xl font-bold text-slate-100">Be the first to know</h2>
                    <p className="mb-8 max-w-md text-slate-400">Subscribe to our developer mailing list to receive technical deep-dives and early access to beta features.</p>
                    <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
                        <input className="flex-1 rounded-lg border-slate-800 bg-slate-900 px-4 py-3 text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 placeholder:text-slate-600 outline-none" placeholder="your@email.com" type="email" />
                        <button className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-700/20">Subscribe</button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
