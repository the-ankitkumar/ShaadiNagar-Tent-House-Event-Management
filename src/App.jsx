import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Service from './components/Service.jsx'
import Birthday from './components/Birthday.jsx'
import Catering from './components/Catering.jsx'
import Tent from './components/Tent.jsx'
import Testmonial from './components/Testmonial.jsx'

import TentAndDecor from './pages/TentAndDecor.jsx'
import CateringPage from './pages/CateringPage.jsx'
import DecorationPage from './pages/DecorationPage.jsx'
import BirthdayPage from './pages/BirthdayPage.jsx'
import MeetingPage from './pages/MeetingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'

// Automatically scrolls to top on route change, or scrolls to hash element (e.g. #testimonials)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Service />
    <Birthday />
    <Catering />
    <Tent />
    <Testmonial />
  </>
);

// Layout wrapper with Navbar and Footer
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <div className="relative w-full min-h-screen font-sans bg-white text-neutral-900 selection:bg-amber-500 selection:text-white">
      <ScrollToTop />
      
      <Routes>
        {/* Auth pages without header/footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Main pages with Header and Footer */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/tent-decor" element={<Layout><TentAndDecor /></Layout>} />
        <Route path="/catering" element={<Layout><CateringPage /></Layout>} />
        <Route path="/decoration" element={<Layout><DecorationPage /></Layout>} />
        <Route path="/birthday" element={<Layout><BirthdayPage /></Layout>} />
        <Route path="/meeting" element={<Layout><MeetingPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Layout><HomePage /></Layout>} />
      </Routes>
    </div>
  );
};

export default App;
