import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
};

export default HomePage;
