import React, { useState } from "react";
import img1 from "../assets/Indoor_tent.jpg";
import img2 from "../assets/outdoor_tent(image 1).jpg";
import img3 from "../assets/Indian Wedding Mandap Decor.jpg";
import img4 from "../assets/Royal Hindu Wedding Mandap Stage Decor.jpg";
import img5 from "../assets/Royal Mughal Wedding Stage Decoration.jpg";
import img6 from "../assets/WEDDING DECORATION.jpg";
import img7 from "../assets/EntryGate_Decoration(image1).jpg";
import img8 from "../assets/menhdi decoration(image 1).jpg";
import img9 from "../assets/EntryGate_Decoration(image 2)..jpg";
import img10 from "../assets/Indian Wedding Haldi (image1).jpg";
import img11 from "../assets/Indian Wedding Haldi (image2).jpg";
import img12 from "../assets/wedding (image 1).jpg";
import img13 from "../assets/wedding (image 2).jpg";
import aiImg1 from "../assets/new_tent_decor_1_1783238796606.png";
import aiImg2 from "../assets/new_tent_decor_2_1783238866264.png";
import aiImg3 from "../assets/new_tent_decor_3_1783238876987.png";
import aiImg4 from "../assets/new_tent_decor_4_1783238889009.png";

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
    title: "Royal Indoor Setup",
    location: "Near Gandhi Maidan, Patna",
    rating: 4.8,
    reviews: 132,
    price: "45,000",
    guests: "Up to 500",
    promotion: "-10%",
    guests: "Up to 500",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-purple-300",
    category: "Seating Arrangements",
    image: img1,
  },
  {
    id: 2,
    title: "Grand Outdoor Tent",
    location: "Boring Road, Patna",
    rating: 4.9,
    reviews: 189,
    price: "75,000",
    guests: "Up to 1000",
    promotion: "-15%",
    guests: "Up to 1000",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-blue-300",
    category: "Stage Setup",
    image: img2,
  },
  {
    id: 3,
    title: "Classic Mandap Decor",
    location: "Patliputra Colony, Patna",
    rating: 4.6,
    reviews: 94,
    price: "25,000",
    guests: "Up to 200",
    promotion: "-5%",
    guests: "Up to 200",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-orange-200",
    category: "Mandap Decor",
    image: img3,
  },
  {
    id: 4,
    title: "Hindu Wedding Stage",
    location: "Kankarbagh, Patna",
    rating: 4.7,
    reviews: 156,
    price: "35,000",
    guests: "Up to 300",
    promotion: "-10%",
    guests: "Up to 300",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-red-200",
    category: "Stage Setup",
    image: img4,
  },
  {
    id: 5,
    title: "Mughal Style Stage",
    location: "Frazer Road, Patna",
    rating: 4.8,
    reviews: 210,
    price: "50,000",
    guests: "Up to 400",
    promotion: "-20%",
    guests: "Up to 400",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-yellow-300",
    category: "Stage Setup",
    image: img5,
  },
  {
    id: 6,
    title: "Elegant Wedding Decor",
    location: "Dak Bungalow Road, Patna",
    rating: 4.5,
    reviews: 78,
    price: "30,000",
    guests: "Up to 250",
    promotion: "-5%",
    guests: "Up to 250",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Floral Decor",
    image: img6,
  },
  {
    id: 7,
    title: "Grand Entry Gate",
    location: "Rajendra Nagar, Patna",
    rating: 4.7,
    reviews: 145,
    price: "15,000",
    guests: "All Sizes",
    promotion: "-10%",
    guests: "All Sizes",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-green-200",
    category: "Entry Gates",
    image: img7,
  },
  {
    id: 8,
    title: "Mehendi Ceremony Decor",
    location: "Bailey Road, Patna",
    rating: 4.9,
    reviews: 220,
    price: "20,000",
    guests: "Up to 150",
    promotion: "-15%",
    guests: "Up to 150",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-pink-300",
    category: "Mehendi Setup",
    image: img8,
  },
  {
    id: 9,
    title: "Premium Entry Gate",
    location: "S K Puri, Patna",
    rating: 4.8,
    reviews: 88,
    price: "18,000",
    guests: "All Sizes",
    promotion: "-10%",
    guests: "All Sizes",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-teal-200",
    category: "Entry Gates",
    image: img9,
  },
  {
    id: 10,
    title: "Vibrant Haldi Setup",
    location: "Anisabad, Patna",
    rating: 4.9,
    reviews: 145,
    price: "12,000",
    guests: "Up to 100",
    promotion: "-15%",
    guests: "Up to 100",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-yellow-400",
    category: "Haldi Setup",
    image: img10,
  },
  {
    id: 11,
    title: "Classic Haldi Decor",
    location: "Ashiana Nagar, Patna",
    rating: 4.6,
    reviews: 76,
    price: "10,000",
    guests: "Up to 80",
    promotion: "-5%",
    guests: "Up to 80",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-orange-200",
    category: "Haldi Setup",
    image: img11,
  },
  {
    id: 12,
    title: "Elegant Wedding Setup",
    location: "Kadamkuan, Patna",
    rating: 4.8,
    reviews: 198,
    price: "45,000",
    guests: "Up to 500",
    promotion: "-10%",
    guests: "Up to 500",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-rose-300",
    category: "Lighting & Sound",
    image: img12,
  },
  {
    id: 13,
    title: "Dreamy Night Decor",
    location: "Rukanpura, Patna",
    rating: 4.9,
    reviews: 165,
    price: "55,000",
    guests: "Up to 600",
    promotion: "-15%",
    guests: "Up to 600",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-indigo-300",
    category: "Lighting & Sound",
    image: img13,
  },
  {
    id: 14,
    title: "Royal Canopy Setup",
    location: "Danapur, Patna",
    rating: 4.7,
    reviews: 142,
    price: "40,000",
    guests: "Up to 400",
    promotion: "-5%",
    guests: "Up to 400",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-amber-200",
    category: "Mandap Decor",
    image: img3,
  },
  {
    id: 15,
    title: "Lawn Evening Setup",
    location: "Rajiv Nagar, Patna",
    rating: 4.8,
    reviews: 210,
    price: "65,000",
    guests: "Up to 800",
    promotion: "-12%",
    guests: "Up to 800",
    promotion: "-12%",
    premium: true,
    shadow: "shadow-cyan-200",
    category: "Seating Arrangements",
    image: img2,
  },
  {
    id: 16,
    title: "Premium Hall Decor",
    location: "Exhibition Road, Patna",
    rating: 4.6,
    reviews: 95,
    price: "35,000",
    guests: "Up to 300",
    promotion: "-10%",
    guests: "Up to 300",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-purple-200",
    category: "Floral Decor",
    image: img1,
  },
  {
    id: 17,
    title: "Royal Indian Mandap",
    location: "Boring Road, Patna",
    rating: 4.9,
    reviews: 310,
    price: "85,000",
    guests: "Up to 1000",
    promotion: "-15%",
    guests: "Up to 1000",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-pink-300",
    category: "Mandap Decor",
    image: aiImg1,
  },
  {
    id: 18,
    title: "Colorful Outdoor Canopy",
    location: "Patliputra Colony, Patna",
    rating: 4.8,
    reviews: 185,
    price: "60,000",
    guests: "Up to 500",
    promotion: "-10%",
    guests: "Up to 500",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-yellow-300",
    category: "Stage Setup",
    image: aiImg2,
  },
  {
    id: 19,
    title: "Luxury Reception Hall",
    location: "Dak Bungalow Road, Patna",
    rating: 4.7,
    reviews: 120,
    price: "95,000",
    guests: "Up to 800",
    promotion: "-20%",
    guests: "Up to 800",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-neutral-300",
    category: "Seating Arrangements",
    image: aiImg3,
  },
  {
    id: 20,
    title: "Traditional Floral Gate",
    location: "Kankarbagh, Patna",
    rating: 4.9,
    reviews: 245,
    price: "45,000",
    guests: "All Sizes",
    promotion: "-15%",
    guests: "All Sizes",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-orange-300",
    category: "Entry Gates",
    image: aiImg4,
  },
];

const categories = [
  "All",
  "Mandap Decor",
  "Stage Setup",
  "Entry Gates",
  "Lighting & Sound",
  "Floral Decor",
  "Mehendi Setup",
  "Haldi Setup",
  "Seating Arrangements",
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

export default function TentAndDecor() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVendors = activeCategory === "All"
    ? vendors
    : vendors.filter((vendor) => vendor.category === activeCategory);

  return (
    <section id="tent-decor" className="w-full bg-neutral-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Tent & Decor Services
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
