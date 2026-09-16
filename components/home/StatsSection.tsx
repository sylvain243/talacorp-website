"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { stats, statsNote } from "@/data/content";

export default function StatsSection() {
  return (
    <section className="bg-cream px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.1} className="text-center">
              <p className="text-2xl font-semibold text-navy sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-navy/60 sm:text-base">{stat.label}</p>
            </FadeUp>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-navy/50 sm:text-sm">
          {statsNote}{" "}
          <Link href="/realisations" className="font-medium text-gold hover:text-gold-dark">
            Voir les réalisations
          </Link>
        </p>
      </div>
    </section>
  );
}
