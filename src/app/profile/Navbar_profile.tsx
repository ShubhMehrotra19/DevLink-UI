"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import EditCardLink from "@/components/ui/EditCard";
import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <div className="relative w-full bg-[rgba(0, 0, 0, 0.07)] backdrop-blur -mt-[2px] z-20">
      <div className="mx-auto flex w-ful items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="flex justify-center items-center md:scale-100 scale-90 cursor-pointer">
            <Image
              height={50}
              width={50}
              className="scale-50"
              src="/icons/link.png"
              alt=""
            />
            <p className="text-lg text-white font-medium">DevLink</p>
          </div>
        </Link>

        <div className="flex flex-row gap-3 justify-center items-center">
          <EditCardLink />
          <Link href="/home">
            <button
              type="button"
              className="justify-center md:block hidden items-center gap-1 rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 active:scale-95 transition ease-in-out cursor-pointer"
            >
              back
            </button>
          </Link>
          <button
            type="button"
            className="flex justify-center items-center gap-1 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800 active:scale-95 transition ease-in-out cursor-pointer"
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}
