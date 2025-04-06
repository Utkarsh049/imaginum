import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center mt-[6rem] flex-col items-center gap-6">
        <div className="px-4 py-1 text-[#D4FA00] border border-[#D4FA00] rounded-full text-[0.75rem] font-semibold bg-gradient-to-r from-[#006FFF] via-transparent to-transparent  text-center font-lexend font-light">
          Innovate • Design • Build
        </div>
        <h1 className="font-bold text-white text-[3rem] text-center capitalize leading-[140%] tracking-[0]">
          Building the future with smart,
          <br />
          seamless technology.
        </h1>
        <p className="font-Montserrat font-light text-[1.5rem] leading-[140%] tracking-[0] text-center capitalize text-white">
          We craft cutting-edge technology that simplifies, enhances, and
          <br />
          transforms digital experiences. Let’s build something
          <br /> extraordinary together and shape the future.
        </p>
        <button className="bg-white flex px-4 py-2 rounded-md">
          <p className="pl-2">Explore Now</p>{" "}
          <img src="./src/assets/explore.svg" alt="" />
        </button>
      </div>
      <div className="h-[25rem] flex items-center justify-center font-raleway mt-8">
        <TextHoverEffect text="IMAGINUM" />
      </div>
    </>
  );
};

export default Hero;
