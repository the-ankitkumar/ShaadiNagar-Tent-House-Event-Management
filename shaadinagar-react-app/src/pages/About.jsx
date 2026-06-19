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
          style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/indian,wedding,stage/all?lock=2')" }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">About Us</h1>
          <p className="text-lg text-gray-200">Discover the story behind ShaadiNagar.</p>
        </div>
      </div>

      {/* Company Profile/History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">Our History</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-6">A Legacy of Celebrations</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded over a decade ago, ShaadiNagar started with a simple vision: to elevate the standard of event management and tent house services in the city. What began as a small family-run business has now grown into one of the most trusted names in the industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we have successfully managed thousands of events, ranging from intimate family gatherings to massive corporate functions and royal weddings. Our commitment to quality, attention to detail, and customer-first approach have been the pillars of our success.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://loremflickr.com/400/400/hindu,wedding/all?lock=10" alt="Hindu wedding setup" className="rounded-lg shadow-md w-full h-48 object-cover" />
              <img src="https://loremflickr.com/400/400/sikh,wedding/all?lock=11" alt="Sikh wedding setup" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" />
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
                To be the leading event management company known for creating innovative, flawless, and memorable experiences. We aim to set new industry standards through creativity, dedication, and unparalleled service quality.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To transform our clients' dreams into reality by delivering personalized, cost-effective, and world-class event solutions. We strive to build lasting relationships with our clients based on trust, transparency, and exceptional results.
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
