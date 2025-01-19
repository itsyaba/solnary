"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <section id="about">
      {" "}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          With a team of experts that have the skills to build high-end projects.
        </motion.h1>
      </LampContainer>
      <p className="">
        Solnary plans to grow with you and offer all the services you need to help your company grow
        to its fullest potential.
      </p>
      <Button className="">Learn More</Button>
      <h1>Innovation. Security. Quality</h1>
      <p className="">
        Solnary is a team comprised of skilled individuals throughout the world with our headquarter
        located in London Ontario, Canada. Our goal is to deliver projects that are innovative,
        secure, and met with a high stander of quality to our clients. Solnary plans to grow with
        you and offer all the services you need to help your company grow to its fullest potential.
        If you are a startup and looking for a consultant we are here to help you and guide you in
        the right direction. We have a team of experts that have the skills to build high-end
        projects. We offer express and quality web development, app development, creative content
        writing, and competitive SEO services to make sure that you can win in the digital field.
      </p>
    </section>
  );
};

export default AboutSection;
