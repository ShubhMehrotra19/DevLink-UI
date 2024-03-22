"use client";
import React from "react";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
  } from "../ui/glowing-stars";

  export function GlowingStarsBackgroundCardPreview({
    cons,
    description,
  }: {
    cons: string;
    description: string; // Correct location
  }) {
    return (
        <div className="flex md:py-20 py-5 md:mb-0 mb-8 items-center justify-center antialiased">
          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle>{cons}</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                {description}
              </GlowingStarsDescription>
            </div>
          </GlowingStarsBackgroundCard>
        </div>
      );
    }

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
