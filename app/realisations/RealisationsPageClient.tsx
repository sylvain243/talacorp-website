"use client";

import Image from "next/image";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import CaseStudyCard from "@/components/CaseStudyCard";
import PageHero, { PageCTA } from "@/components/PageHero";
import TwoColumnCarousel, { CAROUSEL_PER_SLIDE, chunkItems } from "@/components/TwoColumnCarousel";
import { serviceCategories } from "@/data/content";
import { categoryCoverImages, realisations, type RealisationCategory } from "@/data/realisations";

export default function RealisationsPageClient() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? realisations : realisations.filter((r) => r.category === active);

  const activeCategory = serviceCategories.find((c) => c.id === active);

  const slides = chunkItems(
    filtered.map((project) => (
      <CaseStudyCard key={project.slug} project={project} showWebsitePreview />
    )),
    CAROUSEL_PER_SLIDE,
  );

  return (
    <>
      <PageHero
        title="Nos réalisations"
        subtitle="Des projets concrets, des résultats mesurables."
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <FadeUp className="mb-10 flex flex-wrap justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`rounded-pill px-5 py-2 text-sm font-medium transition-all ${
                  active === cat.id
                    ? "bg-navy text-white"
                    : "bg-cream text-navy/70 hover:bg-navy/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </FadeUp>

          {active !== "all" && activeCategory && (
            <FadeUp className="mb-10 overflow-hidden rounded-card">
              <div className="relative h-40 sm:h-48">
                <Image
                  src={categoryCoverImages[active as RealisationCategory]}
                  alt={`${activeCategory.label}, réalisations Talacorp`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
                <div className="absolute inset-0 flex items-center px-8">
                  <div>
                    <p className="section-eyebrow !text-gold-light">Catégorie</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                      {activeCategory.label}
                    </h2>
                  </div>
                </div>
              </div>
            </FadeUp>
          )}

          <TwoColumnCarousel
            slides={slides}
            resetKey={active}
            ariaLabel="Portfolio des réalisations"
          />
        </div>
      </section>

      <PageCTA />
    </>
  );
}
