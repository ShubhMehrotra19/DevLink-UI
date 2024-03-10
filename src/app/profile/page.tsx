import React from 'react'
import Navbar from './Navbar'
import CardFlip from './CardFlip'
import Link from 'next/link'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <section className='h-screen w-screen flex flex-col'>
        <Navbar />
     <div className='h-full w-full flex flex-col justify-center items-center'>
        <CardFlip />
        <Link href='/home'>
          <button
            type="button"
            className="flex justify-center items-center gap-1 md:hidden rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 active:scale-95 transition ease-in-out cursor-pointer"
          >
            back
          </button></Link>
     </div>
        </section>
    )
}

export default Page