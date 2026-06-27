"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({ text, className, once = true }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once }}>
      {words.map((word, i) => (
        <span key={i} className="inline-block">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.05 + j * 0.02,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.div>
  );
}
