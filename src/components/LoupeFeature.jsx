'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const LoupeFeature = () => {
  return (
    <section className="py-32 bg-arctic-midnight text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-white/5 p-4 ring-1 ring-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&q=80&w=1200"
                alt="Detailed Texture"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Loupe Effect Simulation */}
            <motion.div
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -50, 50, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/30 backdrop-blur-md shadow-2xl overflow-hidden pointer-events-none"
            >
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&q=80&w=1200"
                  alt="Zoomed Detail"
                  className="absolute w-[300%] h-[300%] max-w-none object-cover -translate-x-1/3 -translate-y-1/3 scale-150"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[8px] tracking-[0.4em] uppercase font-bold text-white bg-arctic-midnight/40 px-3 py-1 backdrop-blur-sm">
                    ULTRA-HD
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-arctic-teal font-medium tracking-[0.3em] text-[10px] uppercase mb-6 block">The Print Method</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-8">Museum Grade Giclée</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              We print exclusively on archival 310gsm cotton-rag paper using 12-color pigment inks. Every snowflake, every ice crystal, and every gradient of the aurora is captured with breathtaking precision.
            </p>

            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4 text-sm font-light text-white/90 italic">
                <Search size={16} className="text-arctic-teal" /> 100+ years of color permanence
              </li>
              <li className="flex items-center gap-4 text-sm font-light text-white/90 italic">
                <Search size={16} className="text-arctic-teal" /> Anti-reflective gallery glass options
              </li>
              <li className="flex items-center gap-4 text-sm font-light text-white/90 italic">
                <Search size={16} className="text-arctic-teal" /> Individually signed by the artist
              </li>
            </ul>

            <button className="bg-white text-arctic-midnight px-12 py-5 text-xs tracking-[0.3em] uppercase font-medium hover:bg-arctic-snow transition-all duration-300">
              Learn About Quality
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoupeFeature;
