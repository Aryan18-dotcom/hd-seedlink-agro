import React from 'react';
import { Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="font-sans relative min-h-[90vh] flex items-center pt-12 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Content Side */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neumorphism-btn-flat text-xs font-bold uppercase tracking-wider text-primary mb-6">
            <Award className="w-4 h-4" />
            Leading Agro Innovation in Gujarat
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-neutral-900 mb-6">
            Cultivating Tomorrow, <br />
            <span className="text-primary">Connecting Growth.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 mb-8 max-w-2xl font-light">
            Bridging the gap between traditional agricultural expertise and modern sustainable technology. 
            HD Seedlink Agro LLP stands at the forefront of agricultural excellence in Gujarat.
          </p>
          
          <div className="flex flex-wrap gap-4 font-sans">
            <button className="px-8 py-4 rounded-full bg-primary text-white font-bold tracking-wide hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Explore Our Vision
            </button>
            <button className="px-8 py-4 rounded-full neumorphism-btn-flat text-primary font-bold tracking-wide">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:col-span-5 relative w-full h-87.5 sm:h-112.5 rounded-3xl overflow-hidden neumorphism-flat p-4">
          <div className="w-full h-full rounded-2xl overflow-hidden relative group">
            <img 
              alt="Agro Tech Cultivation" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBkcm9uZSUyMGZhcm18ZW58MHx8fHwxNzgyMjgyMzg5fDA&ixlib=rb-4.1.0&q=85"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-heading text-2xl font-bold">Ahmedabad HQ</p>
                <p className="font-sans text-xs text-neutral-300 font-light">Sustaining Soil, Securing Future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;