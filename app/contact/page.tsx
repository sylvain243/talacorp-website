import { Reveal } from "@/components/motion/Motion";
import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import BookingCalendar from "@/components/BookingCalendar";
import { getWhatsAppUrl, siteConfig } from "@/data/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact et consultation gratuite",
  description:
    "Réservez votre consultation gratuite de 15 ou 30 minutes avec TALACORP, en visio ou dans nos bureaux à Kinshasa.",
  path: "/contact",
});

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <Reveal className="container-main flex flex-col gap-3.5 px-4 py-16 sm:px-6">
          <p className="section-eyebrow-light">Contact</p>
          <h1 className="font-display text-[38px] font-extrabold leading-[1.05] sm:text-[50px]">
            Réservez votre consultation gratuite
          </h1>
          <p className="max-w-[640px] text-[19px] leading-relaxed text-[#D5DDE7]">
            15 ou 30 minutes, en visio ou dans nos bureaux, pour comprendre votre besoin et vous proposer la bonne approche.
          </p>
        </Reveal>
      </section>

      <section aria-label="Réservation et coordonnées" className="bg-cream">
        <Reveal className="container-main flex flex-wrap items-start gap-10 px-4 py-16 sm:px-6">
          <div id={siteConfig.bookingSectionId} className="min-w-0 flex-[999_1_560px] scroll-mt-24">
            <BookingCalendar />
          </div>

          <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
            <div className="relative h-[220px] overflow-hidden rounded-xl">
              <Image src="/images/poignee-de-main.jpg" alt="Rencontre avec un client" fill sizes="(min-width:1024px) 380px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-3.5 rounded-xl bg-white p-6 text-base">
              <h2 className="font-display text-[22px] font-extrabold">Nous joindre</h2>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:underline">
                <MapPin size={20} className="mt-0.5 flex-none" aria-hidden="true" />
                {siteConfig.address}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:underline">
                <Phone size={20} className="flex-none" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:underline">
                <Mail size={20} className="flex-none" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-2.5">
                <Clock size={20} className="flex-none" aria-hidden="true" />
                {siteConfig.hours}
              </span>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-1">
                <MessageCircle size={18} aria-hidden="true" />
                Écrire sur WhatsApp
              </a>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
