import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Service from './components/Service'
import Birthday from './components/Birthday'
import Catering from './components/Catering'
import Tent from './components/Tent'
import Testmonial from './components/Testmonial'

import TentAndDecor from './pages/TentAndDecor'
import CateringPage from './pages/CateringPage'
import DecorationPage from './pages/DecorationPage'
import BirthdayPage from './pages/BirthdayPage'
import MeetingPage from './pages/MeetingPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

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
