'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shovel, Shield, TreePine } from 'lucide-react';

const BespokeFraming = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-slate-50 p-2 shadow-sm ring-1 ring-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=600"
                  alt="Oak Frame Detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-slate-50 p-2 shadow-sm ring-1 ring-slate-100 mt-16">
                <img
                  src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=600"
                  alt="Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-arctic-teal/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-arctic-teal font-medium tracking-[0.3em] text-[10px] uppercase mb-6 block">Artisanal Quality</span>
            <h2 className="font-serif text-5xl md:text-6xl text-arctic-midnight mb-8">Bespoke Framing</h2>
            <p className="text-arctic-charcoal/70 text-lg leading-relaxed mb-12 max-w-lg">
              Every photograph deserves a sanctuary. Our in-house workshop uses only museum-grade materials, hand-finished to protect and enhance your piece.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-arctic-snow flex items-center justify-center">
                  <TreePine className="text-arctic-teal" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-arctic-midnight mb-2">Scandinavian Oak</h4>
                  <p className="text-sm text-arctic-charcoal/60 leading-relaxed">
                    Sustainably sourced light oak, bringing natural warmth and timeless elegance to the cool Arctic tones.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-arctic-snow flex items-center justify-center">
                  <Shield className="text-arctic-teal" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-arctic-midnight mb-2">Sleek Black Wood</h4>
                  <p className="text-sm text-arctic-charcoal/60 leading-relaxed">
                    A deep, matte charcoal finish that provides sharp focus and modern contrast for high-key winter shots.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-16 text-xs font-medium tracking-[0.2em] uppercase border-b border-arctic-midnight pb-2 hover:text-arctic-teal hover:border-arctic-teal transition-all">
              Discover Our Process
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BespokeFraming;
