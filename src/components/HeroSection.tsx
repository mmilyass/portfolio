import React from "react";
import { Navbar } from "./Navbar";
import { ContactButton } from "./ContactButton";
import { Magnet } from "./Magnet";
import { FadeIn } from "./FadeIn";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] max-h-[1200px] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]"
      style={{ overflowX: "clip" }}
    >
      {/* 1. Navbar */}
      <Navbar onContactClick={onContactClick} />
      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden text-center select-none z-0 mt-6 sm:mt-4 md:-mt-5 lg:block hidden">
        <FadeIn delay={0.1} y={40} duration={0.8}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i'm ilyas
          </h1>
        </FadeIn>
      </div>
      {/* 3. Hero Portrait with Magnet effect */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-full pointer-events-none flex items-end justify-center">
        {/* <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.1s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="h-full w-full pointer-events-auto flex items-end justify-center"
        >
          <FadeIn
            delay={0.2}
            y={50}
            duration={0.9}
            className="h-full w-full flex items-end justify-center"
          > */}
        {/* <div className="relative group h-full flex items-end justify-center">
              Glow */}
        <div className="absolute -inset-4 bg-gradient-to-t from-[#7621B0]/25 via-[#B600A8]/15 to-transparent blur-3xl -z-10 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

        <img
          src="/assets/images/me.png"
          alt="Ilyass - 3D Developer Portrait & Creative Sculpture"
          className="
            h-full
            w-auto
            max-w-[150vw]
            object-contain
            object-bottom
            drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)]
            opacity-90
          "
          loading="eager"
        />

        {/* <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none" /> */}
      </div>
      {/* </FadeIn>
        </Magnet> */}
      {/* </div>{" "} */}
      {/* 4. Bottom bar */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start gap-3 lg:items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        {/* Left paragraph */}
        <div className=" block lg:hidden">
          <FadeIn delay={0.1} y={40} duration={0.8}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw]">
              Hi, i'm ilyas
            </h1>
          </FadeIn>
        </div>
        <FadeIn delay={0.3} y={20} duration={0.7}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[320px] md:max-w-[400px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
          a full-stack developer focused on building modern, interactive, and memorable web experiences
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.3} y={20} duration={0.7}>
          <ContactButton id="hero-contact-button" onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
