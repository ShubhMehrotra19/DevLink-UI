import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden bg-black/[0.6]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-5">
          DevLink <br /> helps you network fast!
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
          Feeling left out in the dark? Let's shine a light on your next project! 
          Find like-minded individuals in your college. <br /> 
          <span className=" text-xl pt-2 font-medium">Design-Develop-Deploy!</span>
        </p>
      </div>
    </div>
  );
}
