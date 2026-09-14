import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ShaadiNagar_logo_embedded.svg";
import weddingHero from "../assets/wedding (image 1).jpg";
import mandap1 from "../assets/Royal Hindu Wedding Mandap Stage Decor.jpg";
import cateringImg from "../assets/Catering Services(image 1).jpg";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-6 h-6 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.72m12 0a5.971 5.971 0 00-.941-3.197M6 18.72a9.095 9.095 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198l-.001.031c0 .225.012.447.037.666A11.944 11.944 0 0012 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0018 18.72M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-6 h-6 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-neutral-50 text-neutral-800">
      
      {/* Hero Header Banner */}
      <section className="relative bg-gradient-to-r from-neutral-900 via-rose-950 to-amber-950 text-white py-16 px-4 md:px-8 text-center overflow-hidden shadow-md">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
            Welcome to ShaadiNagar
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            About ShaadiNagar Event Management
          </h1>
          <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Patna & Bihar&apos;s premier owner-managed event company — crafting grand wedding mandaps, luxury tent setups, and live multi-cuisine catering since 2010.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-16">

        {/* Section 1: Our Story / Owner Philosophy Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-amber-200/80 group">
              <img
                src={weddingHero}
                alt="ShaadiNagar Wedding"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="px-3 py-1 bg-amber-500 text-neutral-950 font-bold text-[10px] uppercase tracking-wider rounded-full w-fit mb-1">
                  100% Owner Operated
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Personal Owner Supervision
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-neutral-200 h-36">
                <img src={mandap1} alt="Mandap Decor" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-neutral-200 h-36">
                <img src={cateringImg} alt="Catering" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Our Legacy & Mission</span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-neutral-900 leading-snug">
                Where Traditional Grandeur Meets Seamless Event Planning
              </h2>
            </div>

            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              Founded with a passion for creating timeless celebrations, <strong>ShaadiNagar Tent House & Event Management</strong> has grown into Bihar&apos;s most trusted name for full-service event execution. From royal wedding mandaps and flower-adorned entry arches to authentic multi-cuisine buffet spreads, we turn your vision into reality.
            </p>

            {/* Core Value Highlight Card */}
            <div className="bg-amber-50/80 border border-amber-200/80 p-5 rounded-2xl space-y-2">
              <h3 className="font-serif text-base font-bold text-amber-950 flex items-center gap-2">
                <span>👑</span> The ShaadiNagar Owner Guarantee
              </h3>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                Unlike aggregator platforms that pass your contract to third-party middle vendors, <strong>every ShaadiNagar event is managed directly by our dedicated owner</strong>. This ensures zero middleman markups, 100% quality control on tent fabrics & food hygiene, and flawless on-time execution.
              </p>
            </div>

            {/* Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                <CheckIcon /> Direct Owner Coordination
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                <CheckIcon /> Custom Theme & Color Drapes
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                <CheckIcon /> In-House Live Catering Chefs
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                <CheckIcon /> Transparent Package Rates
              </div>
            </div>

            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs md:text-sm rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Book Your Event Enquiry →
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Quick Statistics Banner */}
        <div className="bg-gradient-to-r from-neutral-900 via-rose-950 to-amber-950 text-white p-8 md:p-10 rounded-3xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="font-serif text-3xl md:text-5xl font-bold text-amber-400">15+</p>
              <p className="text-xs text-neutral-300 font-medium">Years of Excellence</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-3xl md:text-5xl font-bold text-amber-400">500+</p>
              <p className="text-xs text-neutral-300 font-medium">Successful Weddings</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-3xl md:text-5xl font-bold text-amber-400">100%</p>
              <p className="text-xs text-neutral-300 font-medium">Owner Supervised</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-3xl md:text-5xl font-bold text-amber-400">50k+</p>
              <p className="text-xs text-neutral-300 font-medium">Delighted Guests</p>
            </div>
          </div>
        </div>

        {/* Section 3: Why Choose Us Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Why ShaadiNagar</span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-neutral-900">
              Four Pillars of Our Event Excellence
            </h2>
            <p className="text-xs md:text-sm text-neutral-500">
              Here is why families and corporate planners across Patna and Bihar choose us for their most cherished events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                <ShieldCheckIcon />
              </div>
              <h3 className="font-serif text-base font-bold text-neutral-900">Dedicated Owner Control</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                You deal directly with the decision maker. No miscommunications or sub-contractor delays on your big day.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                <SparklesIcon />
              </div>
              <h3 className="font-serif text-base font-bold text-neutral-900">Royal Custom Decor</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                From traditional Mughal mandaps to modern pastel floral backdrops, we craft personalized themes.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                <UserGroupIcon />
              </div>
              <h3 className="font-serif text-base font-bold text-neutral-900">Hygienic Catering</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Prepared by experienced master chefs using fresh ingredients, serving North Indian, South Indian, and Chinese buffets.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="font-serif text-base font-bold text-neutral-900">Honest Pricing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clear transparent quotations with zero hidden vendor charges. Get maximum value for your event budget.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Head Office Banner */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-amber-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Visit Us In Person</span>
            <h3 className="font-serif text-2xl font-bold text-neutral-900">
              ShaadiNagar Head Office — Patna, Bihar
            </h3>
            <p className="text-xs text-neutral-600 max-w-xl">
              ShaadiNagar Main Road, Near Boring Road, Patna, Bihar - 800001. Drop by to sample our catering menu or view tent fabrics!
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs md:text-sm rounded-xl transition-all shadow-md shrink-0"
          >
            Contact & Directions →
          </Link>
        </div>

      </div>
    </div>
  );
}
