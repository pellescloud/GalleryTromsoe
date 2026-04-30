'use client';

import React, { useState, use, useMemo } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { PRODUCTS } from '../../../lib/data';
import { motion } from 'framer-motion';
import { ChevronRight, Info, Maximize2, ShieldCheck, Truck } from 'lucide-react';
import { cn } from '../../../lib/utils';
import Link from 'next/link';
import { useCart } from '../../../context/CartContext';

export default function ProductPage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const product = PRODUCTS.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState('40x60cm');
  const [selectedFrame, setSelectedFrame] = useState('No Frame');
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { addToCart } = useCart();

  if (!product) return <div className="pt-40 text-center">Product not found.</div>;

  const sizes = ['30x40cm', '40x60cm', '50x70cm', '70x100cm'];
  const frames = [
    { name: 'No Frame', price: 0 },
    { name: 'Black Wood', price: 85 },
    { name: 'Natural Oak', price: 95 },
    { name: 'Sleek Metal', price: 75 }
  ];

  const framePrice = useMemo(() => {
    return frames.find(f => f.name === selectedFrame)?.price || 0;
  }, [selectedFrame]);

  const totalPrice = product.price + framePrice;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setMousePos({ x, y });
  };

  const handleAddToCart = () => {
    addToCart(product, {
      size: selectedSize,
      frame: selectedFrame,
      framePrice: framePrice
    });
  };

  return (
    <div className="bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-[10px] tracking-widest uppercase font-bold text-slate-400 mb-12">
            <Link href="/shop" className="hover:text-arctic-teal transition-colors">Archive</Link>
            <ChevronRight size={10} />
            <span className="text-arctic-midnight">{product.category}</span>
            <ChevronRight size={10} />
            <span className="text-arctic-midnight">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Image Section */}
            <div className="lg:col-span-7">
              <div
                className={cn(
                  "relative aspect-[4/5] bg-slate-50 overflow-hidden cursor-crosshair group",
                  isZoomed && "z-40"
                )}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-200",
                    isZoomed && "scale-[2.5]"
                  )}
                  style={isZoomed ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` } : {}}
                />
                {!isZoomed && (
                  <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md p-3 shadow-xl flex items-center gap-3">
                    <Maximize2 size={16} className="text-arctic-midnight" />
                    <span className="text-[10px] tracking-widest font-bold uppercase text-arctic-midnight">Hover to Zoom</span>
                  </div>
                )}
              </div>

              {/* Arctic Story Section */}
              <div className="mt-20 border-t border-slate-100 pt-12">
                <div className="flex items-center gap-4 mb-8">
                  <Info size={20} className="text-arctic-teal" />
                  <h3 className="font-serif text-2xl text-arctic-midnight uppercase tracking-tight">About the Shot</h3>
                </div>
                <p className="text-arctic-charcoal/70 text-lg leading-relaxed max-w-2xl italic font-light">
                  "{product.aboutShot}"
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-arctic-snow px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-bold text-arctic-teal">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Selection Section */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h1 className="font-serif text-5xl md:text-6xl text-arctic-midnight mb-2">{product.title}</h1>
                <p className="text-xs tracking-[0.3em] uppercase text-arctic-teal font-bold mb-8">
                  By {product.artist}
                </p>

                <p className="text-arctic-charcoal/70 text-lg leading-relaxed mb-12">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="mb-10">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-arctic-midnight mb-6">Select Size</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "py-4 border text-[10px] tracking-widest uppercase font-bold transition-all",
                          selectedSize === size
                            ? "border-arctic-midnight bg-arctic-midnight text-white shadow-xl"
                            : "border-slate-200 text-slate-400 hover:border-arctic-midnight hover:text-arctic-midnight"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frame Selection */}
                <div className="mb-12">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-arctic-midnight mb-6">Framing Options</h4>
                  <div className="space-y-3">
                    {frames.map(frame => (
                      <button
                        key={frame.name}
                        onClick={() => setSelectedFrame(frame.name)}
                        className={cn(
                          "w-full flex justify-between items-center px-6 py-5 border transition-all",
                          selectedFrame === frame.name
                            ? "border-arctic-midnight bg-arctic-snow ring-1 ring-arctic-midnight"
                            : "border-slate-100 hover:border-slate-300"
                        )}
                      >
                        <span className={cn("text-[10px] tracking-widest uppercase font-bold", selectedFrame === frame.name ? "text-arctic-midnight" : "text-slate-500")}>
                          {frame.name}
                        </span>
                        <span className="text-xs text-slate-400">
                          {frame.price === 0 ? 'Included' : `+ €${frame.price}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pricing & Add to Cart */}
                <div className="border-t border-slate-100 pt-10">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-400 block mb-1">Total Price</span>
                      <span className="text-4xl font-sans text-arctic-midnight">€{totalPrice}</span>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase text-arctic-teal font-bold">In Stock</span>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-arctic-midnight text-white py-6 text-xs tracking-[0.4em] uppercase font-bold hover:bg-arctic-charcoal transition-all shadow-2xl active:scale-[0.98]"
                  >
                    Add to Collection
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="mt-12 space-y-6">
                  <div className="flex items-start gap-4">
                    <Truck size={18} className="text-slate-400 mt-1" />
                    <div>
                      <h5 className="text-[10px] tracking-widest uppercase font-bold text-arctic-midnight">Carbon Neutral Shipping</h5>
                      <p className="text-xs text-slate-400 mt-1">Free shipping on all fine art prints. Estimated delivery 5-9 days.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck size={18} className="text-slate-400 mt-1" />
                    <div>
                      <h5 className="text-[10px] tracking-widest uppercase font-bold text-arctic-midnight">Museum Guarantee</h5>
                      <p className="text-xs text-slate-400 mt-1">Archival quality paper and inks. Guaranteed color permanence for 100+ years.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
