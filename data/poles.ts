/**
 * Les 4 pôles TALACORP, dans l'ordre de vie d'une entreprise :
 * naître, se faire reconnaître, s'équiper, grandir.
 * Les slugs reprennent ceux de data/content.ts pour garder les URL /services/<slug>.
 */

export interface PoleImage {
  src: string;
  alt: string;
}

export interface PoleCard {
  title: string;
  text: string;
  image?: PoleImage;
  href?: string;
}

export interface PoleFeature {
  id?: string;
  eyebrow: string;
  title: string;
  text?: string;
  bullets?: string[];
  images: PoleImage[];
  chips?: string[];
  link?: { label: string; href: string };
  dark?: boolean;
  /** Sous-service présenté en bandeau discret (ex. affichage TRANSCO) */
  compact?: boolean;
}

export interface PoleOffer {
  title: string;
  file: string;
  size: string;
}

export interface Pole {
  slug: string;
  num: string;
  stage: string;
  title: string;
  metaDescription: string;
  card: { text: string; image: PoleImage };
  hero: { title: string; text: string; images: PoleImage[]; ctaLabel: string };
  intro?: { title: string; items: { title: string; text: string }[] };
  prestationsTitle: string;
  prestations: PoleCard[];
  features: PoleFeature[];
  methodTitle: string;
  method: { title: string; text: string }[];
  offers: PoleOffer[];
  faqs: { question: string; answer: string }[];
}

import { BOUTIQUE_HREF } from "./content";

const img = (src: string, alt: string): PoleImage => ({ src: `/images/${src}`, alt });

