import React, { useState } from 'react'
import weddingHero from '../assets/wedding_hero.png'
const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery, 'in:', location)
  }

  return (
    <section className="relative w-full h-[580px] md:h-[620px] lg:h-[660px] bg-[#FAF9F6] overflow-hidden flex items-center">  
      <div className="absolute right-0 top-0 w-full md:w-[58%] h-full z-0">
        <img
          src={weddingHero}
          alt="Wedding Couple"
          className="w-full h-full object-cover object-[center_35%] md:object-[65%_35%] select-none"
        />
      </div>
      <div className="hero-clip-path z-20 w-full md:w-[58%] h-full flex flex-col justify-center px-6 sm:px-12 md:pl-16 md:pr-24 lg:pl-24 lg:pr-32 bg-transparent md:bg-white text-white md:text-slate-800">  
        <div className="flex flex-col max-w-xl md:max-w-2xl bg-black/35 backdrop-blur-[6px] md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:bg-transparent shadow-xl md:shadow-none">
          <div className="mb-5 md:mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white md:text-slate-900 leading-[1.2] tracking-tight">
              Everything you need to <span className="text-white md:text-[#e61da3] ">plan your event</span>
            </h1> 
          </div>
          
  
          <div className="mb-5 md:mb-12">
            <p className="text-sm sm:text-base md:text-lg text-white/90 md:text-slate-500 font-normal leading-relaxed max-w-md">
              Search over 1,000+ local professionals with reviews, pricing, and more.
            </p>
          </div>

    
          <div>
            <form 
              onSubmit={handleSearch}
              className="w-full flex flex-col md:flex-row items-stretch md:items-center gap-3"
            >

                <div className="flex-1 bg-white border border-gray-150 md:border-gray-200 rounded-2xl shadow-[0_16px_36px_-6px_rgba(0,0,0,0.18)] md:shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-1 md:p-1.5 flex transition-all duration-300 focus-within:ring-4 focus-within:ring-[#E61D2B]/10 focus-within:border-[#E61D2B]/30  ">  
                <div className="flex items-center flex-1 px-0 py-0 md:py-1 "> 
                   <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search vendor category"
                    className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-gray-400 text-sm md:text-base font-medium flex gap-1"
                  />
                 </div> 
                 </div>

                <div className="flex-1 bg-white border border-gray-150 md:border-gray-200 rounded-2xl shadow-[0_16px_36px_-6px_rgba(0,0,0,0.18)] md:shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-2 md:p-1.5 flex md:flex-row items-stretch md:items-center gap-2 md:gap-0 transition-all duration-300 focus-within:ring-4 focus-within:ring-[#E61D2B]/10 focus-within:border-[#E61D2B]/30 mx-1 ">  
                 <div className="flex items-center flex-1 px-3 py-2 md:py-1 flex-wrap">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-gray-400 text-sm md:text-base font-medium flex mx-2"
                  />
                 </div> 
                 </div>
              
              <div className="">
                <button 
                  type="submit"
                  className=" bg-[#1d34e6] hover:bg-[#c810af] active:scale-[0.97] text-white font-bold text-base px-10 py-4 md:py-3.5 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer  w-25"
                >
                  <span>Find</span>
                </button>
              </div>

            </form>
          </div>
          <div className="mt-5">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="text-white/70 md:text-slate-400 font-medium">Popular:</span>
              {['Catering', 'Mandap Decor', 'Tent House', 'Birthday','Meeting'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearchQuery(item)}
                  className="px-3 py-1 bg-white/10 md:bg-slate-100 hover:bg-white/20 md:hover:bg-slate-200 active:scale-95 text-white md:text-slate-600 rounded-full transition-all duration-150 cursor-pointer text-xs font-medium mx-1.5"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

