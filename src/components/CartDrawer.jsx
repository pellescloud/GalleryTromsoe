'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-arctic-midnight/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h2 className="font-serif text-2xl text-arctic-midnight flex items-center gap-3">
                <ShoppingBag size={20} strokeWidth={1.5} />
                Your Collection
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-arctic-midnight transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="text-slate-300 font-serif text-xl mb-8">The gallery is currently empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs tracking-widest uppercase border-b border-arctic-midnight pb-2 font-bold"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                <div className="space-y-10">
                  {cartItems.map((item) => (
                    <div key={item.cartId} className="flex gap-6">
                      <div className="w-24 h-32 bg-slate-50 flex-shrink-0 overflow-hidden ring-1 ring-slate-100">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-lg text-arctic-midnight">{item.title}</h3>
                          <button onClick={() => removeFromCart(item.cartId)} className="text-slate-300 hover:text-red-400 transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="text-[9px] tracking-[0.2em] uppercase text-arctic-teal font-bold mb-4">
                          {item.size} • {item.frame}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-slate-200">
                            <button onClick={() => updateQuantity(item.cartId, -1)} className="p-2 hover:bg-slate-50">
                              <Minus size={10} />
                            </button>
                            <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.cartId, 1)} className="p-2 hover:bg-slate-50">
                              <Plus size={10} />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-arctic-midnight">€{(item.price + item.framePrice) * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-8 border-t border-slate-100 bg-arctic-snow">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-400">Estimated Total</span>
                  <span className="text-2xl font-sans text-arctic-midnight">€{cartTotal}</span>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-arctic-midnight text-white text-center py-5 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-arctic-charcoal transition-all shadow-xl"
                >
                  Proceed to Checkout
                </Link>
                <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest">
                  Shipping and taxes calculated later.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
