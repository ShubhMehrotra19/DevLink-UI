import React from "react";
 
export function GridBackgroundDemo1() {
  return (
    <div className="md:h-screen h-[40rem] md:w-full w-[500px] dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center" style={{maskImage: "radial-gradient(ellipse closest-side at center, transparent 20%, black)"}}> 
    </div>
  );
}