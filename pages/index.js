import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Timeline from '../components/Timeline'
import About from '../components/About'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Projects/>
      <Technologies/>
      <Timeline />
      <About/>
    </div>
  )
}

export default Home
