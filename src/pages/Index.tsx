
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NextStepSection from "@/components/NextStepSection";
import MethodSection from "@/components/MethodSection";
import StructureSection from "@/components/StructureSection";
import RadarSection from "@/components/RadarSection";
import MetricsSection from "@/components/MetricsSection";
import CasesSection from "@/components/CasesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <NextStepSection />
      <MethodSection />
      <StructureSection />
      <RadarSection />
      <MetricsSection />
      <CasesSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
