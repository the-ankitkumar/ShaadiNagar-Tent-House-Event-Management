import React, { useState } from "react";
import img1 from "../assets/Catering Services(image 1).jpg";
import img2 from "../assets/Catering Services(image 2).jpg";
import img3 from "../assets/Catering Services(image 3).jpg";
import img4 from "../assets/Catering Services(image 4).jpg";
import img5 from "../assets/Catering Services(image 5).jpg";
import img6 from "../assets/Catering Services(image6).jpg";
import aiImg1 from "../assets/new_catering_1.png";
import aiImg2 from "../assets/new_catering_2.png";
import aiImg3 from "../assets/new_catering_3.png";
import aiImg4 from "../assets/new_catering_4.png";
import aiImg5 from "../assets/new_catering_5.png";
import aiImg6 from "../assets/new_catering_6.png";

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
    title: "Shahi Dawat Caterers",
    location: "Gandhi Maidan, Patna",
    rating: 4.9,
    reviews: 245,
    price: "350/plate",
    guests: "Up to 1000",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-amber-300",
    category: "Multi-Cuisine",
    image: img1,
  },
  {
    id: 2,
    title: "Annapurna Veg Kitchen",
    location: "Boring Road, Patna",
    rating: 4.8,
    reviews: 189,
    price: "250/plate",
    guests: "Up to 500",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-green-300",
    category: "Vegetarian",
    image: img2,
  },
  {
    id: 3,
    title: "Royal Biryani House",
    location: "Frazer Road, Patna",
    rating: 4.7,
    reviews: 312,
    price: "400/plate",
    guests: "Up to 800",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-red-300",
    category: "Mughlai",
    image: img3,
  },
  {
    id: 4,
    title: "Chennai Express Catering",
    location: "Kankarbagh, Patna",
    rating: 4.6,
    reviews: 98,
    price: "300/plate",
    guests: "Up to 400",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-orange-200",
    category: "South Indian",
    image: img4,
  },
  {
    id: 5,
    title: "Chaat & Chutney Corner",
    location: "Rajendra Nagar, Patna",
    rating: 4.5,
    reviews: 156,
    price: "150/plate",
    guests: "Up to 300",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-yellow-200",
    category: "Street Food",
    image: img5,
  },
  {
    id: 6,
    title: "Mithai Mandir Sweets",
    location: "Dak Bungalow Road, Patna",
    rating: 4.8,
    reviews: 220,
    price: "200/plate",
    guests: "Up to 600",
    promotion: "-12%",
    premium: true,
    shadow: "shadow-pink-300",
    category: "Desserts & Sweets",
    image: img6,
  },
  {
    id: 7,
    title: "Tandoori Nights Catering",
    location: "Bailey Road, Patna",
    rating: 4.7,
    reviews: 178,
    price: "450/plate",
    guests: "Up to 700",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-red-200",
    category: "Non-Vegetarian",
    image: aiImg1,
  },
  {
    id: 8,
    title: "Green Leaf Veg Caterers",
    location: "Patliputra Colony, Patna",
    rating: 4.9,
    reviews: 290,
    price: "280/plate",
    guests: "Up to 500",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-green-200",
    category: "Vegetarian",
    image: aiImg2,
  },
  {
    id: 9,
    title: "Nawabi Kitchen",
    location: "S K Puri, Patna",
    rating: 4.6,
    reviews: 134,
    price: "500/plate",
    guests: "Up to 600",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-purple-300",
    category: "Mughlai",
    image: aiImg3,
  },
  {
    id: 10,
    title: "Dosa Plaza Catering",
    location: "Anisabad, Patna",
    rating: 4.4,
    reviews: 67,
    price: "220/plate",
    guests: "Up to 300",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-orange-200",
    category: "South Indian",
    image: aiImg4,
  },
  {
    id: 11,
    title: "Fusion Flavors Caterers",
    location: "Ashiana Nagar, Patna",
    rating: 4.8,
    reviews: 205,
    price: "550/plate",
    guests: "Up to 1000",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-blue-300",
    category: "Multi-Cuisine",
    image: aiImg5,
  },
  {
    id: 12,
    title: "Street Feast Caterers",
    location: "Kadamkuan, Patna",
    rating: 4.5,
    reviews: 142,
    price: "180/plate",
    guests: "Up to 400",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-yellow-300",
    category: "Street Food",
    image: aiImg6,
  },
  {
    id: 13,
    title: "Paradise Non-Veg Caterers",
    location: "Rukanpura, Patna",
    rating: 4.7,
    reviews: 188,
    price: "420/plate",
    guests: "Up to 800",
    promotion: "-12%",
    premium: true,
    shadow: "shadow-red-300",
    category: "Non-Vegetarian",
    image: img1,
  },
  {
    id: 14,
    title: "Rasoi Ghar Caterers",
    location: "Danapur, Patna",
    rating: 4.6,
    reviews: 95,
    price: "260/plate",
    guests: "Up to 350",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Vegetarian",
    image: img2,
  },
  {
    id: 15,
    title: "Royal Feast Multi-Cuisine",
    location: "Exhibition Road, Patna",
    rating: 4.9,
    reviews: 320,
    price: "600/plate",
    guests: "Up to 1500",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-amber-300",
    category: "Multi-Cuisine",
    image: img3,
  },
  {
    id: 16,
    title: "Gulab Jamun House",
    location: "Rajiv Nagar, Patna",
    rating: 4.7,
    reviews: 176,
    price: "180/plate",
    guests: "Up to 500",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-pink-200",
    category: "Desserts & Sweets",
    image: img4,
  },
  {
    id: 17,
    title: "Bihari Zaika Caterers",
    location: "Boring Road, Patna",
    rating: 4.8,
    reviews: 265,
    price: "320/plate",
    guests: "Up to 700",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-orange-300",
    category: "Non-Vegetarian",
    image: aiImg1,
  },
  {
    id: 18,
    title: "Idli Factory Catering",
    location: "Patliputra Colony, Patna",
    rating: 4.5,
    reviews: 88,
    price: "200/plate",
    guests: "Up to 250",
    promotion: "-8%",
    premium: false,
    shadow: "shadow-teal-200",
    category: "South Indian",
    image: aiImg2,
  },
];

const categories = [
  "All",
  "Vegetarian",
  "Non-Vegetarian",
  "Multi-Cuisine",
  "South Indian",
  "Mughlai",
  "Street Food",
  "Desserts & Sweets",
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

export default function CateringPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVendors =
    activeCategory === "All"
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
