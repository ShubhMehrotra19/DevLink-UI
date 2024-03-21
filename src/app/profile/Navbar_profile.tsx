import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  
  return (
    <div className="relative w-full bg-[rgba(0, 0, 0, 0.07)] backdrop-blur -mt-[2px] z-20">
      <div className="mx-auto flex w-ful items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href='/'>
        <div className='flex justify-center items-center md:scale-100 scale-90 cursor-pointer'>
            <Image 
            height={50}
            width={50}
            className='scale-50' 
            src="/icons/link.png" alt="" />
            <p className='text-lg text-white font-medium'>DevLink</p>
        </div></Link>
       
        <div className="flex md:flex-row flex-col gap-3 justify-center items-center">
          <Link href='/form'>
            <div className='justify-center items-center rounded-full bg-white shadow-md hover:scale-[102%] active:scale-95 cursor-pointer transition duration-300 ease-in-out md:block p-1'>
              <img src="/icons/pencil.png" alt="" />
            </div>
          </Link>
          <Link href='/home'>
          <button
            type="button"
            className="justify-center md:block hidden items-center gap-1 rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 active:scale-95 transition ease-in-out cursor-pointer"
          >
            back
          </button></Link>
        </div>
      </div>
    </div>
  )
}
