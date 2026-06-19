import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-maroon overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/indian,wedding,tent,decor/all?lock=1')" }}
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-cream mb-6 leading-tight"
        >
          Creating Unforgettable Memories
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-200 mb-10 font-poppins"
        >
          ShaadiNagar provides premium tent house and event management services to make your special occasions truly spectacular.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link 
            to="/services" 
            className="px-8 py-3 bg-gold text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 w-full sm:w-auto"
          >
            Explore Services
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-transparent border-2 border-cream text-cream font-semibold rounded-full hover:bg-cream hover:text-maroon transition-colors duration-300 w-full sm:w-auto"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
