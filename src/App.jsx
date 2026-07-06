import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Birthday from './components/Birthday'
 import Catering from './components/Catering'


const App = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <Hero />
      <Service />
      <Birthday />
      <Catering />
    </div>
  )
}

export default App
