"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-poppins)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-4 text-muted max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
