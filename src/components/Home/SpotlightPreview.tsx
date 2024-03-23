"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { signIn } from "next-auth/react";

export function SpotlightPreview() {
  const lightDescription = `Feeling left out in the dark? Let's shine a light on your next project!
  Find like-minded individuals in your college. <br />
  <span class="text-xl pt-2 font-medium">Design-Develop-Deploy!</span>`;

  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden bg-black/[0.6] -mt-[66px]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-36 md:pt-0 flex flex-col justify-center items-center">
        <h1 className="text-6xl flex flex-col justify-center md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-5">
          DevLink<span className="text-4xl">Network Smart, Network Fast</span>
        </h1>
        <p
          className="mt-4 mb-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto p-2"
          dangerouslySetInnerHTML={{ __html: lightDescription }}
        ></p>
        <button
          onClick={() => signIn("github", { callbackUrl: "/home" })}
          className="py-2 px-5 rounded-sm bg-gray-900 text-white font-normal cursor-pointer active:scale-95 hover:bg-transparent transition duration-300 ease-in-out"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
