import React from 'react'
import { Link } from 'react-scroll'
import LM from '../assets/LM.jpeg'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-gray-50 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Hello!</h2>
          <p className="text-gray-400 text-lg py-4 max-w-md">
            Check out my work below!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={800}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-cyan-200 to-blue-400 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={15} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={LM}
            alt="main subject"
            className="rounded-full max-w-screen-sm max-h-96 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
