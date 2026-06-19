const GalleryGrid = ({ images, openLightbox }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer aspect-square"
          onClick={() => openLightbox(image)}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium text-lg px-4 py-2 border-2 border-white rounded-md">
              View Image
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
