"use client";

import {
  Wind, Presentation, BookOpen, Monitor, Armchair, Accessibility, Car, ShieldCheck,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { facilities } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  Wind, Presentation, BookOpen, Monitor, Armchair, Accessibility, Car, ShieldCheck,
};

export function Facilities() {
  return (
    <section id="facilities" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Facilities"
          subtitle="State-of-the-art infrastructure designed to provide the best learning environment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {facilities.map((facility) => {
            const Icon = iconMap[facility.icon] || Wind;
            return (
              <GlassCard key={facility.title} className="p-6 sm:p-8 text-center group" tilt glow>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/25 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold font-[family-name:var(--font-poppins)] mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {facility.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
