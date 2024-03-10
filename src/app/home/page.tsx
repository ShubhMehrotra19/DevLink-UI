"use client"
import React from 'react';
import Navbar from './Navbar';
import { FollowingPointerDemo } from '@/components/CardComponent/FollowingPointerDemo';

interface Props {}

function Page(props: Props) {
    const values = [
       {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
          {
            slug: "amazing-tailwindcss-grid-layouts",
            author: "Manu Arora",
            registerNumber: "22BCE10561",
            title: "Manu Arora",
            description:
              "I think, putting the github description here would be a good idea. What do you think?",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            authorAvatar: "/card/cardpic.png",
          },
    ]
  const {} = props;

  return (
    <section className='h-screen w-full'>
      <Navbar userImage='https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
      <div className="flex justify-center items-start overflow-y-scroll h-[80%] pt-2">
  <div className='grid md:grid-cols-4 md:gap-12 gap-4'>
    {values.map((value, index) => (
      <FollowingPointerDemo key={index} author={value.author} registerNumber={value.registerNumber} title={value.title} description={value.description} image={value.image} authorAvatar={value.authorAvatar} />
    ))}
  </div>
</div>
    </section>
  );
}

export default Page;