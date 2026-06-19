import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-maroon text-cream pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">ShaadiNagar</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Premium Tent House & Event Management company. We turn your special moments into unforgettable memories with our exquisite decorations and flawless management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream text-maroon flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream text-maroon flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream text-maroon flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-4 border-b-2 border-gold inline-block pb-1">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors text-sm">Our Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors text-sm">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-4 border-b-2 border-gold inline-block pb-1">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Patna, Bihar</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@shaadinagar.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ShaadiNagar Tent House & Event Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
