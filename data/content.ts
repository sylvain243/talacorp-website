export const siteConfig = {
  name: "Talacorp",
  legalName: "Talacorporation",
  tagline: "L'agence de croissance qui parle congolais",
  location: "Kinshasa · RDC",
  address: "5D, Avenue du Tchad, Commune de la Gombe. Kinshasa - RDC",
  whatsapp: "+243903650808",
  whatsappMessage: "Bonjour Talacorp, je souhaite en savoir plus sur vos services.",
  email: "askme@talacorporation.com",
  phone: "+243 903 650 808",
  website: "https://talacorporation.com",
  hours: "Lun – Ven : 08h00 – 17h30",
  ctaLabel: "Demander une consultation gratuite",
  bookingSectionId: "consultation",
  social: {
    facebook: "https://www.facebook.com/Talacorp",
    instagram: "https://www.instagram.com/talacorp",
    website: "https://talacorporation.com",
  },
};

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  eyebrow: "VOTRE VISION, NOTRE EXPERTISE",
  titleBefore: "Nous aidons votre entreprise à",
  titleHighlight: "décoller",
  subtitle:
    "Stratégie, marketing digital, transformation digitale et branding — une agence tout-en-un à Kinshasa pour transformer vos ambitions en résultats mesurables.",
  /** Photo d'équipe Talacorp — remplacer public/hero-bg.jpg si besoin */
  backgroundImage: "/hero-bg.png",
};

export const stats = [
  { value: "150+", label: "Projets livrés" },
  { value: "97%", label: "Clients satisfaits" },
  { value: "x2", label: "Acquisition moyenne" },
  { value: "3 mois", label: "ROI moyen" },
];

export type ServiceCategory = "strategie" | "marketing" | "transformation" | "branding";

export interface ServiceWhyPoint {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  icon: string;
  heroImage: string;
  tagline: string;
  description: string;
  cardDescription: string;
  intro: string;
  whatWeDo: string[];
  benefits: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  forWho: string;
  subBrand?: string;
  problem?: string;
  promise?: string;
  methodName?: string;
  methodTagline?: string;
  whyTalacorp?: ServiceWhyPoint[];
  faqs?: ServiceFaq[];
  caseStudySlugs?: string[];
  consultationCta?: string;
}

export const serviceCategories: { id: ServiceCategory | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "strategie", label: "Stratégie" },
  { id: "marketing", label: "Marketing" },
  { id: "transformation", label: "Transformation Digitale" },
  { id: "branding", label: "Branding" },
];

