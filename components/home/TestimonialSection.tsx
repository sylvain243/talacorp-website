"use client";

import { Star } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { homeTestimonial } from "@/data/content";

export default function TestimonialSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <FadeUp className="mb-10 text-center">
          <p className="section-eyebrow">TÉMOIGNAGE CLIENT</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <blockquote className="mx-auto max-w-3xl rounded-card border border-navy/10 bg-cream p-8 text-center sm:p-12">
            <div className="flex justify-center gap-1" aria-label="5 étoiles sur 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-navy/80 sm:text-2xl">
              &ldquo;{homeTestimonial.quote}&rdquo;
            </p>
            <footer className="mt-8 flex items-center justify-center gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold"
                aria-hidden="true"
              >
                {homeTestimonial.initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-navy">{homeTestimonial.name}</p>
                <p className="text-sm text-navy/60">{homeTestimonial.role}</p>
              </div>
            </footer>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  );
}
