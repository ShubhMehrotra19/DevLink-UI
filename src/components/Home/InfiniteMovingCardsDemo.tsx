"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "With DevLink, connecting and Netwroking with your colleagues becomes better and easier. Just a scan or a link away. It's a must have for every student.",
    name: "Shubh Mehrotra",
    title: "DevLink CEO",
  },
  {
    quote:
      "We use the Github authentication for DevLink to help you know the work of the person you are connecting with. It's a great way to know the person's work and connect with them.",
    name: "Ishank Lalwani",
    title: "DevLink Backend Developer",
  },
  {
    quote: "We have made an effort to make DevLink as user-friendly as possible. Finding likeminded peers can be as difficult as finding a needle in a haystack. DevLink is here to help you with that. We are here to help you grow!",
    name: "Harshvardhan Singh",
    title: "DevLink tester",
  },
  {
    quote:
      "Unlock your potential by finding people with a similar tech-stack. Reduce the time for un-necessary banter with just a scan.",
    name: "Shashwat Dimri",
    title: "DevLink Frontend Developer",
  },
  {
    quote:
      "While mainting the authenticity, it helps you to connect with people, who are better than you in your domain. Through DevLink, we help you grow!",
    name: "Aditya Gupta",
    title: "DevLink tester",
  },
];
