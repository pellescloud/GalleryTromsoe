import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50">
      <div className="text-2xl font-serif italic dark:text-[#fdf8f8] cursor-pointer text-[#0B1221]">
        Gallery Tromsø
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-10 font-serif text-lg tracking-tight">
        <a className="dark:text-[#fdf8f8] border-b dark:border-[#fdf8f8] pb-1 transition-colors duration-300 ease-in-out text-[#0B1221] border-[#0B1221]" href="#">Shop</a>
        <a className="text-slate-500 dark:text-slate-400 hover:text-[#040053] dark:hover:text-[#fdf8f8] transition-colors duration-300 ease-in-out" href="#">Gallery</a>
        <a className="text-slate-500 dark:text-slate-400 hover:text-[#040053] dark:hover:text-[#fdf8f8] transition-colors duration-300 ease-in-out" href="#">Framing</a>
        <a className="text-slate-500 dark:text-slate-400 hover:text-[#040053] dark:hover:text-[#fdf8f8] transition-colors duration-300 ease-in-out" href="#">Contact</a>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:block relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input className="bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 text-sm py-2 pl-10 pr-4 w-48 transition-all" placeholder="Search archives..." type="text" />
        </div>
        <button className="flex items-center active:opacity-70 active:scale-95 transition-all text-[#0B1221]">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
