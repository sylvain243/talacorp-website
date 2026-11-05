import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FeatureBlock from "@/components/site/FeatureBlock";
import MethodSteps from "@/components/site/MethodSteps";
import OfferDownloads from "@/components/site/OfferDownloads";
import Faq from "@/components/site/Faq";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceFaqJsonLd from "@/components/seo/ServiceFaqJsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { BOUTIQUE_HREF, getConsultationHref } from "@/data/content";
import { getNextPole, getPoleBySlug, poles } from "@/data/poles";
import { HeroMedia, Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";

interface PolePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return poles.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PolePageProps) {
  const pole = getPoleBySlug(params.slug);
  if (!pole) return { title: "Pôle introuvable" };
  return buildPageMetadata({
    title: `${pole.title} à Kinshasa`,
    description: pole.metaDescription,
    path: `/services/${pole.slug}`,
  });
}

export default function PolePage({ params }: PolePageProps) {
  const pole = getPoleBySlug(params.slug);
  if (!pole) notFound();
  const next = getNextPole(pole.slug);
  const [heroMain, ...heroRest] = pole.hero.images;

  return (
    <>
      <ServiceFaqJsonLd faqs={pole.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Nos pôles", path: "/services" },
          { name: pole.title, path: `/services/${pole.slug}` },
        ]}
      />

      <section className="bg-navy text-white">
        <div className="container-main flex flex-wrap items-center gap-12 px-4 py-16 sm:px-6 lg:py-20">
          <Stagger onLoad className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <StaggerItem>
              <p className="section-eyebrow-light">
                Pôle {pole.num} · {pole.stage}
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display text-[38px] font-extrabold leading-[1.05] sm:text-[54px]">{pole.hero.title}</h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[19px] leading-relaxed text-[#D5DDE7]">{pole.hero.text}</p>
            </StaggerItem>
            <StaggerItem className="flex flex-wrap gap-3.5">
              <Link href={getConsultationHref()} className="btn-primary">
                {pole.hero.ctaLabel}
              </Link>
              {pole.offers[0] && (
                <a href={`/offres/${pole.offers[0].file}`} download className="btn-outline-light">
                  Télécharger l&apos;offre (PDF)
                </a>
              )}
            </StaggerItem>
          </Stagger>
          <div className={`grid min-w-0 flex-[1_1_500px] gap-3 ${heroRest.length >= 2 ? "grid-cols-2 grid-rows-[170px_170px] sm:grid-rows-[200px_200px]" : "grid-cols-1"}`}>
            <HeroMedia className={`relative overflow-hidden rounded-xl ${heroRest.length >= 2 ? "row-span-2" : "h-[320px] sm:h-[420px]"}`}>
              <Image src={heroMain.src} alt={heroMain.alt} fill priority sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            </HeroMedia>
            {heroRest.length >= 2 &&
              heroRest.slice(0, 2).map((im, i) => (
                <HeroMedia key={im.src} delay={0.15 * (i + 1)} className="relative overflow-hidden rounded-xl">
                  <Image src={im.src} alt={im.alt} fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
                </HeroMedia>
              ))}
          </div>
        </div>
      </section>

      {pole.intro && (
        <section aria-labelledby="intro" className="bg-white">
          <div className="container-main flex flex-col gap-8 px-4 py-20 sm:px-6">
            <Reveal>
              <h2 id="intro" className="section-title">{pole.intro.title}</h2>
            </Reveal>
            <Stagger className={`grid grid-cols-1 gap-5 ${pole.intro.items.length > 2 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2"}`}>
              {pole.intro.items.map((it) => (
                <StaggerItem key={it.title} className="flex flex-col gap-2.5 rounded-xl bg-cream p-7 transition-colors duration-300 hover:bg-[#E2E8EF]">
                  <h3 className="text-[21px] font-extrabold">{it.title}</h3>
                  <p className="text-base leading-relaxed text-ink">{it.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section aria-labelledby="prestations" className="bg-cream">
        <div className="container-main flex flex-col gap-8 px-4 py-20 sm:px-6">
          <Reveal>
            <h2 id="prestations" className="section-title">{pole.prestationsTitle}</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pole.prestations.map((p) => {
              const href = p.href && p.href !== "#" ? p.href : undefined;
              const body = (
                <>
                  {p.image && (
                    <span className="relative block h-40 w-full overflow-hidden">
                      <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </span>
                  )}
                  <span className={`flex flex-col gap-2 p-[22px] ${p.image ? "" : "border-t-4 border-gold"}`}>
                    <span className="font-display text-xl font-extrabold">{p.title}</span>
                    <span className="text-[15px] leading-relaxed text-ink">{p.text}</span>
                    {href && <span className="text-[15px] font-bold">{href === BOUTIQUE_HREF ? "Voir la boutique →" : "En savoir plus →"}</span>}
                  </span>
                </>
              );
              return (
                <StaggerItem key={p.title} className="h-full">
                  {href ? (
                    <Link href={href} className="group flex h-full flex-col overflow-hidden rounded-xl bg-white text-navy shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                      {body}
                    </Link>
                  ) : (
                    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                      {body}
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {pole.features.map((f, i) => (
        <FeatureBlock key={f.title} feature={f} reverse={!f.dark && i % 2 === 1} />
      ))}

      <MethodSteps title={pole.methodTitle} steps={pole.method} dark={!pole.features.at(-1)?.dark} />
      <OfferDownloads offers={pole.offers} />
      <Faq items={pole.faqs} tinted />

      <section className="bg-white">
        <div className="container-main flex flex-wrap items-center justify-between gap-6 px-4 py-16 sm:px-6">
          {next ? (
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-[#5A6677]">Étape suivante</span>
              <Link href={`/services/${next.slug}`} className="font-display text-[28px] font-extrabold">
                {next.num} · {next.title} →
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-[#5A6677]">Revoir les pôles</span>
              <Link href="/services" className="font-display text-[28px] font-extrabold">
                Nos 4 pôles →
              </Link>
            </div>
          )}
          <Link href={getConsultationHref()} className="btn-navy">
            {pole.hero.ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