export const poles: Pole[] = [
  {
    slug: "strategie-performance",
    num: "01",
    stage: "Naître",
    title: "Stratégie & Performance",
    metaDescription:
      "Création et formalisation d'entreprise, conformité, organisation et tableaux de bord à Kinshasa. Des bases solides pour une entreprise qui dure.",
    card: {
      text: "Création et formalisation, conformité, organisation, business plan et tableaux de bord.",
      image: img("poignee-de-main.jpg", "Poignée de main entre partenaires"),
    },
    hero: {
      title: "Des bases solides pour une entreprise qui dure",
      text: "Création, mise en conformité, organisation et pilotage : nous structurons votre entreprise pour qu'elle soit prête à grandir.",
      images: [img("equipe-reunion.jpg", "Équipe dirigeante en réunion")],
      ctaLabel: "Demander une consultation gratuite",
    },
    intro: {
      title: "Pour qui ?",
      items: [
        { title: "Porteurs de projet", text: "Vous voulez créer votre société en RDC." },
        { title: "PME en croissance", text: "Votre entreprise grandit et doit s'organiser." },
        { title: "Dirigeants", text: "Vous voulez piloter avec des chiffres fiables." },
        { title: "Appels d'offres", text: "Vous préparez un appel d'offres ou une levée de fonds." },
      ],
    },
    prestationsTitle: "Nos prestations",
    prestations: [
      { title: "Création et formalisation", text: "RCCM, ID NAT, NIF, statuts et accompagnement au guichet unique." },
      { title: "Conformité", text: "Obligations fiscales, sociales et dossiers fournisseurs auprès des grands comptes." },
      { title: "Organisation", text: "Organigramme, fiches de poste, procédures et outils de travail." },
      { title: "Pilotage", text: "Business plan, budget, tableaux de bord et indicateurs de performance." },
    ],
    features: [
      {
        eyebrow: "Tableaux de bord",
        title: "Décidez avec des chiffres à jour",
        text: "Ventes, trésorerie, charges, activité commerciale : nous construisons avec vous les indicateurs utiles et le rythme pour les suivre.",
        images: [img("dashboard.jpg", "Tableau de bord de suivi d'activité")],
        link: { label: "Les outils sont développés par notre pôle digital", href: "/services/transformation-digitale" },
      },
    ],
    methodTitle: "Notre démarche",
    method: [
      { title: "Diagnostic", text: "Où en est l'entreprise, ce qui manque, ce qui presse." },
      { title: "Feuille de route", text: "Les priorités, le calendrier et qui fait quoi." },
      { title: "Mise en place", text: "Dossiers, procédures et outils livrés et expliqués." },
      { title: "Suivi", text: "Points réguliers pour ajuster et avancer." },
    ],
    offers: [{ title: "Offre Stratégie & Performance", file: "Offre-Strategie-Performance-TALACORP.pdf", size: "1,9 Mo" }],
    faqs: [
      {
        question: "Combien de temps pour créer une société ?",
        answer: "Cela dépend de la forme juridique et du dossier. Nous vous donnons un calendrier précis après la consultation.",
      },
      {
        question: "Pouvez-vous nous aider à devenir fournisseur d'une grande entreprise ?",
        answer: "Oui. Nous préparons le dossier administratif et la présentation de votre société pour l'enregistrement fournisseur.",
      },
      {
        question: "Comment est fixé le prix ?",
        answer: "Chaque mission fait l'objet d'un devis selon votre besoin, après une première consultation gratuite.",
      },
    ],
  },
  {
    slug: "branding-print",
    num: "02",
    stage: "Se faire reconnaître",
    title: "Branding & Print",
    metaDescription:
      "Identité visuelle, impression grand et petit format, goodies et habillage des bus TRANSCO à Kinshasa.",
    card: {
      text: "Identité visuelle, impression grand et petit format, goodies et habillage des bus TRANSCO.",
      image: img("branding.jpg", "Travail de création d'identité visuelle"),
    },
    hero: {
      title: "Votre marque, imprimée sur tous les supports",
      text: "Création d'identité, impression grand et petit format, goodies et habillage des bus TRANSCO, réalisés par une seule équipe.",
      images: [img("branding.jpg", "Création d'une identité visuelle")],
      ctaLabel: "Demander un devis",
    },
    intro: {
      title: "Deux situations, une même exigence",
      items: [
        {
          title: "Vous avez déjà une charte",
          text: "Nous la respectons à la lettre et la déclinons sur chaque support, avec des couleurs fidèles d'une commande à l'autre.",
        },
        {
          title: "Votre marque est à créer",
          text: "Logo, couleurs, typographies et règles d'usage : nous construisons une identité claire, prête à être imprimée.",
        },
      ],
    },
    prestationsTitle: "Nos prestations",
    prestations: [
      { title: "Création d'identité", text: "Logo, charte graphique, papeterie." },
      { title: "Grand format", text: "Bâches, kakemonos, enseignes, stands, habillage de véhicules." },
      { title: "Petit format", text: "Cartes de visite, flyers, brochures, rapports." },
      { title: "Goodies", text: "Textile, objets, bureau, événementiel.", href: BOUTIQUE_HREF },
    ],
    features: [
      {
        id: "transco",
        eyebrow: "Sous-service · Affichage sur les bus TRANSCO",
        title: "De la maquette à la pose sur le bus",
        text: "Nous adaptons votre visuel aux gabarits TRANSCO, imprimons et posons l'habillage. Bet and You circule déjà avec nous.",
        images: [img("bus-transco.jpg", "Bus TRANSCO aux couleurs de Bet and You")],
        chips: ["Habillage complet", "Dos de bus", "Durée selon votre campagne"],
        link: { label: "Intégrer le bus à une campagne", href: "/services/marketing-acquisition#transco" },
        compact: true,
      },
    ],
    methodTitle: "Notre méthode",
    method: [
      { title: "Brief", text: "Vos supports, quantités et délais." },
      { title: "Création", text: "Maquettes à valider." },
      { title: "BAT", text: "Bon à tirer signé avant impression." },
      { title: "Production", text: "Impression et contrôle qualité." },
      { title: "Livraison et pose", text: "Dans vos locaux ou sur site." },
    ],
    offers: [
      { title: "Offre Branding & Print", file: "Offre-Branding-Print-TALACORP.pdf", size: "1,8 Mo" },
      { title: "Offre affichage bus TRANSCO", file: "Offre-TRANSCO-TALACORP.pdf", size: "1,8 Mo" },
    ],
    faqs: [
      {
        question: "Quelle quantité minimum pour les goodies ?",
        answer: "Elle varie selon l'objet et la technique de marquage. Indiquez votre besoin, nous vous proposons la meilleure option.",
      },
      {
        question: "Fournissez-vous les fichiers sources ?",
        answer: "Oui, pour toute création d'identité, les fichiers sources et la charte vous sont remis.",
      },
      {
        question: "Combien de temps dure un affichage sur bus ?",
        answer: "La durée est fixée selon votre campagne. Nous en discutons lors du devis.",
      },
    ],
  },
  {
    slug: "transformation-digitale",
    num: "03",
    stage: "S'équiper",
    title: "Transformation digitale",
    metaDescription:
      "Sites web, applications métier, logiciels de gestion sur mesure, hébergement et infogérance à Kinshasa.",
    card: {
      text: "Sites web, applications, logiciels de gestion sur mesure et partenariat IT.",
      image: img("developpeur.jpg", "Développeur travaillant sur deux écrans"),
    },
    hero: {
      title: "Des outils numériques à la mesure de votre activité",
      text: "Site web moderne, application métier, logiciel de gestion : nous concevons, développons, hébergeons et faisons évoluer vos outils.",
      images: [
        img("developpeur.jpg", "Développeur au travail sur deux écrans"),
        img("dashboard.jpg", "Tableau de bord d'une application"),
      ],
      ctaLabel: "Parler de mon projet",
    },
    prestationsTitle: "Ce que nous réalisons",
    prestations: [
      { title: "Sites web", text: "Sites vitrines et institutionnels rapides, clairs et faciles à mettre à jour." },
      { title: "Applications métier", text: "Web et mobile, pour vos équipes de terrain comme pour vos clients." },
      { title: "Logiciels de gestion", text: "Stocks, ventes, RH, facturation, tableaux de bord sur mesure." },
      { title: "Hébergement et infogérance", text: "Mise en ligne, sauvegardes, sécurité et maintenance continue." },
    ],
    features: [
      {
        eyebrow: "Réalisation",
        title: "CERISE RDC",
        text: "Conception des plateformes Syndic, Care et Immo, avec hébergement et infogérance assurés par nos équipes.",
        images: [img("dashboard.jpg", "Plateforme web avec tableau de bord")],
        link: { label: "Voir les autres réalisations", href: "/realisations" },
      },
    ],
    methodTitle: "Comment nous travaillons",
    method: [
      { title: "Cadrage", text: "Vos besoins, vos utilisateurs, vos priorités." },
      { title: "Maquettes", text: "Vous voyez l'outil avant qu'il soit développé." },
      { title: "Développement", text: "Livraisons par étapes, testées avec vous." },
      { title: "Mise en ligne et suivi", text: "Formation, hébergement et évolutions." },
    ],
    offers: [{ title: "Offre Transformation digitale", file: "Offre-Transformation-Digitale-TALACORP.pdf", size: "1,8 Mo" }],
    faqs: [
      {
        question: "Pouvez-vous reprendre un site ou une application existante ?",
        answer: "Oui. Nous faisons d'abord un état des lieux, puis nous proposons une refonte ou une reprise en maintenance.",
      },
      {
        question: "Serons-nous propriétaires de notre outil ?",
        answer: "Oui, le code et les données vous appartiennent. Les conditions sont précisées dans le contrat.",
      },
      {
        question: "Proposez-vous la formation des équipes ?",
        answer: "Chaque mise en ligne s'accompagne d'une formation des utilisateurs et d'un guide d'utilisation.",
      },
    ],
  },
  {
    slug: "marketing-acquisition",
    num: "04",
    stage: "Grandir",
    title: "Marketing & Acquisition",
    metaDescription:
      "Campagnes Meta, Google et TikTok, vidéos animées et explicatives, affichage sur les bus TRANSCO à Kinshasa.",
    card: {
      text: "Campagnes publicitaires, vidéos animées et explicatives, affichage sur les bus TRANSCO.",
      image: img("smartphone.jpg", "Femme souriante tenant un smartphone"),
    },
    hero: {
      title: "Plus de clients, campagne après campagne",
      text: "Publicité en ligne, vidéos animées et explicatives, affichage sur les bus TRANSCO : nous faisons connaître votre offre et suivons ce que chaque campagne rapporte.",
      images: [img("smartphone.jpg", "Utilisatrice consultant une publicité sur mobile")],
      ctaLabel: "Lancer ma campagne",
    },
    prestationsTitle: "Nos leviers",
    prestations: [
      { title: "Campagnes en ligne", text: "Meta, Google et TikTok, ciblées sur vos clients.", image: img("smartphone.jpg", "Publicité sur smartphone"), href: "#campagnes" },
      { title: "Vidéos animées", text: "Animations produits et vidéos explicatives.", image: img("animation-3d.jpg", "Personnage 3D animé"), href: "#videos" },
      { title: "Spots et réseaux sociaux", text: "Tournage, montage et formats verticaux.", image: img("video-materiel.jpg", "Matériel de tournage"), href: "#videos" },
      { title: "Suivi des résultats", text: "Coût par contact, demandes reçues et bilans réguliers.", image: img("dashboard.jpg", "Tableau de suivi des résultats"), href: "#campagnes" },
    ],
    features: [
      {
        id: "campagnes",
        eyebrow: "Campagnes publicitaires",
        title: "Chaque dollar investi est suivi",
        bullets: [
          "Stratégie, ciblage et création des visuels.",
          "Pilotage quotidien des campagnes Meta, Google et TikTok.",
          "Suivi du coût par contact et des demandes reçues.",
          "Rapport clair et recommandations à chaque bilan.",
        ],
        images: [
          img("dashboard.jpg", "Tableau de suivi de campagne"),
          img("smartphone.jpg", "Utilisatrice consultant une publicité sur mobile"),
        ],
      },
      {
        id: "videos",
        eyebrow: "Vidéo & animation",
        title: "Faites comprendre votre offre en une minute",
        text: "Vidéos explicatives, animations produits 2D ou 3D, spots publicitaires et formats courts pour les réseaux sociaux. Idéal pour présenter un produit, expliquer un service ou former vos équipes de vente et vos distributeurs.",
        images: [
          img("animation-3d.jpg", "Animation 3D d'un personnage"),
          img("video-montage.jpg", "Montage d'une vidéo verticale"),
          img("video-materiel.jpg", "Caméra et matériel de tournage"),
        ],
        chips: ["Vidéo explicative", "Animation produit", "Spot publicitaire", "Réseaux sociaux"],
        dark: true,
      },
      {
        id: "transco",
        eyebrow: "Sous-service · Affichage sur les bus TRANSCO",
        title: "Le bus, relais de votre campagne en ligne",
        text: "Nous coordonnons l'affichage sur les bus avec vos publicités digitales et vos vidéos, pour un même message vu partout dans Kinshasa.",
        images: [img("mockup-bus-flanc.jpg", "Maquette d'habillage d'un bus TRANSCO")],
        compact: true,
        link: { label: "Impression et pose de l'habillage", href: "/services/branding-print#transco" },
      },
    ],
    methodTitle: "Notre méthode",
    method: [
      { title: "Objectifs", text: "Qui toucher, quoi vendre, quel budget." },
      { title: "Création", text: "Visuels, vidéos et messages validés avec vous." },
      { title: "Diffusion", text: "En ligne, sur les bus ou les deux." },
      { title: "Bilan", text: "Résultats suivis et recommandations." },
    ],
    offers: [
      { title: "Offre Marketing & Acquisition", file: "Offre-Marketing-Acquisition-TALACORP.pdf", size: "1,8 Mo" },
      { title: "Offre Vidéo & Animation", file: "Offre-Video-Animation-TALACORP.pdf", size: "1,9 Mo" },
      { title: "Offre affichage bus TRANSCO", file: "Offre-TRANSCO-TALACORP.pdf", size: "1,8 Mo" },
    ],
    faqs: [
      {
        question: "Quel budget prévoir pour une campagne ?",
        answer: "Il dépend de vos objectifs et de votre audience. Nous vous proposons un budget adapté dans le devis.",
      },
      {
        question: "Combien de temps pour produire une vidéo animée ?",
        answer: "Le délai dépend de la durée et du style. Le calendrier de production est fixé avec vous dès le départ.",
      },
      {
        question: "Les vidéos sont-elles en français et en lingala ?",
        answer: "Oui, voix off et sous-titres peuvent être réalisés dans la langue de votre public.",
      },
    ],
  },
];

