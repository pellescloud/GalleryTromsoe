'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PRODUCTS, FILTERS } from '../../lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Filter, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function ShopPage() {
  const [activeFilters, setActiveFilters] = useState({
    Technique: 'All',
    Format: 'All',
    Price: 'All'
  });
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const techniqueMatch = activeFilters.Technique === 'All' || product.category === activeFilters.Technique;
      const formatMatch = activeFilters.Format === 'All' || product.format === activeFilters.Format;

      let priceMatch = true;
      if (activeFilters.Price === 'Under €50') priceMatch = product.price < 50;
      else if (activeFilters.Price === '€50 - €200') priceMatch = product.price >= 50 && product.price <= 200;
      else if (activeFilters.Price === 'Over €200') priceMatch = product.price > 200;

      return techniqueMatch && formatMatch && priceMatch;
    });
  }, [activeFilters]);

  const toggleFilter = (type, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type] === value ? 'All' : value
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-5xl md:text-7xl text-arctic-midnight mb-6">All Art</h1>
          <p className="text-arctic-charcoal/60 max-w-2xl text-lg leading-relaxed">
            From limited edition giclée prints to minimalist postcards, discover the Arctic through the eyes of our photographers.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md py-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-8">
            {Object.entries(FILTERS).map(([category, options]) => (
              <div key={category} className="relative group">
                <button className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-arctic-midnight">
                  {category}: <span className="text-arctic-teal">{activeFilters[category]}</span>
                  <ChevronDown size={12} strokeWidth={3} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-2xl ring-1 ring-slate-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="space-y-3">
                    <button
                      onClick={() => toggleFilter(category, 'All')}
                      className={cn("block w-full text-left text-xs uppercase tracking-widest", activeFilters[category] === 'All' ? "text-arctic-teal font-bold" : "text-slate-400")}
                    >
                      All
                    </button>
                    {options.map(option => (
                      <button
                        key={option}
                        onClick={() => toggleFilter(category, option)}
                        className={cn("block w-full text-left text-xs uppercase tracking-widest hover:text-arctic-midnight transition-colors", activeFilters[category] === option ? "text-arctic-teal font-bold" : "text-slate-600")}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[10px] tracking-widest uppercase font-medium text-slate-400">
            Showing {filteredProducts.length} Results
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col"
              >
                <Link href={`/product/${product.id}`} className="relative mb-8 aspect-[4/5] bg-slate-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-arctic-midnight/5 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full bg-white text-arctic-midnight py-4 text-[10px] tracking-[0.3em] uppercase font-bold shadow-xl">
                      View Details
                    </button>
                  </div>
                </Link>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-arctic-midnight mb-1">{product.title}</h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-arctic-charcoal/50 font-bold">
                      {product.category} • {product.artist}
                    </p>
                  </div>
                  <span className="font-sans text-lg text-arctic-midnight">€{product.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <p className="font-serif text-3xl text-slate-300">No pieces match your current selection.</p>
            <button
              onClick={() => setActiveFilters({ Technique: 'All', Format: 'All', Price: 'All' })}
              className="mt-8 text-xs tracking-widest uppercase border-b border-arctic-midnight pb-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
