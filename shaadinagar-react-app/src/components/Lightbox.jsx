import { useEffect } from 'react';
import { HiX } from 'react-icons/hi';

const Lightbox = ({ image, onClose }) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gold transition-colors p-2"
        aria-label="Close lightbox"
      >
        <HiX size={36} />
      </button>
      
      <div 
        className="relative max-w-5xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-h-[85vh] max-w-full object-contain mx-auto rounded shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
          <p className="text-lg font-medium">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
