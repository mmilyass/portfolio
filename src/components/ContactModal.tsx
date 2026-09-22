import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  Mail,
  Copy,
  Check,
  Github,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Terminal,
  Linkedin,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const email = "ilyassmeftah06@gmail.com";
  const github = "https://github.com/mmilyass";
  const linkedin = "https://www.linkedin.com/in/ilyass-meftah-el-menani-917841362/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/images/resume.pdf";
    link.download = "Ilyass_Meftah_Frontend_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[44px] text-[#D7E2EA] z-10 shadow-2xl overflow-hidden"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#0C0C0C]/90 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h3 className="hero-heading text-lg sm:text-xl font-bold uppercase tracking-tight">
                    Ilyass Meftah — Resume
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider">
                    Frontend Developer &bull; 1337 Student
                  </p>
                </div>
              </div>

              {/* Action Buttons: Download, Print, Close */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  id="download-resume-btn"
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                    boxShadow:
                      "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                    outline: "2px solid #FFFFFF",
                    outlineOffset: "-3px",
                  }}
                >
                  {downloadSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </>
                  )}
                </button>

                <button
                  id="close-resume-modal-btn"
                  onClick={onClose}
                  className="p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Resume Content */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:text-black">
              {/* Resume Sheet Header */}
              <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                    Ilyass Meftah
                  </h1>
                  <p className="hero-heading text-lg sm:text-xl font-bold uppercase tracking-wider mt-1">
                    Frontend Developer
                  </p>
                </div>

                {/* Direct Contact Pills */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 transition-colors text-[#D7E2EA]"
                    title="Click to copy email"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
                    <span>{email}</span>
                    {copied ? (
                      <Check className="w-3 h-3 text-emerald-400 ml-1" />
                    ) : (
                      <Copy className="w-3 h-3 text-[#D7E2EA]/60 ml-1" />
                    )}
                  </button>

                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 transition-colors text-[#D7E2EA]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                  </a>

                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 transition-colors text-[#D7E2EA]"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Linkedin</span>
                    <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs uppercase font-bold tracking-widest text-[#B600A8] mb-2 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>About &amp; Summary</span>
                </h2>
                <p className="text-sm sm:text-base text-[#D7E2EA]/90 font-light leading-relaxed">
                  Frontend developer focused on building modern, interactive,
                  and memorable web experiences. 1337 Coding School student who
                  completed the Common Core curriculum. Specialized in Next.js
                  (App Router), React, TypeScript, and Tailwind CSS, combining
                  meticulous UI/UX craftsmanship with robust system fundamentals
                  in C/C++ and network architecture.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs uppercase font-bold tracking-widest text-[#B600A8] mb-3 flex items-center gap-2">
                  <Code className="w-3.5 h-3.5" />
                  <span>Technical Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-2">
                      Frontend Core
                    </span>
                    <p className="text-xs text-[#D7E2EA]/80 leading-relaxed font-light">
                      Next.js (App Router), React 19, TypeScript, JavaScript
                      (ES6+), Tailwind CSS, Framer Motion, Responsive Design
                    </p>
                  </div>

                  <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-2">
                      Systems &amp; Backend
                    </span>
                    <p className="text-xs text-[#D7E2EA]/80 leading-relaxed font-light">
                      C++, C, Sockets API, epoll multiplexing, Non-blocking I/O,
                      HTTP 1.1 protocol, CGI, RESTful APIs
                    </p>
                  </div>

                  <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4 sm:col-span-2 md:col-span-1">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-2">
                      Tools &amp; Workflow
                    </span>
                    <p className="text-xs text-[#D7E2EA]/80 leading-relaxed font-light">
                      Git, GitHub, Docker, Linux/Unix Terminal, Vite, Component
                      Architecture, Figma-to-Code
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs uppercase font-bold tracking-widest text-[#B600A8] mb-3 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Featured Projects</span>
                </h2>

                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                        Waqar Scent
                      </h3>
                      <span className="text-xs text-[#B600A8] font-mono uppercase tracking-wider">
                        Client / E-commerce &bull; React, Tailwind CSS
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed mb-3">
                      A modern fragrance brand website built with React,
                      Tailwind CSS, and a strong focus on Arabic-first visual
                      design, responsive layouts, product presentation, and
                      conversion-focused UI.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "React",
                        "Tailwind CSS",
                        "Arabic-first",
                        "E-commerce UI",
                        "Framer Motion",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-[#D7E2EA]/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                        Transcendence
                      </h3>
                      <span className="text-xs text-[#B600A8] font-mono uppercase tracking-wider">
                        Team Project &bull; Next.js, Tailwind, WebSockets
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed mb-3">
                      A full-scale web application where Ilyass worked on the
                      frontend using Next.js and Tailwind CSS, contributing to
                      the responsive interface, visual design, user experience,
                      and real-time multiplayer synchronization.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "WebSockets",
                        "UI/UX Design",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-[#D7E2EA]/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                        Webserv
                      </h3>
                      <span className="text-xs text-[#B600A8] font-mono uppercase tracking-wider">
                        C/C++ Project &bull; 1337 / 42 School
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed mb-3">
                      A custom HTTP web server built as part of the 1337/42
                      curriculum using C++ and C, demonstrating deep
                      understanding of HTTP protocol, sockets, non-blocking I/O
                      multiplexing with epoll, CGI scripts, and server
                      architecture.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "C++98",
                        "HTTP 1.1",
                        "Sockets",
                        "epoll",
                        "Non-blocking I/O",
                        "CGI",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-[#D7E2EA]/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs uppercase font-bold tracking-widest text-[#B600A8] mb-3 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education</span>
                </h2>
                <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-white uppercase tracking-tight">
                      1337 Coding School (42 Network)
                    </h3>
                    <span className="text-xs text-[#D7E2EA]/70 font-mono">
                      Morocco
                    </span>
                  </div>
                  <p className="text-xs text-[#B600A8] font-medium uppercase tracking-wider mb-2">
                    Common Core Graduate &bull; Software Engineering
                  </p>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                    Intensive peer-to-peer curriculum emphasizing autonomous
                    problem-solving, algorithms, low-level architecture, Unix
                    systems, and modern web application development.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-white/10 bg-[#0C0C0C] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 text-xs text-[#D7E2EA]/60">
                <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
                <span>{email}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
