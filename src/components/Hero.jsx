import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[921px] flex items-center overflow-hidden bg-transparent">
      {/* Background is now handled by BackgroundController */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl ">
          <span className="text-primary/80 font-label tracking-[0.2em] text-sm uppercase mb-4 block">Winter Edition 2024</span>
          <h1 className="text-primary font-headline text-5xl md:text-8xl leading-tight mb-8">
            Explore the <br /><span className="italic">Collection</span>
          </h1>
          <button className="bg-white/10 backdrop-blur-md border border-primary/30 text-primary font-label px-10 py-4 text-sm tracking-widest hover:bg-white/20 hover:border-primary transition-all duration-300">
            BROWSE THE ARCHIVE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
