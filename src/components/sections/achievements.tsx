"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/data/site-data";

export function Achievements() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-secondary/10 top-[20%] left-[20%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Our Achievements"
          subtitle="Milestones that reflect our commitment to educational excellence."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard className="p-6 text-center group" tilt glow>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/25 transition-all duration-300">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-amber-600 mb-2 font-[family-name:var(--font-poppins)]">
                    {achievement.year}
                  </div>
                  <h3 className="text-base font-bold font-[family-name:var(--font-poppins)] mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {achievement.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
