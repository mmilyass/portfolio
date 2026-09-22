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
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip flex flex-col gap-40 md:gap-50 lg:gap-60"
      style={{ overflowX: "clip" }}
    >
      {/* 1. HeroSection */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. MarqueeSection */}
      <div className="flex flex-col gap-40  lg:gap-50">
        {/* 3. AboutSection */}
        <AboutSection onContactClick={() => setIsContactOpen(true)} />

        {/* 4. ServicesSection (Skills) */}
        <ServicesSection />

        {/* 5. ProjectsSection */}
        <ProjectsSection />
      </div>
      {/* Footer */}
      <div className=" w-full flex flex-col gap-2 md:gap-5 lg:gap-10">
        <Footer onContactClick={() => setIsContactOpen(true)} />
        {/* <MarqueeSection /> */}
      </div>
      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
