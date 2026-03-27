import React from 'react';

const BespokeFraming = () => {
  return (
    <section className="py-32 bg-[#faf9f6] text-[#0B1221]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#e6e1e1] p-1 aspect-square">
                <img alt="Oak Frame" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcxdUutIwuuoxHgohZd9CDh9TKTEFO1zbTT_QdLVmNU6fyOyx0nuxg6vTLvAlds4FfCj93NocTpuZgDqjWh4ZXSogoG8uyLoL6qqddgyo-ptwg7r4fqGChyp_xuz6RwBOGT0CcG7qMyTHXwNgZV-cwrYi-uLCyn6fkkUxtLpLW2THirJyOSKpva37b8EgVejLMiXJ9DgMZJpqsJyomt_7GG7yZZQBnFEIrWixeIjYjxKcFQHPOfMZ4SKVjuLr0Fql20cJKXZ_zCA" />
              </div>
              <div className="bg-[#e6e1e1] p-1 aspect-square mt-12">
                <img alt="Workshop" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeg73NQGeVVzxtX6Cof6iotioIVlu-yR7RJu9tLKFo0aE-Klct0NBMnXLbzWiQGXHaMD8YqOXiLBwTpidHNF6iiZuNWBf2_pATbcWb8GSeJ_oZIdhy_Vcddt59Hmf4jxYveOJ5MVxCiCTDCNkLos7GWu57QCh7T20yeCCWZfumqAlArkYoF-1sb_yLNm5rTnMuS3OW4mNp44Qqhl3C6Ylq_Ycvy-GWviY_wlZrNJCtYKfyad_TMi6F8M7Bnq7T8cZFskBukTF9HQY" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#0B1221]/70 font-label tracking-[0.3em] text-xs uppercase mb-6 block">Artisanal Craft</span>
            <h2 className="font-headline text-5xl mb-8">Bespoke Framing</h2>
            <p className="text-[#0B1221]/80 font-body leading-relaxed text-lg mb-12">Every photograph deserves a sanctuary. Our in-house workshop uses only museum-grade materials, hand-finished in Tromsø.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 border-b border-[#0B1221]/10 pb-6">
                <span className="material-symbols-outlined text-4xl font-light">forest</span>
                <div>
                  <h4 className="font-serif text-xl">Scandinavian Oak</h4>
                  <p className="text-sm text-[#0B1221]/70 mt-1">Light, natural, and timeless warmth.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 border-b border-[#0B1221]/10 pb-6">
                <span className="material-symbols-outlined text-4xl font-light">shield</span>
                <div>
                  <h4 className="font-serif text-xl">Sleek Black Metal</h4>
                  <p className="text-sm text-[#0B1221]/70 mt-1">Modern, sharp, and focused precision.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 border-b border-[#0B1221]/10 pb-6">
                <span className="material-symbols-outlined text-4xl font-light">architecture</span>
                <div>
                  <h4 className="font-serif text-xl">Heritage Walnut</h4>
                  <p className="text-sm text-[#0B1221]/70 mt-1">Deep, rich character for legacy pieces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeFraming;
