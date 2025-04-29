
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainTriggersSection from "@/components/PainTriggersSection";
import SolutionArchitecture from "@/components/SolutionArchitecture";
import UseCasesSection from "@/components/UseCasesSection";
import DemoSection from "@/components/DemoSection";
import AIAgentSection from "@/components/AIAgentSection";
import EcosystemSection from "@/components/EcosystemSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-irrelevant-background text-white">
      <Header />
      <HeroSection />
      <PainTriggersSection />
      {/* <SolutionArchitecture /> */}
      <UseCasesSection />
      <DemoSection />
      <AIAgentSection />
      <EcosystemSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
