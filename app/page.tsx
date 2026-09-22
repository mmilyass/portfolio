"use client";

import React, { useState } from "react";
import { HeroSection } from "../src/components/HeroSection";
import { MarqueeSection } from "../src/components/MarqueeSection";
import { AboutSection } from "../src/components/AboutSection";
import { ServicesSection } from "../src/components/ServicesSection";
import { ProjectsSection } from "../src/components/ProjectsSection";
import { Footer } from "../src/components/Footer";
import { ContactModal } from "../src/components/ContactModal";

export default function PortfolioPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main
      id="portfolio-main"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip flex flex-col gap-40"
      style={{ overflowX: "clip" }}
    >
      {/* 1. HeroSection */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. MarqueeSection */}
      <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] pt-10 py-30 border-y border-white/40 flex flex-col gap-40">
        {/* 3. AboutSection */}
        <AboutSection onContactClick={() => setIsContactOpen(true)} />

        {/* 4. ServicesSection (Skills) */}
        <ServicesSection />

        {/* 5. ProjectsSection */}
        <ProjectsSection />

        <MarqueeSection />
      </div>
      {/* Footer */}
      <Footer onContactClick={() => setIsContactOpen(true)} />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
