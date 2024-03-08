import React from 'react';
import Navbar from './Navbar';
import Cardfront from '@/components/CardComponent/cardFront';

interface Props {}

function Page(props: Props) {
    const values = [
        {
            userName: "Rahul Verma",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
        {
            userName: "Rahul Chautala",
            userDomain: "#webdevelopment", 
            imageLink: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=600", 
            regNumber: "22BCE10001"
        },
    ]
  const {} = props;

  return (
    <section className='bg-white h-screen w-full'>
      <Navbar userImage='https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
      <div className="flex justify-center items-start overflow-y-scroll h-[80%] pt-2">
  <div className='grid md:grid-cols-2 gap-20'>
    {values.map((value, index) => (
      <Cardfront key={index} userName={value.userName} userDomain={value.userDomain} imageLink={value.imageLink} regNumber={value.regNumber} />
    ))}
  </div>
</div>
    </section>
  );
}

export default Page;