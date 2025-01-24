"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mt-20"
        >
          <span className="">
            With a team of experts that have the skills to build high-end projects.
          </span>
          <br />
          <div className="flex items-center justify-center flex-col gap-1 mt-20">
            <span className="text-md md:text-2xl font-stinntUltra tracking-wide hidden lg:block">
              Solnary plans to grow with you and offer all the services you need to help your
              company grow to its fullest potential.
            </span>
            <Link href="#contact">
              <Button className="" size="lg" variant="secondary">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.h1>
      </LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" flex flex-col items-center justify-center gap-4 mt-12"
      >
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Innovation. Security. Quality
        </h1>
        <p className="text-md w-11/12 tracking-wider text-muted-foreground mb-2 text-center">
          Solnary is a team comprised of skilled individuals throughout the world with our
          headquarter located in London Ontario, Canada. Our goal is to deliver projects that are
          innovative, secure, and met with a high stander of quality to our clients. Solnary plans
          to grow with you and offer all the services you need to help your company grow to its
          fullest potential. If you are a startup and looking for a consultant we are here to help
          you and guide you in the right direction. We have a team of experts that have the skills
          to build high-end projects. We offer express and quality web development, app development,
          creative content writing, and competitive SEO services to make sure that you can win in
          the digital field.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
