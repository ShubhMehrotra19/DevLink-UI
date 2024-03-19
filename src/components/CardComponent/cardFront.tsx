import Image from "next/image";
import React from "react";
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

function Cardfront({
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
    <div className="p-6 flex flex-col bg-white w-[600px] h-[350px] rounded flex-grow border-black/[0.4] border-2 mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out">
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-start items-start">
          <Image
            height={160}
            width={160}
            className="mb-3 rounded-full object-cover h-40 w-40"
            src={imageLink}
            alt=""
          />
          <div className="text-black text-4xl font-semibold font-poppins">
            {userName}
          </div>
          <div className="text-black text-base font-normal font-poppins">
            {userDomain}
          </div>
        </div>
        <QRCode
          size={120}
          className=" object-contain"
          value={githubLink}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex justify-center items-center gap-6">
          <Link href={githubLink} target="_blank">
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
        <div className="text-center text-black text-lg font-bold font-poppins">
          {regNumber}
        </div>
      </div>
    </div>
  );
}

export default Cardfront;
