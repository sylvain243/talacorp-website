import { siteConfig } from "@/data/content";

export default function JsonLd() {
  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.addressLocality,
    addressCountry: siteConfig.addressCountry,
  };

  const openingHoursSpecification = {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...siteConfig.openingDays],
    opens: siteConfig.opens,
    closes: siteConfig.closes,
  };

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
    address: postalAddress,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.website],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    image: `${siteConfig.website}/logo-color.png`,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: postalAddress,
    openingHours: siteConfig.openingHours,
    openingHoursSpecification,
    areaServed: {
      "@type": "Country",
      name: siteConfig.addressCountryName,
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
