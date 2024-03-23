"use client";
import React, { use } from "react";
import ReactCardFlip from "react-card-flip";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useMediaQuery } from "@react-hook/media-query";
import Cardfront_res from "@/components/CardComponent/cardFront_res";
import Cardfront from "@/components/CardComponent/cardFront";
import Cardback_res from "@/components/CardComponent/cardBack_res";
import CardBack from "@/components/CardComponent/cardBack";
import Loading from "../loading";

interface Props {}

function CardFlip(props: Props) {
  const {} = props;

  const { data: session } = useSession();

  const [firstName, setFirstName] = useState("DevLink");
  const [lastName, setLastName] = useState("User");
  const [regNumber, setRegNumber] = useState("22BCE1234");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/in/");
  const [twitter, setTwitter] = useState("https://www.twitter.com/in");
  const [portfolio, setPortfolio] = useState("https://www.google.com/in/");
  const [image, setImage] = useState("/default_img.png");
  const [github, setGithub] = useState("https://www.github.com/in/");
  const [description, setDescription] = useState("Description");
  const [username, setUsername] = useState("new-user");
  const [avatar, setAvatar] = useState("/default_img.png");
  const [hashtags, setHashtags] = useState([
    "Web Developer",
    "React",
    "Next.js",
  ]);

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

      if (res.data.firstName) {
        setFirstName(res.data.firstName);
      }

      if (res.data.lastName) {
        setLastName(res.data.lastName);
      }

      if (res.data.regno) {
        setRegNumber(res.data.regno);
      }

      if (res.data.linkedin) {
        setLinkedin(res.data.linkedin);
      }

      if (res.data.twitter) {
        setTwitter(res.data.twitter);
      }

      if (res.data.portfolio) {
        setPortfolio(res.data.portfolio);
      }

      if (res.data.image) {
        setImage(`data:image/png;base64,${res.data.image}`);
      }

      if (res.data.github) {
        setGithub(res.data.github);
      }

      if (res.data.username) {
        setUsername(res.data.username);
      }

      if (res.data.description) {
        setDescription(res.data.description);
      }

      if (res.data.avatar) {
        setAvatar(res.data.avatar);
      }
      if (hashtags) {
        setHashtags(res.data.hashtags);
      }
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
                userDomain="DevLink User"
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
                userDomain="DevLink User"
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
                hashtag1={hashtags[0]}
                hashtag2={hashtags[1]}
                hashtag3={hashtags[2]}
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
                hashtag1={hashtags[0]}
                hashtag2={hashtags[1]}
                hashtag3={hashtags[2]}
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
