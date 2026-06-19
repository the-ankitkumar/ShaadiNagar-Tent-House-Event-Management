import { FaRing, FaBirthdayCake, FaBriefcase, FaUtensils, FaCampground } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'Wedding Decoration', icon: <FaRing className="text-4xl text-gold mb-4" />, desc: 'Elegant and majestic wedding setups.' },
  { id: 2, title: 'Tent Arrangement', icon: <FaCampground className="text-4xl text-gold mb-4" />, desc: 'Premium tents for all weather conditions.' },
  { id: 3, title: 'Birthday Events', icon: <FaBirthdayCake className="text-4xl text-gold mb-4" />, desc: 'Fun and creative birthday parties.' },
  { id: 4, title: 'Corporate Events', icon: <FaBriefcase className="text-4xl text-gold mb-4" />, desc: 'Professional setups for corporate gatherings.' },
  { id: 5, title: 'Catering Services', icon: <FaUtensils className="text-4xl text-gold mb-4" />, desc: 'Delicious food with exceptional service.' },
];

const ServicesPreview = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of event management services tailored to your specific needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center transform hover:-translate-y-1">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center mt-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center transform hover:-translate-y-1">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-block px-8 py-3 border-2 border-maroon text-maroon font-semibold rounded-full hover:bg-maroon hover:text-cream transition-colors duration-300">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
