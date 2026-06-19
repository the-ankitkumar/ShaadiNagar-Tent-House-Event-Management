import TeamCard from './TeamCard';

const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Founder & CEO',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Creative Director',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Operations Head',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Event Coordinator',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals who work tirelessly behind the scenes to make your events extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
