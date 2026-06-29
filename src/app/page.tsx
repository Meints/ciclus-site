import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NichoSection } from "@/components/sections/NichoSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SplitOSSection } from "@/components/sections/SplitOSSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SplitContractsSection } from "@/components/sections/SplitContractsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <NichoSection />
        <FeaturesSection />
        <SplitOSSection />
        <HowItWorksSection />
        <StatsSection />
        <SplitContractsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
