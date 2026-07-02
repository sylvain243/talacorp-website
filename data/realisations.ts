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
  resultHighlight: string;
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
  gallery: { color: string; label: string }[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
}

export const realisations: Realisation[] = [
  {
    slug: "boutique-elegance-ecommerce",
    title: "Boutique Élégance — E-commerce",
    client: "Boutique Élégance",
    category: "transformation",
    categoryLabel: "Transformation Digitale",
    tags: ["UI/UX Design", "Développement", "E-commerce"],
    date: "Mars 2026",
    coverColor: "#1B2A4A",
    resultHighlight: "+120% de trafic",
    challenge:
      "Boutique Élégance vendait uniquement en physique au Marché de la Liberté. Sans présence en ligne, la clientèle restait limitée au quartier et les ventes stagnaient.",
    approach:
      "Nous avons conçu une boutique en ligne responsive, optimisée pour les connexions mobiles, avec un parcours d'achat simplifié et une intégration WhatsApp Business pour le suivi des commandes.",
    results: [
      { value: "+120%", label: "Trafic web en 3 mois" },
      { value: "x2", label: "Commandes en ligne" },
      { value: "45%", label: "Clients récurrents" },
    ],
    gallery: [
      { color: "#243558", label: "Page d'accueil" },
      { color: "#2D4263", label: "Catalogue produits" },
      { color: "#364E6E", label: "Tunnel de commande" },
    ],
    testimonial: {
      quote:
        "Grâce à Talacorp, nous avons doublé notre acquisition de clients en trois mois.",
      name: "Marie Kabongo",
      role: "Directrice, Boutique Élégance",
    },
  },
  {
    slug: "kinfood-campagne-meta",
    title: "KinFood — Campagne Meta Ads",
    client: "KinFood",
    category: "marketing",
    categoryLabel: "Marketing",
    tags: ["Meta Ads", "Growth Hacking", "Content"],
    date: "Janvier 2026",
    coverColor: "#E0A82E",
    resultHighlight: "-35% coût d'acquisition",
    challenge:
      "KinFood, chaîne de restauration rapide à Kinshasa, peinait à générer des commandes en ligne malgré une offre compétitive et une bonne notoriété locale.",
    approach:
      "Campagnes Meta Ads géolocalisées, création de contenus vidéo courts pour TikTok et Reels, et tunnel pub → WhatsApp → commande avec suivi ROAS hebdomadaire.",
    results: [
      { value: "-35%", label: "Coût d'acquisition client" },
      { value: "+80%", label: "Leads qualifiés" },
      { value: "4.2x", label: "ROAS moyen" },
    ],
    gallery: [
      { color: "#C8921F", label: "Créatives publicitaires" },
      { color: "#D49A22", label: "Dashboard performance" },
      { color: "#E0A82E", label: "Tunnel de conversion" },
    ],
  },
  {
    slug: "afrikstyle-rebranding",
    title: "AfrikStyle — Rebranding complet",
    client: "AfrikStyle",
    category: "branding",
    categoryLabel: "Branding",
    tags: ["Branding", "Print", "Direction artistique"],
    date: "Novembre 2025",
    coverColor: "#243558",
    resultHighlight: "+60% notoriété",
    challenge:
      "AfrikStyle, marque de mode africaine contemporaine, souffrait d'une identité visuelle disparate qui ne reflétait pas la qualité premium de ses collections.",
    approach:
      "Refonte complète de l'identité : logo, charte graphique, packaging, supports print et templates réseaux sociaux, avec un storytelling ancré dans l'artisanat congolais.",
    results: [
      { value: "+60%", label: "Notoriété assistée" },
      { value: "12", label: "Supports livrés" },
      { value: "100%", label: "Cohérence visuelle" },
    ],
    gallery: [
      { color: "#1B2A4A", label: "Logo & charte" },
      { color: "#243558", label: "Packaging" },
      { color: "#2D4263", label: "Réseaux sociaux" },
    ],
  },
  {
    slug: "logitrans-strategie-croissance",
    title: "LogiTrans — Stratégie de croissance",
    client: "LogiTrans RDC",
    category: "strategie",
    categoryLabel: "Stratégie",
    tags: ["Stratégie", "KPI", "Business Plan"],
    date: "Septembre 2025",
    coverColor: "#364E6E",
    resultHighlight: "+40% CA en 6 mois",
    challenge:
      "LogiTrans, PME de logistique, manquait de structure pour passer de 10 à 50 employés. Process informels, absence de KPI et fiscalité non optimisée freinaient la croissance.",
    approach:
      "Formalisation RCCM, mise en place d'un tableau de bord KPI, business plan sur 3 ans et restructuration organisationnelle avec des process documentés.",
    results: [
      { value: "+40%", label: "Chiffre d'affaires en 6 mois" },
      { value: "15", label: "KPI suivis en temps réel" },
      { value: "100%", label: "Conformité fiscale" },
    ],
    gallery: [
      { color: "#1B2A4A", label: "Business plan" },
      { color: "#243558", label: "Tableau de bord KPI" },
      { color: "#2D4263", label: "Organigramme" },
    ],
  },
  {
    slug: "techkin-saas-automation",
    title: "TechKin — Automatisation SaaS",
    client: "TechKin Solutions",
    category: "transformation",
    categoryLabel: "Transformation Digitale",
    tags: ["SaaS", "Automatisation", "Développement"],
    date: "Juillet 2025",
    coverColor: "#2D4263",
    resultHighlight: "-70% tâches manuelles",
    challenge:
      "TechKin gérait ses clients sur Excel et WhatsApp. Les relances, factures et suivis consommaient 20 heures par semaine de l'équipe.",
    approach:
      "Développement d'un outil SaaS interne : CRM, facturation automatique, relances programmées et tableau de bord temps réel, avec formation de l'équipe.",
    results: [
      { value: "-70%", label: "Tâches manuelles" },
      { value: "20h", label: "Économisées par semaine" },
      { value: "99.9%", label: "Disponibilité système" },
    ],
    gallery: [
      { color: "#1B2A4A", label: "Dashboard CRM" },
      { color: "#243558", label: "Module facturation" },
      { color: "#364E6E", label: "Automatisations" },
    ],
  },
  {
    slug: "congofoods-identite-marque",
    title: "CongoFoods — Identité de marque",
    client: "CongoFoods",
    category: "branding",
    categoryLabel: "Branding",
    tags: ["Branding", "Packaging", "Print"],
    date: "Mai 2025",
    coverColor: "#C8921F",
    resultHighlight: "+90% engagement social",
    challenge:
      "CongoFoods lançait une gamme de produits locaux premium mais sans identité visuelle cohérente pour se différencier sur le marché.",
    approach:
      "Création du logo, de la charte graphique, du packaging produit et des visuels pour les réseaux sociaux, avec une direction artistique chaleureuse et authentique.",
    results: [
      { value: "+90%", label: "Engagement réseaux sociaux" },
      { value: "8", label: "Produits packagés" },
      { value: "3", label: "Mois de lancement" },
    ],
    gallery: [
      { color: "#E0A82E", label: "Logo & charte" },
      { color: "#C8921F", label: "Packaging" },
      { color: "#D49A22", label: "Campagne lancement" },
    ],
  },
];

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
