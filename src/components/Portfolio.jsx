import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import usestate from '../assets/portfolio/usestate.jpg'

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Portfolio</p>
          <p className="py-6">Check out my work here!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={reactParallax}
              alt=""
              className="rounded-md duration-200 hover:scale-105 cursor-pointer"
            />
            <div className="flex items-center justify-center">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
