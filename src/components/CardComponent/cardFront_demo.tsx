import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

function Cardfront(props: Props) {
  return (
    <div className=' select-none p-6 flex flex-col bg-[#F9F9F9] w-[600px] h-[350px] rounded flex-grow border-black/[0.4] border-2 shadow-current shadow-md mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out'>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col justify-start items-start'>
          <Image height={150} width={150} className='mb-3' src="/card/cardpic.png" alt="" />
          <div className="text-black text-4xl font-semibold font-poppins">Shubh Mehrotra</div>
          <div className="text-black text-base font-normal font-poppins">Web Developer</div>
        </div>
        <Image height={100} width={100} className='-mt-2' src="/card/qrcode.png" alt="" />
      </div>
      <div className='flex justify-between items-center mt-14'>
        <div className='flex justify-center items-center gap-6'>
          <Link href={'https://github.com/ShubhMehrotra19'} target='_blank'> <Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/githubcard.png" alt="" /></Link>
          <Link href={'https://www.linkedin.com/in/shubhmehrotra19'} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/linkedin.png" alt="" /></Link>
          <Link href={'https://twitter.com/ShubhMehro40210'} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/twitter.png" alt="" /></Link>
          <Link href={'https://shubh-portfolio-delta.vercel.app/'} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/linkcard.png" alt="" /></Link>
        </div>
        <div className="text-center text-black text-lg font-bold font-poppins">22BCE10561</div>
      </div>
    </div>
  );
}

export default Cardfront;
