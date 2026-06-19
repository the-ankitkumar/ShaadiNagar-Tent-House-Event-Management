const TeamCard = ({ photo, name, role }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden text-center group">
      <div className="relative overflow-hidden">
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-gold font-medium">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
