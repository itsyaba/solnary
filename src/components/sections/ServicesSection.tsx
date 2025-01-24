"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Grid } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Create refs for each service section's drag constraints
  const webDevRef = useRef<HTMLDivElement>(null);
  const mobileDevRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Monitor className="w-6 h-6 text-[#F47458]" />,
      title: "WEB DEVELOPMENT",
      color: "from-[#F47458] to-[#F47458]",
      ref: webDevRef,
      items: [
        "BUSINESS WEBSITES",
        "E-COMMERCE CUSTOM OR CMS",
        "REACT.JS/ANGULAR/VUE WEBAPP",
        "WORDPRESS",
        "SHOPIFY",
        "PORTFOLIOS",
        "REAL ESTATE WEB PROJECTS",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#E83A95]" />,
      title: "MOBILE APP DEVELOPMENT",
      color: "from-[#E83A95] to-[#E83A95]",
      ref: mobileDevRef,
      items: ["ANDROID APP DEVELOPMENT", "IOS APP DEVELOPMENT", "REACT NATIVE", "FLUTTER"],
    },
    {
      icon: <Grid className="w-6 h-6 text-[#3B82F6]" />,
      title: "ON DEMAND SOLUTIONS",
      color: "from-[#3B82F6] to-[#3B82F6]",
      ref: solutionsRef,
      items: [
        "HEALTHCARE APPS",
        "NODEJS DEVELOPMENT",
        "PYTHON DEVELOPMENT",
        "FIREBASE DEVELOPMENT",
        "REAL-ESTATE APPS",
        "SOCIAL MEDIA APPS",
        "ENTERTAINMENT & EVENT APPS",
        "TRAVEL APPS",
        "TAXI & CAB BOOKING APPS",
        "FOOD & RESTAURANT APPS",
        "EDUCATION & ELEARNING APPS",
      ],
    },
  ];

  const ratings = [
    { label: "INNOVATION", value: 90, color: "bg-cyan-400" },
    { label: "SECURITY", value: 95, color: "bg-[#F47458]" },
    { label: "CREATIVITY", value: 95, color: "bg-blue-500" },
  ];

  return (
    <div ref={ref} className="text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Let Solnary contribute to your business growth by helping you build industry standard
          quality project.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-6">
                {service.icon}
                <h3
                  className={`text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                >
                  {service.title}
                </h3>
              </div>
              <motion.div ref={service.ref} className="min-h-[200px] relative overflow-hidden">
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      drag
                      dragConstraints={service.ref}
                      dragElastic={0.2}
                      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                      whileDrag={{ scale: 1.1, zIndex: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + itemIndex * 0.1 }}
                      className="text-xs bg-[#1A1F35] px-4 py-2 rounded-full text-gray-400 hover:bg-[#252B45] transition-colors cursor-grab active:cursor-grabbing"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              {index < 2 && (
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="space-y-6 max-w-md">
          {ratings.map((rating, index) => (
            <motion.div
              key={rating.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">{rating.label}</span>
                <span className="text-sm text-gray-400">{rating.value}%</span>
              </div>
              <div className="h-1 bg-[#1A1F35] rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${rating.color}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${rating.value}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-right"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button size="lg" className="bg-[#F47458] hover:bg-[#E56447] text-white">
            Contact Sales →
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
