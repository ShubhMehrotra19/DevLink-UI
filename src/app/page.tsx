import Cardfront from "@/components/Home/CardFront/cardfront";
import About from "@/components/Home/About";
import { GlowingStarsBackgroundCardPreview } from "@/components/Home/GlowingStarsBackgroundCardPreview";
import { GridBackgroundDemo } from "@/components/Home/GridBackgroundDemo";
import Navbar from "@/components/navbar/Navbar";
import { HeroScrollDemo } from "@/components/Home/HeroScrollDemo";
import Footer from "@/components/Home/Footer";
import { InfiniteMovingCardsDemo } from "@/components/Home/InfiniteMovingCardsDemo";

export default function Home() {
  const cardValue = [
    {
      cons: "Network Faster",
      description: "With Devlink, you can network faster and more efficiently.",
    },
    {
      cons: "Retro but Sleek",
      description: "DevLink brings the retro business cards with a digital touch.",
    },
    {
      cons: "Transparency",
      description: "With Github Authentication, we bring transparency to the table.",
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      <div className="sticky z-10 w-full top-0">
        <Navbar />
      </div>
        <section>
          <GridBackgroundDemo />
          <div className=" md:block hidden"><HeroScrollDemo /></div>
          <div className=" m-5 mx-auto text-center w-full md:text-6xl text-4xl md:px-0 px-5 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">With DevLink you get</div>
          <div className="flex md:flex-row flex-col justify-center md:gap-24 gap-3 mx-auto items-center w-screen md:mb-24">
        {cardValue.map((card, index) => (
            <GlowingStarsBackgroundCardPreview key={index} cons={card.cons} description={card.description} />
          ))}
        </div>
        <About />
        <InfiniteMovingCardsDemo />
        <Footer />
        </section>
      </div>
  );
}

