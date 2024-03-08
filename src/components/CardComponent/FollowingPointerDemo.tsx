import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";

export function FollowingPointerDemo({
  author,
  authorAvatar,
  title,
  description,
  image,
  registerNumber,
}: any) {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent title={author} avatar={authorAvatar} />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200">
            <div className="w-full h-full">
              <Image
                height={300}
                width={450}
                src={image}
                alt="thumbnail"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{registerNumber}</span>
              <div className="relative z-10 px-6 py-2 bg-black hover:bg-black/90 hover:scale-[102%] active:scale-95 text-white font-bold rounded-xl block text-xs transition duration-200 ease-in-out">
                Connect
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
