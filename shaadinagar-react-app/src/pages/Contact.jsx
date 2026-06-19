import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';

const Contact = () => {
  return (
    <div>
      {/* Hero Banner for Contact */}
      <div 
        className="relative h-[40vh] flex items-center justify-center bg-maroon overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575861501-7ad05823c951?auto=format&fit=crop&q=80&w=1920')" }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200">Let's plan your next spectacular event.</p>
        </div>
      </div>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to book? Fill out the form below or reach us directly using our contact information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details & Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-maroon mr-4">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Our Location</h4>
                      <p className="text-gray-600 mt-1">Patna, Bihar</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-maroon mr-4">
                      <FaPhoneAlt size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
                      <p className="text-gray-600 mt-1">+91 98765 43210</p>
                      <p className="text-gray-600">+91 98765 43211</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-maroon mr-4">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Email Us</h4>
                      <p className="text-gray-600 mt-1">info@shaadinagar.com</p>
                      <p className="text-gray-600">bookings@shaadinagar.com</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300 shadow-md"
                  >
                    <FaWhatsapp size={24} className="mr-2" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <MapEmbed />
            </div>

            {/* Contact Form */}
            <ContactForm />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
