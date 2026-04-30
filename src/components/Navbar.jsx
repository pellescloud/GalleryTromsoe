'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'All Art', href: '/shop' },
    { name: 'Photographers', href: '/photographers' },
    { name: 'Postcards', href: '/postcards' },
    { name: 'Posters', href: '/posters' },
    { name: 'The Arctic Story', href: '/story' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-serif tracking-tight transition-colors duration-300",
            isScrolled ? "text-arctic-midnight" : "text-white"
          )}
        >
          Gallery <span className="italic font-light text-arctic-teal">Tromsø</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-arctic-teal",
                isScrolled ? "text-arctic-midnight" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button className={cn(
            "transition-colors",
            isScrolled ? "text-arctic-midnight" : "text-white"
          )}>
            <Search size={18} strokeWidth={2} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className={cn(
              "relative transition-colors",
              isScrolled ? "text-arctic-midnight" : "text-white"
            )}
          >
            <ShoppingCart size={18} strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-arctic-teal text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className={cn(
              "lg:hidden transition-colors",
              isScrolled ? "text-arctic-midnight" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-8 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-serif text-arctic-midnight"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
