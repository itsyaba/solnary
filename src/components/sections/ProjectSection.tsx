"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedTitle from "../AnimatedTitle";

const ProjectSection = () => {
  return (
    <section className="mt-32 mb-12 w-full h-[80vh]" id="project">
      <AnimatedTitle title="Recent Projects" duration={1} direction="left" />
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-6 w-full h-full">
        <motion.div
          className="relative overflow-hidden group"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="absolute top-full right-0 left-0 bottom-0 rounded-xl hover:top-0 group-hover:top-0 transition-all duration-500 backdrop-blur-lg bg-blue-400 bg-opacity-40">
            <h1 className="flex items-center justify-center h-full text-5xl font-stinntUltra font-semibold text-white opacity-0 group-hover:opacity-100">
              SobrDD
            </h1>
          </div>
          <Image src="/sobrDD.png" alt="SobrDD" width={600} height={600} className="rounded-2xl" />
        </motion.div>
        <motion.div
          className="relative overflow-hidden group"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute top-full right-0 left-0 bottom-0 rounded-xl hover:top-0 group-hover:top-0 transition-all duration-500 backdrop-blur-lg bg-blue-400 bg-opacity-40">
            <h1 className="flex items-center justify-center h-full text-5xl font-stinntUltra font-semibold text-white opacity-0 group-hover:opacity-100">
              Wolfpack
            </h1>
          </div>
          <Image
            src="/wolfpack.png"
            alt="Wolfpack"
            width={600}
            height={600}
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
