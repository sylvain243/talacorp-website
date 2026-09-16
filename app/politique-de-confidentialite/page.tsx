import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${siteConfig.name} : traitement des données personnelles.`,
  path: "/politique-de-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        subtitle="Comment nous collectons et utilisons vos informations."
      />

      <section className="section-padding bg-white">
        <FadeUp>
          <article className="container-main mx-auto max-w-3xl space-y-10 text-navy/80">
            <section>
              <h2 className="text-xl font-semibold text-navy">Responsable du traitement</h2>
              <p className="mt-3 leading-relaxed">
                {siteConfig.legalName}, {siteConfig.address}. Contact :{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Données collectées</h2>
              <p className="mt-3 leading-relaxed">
                Nous collectons uniquement les informations nécessaires pour répondre à vos
                demandes :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>identité et coordonnées (nom, e-mail, téléphone) lors d&apos;une réservation ;</li>
                <li>messages envoyés via WhatsApp ou e-mail ;</li>
                <li>données techniques de navigation (pages consultées, type d&apos;appareil) générées par le serveur.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Finalités</h2>
              <p className="mt-3 leading-relaxed">
                Ces données servent à planifier une consultation, répondre à vos questions et
                améliorer le site. Elles ne sont pas vendues à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Prestataires</h2>
              <p className="mt-3 leading-relaxed">
                La prise de rendez-vous est gérée par Cal.com (domaine cal.eu). Les échanges
                WhatsApp transitent par Meta. Ces services appliquent leurs propres politiques
                de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Cookies</h2>
              <p className="mt-3 leading-relaxed">
                Le site n&apos;utilise pas de cookies publicitaires. Des cookies techniques
                peuvent être déposés pour le fonctionnement du calendrier de réservation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Vos droits</h2>
              <p className="mt-3 leading-relaxed">
                Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos
                données en écrivant à{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-gold hover:text-gold-dark">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </article>
        </FadeUp>
      </section>
    </>
  );
}
