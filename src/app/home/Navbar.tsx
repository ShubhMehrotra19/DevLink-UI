"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  userImage: string;
  onSearchValue: (value: string) => void;
}

function Navbar({ userImage, onSearchValue }: Props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearchValue(searchValue);
  };

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

        <div className="flex grow justify-end">
          <input
            className="flex h-10 md:w-[250px] w-[125px]  rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 object-cover ring-2 ring-black/30"
            type="text"
            id="search"
            placeholder="Search Registration Number..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button
            className="ml-2 px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-400 focus:ring-white focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95"
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </div>

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
