import React from "react";
import { Link } from "react-router-dom";

const TENTS = [
  {
    name: "Grand Event, Patna",
    capacity: "500 Guests",
    price: "₹49,999",
    image:
      "https://images.unsplash.com/photo-1744805624954-a6686543c3ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwd2VkZGluZyUyMGRlY29yfGVufDB8fDB8fHww",
  },
  {
    name: "Royal Marquee, Ranchi",
    capacity: "800 Guests",
    price: "₹79,999",
    image:
      "https://images.unsplash.com/photo-1744804298431-57953e4eaba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHdlZGRpbmclMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Garden Pavilion, Patna",
    capacity: "300 Guests",
    price: "₹55,999",
    image:
      "https://images.unsplash.com/photo-1772127822514-682aeffcc0d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGluZGlhbiUyMHdlZGRpbmclMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function TentCard({ name, capacity, price, image }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/5] cursor-pointer">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
        {price}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-serif text-lg leading-tight mb-1">
          {name}
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="text-amber-400 text-xs">●</span>
          <span className="text-white/80 text-xs tracking-wide">
            {capacity}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Tent() {
  return (
    <div className="w-full bg-neutral-800 py-12 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-white font-serif text-3xl sm:text-4xl mt-2">
            Choose Your Perfect Venue & Mandap Decor
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Discover top-rated tent setups, grand marquees, and wedding mandaps
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TENTS.map((tent, i) => (
            <TentCard key={i} {...tent} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/tent-decor"
            className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-amber-500/25 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <span>View All Venues </span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}