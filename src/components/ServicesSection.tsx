import React from 'react';
import { FadeIn } from './FadeIn';
import { SKILLS_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 z-0 pt-5 border-t border-white/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading styled like ABOUT ME */}
        <FadeIn delay={0} y={30} duration={0.8}>
          <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,160px)]">
            Skills
          </h2>
        </FadeIn>

        {/* 5 skill items with white borders and hero-heading styled numbers */}
        <div className="w-full flex flex-col">
          {SKILLS_DATA.map((skill, index) => (
            <FadeIn
              key={skill.number}
              delay={index * 0.1}
              y={25}
              duration={0.6}
              as="div"
              className="w-full border-b border-white/30 py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-start md:items-center">
                {/* Number on left styled with hero-heading gradient */}
                <span className="hero-heading font-black leading-none shrink-0 text-[clamp(4rem,10vw,140px)] select-none">
                  {skill.number}
                </span>

                {/* Name + Description stacked on right */}
                <div className="flex-1 flex flex-col justify-center max-w-3xl">
                  <h3 className="text-white font-medium uppercase tracking-tight mb-2 sm:mb-3 text-[clamp(1rem,2.2vw,2.1rem)]">
                    {skill.title}
                  </h3>
                  <p className="text-[#D7E2EA]/75 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

