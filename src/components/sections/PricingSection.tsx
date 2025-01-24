"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "../HoverEffect";

const services = [
  {
    name: "Management",
    color: "from-[#F47458] to-[#FF9D88]",
    tags: ["--seo", "--maintenance"],
    items: [
      "SEO Strategy & Plan",
      "Meta on-page Optimization",
      "Premium SEO Plugin",
      "Site Security",
      "Malware Scans & Clean-up",
      "Database Back-up",
      "Technical Support",
      "Troubleshooting",
      "Performance Scans",
      "Google Webmaster",
      "Keyword analysis",
    ],
    cta: "See Pricing",
  },
  {
    name: "Web Development",
    color: "from-[#E83A95] to-[#FF88C7]",
    tags: ["--reactjs", "--wordpress"],
    items: [
      "E-Commerce",
      "Custom Frameworks",
      "Custom Web App",
      "Woo Commerce",
      "Custom Graphic Work",
      "Mobile Friendly",
      "Standard Pages",
      "Social Media Integration",
      "Customized Templates",
    ],
    cta: "Get Started",
  },
  {
    name: "App Development",
    color: "from-[#38B2AC] to-[#7EDCD7]",
    tags: ["--flutter", "--swift"],
    items: [
      "Native Programming",
      "Cross platform Native, Flutter, React Native",
      "Google Developer Set up",
      "App store connect set up",
      "App store Publishing",
      "Custom Graphic Work",
      "Mobile Friendly",
    ],
    cta: "Get Started",
  },
  {
    name: "UI/UX",
    color: "from-[#9333EA] to-[#D5A7FF]",
    tags: ["--xd", "--figma"],
    items: [
      "Mobile app UX and UI design services",
      "Web design services",
      "Sketching & Wireframe",
      "Dynamic prototype",
      "Cross-platform experiences design",
      "Animation prototype",
      "Graphical Interfaces",
      "At less time spent on development",
    ],
    cta: "Get Started",
  },
];

export default function PricingSection() {
  return (
    <div className=" py-20 min-h-screen w-full" id="pricing">
      <div className="mx-auto px-4 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl capitalize">
            Simple, transparent pricing
          </h1>
          <p className="text-md md:text-2xl font-stinntUltra tracking-wide">
            No contracts, No surprise fee
          </p>
        </motion.div>

        <HoverEffect items={services} />
      </div>
    </div>
  );
}
