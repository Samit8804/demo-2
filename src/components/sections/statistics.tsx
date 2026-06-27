"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, GraduationCap, Star } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const stats = [
  { value: 500, suffix: "+", label: "Students Taught", icon: Users },
  { value: 98, suffix: "%", label: "Success Rate", icon: Award },
  { value: 10, suffix: "+", label: "Expert Teachers", icon: GraduationCap },
  { value: 5, suffix: "★", label: "Parent Rating", icon: Star },
];

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <GlassCard key={stat.label} className="p-6 sm:p-8 text-center" tilt>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-poppins)] gradient-text mb-1">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
