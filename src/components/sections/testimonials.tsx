"use client";

import { Star, Quote } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site-data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-primary/10 top-[-10%] left-[-5%]" />
        <div className="blob w-[400px] h-[400px] bg-accent/10 bottom-[-10%] right-[-5%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="What Parents Say"
          subtitle="Hear from parents whose children have experienced transformative learning at our center."
        />

        <div className="overflow-hidden mt-16" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
              >
                <GlassCard className="p-6 sm:p-8 h-full group relative" glow>
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-amber-700">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-muted">{testimonial.role}</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
