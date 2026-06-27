"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryCategories, galleryImages } from "@/data/site-data";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const heights = ["h-64", "h-80", "h-56", "h-72", "h-60", "h-96", "h-64", "h-72", "h-56", "h-80", "h-64", "h-60"];

  return (
    <section id="gallery" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle="A glimpse into the vibrant life at After School Learning Center."
        />

        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "glass text-foreground shadow-lg shadow-amber-500/10"
                  : "text-muted hover:text-foreground hover:bg-black/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="masonry-grid">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="masonry-item"
              >
                <GlassCard
                  className={`${heights[index % heights.length]} relative overflow-hidden cursor-pointer group`}
                  hover
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="w-full h-full rounded-[20px] bg-gradient-to-br from-primary/10 via-accent/10 to-yellow-100 flex items-center justify-center">
                    <p className="text-sm text-muted">{image.alt}</p>
                  </div>
                  <div className="absolute inset-0 rounded-[20px] bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Expand className="w-8 h-8 text-white" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong p-4 sm:p-6 max-w-3xl w-full"
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-black/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                <p className="text-lg text-muted">{galleryImages[selectedImage]?.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
