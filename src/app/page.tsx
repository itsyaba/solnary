import AboutSection from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FaqSection";
import FrameworksSection from "@/components/sections/FrameworksSection";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <FrameworksSection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
