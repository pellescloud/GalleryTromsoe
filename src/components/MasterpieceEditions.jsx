'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../lib/data';
import Link from 'next/link';

const MasterpieceEditions = () => {
  // Take the first 3 products for the home page highlight
  const displayProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-32 bg-arctic-snow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="text-arctic-teal font-medium tracking-[0.3em] text-[10px] uppercase mb-4 block">The Gallery Shop</span>
          <h2 className="font-serif text-5xl md:text-6xl text-arctic-midnight">Masterpiece Editions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <Link href={`/product/${product.id}`} className="group relative mb-10">
                <div className="aspect-[3/4] overflow-hidden bg-white shadow-sm ring-1 ring-slate-100 p-3 md:p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-slate-200">
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-arctic-midnight text-white px-8 py-3 text-[10px] tracking-widest uppercase font-medium shadow-2xl">
                    Add to Cart
                  </button>
                </div>
              </Link>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-arctic-midnight mb-1">{product.title}</h3>
                  <p className="text-[10px] tracking-widest uppercase text-arctic-charcoal/50 font-medium">
                    {product.technique} • {product.artist}
                  </p>
                </div>
                <span className="font-sans text-sm text-arctic-midnight font-medium">€{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/shop"
            className="inline-block border border-arctic-midnight px-12 py-5 text-xs tracking-[0.3em] uppercase font-medium hover:bg-arctic-midnight hover:text-white transition-all duration-500"
          >
            Browse Full Archive
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MasterpieceEditions;
