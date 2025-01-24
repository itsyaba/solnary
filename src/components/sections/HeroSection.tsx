"use client";

import { useState } from "react";
import Ripple from "@/components/Ripple";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/spotlight";
import { PlayIcon, XCircleIcon } from "lucide-react";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    console.log("Play video");
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen flex-col gap-4 "
    >
      {/* <div className="">
      <Ripple />
      </div> */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-0" fill="white" />
      {/* <Badge className="z-20 text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex justify-center items-center">We`re Live</Badge> */}

      <h1
        className={
          "text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-stinntUltra"
        }
      >
        Integrate your idea with
        <Cover>Solnary</Cover>
        innovative skills
      </h1>
      <p className=" font-normal text-base text-neutral-300 max-w-4xl text-center mx-auto">
        Welcome to Solnary, your number one source for all web and app-related projects. We`re
        dedicated to providing you the very best of websites, apps, and maintenance packages with an
        emphasis on innovation, security, quality.
      </p>
      <Button
        className="mt-4 px-10 py-6 text-lg font-pontanoSans"
        variant="default"
        size="lg"
        onClick={handlePlayVideo}
      >
        <PlayIcon /> Intro Video{" "}
      </Button>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-2xl">
            <iframe
              className="w-full h-[315px]"
              src="https://www.youtube.com/embed/8is6AdqU6jw?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <XCircleIcon size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
