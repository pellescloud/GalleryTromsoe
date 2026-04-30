import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-arctic-snow pt-24 pb-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-serif mb-6 block text-arctic-midnight">
              Gallery <span className="italic">Tromsø</span>
            </Link>
            <p className="text-arctic-charcoal/70 text-sm leading-relaxed mb-8 max-w-xs">
              Bringing the silence and ethereal beauty of the Arctic Circle into your home. Each piece is a testament to the fragile majesty of the North.
            </p>
          </div>

          <div>
            <h5 className="font-sans text-xs tracking-widest uppercase mb-8 text-arctic-midnight">Collections</h5>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-arctic-charcoal/60 hover:text-arctic-teal transition-all text-sm">Fine Art Prints</Link></li>
              <li><Link href="/posters" className="text-arctic-charcoal/60 hover:text-arctic-teal transition-all text-sm">Minimalist Posters</Link></li>
              <li><Link href="/postcards" className="text-arctic-charcoal/60 hover:text-arctic-teal transition-all text-sm">Arctic Postcards</Link></li>
              <li><Link href="/bespoke" className="text-arctic-charcoal/60 hover:text-arctic-teal transition-all text-sm">Bespoke Framing</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans text-xs tracking-widest uppercase mb-8 text-arctic-midnight">Inspiration</h5>
            <ul className="space-y-4">
              <li><Link href="/story" className="text-arctic-charcoal/60 hover:text-arctic-teal transition-all text-sm">The Arctic Story</Link></li>
              <li><Link href="/photographers" className="text-arctic-charcoal/60 hover:text-arctic-teal transition-all text-sm">Our Photographers</Link></li>
              <li><Link href="/process" className="text-arctic-charcoal/60 hover:text-arctic-teal transition-all text-sm">Craftsmanship</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans text-xs tracking-widest uppercase mb-8 text-arctic-midnight">Newsletter</h5>
            <p className="text-xs text-arctic-charcoal/60 mb-4">Join our journal for Arctic insights and new collection releases.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-arctic-midnight/20 focus:border-arctic-teal focus:ring-0 w-full py-2 text-sm outline-none transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-arctic-midnight hover:text-arctic-teal transition-colors text-xs tracking-widest uppercase font-medium">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-arctic-charcoal/40 text-[10px] tracking-widest uppercase">
            © 2025 Gallery Tromsø. Handcrafted in Northern Norway.
          </span>
          <div className="flex gap-8 text-arctic-charcoal/40 text-[10px] tracking-widest uppercase">
            <Link href="/terms" className="hover:text-arctic-teal transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-arctic-teal transition-colors">Privacy</Link>
            <Link href="/shipping" className="hover:text-arctic-teal transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
