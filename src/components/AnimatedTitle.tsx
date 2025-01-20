"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  duration: number;
  direction: "left" | "right" | "up" | "down";
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, duration, direction }) => {
  const variants = {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={variants}
      className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
    >
      {title}
    </motion.h1>
  );
};

export default AnimatedTitle;
