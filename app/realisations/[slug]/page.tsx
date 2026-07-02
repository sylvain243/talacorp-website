import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { PageCTA } from "@/components/PageHero";
import { getRealisationBySlug, realisations } from "@/data/realisations";

interface RealisationPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: RealisationPageProps) {
  const project = getRealisationBySlug(params.slug);
  if (!project) return { title: "Réalisation introuvable" };
  return { title: project.title, description: project.challenge };
}

export default function RealisationDetailPage({ params }: RealisationPageProps) {
  const project = getRealisationBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <section className="section-padding bg-navy">
        <div className="container-main">
          <FadeUp>
            <Link
              href="/realisations"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Retour aux réalisations
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-pill bg-gold/20 px-4 py-1 text-sm font-medium text-gold">
                {project.categoryLabel}
              </span>
              <span className="text-sm text-white/50">{project.date}</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-2 text-lg text-white/60">Client : {project.client}</p>
          </FadeUp>
        </div>
      </section>

      <div
        className="mx-auto max-w-5xl px-4 sm:px-6"
        style={{ marginTop: "-2rem" }}
      >
        <FadeUp>
          <div
            className="flex h-64 items-end rounded-card p-8 sm:h-80"
            style={{ backgroundColor: project.coverColor }}
          >
            <span className="rounded-pill bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              {project.resultHighlight}
            </span>
          </div>
        </FadeUp>
      </div>

      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl space-y-16">
          <FadeUp>
            <h2 className="text-2xl font-semibold text-navy">Le défi</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">{project.challenge}</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-2xl font-semibold text-navy">Notre approche</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">{project.approach}</p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h2 className="text-2xl font-semibold text-navy">Les résultats</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="rounded-card bg-cream p-6 text-center"
                >
                  <p className="text-3xl font-semibold text-gold">{result.value}</p>
                  <p className="mt-2 text-sm text-navy/70">{result.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-main">
          <FadeUp className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-navy">Galerie</h2>
          </FadeUp>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.gallery.map((item, index) => (
              <FadeUp key={item.label} delay={index * 0.1}>
                <div
                  className="flex h-40 items-end rounded-card p-4 sm:h-48"
                  style={{ backgroundColor: item.color }}
                >
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {project.testimonial && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <FadeUp>
              <blockquote className="mx-auto max-w-2xl rounded-card border border-navy/10 bg-cream p-8 text-center">
                <div className="flex justify-center gap-1" aria-label="5 étoiles">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 font-serif text-lg italic text-navy/80">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="font-semibold text-navy">{project.testimonial.name}</p>
                  <p className="text-sm text-navy/60">{project.testimonial.role}</p>
                </footer>
              </blockquote>
            </FadeUp>
          </div>
        </section>
      )}

      <PageCTA />
    </>
  );
}
