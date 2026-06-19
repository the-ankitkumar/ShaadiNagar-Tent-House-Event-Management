const MapEmbed = () => {
  return (
    <div className="w-full h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
      {/* Since we don't have a real API key, using a general Google Maps embed via iframe */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107248166!2d85.05581177651034!3d25.60817557053531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3ecd7eb73a6b!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '400px' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="ShaadiNagar Location Map"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
