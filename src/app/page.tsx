import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-cream min-h-screen">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <FeaturesSection />
        <ProcessSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
