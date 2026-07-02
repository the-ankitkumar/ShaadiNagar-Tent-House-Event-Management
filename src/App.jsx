import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Birthday from './components/Birthday'



const App = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <Hero />
      <Service />
      <Birthday />
    </div>
  )
}

export default App
