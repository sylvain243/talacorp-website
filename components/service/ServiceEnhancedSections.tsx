"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import ConsultationButton from "@/components/ConsultationButton";
import FadeUp from "@/components/FadeUp";
import type { Service } from "@/data/content";
import { stats } from "@/data/content";
import { getRealisationsBySlugs } from "@/data/realisations";

interface ServiceEnhancedSectionsProps {
  service: Service;
}

export default function ServiceEnhancedSections({ service }: ServiceEnhancedSectionsProps) {
  const caseStudies = service.caseStudySlugs
    ? getRealisationsBySlugs(service.caseStudySlugs)
    : [];

  return (
    <>
      {service.problem && service.promise && (
        <section className="section-padding bg-cream">
          <div className="container-main grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <p className="section-eyebrow">Le constat</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-navy sm:text-3xl">
                Vous reconnaissez cette situation ?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/75">{service.problem}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-card border border-gold/30 bg-white p-8 shadow-sm sm:p-10">
                {service.subBrand && (
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                    {service.subBrand}
                  </p>
                )}
                <p className="mt-3 text-xl font-semibold leading-relaxed text-navy sm:text-2xl">
                  {service.promise}
                </p>
                {service.consultationCta && (
                  <div className="mt-8">
                    <ConsultationButton label={service.consultationCta} />
                  </div>
                )}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {service.whyTalacorp && service.whyTalacorp.length > 0 && (
        <section className="section-padding bg-navy">
          <div className="container-main">
            <FadeUp className="text-center">
              <p className="section-eyebrow">Pourquoi Talacorp</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                L&apos;agence qui exécute, pas seulement qui conseille
              </h2>
            </FadeUp>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {service.whyTalacorp.map((point, index) => (
                <FadeUp key={point.title} delay={index * 0.08}>
                  <div className="rounded-card border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold text-gold">{point.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{point.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.2} className="mt-10 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-semibold text-gold sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </FadeUp>
          </div>
        </section>
      )}

      {caseStudies.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <FadeUp className="mb-10 text-center">
              <p className="section-eyebrow">Résultats concrets</p>
              <h2 className="section-title mt-3">Des projets similaires, des chiffres réels</h2>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((project, index) => (
                <FadeUp key={project.slug} delay={index * 0.1}>
                  <CaseStudyCard project={project} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-main">
            <FadeUp className="mb-10 text-center">
              <p className="section-eyebrow">Questions fréquentes</p>
              <h2 className="section-title mt-3">Tout ce que vous voulez savoir</h2>
            </FadeUp>
            <div className="mx-auto max-w-3xl space-y-3">
              {service.faqs.map((faq, index) => (
                <FadeUp key={faq.question} delay={index * 0.06}>
                  <FaqItem question={faq.question} answer={faq.answer} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-card border border-navy/10 bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-navy">{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="border-t border-navy/5 px-5 py-4 text-sm leading-relaxed text-navy/70">
          {answer}
        </div>
      )}
    </div>
  );
}
