import React from "react";
const bigServices = [
  {
    title: "Tent House",
    description:
      "Elegant mandaps, shamianas and seating setups for every event size — book here!",
    linkText: "Explore tent house",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Catering",
    description:
      "Find top-rated caterers near you serving every cuisine, for any occasion.",
    linkText: "Start your search",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
  },
];

const smallServices = [
  {
    title: "Decoration",
    description:
      "Custom themes, florals and lighting to bring your event to life.",
    linkText: "Explore decoration",
  },
  {
    title: "Birthday",
    description:
      "Plan a birthday to remember — venues, cakes and entertainment in one place.",
    linkText: "Plan a birthday",
    
  },
  {
    title: "Meeting",
    description:
      "Professional venues and setups for corporate meetings and conferences.",
    linkText: "Book a meeting space",
  },
];

function BigServiceCard({ title, description, linkText, image }) {
  return (
    <div className="relative flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 h-72 md:h-80 shadow-blue-400 hover:shadow-2xl
                duration-200 cursor-pointer">
      <div className="relative z-10 flex w-3/5 flex-col justify-center gap-3 p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
          {title}
        </h3>
        <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
          {description}
        </p>
        <a
          href="#"
          className="mt-1 text-sm md:text-base font-semibold text-rose-800 hover:text-rose-900 transition-colors"
        >
          {linkText}
        </a>
      </div>

      <div className="relative w-2/5">
        <div
          className="absolute inset-y-0 -left-10 w-10 rounded-tr-[80px] bg-white"
          aria-hidden="true"
        />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function SmallServiceCard({ title, description, linkText, icon }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 h-full  shadow-blue-400 hover:shadow-2xl cursor-pointer">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="font-serif text-xl font-bold text-neutral-900">
          {title}
        </h3>
        <span className="text-2xl leading-none">{icon}</span>
      </div>
      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
        {description}
      </p>
      <a
        href="#"
        className="text-sm font-semibold text-rose-800 hover:text-rose-900 transition-colors"
      >
        {linkText}
      </a>
  </div>
  );
}
export default function Service() {
  return (
    <section className="w-full bg-neutral-50 py-12 px-4 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900">
          Enjoy planning your event
        </h2>
        <p className="mt-2 text-neutral-600">
          Start planning with us,
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {bigServices.map((service) => (
            <BigServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {smallServices.map((service) => (
            <SmallServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}