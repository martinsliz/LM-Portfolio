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
      href: '',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: javascript,
      name: 'JavaScript',
      style: 'shadow-yellow-500',
      href: ''
    },
    {
      id: 3,
      src: css,
      name: 'CSS',
      style: 'shadow-blue-500',
      href: ''
    },
    {
      id: 4,
      src: reactImage,
      name: 'React',
      style: 'shadow-cyan-600',
      href: ''
    },
    {
      id: 5,
      src: node,
      name: 'Nodejs',
      style: 'shadow-green-500',
      href: ''
    },
    {
      id: 6,
      src: github,
      name: 'Github',
      style: 'shadow-gray-500',
      href: ''
    },
    {
      id: 7,
      src: tailwind,
      name: 'Tailwind CSS',
      style: 'shadow-sky-500',
      href: ''
    }
  ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Technologies</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {programs.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py2 rounded-lg ${style}`}
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
