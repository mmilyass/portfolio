import React, { useRef, useEffect, useState } from 'react';
import { MARQUEE_IMAGES_ROW1, MARQUEE_IMAGES_ROW2 } from '../data/portfolioData';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      
      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      
      animationFrameId = requestAnimationFrame(() => {
        setScrollOffset(offset);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Row 1 has first 11 images tripled
  const row1Tripled = [...MARQUEE_IMAGES_ROW1, ...MARQUEE_IMAGES_ROW1, ...MARQUEE_IMAGES_ROW1];
  // Row 2 has remaining 10 images tripled
  const row2Tripled = [...MARQUEE_IMAGES_ROW2, ...MARQUEE_IMAGES_ROW2, ...MARQUEE_IMAGES_ROW2];

  // Base translation shifts so the seamless loop has room to translate without showing empty ends
  const row1Transform = `translate3d(${scrollOffset - 1200}px, 0, 0)`;
  const row2Transform = `translate3d(${-scrollOffset}px, 0, 0)`;

  return (
    <section
      ref={sectionRef}
      id="marquee-section"
      className="relative w-full bg-[#0C0C0C] overflow-hidden select-none"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-10 lg:gap-60 will-change-transform"
          style={{
            transform: row1Transform ,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="w-[100px] h-[100px] shrink-0  overflow-hidden"
            >
              <img
                src={src}
                alt={`3D Design visual showcase ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-10 lg:gap-60 will-change-transform"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="w-[100px] h-[100px] shrink-0 overflow-hidden"
            >
              <img
                src={src}
                alt={`3D Design portfolio render ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover  hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
