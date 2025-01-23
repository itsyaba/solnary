"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    items: string[];
    color: string;
    cta: string;
    tags: string[];
  }[];
  className?: string;
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div
      className={cn(
        " grid grid-cols-2 place-items-stretch gap-8 w-full mx-auto px-4 lg:w-4/6",
        className
      )}
    >
      {navItems.map((item, idx) => (
        <div key={idx} className="relative w-full min-h-full">
          {item.tags.map((tag, tagIdx) => (
            <motion.div
              key={tag}
              className="absolute z-10 top-2 left-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeCard === idx || activeCard === null ? 1 : 0.3,
                y: 0,
                top: `${-(tagIdx * 24)}px`,
              }}
              transition={{ duration: 0.2, delay: tagIdx * 0.1 }}
            >
              <div className="text-sm text-gray-500 font-mono">{tag}</div>
            </motion.div>
          ))}

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onHoverStart={() => setActiveCard(idx)}
            onHoverEnd={() => setActiveCard(null)}
          >
            <div
              className={cn(
                "absolute inset-0 rounded-2xl opacity-50 blur-xl",
                activeCard === idx ? "bg-gradient-to-br" : "bg-none",
                item.color
              )}
            />
            <div className="relative bg-[#0A0F1D] border border-gray-800 rounded-2xl p-6 min-h-full">
              <h3
                className={cn(
                  "text-xl font-semibold mb-4",
                  item.color.includes("from-[#F47458]") && "text-[#F47458]",
                  item.color.includes("from-[#E83A95]") && "text-[#E83A95]",
                  item.color.includes("from-[#38B2AC]") && "text-[#38B2AC]",
                  item.color.includes("from-[#9333EA]") && "text-purple-500"
                )}
              >
                {item.name}
              </h3>
              <ul className="space-y-2 mb-6">
                {item.items.map((service, serviceIdx) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + serviceIdx * 0.05 }}
                    className="text-sm text-gray-400"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className={cn(
                  "px-4 py-2 rounded-full text-white text-sm",
                  "bg-[#F47458] hover:bg-[#E56447] transition-colors"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.cta}
              </motion.button>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
