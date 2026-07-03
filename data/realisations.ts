import type { ServiceCategory } from "./content";

export type RealisationCategory = ServiceCategory;

export interface Realisation {
  slug: string;
  title: string;
  client: string;
  category: RealisationCategory;
  categoryLabel: string;
  tags: string[];
  date: string;
  coverColor: string;
  coverImage?: string;
  website?: string;
  /** Site client — affiche l'aperçu navigateur et le lien externe */
  websiteComingSoon?: boolean;
  resultHighlight: string;
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
  gallery: { color: string; label: string; image?: string }[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
}

export const realisations: Realisation[] = [
  {
    slug: "safecheck-rdc-digitalisation-sante",
    title: "SafeCheck RDC — Digitalisation complète d'un acteur de la santé",
    client: "SafeCheck RDC",
    category: "transformation",
    categoryLabel: "Transformation Digitale",
    tags: ["Applications métiers", "Santé", "Desktop · Web · Mobile"],
    date: "2024 – 2026",
    coverColor: "#1B2A4A",
    website: "https://safecheck-rdc.com",
    websiteComingSoon: false,
    resultHighlight: "4 environnements déployés",
    challenge:
      "SafeCheck RDC, pionnier de la gestion des soins de santé pour entreprises et organisations en RDC, devait gérer des milliers de dossiers médicaux, factures, admissions et conventions. L'enjeu : des outils numériques fiables, sécurisés et accessibles en temps réel pour les équipes internes, les entreprises clientes et les structures hospitalières partenaires.",
    approach:
      "Conception et développement d'un écosystème applicatif complet couvrant l'ensemble des processus métiers : gestion des conventions médicales, suivi des admissions, traitement et audit des factures médicales, reporting en temps réel. Déploiement sur quatre environnements (Desktop, Web, iOS et Android) et création du site web corporate institutionnel présentant les services d'audit médical, de médecine du travail et de conventions de prise en charge.",
    results: [
      { value: "4", label: "Environnements (Desktop, Web, iOS, Android)" },
      { value: "Temps réel", label: "Visibilité sur les dépenses de santé" },
      { value: "Réduit", label: "Délais de traitement & erreurs admin." },
    ],
    gallery: [
      { color: "#1B2A4A", label: "Plateforme de gestion" },
      { color: "#243558", label: "Audit des factures médicales" },
      { color: "#364E6E", label: "Site corporate safecheck-rdc.com" },
    ],
  },
  {
    slug: "nomaat-group-marketing-acquisition",
    title: "Nomaat Group — Positionnement premium & acquisition",
    client: "Nomaat Group SAS",
    category: "marketing",
    categoryLabel: "Marketing & Acquisition",
    tags: ["Stratégie digitale", "Branding", "Growth"],
    date: "2025 – 2026",
    coverColor: "#E0A82E",
    website: "https://nomaatgroup.com",
    websiteComingSoon: false,
    resultHighlight: "Premium en < 12 mois",
    challenge:
      "Nomaat Group accompagne entreprises, ONG et particuliers en RDC dans leurs démarches fiscales, administratives, logistiques et légales, avec une offre de déménagement professionnel. La marque devait se différencier et acquérir de nouveaux clients dans un marché concurrentiel.",
    approach:
      "Conception et déploiement d'une stratégie digitale complète : positionnement de marque, refonte de la présence en ligne, contenus valorisant l'expertise, campagnes ciblées et parcours de conversion optimisés. Plateforme web conçue comme un véritable outil commercial.",
    results: [
      { value: "< 12 mois", label: "Positionnement premium atteint" },
      { value: "+", label: "Chiffre d'affaires via nouveaux clients" },
      { value: "1", label: "Référence déménagement pro. en RDC" },
    ],
    gallery: [
      { color: "#C8921F", label: "Stratégie de marque" },
      { color: "#E0A82E", label: "Présence en ligne" },
      { color: "#D49A22", label: "Parcours de conversion" },
    ],
  },
  {
    slug: "mpeti-avocats-presence-digitale",
    title: "Cabinet Mpeti & Avocats — Rayonnement juridique digital",
    client: "Cabinet Mpeti & Avocats Associés",
    category: "marketing",
    categoryLabel: "Marketing & Acquisition",
    tags: ["Legal", "SEO", "Plateforme bilingue"],
    date: "2025 – 2026",
    coverColor: "#243558",
    website: "https://mpetiavocatsrdc.com",
    websiteComingSoon: false,
    resultHighlight: "Expertise OHADA valorisée",
    challenge:
      "Le Cabinet Mpeti & Avocats Associés, spécialisé en droit des affaires, contentieux fiscal, marchés publics, arbitrage et médiation OHADA, devait faire valoir son expertise auprès d'une clientèle d'affaires nationale et internationale.",
    approach:
      "Stratégie digitale complète : plateforme web bilingue (français/anglais) mettant en avant les domaines d'intervention et les profils des avocats, contenus d'expertise juridique et optimisation de la visibilité en ligne auprès des entreprises et investisseurs opérant en RDC.",
    results: [
      { value: "FR / EN", label: "Plateforme bilingue" },
      { value: "OHADA", label: "Expertise mise en avant" },
      { value: "B2B", label: "Clientèle nationale & internationale" },
    ],
    gallery: [
      { color: "#1B2A4A", label: "Site mpetiavocatsrdc.com" },
      { color: "#243558", label: "Profils des avocats" },
      { color: "#2D4263", label: "Contenus d'expertise" },
    ],
  },
  {
    slug: "cerise-care-plateforme-web",
    title: "Cerise Care — Plateforme web santé",
    client: "Cerise Care",
    category: "transformation",
    categoryLabel: "Transformation Digitale",
    tags: ["Site web", "Santé", "Prise en charge"],
    date: "2025 – 2026",
    coverColor: "#C83E3E",
    website: "https://cerisecare.com",
    websiteComingSoon: false,
    resultHighlight: "Outil commercial santé",
    challenge:
      "Cerise Care devait renforcer sa présence en ligne et présenter clairement ses services de santé et de prise en charge médicale auprès de ses clients en RDC.",
    approach:
      "Conception et développement d'une plateforme web professionnelle : identité visuelle soignée, contenu structuré, référencement et performance. Site pensé comme un véritable outil commercial au service de la croissance.",
    results: [
      { value: "100%", label: "Présence digitale professionnelle" },
      { value: "SEO", label: "Visibilité en ligne optimisée" },
      { value: "Mobile", label: "Expérience adaptée aux connexions locales" },
    ],
    gallery: [
      { color: "#C83E3E", label: "Page d'accueil" },
      { color: "#3D5A5A", label: "Parcours client" },
      { color: "#A83232", label: "Interface services" },
    ],
  },
  {
    slug: "cerise-rdc-plateforme-web",
    title: "Cerise RDC — Services & solutions en RDC",
    client: "Cerise RDC",
    category: "transformation",
    categoryLabel: "Transformation Digitale",
    tags: ["Site web", "Services", "RDC"],
    date: "2025 – 2026",
    coverColor: "#A83232",
    website: "https://ceriserdc.com",
    websiteComingSoon: false,
    resultHighlight: "Présence web structurée",
    challenge:
      "Cerise RDC avait besoin d'une vitrine digitale claire pour présenter ses services et solutions sur le marché congolais.",
    approach:
      "Création d'une plateforme web sur mesure : architecture de contenu adaptée à l'activité, design professionnel, performance et référencement pour capter une audience locale et institutionnelle.",
    results: [
      { value: "1", label: "Vitrine digitale unifiée" },
      { value: "Pro", label: "Image de marque cohérente" },
      { value: "RDC", label: "Contenus adaptés au marché local" },
    ],
    gallery: [
      { color: "#C83E3E", label: "Accueil" },
      { color: "#A83232", label: "Services" },
      { color: "#3D5A5A", label: "Contact & conversion" },
    ],
  },
  {
    slug: "oses-legal-plateforme-web",
    title: "OSES Legal — Accompagnement juridique digital",
    client: "OSES Legal",
    category: "transformation",
    categoryLabel: "Transformation Digitale",
    tags: ["LegalTech", "Juridique", "Plateforme web"],
    date: "2025 – 2026",
    coverColor: "#364E6E",
    website: "https://oseslegal.org",
    websiteComingSoon: true,
    resultHighlight: "Services juridiques en ligne",
    challenge:
      "OSES Legal souhaitait moderniser son accès aux services et accompagnements juridiques via une présence digitale crédible et performante.",
    approach:
      "Conception et développement de la plateforme oseslegal.org : structure de contenu claire, parcours utilisateur optimisé, identité professionnelle et bases techniques solides pour l'évolution vers des services juridiques avancés.",
    results: [
      { value: "Web", label: "Plateforme professionnelle livrée" },
      { value: "Juridique", label: "Services mis en valeur" },
      { value: "Évolutif", label: "Architecture prête à scaler" },
    ],
    gallery: [
      { color: "#1B2A4A", label: "oseslegal.org" },
      { color: "#243558", label: "Parcours utilisateur" },
      { color: "#364E6E", label: "Services juridiques" },
    ],
  },
  {
    slug: "genesis-construct-plateforme-web",
    title: "Genesis Construct — Vitrine construction & travaux",
    client: "Genesis Construct",
    category: "transformation",
    categoryLabel: "Transformation Digitale",
    tags: ["Site web", "Construction", "BTP"],
    date: "2025 – 2026",
    coverColor: "#2D4263",
    website: "https://genesisconstruct.net",
    websiteComingSoon: true,
    resultHighlight: "Image pro. BTP",
    challenge:
      "Genesis Construct, acteur de la construction et des travaux, devait asseoir sa crédibilité en ligne auprès des clients et partenaires.",
    approach:
      "Création du site genesisconstruct.net : présentation structurée des activités, design professionnel adapté au secteur BTP, contenus orientés conversion et référencement local.",
    results: [
      { value: "BTP", label: "Secteur construction valorisé" },
      { value: "Leads", label: "Outil de génération de contacts" },
      { value: "Pro", label: "Crédibilité renforcée en ligne" },
    ],
    gallery: [
      { color: "#1B2A4A", label: "genesisconstruct.net" },
      { color: "#2D4263", label: "Présentation des travaux" },
      { color: "#364E6E", label: "Contact commercial" },
    ],
  },
  {
    slug: "gl-consult-plateforme-web",
    title: "GL Consult — Cabinet de conseil en ligne",
    client: "GL Consult",
    category: "strategie",
    categoryLabel: "Stratégie & Performance",
    tags: ["Conseil", "Site web", "PME"],
    date: "2025 – 2026",
    coverColor: "#243558",
    website: "https://glconsult.net",
    websiteComingSoon: true,
    resultHighlight: "Conseil digitalisé",
    challenge:
      "GL Consult, cabinet de conseil, avait besoin d'une présence en ligne à la hauteur de son expertise pour attirer et rassurer ses clients.",
    approach:
      "Plateforme web sur mesure présentant l'offre de conseil, les domaines d'intervention et les prises de contact. Site conçu comme un outil commercial structuré et crédible.",
    results: [
      { value: "Conseil", label: "Expertise mise en avant" },
      { value: "Web", label: "Vitrine professionnelle" },
      { value: "Contact", label: "Parcours de prise de rendez-vous" },
    ],
    gallery: [
      { color: "#1B2A4A", label: "glconsult.net" },
      { color: "#243558", label: "Offre de conseil" },
      { color: "#364E6E", label: "Prise de contact" },
    ],
  },
  {
    slug: "groupe-loli-plateforme-web",
    title: "Groupe Loli — Groupe multisectoriel",
    client: "Groupe Loli",
    category: "strategie",
    categoryLabel: "Stratégie & Performance",
    tags: ["Groupe", "Multisectoriel", "Site web"],
    date: "2025 – 2026",
    coverColor: "#1B2A4A",
    website: "https://groupeloli.com",
    websiteComingSoon: true,
    resultHighlight: "Identité groupe unifiée",
    challenge:
      "Le Groupe Loli, structure multisectorielle, devait présenter l'ensemble de ses activités de manière cohérente et professionnelle en ligne.",
    approach:
      "Conception de groupeloli.com : architecture de contenu adaptée à un groupe multi-activités, identité visuelle unifiée et navigation claire entre les pôles du groupe.",
    results: [
      { value: "Multi", label: "Activités présentées clairement" },
      { value: "1", label: "Identité de groupe cohérente" },
      { value: "Pro", label: "Image institutionnelle renforcée" },
    ],
    gallery: [
      { color: "#1B2A4A", label: "groupeloli.com" },
      { color: "#243558", label: "Pôles d'activité" },
      { color: "#364E6E", label: "Présentation institutionnelle" },
    ],
  },
  {
    slug: "language-intelligency-plateforme-web",
    title: "Language Intelligency — Formation linguistique",
    client: "Language Intelligency",
    category: "transformation",
    categoryLabel: "Transformation Digitale",
    tags: ["Formation", "Langues", "Éducation"],
    date: "2025 – 2026",
    coverColor: "#364E6E",
    website: "https://languageintelligency.com",
    websiteComingSoon: false,
    resultHighlight: "Formation en ligne",
    challenge:
      "Language Intelligency devait promouvoir ses services de formation et d'accompagnement linguistique via une plateforme web attractive et informative.",
    approach:
      "Développement de languageintelligency.com : présentation des offres de formation, parcours d'inscription simplifié, design moderne et contenus optimisés pour le référencement.",
    results: [
      { value: "Langues", label: "Offres de formation valorisées" },
      { value: "Web", label: "Canal d'acquisition digital" },
      { value: "SEO", label: "Visibilité internationale" },
    ],
    gallery: [
      { color: "#243558", label: "languageintelligency.com" },
      { color: "#364E6E", label: "Catalogue de formations" },
      { color: "#2D4263", label: "Inscription en ligne" },
    ],
  },
  {
    slug: "ministere-travail-branding",
    title: "Ministère du Travail (RDC) — Branding institutionnel",
    client: "Ministère du Travail — RDC",
    category: "branding",
    categoryLabel: "Branding & Print",
    tags: ["Branding", "Goodies", "Institutionnel"],
    date: "2025 – 2026",
    coverColor: "#121E35",
    resultHighlight: "Image institutionnelle",
    challenge:
      "Le Ministère du Travail de la RDC souhaitait valoriser son image institutionnelle à travers des supports de communication et des goodies corporate de qualité.",
    approach:
      "Conception et production de supports de branding et de goodies corporate : identité visuelle appliquée aux objets promotionnels et supports valorisant l'image de l'institution.",
    results: [
      { value: "Brand", label: "Identité institutionnelle renforcée" },
      { value: "Print", label: "Supports de communication livrés" },
      { value: "Goodies", label: "Objets corporate personnalisés" },
    ],
    gallery: [
      { color: "#121E35", label: "Identité visuelle" },
      { color: "#1B2A4A", label: "Supports print" },
      { color: "#243558", label: "Goodies corporate" },
    ],
  },
  {
    slug: "dinacope-branding-print",
    title: "DINACOPE — Supports print & goodies",
    client: "DINACOPE",
    category: "branding",
    categoryLabel: "Branding & Print",
    tags: ["Print", "Goodies", "Institutionnel"],
    date: "2025 – 2026",
    coverColor: "#E0A82E",
    resultHighlight: "Communication institutionnelle",
    challenge:
      "La DINACOPE (Direction Nationale de Contrôle et de la Paie des Enseignants) avait besoin de supports print et d'objets promotionnels institutionnels pour ses actions de communication.",
    approach:
      "Fourniture de supports print et de goodies corporate : conception graphique, production de supports imprimés et objets promotionnels personnalisés aux couleurs de l'institution.",
    results: [
      { value: "Print", label: "Supports imprimés institutionnels" },
      { value: "Goodies", label: "Objets promotionnels livrés" },
      { value: "Cohérent", label: "Image DINACOPE unifiée" },
    ],
    gallery: [
      { color: "#C8921F", label: "Supports print" },
      { color: "#E0A82E", label: "Goodies corporate" },
      { color: "#D49A22", label: "Communication institutionnelle" },
    ],
  },
];

/** Image de couverture par défaut selon le pôle de service */
export const categoryCoverImages: Record<RealisationCategory, string> = {
  transformation: "/realisations/categories/transformation.png",
  marketing: "/realisations/categories/marketing.png",
  strategie: "/realisations/categories/strategie.png",
  branding: "/realisations/categories/branding.png",
};

export function getRealisationCoverImage(project: Realisation): string {
  return categoryCoverImages[project.category];
}

export function getWebsiteDomain(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function getRealisationBySlug(slug: string) {
  return realisations.find((r) => r.slug === slug);
}

export function getRealisationsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getRealisationBySlug(slug))
    .filter((r): r is Realisation => r !== undefined);
}

export function filterRealisations(category: string) {
  if (category === "all") return realisations;
  return realisations.filter((r) => r.category === category);
}
