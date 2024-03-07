import React from 'react';

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
          <img src="/icons/githubcard.png" alt="" />
          <img src="/icons/linkedin.png" alt="" />
          <img src="/icons/twitter.png" alt="" />
          <img src="/icons/linkcard.png" alt="" />
        </div>
        <div className="text-center text-black text-lg font-bold font-['Poppins']">22BCE10561</div>
      </div>
    </div>
  );
}

export default Cardfront;
