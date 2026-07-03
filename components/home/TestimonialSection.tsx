"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useState } from "react";
import FadeUp from "@/components/FadeUp";
import { homeTestimonials } from "@/data/content";

const PER_SLIDE = 2;

function chunkTestimonials<T>(items: T[], size: number): T[][] {
  const slides: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    slides.push(items.slice(i, i + size));
  }
  return slides;
}

function TestimonialCard({
  quote,
  name,
  role,
  initials,
}: {
  quote: string;
  name: string;
  role: string;
  initials: string;
}) {
  return (
    <blockquote className="flex h-full flex-col rounded-card bg-gold p-6 shadow-md sm:p-8">
      <div className="flex gap-1" aria-label="5 étoiles sur 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="fill-white text-white" aria-hidden="true" />
        ))}
      </div>
      <p className="mt-4 flex-1 font-serif text-base italic leading-relaxed text-navy sm:text-lg">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-navy/15 pt-6">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-gold"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="font-semibold text-navy">{name}</p>
          <p className="text-sm text-navy/70">{role}</p>
        </div>
      </footer>
    </blockquote>
  );
}

export default function TestimonialSection() {
  const slides = chunkTestimonials(homeTestimonials, PER_SLIDE);
  const [activeSlide, setActiveSlide] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveSlide((index + slides.length) % slides.length);
    },
    [slides.length],
  );

  return (
    <section className="section-padding bg-white" aria-roledescription="carousel">
      <div className="container-main">
        <FadeUp className="mb-12 text-center">
          <p className="section-eyebrow">TÉMOIGNAGES CLIENTS</p>
          <h2 className="section-title mt-3">Ils nous font confiance</h2>
        </FadeUp>

        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid gap-6 sm:grid-cols-2"
                aria-live="polite"
              >
                {slides[activeSlide].map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(activeSlide - 1)}
                className="absolute -left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-md transition-colors hover:bg-cream sm:-left-5"
                aria-label="Témoignages précédents"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeSlide + 1)}
                className="absolute -right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-md transition-colors hover:bg-cream sm:-right-5"
                aria-label="Témoignages suivants"
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
      </div>
    </section>
  );
}
