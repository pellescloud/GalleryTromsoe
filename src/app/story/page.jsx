'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Compass, Camera, Wind, Mountain } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="bg-arctic-snow min-h-screen">
      <Navbar />

      <main>
        {/* Immersive Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-arctic-midnight/40 z-10" />
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="Arctic Horizon"
            />
          </motion.div>

          <div className="relative z-20 text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/80 text-[10px] tracking-[0.5em] uppercase font-bold mb-8 block"
            >
              The Arctic Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="font-serif text-6xl md:text-9xl text-white mb-12 leading-tight"
            >
              Beyond the <br /> <span className="italic font-light">Horizon</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="w-[1px] h-24 bg-white/30 mx-auto"
            />
          </div>
        </section>

        {/* Narrative Sections */}
        <section className="py-40 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-32">
              <Compass className="mx-auto text-arctic-teal mb-10" size={32} strokeWidth={1} />
              <h2 className="font-serif text-4xl md:text-5xl text-arctic-midnight mb-12">Chasing the Silence</h2>
              <p className="text-arctic-charcoal/70 text-xl leading-relaxed italic font-light">
                "In the High North, the silence isn't an absence of sound. It's a presence. It's the weight of the snow, the breath of the fjord, and the slow, grinding patience of the glaciers."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=800"
                  alt="Photographer in Snow"
                  className="w-full shadow-2xl grayscale"
                />
              </motion.div>
              <div>
                <h3 className="font-serif text-3xl text-arctic-midnight mb-6">The Witness</h3>
                <p className="text-arctic-charcoal/70 leading-relaxed mb-6">
                  Gallery Tromsø was founded on a simple belief: that the Arctic is not just a place, but a state of mind. Our photographers spend weeks in the wilderness, waiting for the exact second when the light transforms the landscape into something otherworldly.
                </p>
                <p className="text-arctic-charcoal/70 leading-relaxed">
                  We don't just sell prints. We sell the patience, the cold, and the profound stillness of the polar night.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center flex-row-reverse">
              <div className="order-2 md:order-1">
                <h3 className="font-serif text-3xl text-arctic-midnight mb-6">Fragile Majesty</h3>
                <p className="text-arctic-charcoal/70 leading-relaxed mb-6">
                  The Arctic is changing. The ice we photograph today might not exist in a decade. Our mission is to document this fragile majesty before it shifts forever, preserving the memory of the North in archival-quality physical forms.
                </p>
                <div className="flex gap-8 mt-10">
                  <div className="text-center">
                    <Wind size={20} className="text-arctic-teal mx-auto mb-2" />
                    <span className="text-[8px] tracking-widest uppercase font-bold text-slate-400">Purity</span>
                  </div>
                  <div className="text-center">
                    <Mountain size={20} className="text-arctic-teal mx-auto mb-2" />
                    <span className="text-[8px] tracking-widest uppercase font-bold text-slate-400">Endurance</span>
                  </div>
                  <div className="text-center">
                    <Camera size={20} className="text-arctic-teal mx-auto mb-2" />
                    <span className="text-[8px] tracking-widest uppercase font-bold text-slate-400">Legacy</span>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=800"
                  alt="Melting Ice"
                  className="w-full shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-40 bg-arctic-midnight text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-arctic-teal via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="font-serif text-5xl text-white mb-10">Bring the North Home</h2>
            <p className="text-white/60 text-lg mb-12 font-light">
              Explore our curated archive of Arctic photography and find the piece that speaks to your soul.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-arctic-midnight px-12 py-5 text-xs tracking-[0.4em] uppercase font-bold hover:bg-arctic-snow transition-all"
            >
              Browse the Archive
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
