import React from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Socials from './components/Socials'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Socials />
      <Portfolio />
      <Experience />
    </div>
  )
}

export default App
