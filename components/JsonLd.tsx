import { siteConfig } from "@/data/content";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.website,
    logo: `${siteConfig.website}/logo-color.png`,
    description: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Kinshasa",
      addressCountry: "CD",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.website],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: `${siteConfig.website}/logo-color.png`,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Kinshasa",
      addressCountry: "CD",
    },
    areaServed: {
      "@type": "Country",
      name: "République Démocratique du Congo",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
