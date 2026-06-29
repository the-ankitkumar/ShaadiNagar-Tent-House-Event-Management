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
        <div className="absolute inset-0 bg-black/35 md:bg-transparent z-10" />
      </div>
      <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-[2px] text-white/95 text-[10px] md:text-xs font-semibold tracking-wider px-3 py-1.5 rounded uppercase select-none z-20">
        ShaadiNagar
      </div>
      <div className="hero-clip-path z-20 w-full md:w-[58%] h-full flex flex-col justify-center px-6 sm:px-12 md:pl-16 md:pr-24 lg:pl-24 lg:pr-32 bg-transparent md:bg-white text-white md:text-slate-800">  
        <div className="flex flex-col max-w-xl md:max-w-2xl bg-black/35 backdrop-blur-[6px] md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:bg-transparent shadow-xl md:shadow-none">
          
     
          <div className="mb-5 md:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white md:text-slate-900 leading-[1.2] tracking-tight">
              Everything you need to <span className="text-white md:text-[#e61da3] ">plan your event</span>
            </h1> 
          </div>
          
  
          <div className="mb-12 md:mb-20">
            <p className="text-sm sm:text-base md:text-lg text-white/90 md:text-slate-500 font-normal leading-relaxed max-w-md">
              Search over 79,000+ local professionals with reviews, pricing, and more.
            </p>
          </div>

    
          <div className="w-full">
            <form 
              onSubmit={handleSearch}
              className="w-full flex flex-col md:flex-row items-stretch md:items-center gap-3"
            >

              <div className="flex-1 bg-white border border-gray-150 md:border-gray-200 rounded-2xl shadow-[0_16px_36px_-6px_rgba(0,0,0,0.18)] md:shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-2 md:p-1.5 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0 transition-all duration-300 focus-within:ring-4 focus-within:ring-[#E61D2B]/10 focus-within:border-[#E61D2B]/30">
                
                <div className="flex items-center flex-1 px-3 py-2 md:py-1">
                  <svg 
                    className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search vendor category or name"
                    className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-gray-400 text-sm md:text-base font-medium"
                  />
                </div>

          
                <div className="hidden md:block w-[1px] h-8 bg-gray-200 self-center mx-2" />
                <div className="flex items-center flex-1 px-3 py-2 md:py-1">
                
                  <svg 
                    className="w-4.5 h-4.5 text-gray-400 mr-2 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-gray-400 text-sm md:text-base font-medium"
                  />
                </div>
              </div>
              <div className="flex-shrink-0">
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-[#1d34e6] hover:bg-[#C8101E] active:scale-[0.97] text-white font-bold text-base px-10 py-4 md:py-3.5 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-rose-900/10 hover:shadow-lg hover:shadow-rose-900/20"
                >
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Find</span>
                </button>
              </div>
            </form>
          </div>
          <div className="mt-5">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="text-white/70 md:text-slate-400 font-medium">Popular:</span>
              {['Catering', 'Mandap Decor', 'Tent House', 'Photographer'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearchQuery(item)}
                  className="px-3 py-1 bg-white/10 md:bg-slate-100 hover:bg-white/20 md:hover:bg-slate-200 active:scale-95 text-white md:text-slate-600 rounded-full transition-all duration-150 cursor-pointer text-xs font-medium"
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

