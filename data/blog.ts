export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverColor: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "vendre-en-ligne-kinshasa",
    title: "Comment vendre en ligne à Kinshasa en 2026",
    excerpt:
      "WhatsApp Business, mobile money et réseaux sociaux : le trio gagnant pour les commerçants congolais qui veulent digitaliser leurs ventes.",
    category: "Marketing",
    date: "15 juin 2026",
    readTime: "5 min",
    coverColor: "#1B2A4A",
  },
  {
    slug: "formaliser-entreprise-rccm",
    title: "Formaliser son entreprise en RDC : guide RCCM",
    excerpt:
      "RCCM, numéro impôt, statuts : tout ce qu'il faut savoir pour créer une société en règle et débloquer un compte marchand mobile money.",
    category: "Stratégie",
    date: "2 juin 2026",
    readTime: "7 min",
    coverColor: "#243558",
  },
  {
    slug: "meta-ads-rdc-bonnes-pratiques",
    title: "Meta Ads en RDC : 5 bonnes pratiques",
    excerpt:
      "Ciblage géographique, créatives adaptées au mobile et parcours WhatsApp : nos conseils pour des campagnes performantes à Kinshasa.",
    category: "Marketing",
    date: "20 mai 2026",
    readTime: "6 min",
    coverColor: "#E0A82E",
  },
  {
    slug: "branding-marque-congolaise",
    title: "Construire une marque congolaise qui inspire confiance",
    excerpt:
      "Storytelling, identité visuelle et cohérence : les clés pour une marque authentique qui résonne avec les consommateurs locaux.",
    category: "Branding",
    date: "8 mai 2026",
    readTime: "4 min",
    coverColor: "#364E6E",
  },
  {
    slug: "automatiser-pme-rdc",
    title: "Automatiser sa PME : par où commencer ?",
    excerpt:
      "CRM, facturation, relances : les outils essentiels pour libérer du temps et scaler votre activité en RDC.",
    category: "Transformation Digitale",
    date: "25 avril 2026",
    readTime: "8 min",
    coverColor: "#2D4263",
  },
  {
    slug: "roi-marketing-digital",
    title: "Mesurer le ROI de votre marketing digital",
    excerpt:
      "KPI, tableaux de bord et attribution : comment savoir si vos investissements marketing rapportent vraiment.",
    category: "Stratégie",
    date: "10 avril 2026",
    readTime: "5 min",
    coverColor: "#C8921F",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
