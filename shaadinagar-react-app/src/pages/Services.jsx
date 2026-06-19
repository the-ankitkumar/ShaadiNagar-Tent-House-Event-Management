import { FaRing, FaCampground, FaBirthdayCake, FaBriefcase, FaUtensils, FaCameraRetro } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    id: 1,
    title: 'Wedding Decoration',
    icon: <FaRing className="text-4xl" />,
    description: 'We construct and decorate majestic wedding mandaps, entrance gates, and floral setups. Fully customizable packages based on your ground size and budget.',
  },
  {
    id: 2,
    title: 'Tent Arrangement',
    icon: <FaCampground className="text-4xl" />,
    description: 'High-quality waterproof shamianas, luxury outdoor tents, and sturdy structural arrangements designed to withstand any weather for your events.',
  },
  {
    id: 3,
    title: 'Birthday Events',
    icon: <FaBirthdayCake className="text-4xl" />,
    description: 'Complete physical setups for birthdays, including thematic tenting, stage arrangements, and seating capacity based on your exact guest count.',
  },
  {
    id: 4,
    title: 'Corporate Events',
    icon: <FaBriefcase className="text-4xl" />,
    description: 'Professional structural setups for corporate galas and seminars, including formal seating, robust staging, and audio-visual support structures.',
  },
  {
    id: 5,
    title: 'Catering Services',
    icon: <FaUtensils className="text-4xl" />,
    description: 'Full-scale catering facilities with dedicated service staff and complete buffet arrangements. We customize the menu to match your requirements.',
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1920')" }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">Our Services</h1>
          <p className="text-lg text-gray-200">Customized contracting solutions for every event.</p>
        </div>
      </div>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-4">What We Arrange</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share your event requirements with us, and we will mobilize our team to provide these comprehensive physical setups and services.
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
