import React from 'react';

const CuratedSeries = () => {
  return (
    <section className="py-24 bg-transparent text-white drop-shadow-md">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl mb-4">Curated Series</h2>
            <p className="text-white/80 max-w-md font-body leading-relaxed">Specific perspectives on the North, hand-selected by our resident curators to bring the Arctic silence into your home.</p>
          </div>
          <a className="text-sm font-label tracking-widest uppercase border-b border-white pb-1 hover:text-white/70 transition-colors" href="#">View All Series</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Collection 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-6 relative border border-white/20 bg-white/5 backdrop-blur-sm p-4">
              <img alt="Northern Lights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2un11LoBFnFsbGMVb_y2Gs6xdLhXNKD5qNr5NA4skHaayIe-BQ8EDik1lREmuboI_OyjZ1CV77w4CB_pUot1dp76rn9MJcU6SJyflyoaQXdhhqZD_fM5C8Gm0WRE7qW6LDhgqFd8gZ8uRGhxFM_cWTZAAY_R5AwDRbLQLh2y2hs9mT-0aL-E9n3XANejaHmfd2C3_r-aobmQE8r6w8e8HVGLQipiOy3dg7DK2R15BvgVKi083mtqak3sqOc50eKNy8Fd7gk0fkN4" />
              <div className="absolute inset-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-label tracking-widest border border-white px-6 py-2">EXPLORE</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl">Northern Lights</h3>
            <p className="text-sm text-white/70 mt-2">The Celestial Dance of the Aurora</p>
          </div>
          {/* Collection 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-6 relative border border-white/20 bg-white/5 backdrop-blur-sm p-4">
              <img alt="Tromsø City" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOYUgtR-S_d5cks-tm28DIdBVR6X3CL-VMYz-ZvbuSH9ox2914FR4BWqZW4h3VnWQpJfzhg-NwTmVnxz8bvibz1kgw4ftISkH5N03nX8ztZDSUvqYuSXjPXBHkO1XacsrzmwCrWxiJLuzmwl_MrbumuSbKOPIcoVzHqatZsP2KHGvlE1BqhilwnI260iI4HWVYrMsQ0K-4jLHBxecnXeKQwdn6-mxKQehf55q_mgw4PHLeYYBlfy3TRC8TUtC5Al6HqYIKR0m3SIY" />
              <div className="absolute inset-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-label tracking-widest border border-white px-6 py-2">EXPLORE</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl">Tromsø City</h3>
            <p className="text-sm text-white/70 mt-2">Arctic Urbanism & Polar Life</p>
          </div>
          {/* Collection 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-6 relative border border-white/20 bg-white/5 backdrop-blur-sm p-4">
              <img alt="Fjord Landscapes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-2u5N-ZxbuqJBjEQQvucF8notCPhfjJcjuFhv80NonqpcHF7syGB5ioi25WqcR7kFaLizL4F303oPJM_monA8ySNApL65coGzn60xaqbDKD_fRAZyrj5ikrY9vaTsCS5FTJreD4frqqhtcbRhwx_dmOQ3M548PxaEaCclZ2D1d-ntVoxgbQTr01uq9JCrGp2hzE7MUYmw9i8N9tqHGYVJ1L5tpgMlJ5Qxj0F_NCEh9XUh4KI1xIdVCbn8BhJhHlLtfP8WuUeTW0g" />
              <div className="absolute inset-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-label tracking-widest border border-white px-6 py-2">EXPLORE</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl">Fjord Landscapes</h3>
            <p className="text-sm text-white/70 mt-2">Silent Monoliths of the Sea</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedSeries;
