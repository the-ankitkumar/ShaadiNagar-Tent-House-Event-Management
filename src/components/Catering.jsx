import React from "react";
import { Link } from "react-router-dom";

/**
 * Featured Catering Vendors
 * React + Tailwind CSS + react-router-dom
 *
 * Each card has an "Explore More" button that routes to:
 *   /catering/:id
 *
 * You'll need a route set up for this in your app, e.g. in App.jsx:
 *
 *   import { BrowserRouter, Routes, Route } from "react-router-dom";
 *   import CateringDetail from "./pages/CateringDetail";
 *
 *   <BrowserRouter>
 *     <Routes>
 *       <Route path="/" element={<Home />} />
 *       <Route path="/catering/:id" element={<CateringDetail />} />
 *     </Routes>
 *   </BrowserRouter>
 *
 * Inside CateringDetail.jsx you can read the id with:
 *   import { useParams } from "react-router-dom";
 *   const { id } = useParams();
 */

/* --- tiny inline icons (no external deps) --- */
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
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ============================================================
   ALL CARD DATA LIVES HERE — edit this array to add/remove/update vendors.
   ============================================================ */
const cateringVendors = [
  {
    id: "royal-feast-caterers",
    title: "Royal Feast Caterers",
    location: "Bank More, Dhanbad",
    rating: 4.8,
    reviews: 61,
    price: "350",
    guests: "50 to 1000",
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
    reviews: 45,
    price: "300",
    guests: "50 to 800",
    promotion: "-10%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "grand-thali-services",
    title: "Grand Thali Services",
    location: "Civil Lines, Ranchi",
    rating: 4.7,
    reviews: 38,
    price: "400",
    guests: "100 to 1500",
    promotion: "-20%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "veggie-delight-caterers",
    title: "Veggie Delight Caterers",
    location: "Hirapur, Dhanbad",
    rating: 4.4,
    reviews: 22,
    price: "250",
    guests: "30 to 500",
    promotion: "-5%",
    premium: false,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "royal-banquet-cuisine",
    title: "Royal Banquet Cuisine",
    location: "Kadma, Jamshedpur",
    rating: 4.9,
    reviews: 70,
    price: "500",
    guests: "100 to 2000",
    promotion: "-12%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
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
          <span className="text-neutral-400">({vendor.reviews})</span>
          <span className="text-neutral-400">·</span>
          <span className="truncate">{vendor.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
          <span className="flex items-center gap-1.5">
            <PriceIcon />
            From ₹{vendor.price}/plate
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon />
            {vendor.guests}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-sm">
          <TagIcon />
          <span className="text-neutral-700">1 promotion</span>
          <span className="text-red-600 font-semibold">{vendor.promotion}</span>
        </div>

        {/* Explore More — routes to a detail page you'll build later */}
        <Link
          to={`/catering/${vendor.id}`}
          className="mt-auto pt-3 inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-600 text-red-600 font-semibold text-sm py-2 hover:bg-red-600 hover:text-white transition-colors"
        >
          Explore More
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default function Catering() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Catering Vendors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cateringVendors.map((vendor) => (
            <CateringCard key={vendor.id} vendor={vendor} />
          ))}
        </div>

        {/* Link to the full catering listing page you'll add later */}
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