import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ShaadiNagar_logo_embedded.svg";

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-amber-700 hover:fill-rose-700 transition-colors" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-amber-700 hover:fill-rose-700 transition-colors" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-emerald-600 hover:fill-emerald-700 transition-colors" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.399.636-1.002 3.655 3.743-.982.603.378z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-50 via-amber-50/40 to-stone-100 border-t-4 border-amber-500 text-neutral-800 pt-8 pb-5 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top 3 Columns Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 pb-6 border-b border-amber-200/70">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5 pr-0 lg:pr-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="ShaadiNagar Logo" className="h-12 md:h-14 w-auto" />
            </Link>
            <p className="text-xs text-neutral-600 leading-relaxed font-normal">
              Patna & Bihar&apos;s premier owner-managed tent house and event management destination. Royal wedding mandaps, floral drapes, and multi-cuisine catering personally supervised by our owner.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <span className="text-[11px] font-semibold text-neutral-700 uppercase tracking-wider">Follow Us:</span>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-white border border-amber-200/80 hover:border-amber-500 shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-white border border-amber-200/80 hover:border-rose-500 shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-amber-200/80 hover:border-emerald-500 shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-serif text-sm md:text-base font-bold text-neutral-900 tracking-wide border-b-2 border-amber-500/80 pb-1.5 w-fit">
              Explore Pages
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-1.5 text-xs font-medium text-neutral-600">
              <li>
                <Link to="/" className="hover:text-rose-700 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  <span className="text-amber-500 text-[10px]">▸</span> Home
                </Link>
              </li>
              <li>
                <Link to="/tent-decor" className="hover:text-rose-700 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  <span className="text-amber-500 text-[10px]">▸</span> Tent & Mandap
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-rose-700 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  <span className="text-amber-500 text-[10px]">▸</span> Catering Services
                </Link>
              </li>
              <li>
                <Link to="/decoration" className="hover:text-rose-700 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  <span className="text-amber-500 text-[10px]">▸</span> Theme Decoration
                </Link>
              </li>
              <li>
                <Link to="/birthday" className="hover:text-rose-700 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  <span className="text-amber-500 text-[10px]">▸</span> Birthday Parties
                </Link>
              </li>
              <li>
                <Link to="/meeting" className="hover:text-rose-700 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  <span className="text-amber-500 text-[10px]">▸</span> Meeting & Conference
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-700 hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                  <span className="text-amber-500 text-[10px]">▸</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Head Office & Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <h4 className="font-serif text-sm md:text-base font-bold text-neutral-900 tracking-wide border-b-2 border-amber-500/80 pb-1.5 w-fit">
              Head Office Contact
            </h4>
            
            <div className="bg-white p-3.5 rounded-xl border border-amber-200/80 shadow-sm space-y-2 text-xs">
              <div className="flex items-start gap-2 text-neutral-700">
                <LocationIcon />
                <div>
                  <span className="font-semibold text-neutral-900">Patna Office: </span>
                  <span className="text-neutral-600">ShaadiNagar Main Road, Near Boring Road, Patna, Bihar - 800001</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-neutral-700 pt-1 border-t border-neutral-100">
                <PhoneIcon />
                <div>
                  <span className="font-semibold text-neutral-900 mr-1.5">Phone:</span>
                  <a href="tel:+919876543210" className="text-rose-700 font-semibold hover:underline mr-2">+91 98765 43210</a>
                  <a href="tel:+919123456789" className="text-rose-700 font-semibold hover:underline">+91 91234 56789</a>
                </div>
              </div>

              <div className="flex items-center justify-between text-neutral-600 pt-1 border-t border-neutral-100 text-[11px]">
                <span className="flex items-center gap-1.5"><MailIcon /> info@shaadinagar.com</span>
                <span className="flex items-center gap-1.5"><ClockIcon /> Open 8 AM – 9 PM</span>
              </div>
            </div>

            {/* Direct Owner Guarantee Badge */}
            <div className="bg-gradient-to-r from-amber-500 to-rose-600 text-white px-3 py-2 rounded-lg shadow-sm flex items-center justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider">★ 100% Owner Managed</p>
                <p className="text-[10px] text-white/90">Zero Vendor Commissions • Quality Guaranteed</p>
              </div>
              <Link
                to="/contact"
                className="px-2.5 py-1 bg-white text-neutral-900 hover:bg-neutral-100 rounded-md text-[11px] font-bold whitespace-nowrap transition-colors shadow-sm"
              >
                Enquire Now
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-medium text-neutral-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-neutral-800 font-semibold">ShaadiNagar Tent House & Event Management</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-neutral-600">
            <Link to="/contact" className="hover:text-rose-700 transition-colors">Contact Us</Link>
            <Link to="/login" className="hover:text-rose-700 transition-colors">Log In</Link>
            <Link to="/signup" className="hover:text-rose-700 transition-colors">Free Sign Up</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
