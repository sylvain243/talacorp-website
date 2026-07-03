"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

export const CAROUSEL_PER_SLIDE = 2;

export function chunkItems<T>(items: T[], size: number): T[][] {
  const slides: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    slides.push(items.slice(i, i + size));
  }
  return slides;
}

interface TwoColumnCarouselProps {
  slides: ReactNode[][];
  resetKey?: string;
  ariaLabel?: string;
}

export default function TwoColumnCarousel({
  slides,
  resetKey,
  ariaLabel = "Carrousel",
}: TwoColumnCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0);
  }, [resetKey]);

  const goTo = useCallback(
    (index: number) => {
      if (slides.length === 0) return;
      setActiveSlide((index + slides.length) % slides.length);
    },
    [slides.length],
  );

  if (slides.length === 0) return null;

  return (
    <div className="relative mx-auto max-w-5xl" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${resetKey ?? "default"}-${activeSlide}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-6 sm:grid-cols-2"
            aria-live="polite"
          >
            {slides[activeSlide].map((node, index) => (
              <div key={index} className="h-full">
                {node}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(activeSlide - 1)}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-md transition-colors hover:bg-cream sm:-left-5"
            aria-label="Slide précédent"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeSlide + 1)}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-md transition-colors hover:bg-cream sm:-right-5"
            aria-label="Slide suivant"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-pill transition-all ${
                  index === activeSlide ? "w-8 bg-gold" : "w-2.5 bg-navy/20 hover:bg-navy/40"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
