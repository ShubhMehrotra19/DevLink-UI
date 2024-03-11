"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Form } from "./form";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Form />
      <BackgroundBeams />
    </div>
  );
}
