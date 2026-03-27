import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent w-full py-20 px-12 border-t border-primary/20 text-primary ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto bg-white/5 backdrop-blur-md p-10 border border-primary/10 shadow-xl">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-serif mb-6 text-primary ">Gallery Tromsø</div>
          <p className="text-primary/80 font-sans text-xs leading-relaxed max-w-xs">
            Curating the ethereal beauty of the Arctic circle. From the workshop to your walls, we bring the North home.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-sm tracking-widest uppercase mb-4 text-primary ">Collection</h5>
          <a className="text-primary/70 hover:text-primary transition-all font-sans text-sm" href="#">Fine Art Prints</a>
          <a className="text-primary/70 hover:text-primary transition-all font-sans text-sm" href="#">Framed Posters</a>
          <a className="text-primary/70 hover:text-primary transition-all font-sans text-sm" href="#">Gift Cards</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-sm tracking-widest uppercase mb-4 text-primary ">Company</h5>
          <a className="text-primary/70 hover:text-primary transition-all font-sans text-sm" href="#">Returns</a>
          <a className="text-primary/70 hover:text-primary transition-all font-sans text-sm" href="#">Shipping</a>
          <a className="text-primary/70 hover:text-primary transition-all font-sans text-sm" href="#">Contact</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-sm tracking-widest uppercase mb-4 text-primary ">Newsletter</h5>
          <div className="relative">
            <input className="bg-transparent border-0 border-b focus:ring-0 w-full py-2 font-sans text-sm border-primary/50 outline-none text-primary placeholder:text-primary/50" placeholder="Email Address" type="email" />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary"><span className="material-symbols-outlined">arrow_forward</span></button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-6 ">
        <span className="text-primary/50 font-sans text-[10px] tracking-widest uppercase">© 2026 Gallery Tromsø. All Rights Reserved.</span>
        <div className="flex gap-8 text-primary/50">
          <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
          <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">location_on</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
