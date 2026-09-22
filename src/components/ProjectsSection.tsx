import React from 'react';
import { FadeIn } from './FadeIn';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const totalCards = PROJECTS_DATA.length;

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C]  z-10 px-5 sm:px-8 md:px-10  pt-8 border-t border-white/20 -mb-20" 
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={30} duration={0.8} className="w-full mb-14 sm:mb-20 md:mb-24 text-center">
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)]">
            Projects
          </h2>
        </FadeIn>

        {/* Sticky-stacking Project Cards */}
        <div className="relative w-full pb-20 sm:pb-28">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={totalCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
