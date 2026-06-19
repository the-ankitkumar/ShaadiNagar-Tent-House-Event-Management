import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://loremflickr.com/800/800/indian,wedding,couple/all?lock=1" 
                alt="Indian Wedding Event" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">Welcome to ShaadiNagar</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-6">Making Your Dreams Come True</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At ShaadiNagar, we believe that every event is a unique story waiting to be told. With years of experience in the event management industry, we specialize in bringing your vision to life, whether it's a grand wedding, a corporate gala, or an intimate birthday celebration.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our dedicated team of professionals handles everything from magnificent tent arrangements and exquisite floral decorations to flawless catering and end-to-end event execution. We take the stress out of planning so you can focus on making memories.
              </p>
              <div className="flex space-x-4">
                <Link to="/about" className="px-6 py-2 bg-maroon text-cream rounded-full hover:bg-red-900 transition-colors duration-300">
                  Read More
                </Link>
                <Link to="/contact" className="px-6 py-2 border border-maroon text-maroon rounded-full hover:bg-maroon hover:text-cream transition-colors duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />
    </div>
  );
};

export default Home;
