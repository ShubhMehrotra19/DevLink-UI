import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

function Cardfront(props: Props) {
  return (
    <div className='ml-10 p-6 flex flex-col bg-white w-[600px] h-[350px] rounded flex-grow border-black/[0.4] border-2 -rotate-[12deg] shadow-current shadow-md mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out'>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col justify-start items-start'>
          <img className='mb-3' src="/card/cardpic.png" alt="" />
          <div className="text-black text-4xl font-semibold font-['Poppins']">Shubh Mehrotra</div>
          <div className="text-black text-base font-normal font-['Poppins']">Web Developer</div>
        </div>
        <img className='-mt-2' src="/card/qrcode.png" alt="" />
      </div>
      <div className='flex justify-between items-center mt-14'>
        <div className='flex justify-center items-center gap-6'>
          <Link href={'https://github.com/ShubhMehrotra19'}> <Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/githubcard.png" alt="" /></Link>
          <Link href={'https://www.linkedin.com/in/shubhmehrotra19'}><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/linkedin.png" alt="" /></Link>
          <Link href={'https://twitter.com/ShubhMehro40210'}><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/twitter.png" alt="" /></Link>
          <Link href={'https://shubh-portfolio-delta.vercel.app/'}><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/linkcard.png" alt="" /></Link>
        </div>
        <div className="text-center text-black text-lg font-bold font-['Poppins']">22BCE10561</div>
      </div>
    </div>
  );
}

export default Cardfront;
