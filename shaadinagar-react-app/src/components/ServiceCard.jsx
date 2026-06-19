const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-gold hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-6 text-maroon shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
