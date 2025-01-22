import AboutSection from "@/components/sections/AboutSection";
import FrameworksSection from "@/components/sections/FrameworksSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <FrameworksSection />
    </div>
  );
};

export default HomePage;
