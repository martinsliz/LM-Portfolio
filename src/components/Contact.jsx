import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p4 text-white"
    >
      <div className="flex flex-col p4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex flex-col">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Get in touch by submitting this form!</p>
        </div>
        <div className="flex justify-start items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <label className="mb-2">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <label className="my-2">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <label className="my-2">Message:</label>
            <textarea
              name="message"
              placeholder="Your message here"
              rows={10}
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            />
            <button
              onClick={sendEmail}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
