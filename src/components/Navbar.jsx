import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 bg-transparent backdrop-blur-sm z-50 text-primary border-b border-primary/10">
      <div className="text-2xl font-serif italic cursor-pointer text-primary ">
        Gallery Tromsø
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-10 font-serif text-lg tracking-tight">
        <a className="text-primary border-b pb-1 transition-colors duration-300 ease-in-out border-primary " href="#">Shop</a>
        <a className="text-primary/80 hover:text-primary transition-colors duration-300 ease-in-out " href="#">Gallery</a>
        <a className="text-primary/80 hover:text-primary transition-colors duration-300 ease-in-out " href="#">Framing</a>
        <a className="text-primary/80 hover:text-primary transition-colors duration-300 ease-in-out " href="#">Contact</a>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:block relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/70">search</span>
          <input className="bg-transparent border-0 border-b border-primary/50 focus:border-primary focus:ring-0 text-sm py-2 pl-10 pr-4 w-48 transition-all text-primary placeholder:text-primary/70 " placeholder="Search archives..." type="text" />
        </div>
        <button className="flex items-center active:opacity-70 active:scale-95 transition-all text-primary ">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
