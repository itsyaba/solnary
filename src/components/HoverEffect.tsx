"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    color: string;
    tags: string[];
    items: string[];
    cta: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 py-10 w-4/6 mx-auto", className)}>
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br opacity-20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.2,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                style={{
                  background: getBackgroundGradient(item.color),
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.tags.map((tag, tagIdx) => (
              <motion.div
                key={tag}
                className="absolute z-50 top-0 left-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredIndex === idx || hoveredIndex === null ? 1 : 0.3,
                  y: 0,
                  top: `${-(tagIdx * 24)}px`,
                }}
                transition={{ duration: 0.2, delay: tagIdx * 0.1 }}
              >
                <div className="text-sm text-gray-500 font-mono">{tag}</div>
              </motion.div>
            ))}
            <CardTitle color={item.color}>{item.name}</CardTitle>
            <CardContent>
              {item.items.map((service, serviceIdx) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: serviceIdx * 0.05 }}
                  className="text-sm text-gray-400"
                >
                  {service}
                </motion.li>
              ))}
            </CardContent>
            <CardFooter>
              <motion.button
                className="px-4 py-2 rounded-full text-white text-sm bg-[#F47458] hover:bg-[#E56447] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.cta}
              </motion.button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Helper function to safely generate the gradient background
const getBackgroundGradient = (color: string) => {
  if (!color) return "transparent";

  const colors = color.split(" ");
  const fromColor = colors[1]?.replace("from-", "") || "#000000"; // Fallback to black if undefined
  const toColor = colors[2]?.replace("to-", "") || "#FFFFFF"; // Fallback to white if undefined

  return `linear-gradient(to bottom right, ${fromColor}, ${toColor})`;
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-2xl h-full w-full p-4  bg-[#0A0F1D] border border-gray-800 group-hover:border-gray-700 relative z-20">
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ color, children }: { color: string; children: React.ReactNode }) => {
  return (
    <h4
      className={cn(
        "text-xl font-semibold mb-4",
        color?.includes("from-[#F47458]") && "text-[#F47458]",
        color?.includes("from-[#E83A95]") && "text-[#E83A95]",
        color?.includes("from-[#38B2AC]") && "text-[#38B2AC]",
        color?.includes("from-[#9333EA]") && "text-purple-500"
      )}
    >
      {children}
    </h4>
  );
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-2 mb-6">{children}</ul>;
};

const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-auto">{children}</div>;
};
