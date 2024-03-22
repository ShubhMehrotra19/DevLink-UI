"use client"
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FollowingPointerDemo } from "@/components/CardComponent/FollowingPointerDemo";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import { motion, useScroll } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GridBackgroundDemo1 } from "./GridBackgroundDemo1";

interface Data {
  firstName: string;
  lastName: string;
  regno: string;
  description: string;
  image: string;
  avatar: string;
  linkedin: string;
  github: string;
  twitter: string;
  portfolio: string;
}

function Page() {
  // const [values, setValues] = useState<[Data]>();

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   try {
  //     console.log(searchValue);
  //     const response = searchValue
  //       ? await fetch(/api/form/search/${searchValue})
  //       : await fetch(/api/form);

  //     const res = await response.json();

  //     setValues(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   if (searchValue === "") {
  //     fetchData();
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [searchValue]);

  const { data: session } = useSession();

  const values = [
    {
      firstName: "John",
      lastName: "Doe",
      regno: "22BCE1234",
      description: "Software Developer",
      image: '/card/devlink_pic.jpg',
      avatar: '/card/devlink_pic.jpg',
      linkedin: "https://github.com/",
      github: "https://github.com/",
      twitter: "https://github.com/",
      portfolio: "https://github.com/",
    },
    {
      firstName: "John",
      lastName: "Doe",
      regno: "22BCE1234",
      description: "Software Developer",
      image: '/card/devlink_pic.jpg',
      avatar: '/card/devlink_pic.jpg',
      linkedin: "https://github.com/",
      github: "https://github.com/",
      twitter: "https://github.com/",
      portfolio: "https://github.com/",
    },
    {
      firstName: "John",
      lastName: "Doe",
      regno: "22BCE1234",
      description: "Software Developer",
      image: '/card/devlink_pic.jpg',
      avatar: '/card/devlink_pic.jpg',
      linkedin: "https://github.com/",
      github: "https://github.com/",
      twitter: "https://github.com/",
      portfolio: "https://github.com/",
    },
    {
      firstName: "John",
      lastName: "Doe",
      regno: "22BCE1234",
      description: "Software Developer",
      image: '/card/devlink_pic.jpg',
      avatar: '/card/devlink_pic.jpg',
      linkedin: "https://github.com/",
      github: "https://github.com/",
      twitter: "https://github.com/",
      portfolio: "https://github.com/",
    },
    {
      firstName: "John",
      lastName: "Doe",
      regno: "22BCE1234",
      description: "Software Developer",
      image: '/card/devlink_pic.jpg',
      avatar: '/card/devlink_pic.jpg',
      linkedin: "https://github.com/",
      github: "https://github.com/",
      twitter: "https://github.com/",
      portfolio: "https://github.com/",
    },

  ];

  const { scrollYProgress } = useScroll();

  const [clickedBtn, setClickedBtn] = useState(false);

  const toggleClickedBtn = () => {
    setClickedBtn(!clickedBtn);
  };

  const handleSearchSubmit = () => {
    handleSearchValue(searchValue);
  };

  return (
    <>
      <div className="relative z-0">
        <GridBackgroundDemo1 />
      <Navbar userImage={session?.user?.image!} />
       <div className="flex flex-col justify-center items-center">
       <motion.div className="absolute md:top-[5%] top-[3%] md:left-[20%] left-[8%]" style={{ opacity: parseFloat((1 - parseFloat(scrollYProgress.toString())).toFixed(2)), y: parseFloat((-100 * parseFloat(scrollYProgress.toString())).toFixed(2)) }}>
          <div className="flex flex-col justify-center items-center mt-36 z-0">
            <h1 className="text-center w-full md:text-[150px] text-[90px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">DevLink</h1>
            <h2 className="text-center w-full md:text-[24px] text-[16px] -mt-5 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Network Smarter! Network Faster!</h2>
            <div className="flex grow justify-end mt-5">
              <input
                className="flex h-10 md:w-[800px] w-[150px]  rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 object-cover ring-2 ring-black/30"
                type="text"
                id="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => handleSearchValue(e.target.value)}
              />
              <button
                className="ml-2 px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-400 focus:ring-white focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95"
                onClick={() => {handleSearchSubmit(); toggleClickedBtn();}}
              >
                Search
              </button>
            </div>
          </div>
        </motion.div>
        {loading ? (
          <Loading />
        ) : (
          <section className="w-full">
            <div className="mt-20  flex justify-center items-start h-[86%] pt-2 mb-4">
              <div className="grid md:grid-cols-4 md:gap-12 gap-4">
                {!values && searchValue ? (
                 <>
                 {window.alert("No results found!")}
                 </>
                ) : (
                  values?.map((value, index) =>
                    !value.firstName ? (
                      <div
                        key={index}
                        className="text-white text-7xl z-20 bg-white"
                      >
                        Nothing found!
                      </div>
                    ) : (
                      <FollowingPointerDemo
                        key={value.github}
                        author={value.firstName + " " + value.lastName}
                        registerNumber={value.regno}
                        title={value.firstName + " " + value.lastName}
                        description={value.description}
                        // image={`data:image/png;base64,${value.image}`}
                        image={'/card/devlink_pic1.png'}
                        authorAvatar={value.avatar}
                        linkedinLink={value.linkedin}
                        githubLink={value.github}
                        twitterLink={value.twitter}
                        portfolioLink={value.portfolio}
                      />
                    )
                  )
                )}
              </div>
            </div>
          </section>
        )}
        </div>
      </div>
    </>
  );
}

export default Page;
