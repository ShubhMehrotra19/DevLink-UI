'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-[rgba(0, 0, 0, 0.07)] backdrop-blur -mt-[2px]">
      <div className="mx-auto flex w-ful items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className='flex justify-center items-center md:scale-100 scale-90'>
            <img className='scale-50' src="/icons/link.png" alt="" />
            <p className='text-lg text-white font-medium'>DevLink</p>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex justify-evenly space-x-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm p-2 font-semibold text-slate-300 hover:text-slate-200 hover:border-blue-200 hover:border-b-2 hover:transition-all ease-in-out cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="flex justify-center items-center gap-1 rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 active:scale-95 transition ease-in-out cursor-pointer"
          >
            <img src="/icons/github.png" alt="" />
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
