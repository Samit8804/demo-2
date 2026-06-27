"use client";

import { GraduationCap, Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-data";
import { RippleButton } from "@/components/ui/ripple-button";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Facilities", href: "#facilities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const courseLinks = [
  { label: "Primary Classes", href: "#courses" },
  { label: "Middle School", href: "#courses" },
  { label: "High School", href: "#courses" },
  { label: "Olympiad Prep", href: "#courses" },
  { label: "English Speaking", href: "#courses" },
];

const socialIcons = [
  { label: "Facebook", href: siteConfig.socialLinks.facebook, icon: "facebook" },
  { label: "Instagram", href: siteConfig.socialLinks.instagram, icon: "instagram" },
  { label: "YouTube", href: siteConfig.socialLinks.youtube, icon: "youtube" },
];

export function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-96 h-96 bg-primary/10 top-0 left-0" />
        <div className="blob w-96 h-96 bg-secondary/10 bottom-0 right-0" />
      </div>

      <div className="glass rounded-t-[48px] border-b-0 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-5">
              <a href="#home" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-foreground" />
                </div>
                <span className="font-extrabold text-lg font-[family-name:var(--font-poppins)]">
                  <span className="gradient-text">ASLC</span>
                </span>
              </a>
              <p className="text-muted text-sm leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="flex gap-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-muted hover:text-foreground transition-all"
                  >
                    {social.icon === "facebook" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    )}
                    {social.icon === "youtube" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-sm uppercase tracking-wider text-muted mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-sm uppercase tracking-wider text-muted mb-5">
                Courses
              </h3>
              <ul className="space-y-3">
                {courseLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-sm uppercase tracking-wider text-muted">
                Contact Info
              </h3>
              <div className="space-y-3">
                <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-3 text-sm text-muted hover:text-foreground transition-colors group">
                  <Phone className="w-4 h-4 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-sm text-muted hover:text-foreground transition-colors group">
                  <Mail className="w-4 h-4 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  {siteConfig.email}
                </a>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{siteConfig.address.full}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p>Mon-Fri: {siteConfig.workingHours.weekdays}</p>
                    <p>Sat: {siteConfig.workingHours.saturday}</p>
                    <p>Sun: {siteConfig.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
              <RippleButton className="text-xs px-5 py-2.5 w-full">
                Call Now
              </RippleButton>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
