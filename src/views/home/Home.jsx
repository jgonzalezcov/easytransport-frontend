import React from 'react'
import Ini from './components/ini/Ini'
import About from './components/about/About'
import './homeStyle.css'
import End from './components/end/End'

const Home = () => {
  return (
    <body>
      <Ini />
      <About />
      <End />
    </body>
  )
}

export default Home
