import React from "react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

interface Props {
  userName: string;
  userDomain: string;
  imageLink: string;
  regNumber: string;
  githubLink: string;
  linkedinLink: string;
  twitterLink: string;
  portfolioLink: string;
}

function Cardfront_res({
  userName,
  userDomain,
  imageLink,
  regNumber,
  githubLink,
  linkedinLink,
  twitterLink,
  portfolioLink,
}: any) {
  return (
    <div className=" select-none p-6 flex flex-col bg-[#F9F9F9] shadow-white/50 shadow-md h-[450px] w-[300px] rounded flex-grow border-black/[0.4] border-2 mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out">
      <div className="flex flex-col justify-center items-center border-2 border-black/30">
        <Image
          height={100}
          width={100}
          className="mb-3"
          src={imageLink}
          alt=""
        />
        <div className="text-black text-2xl font-semibold font-poppins">
          {userName}
        </div>
        <div className="text-black text-sm font-normal font-poppins mb-3">
          {userDomain}
        </div>
        <QRCode
          size={120}
          className=" object-contain"
          value={githubLink}
          viewBox={`0 0 256 256`}
        />
        <div className="text-center text-black text-lg font-bold font-poppins mb-8">
          {regNumber}
        </div>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Link href={githubLink} target="_blank">
          {" "}
          <Image
            height={28}
            width={28}
            className="hover:scale-105 duration-300 ease-in-out active:scale-95"
            src="/icons/githubcard.png"
            alt=""
          />
        </Link>
        <Link href={linkedinLink} target="_blank">
          <Image
            height={28}
            width={28}
            className="hover:scale-105 duration-300 ease-in-out active:scale-95"
            src="/icons/linkedin.png"
            alt=""
          />
        </Link>
        <Link href={twitterLink} target="_blank">
          <Image
            height={28}
            width={28}
            className="hover:scale-105 duration-300 ease-in-out active:scale-95"
            src="/icons/twitter.png"
            alt=""
          />
        </Link>
        <Link href={portfolioLink} target="_blank">
          <Image
            height={28}
            width={28}
            className="hover:scale-105 duration-300 ease-in-out active:scale-95"
            src="/icons/linkcard.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Cardfront_res;
