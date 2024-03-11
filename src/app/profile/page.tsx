import React from 'react';
import Navbar_profile from './Navbar_profile';
import CardFlip from './CardFlip';
import Link from 'next/link';
import { DotBackgroundDemo } from './DotBackgroundDemo';

interface Props {}

function Page(props: Props) {
  return (
    <section className="h-screen w-screen relative flex flex-col">
      <Navbar_profile />
      <DotBackgroundDemo />
      <div className="h-full w-full flex flex-col justify-center items-center z-10 absolute">
        <CardFlip />
        <Link href="/home">
          <div className="flex justify-center items-center gap-1 md:hidden rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 active:scale-95 transition ease-in-out cursor-pointer">
            back
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Page;