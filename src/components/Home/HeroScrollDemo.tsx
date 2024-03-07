"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Badge } from "lucide-react";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Open the door to Smart Networking <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                with DevLink
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Web Developer",
    image: "https://images.pexels.com/photos/1215695/pexels-photo-1215695.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "1st year",
  },
  {
    name: "Sarah Singh",
    designation: "Blockchain enthusiast",
    image: "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "1st year",
  },
  {
    name: "Kumar Verma",
    designation: "intern@Civo",
    image: "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "2nd year",
  },
  {
    name: "Jane Smith",
    designation: "Web3 Developer",
    image: "https://images.pexels.com/photos/2245032/pexels-photo-2245032.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "3rd year",
  },
  {
    name: "Joy John",
    designation: "MERN Developer",
    image: "https://images.pexels.com/photos/5638731/pexels-photo-5638731.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "3rd year",
  },
  {
    name: "Ananya Agarwal",
    designation: "UX Designer@DesignHub",
    image: "https://images.pexels.com/photos/1739502/pexels-photo-1739502.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "2nd year",
  },
  {
    name: "Pranav Mehrotra",
    designation: "Fintech Developer",
    image: "https://images.pexels.com/photos/1856477/pexels-photo-1856477.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "2nd year",
  },
  {
    name: "Sahil Ansari",
    designation: "Data Science",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
    Badge: "3rd year",
  },
  {
    name: "Kunal Kushwaha",
    designation: "DevOps enthusiast",
    image: "https://images.pexels.com/photos/2085717/pexels-photo-2085717.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "4th year",
  },
  {
    name: "Ishank Lalwani",
    designation: "Backend Developer",
    image: "https://images.pexels.com/photos/2590287/pexels-photo-2590287.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "2nd year",
  },
  {
    name: "Shashwat Dimri",
    designation: "Frontend Developer",
    image: "https://images.pexels.com/photos/3215733/pexels-photo-3215733.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "2nd year"
  },
  {
    name: "Khushal Bhardwaj",
    designation: "Backend Developer",
    image: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=600",
    Badge: "2nd year"
  },
  {
    name: "Shubh Mehrotra",
    designation: "Full Stack Developer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "2nd year",
  },
  {
    name: "Ananya Tiwari",
    designation: "MTech Student",
    image: "https://images.pexels.com/photos/2424379/pexels-photo-2424379.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "3rd year",
  },
  {
    name: "Krishna Jaiswal",
    designation: "DBMS enthusiast",
    image: "https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "3rd year",
  },
  {
    name: "Shabnam Beg",
    designation: "Network Engineering",
    image: "https://images.pexels.com/photos/5500474/pexels-photo-5500474.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Niel Thompson",
    designation: "CEH Certified",
    image: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Susan Verma",
    designation: "C++, Java Developer",
    image: "https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Ishika Singh",
    designation: "Flutter engineer",
    image: "https://images.pexels.com/photos/4584488/pexels-photo-4584488.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Mentor",
  },
  {
    name: "Palak Tiwari",
    designation: "Government exams aspirant",
    image: "https://images.pexels.com/photos/3794240/pexels-photo-3794240.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Developer",
  },
];
