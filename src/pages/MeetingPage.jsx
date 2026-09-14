import React, { useState } from "react";

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-500">
    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.4 6-5.5-3.2-5.5 3.2 1.4-6-4.6-4.1 6.1-.6L10 1.5z" />
  </svg>
);
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-neutral-500">
    <circle cx="9" cy="8" r="3" />
    <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15 14.2c2.6.4 4.5 2.5 4.5 5.8" />
  </svg>
);
const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-neutral-700">
    <path d="M20 12l-8 8-9-9V3h8l9 9z" />
    <circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);
const PriceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-neutral-700">
    <path d="M4 6h16M4 12h10M4 18h16" />
  </svg>
);

const vendors = [
  {
    id: 1,
    title: "Executive Conference Center",
    location: "Frazer Road, Patna",
    rating: 4.9,
    reviews: 210,
    price: "15,000/day",
    guests: "Up to 200",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-blue-300",
    category: "Conference Halls",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Elite Board Room Suite",
    location: "Boring Road, Patna",
    rating: 4.8,
    reviews: 156,
    price: "8,000/day",
    guests: "Up to 20",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-neutral-300",
    category: "Board Rooms",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "SkillUp Training Hub",
    location: "Patliputra Colony, Patna",
    rating: 4.7,
    reviews: 98,
    price: "12,000/day",
    guests: "Up to 100",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-green-200",
    category: "Training Rooms",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Grand Seminar Hall",
    location: "Gandhi Maidan, Patna",
    rating: 4.8,
    reviews: 187,
    price: "25,000/day",
    guests: "Up to 500",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-purple-300",
    category: "Seminar Halls",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Garden View Meeting Space",
    location: "Rajendra Nagar, Patna",
    rating: 4.6,
    reviews: 76,
    price: "10,000/day",
    guests: "Up to 50",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-green-200",
    category: "Outdoor Venues",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "CoWork Hub Patna",
    location: "Kankarbagh, Patna",
    rating: 4.5,
    reviews: 134,
    price: "5,000/day",
    guests: "Up to 30",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-sky-200",
    category: "Coworking Spaces",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Corporate Plaza Hall",
    location: "Exhibition Road, Patna",
    rating: 4.9,
    reviews: 267,
    price: "30,000/day",
    guests: "Up to 800",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-amber-300",
    category: "Conference Halls",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Premium Board Suite",
    location: "Dak Bungalow Road, Patna",
    rating: 4.7,
    reviews: 112,
    price: "10,000/day",
    guests: "Up to 25",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-indigo-200",
    category: "Board Rooms",
    image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Tech Training Center",
    location: "Bailey Road, Patna",
    rating: 4.6,
    reviews: 89,
    price: "15,000/day",
    guests: "Up to 150",
    promotion: "-12%",
    premium: false,
    shadow: "shadow-teal-200",
    category: "Training Rooms",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "University Auditorium",
    location: "Anisabad, Patna",
    rating: 4.8,
    reviews: 198,
    price: "20,000/day",
    guests: "Up to 600",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-red-200",
    category: "Seminar Halls",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Lakeside Meeting Resort",
    location: "Rajiv Nagar, Patna",
    rating: 4.7,
    reviews: 145,
    price: "18,000/day",
    guests: "Up to 100",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-cyan-300",
    category: "Outdoor Venues",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "StartUp Space Patna",
    location: "Ashiana Nagar, Patna",
    rating: 4.4,
    reviews: 67,
    price: "3,500/day",
    guests: "Up to 20",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-orange-200",
    category: "Coworking Spaces",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    title: "Royal Convention Center",
    location: "S K Puri, Patna",
    rating: 4.9,
    reviews: 310,
    price: "45,000/day",
    guests: "Up to 1200",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-yellow-300",
    category: "Conference Halls",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    title: "Smart Meeting Room",
    location: "Kadamkuan, Patna",
    rating: 4.5,
    reviews: 78,
    price: "6,000/day",
    guests: "Up to 15",
    promotion: "-8%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Board Rooms",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    title: "Knowledge Academy Hall",
    location: "Danapur, Patna",
    rating: 4.6,
    reviews: 95,
    price: "14,000/day",
    guests: "Up to 250",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-blue-200",
    category: "Seminar Halls",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    title: "Innovation Hub Cowork",
    location: "Rukanpura, Patna",
    rating: 4.7,
    reviews: 156,
    price: "4,500/day",
    guests: "Up to 40",
    promotion: "-12%",
    premium: true,
    shadow: "shadow-violet-200",
    category: "Coworking Spaces",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "All",
  "Conference Halls",
  "Board Rooms",
  "Training Rooms",
  "Seminar Halls",
  "Outdoor Venues",
  "Coworking Spaces",
];

function VendorCard({ vendor }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
      <div className="relative h-44 md:h-48">
        {vendor.premium && (
          <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
            Premium
          </span>
        )}
        <img
          src={vendor.image}
          alt={vendor.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
          {vendor.title}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-neutral-600">
          <StarIcon />
          <span className="font-semibold text-neutral-800">{vendor.rating}</span>
          <span className="text-neutral-400">({vendor.reviews})</span>
          <span className="text-neutral-400">·</span>
          <span className="truncate">{vendor.location}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
          <span className="flex items-center gap-1.5">
            <PriceIcon />
            From ₹{vendor.price}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon />
            {vendor.guests}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
          <TagIcon />
          <span className="text-neutral-700">1 promotion</span>
          <span className="text-red-600 font-semibold">{vendor.promotion}</span>
        </div>
      </div>
    </div>
  );
}

export default function MeetingPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVendors =
    activeCategory === "All"
      ? vendors
      : vendors.filter((vendor) => vendor.category === activeCategory);

  return (
    <section id="meeting" className="w-full bg-neutral-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Meeting & Conference Venues
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-amber-600 border-amber-600 text-white shadow-md"
                  : "border-neutral-300 text-neutral-800 hover:border-amber-500 hover:bg-amber-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVendors.map((vendor) => (
            <div key={vendor.id}>
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
