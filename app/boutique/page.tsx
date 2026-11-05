import { Reveal } from "@/components/motion/Motion";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BoutiqueClient from "./BoutiqueClient";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  // Boutique en préparation : non indexée tant que le lien du menu pointe sur "#"
  robots: { index: false, follow: false },
  ...buildPageMetadata({
  title: "Boutique goodies personnalisés",
  description:
    "T-shirts, polos, casquettes, agendas, mugs, gourdes, roll-up et objets publicitaires marqués à votre logo à Kinshasa. Prix sur devis.",
  path: "/boutique",
  }),
};

export default function BoutiquePage() {
  return (
    <>
      <section className="bg-navy text-white">
        <Reveal className="container-main flex flex-wrap items-center gap-12 px-4 py-16 sm:px-6 lg:py-[72px]">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[18px]">
            <p className="section-eyebrow-light">Boutique goodies</p>
            <h1 className="font-display text-[40px] font-extrabold leading-[1.05] sm:text-[52px]">Des objets à vos couleurs</h1>
            <p className="text-[19px] leading-relaxed text-[#D5DDE7]">
              Textile, bureau, objets du quotidien et matériel d&apos;événement, marqués à votre logo. Composez votre
              sélection, nous vous envoyons un devis.
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {["Sérigraphie", "Broderie", "Gravure", "Impression numérique"].map((c) => (
                <li key={c} className="chip">{c}</li>
              ))}
            </ul>
          </div>
          <div className="grid min-w-0 flex-[1_1_480px] grid-cols-2 gap-3">
            <div className="relative h-[240px] overflow-hidden rounded-xl sm:h-[300px]">
              <Image src="/images/branding.jpg" alt="Création d'identité appliquée aux supports" fill priority sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
            </div>
            <div className="relative h-[240px] overflow-hidden rounded-xl sm:h-[300px]">
              <Image src="/images/equipe-reunion.jpg" alt="Équipe en réunion" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      <BoutiqueClient />

      <section aria-labelledby="marquage" className="bg-cream">
        <Reveal className="container-main flex flex-wrap items-center gap-12 px-4 py-[72px] sm:px-6">
          <div className="relative h-[300px] min-w-0 flex-[1_1_460px] overflow-hidden rounded-xl sm:h-[340px]">
            <Image src="/images/branding.jpg" alt="Déclinaison d'une marque sur différents supports" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
            <h2 id="marquage" className="font-display text-4xl font-extrabold leading-tight">
              Votre logo, fidèle sur chaque objet
            </h2>
            <p className="text-[17px] leading-relaxed text-ink">
              Nous choisissons la technique de marquage adaptée à chaque matière et vous soumettons un BAT avant production.
            </p>
            <Link href="/services/branding-print" className="text-base font-bold">
              Découvrir le pôle Branding &amp; Print →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
