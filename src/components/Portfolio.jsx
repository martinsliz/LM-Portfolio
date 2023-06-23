import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
      demo: '',
      href: ''
    },
    {
      id: 2,
      src: installNode,
      demo: '',
      href: ''
    },
    {
      id: 3,
      src: navbar,
      demo: '',
      href: ''
    },
    {
      id: 4,
      src: reactParallax,
      demo: '',
      href: ''
    },
    {
      id: 5,
      src: reactSmooth,
      demo: '',
      href: ''
    },
    {
      id: 6,
      src: reactWeather,
      demo: '',
      href: ''
    }
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Portfolio</p>
          <p className="py-6">Check out my work here!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
