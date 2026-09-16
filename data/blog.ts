export interface BlogSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  readTime: string;
  coverColor: string;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
  cta: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "vendre-en-ligne-kinshasa",
    title: "Comment vendre en ligne à Kinshasa en 2026",
    excerpt:
      "WhatsApp Business, mobile money et réseaux sociaux : le trio gagnant pour les commerçants congolais qui veulent digitaliser leurs ventes.",
    category: "Marketing",
    date: "15 juin 2026",
    dateISO: "2026-06-15",
    readTime: "5 min",
    coverColor: "#1B2A4A",
    intro:
      "Vendre en ligne à Kinshasa n'est plus une option réservée aux grandes enseignes : c'est devenu le canal de croissance le plus accessible pour les PME congolaises. Avec des millions d'utilisateurs actifs sur les réseaux sociaux et l'adoption massive du mobile money, la capitale offre aujourd'hui un terrain de jeu réel pour le commerce digital. Encore faut-il s'y prendre avec méthode.",
    sections: [
      {
        title: "1. Choisir le bon canal de vente",
        paragraphs: [
          "À Kinshasa, la vente en ligne commence rarement par un site e-commerce classique. Elle commence là où se trouvent vos clients : WhatsApp, Facebook et Instagram. Le « social commerce » (présenter ses produits sur les réseaux et conclure la vente par messagerie) reste le modèle dominant. Un site web vient ensuite crédibiliser votre marque, centraliser votre catalogue et capter le trafic issu de Google.",
        ],
        list: [
          "WhatsApp Business : idéal pour démarrer, gérer les commandes et fidéliser par listes de diffusion.",
          "Facebook & Instagram : pour la visibilité, la preuve sociale (avis, commentaires) et la publicité ciblée.",
          "Site web avec catalogue : pour professionnaliser l'image, référencer vos produits sur Google et rassurer les clients B2B.",
        ],
      },
      {
        title: "2. Résoudre les deux nerfs de la guerre : paiement et livraison",
        paragraphs: [
          "Le paiement à la livraison rassure encore beaucoup de clients kinois, mais le mobile money (M-Pesa, Orange Money, Airtel Money) s'impose comme le standard : proposez systématiquement les deux. Côté livraison, appuyez-vous sur des coursiers indépendants ou des services de livraison locaux, et soyez transparent sur les délais et les frais par commune : c'est l'un des premiers critères de confiance.",
        ],
      },
      {
        title: "3. Construire la confiance, l'actif le plus rare",
        paragraphs: [
          "La fraude en ligne a rendu le consommateur congolais prudent. Pour vendre, il faut prouver : photos réelles de vos produits, avis clients visibles, numéro de téléphone joignable, adresse physique si possible, et politique claire d'échange. Une marque qui répond vite et tient ses promesses de livraison se démarque immédiatement.",
        ],
      },
      {
        title: "4. Investir intelligemment en publicité",
        paragraphs: [
          "Quelques dollars par jour en publicité Meta bien ciblée (par commune, centre d'intérêt et comportement d'achat) suffisent pour générer des conversations de vente. La clé n'est pas le budget mais la répétition : testez plusieurs visuels, mesurez le coût par conversation et réinvestissez dans ce qui fonctionne.",
        ],
      },
    ],
    conclusion:
      "Vendre en ligne à Kinshasa en 2026, c'est combiner le social commerce, le mobile money, une logistique fiable et une image de marque qui inspire confiance. Les entreprises qui structurent ces quatre piliers dès maintenant prendront une avance durable sur leur marché.",
    cta: "Talacorp accompagne les PME congolaises dans la création de leur boutique en ligne et de leur stratégie de vente digitale. Parlons de votre projet.",
  },
  {
    slug: "formaliser-entreprise-rccm",
    title: "Formaliser son entreprise en RDC : guide RCCM",
    excerpt:
      "RCCM, numéro impôt, statuts : tout ce qu'il faut savoir pour créer une société en règle et débloquer un compte marchand mobile money.",
    category: "Stratégie",
    date: "2 juin 2026",
    dateISO: "2026-06-02",
    readTime: "7 min",
    coverColor: "#243558",
    intro:
      "En République Démocratique du Congo, des milliers d'activités prospères restent informelles et se privent ainsi d'accès aux marchés publics, aux financements bancaires, aux contrats avec les grandes entreprises et aux partenariats internationaux. La formalisation, encadrée par le droit OHADA, est la première marche vers la croissance. Voici le parcours, étape par étape.",
    sections: [
      {
        title: "1. Pourquoi se formaliser ?",
        list: [
          "Accéder aux marchés B2B : seules les entreprises immatriculées peuvent facturer légalement les entreprises, ONG et institutions.",
          "Financer sa croissance : un compte bancaire professionnel et un historique formel sont indispensables pour obtenir un crédit.",
          "Protéger l'entrepreneur : l'entreprise formalisée (SARL notamment) sépare le patrimoine personnel du patrimoine professionnel.",
          "Saisir les opportunités : répondre aux appels d'offres publics et privés exige RCCM, identification nationale et numéro d'impôt.",
        ],
        paragraphs: [],
      },
      {
        title: "2. Choisir sa forme juridique",
        paragraphs: [
          "Le droit OHADA offre plusieurs statuts. L'entreprise individuelle (établissement) est simple mais n'offre aucune séparation de patrimoine. La SARL (Société à Responsabilité Limitée) est la forme la plus utilisée par les PME : capital libre, un ou plusieurs associés, responsabilité limitée aux apports. La SAS et la SA s'adressent aux projets avec investisseurs ou à plus grande échelle.",
        ],
      },
      {
        title: "3. Le parcours d'immatriculation au Guichet Unique",
        paragraphs: [
          "Le Guichet Unique de Création d'Entreprise (GUCE) centralise les démarches et délivre en principe les documents en quelques jours ouvrables :",
        ],
        list: [
          "rédaction et enregistrement des statuts (pour les sociétés) ;",
          "obtention du RCCM (Registre du Commerce et du Crédit Mobilier) ;",
          "obtention de l'Identification Nationale (Id. Nat.) ;",
          "attribution du Numéro d'Impôt auprès de la DGI ;",
          "affiliation à la CNSS et à l'INPP dès l'embauche des premiers salariés.",
        ],
      },
      {
        title: "4. Après l'immatriculation : rester en conformité",
        paragraphs: [
          "La formalisation ne s'arrête pas au RCCM. Il faut tenir une comptabilité conforme au référentiel SYSCOHADA, déclarer et payer ses impôts (impôt sur les bénéfices, TVA le cas échéant, impôts sur les rémunérations), et respecter les obligations sociales. Beaucoup d'entrepreneurs échouent non pas à se créer, mais à rester en règle : d'où l'intérêt d'un accompagnement.",
        ],
      },
    ],
    conclusion:
      "Se formaliser en RDC est un investissement, pas une contrainte : c'est le passeport vers les clients, les financements et les marchés qui font changer d'échelle. Avec une bonne préparation des documents et un accompagnement adapté, le processus est plus rapide et moins coûteux qu'on ne le croit.",
    cta: "Talacorp accompagne les PME et micro-entreprises dans la formalisation de leurs activités et la mise en place de leurs outils de gestion. Contactez-nous.",
  },
  {
    slug: "meta-ads-rdc-bonnes-pratiques",
    title: "Meta Ads en RDC : 5 bonnes pratiques",
    excerpt:
      "Ciblage géographique, créatives adaptées au mobile et parcours WhatsApp : nos conseils pour des campagnes performantes à Kinshasa.",
    category: "Marketing",
    date: "20 mai 2026",
    dateISO: "2026-05-20",
    readTime: "6 min",
    coverColor: "#E0A82E",
    intro:
      "Facebook et Instagram concentrent l'essentiel de l'audience digitale congolaise : c'est là que se joue la bataille de l'attention. Mais beaucoup d'entreprises « boostent » des publications sans stratégie et concluent que « la pub ne marche pas ». En réalité, Meta Ads fonctionne très bien en RDC, à condition de respecter quelques règles du jeu local. Voici les 5 pratiques que nous appliquons pour nos clients.",
    sections: [
      {
        title: "1. Optimiser pour les conversations, pas pour les « likes »",
        paragraphs: [
          "En RDC, la vente se conclut en messagerie. Configurez vos campagnes avec l'objectif « Messages » (WhatsApp ou Messenger) plutôt que l'engagement. Votre indicateur clé devient le coût par conversation entamée : c'est lui qui mesure le vrai retour sur investissement, pas le nombre de réactions.",
        ],
      },
      {
        title: "2. Cibler finement la géographie et l'appareil",
        paragraphs: [
          "Kinshasa n'est pas un marché homogène : le pouvoir d'achat et les habitudes varient d'une commune à l'autre. Ciblez par zones (rayon autour de la Gombe, Limete, Ngaliema...) selon votre zone de livraison ou de chalandise. Pensez aussi aux formats légers : une grande partie de l'audience navigue sur mobile avec une connexion limitée. Privilégiez des visuels compressés et des vidéos courtes.",
        ],
      },
      {
        title: "3. Créer pour le contexte local",
        paragraphs: [
          "Les publicités qui performent en RDC parlent la langue du client : le français simple, parfois le lingala, des visages et décors locaux, des prix affichés clairement en USD ou CDF. Un visuel authentique tourné au téléphone surpasse souvent une bannière générique importée. Testez systématiquement 3 à 5 créations par campagne.",
        ],
      },
      {
        title: "4. Répondre vite, très vite",
        paragraphs: [
          "Une conversation publicitaire non répondue dans l'heure est une vente perdue. Organisez la prise en charge des messages : réponses rapides enregistrées, catalogue WhatsApp à jour, et si le volume grandit, un agent conversationnel pour qualifier les demandes hors horaires. Le budget publicitaire ne vaut que ce que vaut votre réactivité commerciale.",
        ],
      },
      {
        title: "5. Mesurer, couper, réinvestir",
        paragraphs: [
          "Fixez un budget test par création (par exemple 5 à 10 USD), laissez l'algorithme apprendre 3 à 4 jours, puis coupez ce qui dépasse votre coût par conversation cible et doublez sur ce qui performe. La discipline de mesure hebdomadaire fait toute la différence entre une dépense et un investissement.",
        ],
      },
    ],
    conclusion:
      "Meta Ads en RDC récompense la proximité, la vitesse et la rigueur. Les entreprises qui optimisent pour les conversations, créent des contenus locaux et mesurent leurs coûts transforment quelques dollars par jour en un canal d'acquisition prévisible.",
    cta: "Talacorp conçoit et pilote des campagnes Meta Ads orientées résultats pour les entreprises congolaises. Demandez un audit de vos campagnes.",
  },
  {
    slug: "branding-marque-congolaise",
    title: "Construire une marque congolaise qui inspire confiance",
    excerpt:
      "Storytelling, identité visuelle et cohérence : les clés pour une marque authentique qui résonne avec les consommateurs locaux.",
    category: "Branding",
    date: "8 mai 2026",
    dateISO: "2026-05-08",
    readTime: "4 min",
    coverColor: "#364E6E",
    intro:
      "Sur un marché où la méfiance est le premier réflexe du consommateur, la confiance est l'actif le plus précieux d'une entreprise congolaise. Et la confiance ne se décrète pas : elle se construit, signe après signe, à travers votre marque. Voici comment bâtir une identité qui rassure et qui vend.",
    sections: [
      {
        title: "1. La cohérence avant la beauté",
        paragraphs: [
          "Un beau logo ne suffit pas. Ce qui inspire confiance, c'est la cohérence : mêmes couleurs, même ton, même qualité sur votre enseigne, vos cartes de visite, votre site web, vos réseaux sociaux et vos factures. Une charte graphique, même simple, garantit que chaque point de contact raconte la même histoire, celle d'une entreprise organisée et sérieuse.",
        ],
      },
      {
        title: "2. Les signes de professionnalisme qui comptent en RDC",
        list: [
          "Une adresse e-mail professionnelle (@votreentreprise.com) : elle crédibilise chaque échange bien plus qu'une adresse Gmail.",
          "Un site web propre et à jour : il prouve l'existence et le sérieux de l'activité, surtout pour les clients B2B et internationaux.",
          "Des documents commerciaux professionnels : papier à en-tête, devis et factures soignés signalent une gestion rigoureuse.",
          "Des mentions légales visibles : RCCM et numéro d'impôt affichés rassurent instantanément les partenaires.",
        ],
        paragraphs: [],
      },
      {
        title: "3. Raconter une histoire vraie",
        paragraphs: [
          "Les marques congolaises qui marquent les esprits assument leur identité : leur ancrage local, leur savoir-faire, leur mission. Racontez pourquoi votre entreprise existe, montrez les visages de votre équipe, partagez vos réalisations concrètes. L'authenticité crée un lien émotionnel que la publicité seule ne peut acheter.",
        ],
      },
      {
        title: "4. Tenir ses promesses, encore et toujours",
        paragraphs: [
          "Le branding fixe une promesse ; l'expérience client la valide ou la détruit. Délais respectés, réponses rapides, service après-vente réel : chaque interaction est un dépôt ou un retrait sur votre compte de confiance. Les avis et recommandations qui en découlent sont votre meilleur média.",
        ],
      },
    ],
    conclusion:
      "Une marque congolaise qui inspire confiance, c'est une identité cohérente, des signes tangibles de professionnalisme et des promesses tenues. C'est ce capital qui permet de vendre plus cher, de fidéliser et d'attirer les partenaires.",
    cta: "Logos, chartes graphiques, supports print et goodies : Talacorp Brand & Print construit l'identité de votre marque. Découvrez nos packs branding.",
  },
  {
    slug: "automatiser-pme-rdc",
    title: "Automatiser sa PME : par où commencer ?",
    excerpt:
      "CRM, facturation, relances : les outils essentiels pour libérer du temps et scaler votre activité en RDC.",
    category: "Transformation Digitale",
    date: "25 avril 2026",
    dateISO: "2026-04-25",
    readTime: "8 min",
    coverColor: "#2D4263",
    intro:
      "« Automatiser » évoque souvent des projets coûteux réservés aux grandes entreprises. C'est faux : pour une PME congolaise, l'automatisation commence par des outils simples qui suppriment les tâches répétitives, réduisent les erreurs et libèrent du temps pour vendre. Voici une feuille de route pragmatique, du plus simple au plus ambitieux.",
    sections: [
      {
        title: "Étape 1 : Cartographier ce qui vous fait perdre du temps",
        paragraphs: [
          "Avant tout outil, listez les tâches répétitives de votre semaine : ressaisie de données, relances clients, établissement de factures, rapports manuels, réponses aux mêmes questions sur WhatsApp. Les meilleurs candidats à l'automatisation sont les tâches fréquentes, standardisées et sans valeur ajoutée humaine.",
        ],
      },
      {
        title: "Étape 2 : Digitaliser la base (documents et communication)",
        list: [
          "Documents partagés : centralisez vos fichiers dans le cloud (Google Workspace ou Microsoft 365) pour finir avec les documents perdus et les versions multiples.",
          "Facturation digitale : modèles de devis et factures automatisés, numérotation et suivi des paiements.",
          "Communication client : messages d'absence, réponses rapides et catalogue produits sur WhatsApp Business.",
        ],
        paragraphs: [],
      },
      {
        title: "Étape 3 : Automatiser la relation client",
        paragraphs: [
          "Un simple CRM (même un tableur structuré au départ) permet de suivre chaque prospect : qui a demandé un devis, qui doit être relancé, quel client n'a pas commandé depuis trois mois. Les relances programmées et les messages de suivi automatiques récupèrent un chiffre d'affaires que la plupart des PME laissent s'évaporer. Un agent conversationnel sur WhatsApp peut ensuite qualifier les demandes 24h/24.",
        ],
      },
      {
        title: "Étape 4 : Connecter et fiabiliser les opérations",
        paragraphs: [
          "Quand les volumes grandissent, les outils isolés montrent leurs limites : c'est le moment des applications métiers. Gestion des stocks reliée aux ventes, tableaux de bord automatiques, workflows de validation : une application conçue pour vos processus élimine les doubles saisies et donne au dirigeant une visibilité en temps réel. C'est exactement ce type d'écosystème que nous avons déployé pour des acteurs comme Safecheck RDC dans la gestion des soins de santé.",
        ],
      },
      {
        title: "Les erreurs à éviter",
        list: [
          "automatiser un processus désorganisé ne fait qu'accélérer le désordre : structurez d'abord, automatisez ensuite.",
          "multiplier les outils sans les connecter crée de nouveaux silos.",
          "négliger la formation des équipes : un outil non adopté est un outil perdu.",
        ],
        paragraphs: [],
      },
    ],
    conclusion:
      "L'automatisation d'une PME est un chemin progressif : cartographier, digitaliser la base, automatiser la relation client, puis bâtir ses applications métiers. Chaque étape se finance par les gains de la précédente.",
    cta: "Talacorp conçoit des applications métiers (Desktop, Web, iOS & Android) et accompagne la transformation digitale des PME. Planifions votre diagnostic.",
  },
  {
    slug: "roi-marketing-digital",
    title: "Mesurer le ROI de votre marketing digital",
    excerpt:
      "KPI, tableaux de bord et attribution : comment savoir si vos investissements marketing rapportent vraiment.",
    category: "Stratégie",
    date: "10 avril 2026",
    dateISO: "2026-04-10",
    readTime: "5 min",
    coverColor: "#C8921F",
    intro:
      "« On a dépensé en publicité, mais est-ce que ça a rapporté ? » Si vous ne pouvez pas répondre précisément à cette question, vous ne pilotez pas votre marketing : vous le subissez. Mesurer le retour sur investissement (ROI) est pourtant à la portée de toute entreprise, même sans outils sophistiqués. Voici la méthode.",
    sections: [
      {
        title: "1. La formule de base",
        paragraphs: [
          "Le ROI marketing rapporte le profit généré par une action à son coût : ROI = (revenus attribués - coût de la campagne) / coût de la campagne. Un ROI de 2 signifie que chaque dollar investi en a rapporté deux de plus. Encore faut-il savoir attribuer les revenus : c'est là que tout se joue.",
        ],
      },
      {
        title: "2. Suivre le chemin du client",
        paragraphs: [
          "En RDC, le parcours typique est : publicité → conversation WhatsApp → vente. Pour attribuer correctement, demandez systématiquement à chaque nouveau client comment il vous a connu, utilisez des numéros ou codes promo dédiés par canal, et tenez un registre simple : date, canal d'origine, montant de la vente. En quelques semaines, vous saurez quel canal nourrit réellement votre chiffre d'affaires.",
        ],
      },
      {
        title: "3. Les indicateurs qui comptent vraiment",
        list: [
          "Coût par conversation (CPC) : combien vous coûte, en moyenne, chaque conversation entamée depuis une publicité.",
          "Taux de conversion : combien de conversations se transforment en ventes. C'est souvent là que se cache le problème.",
          "Coût d'acquisition client (CAC) : coût total marketing divisé par le nombre de nouveaux clients : l'indicateur roi.",
          "Valeur vie client (LTV) : ce qu'un client rapporte sur la durée (achats répétés) : il justifie d'investir plus que la première vente.",
        ],
        paragraphs: [],
      },
      {
        title: "4. Piloter avec un tableau de bord simple",
        paragraphs: [
          "Un tableau mensuel suffit pour démarrer : budget par canal, conversations générées, ventes attribuées, chiffre d'affaires, CAC et ROI. Ce rituel de 30 minutes par mois transforme les intuitions en décisions : couper les canaux qui ne rapportent pas, doubler sur ceux qui performent, et fixer des objectifs réalistes au trimestre suivant.",
        ],
      },
    ],
    conclusion:
      "Mesurer le ROI de son marketing digital, c'est passer d'une logique de dépense à une logique d'investissement. Les entreprises qui mesurent apprennent plus vite, dépensent mieux et croissent plus sûrement que leurs concurrents.",
    cta: "Talacorp met en place vos tableaux de bord marketing et pilote vos campagnes à la performance. Demandez votre audit gratuit.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
