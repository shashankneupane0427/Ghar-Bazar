import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Achievements from '../components/Achievements'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Properties from '../components/Properties'


const Home = () => {
  return (
    <main className='mx-auto max-w-[1440px] bg-gradient-to-r from-primary via-white to-white dark:bg-gray-900'>
      <Hero/>
      <Features/>
      <Achievements/>
      <Properties/>
      <About/>
      <Testimonials />
    </main>
  )
}

export default Home
