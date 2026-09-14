import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ShaadiNagar_logo_embedded.svg';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Newsletter CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-rose-700 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold tracking-widest uppercase bg-black/20 text-amber-200 px-3 py-1 rounded-full">
                Stay Updated
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-tight">
                Planning an upcoming event?
              </h3>
              <p className="mt-2 text-amber-100/90 text-sm sm:text-base">
                Subscribe to receive exclusive decor ideas, seasonal discounts, and free wedding planning guides.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm font-medium"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white font-bold text-sm transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-amber-200 font-medium mt-2 text-center lg:text-left">
                  ✓ Thank you! You’re subscribed to ShaadiNagar updates.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="ShaadiNagar Logo" className="h-16 md:h-20 w-auto bg-white/90 p-2 rounded-xl" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              ShaadiNagar is your premier event management & tent house directory. We connect you with top-rated mandap decorators, caterers, and party venues across Bihar, Jharkhand, and UP.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01' },
                { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
                { name: 'WhatsApp', icon: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' }
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-amber-600 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-neutral-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Tent House Setup', link: '/tent-decor' },
                { name: 'Mandap Decoration', link: '/tent-decor' },
                { name: 'Catering Services', link: '/catering' },
                { name: 'Birthday Parties', link: '#' },
                { name: 'Corporate Meetings', link: '#' },
                { name: 'Lighting & DJ', link: '#' }
              ].map((srv) => (
                <li key={srv.name}>
                  <Link to={srv.link} className="hover:text-amber-500 transition-colors">
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Boring Road, Patna, Bihar 800001</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@shaadinagar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Cities Tag Bar */}
        <div className="py-6 border-b border-neutral-800/60 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-neutral-400 mr-2">Popular Cities:</span>
          {['Patna', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Lucknow'].map((city) => (
            <span key={city} className="px-2.5 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
              {city}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} ShaadiNagar Tent House & Event Management. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-neutral-800 ml-2"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
