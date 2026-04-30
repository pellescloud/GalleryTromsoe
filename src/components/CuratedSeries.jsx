'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const series = [
  {
    title: 'Northern Lights',
    subtitle: 'The Celestial Dance',
    image: 'https://images.unsplash.com/photo-1531366930477-4fbd093ceb11?auto=format&fit=crop&q=80&w=800',
    href: '/series/aurora'
  },
  {
    title: 'Arctic Wildlife',
    subtitle: 'Life on the Edge',
    image: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&q=80&w=800',
    href: '/series/wildlife'
  },
  {
    title: 'Fjord Landscapes',
    subtitle: 'Silent Monoliths',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800',
    href: '/series/fjords'
  }
];

const CuratedSeries = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-arctic-midnight mb-6">Curated Series</h2>
            <p className="text-arctic-charcoal/70 text-lg leading-relaxed">
              Deeply personal perspectives on the North, hand-selected to bring the quiet power of the Arctic into your space.
            </p>
          </div>
          <Link
            href="/series"
            className="text-xs font-medium tracking-[0.2em] uppercase border-b border-arctic-midnight pb-2 hover:text-arctic-teal hover:border-arctic-teal transition-all"
          >
            View All Series
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {series.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 relative bg-slate-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-arctic-midnight/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-arctic-midnight mb-2">{item.title}</h3>
              <p className="text-xs tracking-widest uppercase text-arctic-teal font-medium">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedSeries;