export const services: Service[] = [
  {
    slug: "strategie-performance",
    title: "Stratégie & Performance",
    shortTitle: "Stratégie & Performance",
    subBrand: "Talacorp Scale",
    category: "strategie" as ServiceCategory,
    icon: "target",
    heroImage: "/services/strategie-performance.png",
    tagline: "Posez des bases solides et passez un cap !",
    description:
      "De la formalisation légale à la pilotage par les KPI, nous structurons votre entreprise pour qu'elle grandisse sereinement à Kinshasa et en RDC.",
    cardDescription:
      "Formalisation, fiscalité, organisation interne et tableaux de bord pour des décisions éclairées.",
    problem:
      "Vous vendez, vous grandissez — mais sans RCCM à jour, sans KPI clairs et avec des process informels, chaque nouveau contrat devient un risque. Vous pilotez à l'instinct alors que vos concurrents structurent.",
    promise:
      "Nous bâtissons les fondations solides de votre entreprise : conformité légale, organisation interne et tableaux de bord pour décider avec des chiffres, pas des impressions.",
    intro:
      "Beaucoup d'entreprises congolaises performent commercialement mais manquent de structure : comptabilité floue, absence de KPI, process informels. Nous transformons cette énergie en machine de croissance mesurable.",
    methodName: "Méthode P.I.L.O.T.E.",
    methodTagline:
      "Diagnostic, Plan, Implémentation, Outils, Tracking, Évolution — un cap clair sur 90 jours puis trimestre par trimestre.",
    consultationCta: "Réserver un diagnostic stratégique gratuit (30 min)",
    caseStudySlugs: ["gl-consult-plateforme-web", "groupe-loli-plateforme-web"],
    whyTalacorp: [
      {
        title: "Connaissance du terrain congolais",
        description:
          "RCCM, numéro impôt, fiscalité locale, réalités administratives à Kinshasa — nous connaissons les étapes concrètes pour mettre votre entreprise en règle.",
      },
      {
        title: "Stratégie + exécution",
        description:
          "Pas de business plan qui finit dans un tiroir. Nous déployons les outils, les process et les tableaux de bord avec vous sur le terrain.",
      },
      {
        title: "KPI actionnables",
        description:
          "Chaque indicateur est lié à une décision : marge, trésorerie, acquisition, rétention. Vous savez quoi corriger chaque semaine.",
      },
      {
        title: "Consultation gratuite, sans engagement",
        description:
          "30 minutes pour faire le point sur votre structure actuelle et identifier les 2–3 priorités immédiates.",
      },
    ],
    faqs: [
      {
        question: "Pouvez-vous m'aider à créer ma société (RCCM) à Kinshasa ?",
        answer:
          "Oui. Nous accompagnons la création ou la régularisation : statuts, RCCM, numéro impôt, et les premières démarches administratives. Le périmètre exact est défini lors du diagnostic gratuit.",
      },
      {
        question: "En quoi consiste un tableau de bord KPI ?",
        answer:
          "C'est un outil simple (Excel ou en ligne) qui centralise vos chiffres clés : CA, charges, marge, trésorerie, pipeline commercial. Mis à jour régulièrement, il remplace les intuitions par des décisions éclairées.",
      },
      {
        question: "Combien de temps pour structurer une PME existante ?",
        answer:
          "Les premiers livrables (diagnostic + plan 90 jours) arrivent en 2 à 4 semaines. La mise en place complète des process et KPI se fait sur 2 à 4 mois selon la taille de l'entreprise.",
      },
      {
        question: "Intervenez-vous aussi sur la fiscalité ?",
        answer:
          "Oui, dans le cadre de la mise en conformité et de l'optimisation fiscale légale. Pour les litiges complexes, nous travaillons avec des partenaires experts-comptables locaux.",
      },
    ],
    whatWeDo: [
      "Création et formalisation de société (RCCM, numéro impôt, statuts)",
      "Conseil fiscal et mise en conformité réglementaire",
      "Organisation interne, fiches de poste et optimisation des process",
      "Stratégie de croissance, business plan et tableaux de bord (KPI)",
      "Audit opérationnel et plan d'action priorisé sur 90 jours",
    ],
    benefits: [
      "Une entreprise en règle, prête à signer des contrats et lever des fonds",
      "Des décisions guidées par la donnée, pas par l'intuition",
      "Un cap clair avec des objectifs mesurables trimestriels",
      "Une équipe alignée sur les mêmes priorités",
    ],
    deliverables: [
      "Business plan ou note stratégique",
      "Tableau de bord KPI (Excel ou outil en ligne)",
      "Cartographie des process clés",
      "Plan de formalisation RCCM / fiscalité",
    ],
    process: [
      { step: "01", title: "Diagnostic", description: "Analyse de votre situation actuelle, forces et blocages." },
      { step: "02", title: "Stratégie", description: "Définition des objectifs, priorités et feuille de route." },
      { step: "03", title: "Mise en place", description: "Outils, process et tableaux de bord opérationnels." },
      { step: "04", title: "Suivi", description: "Points mensuels pour ajuster et accélérer." },
    ],
    forWho: "Entrepreneurs en création, PME en croissance, dirigeants qui veulent structurer avant de scaler.",
  },
  {
    slug: "marketing-acquisition",
    title: "Marketing & Acquisition",
    shortTitle: "Marketing & Acquisition",
    subBrand: "Talacorp Growth",
    category: "marketing" as ServiceCategory,
    icon: "megaphone",
    heroImage: "/services/marketing-acquisition.png",
    tagline: "Attirez, convertissez et fidélisez vos clients !",
    description:
      "Meta Ads, Google Ads, contenu et tunnels de conversion : nous construisons des campagnes qui génèrent des clients, pas seulement des likes.",
    cardDescription:
      "Meta Ads, Google Ads, tunnels de conversion et automatisation pour un flux régulier de clients.",
    problem:
      "Vous publiez, vous sponsorisez, parfois vous dépensez — mais les appels et commandes n'arrivent pas assez. Les leads WhatsApp s'évaporent, le coût par client grimpe, et vous ne savez pas quelle campagne rapporte vraiment.",
    promise:
      "Nous transformons votre budget publicitaire en flux régulier de clients qualifiés, avec des chiffres clairs : coût par lead, taux de conversion, retour sur investissement.",
    intro:
      "À Kinshasa, vos clients sont sur mobile, sur WhatsApp et sur les réseaux sociaux. Nous créons des campagnes adaptées à ces habitudes — avec un suivi rigoureux du coût par lead et du retour sur investissement.",
    methodName: "Méthode A.C.Q.U.I.R.E.",
    methodTagline:
      "Un cycle court et mesurable : Audit, Ciblage, Quick launch, Optimisation, Upscale, Reporting, Expansion.",
    consultationCta: "Réserver un audit marketing gratuit (30 min)",
    caseStudySlugs: ["nomaat-group-marketing-acquisition", "mpeti-avocats-presence-digitale"],
    whyTalacorp: [
      {
        title: "Expertise locale Kinshasa",
        description:
          "Campagnes pensées pour le mobile, WhatsApp Business et les habitudes d'achat congolaises — pas des modèles importés.",
      },
      {
        title: "Exécution, pas seulement des slides",
        description:
          "Nous lançons, optimisons et ajustons vos campagnes chaque semaine. Vous voyez les résultats, pas des recommandations dans un PDF.",
      },
      {
        title: "Pilotage par la data",
        description:
          "CPL, ROAS, taux de conversion : chaque franc dépensé est traçable. Vous savez ce qui marche et ce qu'il faut couper.",
      },
      {
        title: "Consultation gratuite, sans engagement",
        description:
          "30 minutes pour auditer votre situation et identifier 2–3 leviers concrets — avant de signer quoi que ce soit.",
      },
    ],
    faqs: [
      {
        question: "Combien faut-il pour lancer une campagne Meta à Kinshasa ?",
        answer:
          "Cela dépend de votre secteur et de vos objectifs. Nous définissons ensemble un budget média réaliste (souvent à partir de quelques centaines de dollars/mois) plus nos honoraires de gestion. L'audit gratuit permet d'estimer un plan adapté à votre situation.",
      },
      {
        question: "En combien de temps voit-on des résultats ?",
        answer:
          "Les premiers leads arrivent généralement sous 7 à 14 jours après le lancement. L'optimisation sérieuse et la baisse du coût d'acquisition se stabilisent sur 4 à 8 semaines.",
      },
      {
        question: "Travaillez-vous avec WhatsApp et mobile money ?",
        answer:
          "Oui. La majorité de nos tunnels de conversion passent par WhatsApp Business pour la prise de contact et la commande — c'est le canal le plus efficace à Kinshasa.",
      },
      {
        question: "Gérez-vous aussi le contenu (photos, vidéos) ?",
        answer:
          "Oui. Nous produisons ou adaptons les visuels et scripts vidéo courts (Reels, TikTok) optimisés pour le mobile et testés en A/B dans vos campagnes.",
      },
    ],
    whatWeDo: [
      "Campagnes publicitaires locales (Meta Ads, Google Ads, TikTok Ads)",
      "Content marketing : ligne éditoriale, vidéos courtes, réseaux sociaux",
      "Tunnels de conversion et automatisation des réponses WhatsApp",
      "Suivi des performances : CPL, ROAS, taux de conversion",
      "Tests A/B créatifs et optimisation hebdomadaire",
    ],
    benefits: [
      "Un flux régulier et prévisible de prospects qualifiés",
      "Un coût d'acquisition maîtrisé et en baisse",
      "Des campagnes améliorées en continu, pilotées par la donnée",
      "Une marque visible là où vos clients passent leur temps",
    ],
    deliverables: [
      "Stratégie média et calendrier éditorial",
      "Campagnes Meta / Google configurées et optimisées",
      "Tunnel de conversion (landing page + WhatsApp)",
      "Rapport mensuel de performance",
    ],
    process: [
      { step: "01", title: "Audit", description: "Analyse de votre offre, concurrence et audience locale." },
      { step: "02", title: "Lancement", description: "Création des campagnes, visuels et messages." },
      { step: "03", title: "Optimisation", description: "Ajustements quotidiens selon les données." },
      { step: "04", title: "Scale", description: "Augmentation du budget sur ce qui fonctionne." },
    ],
    forWho: "Commerçants, restaurateurs, e-commerçants et PME qui veulent un flux constant de nouveaux clients.",
  },
  {
    slug: "transformation-digitale",
    title: "Transformation Digitale",
    shortTitle: "Transformation Digitale",
    subBrand: "Talacorp Digital",
    category: "transformation" as ServiceCategory,
    icon: "monitor",
    heroImage: "/services/transformation-digitale.png",
    tagline: "Automatisez, digitalisez et encaissez plus facilement !",
    description:
      "Sites web, e-commerce, SaaS et automatisation : nous remplaçons vos process manuels par des outils fiables, adaptés au contexte congolais.",
    cardDescription:
      "Sites e-commerce, SaaS sur-mesure, automatisation et intégrations pour gagner en efficacité.",
    problem:
      "Vos équipes perdent des heures sur Excel et WhatsApp. Les commandes se perdent, les relances sont oubliées, et vous n'avez aucune visibilité en temps réel sur votre activité. Votre croissance est freinée par des outils inadaptés.",
    promise:
      "Nous digitalisons vos opérations avec des sites, apps et automatisations fiables — pensés pour le mobile, WhatsApp et les moyens de paiement locaux.",
    intro:
      "Feuilles Excel, relances manuelles, paiements non tracés… Nous digitalisons vos opérations pour gagner du temps, réduire les erreurs et encaisser plus facilement via mobile money et autres moyens locaux.",
    methodName: "Méthode B.U.I.L.D.",
    methodTagline:
      "Brief, UX/UI, Iteration, Launch, Drive — développement itératif avec validations à chaque étape.",
    consultationCta: "Réserver un audit digital gratuit (30 min)",
    caseStudySlugs: ["safecheck-rdc-digitalisation-sante", "oses-legal-plateforme-web", "cerise-care-plateforme-web"],
    whyTalacorp: [
      {
        title: "Solutions adaptées à la RDC",
        description:
          "Sites optimisés mobile, intégration WhatsApp Business, prise en compte des connexions locales et des habitudes de paiement congolaises.",
      },
      {
        title: "Du sur-mesure, pas du template",
        description:
          "Chaque outil est conçu pour vos process réels : CRM, e-commerce, facturation, tableaux de bord — pas un SaaS générique mal adapté.",
      },
      {
        title: "Formation incluse",
        description:
          "Nous formons vos équipes à utiliser les nouveaux outils. Vous restez autonomes après le lancement.",
      },
      {
        title: "Consultation gratuite, sans engagement",
        description:
          "30 minutes pour cartographier vos process actuels et estimer le gain de temps possible avec la digitalisation.",
      },
    ],
    faqs: [
      {
        question: "Combien coûte un site e-commerce à Kinshasa ?",
        answer:
          "Le budget dépend du nombre de produits, des fonctionnalités (paiement, livraison, WhatsApp) et du design. L'audit gratuit permet de chiffrer un projet réaliste adapté à votre activité.",
      },
      {
        question: "Proposez-vous l'intégration mobile money ?",
        answer:
          "Oui. Nous intégrons les solutions de paiement adaptées à votre contexte (mobile money, virement, paiement à la livraison) selon vos besoins et partenaires disponibles.",
      },
      {
        question: "Combien de temps pour livrer un site ou un outil SaaS ?",
        answer:
          "Un site vitrine : 3 à 6 semaines. E-commerce ou outil sur-mesure : 6 à 12 semaines selon la complexité. Nous livrons par itérations avec des versions testables en cours de route.",
      },
      {
        question: "Assurez-vous la maintenance après lancement ?",
        answer:
          "Oui. Nous proposons un support post-lancement et des contrats de maintenance pour corrections, mises à jour et évolutions.",
      },
    ],
    whatWeDo: [
      "Sites web vitrine et plateformes e-commerce performantes",
      "Solutions SaaS sur-mesure et automatisation des workflows",
      "Intégration d'outils (CRM, facturation, support client)",
      "Tableaux de bord temps réel et notifications automatiques",
      "Formation des équipes à l'utilisation des nouveaux outils",
    ],
    benefits: [
      "Un gain de temps majeur grâce à l'automatisation",
      "Des outils évolutifs qui grandissent avec votre entreprise",
      "Une présence digitale professionnelle et rapide",
      "Des paiements et commandes centralisés",
    ],
    deliverables: [
      "Site web ou application fonctionnelle",
      "Documentation et formation équipe",
      "Intégrations (WhatsApp, email, paiement)",
      "Support post-lancement",
    ],
    process: [
      { step: "01", title: "Cadrage", description: "Cartographie de vos process et besoins métier." },
      { step: "02", title: "Conception", description: "Maquettes, architecture technique et planning." },
      { step: "03", title: "Développement", description: "Build itératif avec validations régulières." },
      { step: "04", title: "Déploiement", description: "Mise en ligne, formation et suivi." },
    ],
    forWho: "PME freinées par des process manuels, porteurs de projets SaaS, commerçants voulant vendre en ligne.",
  },
  {
    slug: "branding-print",
    title: "Branding & Print",
    shortTitle: "Branding & Print",
    subBrand: "Talacorp Brand",
    category: "branding" as ServiceCategory,
    icon: "palette",
    heroImage: "/services/branding-print.png",
    tagline: "Créez une marque puissante et mémorable !",
    description:
      "Logo, charte graphique et supports print ou digitaux : une identité visuelle cohérente qui inspire confiance dès le premier contact.",
    cardDescription:
      "Logo, charte graphique, supports print et visuels digitaux pour une marque reconnaissable.",
    problem:
      "Votre logo change selon les supports, vos couleurs varient d'une carte de visite à l'autre, et vos clients ne vous reconnaissent pas en un coup d'œil. Une image disparate nuit à la confiance et à vos ventes.",
    promise:
      "Nous créons une identité visuelle forte et cohérente — logo, charte, print et digital — pour que votre marque inspire confiance dès le premier contact.",
    intro:
      "Votre marque est votre première poignée de main. Nous créons des identités visuelles fortes, adaptées au marché congolais — modernes, mémorables et déclinables sur tous vos supports.",
    methodName: "Méthode I.D.E.N.T.",
    methodTagline:
      "Immersion, Design, Exploration, Normalisation, Transmission — de la vision à la charte livrée.",
    consultationCta: "Réserver un audit de marque gratuit (30 min)",
    caseStudySlugs: ["ministere-travail-branding", "dinacope-branding-print"],
    whyTalacorp: [
      {
        title: "Identité ancrée localement",
        description:
          "Nous créons des marques modernes qui parlent au public congolais — sans copier des tendances étrangères déconnectées du terrain.",
      },
      {
        title: "Print + digital unifiés",
        description:
          "Cartes, packaging, enseignes, réseaux sociaux : une seule charte pour tous vos supports, livrée en fichiers prêts à l'emploi.",
      },
      {
        title: "Livrables professionnels",
        description:
          "Logo vectoriel, charte PDF, kit réseaux sociaux, fichiers print HD — tout ce qu'il faut pour imprimer et publier immédiatement.",
      },
      {
        title: "Consultation gratuite, sans engagement",
        description:
          "30 minutes pour analyser votre identité actuelle et définir les axes de repositionnement possibles.",
      },
    ],
    faqs: [
      {
        question: "Combien de propositions de logo recevons-nous ?",
        answer:
          "Nous présentons généralement 2 à 3 directions créatives après la phase d'immersion, puis nous affinons la piste retenue jusqu'à la version finale.",
      },
      {
        question: "La charte graphique inclut quoi exactement ?",
        answer:
          "Couleurs, typographies, usages du logo, déclinaisons print et digital, exemples d'application (carte de visite, réseaux sociaux, en-tête) et guide d'utilisation.",
      },
      {
        question: "Pouvez-vous gérer l'impression des supports ?",
        answer:
          "Nous livrons les fichiers prêts pour l'imprimeur (formats CMYK, fonds perdus). Nous pouvons aussi coordonner l'impression avec nos partenaires locaux sur demande.",
      },
      {
        question: "Combien de temps dure un projet de rebranding ?",
        answer:
          "Un logo + charte essentielle : 3 à 5 semaines. Un rebranding complet avec packaging et kit digital : 6 à 10 semaines selon le périmètre.",
      },
    ],
    whatWeDo: [
      "Logo et identité visuelle complète",
      "Charte graphique (couleurs, typographies, usages)",
      "Supports print : cartes, brochures, flyers, packaging, enseignes",
      "Visuels digitaux : réseaux sociaux, bannières, présentations",
      "Guide de marque pour une utilisation cohérente",
    ],
    benefits: [
      "Une marque reconnaissable qui inspire confiance",
      "Une image haut de gamme cohérente sur tous vos supports",
      "Un storytelling visuel qui fidélise vos clients",
      "Des fichiers prêts à imprimer ou publier",
    ],
    deliverables: [
      "Logo en formats vectoriels et PNG",
      "Charte graphique PDF",
      "Kit réseaux sociaux (posts, stories)",
      "Fichiers print prêts pour l'imprimeur",
    ],
    process: [
      { step: "01", title: "Immersion", description: "Compréhension de votre vision, valeurs et cible." },
      { step: "02", title: "Création", description: "Propositions créatives et itérations." },
      { step: "03", title: "Finalisation", description: "Logo, charte et déclinaisons validées." },
      { step: "04", title: "Livraison", description: "Kit complet + guide d'utilisation." },
    ],
    forWho: "Nouvelles marques en lancement, entreprises en repositionnement, commerces voulant se démarquer.",
  },
];

