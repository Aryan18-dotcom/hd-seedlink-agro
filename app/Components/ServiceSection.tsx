import React from 'react';
import Link from 'next/link';
import { Truck, Leaf, Cpu, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Precision Crop Logistics",
    description: "End-to-end sustainable logistics linking premium seeds to major markets across Gujarat.",
    icon: Truck,
  },
  {
    title: "Soil & Science Consulting",
    description: "Expert diagnostics utilizing precision technology to optimize soil health and maximize yield efficiency.",
    icon: Leaf,
  },
  {
    title: "Agro-Tech Integration",
    description: "Empowering traditional farmers to transition to smart precision tech, automated sensors, and IoT drip systems.",
    icon: Cpu,
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-[#E6EBF0]">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs uppercase font-bold tracking-[0.2em] text-primary block mb-2">
          Our Offerings
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-12">
          What We Serve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
          {services.map((svc, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl neumorphism-flat hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6">
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  {svc.title}
                </h3>
                <p className="font-sans text-neutral-500 font-extralight text-sm sm:text-base leading-relaxed">
                  {svc.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-neutral-200/50 flex items-center gap-1 text-primary font-semibold text-sm cursor-pointer hover:underline">
                <span>Learn more</span> 
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/future-plans" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 text-white font-bold hover:shadow-lg transition-all hover:translate-x-1"
          >
            Explore Our Roadmap & Future Plans 
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;