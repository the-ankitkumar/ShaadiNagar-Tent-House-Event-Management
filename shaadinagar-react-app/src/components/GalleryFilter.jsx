const GalleryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
            activeCategory === category
              ? 'bg-maroon text-white shadow-md'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gold hover:text-white hover:border-gold'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
