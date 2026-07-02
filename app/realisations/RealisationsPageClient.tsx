"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import CaseStudyCard from "@/components/CaseStudyCard";
import PageHero, { PageCTA } from "@/components/PageHero";
import { serviceCategories } from "@/data/content";
import { realisations } from "@/data/realisations";

export default function RealisationsPageClient() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? realisations : realisations.filter((r) => r.category === active);

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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <FadeUp key={project.slug} delay={index * 0.05}>
                <CaseStudyCard project={project} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
