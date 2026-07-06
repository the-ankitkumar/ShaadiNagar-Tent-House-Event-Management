import React, { useState, useEffect, useRef } from "react";
import cateringImg1 from "../assets/Catering Services(image 1).jpg";
import cateringImg2 from "../assets/Catering Services(image 2).jpg";
import cateringImg3 from "../assets/Catering Services(image 3).jpg";
import cateringImg4 from "../assets/Catering Services(image 4).jpg";
import cateringImg5 from "../assets/Catering Services(image 5).jpg";
import cateringImg6 from "../assets/Catering Services(image6).jpg";
import newCat1 from "../assets/new_catering_1.png";
import newCat2 from "../assets/new_catering_2.png";
import newCat3 from "../assets/new_catering_3.png";
import newCat4 from "../assets/new_catering_4.png";
import newCat5 from "../assets/new_catering_5.png";
import newCat6 from "../assets/new_catering_6.png";

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
    title: "Royal Indian Buffet",
    location: "Near Gandhi Maidan, Patna",
    rating: 4.9,
    reviews: 145,
    price: "450/plate",
    guests: "Min 100",
    promotion: "-10%",
    guests: "Min 100",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-orange-300",
    category: "Wedding Buffets",
    image: newCat1,
  },
  {
    id: 2,
    title: "Sweet Delights Counter",
    location: "Boring Road, Patna",
    rating: 4.7,
    reviews: 89,
    price: "350/plate",
    guests: "Min 50",
    promotion: "-5%",
    guests: "Min 50",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-amber-200",
    category: "Sweets & Desserts",
    image: newCat2,
  },
  {
    id: 3,
    title: "Live Chaat Station",
    location: "Patliputra Colony, Patna",
    rating: 4.8,
    reviews: 210,
    price: "600/plate",
    guests: "Min 150",
    promotion: "-15%",
    guests: "Min 150",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-red-200",
    category: "Live Counters",
    image: newCat3,
  },
  {
    id: 4,
    title: "Elegant Dining Feasts",
    location: "Kankarbagh, Patna",
    rating: 4.5,
    reviews: 67,
    price: "300/plate",
    guests: "Min 50",
    promotion: "-5%",
    guests: "Min 50",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Multi-Cuisine",
    image: newCat4,
  },
  {
    id: 5,
    title: "Traditional Thali Meals",
    location: "Frazer Road, Patna",
    rating: 4.6,
    reviews: 134,
    price: "500/plate",
    guests: "Min 200",
    promotion: "-10%",
    guests: "Min 200",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-rose-300",
    category: "Regional Specials",
    image: newCat5,
  },
  {
    id: 6,
    title: "Modern Mocktail Bar",
    location: "Dak Bungalow Road, Patna",
    rating: 4.4,
    reviews: 45,
    price: "250/plate",
    guests: "Min 100",
    promotion: "-8%",
    guests: "Min 100",
    promotion: "-8%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Live Counters",
    image: newCat6,
  },
  {
    id: 7,
    title: "Classic Wedding Buffet",
    location: "Rajendra Nagar, Patna",
    rating: 4.5,
    reviews: 125,
    price: "400/plate",
    guests: "Min 100",
    promotion: "-5%",
    guests: "Min 100",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-neutral-200",
    category: "Wedding Buffets",
    image: cateringImg1,
  },
  {
    id: 8,
    title: "Gourmet Party Snacks",
    location: "Bailey Road, Patna",
    rating: 4.8,
    reviews: 98,
    price: "550/plate",
    guests: "Min 150",
    promotion: "-12%",
    guests: "Min 150",
    promotion: "-12%",
    premium: true,
    shadow: "shadow-green-200",
    category: "Live Counters",
    image: cateringImg2,
  },
  {
    id: 9,
    title: "Maharaja Wedding Feasts",
    location: "Anisabad, Patna",
    rating: 4.9,
    reviews: 176,
    price: "700/plate",
    guests: "Min 200",
    promotion: "-15%",
    guests: "Min 200",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-yellow-300",
    category: "Wedding Buffets",
    image: cateringImg3,
  },
  {
    id: 10,
    title: "Shree Ji Sweets & Catering",
    location: "Phulwari Sharif, Patna",
    rating: 4.6,
    reviews: 84,
    price: "350/plate",
    guests: "Min 50",
    promotion: "-5%",
    guests: "Min 50",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-neutral-200",
    category: "Sweets & Desserts",
    image: cateringImg4,
  },
  {
    id: 11,
    title: "Luxury Event Caterers",
    location: "Gola Road, Patna",
    rating: 4.7,
    reviews: 112,
    price: "500/plate",
    guests: "Min 100",
    promotion: "-10%",
    guests: "Min 100",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-blue-200",
    category: "Corporate Catering",
    image: cateringImg5,
  },
  {
    id: 12,
    title: "Spice Route Catering",
    location: "Saguna More, Patna",
    rating: 4.4,
    reviews: 55,
    price: "300/plate",
    guests: "Min 50",
    promotion: "-5%",
    guests: "Min 50",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Multi-Cuisine",
    image: cateringImg6,
  },
];

const categories = [
  "All",
  "Vegetarian Only",
  "Multi-Cuisine",
  "Live Counters",
  "Wedding Buffets",
  "Sweets & Desserts",
  "Corporate Catering",
  "Regional Specials",
];

function VendorCard({ vendor }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300"
    >
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

export default function Catering() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVendors = activeCategory === "All"
    ? vendors
    : vendors.filter((vendor) => vendor.category === activeCategory);

  return (
    <section id="catering" className="w-full bg-neutral-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Catering Services
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
