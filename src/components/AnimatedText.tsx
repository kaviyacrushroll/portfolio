import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  // Split by words to keep word boundaries from breaking awkwardly
  const words = text.split(' ');

  let globalCharIndex = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordElements = (
          <span key={`w-${wordIndex}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const currentIdx = globalCharIndex++;
              const start = currentIdx / totalChars;
              const end = Math.min(1, start + 1 / totalChars);
              return (
                <Char
                  key={`c-${wordIndex}-${charIdx}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // If not the last word, append the space character
        let spaceElement: React.ReactNode = null;
        if (wordIndex < words.length - 1) {
          const spaceIdx = globalCharIndex++;
          const start = spaceIdx / totalChars;
          const end = Math.min(1, start + 1 / totalChars);
          spaceElement = (
            <Char
              key={`space-${wordIndex}`}
              char=" "
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        }

        return (
          <React.Fragment key={`group-${wordIndex}`}>
            {wordElements}
            {spaceElement}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
