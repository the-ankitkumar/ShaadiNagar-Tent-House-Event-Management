import { FaRing, FaCampground, FaBirthdayCake, FaBriefcase, FaUtensils, FaCameraRetro } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    id: 1,
    title: 'Wedding Decoration',
    icon: <FaRing className="text-4xl" />,
    description: 'We create magical wedding setups, from traditional floral decor to modern thematic designs, ensuring your special day is perfectly styled.',
  },
  {
    id: 2,
    title: 'Tent Arrangement',
    icon: <FaCampground className="text-4xl" />,
    description: 'High-quality waterproof and luxury tents for outdoor events, available in various sizes and elegant drapery options.',
  },
  {
    id: 3,
    title: 'Birthday Events',
    icon: <FaBirthdayCake className="text-4xl" />,
    description: 'Themed decorations, fun activities, and complete management for unforgettable birthday parties for all ages.',
  },
  {
    id: 4,
    title: 'Corporate Events',
    icon: <FaBriefcase className="text-4xl" />,
    description: 'Professional setups for seminars, conferences, product launches, and annual corporate galas with premium audio-visual support.',
  },
  {
    id: 5,
    title: 'Catering Services',
    icon: <FaUtensils className="text-4xl" />,
    description: 'Delectable multi-cuisine food options served with elegance. We cater to diverse palates with utmost hygiene and quality.',
  },
  {
    id: 6,
    title: 'Photography & Videography',
    icon: <FaCameraRetro className="text-4xl" />,
    description: 'Capture every precious moment with our expert team of photographers and videographers using state-of-the-art equipment.',
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Banner for Services */}
      <div 
        className="relative h-[40vh] flex items-center justify-center bg-maroon overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/indian,wedding,catering/all?lock=3')" }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">Our Services</h1>
          <p className="text-lg text-gray-200">Comprehensive event management solutions.</p>
        </div>
      </div>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the initial concept to the final execution, we provide a wide array of services to make your event a resounding success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard 
                key={service.id} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-6">Ready to plan your next event?</h2>
          <p className="text-gray-600 mb-8 text-lg">Contact us today for a free consultation and let us help you bring your vision to life.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-gold text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
