import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-12 sm:py-16 text-[#D7E2EA] z-20 -mt-40"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="hero-heading font-black text-2xl tracking-tight uppercase">
            Ilyass
          </span>
          <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 mt-1">
            Frontend Developer &bull; 1337 Coding School Student
          </p>
          <p className="text-xs text-[#D7E2EA]/40 mt-3">
            &copy; {new Date().getFullYear()} Ilyass. Crafted with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>

        {/* Middle action links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mmilyass"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-[#D7E2EA] border border-white/10 transition-colors"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ilyass-meftah-el-menani-917841362/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-[#D7E2EA] border border-white/10 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={onContactClick}
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-[#D7E2EA] border border-white/10 transition-colors cursor-pointer"
            title="Contact Ilyass"
          >
            <Mail className="w-5 h-5" />
          </button>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
