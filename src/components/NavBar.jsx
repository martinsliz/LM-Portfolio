import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' }
  ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Liz</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-5 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      {/* <div>{nav ? <FaBars size={30} /> : <FaTimes />}</div> */}
    </div>
  )
}

export default NavBar
