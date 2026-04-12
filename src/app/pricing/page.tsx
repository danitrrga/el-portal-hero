"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ChevronDown, ArrowRight } from "lucide-react";

const tiers = [
    {
        name: "Initiate",
        description: "Start building your first identity version.",
        price: "$0",
        period: "forever free",
        cta: "Begin Your Journey",
        featured: false,
        features: [
            "1 Active Version (90-Day cycle)",
            "1 Cycle at a time (15-Day sprint)",
            "Basic habit tracking (up to 5 habits)",
            "Daily performance scoring",
            "Community access",
        ],
    },
    {
        name: "Lifetime",
        description: "One payment. Full access. Forever.",
        price: "$10",
        period: "one-time",
        cta: "Claim Lifetime Access",
        featured: true,
        badge: "Best Value",
        features: [
            "Unlimited Versions & Cycles",
            "Dual-Progression Goals (Streaks + Projects)",
            "Cinema Mode - 5 immersive slides",
            "The Archives - full knowledge base",
            "Daily Pulse - mood & vitals tracking",
            "Trends - analytics & insights",
            "5-language internationalization",
            "Mobile-optimized experience",
            "Drag-and-drop reordering",
            "Early access to new features",
            "Founding Member badge",
            "Lifetime updates, zero renewals",
        ],
    },
];

const comparisonFeatures = [
    { name: "Habit Tracking + Goal System", initiate: true, lifetime: true },
    { name: "Cinema Mode", initiate: true, lifetime: true },
    { name: "The Archives", initiate: true, lifetime: true },
    { name: "Weekly Review & Recap", initiate: true, lifetime: true },
    { name: "Mobile Experience", initiate: true, lifetime: true },
    { name: "Drag-and-Drop Reordering", initiate: true, lifetime: true },
    { name: "Storage", initiate: "60MB", lifetime: "Unlimited" },
    { name: "Priority Support", initiate: "-", lifetime: true },
    { name: "Trends & Advanced Analytics", initiate: "-", lifetime: true },
];

const faqs = [
    {
        q: "What is a Version?",
        a: "A Version is a 90-day identity phase, a deliberate container for who you're becoming. Each Version has its own title, persona, macro goals, and habits. When it ends, it's permanently archived so you can see how you've evolved.",
    },
    {
        q: "How do Cycles work inside a Version?",
        a: "Each Version is divided into 15-day Cycles, tactical sprints where you define mini-priorities, select habits, and execute daily. At the end of every Cycle, your performance is snapshotted and you decide which habits to carry forward.",
    },
    {
        q: "Why is it only $10?",
        a: "Portal is built for serious operators, not for profit margins. A one-time $10 payment unlocks everything. Future updates are included. No subscriptions, no renewals, no hidden fees.",
    },
    {
        q: "What happens to my data if I stay on the free tier?",
        a: "Your data is never deleted. On the Initiate tier, advanced features like Cinema Mode and The Archives are not available, but your Versions, Cycles, and performance history remain fully intact.",
    },
];

export default function PricingPage() {
    const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [tableRef, tableInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <div className="relative w-full overflow-x-hidden bg-cream min-h-screen">
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
                    <motion.div
                        ref={heroRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight tracking-tight mb-6 text-balance">
                            Invest in your identity
                        </h1>

                        <p className="text-lg md:text-xl text-charcoal-light max-w-lg mx-auto leading-relaxed mb-12">
                            Portal is the bridge between your current self and your future self. Start free, or unlock everything forever.
                        </p>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {tiers.map((tier, index) => (
                                <motion.div
                                    key={tier.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={`relative flex flex-col p-8 rounded-2xl text-left transition-all duration-300 ${
                                        tier.featured
                                            ? "bg-primary text-white shadow-xl shadow-primary/20"
                                            : "bg-white border border-charcoal/10 hover:border-primary/30 hover:shadow-lg"
                                    }`}
                                >
                                    {tier.badge && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                            {tier.badge}
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className={`text-xl font-semibold mb-2 ${tier.featured ? "text-white" : "text-charcoal"}`}>
                                            {tier.name}
                                        </h3>
                                        <p className={`text-sm mb-4 ${tier.featured ? "text-white/70" : "text-charcoal-light"}`}>
                                            {tier.description}
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                            <span className={`text-4xl font-bold ${tier.featured ? "text-white" : "text-charcoal"}`}>
                                                {tier.price}
                                            </span>
                                            <span className={`text-sm ${tier.featured ? "text-white/60" : "text-charcoal-light"}`}>
                                                {tier.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={`w-full h-px mb-6 ${tier.featured ? "bg-white/20" : "bg-charcoal/10"}`} />

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-sm">
                                                <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.featured ? "text-white" : "text-primary"}`} />
                                                <span className={tier.featured ? "text-white/90" : "text-charcoal-light"}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="https://el-portal-app.vercel.app"
                                        className={`w-full py-3.5 px-6 rounded-full font-medium text-center transition-all duration-300 ${
                                            tier.featured
                                                ? "bg-white text-primary hover:bg-cream"
                                                : "bg-charcoal text-white hover:bg-charcoal-light"
                                        }`}
                                    >
                                        {tier.cta}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Feature Comparison */}
                <section className="py-20 md:py-28 px-6 bg-warm-white">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            ref={tableRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={tableInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h2 className="font-serif italic text-3xl md:text-4xl text-charcoal text-center mb-12">
                                Feature Comparison
                            </h2>

                            <div className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-charcoal/10">
                                            <th className="p-5 text-charcoal font-semibold text-sm">Feature</th>
                                            <th className="p-5 text-charcoal-light font-medium text-sm text-center">Initiate</th>
                                            <th className="p-5 text-primary font-semibold text-sm text-center">Lifetime</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-charcoal/5">
                                        {comparisonFeatures.map((row, i) => (
                                            <tr key={row.name} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                                                <td className="p-5 text-charcoal text-sm">{row.name}</td>
                                                <td className="p-5 text-center">
                                                    {row.initiate === true ? (
                                                        <Check className="w-4 h-4 text-primary mx-auto" />
                                                    ) : row.initiate === "-" ? (
                                                        <span className="text-charcoal/30">-</span>
                                                    ) : (
                                                        <span className="text-charcoal-light text-sm">{row.initiate}</span>
                                                    )}
                                                </td>
                                                <td className="p-5 text-center">
                                                    {row.lifetime === true ? (
                                                        <Check className="w-4 h-4 text-primary mx-auto" />
                                                    ) : (
                                                        <span className="text-charcoal font-medium text-sm">{row.lifetime}</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 md:py-28 px-6 bg-cream">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            ref={faqRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={faqInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h2 className="font-serif italic text-3xl md:text-4xl text-charcoal text-center mb-12">
                                Common Questions
                            </h2>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <motion.details
                                        key={faq.q}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={faqInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="group bg-white rounded-xl border border-charcoal/10 overflow-hidden transition-all duration-300 hover:border-primary/30"
                                    >
                                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                            <span className="font-medium text-charcoal">{faq.q}</span>
                                            <ChevronDown className="w-5 h-5 text-charcoal-light transition-transform duration-300 group-open:rotate-180" />
                                        </summary>
                                        <div className="px-5 pb-5 text-charcoal-light leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.details>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-20 md:py-28 px-6 bg-primary">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif italic text-4xl md:text-5xl text-white mb-6">
                            Ready to begin?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Join thousands of high performers who use Portal to architect their ideal life.
                        </p>
                        <Link
                            href="https://el-portal-app.vercel.app"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium transition-all duration-300 hover:bg-cream hover:shadow-xl"
                        >
                            Get Started Free
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
