import React from 'react'
import Image from 'next/image'
interface Props {}

function CardBack() {

    return (
        <div className=' select-none p-6 flex flex-col bg-white w-[600px] h-[350px] rounded flex-grow border-black/[0.4] border-2 mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col justify-start items-start mr-20'>
          <Image height={160} width={160} className='mb-3 rounded-full object-cover h-40 w-40' src='https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" />
          <div className="text-black text-4xl font-semibold font-poppins">Stoic-coder2003</div>
          <div className="text-black text-lg font-normal font-poppins mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, debitis.</div>
          <div className='flex justify-center items-center gap-2 text-black text-sm'>
            <p>#WebDevelopment</p>
            <p>#Fullstackdevelopment</p>
            <p>#UIDesigning</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-8 -rotate-90'>
          <Image height={28} width={28} src="/icons/githubcard.png" alt="" />
          <Image height={28} width={28} src="/icons/linkedin.png" alt="" />
          <Image height={28} width={28} src="/icons/twitter.png" alt="" />
          <Image height={28} width={28} src="/icons/linkcard.png" alt="" />
        </div>
      </div>
    </div>
    )
}

export default CardBack
