import React from "react";
import { Link } from "react-router-dom";

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

const cateringVendors = [
  {
    id: "royal-feast-caterers",
    title: "Royal Feast Caterers",
    location: "Boring Road, Patna",
    rating: 4.8,
    reviews: false,
    price: "350",
    promotion: "-15%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "spice-route-catering",
    title: "Spice Route Catering",
    location: "Sakchi, Jamshedpur",
    rating: 4.6,
    price: "300",
    promotion: "-10%",
    premium: true,
    image:
      "https://plus.unsplash.com/premium_photo-1754254880658-f8de5e1c380c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdGVyaW5nJTIwc2VydmljZSUyMHdlZGRpbmclMjBpbmRpYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "grand-thali-services",
    title: "Grand Thali Services",
    location: "Civil Lines, Lucknow",
    rating: 4.7,
    price: "400",
    promotion: "-20%",
    premium: false,
    image:
      "https://images.unsplash.com/photo-1616734755909-bb016ce64930?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "veggie-delight-caterers",
    title: "Veggie Delight Caterers",
    location: "Hirapur, Dhanbad",
    rating: 4.4,
    price: "250",
    promotion: "-5%",
    premium: false,
    image:
      "https://images.unsplash.com/photo-1773409414133-9c5d141cb4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxjYXRlcmluZyUyMHNlcnZpY2UlMjB3ZWRkaW5nJTIwaW5kaWFuJTIwd2l0aCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "royal-banquet-cuisine",
    title: "Royal Banquet Cuisine",
    location: "Bailley Road, Patna",
    rating: 4.9,
    price: "500",
    promotion: "-12%",
    premium: true,
    image:
      "https://plus.unsplash.com/premium_photo-1754211839227-d4693f020f2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function CateringCard({ vendor }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow">
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
          <span className="text-neutral-400">·</span>
          <span className="truncate">{vendor.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
          <span className="flex items-center gap-1.5">
            From ₹{vendor.price}/plate
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Catering() {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Catering Vendors
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-5 cursor-pointer">
          {cateringVendors.map((vendor) => (
            <CateringCard key={vendor.id} vendor={vendor} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/catering"
            className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition-colors"
          >
            View All Catering Services
          </Link>
        </div>
      </div>
    </section>
  );
}