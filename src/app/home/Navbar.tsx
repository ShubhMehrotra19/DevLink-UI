"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  userImage: string;
}

function Navbar({ userImage }: Props) {


  return (
    <div className="fixed top-0 w-full bg-[rgba(0, 0, 0, 0.07)] backdrop-blur z-30">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8 mx-8">
        <Link href="/">
          <div className="flex justify-center items-center md:scale-100 scale-90 cursor-pointer">
            <Image
              height={50}
              width={50}
              className="scale-50 "
              src="/icons/link.png"
              alt=""
            />
            <p className="text-lg text-white font-semibold">DevLink</p>
          </div>
        </Link>

      

        <div className="ml-2 mt-2 block">
          <span className="relative inline-block">
            <Link href="/profile">
              <Image
                height={40}
                width={40}
                className="h-10 w-10 rounded-full object-cover cursor-pointer"
                src={userImage}
                alt=""
              />
            </Link>
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
