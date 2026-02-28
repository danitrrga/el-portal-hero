import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingLayout from "@/components/ReadingLayout";
import ManifestoHero from "@/components/ManifestoHero";
import PrincipleSection from "@/components/PrincipleSection";
import CalloutCard from "@/components/CalloutCard";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";

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
            "Software should respond before you've even finished the action. Low latency isn't a feature; it's a fundamental requirement for creative momentum.",
    },
    {
        number: "03",
        title: "Aesthetic Calibration",
        description:
            "Visual harmony reduces mental fatigue. We use high-contrast typography and deep neutrals to create a workspace that feels like a premium instrument.",
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
            "El Portal doesn't hold your hand; it empowers your expertise. It is a canvas for those who have already mastered their workflow and need a platform that matches their pace.",
    },
    {
        number: "06",
        title: "Flow State First",
        description:
            "Optimization for the cognitive load. No unnecessary clicks, no distracting animations. Every element earns its place in your field of focus.",
    },
    {
        number: "07",
        title: "Keyboard Sovereignty",
        description:
            "Every action accessible without leaving the keyboard. Speed is native, not an afterthought. The command palette is your cockpit.",
    },
    {
        number: "08",
        title: "Elegant Restraint",
        description:
            "We add nothing that doesn't earn its place. Every pixel has purpose, every transition has intent. Simplicity is the ultimate sophistication.",
    },
];

export default function ManifestoPage() {
    return (
        <>
            <Navbar />

            <main className="flex-1 pt-24">
                <ReadingLayout>
                    {/* Hero */}
                    <ManifestoHero
                        title="A New Era of Focus"
                        subtitle="El Portal is crafted for those who demand an immersive, high-performance environment. We believe productivity is not about doing more, but about being present in the work that matters."
                    />

                    {/* Principles */}
                    <section className="py-16 space-y-12">
                        {principles.map((principle) => (
                            <PrincipleSection
                                key={principle.number}
                                number={principle.number}
                                title={principle.title}
                                description={principle.description}
                            />
                        ))}
                    </section>

                    {/* Diamond section divider */}
                    <div className="flex items-center justify-center gap-4 py-8">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-zinc-700/30" />
                        <span className="text-blue-700/30 text-sm select-none">◆</span>
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-zinc-700/30" />
                    </div>

                    {/* North Star Callout */}
                    <section className="py-12">
                        <CalloutCard
                            title="Our North Star"
                            quote="Build tools so refined they disappear — leaving only the creator and the craft."
                        />
                    </section>

                    {/* Values Mini-Grid */}
                    <section className="py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="group/card card-glow relative overflow-hidden border-zinc-800 bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] transition-all duration-300 ease-out hover:border-blue-500/30">
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-700/[0.03] to-transparent" />
                                <CardContent className="relative p-8">
                                    <div className="w-2 h-2 rounded-full bg-blue-700 mb-4 transition-transform duration-[2000ms] ease-in-out group-hover/card:scale-150" />
                                    <h3 className="text-white font-bold text-lg mb-2">
                                        Flow State First
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Optimization for the cognitive load. No unnecessary clicks, no distracting animations.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="group/card card-glow relative overflow-hidden border-zinc-800 bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_30px_-5px_rgba(30,64,175,0.15)] transition-all duration-300 ease-out hover:border-blue-500/30">
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-700/[0.03] to-transparent" />
                                <CardContent className="relative p-8">
                                    <div className="w-2 h-2 rounded-full bg-blue-700 mb-4 transition-transform duration-[2000ms] ease-in-out group-hover/card:scale-150" />
                                    <h3 className="text-white font-bold text-lg mb-2">
                                        Digital Sanctuary
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        A private space designed for clarity. Your data is yours, your focus is protected.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </ReadingLayout>

                {/* CTA — reused from Home for funnel consistency */}
                <CTASection />
            </main>

            <Footer />
        </>
    );
}
