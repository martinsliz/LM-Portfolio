import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p4 text-white"
    >
      <div className="flex flex-col p4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex flex-col">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Get in touch by submitting this form!</p>
        </div>
        <div className="flex justify-start items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />{' '}
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Tell me how much you want to work with me!"
              rows={10}
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
