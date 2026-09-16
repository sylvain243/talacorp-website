"use client";

import Image from "next/image";
import { BarChart3 } from "lucide-react";
import ConsultationButton from "@/components/ConsultationButton";
import FadeUp from "@/components/FadeUp";
import { heroContent, stats } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative -mt-2 min-h-[68vh] overflow-hidden sm:min-h-[72vh]">
      {/* Image de fond + dégradé marine (style Agenshark) */}
      <Image
        src={heroContent.backgroundImage}
        alt="Équipe Talacorp, agence digitale à Kinshasa"
        fill
        priority
        quality={75}
        className="object-cover object-center"
        sizes="(max-width: 1920px) 100vw, 1920px"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55"
        aria-hidden="true"
      />

      <div className="container-main relative z-10 flex min-h-[68vh] items-center px-4 pb-10 pt-20 sm:min-h-[72vh] sm:px-6 sm:pb-12 sm:pt-24 lg:px-8">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contenu aligné à gauche */}
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
              {heroContent.titleBefore}{" "}
              <span className="text-gold">{heroContent.titleHighlight}</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-7">
              <ConsultationButton className="inline-flex gap-2" />
            </div>
          </FadeUp>

          {/* Carte flottante (comme Agenshark) */}
          <FadeUp delay={0.15} className="hidden lg:block">
            <div className="ml-auto w-full max-w-xs rounded-card bg-white p-6 shadow-2xl">
              <div className="flex -space-x-2">
                {["MK", "JK", "PL"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-navy text-xs font-semibold text-gold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-lg font-semibold text-navy">{stats[0].value} projets livrés</p>
              <p className="text-sm text-navy/60">{stats[1].value} clients satisfaits</p>
              <div className="mt-5 flex items-end gap-1.5" aria-hidden="true">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-3 rounded-sm bg-gold"
                    style={{ height: `${h}px` }}
                  />
                ))}
                <BarChart3 className="mb-1 ml-2 text-navy/30" size={20} />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
