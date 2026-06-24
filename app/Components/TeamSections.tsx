import React from 'react';

const founders = [
  {
    name: "Henil Hiren Dand",
    role: "Founder",
    bio: "With a visionary approach to agricultural logistics and sustainable growth, Henil spearheads our mission to modernize farming practices. His dedication to integrating innovative management systems ensures that our operations remain at the cutting edge of the industry.",
    image: "https://images.pexels.com/photos/7580763/pexels-photo-7580763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Dharmesh Damji Chheda",
    role: "Co-Founder",
    bio: "Bringing years of strategic insight and operational expertise, Dharmesh oversees the core foundations of our agrow-services. His commitment to quality and integrity remains the driving force behind HD Seedlink’s growing reputation in the Gujarat agricultural landscape.",
    image: "https://images.pexels.com/photos/7580761/pexels-photo-7580761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-primary block mb-2">
            Our Leadership
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            The Founders
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl neumorphism-flat flex flex-col md:flex-row gap-8 items-center text-left"
            >
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden shrink-0 neumorphism-pressed p-2">
                <img 
                  alt={founder.name} 
                  className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500" 
                  src={founder.image} 
                />
              </div>
              
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-bold block mb-1">
                  {founder.role}
                </span>
                <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                  {founder.name}
                </h3>
                <p className="font-sans text-neutral-500 font-light text-sm sm:text-base leading-relaxed italic">
                  "{founder.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;