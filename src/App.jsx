import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Birthday from './components/Birthday'
import Catering from './components/Catering'

const Home = () => (
  <>
    <Hero />
    <Service />
    <Birthday />
  </>
)

const App = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catering" element={<Catering />} />
      </Routes>
    </div>
  )
}

export default App
