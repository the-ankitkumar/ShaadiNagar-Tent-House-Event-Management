import React, { useState, useEffect, useRef } from "react";

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
    reviews: 34,
    price: "1,200",
    guests: "20 to 150",
    promotion: "-10%",
    premium: true,
    shadow: "shadow-pink-300",
    image:
      "https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJpcnRoZGF5JTIwdmVuZG9yfGVufDB8fDB8fHww",
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
    shadow: "shadow-yellow-100",
    image:
      "https://plus.unsplash.com/premium_photo-1716309257529-4acc4dacd37b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
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
    shadow: "shadow-pink-300",
    image:
      "https://plus.unsplash.com/premium_photo-1716928657836-c193f8e36c4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
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
    shadow: "shadow-neutral-300",
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
    shadow: "shadow-neutral-300",
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
    shadow: "shadow-neutral-300",
    image:
      "https://plus.unsplash.com/premium_photo-1675881737332-44bd0a446ad0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
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
    shadow: "shadow-neutral-300",
    image:
      "https://plus.unsplash.com/premium_photo-1723705224623-cff936a02273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8",
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
    shadow: "shadow-neutral-300",
    image:
      "https://plus.unsplash.com/premium_photo-1723870831297-dca6f3f2b60a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Royal Kids Fiesta Hall",
    location: "Sakchi, Jamshedpur",
    rating: 4.7,
    reviews: 48,
    price: "1,900",
    guests: "50 to 350",
    promotion: "-12%",
    premium: true,
    shadow: "shadow-neutral-300",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Happy Kidz Farmhouse",
    location: "Katras Road, Dhanbad",
    rating: 4.1,
    reviews: 9,
    price: "600",
    guests: "10 to 50",
    promotion: "-8%",
    premium: false,
    shadow: "shadow-neutral-300",
    image:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80",
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

export default function Birthday() {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [index, setIndex] = useState(0); 
  const [withTransition, setWithTransition] = useState(true);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const loopedVendors = [...vendors, ...vendors];

  useEffect(() => {
    const timer = setInterval(() => {
      if (hoveringRef.current) return;
      setWithTransition(true);
      setIndex((prev) => prev + 1);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (index >= vendors.length) {
      setWithTransition(false);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  const cardWidthPercent = 100 / itemsPerView;

  return (
    <section className="w-full bg-white py-10 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Birthday Vendors
        </h2>

        <div
          className="overflow-hidden"
          onMouseEnter={() => (hoveringRef.current = true)}
          onMouseLeave={() => (hoveringRef.current = false)}
        >
          <div
            className={withTransition ? "flex transition-transform duration-700 ease-in-out" : "flex"}
            style={{ transform: `translateX(-${index * cardWidthPercent}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedVendors.map((vendor, i) => (
              <div
                key={`${vendor.id}-${i}`}
                className="flex-shrink-0 px-2"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <VendorCard vendor={vendor} />
              </div>
            ))}
          </div>
        </div>

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