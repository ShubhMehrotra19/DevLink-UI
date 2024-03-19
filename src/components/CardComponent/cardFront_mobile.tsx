import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from "react-qr-code";

interface Props {}

function Cardfront_mobile(props: Props) {
  return (
    <div className=' select-none p-6 flex flex-col bg-[#F9F9F9] h-[450px] w-[300px] rounded flex-grow border-black/[0.4] border-2 shadow-current shadow-md mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out'>
      <div className='flex flex-col justify-center items-center'>
          <Image height={100} width={100} className='mb-3' src="/card/cardpic.png" alt="" />
          <div className="text-black text-2xl font-semibold font-poppins">Shubh Mehrotra</div>
          <div className="text-black text-sm font-normal font-poppins mb-3">Web Developer</div>
          <QRCode
    size={120}
    className=' object-contain'
    value={'https://shubh-portfolio-delta.vercel.app/'}
    viewBox={`0 0 256 256`}
    />
        <div className="text-center text-black text-lg font-bold font-poppins mb-8">22BCE10561</div>
      </div>
        <div className='flex justify-center items-center gap-6'>
          <Link href={'https://github.com/ShubhMehrotra19'} target='_blank'> <Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/githubcard.png" alt="" /></Link>
          <Link href={'https://www.linkedin.com/in/shubhmehrotra19'} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/linkedin.png" alt="" /></Link>
          <Link href={'https://twitter.com/ShubhMehro40210'} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/twitter.png" alt="" /></Link>
          <Link href={'https://shubh-portfolio-delta.vercel.app/'} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/linkcard.png" alt="" /></Link>
        </div>
      </div>
  );
}

export default Cardfront_mobile;
