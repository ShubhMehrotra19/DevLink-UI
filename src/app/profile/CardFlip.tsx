"use client";
import React, { use } from "react";
import ReactCardFlip from "react-card-flip";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import CardFront_demo from "@/components/CardComponent/cardFront_demo";
import CardBack_demo from "@/components/CardComponent/cardBack_demo";
import { useMediaQuery } from "@react-hook/media-query";
import Cardfront_mobile from "@/components/CardComponent/cardFront_mobile";
import Cardback_mobile from "@/components/CardComponent/cardBack_mobile";
import Cardfront_res from "@/components/CardComponent/cardFront_res";
import Cardfront from "@/components/CardComponent/cardFront";
import Cardback_res from "@/components/CardComponent/cardBack_res";
import CardBack from "@/components/CardComponent/cardBack";
import { set } from "zod";
import Loading from "../loading";

interface Props {}

function CardFlip(props: Props) {
  const {} = props;

  const { data: session } = useSession();

  const [firstName, setFirstName] = useState("DevLink");
  const [lastName, setLastName] = useState("User");
  const [regNumber, setRegNumber] = useState("22BCE1234");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/in/");
  const [twitter, setTwitter] = useState("https://www.linkedin.com/in");
  const [portfolio, setPortfolio] = useState("https://www.linkedin.com/in/");
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=600"
  );
  const [github, setGithub] = useState("https://www.linkedin.com/in/");
  const [description, setDescription] = useState("Web Developer");
  const [username, setUsername] = useState("new-user");
  const [avatar, setAvatar] = useState(
    "https://images.pexels.com/photos/19597529/pexels-photo-19597529/free-photo-of-man-playing-with-dogs-on-a-beach.jpeg"
  );

  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isFlipped, setIsFlipped] = useState(false);
  const flipDirection = isMobile ? "horizontal" : "vertical";

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(`/api/form/${session?.user?.email}`, {
        method: "GET",
      });

      const res = await response.json();

      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setRegNumber(res.data.regNumber);
      setLinkedin(res.data.linkedin);
      setTwitter(res.data.twitter);
      setPortfolio(res.data.portfolio);
      setImage(`data:image/png;base64,${res.data.image}`);
      setGithub(res.data.github);
      setUsername(res.data.username);
      setDescription(res.data.description);
      setAvatar(res.data.avatar);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ReactCardFlip isFlipped={isFlipped} flipDirection={flipDirection}>
          <div onClick={handleClick}>
            {/* {isMobile ? <Cardfront_mobile /> : <CardFront_demo />} */}
            {isMobile ? (
              <Cardfront_res
                userName={firstName + " " + lastName}
                userDomain="Web Developer"
                imageLink={image}
                regNumber={regNumber}
                githubLink={github}
                linkedinLink={linkedin}
                twitterLink={twitter}
                portfolioLink={portfolio}
              />
            ) : (
              <Cardfront
                userName={firstName + " " + lastName}
                userDomain="Web Developer"
                imageLink={image}
                regNumber={regNumber}
                githubLink={github}
                linkedinLink={linkedin}
                twitterLink={twitter}
                portfolioLink={portfolio}
              />
            )}
          </div>

          <div onClick={handleClick}>
            {/* {isMobile ? <Cardback_mobile /> : <CardBack_demo />} */}
            {isMobile ? (
              <Cardback_res
                githubLink={github}
                githubImageLink={avatar}
                hashtag1="Web Developer"
                hashtag2="React"
                hashtag3="Next.js"
                githubBio={description}
                linkedinLink={linkedin}
                twitterLink={twitter}
                portfolioLink={portfolio}
                githubUserName={username}
              />
            ) : (
              <CardBack
                githubLink={github}
                githubBio={description}
                githubImageLink={avatar}
                hashtag1="Web Developer"
                hashtag2="React"
                hashtag3="Next.js"
                linkedinLink={linkedin}
                twitterLink={twitter}
                portfolioLink={portfolio}
                githubUserName={username}
              />
            )}
          </div>
        </ReactCardFlip>
      )}
    </>
  );
}

export default CardFlip;
