'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const roadmap = [
  { 
    phase: "Phase 01", title: "IoT Expansion", 
    desc: "Deploying proprietary sensor nodes to 500+ farms in Gujarat to monitor moisture, NPK levels, and crop health in real-time.",
    img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=870?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    phase: "Phase 02", title: "AI Analytics", 
    desc: "Launching 'SeedLink AI' – a predictive engine that correlates weather data with historical yield to offer actionable planting advice.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    phase: "Phase 03", title: "National Logistics", 
    desc: "Establishing specialized cold-chain hubs that bridge small-scale farmers directly to national retail chains.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
  },
];

export default function FuturePlans() {
  const router = useRouter();

  return (
    <main className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto bg-[#E6EBF0]">
      <button onClick={() => router.back()} className="flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
        <h1 className="font-heading text-6xl font-bold text-neutral-900 mb-6">The Road to 2030</h1>
        <p className="text-xl text-neutral-600 font-sans max-w-2xl mx-auto">Our strategic roadmap to redefine the agricultural landscape through precision and connectivity.</p>
      </motion.div>

      <div className="relative space-y-24">
        {roadmap.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className={`neumorphism-flat p-8 rounded-3xl ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
              <span className="text-primary font-bold text-sm tracking-widest uppercase">{item.phase}</span>
              <h3 className="font-heading text-4xl font-bold my-4">{item.title}</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">{item.desc}</p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-2xl h-75">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}