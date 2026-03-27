import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[921px] flex items-center overflow-hidden bg-[#faf9f6]">
      <div className="absolute inset-0 z-0">
        <img alt="Arctic Fjord" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcMu2xayaF3DoS0uld5iDchizhqM1fy1yEVuCViJT1npKYvZ8hKUZb7xTZrSUwCPr7HXMZJqaz4VYmjSdVdR0MSnDpEYwR-A1EVUWvnjD4Ngwg73XbgRSUWVho9NKqstUr8NCYH7wTlGWgWsOCNn-dznSTulZGMsZUWB1FT78S4Cl8BxoTlWtjhquGUX4kgdmb3uHk_D49GkV6RDLzv1aOHOw_Z5z4zKYtW41jx5q9hA1Zb79GIPL5v_yI_Kf9iTgx25feSvHdY6M" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f6]/90 to-[#faf9f6]/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <span className="text-[#0B1221]/70 font-label tracking-[0.2em] text-sm uppercase mb-4 block">Winter Edition 2024</span>
          <h1 className="text-[#0B1221] font-headline text-5xl md:text-8xl leading-tight mb-8">
            Explore the <br /><span className="italic">Collection</span>
          </h1>
          <button className="bg-[#0B1221] text-white font-label px-10 py-4 text-sm tracking-widest hover:bg-[#1a1f2c] transition-colors duration-300">
            BROWSE THE ARCHIVE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
