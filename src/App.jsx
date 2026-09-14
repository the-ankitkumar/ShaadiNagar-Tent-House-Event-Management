import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Service from './components/Service'
import Birthday from './components/Birthday'
import TentAndDecor from './pages/TentAndDecor'
import CateringPage from './pages/CateringPage'
import DecorationPage from './pages/DecorationPage'
import BirthdayPage from './pages/BirthdayPage'
import MeetingPage from './pages/MeetingPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const HomePage = () => (
  <>
    <Hero />
    <Service />
    <Birthday />
  </>
)

// Layout with Navbar and Footer for all content pages
const WithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

const App = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Routes>
        {/* Auth pages — no Navbar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Pages with Navbar */}
        <Route path="/" element={<WithNavbar><HomePage /></WithNavbar>} />
        <Route path="/about" element={<WithNavbar><AboutPage /></WithNavbar>} />
        <Route path="/tent-decor" element={<WithNavbar><TentAndDecor /></WithNavbar>} />
        <Route path="/catering" element={<WithNavbar><CateringPage /></WithNavbar>} />
        <Route path="/decoration" element={<WithNavbar><DecorationPage /></WithNavbar>} />
        <Route path="/birthday" element={<WithNavbar><BirthdayPage /></WithNavbar>} />
        <Route path="/meeting" element={<WithNavbar><MeetingPage /></WithNavbar>} />
        <Route path="/contact" element={<WithNavbar><ContactPage /></WithNavbar>} />
      </Routes>
    </div>
  )
}

export default App
