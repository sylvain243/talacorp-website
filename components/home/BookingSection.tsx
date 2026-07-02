"use client";

import { Award, BarChart3, Users } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import BookingCalendar from "@/components/BookingCalendar";
import { bookingSection, siteConfig } from "@/data/content";

const highlightIcons = [Users, Award, BarChart3];

export default function BookingSection() {
  return (
    <section id={siteConfig.bookingSectionId} className="section-padding bg-navy">
      <div className="container-main">
        <FadeUp className="text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {bookingSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{bookingSection.subtitle}</p>
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {bookingSection.highlights.map((item, index) => {
            const Icon = highlightIcons[index];
            return (
              <FadeUp key={item.title} delay={index * 0.1}>
                <div className="rounded-card border border-white/10 bg-white/5 p-6 text-center">
                  <Icon className="mx-auto text-gold" size={28} aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.3} className="mt-12">
          <BookingCalendar />
        </FadeUp>
      </div>
    </section>
  );
}
