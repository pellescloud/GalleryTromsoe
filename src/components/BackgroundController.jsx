import React, { useEffect, useState } from 'react';

const images = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBcMu2xayaF3DoS0uld5iDchizhqM1fy1yEVuCViJT1npKYvZ8hKUZb7xTZrSUwCPr7HXMZJqaz4VYmjSdVdR0MSnDpEYwR-A1EVUWvnjD4Ngwg73XbgRSUWVho9NKqstUr8NCYH7wTlGWgWsOCNn-dznSTulZGMsZUWB1FT78S4Cl8BxoTlWtjhquGUX4kgdmb3uHk_D49GkV6RDLzv1aOHOw_Z5z4zKYtW41jx5q9hA1Zb79GIPL5v_yI_Kf9iTgx25feSvHdY6M', // Hero
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC2un11LoBFnFsbGMVb_y2Gs6xdLhXNKD5qNr5NA4skHaayIe-BQ8EDik1lREmuboI_OyjZ1CV77w4CB_pUot1dp76rn9MJcU6SJyflyoaQXdhhqZD_fM5C8Gm0WRE7qW6LDhgqFd8gZ8uRGhxFM_cWTZAAY_R5AwDRbLQLh2y2hs9mT-0aL-E9n3XANejaHmfd2C3_r-aobmQE8r6w8e8HVGLQipiOy3dg7DK2R15BvgVKi083mtqak3sqOc50eKNy8Fd7gk0fkN4', // Northern Lights
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCOYUgtR-S_d5cks-tm28DIdBVR6X3CL-VMYz-ZvbuSH9ox2914FR4BWqZW4h3VnWQpJfzhg-NwTmVnxz8bvibz1kgw4ftISkH5N03nX8ztZDSUvqYuSXjPXBHkO1XacsrzmwCrWxiJLuzmwl_MrbumuSbKOPIcoVzHqatZsP2KHGvlE1BqhilwnI260iI4HWVYrMsQ0K-4jLHBxecnXeKQwdn6-mxKQehf55q_mgw4PHLeYYBlfy3TRC8TUtC5Al6HqYIKR0m3SIY', // Tromso City
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB-2u5N-ZxbuqJBjEQQvucF8notCPhfjJcjuFhv80NonqpcHF7syGB5ioi25WqcR7kFaLizL4F303oPJM_monA8ySNApL65coGzn60xaqbDKD_fRAZyrj5ikrY9vaTsCS5FTJreD4frqqhtcbRhwx_dmOQ3M548PxaEaCclZ2D1d-ntVoxgbQTr01uq9JCrGp2hzE7MUYmw9i8N9tqHGYVJ1L5tpgMlJ5Qxj0F_NCEh9XUh4KI1xIdVCbn8BhJhHlLtfP8WuUeTW0g', // Fjords
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBeg73NQGeVVzxtX6Cof6iotioIVlu-yR7RJu9tLKFo0aE-Klct0NBMnXLbzWiQGXHaMD8YqOXiLBwTpidHNF6iiZuNWBf2_pATbcWb8GSeJ_oZIdhy_Vcddt59Hmf4jxYveOJ5MVxCiCTDCNkLos7GWu57QCh7T20yeCCWZfumqAlArkYoF-1sb_yLNm5rTnMuS3OW4mNp44Qqhl3C6Ylq_Ycvy-GWviY_wlZrNJCtYKfyad_TMi6F8M7Bnq7T8cZFskBukTF9HQY', // Footer
];

const BackgroundController = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Determine which section we are primarily looking at
      // By dividing document into equal segments for the number of images.
      const maxScroll = Math.max(documentHeight - windowHeight, 1);
      let progress = scrollPosition / maxScroll;

      // Clamp progress
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      setScrollProgress(progress);

      // Calculate the current active index based on progress
      let newIndex = Math.floor(progress * images.length);

      // Adjust if we hit the very bottom
      if (newIndex >= images.length) {
          newIndex = images.length - 1;
      }
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      {images.map((imgSrc, index) => {
        // Simple opacity based on active index
        const isActive = index === activeIndex;
        // Parallax effect: moves up slightly as you scroll down, bounded perfectly to the 10vh buffer
        const parallaxOffsetVh = 10 - (scrollProgress * 20);

        return (
          <div
            key={index}
            className={`absolute inset-[-10%] transition-opacity duration-1000 ease-in-out`}
            style={{
              opacity: isActive ? 1 : 0,
              transform: `translateY(${parallaxOffsetVh}vh)`,
              backgroundImage: `url('${imgSrc}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
             {/* Overlay to ensure text is readable */}
             <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundController;
