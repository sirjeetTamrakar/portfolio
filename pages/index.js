import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Timeline from '../components/Timeline'
import About from '../components/About'

const Home = () => {
  return (
    <>
      <Hero />
      <Projects/>
      <Technologies/>
      <Timeline />
      <About/>
    </>
  )
}

export default Home