export function getPoleBySlug(slug: string) {
  return poles.find((p) => p.slug === slug);
}

export function getNextPole(slug: string) {
  const i = poles.findIndex((p) => p.slug === slug);
  return i >= 0 && i < poles.length - 1 ? poles[i + 1] : undefined;
}

export const generalOffer: PoleOffer = {
  title: "Offre de service TALACORP",
  file: "Offre-de-service-TALACORP.pdf",
  size: "2,5 Mo",
};

export const clientLogos: PoleImage[] = [
  img("logos/ministere-communication.png", "Ministère de la Communication et Médias"),
  img("logos/ministere-emploi.png", "Ministère de l'Emploi et Travail"),
  img("logos/dinacope.png", "DINACOPE"),
  img("logos/safecheck.png", "Safecheck RDC"),
  img("logos/cerise.png", "CERISE RDC"),
  img("logos/nomaat.png", "Nomaat Group"),
  img("logos/lex-legal.jpg", "Lex and Legal Practice"),
  img("logos/elite-law.png", "Elite Law Firm"),
  img("logos/medecins-de-nuit.jpg", "Médecins de nuit"),
  img("logos/belca.png", "BELCA Services"),
  img("logos/bet-and-you.png", "Bet and You"),
  img("logos/afrewatch.png", "Afrewatch"),
  img("logos/oearse.png", "OEARSE"),
  img("logos/congo-pas-a-vendre.jpg", "Le Congo n'est pas à vendre"),
  img("logos/synafet.png", "SYNAFET"),
];