export interface HomeTestimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const homeTestimonials: HomeTestimonial[] = [
  {
    quote:
      "Talacorp a digitalisé l'ensemble de nos processus métiers et renforcé notre visibilité auprès de nos clients institutionnels. Un partenaire technique de confiance.",
    name: "SafeCheck RDC",
    role: "Gestion des soins de santé — Kinshasa",
    initials: "SC",
  },
  {
    quote:
      "En moins d'un an, notre marque s'est imposée comme référence premium. Talacorp a su traduire notre expertise en une présence digitale qui convertit.",
    name: "Nomaat Group",
    role: "Conseil fiscal & déménagement pro. — RDC",
    initials: "NG",
  },
  {
    quote:
      "Notre cabinet dispose enfin d'une vitrine digitale à la hauteur de notre expertise OHADA. Crédible, bilingue et visible auprès de nos clients d'affaires.",
    name: "Cabinet Mpeti & Avocats",
    role: "Droit des affaires — Kinshasa",
    initials: "MA",
  },
  {
    quote:
      "De l'identité visuelle à la plateforme web, Talacorp a structuré notre lancement avec professionnalisme. Une équipe qui comprend le marché congolais.",
    name: "Cerise Care",
    role: "Services de santé à domicile — RDC",
    initials: "CC",
  },
];

