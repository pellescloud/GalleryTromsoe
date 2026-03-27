import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 bg-transparent backdrop-blur-sm z-50 text-white border-b border-white/10">
      <div className="text-2xl font-serif italic cursor-pointer text-white drop-shadow-md">
        Gallery Tromsø
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-10 font-serif text-lg tracking-tight">
        <a className="text-white border-b pb-1 transition-colors duration-300 ease-in-out border-white drop-shadow-md" href="#">Shop</a>
        <a className="text-white/80 hover:text-white transition-colors duration-300 ease-in-out drop-shadow-md" href="#">Gallery</a>
        <a className="text-white/80 hover:text-white transition-colors duration-300 ease-in-out drop-shadow-md" href="#">Framing</a>
        <a className="text-white/80 hover:text-white transition-colors duration-300 ease-in-out drop-shadow-md" href="#">Contact</a>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:block relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/70">search</span>
          <input className="bg-transparent border-0 border-b border-white/50 focus:border-white focus:ring-0 text-sm py-2 pl-10 pr-4 w-48 transition-all text-white placeholder:text-white/70 drop-shadow-md" placeholder="Search archives..." type="text" />
        </div>
        <button className="flex items-center active:opacity-70 active:scale-95 transition-all text-white drop-shadow-md">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
