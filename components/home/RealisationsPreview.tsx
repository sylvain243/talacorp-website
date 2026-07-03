"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import CaseStudyCard from "@/components/CaseStudyCard";
import TwoColumnCarousel, { CAROUSEL_PER_SLIDE, chunkItems } from "@/components/TwoColumnCarousel";
import { realisations } from "@/data/realisations";

export default function RealisationsPreview() {
  const slides = chunkItems(
    realisations.map((project) => <CaseStudyCard key={project.slug} project={project} />),
    CAROUSEL_PER_SLIDE,
  );

  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <FadeUp className="mb-12 text-center">
          <p className="section-eyebrow">NOS RÉALISATIONS</p>
          <h2 className="section-title mt-3">
            Des projets concrets, des résultats mesurables
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy/70">
            Découvrez comment nous avons aidé des entreprises congolaises à atteindre leurs
            objectifs de croissance.
          </p>
        </FadeUp>

        <TwoColumnCarousel slides={slides} ariaLabel="Réalisations Talacorp" />

        <FadeUp className="mt-10 text-center">
          <Link
            href="/realisations"
            className="btn-outline-light !border-navy !text-navy hover:!bg-navy hover:!text-white"
          >
            Voir toutes nos réalisations
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
