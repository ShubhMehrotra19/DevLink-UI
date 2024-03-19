"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="relative w-full bg-[rgba(0, 0, 0, 0.07)] backdrop-blur -mt-[2px]">
      <div className="mx-auto flex w-ful items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center md:scale-100 scale-90 cursor-pointer">
          <Image
            height={50}
            width={50}
            className="scale-50 "
            src="/icons/link.png"
            alt=""
          />
          <p className="text-lg text-white font-medium">DevLink</p>
        </div>

        <div className="hidden lg:block">
          {session ? (
            <button
              className="flex justify-center items-center gap-1 rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 active:scale-95 transition ease-in-out cursor-pointer"
              onClick={() => signOut()}
            >
              LogOut
            </button>
          ) : (
            <Link href="/form">
              <button
                type="button"
                className="flex justify-center items-center gap-1 rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 active:scale-95 transition ease-in-out cursor-pointer"
                onClick={() => {
                  signIn("github", { callbackUrl: "/home" });
                }}
              >
                <Image height={24} width={24} src="/icons/github.png" alt="" />
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
