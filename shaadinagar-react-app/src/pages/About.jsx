import TeamSection from '../components/TeamSection';

const About = () => {
  return (
    <div>
      {/* Hero Banner for About */}
      <div 
        className="relative h-[40vh] flex items-center justify-center bg-maroon overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1920')" }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">About Us</h1>
          <p className="text-lg text-gray-200">Your Trusted Event Contractors.</p>
        </div>
      </div>

      {/* Company Profile/History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">Our History</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-6">A Legacy of Reliable Execution</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded over a decade ago, ShaadiNagar has grown from a local tent house provider into a premier event management contractor. We built our reputation on a simple promise: you share your requirements, and we arrange the rest.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need a massive waterproof shamiana for a winter wedding, elegant mandap decorations, or a comprehensive catering setup, our team works closely with you to understand your date, guest count, and budget. We then mobilize our extensive resources to construct and execute the perfect setup.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1549416801-0865910fa984?auto=format&fit=crop&q=80&w=400" alt="Hindu wedding setup" className="rounded-lg shadow-md w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1582298538104-585d8869ff15?auto=format&fit=crop&q=80&w=400" alt="Indian event setup" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-maroon text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                To be the most reliable and sought-after event contracting firm in the region, recognized for our ability to physically transform empty grounds into magnificent, fully equipped celebration venues.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To simplify event planning for our clients. By acting as a single point of contact for tent setups, structural arrangements, decor, and catering facilities, we ensure your event is built on a foundation of quality, punctuality, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default About;
