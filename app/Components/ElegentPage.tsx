'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function ElegantPolicyPage({ title, children }: { title: string, children: React.ReactNode }) {
  const router = useRouter();

  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
      className="py-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto"
    >
      <button onClick={() => router.back()} className="flex items-center gap-2 text-neutral-500 hover:text-primary mb-12">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <h1 className="font-heading text-5xl font-bold text-neutral-900 mb-12">{title}</h1>
      <div className="prose prose-neutral font-sans leading-loose text-neutral-600">
        {children}
      </div>
    </motion.main>
  );
}