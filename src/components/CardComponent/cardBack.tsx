import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {}

function CardBack({
  githubUserName,
  githubBio,
  githubImageLink,
  hashtag1,
  hashtag2,
  hashtag3,
  githubLink,
  linkedinLink,
  twitterLink,
  portfolioLink,
}: any) {
  return (
    <div className="p-6 flex flex-col bg-white shadow-white/50 shadow-md w-[600px] h-[350px] rounded flex-grow border-black/[0.4] border-2 mb-8 active:scale-95 hover:scale-[102%] transition-all duration-300 cursor-pointer ease-in-out">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <Image
            height={160}
            width={160}
            className="mb-3 rounded-full object-cover h-40 w-40 border-2 border-black/30"
            src={githubImageLink}
            alt=""
          />
          <div className="text-black text-4xl font-semibold font-poppins">
            {githubUserName}
          </div>
          <div className="text-black text-lg font-normal font-poppins mb-2">
            {githubBio}
          </div>
          <div className="flex justify-center items-center gap-2 text-black text-sm">
            <p>#{hashtag1}</p>
            <p>#{hashtag2}</p>
            <p>#{hashtag3}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 -rotate-90 -mr-20">
          {/* changed the components to be shifted to the right */}
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
      </div>
    </div>
  );
}

export default CardBack;
