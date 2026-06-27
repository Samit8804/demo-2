"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, BookOpen, GraduationCap, Target, Star } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const floatingIcons = [
    { Icon: BookOpen, x: "15%", y: "20%", delay: 0, size: 24 },
    { Icon: GraduationCap, x: "85%", y: "25%", delay: 0.5, size: 28 },
    { Icon: Target, x: "10%", y: "70%", delay: 1, size: 20 },
    { Icon: Star, x: "90%", y: "75%", delay: 1.5, size: 22 },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-primary/20 top-[-10%] left-[-5%] animate-float" />
        <div className="blob w-[400px] h-[400px] bg-secondary/15 bottom-[-10%] right-[-5%] animate-float-delayed" />
        <div className="blob w-[300px] h-[300px] bg-accent/10 top-[40%] left-[50%] -translate-x-1/2 animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {floatingIcons.map(({ Icon, x, y, delay, size }) => (
        <motion.div
          key={x}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.8, 1],
            scale: [1, 1.2, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center">
            <Icon className="text-primary" size={size} />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Premium After School Education</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-[family-name:var(--font-poppins)] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Empowering <span className="gradient-text">Young Minds</span>
              <br />
              Beyond School
            </motion.h1>

            <motion.p
              className="mt-6 text-muted text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Personalized Learning | Homework Support | Skill Development | Academic Excellence
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <RippleButton className="px-8 py-4 text-base">
                Enroll Now
              </RippleButton>
              <RippleButton variant="outline" className="px-8 py-4 text-base">
                Explore Courses
              </RippleButton>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { number: "500+", label: "Students" },
                { number: "98%", label: "Success" },
                { number: "10+", label: "Teachers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-lg font-bold font-[family-name:var(--font-poppins)] gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="glass rounded-[32px] p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-yellow-100" />
                <div className="relative z-10">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                    <div className="text-center">
                      <GraduationCap className="w-20 h-20 text-primary/60 mx-auto mb-4" />
                      <p className="text-lg font-semibold font-[family-name:var(--font-poppins)]">Learn & Grow</p>
                      <p className="text-sm text-muted">With ASLC</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-8 h-8 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted" />
      </motion.div>
    </section>
  );
}
