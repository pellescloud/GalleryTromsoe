import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#faf9f6] w-full py-20 px-12 border-t border-[#0B1221]/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-serif mb-6 text-[#0B1221]">Gallery Tromsø</div>
          <p className="text-[#0B1221]/70 font-sans text-xs leading-relaxed max-w-xs">
            Curating the ethereal beauty of the Arctic circle. From the workshop to your walls, we bring the North home.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-sm tracking-widest uppercase mb-4 text-[#0B1221]">Collection</h5>
          <a className="text-[#0B1221]/70 hover:text-[#0B1221] transition-all font-sans text-sm" href="#">Fine Art Prints</a>
          <a className="text-[#0B1221]/70 hover:text-[#0B1221] transition-all font-sans text-sm" href="#">Framed Posters</a>
          <a className="text-[#0B1221]/70 hover:text-[#0B1221] transition-all font-sans text-sm" href="#">Gift Cards</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-sm tracking-widest uppercase mb-4 text-[#0B1221]">Company</h5>
          <a className="text-[#0B1221]/70 hover:text-[#0B1221] transition-all font-sans text-sm" href="#">Returns</a>
          <a className="text-[#0B1221]/70 hover:text-[#0B1221] transition-all font-sans text-sm" href="#">Shipping</a>
          <a className="text-[#0B1221]/70 hover:text-[#0B1221] transition-all font-sans text-sm" href="#">Contact</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-sm tracking-widest uppercase mb-4 text-[#0B1221]">Newsletter</h5>
          <div className="relative">
            <input className="bg-transparent border-0 border-b focus:ring-0 w-full py-2 font-sans text-sm border-[#0B1221] outline-none text-[#0B1221]" placeholder="Email Address" type="email" />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0B1221]"><span className="material-symbols-outlined">arrow_forward</span></button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#0B1221]/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[#0B1221]/50 font-sans text-[10px] tracking-widest uppercase">© 2026 Gallery Tromsø. All Rights Reserved.</span>
        <div className="flex gap-8 text-[#0B1221]/50">
          <a className="hover:text-[#0B1221] transition-colors" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
          <a className="hover:text-[#0B1221] transition-colors" href="#"><span className="material-symbols-outlined text-xl">location_on</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
