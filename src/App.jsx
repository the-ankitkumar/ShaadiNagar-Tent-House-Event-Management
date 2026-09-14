import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Birthday from './components/Birthday'
import TentAndDecor from './pages/TentAndDecor'
import Catering from './components/Catering'
import Tent from './components/Tent'
import Testmonial from './components/Testmonial'
import Footer from './components/Footer'

const Home = () => (
  <>
    <Hero />
    <Service />
    <Birthday />
    <Catering />
    <Tent />
    <Testmonial />
  </>
)

const App = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tent-decor" element={<TentAndDecor />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
