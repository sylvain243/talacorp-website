import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mentions légales",
  description: `Mentions légales de ${siteConfig.legalName}, agence digitale à Kinshasa.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        subtitle="Informations sur l'éditeur et l'exploitation du site."
      />

      <section className="section-padding bg-white">
        <FadeUp>
          <article className="container-main mx-auto max-w-3xl space-y-10 text-navy/80">
            <section>
              <h2 className="text-xl font-semibold text-navy">Éditeur du site</h2>
              <p className="mt-3 leading-relaxed">
                Le site {siteConfig.website.replace("https://", "")} est édité par{" "}
                {siteConfig.legalName}, société à responsabilité limitée unipersonnelle
                établie en République Démocratique du Congo.
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <span className="font-medium text-navy">Dénomination sociale :</span>{" "}
                  {siteConfig.legalName}
                </li>
                <li>
                  <span className="font-medium text-navy">Marque commerciale :</span>{" "}
                  {siteConfig.name}
                </li>
                <li>
                  <span className="font-medium text-navy">Siège :</span> {siteConfig.address}
                </li>
                <li>
                  <span className="font-medium text-navy">Téléphone :</span>{" "}
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-navy">E-mail :</span>{" "}
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Hébergement</h2>
              <p className="mt-3 leading-relaxed">
                Le site est opéré par {siteConfig.legalName} sur une infrastructure Next.js.
                Pour toute question technique liée au site, écrivez à {siteConfig.email}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Propriété intellectuelle</h2>
              <p className="mt-3 leading-relaxed">
                L&apos;ensemble des contenus de ce site (textes, visuels, logos, chartes,
                études de cas) est protégé. Toute reproduction non autorisée est interdite,
                sauf accord écrit de {siteConfig.legalName}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy">Contact</h2>
              <p className="mt-3 leading-relaxed">
                Pour toute demande relative à ces mentions :{" "}
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
