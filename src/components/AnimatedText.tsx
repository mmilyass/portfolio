import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const displayChar = char === " " ? "\u00A0" : char; // non-breaking space

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{displayChar}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text"
      >
        {displayChar}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  id,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(" ");
  const totalChars = text.length;
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      id={id}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto text-[clamp(1rem,2vw,1.35rem)] ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split("");
        const elements = wordChars.map((char) => {
          const charIndex = charCounter++;
          const start = charIndex / totalChars;
          const end = Math.min(1, start + 0.08); // slight overlap for natural smoothness
          return (
            <Character
              key={`char-${charIndex}`}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        });

        // Add space between words
        if (wordIndex < words.length - 1) {
          const spaceIndex = charCounter++;
          const spaceStart = spaceIndex / totalChars;
          const spaceEnd = Math.min(1, spaceStart + 0.08);
          elements.push(
            <span key={`space-${spaceIndex}`} className="inline-block">
              <Character
                char=" "
                progress={scrollYProgress}
                range={[spaceStart, spaceEnd]}
              />
            </span>
          );
        }

        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {elements}
          </span>
        );
      })}
    </p>
  );
};
