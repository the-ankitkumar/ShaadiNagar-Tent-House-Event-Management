import { useState } from 'react';
import GalleryFilter from '../components/GalleryFilter';
import GalleryGrid from '../components/GalleryGrid';
import Lightbox from '../components/Lightbox';
import { galleryData } from '../data/galleryData';

const categories = ['All', 'Weddings', 'Birthdays', 'Corporate', 'Catering'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    // Prevent background scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* Hero Banner for Gallery */}
      <div 
        className="relative h-[40vh] flex items-center justify-center bg-maroon overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/indian,wedding,photography/all?lock=4')" }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-200">Glimpses of our spectacular events.</p>
        </div>
      </div>

      <section className="py-16 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-4">Event Portfolio</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of beautifully executed events and get inspired for your next big celebration.
            </p>
          </div>

          <GalleryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />

          <GalleryGrid 
            images={filteredImages} 
            openLightbox={openLightbox} 
          />

          {filteredImages.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No images found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox 
          image={selectedImage} 
          onClose={closeLightbox} 
        />
      )}
    </div>
  );
};

export default Gallery;
