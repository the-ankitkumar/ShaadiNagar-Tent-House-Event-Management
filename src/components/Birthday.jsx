import React, { useRef } from "react";
const birthdayVendors = [
  {
    id: 1,
    title: "Sunshine Party Palace",
    location: "Sector 12, Dhanbad",
    rating: 4.7,
    reviews: 34,
    price: "1,200",
    guests: "20 to 150",
    promotion: "-10%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Rainbow Kids Carnival",
    location: "Bistupur, Jamshedpur",
    rating: 4.5,
    reviews: 21,
    price: "900",
    guests: "15 to 100",
    promotion: "-5%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Golden Balloon Banquet",
    location: "Civil Lines, Ranchi",
    rating: 4.8,
    reviews: 52,
    price: "1,500",
    guests: "50 to 300",
    promotion: "-15%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1464349153735-e3f5c4e6d0e5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Little Stars Party Hall",
    location: "Hirapur, Dhanbad",
    rating: 4.3,
    reviews: 18,
    price: "800",
    guests: "10 to 80",
    promotion: "-10%",
    premium: false,
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Candyland Celebrations",
    location: "Saraidhela, Dhanbad",
    rating: 4.9,
    reviews: 65,
    price: "2,000",
    guests: "40 to 250",
    promotion: "-20%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Sweet Memories Lawn",
    location: "Kadma, Jamshedpur",
    rating: 4.6,
    reviews: 29,
    price: "1,100",
    guests: "30 to 200",
    promotion: "-5%",
    premium: false,
    image:
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Magic Moments Resort",
    location: "Kanke Road, Ranchi",
    rating: 4.4,
    reviews: 40,
    price: "1,700",
    guests: "50 to 400",
    promotion: "-10%",
    premium: true,
    image:
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Party Barn Dhanbad",
    location: "Bank More, Dhanbad",
    rating: 4.2,
    reviews: 12,
    price: "700",
    guests: "10 to 60",
    promotion: "-5%",
    premium: false,
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "Birthday Venues",
  "Party Decorators",
  "Cake Makers",
  "Kids Entertainers",
  "Party Planners",
  "Photographers",
  "Caterers",
  "Balloon Artists",
];

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
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

function VendorCard({ vendor }) {
  return (
    <div className="snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col">
      {/* Image */}
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

      {/* Content */}
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

export default function Birthday() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstChild
      ? scrollRef.current.firstChild.offsetWidth + 24 // width + gap
      : 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-10 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Birthday Vendors
        </h2>

        {/* Slider */}
        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex absolute -left-5 top-1/3 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white shadow-md ring-1 ring-black/10 hover:bg-neutral-50 transition"
          >
            <ChevronLeft />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide"
          >
            {birthdayVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex absolute -right-5 top-1/3 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white shadow-md ring-1 ring-black/10 hover:bg-neutral-50 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className="px-4 py-2 rounded-full border border-neutral-300 text-sm font-medium text-neutral-800 hover:border-neutral-500 hover:bg-neutral-50 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}