import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import CaseStudyCard from "@/components/CaseStudyCard";
import { realisations } from "@/data/realisations";

export default function RealisationsPreview() {
  const featured = realisations.slice(0, 4);

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

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.1}>
              <CaseStudyCard project={project} />
            </FadeUp>
          ))}
        </div>

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
