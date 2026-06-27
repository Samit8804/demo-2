"use client";

import { motion } from "framer-motion";
import {
  BookOpen, Library, GraduationCap, FileCheck, Trophy, Languages,
  Sigma, FlaskConical, Monitor, Sparkles,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { RippleButton } from "@/components/ui/ripple-button";
import { courses } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Library, GraduationCap, FileCheck, Trophy,
  Languages, Sigma, FlaskConical, Monitor, Sparkles,
};

export function Courses() {
  return (
    <section id="courses" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-[600px] h-[600px] bg-primary/5 top-[-20%] left-[-10%]" />
        <div className="blob w-[500px] h-[500px] bg-accent/5 bottom-[-20%] right-[-10%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Our Courses"
          subtitle="Comprehensive learning programs designed to nurture academic excellence and holistic development for every student."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {courses.map((course, index) => {
            const Icon = iconMap[course.icon] || BookOpen;
            return (
              <GlassCard key={course.id} className="p-6 sm:p-8 group" tilt glow>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/25 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-poppins)]">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex gap-4 pt-2">
                    <div className="text-xs text-muted">
                      <span className="text-white/60">Duration:</span> {course.duration}
                    </div>
                    <div className="text-xs text-muted">
                      <span className="text-white/60">Age:</span> {course.ageGroup}
                    </div>
                  </div>
                  <RippleButton className="w-full mt-2 text-xs py-2.5">
                    Enroll Now
                  </RippleButton>
                </motion.div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
