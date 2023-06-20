import React from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Socials from './components/Socials'
import About from './components/About'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Socials />
    </div>
  )
}

export default App
