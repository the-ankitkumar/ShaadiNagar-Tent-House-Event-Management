import React, { useState } from 'react';
import mahakImg from '../assets/Mahak Sharma and Rohit Bharati, Mumbai.jpg';
import payalImg from '../assets/Payal and Thomas, Rajasthan.jpg';

const StarIcon = ({ filled = true }) => (
  <svg 
    viewBox="0 0 20 20" 
    fill={filled ? "currentColor" : "none"} 
    stroke={filled ? "none" : "currentColor"}
    className="w-4 h-4 text-amber-500"
  >
    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.4 6-5.5-3.2-5.5 3.2 1.4-6-4.6-4.1 6.1-.6L10 1.5z" />
  </svg>
);

const VerifiedBadge = () => (
  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
    Verified Client
  </span>
);

const testimonials = [
  {
    id: 1,
    category: 'Wedding',
    name: 'Mahak Sharma & Rohit Bharati',
    location: 'Patna, Bihar',
    event: 'Grand Royal Wedding & Mandap',
    image: mahakImg,
    rating: 5,
    date: 'February 2026',
    comment:
      'ShaadiNagar made our dream wedding come alive! The Mandap decoration was breathtaking with fresh roses and fairy lights. The tent house team was incredibly punctual and took care of every small detail. Our guests are still raving about the setup!',
    highlight: 'Breathtaking Mandap & Setup',
  },
  {
    id: 2,
    category: 'Wedding',
    name: 'Payal & Thomas',
    location: 'Ranchi, Jharkhand',
    event: 'Destination Style Tent & Decor',
    image: payalImg,
    rating: 5,
    date: 'January 2026',
    comment:
      'Booking our wedding decorations through ShaadiNagar was the best decision we made. From the grand entrance gate to the floral stage lighting, everything exceeded our expectations. Truly a 5-star experience!',
    highlight: 'Flawless Execution',
  },
  {
    id: 3,
    category: 'Catering',
    name: 'Vikram & Sunita Roy',
    location: 'Jamshedpur, Jharkhand',
    event: 'Royal Reception Catering',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'December 2025',
    comment:
      'The catering service arranged by ShaadiNagar was spectacular. The live counters, North Indian starters, and dessert spread were loved by all 600+ guests. Hygienic, delicious, and prompt service throughout the night.',
    highlight: 'Delicious 5-Star Catering',
  },
  {
    id: 4,
    category: 'Birthday',
    name: 'Anjali & Deepak Verma',
    location: 'Boring Road, Patna',
    event: '1st Birthday Grand Theme Party',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'January 2026',
    comment:
      'We booked the balloon decor and entertainment package for our daughter’s birthday. The kids balloon arch, magic show, and venue lighting were super vibrant. Extremely professional staff!',
    highlight: 'Vibrant Theme & Lighting',
  },
  {
    id: 5,
    category: 'Corporate',
    name: 'Rajesh Kumar (Nexus Events)',
    location: 'Civil Lines, Ranchi',
    event: 'Corporate Annual Gala Setup',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'February 2026',
    comment:
      'We hired ShaadiNagar for our company’s annual celebration tent house setup & audio-visual stage decoration. The sound system, VIP lounge seating, and stage branding were top notch.',
    highlight: 'Premium Corporate Setup',
  },
  {
    id: 6,
    category: 'Wedding',
    name: 'Kavita & Alok Singh',
    location: 'Kankarbagh, Patna',
    event: 'Haldi & Sangeet Decoration',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'November 2025',
    comment:
      'The marigold flower decorations for our Haldi function were magical! ShaadiNagar provided authentic traditional decor with modern aesthetic touches. Highly recommended for all wedding functions.',
    highlight: 'Magical Traditional Vibes',
  },
];

const categories = ['All Reviews', 'Wedding', 'Catering', 'Birthday', 'Corporate'];

export default function Testmonial() {
  const [activeTab, setActiveTab] = useState('All Reviews');
  const [likes, setLikes] = useState({});

  const filteredTestimonials =
    activeTab === 'All Reviews'
      ? testimonials
      : testimonials.filter((t) => t.category === activeTab);

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="testimonials" className="w-full bg-[#FAF9F6] py-16 px-4 md:px-10 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-amber-700 uppercase bg-amber-100/80 px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
            Client Stories & Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            What Our Happy Couples Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 font-normal">
            Real experiences from real celebrations across Patna, Ranchi, Jamshedpur & Dhanbad.
          </p>
        </div>

        {/* Rating Overview Summary Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm ring-1 ring-neutral-200/70 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center justify-center bg-amber-500 text-white w-20 h-20 rounded-2xl shadow-md">
              <span className="text-3xl font-bold font-serif leading-none">4.9</span>
              <span className="text-[11px] font-medium opacity-90">out of 5</span>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={true} />
                ))}
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Over 2,500+ Celebrations Delivered
              </h3>
              <p className="text-sm text-neutral-500">
                Rated 4.9/5 across Google Reviews & ShaadiNagar Verified Clients
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-neutral-200 pt-4 md:pt-0 md:pl-8 w-full md:w-auto justify-around md:justify-start">
            <div>
              <p className="text-2xl font-bold text-neutral-900 font-serif">100%</p>
              <p className="text-xs text-neutral-500 font-medium">Verified Vendors</p>
            </div>
            <div className="h-8 w-px bg-neutral-200" />
            <div>
              <p className="text-2xl font-bold text-neutral-900 font-serif">99%</p>
              <p className="text-xs text-neutral-500 font-medium font-serif font-sans">On-Time Setup</p>
            </div>
            <div className="h-8 w-px bg-neutral-200" />
            <div>
              <p className="text-2xl font-bold text-neutral-900 font-serif">50+</p>
              <p className="text-xs text-neutral-500 font-medium">Cities Covered</p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 ring-1 ring-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-neutral-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/70 px-2.5 py-1 rounded-md">
                    {item.highlight}
                  </span>
                  <VerifiedBadge />
                </div>

                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <StarIcon key={i} filled={true} />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 font-medium">{item.date}</span>
                </div>

                {/* Quote / Comment */}
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 font-normal italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400/40 shadow-xs"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-neutral-900 text-sm sm:text-base leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-500 font-medium">
                      {item.event} • <span className="text-neutral-600">{item.location}</span>
                    </p>
                  </div>
                </div>

                {/* Like / Helpful button */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className={`p-2 rounded-full transition-colors cursor-pointer ${
                    likes[item.id]
                      ? 'text-rose-600 bg-rose-50'
                      : 'text-neutral-400 hover:text-rose-500 hover:bg-neutral-50'
                  }`}
                  title="Helpful Review"
                >
                  <svg className="w-5 h-5" fill={likes[item.id] ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
