"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import ServiceIcon from "@/components/ServiceIcon";

interface ServiceHeroProps {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  heroImage: string;
  subBrand?: string;
}

export default function ServiceHero({
  title,
  tagline,
  description,
  icon,
  heroImage,
  subBrand,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[42vh] overflow-hidden sm:min-h-[48vh]">
      <Image
        src={heroImage}
        alt={`${title} — service Talacorp Kinshasa`}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/70"
        aria-hidden="true"
      />

      <div className="container-main relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FadeUp>
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Retour aux services
          </Link>

          <div className="max-w-3xl">
            <ServiceIcon icon={icon} variant="gold" className="!h-14 !w-14 [&_svg]:!h-7 [&_svg]:!w-7" />
            {subBrand && (
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-gold">{subBrand}</p>
            )}
            <p className={`section-eyebrow ${subBrand ? "mt-2" : "mt-6"}`}>{tagline}</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
