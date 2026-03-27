import React from 'react';

const LoupeFeature = () => {
  return (
    <section className="py-24 bg-surface-container-high overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <img alt="Detail view" className="w-full shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4wx4QEYF502I2Pqgi7dqOcMzGZp3kBOq4SzrTccQZf7omT64utB0nR--qhyFiSMzHa2yJhC0Ou2TFhH4-fXiDVq7Zk1J84wC8dIvETystkcOodef280BTR93dwFXB3TcrQ49OGtWhk3RDtlVNwzEwq5gLeqc40LGD2aXJBd3SVozbe6o8Bq8KQ_Gb1wEqsWdqHIhD201YejNirXuAd8IP3XdncCTUdxZ6Hu3W6o5WXJI4nYEVtZ0dIhsdnTBPjs4w3d85z-12nqY" />
            {/* Glass Loupe Overlay */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center bg-white/20 shadow-xl scale-110">
              <p className="text-[10px] font-label text-primary text-center leading-tight tracking-widest px-2">ULTRA-HD <br /> DETAIL</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl text-primary mb-6">Museum Grade Giclée</h2>
            <p className="text-on-surface-variant font-body mb-8 leading-relaxed">We print exclusively on archival 310gsm paper using 12-color pigment inks. The result is a depth of color that mimics the actual polar atmosphere.</p>
            <button className="bg-primary text-white font-label px-12 py-5 tracking-[0.2em] text-xs hover:bg-primary-container transition-all">LEARN OUR PROCESS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoupeFeature;
