import React from 'react'
import heroImage from '../assets/heroImage.png'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-gray-50">
        <div>
          <h2>Hello!</h2>
          <p>Nice to meet you!</p>
          <div>
            <button>
              Portfolio
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="owner headshot"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
