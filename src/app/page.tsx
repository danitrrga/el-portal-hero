import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";
import LogoBar from "@/components/LogoBar";
import FeaturesSection from "@/components/FeaturesSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Grid Background Overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <Navbar />

      <main>
        <HeroScrollDemo />
        <Hero />
        <LogoBar />
        <FeaturesSection />
        <SecuritySection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
