import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          assumenda enim delectus dignissimos nobis veniam adipisci suscipit ut
          cupiditate natus inventore fuga sit, repellat debitis quibusdam.
          Laborum mollitia sit commodi.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          possimus sapiente, porro ratione eveniet reiciendis distinctio libero
          eum labore dolorem delectus repudiandae provident quia voluptatem
          voluptate quaerat itaque facere saepe.
        </p>
      </div>
    </div>
  )
}

export default About
