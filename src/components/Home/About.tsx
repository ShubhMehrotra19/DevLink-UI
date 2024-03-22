import Cardfront from "./CardFront/cardfront";

export default function About() {
  const skillDevelopment = "skill development";
  const networking = "networking";
  const cICDPipelines = "CI/CD pipelines";
  const productionBases = "production bases";

  return (
    <div className="flex flex-col justify-center items-center text-white max-w-8xl mx-auto mb-8">
      <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-5">About Us</h1>
      <p className="text-center text-lg font-normal max-w-5xl text-neutral-400 leading-relaxed p-5 mb-[140px]">
        Welcome to DevLink, where we cultivate a culture of excellence through a comprehensive solution. In today&apos;s fast-paced era, it is imperative for developers to uphold consistency and responsibility in their social media presence. Regrettably, only a few are mindful of this commitment from their initial years of study. As a freshman, it is essential to focus on striking a harmonious balance between academic pursuits and the acquisition of new skills.
        In the contemporary landscape, seasoned developers emphasize the importance of showcasing one&apos;s learning journey on social media platforms such as Twitter, LinkedIn, Instagram, or YouTube, albeit less frequently. Surprisingly, one platform often overlooked by students is GitHub.
      </p>
      <div className="flex md:flex-row flex-col justify-between mx-5 items-center">
        <p className="md:text-left text-center sm:px-10 text-xs md:w-fit w-96 md:text-lg font-normal text-neutral-400 leading-relaxed p-5 md:">
          While GitHub may not be a conventional social media platform, <br className="md:block hidden" />
          it encapsulates all the essentials for a developer to thrive in the tech industry.<br className="md:block hidden" />
          Proficiency in understanding <span className="p-1 bg-slate-600/[0.5] rounded-md">{cICDPipelines}</span> and Git commands <br className="md:block hidden" />
          is crucial for effectively contributing to and collaborating <br className="md:block hidden" />
          on <span className="p-1 bg-slate-600/[0.5] rounded-md">{productionBases}</span>.
          Here at DevLink, we harness the power of GitHub <br />
          to create an interactive platform that not only facilitates user interaction <br className="md:block hidden" />
          but also fosters meaningful connections. <br className="md:block hidden" />
          Join us as we empower developers to excel in the tech industry <br className="md:block hidden" />
          through a holistic approach to <span className="p-1 bg-slate-600/[0.5] rounded-md">{skillDevelopment}</span> and <span className="p-1 bg-slate-600/[0.5] rounded-md">{networking}</span>.
        </p>
        <div className="md:scale-100 scale-50">
        <Cardfront />
        </div>
      </div>
    </div>
  );
}
