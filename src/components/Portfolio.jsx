import React from 'react'
import Bella_Logo from '../assets/portfolio/Bella_Logo.png'
import ClassConnect from '../assets/portfolio/ClassConnect.png'
import TicTacToe from '../assets/portfolio/TicTacToe.png'
import navbar from '../assets/portfolio/navbar.jpg'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: Bella_Logo,
      demo: '',
      href: 'https://github.com/martinsliz/Bella-Luna-Designs'
    },
    {
      id: 2,
      src: ClassConnect,
      demo: '',
      href: 'https://github.com/martinsliz/Class-Connect'
    },
    {
      id: 4,
      src: TicTacToe,
      demo: '',
      href: 'https://github.com/martinsliz/tic-tac-toe'
    },
    {
      id: 3,
      src: navbar,
      demo: '',
      href: 'https://github.com/martinsliz/The-Bucket-list-Bucket'
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
          {projects.map(({ id, src, demo, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo {demo}
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
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
