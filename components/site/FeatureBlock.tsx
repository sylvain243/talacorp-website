import Image from "next/image";
import Link from "next/link";
import type { PoleFeature } from "@/data/poles";

export default function FeatureBlock({ feature, reverse = false }: { feature: PoleFeature; reverse?: boolean }) {
  const { dark, images } = feature;
  const [main, ...rest] = images;
  return (
    <section id={feature.id} className={`scroll-mt-24 ${dark ? "bg-navy text-white" : reverse ? "bg-cream" : "bg-white"}`}>
      <div className={`container-main flex flex-wrap items-center gap-12 px-4 py-20 sm:px-6 ${reverse ? "flex-row-reverse" : ""}`}>
        <div className="grid min-w-0 flex-[1_1_520px] grid-cols-2 gap-3">
          <div className={`relative overflow-hidden rounded-xl ${rest.length ? "col-span-2 h-[260px] sm:h-[300px]" : "col-span-2 h-[300px] sm:h-[380px]"}`}>
            <Image src={main.src} alt={main.alt} fill sizes="(min-width:1024px) 620px, 100vw" className="object-cover" />
          </div>
          {rest.map((im) => (
            <div key={im.src} className={`relative h-[150px] overflow-hidden rounded-xl ${rest.length === 1 ? "col-span-2" : ""}`}>
              <Image src={im.src} alt={im.alt} fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-[18px]">
          <p className={dark ? "section-eyebrow-light" : "section-eyebrow"}>{feature.eyebrow}</p>
          <h2 className={`font-display text-3xl font-extrabold leading-tight sm:text-[38px] ${dark ? "text-white" : ""}`}>{feature.title}</h2>
          {feature.text && (
            <p className={`text-[17px] leading-relaxed ${dark ? "text-[#D5DDE7]" : "text-ink"}`}>{feature.text}</p>
          )}
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
            <Link href={feature.link.href} className={`text-base font-bold ${dark ? "text-gold" : ""}`}>
              {feature.link.label} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
