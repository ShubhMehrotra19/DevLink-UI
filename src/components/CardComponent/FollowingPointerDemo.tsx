import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";
import StaggeredDropDown from "../ui/StaggeredDropDown";

export function FollowingPointerDemo({
  author,
  authorAvatar,
  title,
  description,
  image,
  registerNumber,
  linkedinLink,
  githubLink,
  twitterLink,
  portfolioLink,
}: any) {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={<TitleComponent title={author} avatar={authorAvatar} />}
      >
        <div className="relative h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full p-1 aspect-w-16 aspect-h-10 bg-gray-100  rounded-2xl overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200">
            <div>
              <Image
                width={450}
                height={350}
                src={image}
                alt="thumbnail"
                objectFit="cover"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">{title}</h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500 overflow-hidden whitespace-nowrap text-ellipsis">
              {!description ? "Hey There! I am a DevLink User" : description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{registerNumber}</span>
              <div className="relative z-10">
                <StaggeredDropDown
                  linkedinLink={linkedinLink}
                  githubLink={githubLink}
                  twitterLink={twitterLink}
                  portfolioLink={portfolioLink}
                />
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}


const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
