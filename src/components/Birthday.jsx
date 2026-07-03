import React, { useRef } from "react";

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

export default function Birthday() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
          Featured Birthday Vendors
        </h2>
          <div
            className="flex gap-8  snap-mandatory pb-2 "
          >
            <div className="card-1 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-pink-300 hover:shadow-2xl ">
              <div className="relative h-44 md:h-48">
                <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
                  Premium
                </span>
                <img
                  src="https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJpcnRoZGF5JTIwdmVuZG9yfGVufDB8fDB8fHww"
                  alt="Sunshine Party Palace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Sunshine Party Palace
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.7</span>
                  <span className="text-neutral-400">(34)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Sector 12, Dhanbad</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹1,200
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    20 to 150
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-10%</span>
                </div>
              </div>
            </div>

            <div className="card-2 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-yellow-100 hover:shadow-2xl">
              <div className="relative h-44 md:h-48">
                <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
                  Premium
                </span>
                <img
                  src="https://plus.unsplash.com/premium_photo-1716309257529-4acc4dacd37b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
                  alt="Rainbow Kids Carnival"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Rainbow Kids Carnival
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.5</span>
                  <span className="text-neutral-400">(21)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Bistupur, Jamshedpur</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹900
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    15 to 100
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-5%</span>
                </div>
              </div>
            </div>

            <div className="card-3 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden  cursor-pointer  shadow-pink-300 hover:shadow-2xl">
              <div className="relative h-44 md:h-48">
                <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
                  Premium
                </span>
                <img
                  src="https://plus.unsplash.com/premium_photo-1716928657836-c193f8e36c4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                  alt="Golden Balloon Banquet"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Golden Balloon Banquet
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.8</span>
                  <span className="text-neutral-400">(52)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Civil Lines, Ranchi</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹1,500
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    50 to 300
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-15%</span>
                </div>
              </div>
            </div>

            <div className="card-4 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-neutral-300 hover:shadow-2xl">
              <div className="relative h-44 md:h-48">
                <img
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
                  alt="Little Stars Party Hall"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Little Stars Party Hall
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.3</span>
                  <span className="text-neutral-400">(18)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Hirapur, Dhanbad</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹800
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    10 to 80
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-10%</span>
                </div>
              </div>
            </div>

            <div className="card-5 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-neutral-300 hover:shadow-2xl">
              <div className="relative h-44 md:h-48">
                <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
                  Premium
                </span>
                <img
                  src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=800&q=80"
                  alt="Candyland Celebrations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Candyland Celebrations
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.9</span>
                  <span className="text-neutral-400">(65)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Saraidhela, Dhanbad</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹2,000
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    40 to 250
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-20%</span>
                </div>
              </div>
            </div>

            <div className="card-6 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-neutral-300 hover:shadow-2xl">
              <div className="relative h-44 md:h-48">
                <img
                  src="https://plus.unsplash.com/premium_photo-1675881737332-44bd0a446ad0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
                  alt="Sweet Memories Lawn"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Sweet Memories Lawn
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.6</span>
                  <span className="text-neutral-400">(29)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Kadma, Jamshedpur</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹1,100
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    30 to 200
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-5%</span>
                </div>
              </div>
            </div>

            <div className="card-7 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-neutral-300 hover:shadow-2xl">
              <div className="relative h-44 md:h-48">
                <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
                  Premium
                </span>
                <img
                  src="https://plus.unsplash.com/premium_photo-1723705224623-cff936a02273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8"
                  alt="Magic Moments Resort"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Magic Moments Resort
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.4</span>
                  <span className="text-neutral-400">(40)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Kanke Road, Ranchi</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹1,700
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    50 to 400
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-10%</span>
                </div>
              </div>
            </div>

            <div className="card-8 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-neutral-300 hover:shadow-2xl">
              <div className="relative h-44 md:h-48">
                <img
                  src="https://plus.unsplash.com/premium_photo-1723870831297-dca6f3f2b60a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Party Barn Dhanbad"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Party Barn Dhanbad
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.2</span>
                  <span className="text-neutral-400">(12)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Bank More, Dhanbad</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹700
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    10 to 60
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-5%</span>
                </div>
              </div>
            </div>

            <div className="card-9 snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-neutral-300 hover:shadow-2xl">
              <div className="relative h-44 md:h-48">
                <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
                  Premium
                </span>
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80"
                  alt="Royal Kids Fiesta Hall"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Royal Kids Fiesta Hall
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.7</span>
                  <span className="text-neutral-400">(48)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Sakchi, Jamshedpur</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹1,900
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    50 to 350
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-12%</span>
                </div>
              </div>
            </div>

            <div className="card-10  shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col cursor-pointer  shadow-neutral-300 hover:shadow-2xl ">
              <div className="relative h-44 md:h-48">
                <img
                  src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80"
                  alt="Happy Kidz Farmhouse"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-serif font-bold text-neutral-900 text-lg leading-snug">
                  Happy Kidz Farmhouse
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-600">
                  <StarIcon />
                  <span className="font-semibold text-neutral-800">4.1</span>
                  <span className="text-neutral-400">(9)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="truncate">Katras Road, Dhanbad</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-700 mt-1">
                  <span className="flex items-center gap-1.5">
                    <PriceIcon />
                    From ₹600
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UsersIcon />
                    10 to 50
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm mt-auto pt-2">
                  <TagIcon />
                  <span className="text-neutral-700">1 promotion</span>
                  <span className="text-red-600 font-semibold">-8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-8 mx-2">
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
    </section>
  );
}