import React from 'react'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import css from '../assets/css.png'
import reactImage from '../assets/reactImage.png'
import node from '../assets/node.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {
  const programs = [
    {
      id: 1,
      src: html,
      name: 'HTML5',
      href: ''
    },
    {
      id: 2,
      src: javascript,
      name: 'JavaScript',
      href: ''
    },
    {
      id: 3,
      src: css,
      name: 'CSS',
      href: ''
    },
    {
      id: 4,
      src: reactImage,
      name: 'React',
      href: ''
    },
    {
      id: 5,
      src: node,
      name: 'Nodejs',
      href: ''
    },
    {
      id: 6,
      src: github,
      name: 'Github',
      href: ''
    },
    {
      id: 7,
      src: tailwind,
      name: 'Tailwind CSS',
      href: ''
    }
  ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Technologies</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {programs.map(({ id, src, name }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py2 rounded-lg"
            >
              <img src={src} alt={name} className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
