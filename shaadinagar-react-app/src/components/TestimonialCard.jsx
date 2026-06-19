import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ name, text }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md relative border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <FaQuoteLeft className="text-4xl text-gold opacity-20 absolute top-4 left-4" />
      <p className="text-gray-700 italic mb-6 relative z-10 pt-4">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-maroon text-cream rounded-full flex items-center justify-center font-playfair font-bold text-xl mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <span className="text-sm text-gray-500">Verified Client</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
