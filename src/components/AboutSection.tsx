import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { ABOUT_DECORATIVE_ASSETS } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const bioText =
    "I'm Ilyass, a frontend developer and 1337 Coding School student who completed the Common Core. I enjoy building modern and interactive web experiences, with a strong focus on clean interfaces, responsive design, and smooth user experiences. I work mainly with Next.js, React, TypeScript, and Tailwind CSS, and I enjoy turning ideas and designs into real products.";

  return (
    <section
      id="about"
      className="relative w-full min-h-3/4 flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 overflow-hidden "
    >
      {/* {ABOUT_DECORATIVE_ASSETS.map((asset, i) => (
        <div
          key={asset.id}
          className={`absolute ${asset.positionClass} z-0 pointer-events-none select-none`}
        >
          <FadeIn
            delay={0.15 * i}
            y={i % 2 === 0 ? 30 : -30}
            duration={0.9}
          >
            <div
              className={`${asset.sizeClass} relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 opacity-70 sm:opacity-85 hover:opacity-100 transition-opacity duration-500`}
              style={{
                transform: `rotate(${asset.rotation || 0}deg)`,
              }}
            >
              <img
                src={asset.url}
                alt={asset.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
            </div>
          </FadeIn>
        </div>
      ))} */}

      {/* Main Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full mb-8 sm:mb-10 md:mb-12">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph */}
        <div className="w-full mb-10 sm:mb-12 md:mb-14 px-2">
          <AnimatedText
            id="about-bio-text"
            text={bioText}
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20} duration={0.7}>
          <ContactButton
            id="about-contact-button"
            onClick={onContactClick}
            size="large"
          />
        </FadeIn>
      </div>
    </section>
  );
};
