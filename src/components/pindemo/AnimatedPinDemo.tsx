"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="DevLink"
        href="https://devlink-kappa.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Error 404
          </h3>
          <div className="text-base mb-2 mt-0 ml-0 mr-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Seems like you navigated to the wrong page. Hover on the page to navigate back to the home page.
            </span>
          </div>
          <Image src={'/card/error.png'} alt="Error 404" width={700} height={400} />
        </div>
      </PinContainer>
    </div>
  );
}
