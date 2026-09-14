import React, { useState } from "react";
import bdImg1 from "../assets/Birthday decoration (image 1).jpg";
import bdImg2 from "../assets/Birthday decoration (image 2).jpg";
import bdImg3 from "../assets/Birthday decoration (image 3).jpg";
import bdImg4 from "../assets/Birthday decoration (image 4).jpg";

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
    title: "Sunshine Party Palace",
    location: "Sector 12, Dhanbad",
    rating: 4.7,
    reviews: 134,
    price: "12,000",
    guests: "20 to 150",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-pink-300",
    category: "Birthday Venues",
    image: "https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Rainbow Kids Carnival",
    location: "Bistupur, Jamshedpur",
    rating: 4.5,
    reviews: 89,
    price: "9,000",
    guests: "15 to 100",
    promotion: "-5%",
    premium: true,
    shadow: "shadow-yellow-100",
    category: "Kids Entertainers",
    image: "https://plus.unsplash.com/premium_photo-1716309257529-4acc4dacd37b?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Golden Balloon Banquet",
    location: "Civil Lines, Ranchi",
    rating: 4.8,
    reviews: 212,
    price: "15,000",
    guests: "50 to 300",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-pink-300",
    category: "Birthday Venues",
    image: "https://plus.unsplash.com/premium_photo-1716928657836-c193f8e36c4b?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Little Stars Party Hall",
    location: "Hirapur, Dhanbad",
    rating: 4.3,
    reviews: 45,
    price: "8,000",
    guests: "10 to 80",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Birthday Venues",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Candyland Celebrations",
    location: "Saraidhela, Dhanbad",
    rating: 4.9,
    reviews: 178,
    price: "20,000",
    guests: "40 to 250",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-purple-300",
    category: "Party Planners",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Sweet Memories Lawn",
    location: "Kadma, Jamshedpur",
    rating: 4.6,
    reviews: 67,
    price: "11,000",
    guests: "30 to 200",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Birthday Venues",
    image: "https://plus.unsplash.com/premium_photo-1675881737332-44bd0a446ad0?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    title: "Magic Moments Resort",
    location: "Kanke Road, Ranchi",
    rating: 4.4,
    reviews: 98,
    price: "17,000",
    guests: "50 to 400",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-blue-300",
    category: "Birthday Venues",
    image: "https://plus.unsplash.com/premium_photo-1723705224623-cff936a02273?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    title: "Party Barn Dhanbad",
    location: "Bank More, Dhanbad",
    rating: 4.2,
    reviews: 32,
    price: "7,000",
    guests: "10 to 60",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Party Decorators",
    image: bdImg1,
  },
  {
    id: 9,
    title: "Royal Kids Fiesta Hall",
    location: "Sakchi, Jamshedpur",
    rating: 4.7,
    reviews: 145,
    price: "19,000",
    guests: "50 to 350",
    promotion: "-12%",
    premium: true,
    shadow: "shadow-amber-300",
    category: "Birthday Venues",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Happy Kidz Farmhouse",
    location: "Katras Road, Dhanbad",
    rating: 4.1,
    reviews: 22,
    price: "6,000",
    guests: "10 to 50",
    promotion: "-8%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Kids Entertainers",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Creative Cake Studio",
    location: "Boring Road, Patna",
    rating: 4.8,
    reviews: 234,
    price: "3,500",
    guests: "Custom Orders",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-pink-300",
    category: "Cake Makers",
    image: bdImg2,
  },
  {
    id: 12,
    title: "Frosting Dreams Bakery",
    location: "Frazer Road, Patna",
    rating: 4.7,
    reviews: 189,
    price: "2,500",
    guests: "Custom Orders",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-rose-300",
    category: "Cake Makers",
    image: bdImg3,
  },
  {
    id: 13,
    title: "Snap Happy Photographers",
    location: "Gandhi Maidan, Patna",
    rating: 4.9,
    reviews: 312,
    price: "15,000",
    guests: "All Events",
    promotion: "-20%",
    premium: true,
    shadow: "shadow-indigo-300",
    category: "Photographers",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    title: "Balloon Art Studio",
    location: "Kankarbagh, Patna",
    rating: 4.6,
    reviews: 78,
    price: "5,000",
    guests: "Up to 200",
    promotion: "-5%",
    premium: false,
    shadow: "shadow-sky-200",
    category: "Party Decorators",
    image: bdImg4,
  },
  {
    id: 15,
    title: "Funzone Entertainment",
    location: "Patliputra Colony, Patna",
    rating: 4.5,
    reviews: 95,
    price: "8,000",
    guests: "Up to 150",
    promotion: "-10%",
    premium: false,
    shadow: "shadow-orange-200",
    category: "Kids Entertainers",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    title: "Perfect Party Planners",
    location: "Rajendra Nagar, Patna",
    rating: 4.8,
    reviews: 210,
    price: "25,000",
    guests: "Up to 500",
    promotion: "-15%",
    premium: true,
    shadow: "shadow-amber-300",
    category: "Party Planners",
    image: "https://images.unsplash.com/photo-1496843916299-590492c751f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    title: "Dreamy Decor Studio",
    location: "Bailey Road, Patna",
    rating: 4.7,
    reviews: 167,
    price: "12,000",
    guests: "Up to 300",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-purple-200",
    category: "Party Decorators",
    image: bdImg1,
  },
  {
    id: 18,
    title: "Pixel Perfect Photos",
    location: "Dak Bungalow Road, Patna",
    rating: 4.6,
    reviews: 124,
    price: "10,000",
    guests: "All Events",
    promotion: "-8%",
    premium: false,
    shadow: "shadow-neutral-300",
    category: "Photographers",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "All",
  "Birthday Venues",
  "Party Decorators",
  "Cake Makers",
  "Kids Entertainers",
  "Party Planners",
  "Photographers",
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

export default function BirthdayPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVendors =
    activeCategory === "All"
      ? vendors
      : vendors.filter((vendor) => vendor.category === activeCategory);

  return (
    <section id="birthday" className="w-full bg-neutral-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Birthday Services
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
