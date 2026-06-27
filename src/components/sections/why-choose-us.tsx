"use client";

import { motion } from "framer-motion";
import {
  Heart, BarChart, Award, Laptop, Shield, IndianRupee, TrendingUp, RefreshCw,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  Heart, BarChart, Award, Laptop, Shield, IndianRupee, TrendingUp, RefreshCw,
};

export function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-secondary/10 top-[20%] right-[20%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What makes After School Learning Center the preferred choice for parents and students."
        />

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-amber-500 hidden lg:block" />

          <div className="space-y-8">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon] || Heart;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-start gap-6 lg:gap-10 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className="hidden lg:flex shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center z-10">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <GlassCard className="flex-1 p-6 sm:p-8" glow hover>
                    <div className="flex items-start gap-4">
                      <div className="lg:hidden w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-[family-name:var(--font-poppins)] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
