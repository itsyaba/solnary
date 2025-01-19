import React from 'react'
// import Ripple from "@/components/Ripple";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/spotlight";
import {  PlayIcon } from "lucide-react";

const HeroSection = () => {
  return (
      <section
        id="home"
        className="relative flex items-center justify-center h-screen flex-col gap-4"
      >
        {/* <Ripple /> */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        {/* <Badge className="z-20 text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex justify-center items-center">We`re Live</Badge> */}

        <h1
          className={
            "text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-stinntUltra"
          }
        >
          Integrate your idea with
          <Cover>Solnary</Cover>
          innovative skills
        </h1>
        <p className=" font-normal text-base text-neutral-300 max-w-5xl text-center mx-auto">
          Welcome to Solnary, your number one source for all web and app-related projects. We`re
          dedicated to providing you the very best of websites, apps, and maintenance packages with
          an emphasis on innovation, security, quality.
        </p>
        <Button className="mt-4 px-10 py-6 text-lg font-pontanoSans" variant="default" size="lg">
          <PlayIcon /> Intro Video{" "}
        </Button>
      </section>
  )
}

export default HeroSection