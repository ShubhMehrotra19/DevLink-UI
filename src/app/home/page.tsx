"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FollowingPointerDemo } from "@/components/CardComponent/FollowingPointerDemo";
import { GridBackgroundDemo1 } from "./GridBackgroundDemo1";
import { useSession } from "next-auth/react";
import Loading from "../loading";

interface Props {}

function Page(props: Props) {
  const [values, setValues] = useState([
    {
      firstName: "",
      lastName: "",
      regno: "",
      description: "",
      image: "",
      avatar: "",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    fetchData();
  };

  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      if (searchValue != "") {
        const response = await fetch(`/api/form/search/${searchValue}`, {
          method: "GET",
        });

        const res = await response.json();

        setValues(res.data);
      } else {
        const response = await fetch(`/api/form`, {
          method: "GET",
        });

        const res = await response.json();

        setValues(res.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const {} = props;

  const { data: session } = useSession();

  return (
    <>
      <div className="relative z-0">
        <GridBackgroundDemo1 />
        <Navbar
          onSearchValue={handleSearchValue}
          userImage={session?.user?.image!}
        />
        {loading ? (
          <Loading />
        ) : (
          <section className="w-full">
            <div className="mt-20 absolute top-0 left-12 flex justify-center items-start h-[86%] pt-2 mb-4">
              <div className="grid md:grid-cols-4 md:gap-12 gap-4">
                {values.length === 0 ? (
                  <div>Nothing found!</div>
                ) : (
                  values.map((value, index) =>
                    !value.firstName ? (
                      <div className="text-white text-7xl z-20 bg-white">
                        Nothing found!
                      </div>
                    ) : (
                      <FollowingPointerDemo
                        key={index}
                        author={value.firstName + " " + value.lastName}
                        registerNumber={value.regno}
                        title={value.firstName + " " + value.lastName}
                        description={value.description}
                        image={`data:image/png;base64,${value.image}`}
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
    </>
  );
}

export default Page;
