import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

function Cardback_mobile(props: Props) {
  return (
    <div className=' select-none p-6 flex flex-col bg-[#F9F9F9] h-[450px] w-[300px] rounded flex-grow border-black/[0.4] border-2 shadow-current shadow-md mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out'>
      <div className='flex flex-col justify-center items-center'>
          <Image height={100} width={100} className='mb-3' src="/card/cardpic.png" alt="" />
          <div className="text-black text-2xl font-semibold font-['Poppins'] mb-3">Stoic-Coder2003</div>
          <div className="text-black text-sm font-normal font-['Poppins'] mb-3 text-center px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum expedita nemo ipsum esse voluptates.</div>
          <div className='flex justify-center items-center gap-2 text-black text-[9px] mb-24'>
            <p>#WebDevelopment</p>
            <p>#Fullstackdevelopment</p>
            <p>#UIDesigning</p>
          </div>
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

export default Cardback_mobile;
