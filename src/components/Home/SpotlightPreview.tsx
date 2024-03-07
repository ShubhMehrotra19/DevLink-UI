import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden bg-black/[0.6] -mt-[66px]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-36 md:pt-0">
        <h1 className="text-6xl flex flex-col justify-center md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-5">
          DevLink<span className="text-4xl">Network Smart, Network Fast</span>
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Feeling left out in the dark? Let's shine a light on your next project! 
          Find like-minded individuals in your college. <br /> 
          <span className=" text-xl pt-2 font-medium">Design-Develop-Deploy!</span>
        </p>
      </div>
    </div>
  );
}
