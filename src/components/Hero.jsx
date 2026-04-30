'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-arctic-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-arctic-midnight/20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&q=80&w=2000"
          alt="Arctic Landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-white/80 font-sans tracking-[0.3em] text-xs uppercase mb-6 block font-medium">
            WINTER EDITION 2025
          </span>
          <h1 className="text-white font-serif text-6xl md:text-8xl leading-tight mb-8">
            Capture the <br />
            <span className="italic font-light">Arctic Silence</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
            A curated collection of fine art photography from the frozen horizons of Northern Norway and Svalbard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-arctic-midnight px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-arctic-snow transition-all duration-300">
              Explore Collection
            </button>
            <button className="border border-white text-white px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-white/10 transition-all duration-300">
              The Arctic Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
