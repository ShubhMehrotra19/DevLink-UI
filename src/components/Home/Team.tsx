import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export function Team() {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-0">
      <div className="my-4 mb-10 text-center">
        <h1 className="text-3xl font-bold text-white">Hey There! 👋🏽</h1>
        <p className="mt-2 text-gray-300">
          We hope DevLink helps you connect with your peers faster and smarter!! Want to connect with us? <br />Check our socials below!
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-8 justify-center items-center">
        <Link href='https://github.com/ShubhMehrotra19/'>
        <div className="flex flex-col items-center text-start cursor-pointer">
          <div
            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-transparent"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Image
              width={350}
              height={350}
              src="/team/350img.png"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover hover:scale-[102%] transition-all duration-300 active:scale-95"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">Shubh Mehrotra</h1>
              <h6 className="text-base text-white">Frontend Developer and Designer</h6>
            </div>
          </div>
        </div></Link>
       
       <Link href='https://github.com/darkCoder001'>
       <div className="flex flex-col items-center text-start cursor-pointer">
          <div
            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-transparent"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Image
              width={350}
              height={350}
              src="/team/ishank_pic.png"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover hover:scale-[102%] transition-all duration-300 active:scale-95"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">Ishank Lalwani</h1>
              <h6 className="text-base text-white">Backend Developer</h6>
            </div>
          </div>
        </div>
       </Link>
        
      </div>
    </div>
  )
}
