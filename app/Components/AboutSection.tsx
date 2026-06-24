import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-[#E6EBF0] font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative h-75 sm:h-100 rounded-3xl p-4 neumorphism-flat">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img     
                alt="Organic Macro Agriculture" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1619719826894-89d6c4fd5739?crop=entropy&cs=srgb&fm=jpg" 
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-primary mb-2">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              The Synergy of Soil &amp; Science
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed mb-6">
              "At HD Seedlink Agro LLP, we believe in the synergy of soil and science. 
              Established in Ahmedabad, we are committed to providing premium agricultural 
              support services that empower farmers and optimize yield. We operate at the 
              intersection of precision and sustainability, ensuring that every seed linked 
              to our network is a step toward a more productive future."
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 w-full mt-6">
              <div className="p-5 rounded-2xl neumorphism-flat">
                <span className="block text-3xl font-bold text-primary font-heading">
                  100%
                </span>
                <span className="text-xs text-neutral-500 font-medium font-sans">
                  Sustainable Methods
                </span>
              </div>
              <div className="p-5 rounded-2xl neumorphism-flat">
                <span className="block text-3xl font-bold text-primary font-heading">
                  Premium
                </span>
                <span className="text-xs text-neutral-500 font-medium font-sans">
                  Support Network
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;