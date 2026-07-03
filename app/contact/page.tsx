import { Clock, Mail, MapPin, Phone } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import BookingCalendar from "@/components/BookingCalendar";
import { siteConfig } from "@/data/content";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Contactez Talacorp à Kinshasa — consultation gratuite de 30 minutes.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactez-nous"
        subtitle="Une question ? Réservez directement votre consultation gratuite."
      />

      <section className="section-padding bg-white">
        <div className="container-main grid gap-12 lg:grid-cols-2">
          <FadeUp>
            <h2 className="text-2xl font-semibold text-navy">Nos coordonnées</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin className="shrink-0 text-gold" size={22} aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Adresse</p>
                  <p className="mt-1 text-navy/70">{siteConfig.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="shrink-0 text-gold" size={22} aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Téléphone</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="mt-1 text-navy/70 hover:text-gold"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="shrink-0 text-gold" size={22} aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 text-navy/70 hover:text-gold"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="shrink-0 text-gold" size={22} aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Horaires</p>
                  <p className="mt-1 text-navy/70">{siteConfig.hours}</p>
                </div>
              </li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div id={siteConfig.bookingSectionId}>
              <h2 className="text-2xl font-semibold text-navy">Réserver un créneau</h2>
            <p className="mt-2 text-navy/70">
              30 minutes pour parler de vos objectifs, sans engagement.
            </p>
            <div className="mt-6">
              <BookingCalendar />
            </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
