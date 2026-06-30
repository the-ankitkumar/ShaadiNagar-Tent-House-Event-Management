import React, { useState } from 'react';
import logo from '../assets/ShaadiNagar_logo_embedded.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const navLinks = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#' },
    { 
      name: 'Services', 
      link: '#',
      hasDropdown: true,
      subLinks: [
        { name: 'Wedding Planning', link: '#' },
        { name: 'Catering Services', link: '#' },
        { name: 'Tent & Decor', link: '#' },
        { name: 'Photography', link: '#' },
        { name: 'Entertainment', link: '#' },
        { name: 'Venue Booking', link: '#' },
      ]
    },
    { name: 'Gallery', link: '#' },
    { name: 'Testimonials', link: '#' },
    { name: 'Contact', link: '#' },
  ];

  const toggleMobileDropdown = (index) => {
    if (mobileDropdownOpen === index) {
      setMobileDropdownOpen(null);
    } else {
      setMobileDropdownOpen(index);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="w-full mx-auto px-2 sm:px-4 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-2 sm:-ml-4">
            <a href="#">
              <img className="h-16 md:h-20 w-auto" src={logo} alt="ShaadiNagar Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.link}
                  className="flex items-center text-gray-800 hover:text-amber-600 transition-colors duration-300 font-medium text-[15px] tracking-wide py-2"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </a>
                {/* Hover Underline / Active Indicator */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>

                {/* Dropdown Menu / Mega Menu (Hover to open on Desktop) */}
                {item.hasDropdown && (
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden w-64 p-4 grid grid-cols-1 gap-2">
                      {item.subLinks.map((subLink, subIndex) => (
                        <a
                          key={subIndex}
                          href={subLink.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href="#book"
              className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-amber-600 focus:outline-none transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-xl ${
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-gray-100 overflow-y-auto">
          {navLinks.map((item, index) => (
            <div key={index}>
              <div 
                className="flex justify-between items-center px-3 py-2.5 text-gray-800 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors cursor-pointer"
                onClick={() => item.hasDropdown ? toggleMobileDropdown(index) : setIsOpen(false)}
              >
                <a href={item.hasDropdown ? "#" : item.link} className="w-full">
                  {item.name}
                </a>
                {item.hasDropdown && (
                  <svg 
                    className={`ml-1 w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen === index ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                )}
              </div>
              
              {/* Mobile Click Dropdown */}
              {item.hasDropdown && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out pl-6 ${
                    mobileDropdownOpen === index ? 'max-h-64 opacity-100 mt-1' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.subLinks.map((subLink, subIndex) => (
                    <a
                      key={subIndex}
                      href={subLink.link}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {subLink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#book"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