/** @deprecated Utiliser homeTestimonials */
export const homeTestimonial = homeTestimonials[0];

export const bookingSection = {
  title: "Réalisons quelque chose d'incroyable ensemble !",
  subtitle:
    "Réservez un créneau : 15 ou 30 minutes pour parler de vos objectifs, sans engagement.",
  meetingTypes: [
    {
      slug: "30min",
      label: "Consultation complète",
      duration: "30 min",
      description: "Idéal pour un premier échange approfondi sur votre projet et vos objectifs.",
    },
    {
      slug: "15min",
      label: "Échange rapide",
      duration: "15 min",
      description: "Parfait pour une question précise ou un premier contact.",
    },
  ],
  highlights: [
    { title: "Équipe d'experts", description: "Des spécialistes dédiés à votre croissance" },
    { title: "Agence primée", description: "Reconnue pour l'excellence et l'innovation" },
    { title: "Résultats mesurables", description: "Chaque action est pilotée par la donnée" },
  ],
};

export const aboutContent = {
  heroTitle: "À propos de Talacorp",
  heroSubtitle: "L'agence de croissance qui parle congolais.",
  mission:
    "Nous transformons les ambitions des entrepreneurs congolais en résultats concrets. De la stratégie à l'exécution, nous accompagnons chaque étape de votre croissance.",
  vision:
    "Devenir la référence en matière de croissance digitale en RDC, en combinant expertise internationale et compréhension profonde du marché local.",
  values: [
    { title: "Résultats", description: "Chaque action est mesurée et optimisée pour maximiser votre ROI." },
    { title: "Proximité", description: "Une équipe locale qui comprend vos défis et parle votre langue." },
    { title: "Innovation", description: "Des solutions modernes adaptées aux réalités du terrain congolais." },
  ],
};

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${phone}?text=${text}`;
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getBookingUrl() {
  return process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://www.cal.eu/talacorp";
}

export function getBookingEventUrl(eventSlug?: string) {
  const base = getBookingUrl().replace(/\/$/, "");
  if (!eventSlug) return base;
  return `${base}/${eventSlug}`;
}

export function getConsultationHref() {
  return `/#${siteConfig.bookingSectionId}`;
}
