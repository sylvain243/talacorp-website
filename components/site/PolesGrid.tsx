import Image from "next/image";
import Link from "next/link";
import { poles } from "@/data/poles";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";

export default function PolesGrid({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section id="poles" aria-labelledby="poles-titre" className="scroll-mt-24 bg-cream">
      <div className="container-main flex flex-col gap-9 px-4 py-20 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <p className="section-eyebrow">Nos pôles</p>
            <Heading id="poles-titre" className="section-title">
              Quatre pôles, du premier jour à la croissance
            </Heading>
          </div>
          <p className="max-w-[420px] text-[17px] leading-relaxed text-ink">
            Nous vous accompagnons à chaque étape, ou seulement là où vous en avez besoin.
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {poles.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <Link
                href={`/services/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white text-navy shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span className="relative block h-[170px] w-full overflow-hidden">
                  <Image src={p.card.image.src} alt={p.card.image.alt} fill sizes="(min-width:1024px) 300px, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                </span>
                <span className="flex flex-1 flex-col gap-2.5 p-[22px]">
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-display text-[30px] font-extrabold text-gold">{p.num}</span>
                    <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-gold-dark">{p.stage}</span>
                  </span>
                  <span className="font-display text-[22px] font-extrabold leading-tight">{p.title}</span>
                  <span className="text-[15px] leading-relaxed text-ink">{p.card.text}</span>
                  <span className="mt-auto pt-1 text-[15px] font-bold">
                    Découvrir <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
