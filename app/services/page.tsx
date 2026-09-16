import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero, { PageCTA } from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import { services, stats, statsNote } from "@/data/content";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Stratégie, marketing, transformation digitale et branding : nos expertises à Kinshasa.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="4 leviers pour faire décoller votre entreprise"
        subtitle="De la stratégie à l'exécution : une expertise complète, pensée pour le marché congolais."
      />

      <section className="border-b border-navy/10 bg-cream py-10">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-semibold text-navy sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-navy/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-navy/50 sm:text-sm">
            {statsNote}{" "}
            <Link href="/realisations" className="font-medium text-gold hover:text-gold-dark">
              Voir les réalisations
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main space-y-8">
          {services.map((service, index) => (
            <FadeUp key={service.slug} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-card border border-navy/10 bg-cream transition-all hover:shadow-lg">
                <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                  <div className="relative min-h-[220px] md:min-h-[280px]">
                    <Image
                      src={service.heroImage}
                      alt={`${service.title}, service Talacorp Kinshasa`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-navy/10 md:to-navy/60"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-0 left-0 p-6 md:hidden">
                      <ServiceIcon icon={service.icon} variant="gold" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                    <div className="hidden md:block">
                      <ServiceIcon icon={service.icon} />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-gold md:mt-5">
                      {service.subBrand ? `${service.subBrand} · ` : ""}
                      {service.tagline}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-navy">{service.title}</h2>
                    <p className="mt-4 leading-relaxed text-navy/70">{service.intro}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-all group-hover:gap-2"
                    >
                      Découvrir ce service
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <PageCTA />
    </>
  );
}
