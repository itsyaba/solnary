"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function FrameworksSection() {
  const frameworks = [
    "Any MVC( framework)",
    "ReactJs",
    "Angular",
    "Vue",
    "React Native",
    "Android Studio",
    "XCode",
    "Laravel",
    "Codeigniter, Zend",
    "CakePHP",
    "Yii",
    "CMS",
    "WordPress",
    "Shopify",
    "OpenCart",
    "Wix",
    "Drupa",
    "And More ...",
  ];

  const capabilities = [
    "Business Websites",
    "Portfolios",
    "E-commerce custom or CMS",
    "Web applications based on customer requirements",
    "Online Stores",
    "Company websites and web applications",
    "Real Estate Web Projects",
    "Web apps for Clinics with online booking functionalities",
    "Grocery stores etc.",
  ];

  return (
    <div className=" text-gray-400 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute -top-4 right-4 left-4 h-16 bg-[#12172B] rounded-t-lg"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: -2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute -top-8 right-8 left-8 h-16 bg-[#1A2139] rounded-t-lg"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: -1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ rotate: 0 }}
            />

            {/* Main Card */}
            <Card className="relative bg-[#0D1326] border-0 shadow-2xl overflow-hidden">
              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TextGenerateEffect
                  words="FRAMEWORKS"
                  className="text-[#F47458] text-xl font-semibold mb-6"
                />
                <motion.ul className="space-y-2">
                  {frameworks.map((framework, index) => (
                    <motion.li
                      key={framework}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <HoverCard>
                        <HoverCardTrigger>
                          <span className="text-gray-400 cursor-pointer">- {framework}</span>
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-[#1A2139] border-none text-gray-300">
                          Click to learn more about {framework}
                        </HoverCardContent>
                      </HoverCard>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="mt-8 bg-[#38B2AC] hover:bg-[#319795] text-white">
                    Custom Request
                  </Button>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>

          {/* Mission & Capabilities Section */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <TextGenerateEffect
                words="OUR MISSION"
                className="text-[#F47458] text-2xl font-semibold mb-4"
              />
              <motion.p
                className="text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our mission at Solnary is to create unique products for each of our clients with
                creativity, innovation, and imagination.
              </motion.p>
            </div>

            <div>
              <TextGenerateEffect
                words="CAPABILITIES"
                className="text-[#F47458] text-2xl font-semibold mb-4"
              />
              <motion.p
                className="text-gray-400 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                We can deliver any kind of web based application. We have completed more than 500
                projects for different companies and clients.
              </motion.p>
              <motion.h3
                className="text-gray-300 mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Domains we work in
              </motion.h3>
              <motion.ul className="space-y-2">
                {capabilities.map((capability, index) => (
                  <motion.li
                    key={capability}
                    className="text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 10, color: "#F47458" }}
                  >
                    {capability}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
