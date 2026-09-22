import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  id?: string;
  size?: 'normal' | 'large';
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = "",
  id = "resume-btn",
  size = "normal",
  label = "View Resume",
}) => {
  return (
    <motion.button
      id={id}
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full text-white font-medium uppercase tracking-widest cursor-pointer select-none transition-shadow ${
        size === "large"
          ? "px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base"
          : "px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm"
      } ${className}`}
      style={{
        background: 'black',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      <FileText className="w-4 h-4" />
      <span>{label}</span>
    </motion.button>
  );
};
