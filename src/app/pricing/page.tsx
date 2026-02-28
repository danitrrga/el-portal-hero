import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
    return (
        <div className="relative w-full overflow-x-hidden bg-[#0a0a0a] bg-[radial-gradient(circle_at_top,rgba(14,59,164,0.15)_0%,rgba(10,10,10,1)_70%)]">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-32">
                {/* Hero Header */}
                <div className="text-center mb-16 space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-100">Pricing</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Choose the plan that fits your workflow. Flexible options for teams of all sizes.
                    </p>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <span className="text-sm font-medium text-slate-400">Monthly</span>
                        <div className="flex h-10 w-64 items-center justify-center rounded-full bg-slate-900 border border-slate-800 p-1">
                            <button className="flex h-full flex-1 items-center justify-center rounded-full text-sm font-medium text-slate-400 transition-all">
                                Monthly
                            </button>
                            <button className="flex h-full flex-1 items-center justify-center rounded-full bg-blue-700 text-white text-sm font-medium shadow-sm transition-all">
                                Yearly
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-400">Yearly</span>
                            <span className="bg-blue-700/20 text-blue-500 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border border-blue-700/30">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tier Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">

                    {/* Starter */}
                    <div className="flex flex-col p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-100 mb-2">Starter</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">$0</span>
                                <span className="text-slate-500 text-sm">/mo</span>
                            </div>
                            <p className="text-slate-400 text-sm mt-4 italic">Perfect for side projects</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                Basic task management
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                5GB secure storage
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                3 active projects
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300 opacity-50">
                                <span className="material-symbols-outlined text-lg">close</span>
                                Priority support
                            </li>
                        </ul>
                        <button className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all">
                            Get Started
                        </button>
                    </div>

                    {/* Pro (Featured) */}
                    <div className="relative flex flex-col p-8 rounded-2xl bg-slate-900/60 border-2 border-blue-700 shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] transform md:scale-105 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full whitespace-nowrap">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-100 mb-2">Pro</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">$19</span>
                                <span className="text-slate-500 text-sm">/mo</span>
                            </div>
                            <p className="text-slate-400 text-sm mt-4 italic">For power users & small teams</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3 text-sm text-slate-100">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                Unlimited projects
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-100">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                50GB secure storage
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-100">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                Advanced analytics
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-100">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                Priority support
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-100">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                Custom integrations
                            </li>
                        </ul>
                        <button className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-lg shadow-blue-700/20">
                            Go Pro
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="flex flex-col p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-100 mb-2">Enterprise</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">$49</span>
                                <span className="text-slate-500 text-sm">/mo</span>
                            </div>
                            <p className="text-slate-400 text-sm mt-4 italic">For scaling organizations</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                Everything in Pro
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                Unlimited storage
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                SSO & SAML Login
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-blue-700 text-lg">check</span>
                                Dedicated account manager
                            </li>
                        </ul>
                        <button className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center">Detailed Comparison</h2>
                    <div className="overflow-x-auto rounded-xl border border-slate-800">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900/50">
                                    <th className="p-6 text-sm font-semibold text-slate-400 border-b border-slate-800">Feature</th>
                                    <th className="p-6 text-sm font-semibold text-slate-100 border-b border-slate-800">Starter</th>
                                    <th className="p-6 text-sm font-semibold text-blue-500 border-b border-slate-800">Pro</th>
                                    <th className="p-6 text-sm font-semibold text-slate-100 border-b border-slate-800">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                <tr>
                                    <td className="p-6 text-sm font-medium text-slate-100">Projects Limit</td>
                                    <td className="p-6 text-sm text-slate-400">3 Projects</td>
                                    <td className="p-6 text-sm text-slate-100">Unlimited</td>
                                    <td className="p-6 text-sm text-slate-100">Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-slate-100">API Access</td>
                                    <td className="p-6 text-sm text-slate-400">Read-only</td>
                                    <td className="p-6 text-sm text-slate-100">Full Access</td>
                                    <td className="p-6 text-sm text-slate-100">Custom High-Rate</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-slate-100">Data Analytics</td>
                                    <td className="p-6 text-sm text-slate-400">Basic</td>
                                    <td className="p-6 text-sm text-slate-100"><span className="material-symbols-outlined text-blue-500">check</span></td>
                                    <td className="p-6 text-sm text-slate-100"><span className="material-symbols-outlined text-blue-500">check</span></td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-slate-100">Custom Domain</td>
                                    <td className="p-6 text-sm text-slate-400">-</td>
                                    <td className="p-6 text-sm text-slate-400">-</td>
                                    <td className="p-6 text-sm text-slate-100"><span className="material-symbols-outlined text-blue-500">check</span></td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-slate-100">SLA Support</td>
                                    <td className="p-6 text-sm text-slate-400">Best effort</td>
                                    <td className="p-6 text-sm text-slate-400">24h Response</td>
                                    <td className="p-6 text-sm text-slate-100">99.9% Uptime</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="group rounded-xl border border-slate-800 bg-slate-900/20 px-6 py-4">
                            <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-100 list-none">
                                <span>Can I switch plans anytime?</span>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments for the remainder of the billing cycle.
                            </p>
                        </details>
                        <details className="group rounded-xl border border-slate-800 bg-slate-900/20 px-6 py-4">
                            <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-100 list-none">
                                <span>Do you offer a free trial?</span>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                                We offer a 14-day free trial on our Pro plan. No credit card is required to start your trial. After 14 days, you can choose a plan or stick with the Starter plan.
                            </p>
                        </details>
                        <details className="group rounded-xl border border-slate-800 bg-slate-900/20 px-6 py-4">
                            <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-100 list-none">
                                <span>What happens to my data if I cancel?</span>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                                If you cancel your paid subscription, your account will revert to the Starter plan. You will still have access to your data, but certain features may be limited according to plan restrictions.
                            </p>
                        </details>
                    </div>
                </div>

                {/* Final CTA glass panel */}
                <div className="bg-white/5 backdrop-blur-md border border-white/5 p-12 rounded-[2rem] text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-700 to-transparent opacity-50"></div>
                    <h2 className="text-4xl font-bold mb-6">Need a custom solution?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        We offer specialized configurations for large-scale operations requiring high security, custom compliance, and dedicated infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-700/30">
                            Contact Enterprise Sales
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/10">
                            View Technical Docs
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
