import React from 'react';
import Navbar from './Navbar';

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <section className='bg-white h-screen w-full'>
      <Navbar userImage='https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
    </section>
  );
}

export default Page;