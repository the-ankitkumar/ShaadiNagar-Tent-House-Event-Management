import React, { useState } from "react";
import weddingHero from "../assets/wedding (image 1).jpg";

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-emerald-500" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.399.636-1.002 3.655 3.743-.982.603.378z"/>
  </svg>
);

const faqs = [
  {
    question: "How early should we book our event with ShaadiNagar?",
    answer: "We recommend booking 2 to 6 months in advance for peak wedding seasons (October to March). For birthdays and smaller corporate meetings, 2 to 4 weeks notice is usually sufficient."
  },
  {
    question: "Do you provide customized tent and catering packages?",
    answer: "Yes! Every single service is handled directly by our owner. We customize tent drapes, seating layouts, and multi-cuisine catering menus according to your preferences and budget."
  },
  {
    question: "Do you take event contracts outside of Patna / Bihar?",
    answer: "Yes, we handle destination weddings, corporate events, and grand tent setups across Bihar, Jharkhand, Uttar Pradesh, and nearby regions."
  },
  {
    question: "What are the payment terms?",
    answer: "We accept advance booking amounts to freeze dates, followed by installment payments leading up to the event date. No hidden vendor charges since all management is owner-operated."
  }
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Tent & Mandap Decor",
    eventDate: "",
    guests: "",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Please fill in your Name and Phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-neutral-50 text-neutral-800">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-16">

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Call */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200/60">
              <PhoneIcon />
            </div>
            <h3 className="font-serif text-lg font-bold text-neutral-900">Call Us Directly</h3>
            <p className="text-xs text-neutral-500">Speak with our event coordinator for instant booking details.</p>
            <div className="pt-1">
              <a href="tel:+919876543210" className="text-sm font-semibold text-rose-700 hover:text-rose-800 block">
                +91 98765 43210
              </a>
              <a href="tel:+919123456789" className="text-sm font-semibold text-rose-700 hover:text-rose-800 block">
                +91 91234 56789
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-200/60">
              <WhatsAppIcon />
            </div>
            <h3 className="font-serif text-lg font-bold text-neutral-900">WhatsApp Chat</h3>
            <p className="text-xs text-neutral-500">Chat with us directly to receive catalogue photos and quotes.</p>
            <div className="pt-1">
              <a
                href="https://wa.me/919876543210?text=Hi%20ShaadiNagar,%20I%20want%20to%20enquire%20about%20event%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-medium transition-colors shadow-sm"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200/60">
              <MailIcon />
            </div>
            <h3 className="font-serif text-lg font-bold text-neutral-900">Email Support</h3>
            <p className="text-xs text-neutral-500">Send us custom requirements and venue floor plans.</p>
            <div className="pt-1">
              <a href="mailto:info@shaadinagar.com" className="text-sm font-semibold text-rose-700 hover:text-rose-800 block">
                info@shaadinagar.com
              </a>
              <a href="mailto:booking@shaadinagar.com" className="text-sm font-semibold text-rose-700 hover:text-rose-800 block">
                booking@shaadinagar.com
              </a>
            </div>
          </div>

          {/* Card 4: Location */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200/60">
              <LocationIcon />
            </div>
            <h3 className="font-serif text-lg font-bold text-neutral-900">Head Office & Warehouse</h3>
            <p className="text-xs text-neutral-500">ShaadiNagar Main Road, Near Boring Road, Patna, Bihar - 800001</p>
            <div className="pt-1 flex items-center gap-1 text-xs text-neutral-600 font-medium">
              <ClockIcon /> 8:00 AM – 9:00 PM (Daily)
            </div>
          </div>
        </div>

        {/* Section 2: Form & Side Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-neutral-200/80 shadow-lg hover:border-sky-300 transition-all duration-300">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Fast Enquiry</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
                Send Us An Event Enquiry
              </h2>
              <p className="text-xs md:text-sm text-neutral-500">
                Fill in your event details below and our owner team will call you back within 2 hours!
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-900">Enquiry Submitted Successfully!</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you <strong>{form.name}</strong>! We have received your request for <strong>{form.service}</strong>. Our team will contact you shortly on <strong>{form.phone}</strong>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "Tent & Mandap Decor", eventDate: "", guests: "", city: "", message: "" }); }}
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ankit Kumar"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl text-xs outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl text-xs outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl text-xs outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Select Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl text-xs outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 bg-white cursor-pointer transition-all"
                    >
                      <option value="Tent & Mandap Decor">Tent & Mandap Decor</option>
                      <option value="Catering Services">Catering Services</option>
                      <option value="Decoration (Floral & Theme)">Decoration (Floral & Theme)</option>
                      <option value="Birthday Party Management">Birthday Party Management</option>
                      <option value="Meeting & Conference">Meeting & Conference</option>
                      <option value="Complete Wedding Management">Complete Wedding Management</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Expected Event Date</label>
                    <input
                      type="date"
                      value={form.eventDate}
                      onChange={(e) => handleChange("eventDate", e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl text-xs outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Approx. Guest Count</label>
                    <input
                      type="text"
                      placeholder="e.g. 250 guests"
                      value={form.guests}
                      onChange={(e) => handleChange("guests", e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl text-xs outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Patna / Gaya / Muzaffarpur"
                      value={form.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl text-xs outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Additional Requirements / Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your theme preferences, food menu choices, or special requests..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl text-xs outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Submit Enquiry & Request Call
                </button>
              </form>
            )}
          </div>

          {/* Right Showcase Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Owner Promise Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group border border-neutral-200">
              <img
                src={weddingHero}
                alt="ShaadiNagar Wedding"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="px-3 py-1 bg-amber-500 text-neutral-950 font-bold text-[10px] uppercase tracking-wider rounded-full w-fit mb-2">
                  Dedicated Owner Guarantee
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Direct Owner Management
                </h3>
                <p className="text-xs text-neutral-200 mt-1 leading-relaxed">
                  No third-party middle vendors. Every tent layout, floral decoration, and catering menu is personally planned and supervised by our owner for 100% quality assurance.
                </p>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-amber-50/80 border border-amber-200/80 p-6 rounded-3xl space-y-3">
              <h4 className="font-serif text-base font-bold text-amber-900 flex items-center gap-2">
                <span>📍</span> Visit Our Head Office
              </h4>
              <p className="text-xs text-amber-800/90 leading-relaxed">
                Want to meet in person to sample our catering menu or view tent decoration fabrics? Visit our head office in Patna between 9:00 AM and 8:00 PM.
              </p>
              <div className="pt-1 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold text-amber-900">
                <span>ShaadiNagar Center, Patna, Bihar</span>
                <span className="text-rose-700 underline cursor-pointer">Get Directions →</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-200/80 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Help & Answers</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-neutral-500">
              Have questions before making an enquiry? Here are answers to common questions our clients ask.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left font-semibold text-xs md:text-sm text-neutral-800 flex justify-between items-center bg-neutral-50/50 hover:bg-sky-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-amber-600 font-bold text-base ml-2">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 py-3.5 bg-white text-xs text-neutral-600 border-t border-neutral-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
