'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CreditCard, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleComplete = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-arctic-snow flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md"
        >
          <div className="w-20 h-20 bg-arctic-teal text-white rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck size={40} />
          </div>
          <h1 className="font-serif text-4xl text-arctic-midnight mb-6">Order Confirmed</h1>
          <p className="text-arctic-charcoal/70 mb-10 leading-relaxed">
            Thank you for your purchase. We are preparing your Arctic masterpiece for its journey to your home. You will receive a confirmation email shortly.
          </p>
          <Link href="/shop" className="inline-block bg-arctic-midnight text-white px-12 py-5 text-xs tracking-widest uppercase font-bold">
            Return to Gallery
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Form Section */}
            <div className="lg:col-span-7">
              <nav className="flex items-center space-x-4 mb-12">
                <span className={cn("text-[10px] tracking-widest uppercase font-bold", step >= 1 ? "text-arctic-midnight" : "text-slate-300")}>Shipping</span>
                <ChevronRight size={12} className="text-slate-300" />
                <span className={cn("text-[10px] tracking-widest uppercase font-bold", step >= 2 ? "text-arctic-midnight" : "text-slate-300")}>Method</span>
                <ChevronRight size={12} className="text-slate-300" />
                <span className={cn("text-[10px] tracking-widest uppercase font-bold", step >= 3 ? "text-arctic-midnight" : "text-slate-300")}>Payment</span>
              </nav>

              <div className="max-w-xl">
                {step === 1 && (
                  <motion.form initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleNext} className="space-y-6">
                    <h2 className="font-serif text-3xl text-arctic-midnight mb-8">Shipping Address</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" required className="w-full bg-arctic-snow border-none px-6 py-4 text-sm focus:ring-1 ring-arctic-midnight outline-none" />
                      <input type="text" placeholder="Last Name" required className="w-full bg-arctic-snow border-none px-6 py-4 text-sm focus:ring-1 ring-arctic-midnight outline-none" />
                    </div>
                    <input type="email" placeholder="Email Address" required className="w-full bg-arctic-snow border-none px-6 py-4 text-sm focus:ring-1 ring-arctic-midnight outline-none" />
                    <input type="text" placeholder="Address" required className="w-full bg-arctic-snow border-none px-6 py-4 text-sm focus:ring-1 ring-arctic-midnight outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="City" required className="w-full bg-arctic-snow border-none px-6 py-4 text-sm focus:ring-1 ring-arctic-midnight outline-none" />
                      <input type="text" placeholder="Postal Code" required className="w-full bg-arctic-snow border-none px-6 py-4 text-sm focus:ring-1 ring-arctic-midnight outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-arctic-midnight text-white py-6 text-xs tracking-[0.4em] uppercase font-bold shadow-xl">
                      Continue to Shipping
                    </button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <h2 className="font-serif text-3xl text-arctic-midnight mb-8">Shipping Method</h2>
                    <div className="space-y-4">
                      <div className="p-6 bg-arctic-snow flex justify-between items-center ring-1 ring-arctic-midnight">
                        <div>
                          <p className="text-sm font-bold text-arctic-midnight uppercase tracking-widest">Standard Arctic Express</p>
                          <p className="text-xs text-slate-400 mt-1">5-9 business days • Carbon Neutral</p>
                        </div>
                        <span className="text-xs font-bold text-arctic-teal uppercase tracking-widest">Free</span>
                      </div>
                      <div className="p-6 bg-white border border-slate-100 flex justify-between items-center opacity-50">
                        <div>
                          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Polar Overnight</p>
                          <p className="text-xs text-slate-400 mt-1">1-2 business days</p>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">€45.00</span>
                      </div>
                    </div>
                    <button onClick={() => setStep(3)} className="w-full bg-arctic-midnight text-white py-6 text-xs tracking-[0.4em] uppercase font-bold shadow-xl">
                      Continue to Payment
                    </button>
                    <button onClick={() => setStep(1)} className="w-full text-[10px] tracking-widest uppercase text-slate-400 font-bold">
                      Back to Information
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <h2 className="font-serif text-3xl text-arctic-midnight mb-8">Payment Details</h2>
                    <div className="bg-arctic-snow p-8 mb-8">
                      <div className="flex items-center gap-4 mb-8">
                        <CreditCard size={20} className="text-arctic-teal" />
                        <span className="text-xs font-bold uppercase tracking-widest">Credit Card</span>
                      </div>
                      <div className="space-y-4">
                        <input type="text" placeholder="Card Number" className="w-full bg-white border-none px-6 py-4 text-sm outline-none" />
                        <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="MM/YY" className="w-full bg-white border-none px-6 py-4 text-sm outline-none" />
                          <input type="text" placeholder="CVC" className="w-full bg-white border-none px-6 py-4 text-sm outline-none" />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleComplete}
                      disabled={isProcessing}
                      className="w-full bg-arctic-midnight text-white py-6 text-xs tracking-[0.4em] uppercase font-bold shadow-xl flex items-center justify-center gap-4"
                    >
                      {isProcessing ? 'Verifying...' : `Pay €${cartTotal}`}
                    </button>
                    <button onClick={() => setStep(2)} className="w-full text-[10px] tracking-widest uppercase text-slate-400 font-bold">
                      Back to Shipping
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-arctic-snow p-10 sticky top-32">
                <h3 className="font-serif text-2xl text-arctic-midnight mb-10">Order Summary</h3>
                <div className="space-y-8 mb-10">
                  {cartItems.map(item => (
                    <div key={item.cartId} className="flex gap-6">
                      <div className="w-16 h-20 bg-white p-1 ring-1 ring-slate-100 flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-serif text-arctic-midnight">{item.title}</h4>
                        <p className="text-[8px] tracking-widest uppercase text-slate-400 mt-1">{item.size} • {item.frame}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-[10px] text-slate-400">Qty: {item.quantity}</span>
                          <span className="text-xs font-bold text-arctic-midnight">€{(item.price + item.framePrice) * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-8 space-y-4">
                  <div className="flex justify-between text-xs tracking-widest uppercase text-slate-400">
                    <span>Subtotal</span>
                    <span>€{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-xs tracking-widest uppercase text-slate-400">
                    <span>Shipping</span>
                    <span className="text-arctic-teal">Calculated at next step</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-sm tracking-[0.2em] uppercase font-bold text-arctic-midnight">Total</span>
                    <span className="text-3xl font-sans text-arctic-midnight">€{cartTotal}</span>
                  </div>
                </div>

                <div className="mt-10 flex items-start gap-4">
                  <Truck size={16} className="text-arctic-teal mt-1" />
                  <p className="text-[9px] tracking-widest uppercase text-slate-400 leading-relaxed">
                    Orders are packaged in museum-grade protective tubes. Hand-finished frames are shipped in custom crates.
                  </p>
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
