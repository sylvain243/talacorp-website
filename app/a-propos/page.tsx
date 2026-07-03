import { Award, Eye, Target } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero, { PageCTA } from "@/components/PageHero";
import BookingCalendar from "@/components/BookingCalendar";
import { aboutContent, siteConfig } from "@/data/content";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "À propos",
  description: "Découvrez Talacorp, l'agence de croissance qui parle congolais à Kinshasa.",
  path: "/a-propos",
});

const valueIcons = [Target, Eye, Award];

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutContent.heroTitle} subtitle={aboutContent.heroSubtitle} />

      <section className="section-padding bg-white">
        <div className="container-main grid gap-12 lg:grid-cols-2">
          <FadeUp>
            <p className="section-eyebrow">Notre mission</p>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">{aboutContent.mission}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="section-eyebrow">Notre vision</p>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">{aboutContent.vision}</p>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-main">
          <FadeUp className="mb-12 text-center">
            <p className="section-eyebrow">Nos valeurs</p>
            <h2 className="section-title mt-3">Ce qui nous guide au quotidien</h2>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-3">
            {aboutContent.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <FadeUp key={value.title} delay={index * 0.1}>
                  <article className="rounded-card bg-white p-8 text-center">
                    <Icon className="mx-auto text-gold" size={32} aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-semibold text-navy">{value.title}</h3>
                    <p className="mt-3 text-sm text-navy/70">{value.description}</p>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section id={siteConfig.bookingSectionId} className="section-padding bg-navy">
        <div className="container-main">
          <FadeUp className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Rencontrons-nous
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              30 minutes pour discuter de vos objectifs, sans engagement.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <BookingCalendar />
          </FadeUp>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
