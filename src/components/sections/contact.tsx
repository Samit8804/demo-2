"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site-data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  course: z.string().min(1, "Please select a course"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Address", value: siteConfig.address.full },
    {
      icon: Clock,
      label: "Working Hours",
      value: `Mon-Fri: ${siteConfig.workingHours.weekdays}, Sat: ${siteConfig.workingHours.saturday}`,
    },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-primary/10 top-[-10%] right-[-10%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have questions? We would love to hear from you. Reach out to us."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const Content = (
                <GlassCard className="p-5 flex items-start gap-4 group" hover>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-accent/25 transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted mb-0.5">{info.label}</div>
                    <div className="text-sm font-medium">{info.value}</div>
                  </div>
                </GlassCard>
              );
              return info.href ? (
                <a key={info.label} href={info.href}>
                  {Content}
                </a>
              ) : (
                <div key={info.label}>{Content}</div>
              );
            })}

            <GlassCard className="h-[200px] overflow-hidden p-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8!2d77.7!3d28.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU0JzEyLjAiTiA3N8KwNDInMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 20 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                  <p className="text-lg font-semibold">Message Sent!</p>
                  <p className="text-sm text-muted">We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <input
                      {...register("name")}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register("phone")}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("email")}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <select
                      {...register("course")}
                      className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A1A1AA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '16px',
                      }}
                    >
                      <option value="" className="bg-white">Select a Course</option>
                      <option value="primary" className="bg-white">Primary Classes</option>
                      <option value="middle" className="bg-white">Middle School</option>
                      <option value="high" className="bg-white">High School</option>
                      <option value="homework" className="bg-white">Homework Assistance</option>
                      <option value="olympiad" className="bg-white">Olympiad Preparation</option>
                      <option value="english" className="bg-white">English Speaking</option>
                      <option value="other" className="bg-white">Other</option>
                    </select>
                    {errors.course && (
                      <p className="text-xs text-red-400 mt-1">{errors.course.message}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      {...register("message")}
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient w-full py-3.5 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
