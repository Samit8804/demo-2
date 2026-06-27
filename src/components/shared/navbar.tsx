"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/data/site-data";
import { RippleButton } from "@/components/ui/ripple-button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass shadow-lg shadow-black/10"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg font-[family-name:var(--font-poppins)] hidden sm:block">
                <span className="gradient-text">ASLC</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-muted hover:text-foreground rounded-lg hover:bg-black/5 transition-all duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <RippleButton className="hidden sm:inline-flex text-xs px-5 py-2.5">
                Enroll Now
              </RippleButton>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-xl glass hover:bg-black/5 transition-all"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 glass rounded-none mx-0 border-x-0"
          >
            <div className="px-4 py-6 space-y-1">
              {navigationLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-muted hover:text-foreground rounded-xl hover:bg-black/5 transition-all duration-300 font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <RippleButton className="w-full mt-4">Enroll Now</RippleButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
