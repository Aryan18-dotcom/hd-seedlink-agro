'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the loader has already been shown in this session
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    // const hasLoaded = false
    
    if (hasLoaded) {
      setLoading(false);
    } else {
      // Simulate loading time (e.g., 2.5 seconds)
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 2500);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-100"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <motion.h1
              className="font-heading text-6xl font-bold text-primary"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              HD Seedlink Agro..
            </motion.h1>
            <motion.div 
              className="h-1 bg-primary mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}