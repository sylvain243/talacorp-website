import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import LogosMarquee from "@/components/site/LogosMarquee";
import PolesGrid from "@/components/site/PolesGrid";
import MethodSteps from "@/components/site/MethodSteps";
import CtaBand from "@/components/site/CtaBand";
import { BOUTIQUE_HREF, getConsultationHref } from "@/data/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Stratégie, branding, digital et marketing à Kinshasa",
  description:
    "TALACORP accompagne les entreprises congolaises de leur création à leur croissance : stratégie, branding et print, transformation digitale, marketing et acquisition. Consultation gratuite.",
  path: "/",
});

const steps = [
  { title: "Écoute", text: "Une consultation gratuite pour comprendre votre besoin." },
  { title: "Proposition", text: "Une offre claire sur devis, validée avec vous." },
  { title: "Réalisation", text: "Production par nos équipes, avec des validations régulières." },
  { title: "Suivi", text: "Livraison, formation et accompagnement dans la durée." },
];

/* Images des réalisations à choisir avec Sylvain : renseigner `image` pour remplacer l'emplacement. */
const featured: { client: string; pole: string; text: string; image?: { src: string; alt: string } }[] = [
  { client: "Bet and You", pole: "Branding & Print · Marketing", text: "Habillage publicitaire des bus TRANSCO." },
  { client: "Ministère du Travail", pole: "Branding & Print", text: "Branding institutionnel et goodies." },
  { client: "CERISE RDC", pole: "Transformation digitale", text: "Plateformes Syndic, Care et Immo, hébergement et infogérance." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-y-0 left-0 w-2 bg-gold" aria-hidden="true" />
        <div className="container-main flex flex-wrap items-center gap-12 px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-[22px]">
            <p className="section-eyebrow-light">Stratégie, branding, digital et marketing</p>
            <h1 className="font-display text-[40px] font-extrabold leading-[1.04] tracking-[-1px] sm:text-[58px]">
              Votre partenaire de croissance qui parle congolais
            </h1>
            <p className="max-w-[540px] text-[19px] leading-relaxed text-[#D5DDE7]">
              De la création de votre entreprise à sa croissance, une seule équipe à Kinshasa pour vous structurer, vous
              faire connaître, vous équiper et vous faire grandir.
            </p>
            <div className="flex flex-wrap gap-3.5 pt-1.5">
              <Link href={getConsultationHref()} className="btn-primary">
                Demander une consultation gratuite
              </Link>
              <Link href={BOUTIQUE_HREF} className="btn-outline-light">
                Voir la boutique goodies
              </Link>
            </div>
          </div>
          <div className="grid min-w-0 flex-[1_1_480px] grid-cols-2 grid-rows-[180px_180px] gap-3 sm:grid-rows-[220px_220px]">
            <div className="relative row-span-2 overflow-hidden rounded-xl">
              <Image src="/images/equipe-reunion.jpg" alt="Équipe en réunion de travail" fill priority sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/images/bus-transco.jpg" alt="Bus TRANSCO habillé aux couleurs d'un annonceur" fill priority sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/images/video-materiel.jpg" alt="Matériel de tournage et de montage vidéo" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <LogosMarquee />
      <PolesGrid />
      <MethodSteps title="Du premier échange au résultat livré" steps={steps} />

      <section aria-labelledby="real-titre" className="bg-cream">
        <div className="container-main flex flex-col gap-8 px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="real-titre" className="section-title">Quelques réalisations</h2>
            <Link href="/realisations" className="text-base font-bold">
              Toutes les réalisations →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {featured.map((r) => (
              <Link key={r.client} href="/realisations" className="flex flex-col overflow-hidden rounded-xl bg-white text-navy transition-shadow hover:shadow-lg">
                {r.image ? (
                  <span className="relative block h-[220px]">
                    <Image src={r.image.src} alt={r.image.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
                  </span>
                ) : (
                  <span className="flex h-[220px] flex-col items-center justify-center gap-2 bg-[#DCE3EB] text-[13px] text-ink">
                    <ImageIcon size={40} strokeWidth={1.6} aria-hidden="true" />
                    Image à choisir
                  </span>
                )}
                <span className="flex flex-col gap-1.5 p-[22px]">
                  <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-gold-dark">{r.pole}</span>
                  <span className="font-display text-[21px] font-extrabold">{r.client}</span>
                  <span className="text-[15px] leading-relaxed text-ink">{r.text}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand withOffer />
    </>
  );
}
