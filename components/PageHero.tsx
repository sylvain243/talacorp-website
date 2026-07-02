"use client";

import ConsultationButton from "@/components/ConsultationButton";
import FadeUp from "@/components/FadeUp";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ title, subtitle, dark = true }: PageHeroProps) {
  return (
    <section className={`section-padding ${dark ? "bg-navy text-center" : "bg-cream text-center"}`}>
      <div className="container-main">
        <FadeUp>
          <h1
            className={`text-3xl font-semibold sm:text-4xl lg:text-5xl ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mx-auto mt-4 max-w-2xl text-lg ${
                dark ? "text-white/70" : "text-navy/70"
              }`}
            >
              {subtitle}
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

interface PageCTAProps {
  className?: string;
}

export function PageCTA({ className = "" }: PageCTAProps) {
  return (
    <section className={`section-padding bg-cream text-center ${className}`}>
      <div className="container-main">
        <FadeUp>
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
            Prêt à faire décoller votre entreprise ?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-navy/70">
            Réservez votre consultation gratuite de 30 minutes avec notre équipe.
          </p>
          <div className="mt-8">
            <ConsultationButton />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
