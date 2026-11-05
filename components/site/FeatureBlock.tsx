import Image from "next/image";
import Link from "next/link";
import type { PoleFeature } from "@/data/poles";
import { Reveal } from "@/components/motion/Motion";

function Body({ feature, dark }: { feature: PoleFeature; dark: boolean }) {
  return (
    <>
      <p className={dark ? "section-eyebrow-light" : "section-eyebrow"}>{feature.eyebrow}</p>
      <h2 className={`font-display font-extrabold leading-tight ${feature.compact ? "text-2xl sm:text-[28px]" : "text-3xl sm:text-[38px]"} ${dark ? "text-white" : ""}`}>
        {feature.title}
      </h2>
      {feature.text && <p className={`text-[17px] leading-relaxed ${dark ? "text-[#D5DDE7]" : "text-ink"}`}>{feature.text}</p>}
      {feature.bullets && (
        <ul className="flex flex-col gap-3 text-[17px] leading-normal">
          {feature.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="font-extrabold text-gold" aria-hidden="true">—</span>
              {b}
            </li>
          ))}
        </ul>
      )}
      {feature.chips && (
        <ul className="flex flex-wrap gap-2.5">
          {feature.chips.map((c) => (
            <li key={c} className={`chip ${dark ? "" : "!border-[#C9D2DC]"}`}>{c}</li>
          ))}
        </ul>
      )}
      {feature.link && (
        <Link href={feature.link.href} className={`group inline-flex text-base font-bold ${dark ? "text-gold" : ""}`}>
          {feature.link.label}
          <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      )}
    </>
  );
}

export default function FeatureBlock({ feature, reverse = false }: { feature: PoleFeature; reverse?: boolean }) {
  const dark = !!feature.dark;
  const [main, ...rest] = feature.images;

  /* Sous-service : bandeau discret avec une seule image */
  if (feature.compact) {
    return (
      <section id={feature.id} className="scroll-mt-24 bg-white">
        <div className="container-main px-4 py-14 sm:px-6">
          <Reveal className="flex flex-wrap items-center gap-8 rounded-2xl border border-line bg-cream p-6 sm:p-8">
            <div className="relative h-[200px] min-w-0 flex-[1_1_260px] overflow-hidden rounded-xl sm:max-w-[360px]">
              <Image src={main.src} alt={main.alt} fill sizes="360px" className="object-cover" />
            </div>
            <div className="flex min-w-0 flex-[999_1_360px] flex-col gap-3.5">
              <Body feature={feature} dark={false} />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id={feature.id} className={`scroll-mt-24 overflow-hidden ${dark ? "bg-navy text-white" : reverse ? "bg-cream" : "bg-white"}`}>
      <div className={`container-main flex flex-wrap items-center gap-12 px-4 py-20 sm:px-6 ${reverse ? "flex-row-reverse" : ""}`}>
        <Reveal from={reverse ? "right" : "left"} className="grid min-w-0 flex-[1_1_520px] grid-cols-2 gap-3">
          <div className={`group relative col-span-2 overflow-hidden rounded-xl ${rest.length ? "h-[260px] sm:h-[300px]" : "h-[300px] sm:h-[380px]"}`}>
            <Image src={main.src} alt={main.alt} fill sizes="(min-width:1024px) 620px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          {rest.map((im) => (
            <div key={im.src} className={`group relative h-[150px] overflow-hidden rounded-xl ${rest.length === 1 ? "col-span-2" : ""}`}>
              <Image src={im.src} alt={im.alt} fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.15} className="flex min-w-0 flex-[1_1_400px] flex-col gap-[18px]">
          <Body feature={feature} dark={dark} />
        </Reveal>
      </div>
    </section>
  );
}
