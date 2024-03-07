import Image from 'next/image';
import React from 'react';

interface Props {}

function Cardfront({userName, userDomain, imageLink, regNumber}: any) {
  return (
    <div className='ml-10 p-6 flex flex-col bg-white w-[600px] h-[350px] rounded flex-grow border-black/[0.4] border-2 -rotate-[12deg] shadow-current shadow-md mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out'>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col justify-start items-start'>
          <Image height={150} width={150} className='mb-3' src={imageLink} alt="" />
          <div className="text-black text-4xl font-semibold font-['Poppins']">{userName}</div>
          <div className="text-black text-base font-normal font-['Poppins']">{userDomain}</div>
        </div>
        <Image height={100} width={100} className='-mt-2' src="/card/qrcode.png" alt="" />
      </div>
      <div className='flex justify-between items-center mt-14'>
        <div className='flex justify-center items-center gap-6'>
          <Image height={28} width={28} src="/icons/githubcard.png" alt="" />
          <Image height={28} width={28} src="/icons/linkedin.png" alt="" />
          <Image height={28} width={28} src="/icons/twitter.png" alt="" />
          <Image height={28} width={28} src="/icons/linkcard.png" alt="" />
        </div>
        <div className="text-center text-black text-lg font-bold font-['Poppins']">{regNumber}</div>
      </div>
    </div>
  );
}

export default Cardfront;
