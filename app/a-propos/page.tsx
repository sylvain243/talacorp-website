import { Reveal } from "@/components/motion/Motion";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/site/CtaBand";
import { getConsultationHref, siteConfig } from "@/data/content";
import { poles } from "@/data/poles";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "À propos",
  description:
    "TALACORP, votre partenaire de croissance qui parle congolais : conseil, création, digital et marketing réunis à Kinshasa.",
  path: "/a-propos",
});

const values = [
  { title: "Proximité", text: "Un interlocuteur unique, joignable, qui connaît votre dossier." },
  { title: "Exigence", text: "Des livrables soignés, validés avec vous à chaque étape." },
  { title: "Transparence", text: "Des devis clairs et des rapports compréhensibles." },
  { title: "Durée", text: "Nous restons à vos côtés après la livraison." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image src="/images/equipe-reunion.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <Reveal className="container-main relative flex flex-col gap-[18px] px-4 py-20 sm:px-6 lg:py-[104px]">
          <p className="section-eyebrow-light">À propos</p>
          <h1 className="max-w-[820px] font-display text-[38px] font-extrabold leading-[1.05] sm:text-[54px]">
            Une équipe congolaise au service de votre croissance
          </h1>
          <p className="max-w-[640px] text-[19px] leading-relaxed text-[#E4E9EF]">
            TALACORP réunit sous un même toit le conseil, la création, le digital et le marketing, pour accompagner les
            entreprises de Kinshasa de leur naissance à leur croissance.
          </p>
        </Reveal>
      </section>

      <section aria-labelledby="mission" className="bg-white">
        <Reveal className="container-main flex flex-wrap items-center gap-12 px-4 py-20 sm:px-6">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[18px]">
            <h2 id="mission" className="section-title">Notre mission</h2>
            <p className="text-[17px] leading-relaxed text-ink">
              Donner aux entreprises congolaises les mêmes outils que les grandes marques : une organisation solide, une
              image forte, des outils numériques fiables et des campagnes qui rapportent.
            </p>
            <p className="text-[17px] leading-relaxed text-ink">
              Nous connaissons le terrain, ses contraintes et ses opportunités. C&apos;est ce que nous voulons dire par « un
              partenaire de croissance qui parle congolais ».
            </p>
          </div>
          <div className="grid min-w-0 flex-[1_1_520px] grid-cols-2 gap-3">
            <div className="relative h-[260px] overflow-hidden rounded-xl sm:h-[300px]">
              <Image src="/images/poignee-de-main.jpg" alt="Poignée de main entre partenaires" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
            </div>
            <div className="relative h-[260px] overflow-hidden rounded-xl sm:h-[300px]">
              <Image src="/images/developpeur.jpg" alt="Membre de l'équipe digitale au travail" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="valeurs" className="bg-cream">
        <Reveal className="container-main flex flex-col gap-8 px-4 py-20 sm:px-6">
          <h2 id="valeurs" className="section-title">Ce qui nous guide</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-2.5 rounded-xl border-t-4 border-gold bg-white p-[26px]">
                <h3 className="text-[21px] font-extrabold">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink">{v.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="direction" className="bg-white">
        <Reveal className="container-main flex flex-wrap items-center gap-12 px-4 py-20 sm:px-6">
          <div className="relative h-[440px] min-w-0 flex-[0_1_340px] overflow-hidden rounded-2xl bg-cream shadow-xl">
            <Image
              src="/images/sylvain-lutala.jpg"
              alt="Sylvain Lutala, Associé et Gérant de TALACORP"
              fill
              quality={90}
              sizes="(min-width:768px) 340px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-3.5">
            <p className="section-eyebrow">Direction</p>
            <h2 id="direction" className="font-display text-4xl font-extrabold">Sylvain Lutala</h2>
            <span className="text-[17px] font-semibold">Associé &amp; Gérant</span>
            {/* Texte de présentation à rédiger par Sylvain */}
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="poles-apropos" className="bg-navy text-white">
        <Reveal className="container-main flex flex-col gap-7 px-4 py-[72px] sm:px-6">
          <h2 id="poles-apropos" className="font-display text-[34px] font-extrabold">Quatre pôles, une seule équipe</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {poles.map((p) => (
              <Link key={p.slug} href={`/services/${p.slug}`} className="flex flex-col gap-1.5 rounded-xl border-[1.5px] border-[#34495F] p-[22px] hover:border-gold">
                <span className="font-display text-[26px] font-extrabold text-gold">{p.num}</span>
                <span className="text-lg font-bold">{p.title}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="legal" className="bg-white">
        <Reveal className="container-main flex flex-wrap items-center justify-between gap-6 px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-1.5 text-[15px] text-ink">
            <h2 id="legal" className="mb-1 font-sans text-lg font-bold text-navy">{siteConfig.legalName}</h2>
            <span>{siteConfig.streetAddress}, {siteConfig.addressLocality}</span>
            <span>RCCM CD/KNG/RCCM/24-B-01851 · ID NAT 01-F4200-N52261K</span>
          </div>
          <Link href={getConsultationHref()} className="btn-primary">
            Nous rencontrer
          </Link>
        </Reveal>
      </section>

      <CtaBand withOffer />
    </>
  );
}
