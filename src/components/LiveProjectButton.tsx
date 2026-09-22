import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';

interface LiveProjectButtonProps {
  url?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  url,
  disabled = false,
  className = "",
  id,
  onClick,
}) => {
  if (disabled || !url) {
    return (
      <div
        id={id}
        className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm text-[#D7E2EA]/50 font-medium uppercase tracking-widest cursor-not-allowed select-none ${className}`}
        title="Internal system / repository architecture (No public live web deployment)"
      >
        <Lock className="w-3.5 h-3.5 opacity-60" />
        <span>Live Project</span>
      </div>
    );
  }

  return (
    <motion.a
      id={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer select-none ${className}`}
    >
      <span>Live Project</span>
      <ExternalLink className="w-3.5 h-3.5" />
    </motion.a>
  );
};
