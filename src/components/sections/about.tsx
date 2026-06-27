"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { RippleButton } from "@/components/ui/ripple-button";
import { aboutHighlights } from "@/data/site-data";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-96 h-96 bg-secondary/10 top-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="p-6 sm:p-8 relative overflow-hidden group" tilt>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <GraduationCap className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                  <p className="text-lg font-semibold font-[family-name:var(--font-poppins)]">Since 2021</p>
                  <p className="text-sm text-muted">Years of Excellence</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[family-name:var(--font-poppins)] leading-tight">
              Shaping the Future of <span className="gradient-text">Education</span>
            </h2>

            <p className="text-muted leading-relaxed">
              At After School Learning Center, we believe every child has unique potential waiting to be
              discovered. Our mission is to provide a nurturing environment where students not only excel
              academically but also develop essential life skills, confidence, and a genuine love for learning.
            </p>

            <p className="text-muted leading-relaxed">
              Founded with a vision to transform after-school education, we combine experienced faculty,
              innovative teaching methods, and personalized attention to help every student achieve their
              best. We are committed to making quality education accessible and affordable for all.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {aboutHighlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <RippleButton className="mt-4 px-8 py-4 text-base">
              Know More
            </RippleButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
