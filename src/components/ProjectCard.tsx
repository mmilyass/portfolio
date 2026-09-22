import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectItem } from '../types';
import { LiveProjectButton } from './LiveProjectButton';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Stacking scale effect: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.96, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full mb-12 sm:mb-16 md:mb-20"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-300"
      >
        {/* Card Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/20">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#B600A8] uppercase">
                {project.number} / 0{totalCards}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/40" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#D7E2EA]/70">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2">
              {project.name}
            </h3>
            <p className="text-[#D7E2EA]/80 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
              {project.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono tracking-wider bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA]/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 shrink-0 self-start lg:self-center mt-2 lg:mt-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-white/5 transition-colors"
                title="View Source Code on GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
            <LiveProjectButton
              id={`live-btn-${project.id}`}
              url={project.liveUrl}
              disabled={!project.hasLiveProject}
            />
          </div>
        </div>

        {/* Card Images: Two-column grid */}
        {/* Bottom row: two-column image grid.
            Left column 40% width with 2 stacked images.
            Right column 60% width with 1 tall image.
            All images have: rounded-[40px] sm:rounded-[50px] md:rounded-[60px].
            Left top image height: clamp(130px, 16vw, 230px).
            Left bottom image height: clamp(160px, 22vw, 340px).
        */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {/* Left Column (40% on md+) */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/10"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.images.leftTop}
                alt={`${project.name} preview thumbnail 1`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/10"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images.leftBottom}
                alt={`${project.name} preview thumbnail 2`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Column (60% on md+) */}
          <div className="md:col-span-6 w-full h-[260px] sm:h-[340px] md:h-auto min-h-[260px] md:min-h-[420px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/10">
            <img
              src={project.images.rightTall}
              alt={`${project.name} main interface showcase`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
