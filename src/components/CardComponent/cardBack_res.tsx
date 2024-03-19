import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

function Cardback_res({githubUserName, githubBio, githubImageLink, hashtag1, hashtag2, hashtag3, githubLink, linkedinLink, twitterLink, portfolioLink}: any) {
  return (
    <div className=' select-none p-6 flex flex-col bg-[#F9F9F9] h-[450px] w-[300px] rounded flex-grow border-black/[0.4] border-2 shadow-current shadow-md mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out'>
      <div className='flex flex-col justify-center items-center'>
          <Image height={100} width={100} className='mb-3' src={githubImageLink} alt="" />
          <div className="text-black text-2xl font-semibold font-poppins mb-3">{githubUserName}</div>
          <div className="text-black text-sm font-normal font-poppins mb-3 text-center px-3">{githubBio}</div>
          <div className='flex justify-center items-center gap-2 text-black text-[9px] mb-24'>
            <p>#{hashtag1}</p>
            <p>#{hashtag2}</p>
            <p>#{hashtag3}</p>
          </div>
      </div>
        <div className='flex justify-center items-center gap-6'>
          <Link href={githubLink} target='_blank'> <Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/githubcard.png" alt="" /></Link>
          <Link href={linkedinLink} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/linkedin.png" alt="" /></Link>
          <Link href={twitterLink} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/twitter.png" alt="" /></Link>
          <Link href={portfolioLink} target='_blank'><Image height={28} width={28} className='hover:scale-105 duration-300 ease-in-out active:scale-95' src="/icons/linkcard.png" alt="" /></Link>
        </div>
      </div>
  );
}

export default Cardback_res;
