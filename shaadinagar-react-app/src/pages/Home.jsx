import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

const testimonials = [
  { id: 1, name: "Rajesh Sharma", text: "ShaadiNagar team did a fantastic job with my daughter's wedding. We just told them our budget and guest count, and they arranged a beautiful waterproof shamiana and excellent catering. Highly recommended!" },
  { id: 2, name: "Priya Singh", text: "Very professional contractors. The mandap decoration was exactly what we envisioned. They took care of all the lighting and seating arrangements without any hassle." },
  { id: 3, name: "Gurpreet Kaur", text: "We hired them for an Anand Karaj setup. The floral work and the pristine white tenting were perfect. The team was punctual and the catering staff was very polite." }
];

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
                src="https://images.unsplash.com/photo-1582298538104-585d8869ff15?auto=format&fit=crop&q=80&w=800" 
                alt="Indian Wedding Event" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">Welcome to ShaadiNagar</h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-6">Complete Event Arrangements</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At ShaadiNagar, we are premier event contractors dedicated to making your celebrations hassle-free. You simply share your requirements—event type, guest count, date, and budget—and we custom-arrange everything for you.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether it's a grand Hindu wedding, a vibrant birthday, or a large corporate gathering, our team handles the heavy lifting. From erecting majestic waterproof shamianas and mandaps to organizing full-scale catering facilities, we ensure your event is executed flawlessly.
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

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what families and businesses have to say about our event contracting services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} name={t.name} text={t.text} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
