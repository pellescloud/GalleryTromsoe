import React from 'react';

const MasterpieceEditions = () => {
  return (
    <section className="py-32 bg-transparent text-primary ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-28">
          <span className="text-primary/60 font-label tracking-[0.3em] text-xs uppercase mb-4 block">The Shop</span>
          <h2 className="font-headline text-5xl">Masterpiece Editions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {/* Product 1 */}
          <div className="flex flex-col">
            <div className="bg-white/5 backdrop-blur-sm p-4 md:p-8 mb-10 group relative border border-primary/10 hover:border-primary/30 transition-colors duration-500">
              <div className="aspect-[3/4] shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                <img alt="Arctic Fox" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5bfiJmj68uTNL6JemLCB24z2bcSq_WQr7dvCWTFuaW8FJdCqIYtgF4V0vwwLYpPXRfVkwHrI5h10BcoEMgG2gYa9aQIz87dOzdHDa2bTPztMO9kzc5jMrP1a8dwaBbUtrKtlKQrsNLNlHhY9UVpu0Sb5UiwHLjryhbkLmP-A7lhj8kLoKHLm_pSDRV4Uyj8gYkYmpmV6Gq_GJD0Sp-cxu-GESYCUCqxp5eK_cX_RXBzZvJLaoosAy6EazXP5SXLBJ7MbmQpauMFQ" />
              </div>
              {/* Quick Action Hover */}
              <button className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-primary/30 text-primary font-label px-8 py-4 text-xs tracking-widest opacity-0 group-hover:opacity-100 hover:bg-white/30 hover:border-primary transition-all duration-300 shadow-xl">
                ADD TO CART
              </button>
            </div>
            <div className="flex justify-between items-start px-4">
              <div>
                <h3 className="font-serif text-2xl">The White Nomad</h3>
                <p className="text-sm text-primary/70 font-body mt-2">Giclée Print on Hahnemühle Paper</p>
              </div>
              <span className="font-body font-medium">€145.00</span>
            </div>
          </div>
          {/* Product 2 */}
          <div className="flex flex-col">
            <div className="bg-white/5 backdrop-blur-sm p-4 md:p-8 mb-10 group relative border border-primary/10 hover:border-primary/30 transition-colors duration-500">
              <div className="aspect-[3/4] shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                <img alt="Blue Hour Peaks" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR4dUe3rqoW41bJh9anc8jXynO_U5OqiG3y4zWafp7DsVDn01wI6R0n3OTi701l8UJWuC-mN81vYXXWm0RfTCJNfUemyDTkr-58QembaUTEIB0G1HO6ra8R8nJC3W7FC9x3Ensq0tRKJtfcg7KVC1ZJ12uMJnXX6HW33ZCQhrcZ7714tfjmKPh_dX-iuAPq1TcmmIDw98jWDGZcpthATimzvWThuiLH_GjutHm-8_8ooXgFwq7DsgjBqHuUM0XoZWFQD4ggXF3phw" />
              </div>
              <button className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-primary/30 text-primary font-label px-8 py-4 text-xs tracking-widest opacity-0 group-hover:opacity-100 hover:bg-white/30 hover:border-primary transition-all duration-300 shadow-xl">
                ADD TO CART
              </button>
            </div>
            <div className="flex justify-between items-start px-4">
              <div>
                <h3 className="font-serif text-2xl">Blue Hour Peaks</h3>
                <p className="text-sm text-primary/70 font-body mt-2">Limited Edition Framed</p>
              </div>
              <span className="font-body font-medium">€380.00</span>
            </div>
          </div>
          {/* Product 3 */}
          <div className="flex flex-col">
            <div className="bg-white/5 backdrop-blur-sm p-4 md:p-8 mb-10 group relative border border-primary/10 hover:border-primary/30 transition-colors duration-500">
              <div className="aspect-[3/4] shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                <img alt="Icy Shore" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIJvI71ao0FxEdnvqOQai53fg6F17Zwgc1-hvHQ0b3qyR15tfzePwxChOkaDtK5Tn91QJMLczQUCNu91ttvu3DrgkZs1mGArcGHbZgpcXp1FdqtnUL7_ZxPVbSzCi154BmD_407qfXoa3VAZVcCtQ-ScIpLX55Fg-wo1Ki8XucpHJl9A002tdm_mcrv8dsp_d2WA_g6vndxw0rOaSNpM5-61GPcD31mzPvuzhDv33oZU0gCDJooD2OyND-qVfRHFrRSOYC7-j3INo" />
              </div>
              <button className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-primary/30 text-primary font-label px-8 py-4 text-xs tracking-widest opacity-0 group-hover:opacity-100 hover:bg-white/30 hover:border-primary transition-all duration-300 shadow-xl">
                ADD TO CART
              </button>
            </div>
            <div className="flex justify-between items-start px-4">
              <div>
                <h3 className="font-serif text-2xl">Glacial Fragility</h3>
                <p className="text-sm text-primary/70 font-body mt-2">Framed in Black Metal</p>
              </div>
              <span className="font-body font-medium">€295.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterpieceEditions;
