import React from "react";
import { SpotlightPreview } from "./SpotlightPreview";

export function GridBackgroundDemo() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center md:mb-0 mb-20">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <SpotlightPreview />
    </div>
  );
}
