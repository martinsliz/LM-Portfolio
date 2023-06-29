import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            A little about me:
          </p>
        </div>
        <p className="text-xl mt-20">
          With a diverse career in industries such as construction and customer
          service, I bring a unique perspective to the world of tech. In past
          roles I've enjoyed finding ways to streamline processes for ease of
          use and I look forward to learning how I can apply that to future
          projects.
        </p>
        <br />
        <p className="text-xl">
          Beyond my professional experience, I have a background in theater and
          also speak three languages. This has helped me to develop strong
          strong interpersonal skills and an ability to collaborate and
          communicate with people from diverse backgrounds. I bring a positive
          attitude and great sense of humor to every team I work with.
        </p>
        <br />
        <p className="text-xl">
          I have a natural curiosity and love of tinkering. Whether it's
          repairing an oven control board, building a pc for the first time, or
          restoring a vintage Schwinn, I enjoy getting hands-on to figure out
          how things work.
        </p>
        <br />
        <p className="text-xl">
          Ultimately, I am seeking a collaborative work environment where I can
          bring my skills, experience, and enthusiasm to the table. I am excited
          to work with people who value interaction, communication, and
          creativity, and I am committed to bringing my best to every project I
          work on.
        </p>
      </div>
    </div>
  )
}

export default About
