import React from "react";

// Replace each `image` below with your own real tent/venue photos.
// Currently using free-license stock photos as placeholders.
const TENTS = [
  {
    name: "ShadiNagar Grand",
    capacity: "500 Guests",
    price: "₹49,999",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Royal Marquee",
    capacity: "800 Guests",
    price: "₹79,999",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Garden Pavilion",
    capacity: "300 Guests",
    price: "₹34,999",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Heritage Shamiana",
    capacity: "1000 Guests",
    price: "₹1,19,999",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Lawn Deluxe",
    capacity: "250 Guests",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Banquet Classic",
    capacity: "600 Guests",
    price: "₹59,999",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop",
  },
];

function TentCard({ name, capacity, price, image }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/5]">
      {/* Photo */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Top price chip */}
      <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
        {price}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-serif text-lg leading-tight mb-1">
          {name}
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="text-amber-400 text-xs">●</span>
          <span className="text-white/80 text-xs tracking-wide">
            {capacity}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Tent() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 p-6 sm:p-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.35em] uppercase">
            Tent House Vendors
          </span>
          <h1 className="text-white font-serif text-3xl sm:text-4xl mt-2">
            Choose Your Perfect Venue
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {TENTS.map((tent, i) => (
            <TentCard key={i} {...tent} />
          ))}
        </div>
      </div>
    </div>
  );
}