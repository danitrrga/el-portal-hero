"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const principles = [
    {
        number: "01",
        title: "Radical Intentionality",
        description:
            "Every interaction is designed to eliminate friction. We strip away the noise of the modern web to foster deep work. Your tools should disappear, leaving only you and your craft.",
    },
    {
        number: "02",
        title: "The Speed of Thought",
        description:
            "Software should respond before you've even finished the action. Low latency isn't a feature; it's a fundamental requirement for excellence.",
    },
    {
        number: "03",
        title: "Aesthetic Calibration",
        description:
            "Visual harmony reduces mental fatigue. We use refined typography and warm neutrals to create a workspace that feels like a premium instrument.",
    },
    {
        number: "04",
        title: "Digital Sanctuary",
        description:
            "A private space designed for clarity. Your data is yours, your focus is protected. We build walls so you can think freely.",
    },
    {
        number: "05",
        title: "Tool for Mastery",
        description:
            "Portal doesn't hold your hand; it empowers your expertise. It is a canvas for those who have already mastered their workflow and need a platform that matches their pace.",
    },
    {
        number: "06",
        title: "Flow State First",
        description:
            "Optimization for the cognitive load. Every element earns its place in your field of focus.",
    },
    {
        number: "07",
        title: "Elegant Restraint",
        description:
            "We add nothing that doesn't earn its place. Every pixel has purpose, every transition has intent. Simplicity is the ultimate sophistication.",
    },
];

export default function ManifestoPage() {
    const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [principlesRef, principlesInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [visionRef, visionInView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <div className="relative w-full overflow-x-hidden bg-cream min-h-screen">
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
                    <motion.div
                        ref={heroRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight tracking-tight mb-8 text-balance">
                            A New Era of Focus
                        </h1>

                        <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
                            Portal is crafted for those who demand an immersive, high-performance environment. We believe productivity is not about doing more, but about being present in the work that matters.
                        </p>
                    </motion.div>
                </section>

                {/* Principles Section */}
                <section className="py-20 md:py-28 px-6 bg-warm-white">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            ref={principlesRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center mb-16"
                        >
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs uppercase tracking-widest font-semibold rounded-full mb-6">
                                Our Principles
                            </span>
                            <h2 className="font-serif italic text-4xl md:text-5xl text-charcoal">
                                Built on conviction
                            </h2>
                        </motion.div>

                        <div className="space-y-12 md:space-y-16">
                            {principles.map((principle, index) => (
                                <motion.div
                                    key={principle.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group"
                                >
                                    <div className="flex items-start gap-6 md:gap-8">
                                        <span className="font-serif italic text-5xl md:text-6xl text-primary/20 leading-none select-none">
                                            {principle.number}
                                        </span>
                                        <div className="flex-1 pt-2">
                                            <h3 className="text-xl md:text-2xl font-semibold text-charcoal mb-3">
                                                {principle.title}
                                            </h3>
                                            <p className="text-charcoal-light leading-relaxed">
                                                {principle.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="py-8 px-6 bg-cream">
                    <div className="max-w-3xl mx-auto flex items-center justify-center gap-4">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-charcoal/10" />
                        <span className="text-primary/30 text-sm select-none">&#9670;</span>
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-charcoal/10" />
                    </div>
                </div>

                {/* Vision Section */}
                <section className="py-20 md:py-28 px-6 bg-cream">
                    <motion.div
                        ref={visionRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={visionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs uppercase tracking-widest font-semibold rounded-full mb-6">
                            The North Star
                        </span>

                        <h2 className="font-serif italic text-4xl md:text-5xl text-charcoal mb-8">
                            Your future self, realized
                        </h2>

                        <p className="text-lg text-charcoal-light leading-relaxed mb-12 max-w-2xl mx-auto">
                            Portal exists to bridge the gap between who you are today and who you&apos;re becoming. Every version, every cycle, every habit is a step toward the person you envision yourself to be.
                        </p>

                        <Link
                            href="https://el-portal-app.vercel.app"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                        >
                            Begin Your Journey
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
