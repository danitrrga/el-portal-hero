import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingLayout from "@/components/ReadingLayout";

export const metadata: Metadata = {
    title: "Privacy Policy — El Portal",
    description: "How El Portal handles your data and protects your privacy.",
};

export default function PrivacyPage() {
    return (
        <div className="relative w-full overflow-x-hidden bg-zinc-950 min-h-screen">
            {/* Background grid texture */}
            <div
                className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
                style={{
                    maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                }}
            />

            <Navbar />

            <main className="relative z-10 flex-1 pt-24">
                <ReadingLayout>
                    {/* Header */}
                    <header className="pt-16 pb-12">
                        <h1 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight mb-3">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-zinc-500">
                            Last updated — April 13, 2026
                        </p>
                    </header>

                    {/* Content */}
                    <div className="space-y-10 pb-24">
                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Introduction
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                El Portal (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates a mobile-first personal operating system designed for intentional living and peak performance. This Privacy Policy explains how we collect, use, and protect your information when you use our application and website.
                            </p>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                By using El Portal, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Information We Collect
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                We collect the minimum information necessary to provide and improve El Portal:
                            </p>
                            <ul className="list-disc list-inside text-sm text-zinc-400 leading-relaxed space-y-2">
                                <li><span className="text-zinc-300 font-medium">Account data</span> — email address and display name provided during registration</li>
                                <li><span className="text-zinc-300 font-medium">Usage data</span> — habits, tasks, cycles, and performance metrics you create within the app</li>
                                <li><span className="text-zinc-300 font-medium">Device information</span> — device type, operating system, and browser version for compatibility</li>
                                <li><span className="text-zinc-300 font-medium">Analytics</span> — anonymous, aggregated usage patterns to improve the product</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                How We Use Your Information
                            </h2>
                            <ul className="list-disc list-inside text-sm text-zinc-400 leading-relaxed space-y-2">
                                <li>Provide, maintain, and improve El Portal&apos;s core functionality</li>
                                <li>Sync your data across devices</li>
                                <li>Send essential service communications (account verification, security alerts)</li>
                                <li>Analyze aggregated, anonymized trends to guide product development</li>
                            </ul>
                            <p className="text-sm text-zinc-400 leading-relaxed mt-4">
                                We do not sell your personal data to third parties. We do not use your data for advertising.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Data Storage and Security
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                Your data is stored securely using Supabase, hosted on cloud infrastructure with encryption at rest and in transit. We implement industry-standard security measures including:
                            </p>
                            <ul className="list-disc list-inside text-sm text-zinc-400 leading-relaxed space-y-2">
                                <li>TLS encryption for all data in transit</li>
                                <li>AES-256 encryption for data at rest</li>
                                <li>Row-level security policies on all database tables</li>
                                <li>Regular security audits and dependency updates</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Third-Party Services
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                El Portal relies on the following third-party services to operate:
                            </p>
                            <ul className="list-disc list-inside text-sm text-zinc-400 leading-relaxed space-y-2">
                                <li><span className="text-zinc-300 font-medium">Supabase</span> — database, authentication, and real-time sync</li>
                                <li><span className="text-zinc-300 font-medium">Vercel</span> — website hosting and edge delivery</li>
                            </ul>
                            <p className="text-sm text-zinc-400 leading-relaxed mt-4">
                                Each service maintains its own privacy policy. We select providers who meet or exceed our security standards.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Your Rights
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-sm text-zinc-400 leading-relaxed space-y-2">
                                <li><span className="text-zinc-300 font-medium">Access</span> — request a copy of all personal data we hold about you</li>
                                <li><span className="text-zinc-300 font-medium">Correction</span> — update or correct inaccurate information</li>
                                <li><span className="text-zinc-300 font-medium">Deletion</span> — request permanent deletion of your account and all associated data</li>
                                <li><span className="text-zinc-300 font-medium">Export</span> — download your data in a portable format</li>
                            </ul>
                            <p className="text-sm text-zinc-400 leading-relaxed mt-4">
                                To exercise any of these rights, contact us at the address below.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Cookies
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                El Portal uses essential cookies only — session tokens required for authentication. We do not use tracking cookies, advertising pixels, or third-party analytics cookies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Children&apos;s Privacy
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                El Portal is not directed at individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Changes to This Policy
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of El Portal after changes constitutes acceptance of the revised policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                                Contact
                            </h2>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                For privacy-related inquiries, data requests, or concerns, reach us at{" "}
                                <a
                                    href="mailto:privacy@elportal.app"
                                    className="text-zinc-300 underline underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors duration-300"
                                >
                                    privacy@elportal.app
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </ReadingLayout>
            </main>

            <Footer />
        </div>
    );
}
