"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/site-data";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about After School Learning Center."
        />

        <div className="mt-16 space-y-3">
          <Accordion.Root type="single" collapsible>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
              >
                <Accordion.Item value={`item-${index}`} className="mb-3">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full">
                      <GlassCard className="p-5 w-full text-left flex items-center justify-between gap-4 group" hover>
                        <span className="text-sm font-semibold font-[family-name:var(--font-poppins)]">
                          {item.question}
                        </span>
                        <ChevronDown className="w-4 h-4 shrink-0 text-muted group-data-[state=open]:rotate-180 transition-transform duration-300" />
                      </GlassCard>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                    <div className="px-2 pt-2 pb-3">
                      <p className="text-sm text-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
