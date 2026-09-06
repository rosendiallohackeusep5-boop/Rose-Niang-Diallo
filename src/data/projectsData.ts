export interface ProjectDeliverable {
  label: string;
  value: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  keyPoints?: string[];
  metrics?: { label: string; value: string }[];
  tag?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  slogan?: string;
  category: string;
  role: string;
  year: string;
  duration?: string;
  context: string;
  heroBgGradient: string;
  accentColor: string;
  badgeLabel: string;
  hasLogo: boolean;
  logoUrl?: string;
  hasWireframes: boolean;
  hasPrototype: boolean;
  hasMoodboard: boolean;
  isDefenseProject?: boolean;
  isReplicationExercise?: boolean;
  shortDescription: string;
  tools: string[];
  deliverables: ProjectDeliverable[];
  sections: ProjectSection[];
  colorPalette?: { name: string; hex: string; role: string }[];
  typography?: { name: string; usage: string; fontClass?: string }[];
  figmaStats?: { screens: number; components: number; variants: number };
  referenceComparison?: {
    originalTitle: string;
    originalDescription: string;
    replicationTitle: string;
    replicationDescription: string;
    learnings: string[];
  };
  scrumDeliverables?: {
    sprintCount: number;
    ceremonies: string[];
    roleResponsibilities: string[];
  };
}

export interface CanvaSlide {
  id: number;
  title: string;
  caption: string;
  category: string;
  bgColor: string;
  accentColor: string;
  previewUrl?: string;
  keyElements: string[];
}

export interface CanvaPresentation {
  id: string;
  title: string;
  context: string;
  objective: string;
  tool: string;
  slideCount: number;
  tags: string[];
  coverColor: string;
  accentColor: string;
  slides: CanvaSlide[];
}

export const ODC_PROJECTS: ProjectData[] = [
  {
    id: "lolli",
    title: "LOLLI",
    subtitle: "Projet Digital & Management Agile Scrum",
    category: "Projet digital — Scrum Master",
    role: "Scrum Master & Coordination d'équipe",
    year: "2024",
    duration: "Sprint intensif ODC",
    context:
      "Conçu et développé en équipe lors de la formation Orange Digital Center, LOLLI est un projet digital mené avec la méthode Agile Scrum sous mon rôle de Scrum Master.",
    heroBgGradient: "from-[#7A1838] via-[#4A2635] to-[#361522]",
    accentColor: "#D98C9B",
    badgeLabel: "MÉTHODE AGILE & SCRUM MASTER",
    hasLogo: true,
    hasWireframes: true,
    hasPrototype: true,
    hasMoodboard: true,
    shortDescription:
      "Plateforme digitale collaborative menée en méthodologie Agile Scrum avec un rôle central de Scrum Master : animation des rituels, priorisation du backlog et coordination de la livraison.",
    tools: ["Jira", "Figma", "Trello", "Canva", "Google Workspace"],
    deliverables: [
      { label: "Rôle", value: "Scrum Master & Facilitatrice" },
      { label: "Méthodologie", value: "Agile Scrum (Sprints & Cérémonies)" },
      { label: "Livrables", value: "Backlog, Wireframes, Maquettes, Prototype" },
      { label: "Cadre", value: "Orange Digital Center (ODC)" },
    ],
    scrumDeliverables: {
      sprintCount: 4,
      ceremonies: [
        "Sprint Planning (Définition des objectifs et estimation des US)",
        "Daily Stand-up (Synchronisation quotidienne et levée des blocages)",
        "Sprint Review (Démonstration des incréments produits)",
        "Rétrospective de Sprint (Amélioration continue des processus)",
      ],
      roleResponsibilities: [
        "Animation des cérémonies Scrum et maintien de la dynamique d'équipe",
        "Gestion et priorisation du Product Backlog en collaboration avec l'équipe",
        "Suivi des indicateurs d'avancement et facilitation de la communication",
        "Alignement entre les contraintes UX/UI, techniques et les délais",
      ],
    },
    sections: [
      {
        id: "presentation",
        title: "01. Présentation & Contexte",
        subtitle: "L'impulsion du projet LOLLI",
        description:
          "LOLLI est né d'un défi collaboratif à Orange Digital Center : créer une solution digitale moderne répondant à un besoin utilisateur concret, tout en appliquant rigoureusement les rituels et principes du framework Scrum.",
        keyPoints: [
          "Constitution d'une équipe pluridisciplinaire (design, tech, produit)",
          "Mise en place d'un environnement de travail agile dès le premier jour",
          "Définition d'une vision produit claire et centrée sur la valeur utilisateur",
        ],
      },
      {
        id: "problematique",
        title: "02. Problématique & Recherche",
        subtitle: "Comprendre les besoins réels",
        description:
          "Comment coordonner efficacement une équipe de conception pour livrer une interface intuitive et engageante dans un temps limité, sans compromettre la qualité UX/UI ?",
        keyPoints: [
          "Interviews et recueil des attentes utilisateurs",
          "Identification des frictions et des points d'amélioration",
          "Formalisation des Personas et des User Stories prioritaires",
        ],
      },
      {
        id: "scrum-master",
        title: "03. Mon rôle de Scrum Master",
        subtitle: "Le cœur de ma contribution",
        description:
          "En tant que Scrum Master, j'ai été la garante du respect du cadre méthodologique, de la fluidité des échanges et du bien-être collaboratif de l'équipe.",
        keyPoints: [
          "Mise en place d'un tableau Kanban visuel et suivi des tâches en temps réel",
          "Résolution proactive des blocages et maintien du focus sur le Sprint Goal",
          "Gestion du temps et respect des jalons critiques de présentation",
          "Création d'un climat d'écoute, de transparence et d'engagement mutuel",
        ],
      },
      {
        id: "design-livrables",
        title: "04. Design, Prototype & Livrables",
        subtitle: "De la conception à l'interface",
        description:
          "Coordination de l'identité visuelle, des wireframes structurants et du prototype interactif pour tester l'ergonomie globale avant la soutenance.",
        keyPoints: [
          "Moodboard d'inspiration et univers graphique pétillant",
          "Wireframes basse fidélité pour valider l'agencement des éléments",
          "Maquettes UI haute fidélité finalisées sur Figma",
          "Supports de communication et slides de pitch pour la démo finale",
        ],
      },
      {
        id: "resultat",
        title: "05. Résultat & Apprentissages",
        subtitle: "Une livraison réussie et mesurée",
        description:
          "Le projet LOLLI a permis de valider avec succès l'ensemble des Sprints avec une équipe soudée, un livrable UI fonctionnel et un pitch salué par les encadrants ODC.",
        keyPoints: [
          "Respect total des délais et du périmètre de Sprint validé",
          "Compétence consolidée en leadership bienveillant et gestion de projet digital",
          "Capacité démontrée à faire converger des profils créatifs et techniques",
        ],
      },
    ],
  },
  {
    id: "sen-foncier",
    title: "SEN FONCIER",
    subtitle: "Plateforme Citoyenne de Transparence & Suivi Public",
    slogan: "« Voir, comprendre, agir. »",
    category: "Transparence & Gouvernance",
    role: "Recherche UX, Architecture de l'information & DataViz",
    year: "2024",
    duration: "Projet Thématique ODC",
    context:
      "SEN FONCIER est une initiative digitale visant à démocratiser l'accès aux données publiques foncières et aux chantiers d'aménagement pour les citoyens au Sénégal.",
    heroBgGradient: "from-[#7A1838] via-[#4A2635] to-[#361522]",
    accentColor: "#D98C9B",
    badgeLabel: "TRANSPARENCE & GOUVERNANCE",
    hasLogo: false, // STRICT RULE: NO FAKE LOGO
    hasWireframes: false, // STRICT RULE: NO WIREFRAMES
    hasPrototype: false, // STRICT RULE: NO PROTOTYPE
    hasMoodboard: false,
    shortDescription:
      "Projet digital axé sur la transparence foncière, la visualisation de données citoyennes et l'accessibilité de l'information publique au Sénégal.",
    tools: ["Figma", "Google Workspace", "IA & Synthèse"],
    deliverables: [
      { label: "Positionnement", value: "Transparence & Gouvernance Citoyenne" },
      { label: "Travail Réalisé", value: "Recherche UX, Architecture d'info, Dashboard DataViz" },
      { label: "Périmètre", value: "Pas de logo ni de prototype (spécification réelle)" },
      { label: "Cadre", value: "Orange Digital Center (ODC)" },
    ],
    sections: [
      {
        id: "problematique",
        title: "01. Problématique de Transparence",
        subtitle: "Un accès complexe aux informations foncières",
        description:
          "Au Sénégal, comprendre l'état d'avancement des projets d'aménagement public et le statut des zones foncières reste difficile pour le grand public en raison de documents techniques fragmentés.",
        keyPoints: [
          "Opacité perçue dans la communication sur les travaux et affectations",
          "Nécessité de restaurer la confiance entre institutions et citoyens",
          "Besoin d'un outil d'information clair, impartial et facilement consultable",
        ],
      },
      {
        id: "recherche",
        title: "02. Recherche Utilisateur & Analyse",
        subtitle: "Identifier les besoins essentiels des citoyens",
        description:
          "Étude approfondie des attentes des usagers, des associations de quartier et des acteurs locaux pour déterminer les données clés à valoriser.",
        keyPoints: [
          "Cartographie des points de douleur (jargon administratif, lenteur d'accès)",
          "Hiérarchisation des données les plus demandées (localisation, budget, dates de livraison)",
          "Analyse des meilleures pratiques internationales d'Open Data",
        ],
      },
      {
        id: "insight-solution",
        title: "03. Insight & Solution Digitale",
        subtitle: "« Voir, comprendre, agir. »",
        description:
          "La solution repose sur une interface de type tableau de bord (Dashboard) transformant les données complexes en indicateurs visuels immédiats.",
        keyPoints: [
          "Visualisation cartographique interactive des zones et chantiers",
          "Fiches de synthèse simplifiées en langage clair et accessible",
          "Espace citoyen pour suivre l'évolution d'un projet de leur commune",
        ],
      },
      {
        id: "dataviz-dashboard",
        title: "04. Dashboard & Visualisation de Données",
        subtitle: "L'accessibilité par le visuel",
        description:
          "Conception de l'architecture de l'information et des composants graphiques pour rendre les indicateurs compréhensibles au premier coup d'œil.",
        keyPoints: [
          "Graphiques de suivi de budget et de pourcentage d'avancement",
          "Filtres dynamiques par région, secteur et date de lancement",
          "Architecture hiérarchisée permettant de naviguer du global au détail local",
        ],
      },
      {
        id: "innovation-ia",
        title: "05. Innovation & Intelligence Artificielle",
        subtitle: "L'IA au service de la vulgarisation",
        description:
          "Intégration d'un module d'IA pour résumer automatiquement les rapports techniques et répondre aux questions citoyennes en langage naturel.",
        keyPoints: [
          "Génération automatisée de résumés clairs à partir de documents administratifs denses",
          "Assistant virtuel pour guider les usagers dans leurs démarches de consultation",
          "Détection d'anomalies dans les délais déclarés",
        ],
      },
    ],
  },
  {
    id: "joj-dakar-2026",
    title: "JOJ DAKAR 2026",
    subtitle: "Conception UX/UI Complète pour les Jeux Olympiques de la Jeunesse",
    category: "UX/UI Design",
    role: "UX/UI Designer (Wireframes, Maquettes & Prototypes)",
    year: "2024",
    duration: "Projet Majeur ODC",
    context:
      "Dakar accueillera en 2026 les premiers Jeux Olympiques sur le sol africain. Ce projet est le seul dans lequel j'ai déployé l'intégralité du cycle UX/UI : de l'architecture de l'information jusqu'au prototypage haute fidélité.",
    heroBgGradient: "from-[#7A1838] via-[#4A2635] to-[#361522]",
    accentColor: "#D98C9B",
    badgeLabel: "WORKFLOW UX/UI INTÉGRAL",
    hasLogo: true, // Official JOJ logo
    hasWireframes: true,
    hasPrototype: true,
    hasMoodboard: true,
    shortDescription:
      "Cycle complet de conception UX/UI pour l'application officielle des Jeux Olympiques de la Jeunesse Dakar 2026 : parcours, wireframes, identité et prototype interactif.",
    tools: ["Figma", "Canva", "Google Workspace"],
    deliverables: [
      { label: "Domaine", value: "UX/UI Design Mobile & Web" },
      { label: "Livrables", value: "Wireframes, Parcours utilisateur, Maquettes, Prototype" },
      { label: "Éléments Officiels", value: "Logo officiel JOJ & Mascotte AYO intégrés" },
      { label: "Cadre", value: "Orange Digital Center (ODC)" },
    ],
    sections: [
      {
        id: "contexte-objectif",
        title: "01. Contexte & Objectifs",
        subtitle: "L'Afrique au cœur de l'Olympisme",
        description:
          "Créer une expérience mobile immersive pour les spectateurs, athlètes et supporters afin de consulter le calendrier des épreuves, les résultats en direct, acheter des billets et s'orienter sur les sites de compétition.",
        keyPoints: [
          "Célébrer la jeunesse, la culture et l'hospitalité sénégalaise (Teranga)",
          "Assurer une accessibilité maximale sur tous les modèles de smartphones",
          "Faciliter l'accès aux transports et aux informations pratiques en temps réel",
        ],
      },
      {
        id: "architecture-parcours",
        title: "02. Architecture & Parcours Utilisateur",
        subtitle: "Une navigation fluide pour des milliers de visiteurs",
        description:
          "Structuration rigoureuse de l'arborescence de l'application et modélisation des flux clés (réservation de billets, suivi d'un athlète, géolocalisation d'une épreuve).",
        keyPoints: [
          "Arborescence claire en 4 onglets principaux : Accueil, Calendrier, Direct, Guide",
          "User Journey optimisé pour réduire le nombre de clics pour accéder à un résultat",
          "Gestion du mode hors-ligne pour les zones à connectivité variable",
        ],
      },
      {
        id: "wireframes",
        title: "03. Wireframes & Zonage",
        subtitle: "La structure avant l'esthétique",
        description:
          "Création de wireframes détaillés (Low-Fi & Mid-Fi) pour tester la disposition des éléments, la lisibilité typographique et l'équilibre visuel des écrans.",
        keyPoints: [
          "Grille de mise en page responsive et zone de navigation au pouce",
          "Hiérarchie des informations sur les cartes de matchs et d'épreuves",
          "Validation des principes d'interaction avant l'application du style",
        ],
      },
      {
        id: "identite-ayo",
        title: "04. Identité Visuelle, Logo & Mascotte AYO",
        subtitle: "Intégration harmonieuse des éléments officiels",
        description:
          "Intégration du logo officiel des JOJ Dakar 2026 et de la mascotte AYO dans l'écosystème graphique de l'application, en respectant la charte olympique.",
        keyPoints: [
          "Mise en valeur du logo officiel avec les marges de sécurité requises",
          "Intégration de la mascotte AYO comme guide interactif et élément d'onboarding",
          "Déclinaison de la palette vibrante inspirée des couleurs du Sénégal",
        ],
      },
      {
        id: "maquettes-prototype",
        title: "05. Maquettes Haute Fidélité & Prototype",
        subtitle: "L'application finale en action",
        description:
          "Conception des écrans finaux sur Figma avec composants réutilisables, états interactifs (hover, active, focus) et prototype animé pour les tests utilisateurs.",
        keyPoints: [
          "Design System complet (boutons, badges, cartes d'athlètes, listes)",
          "Animations de transition fluides simulant l'expérience native",
          "Tests d'utilisabilité concluants sur scénarios de navigation réels",
        ],
      },
    ],
  },
  {
    id: "nayrose",
    title: "NAYROSE",
    subtitle: "Création de Marque & Identité Visuelle Gourmande",
    slogan: "« L'éclat de la nature, le cœur d'une mère. »",
    category: "Branding & Identité visuelle",
    role: "Directrice Artistique & Designer de Marque",
    year: "2024",
    duration: "Projet de Branding ODC",
    context:
      "NAYROSE est un projet complet de branding et d'identité visuelle développé autour de l'univers de la fraise artisanale, alliant fraîcheur naturelle et tendresse maternelle.",
    heroBgGradient: "from-[#7A1838] via-[#4A2635] to-[#361522]",
    accentColor: "#D98C9B",
    badgeLabel: "BRANDING & DESIGN DE MARQUE",
    hasLogo: true,
    hasWireframes: false,
    hasPrototype: false,
    hasMoodboard: true,
    shortDescription:
      "Création complète d'une marque artisanale autour des fraises : naming, logo, palette, charte graphique, packaging et supports de communication multicanaux.",
    tools: ["Adobe Illustrator", "Canva", "Figma"],
    deliverables: [
      { label: "Expertise", value: "Naming, Direction Artistique & Branding" },
      { label: "Livrables", value: "Logo & déclinaisons, Charte graphique, Packagings, Affiches" },
      { label: "Univers", value: "Gourmandise, Nature, Fraîcheur & Tendresse" },
      { label: "Cadre", value: "Orange Digital Center (ODC)" },
    ],
    sections: [
      {
        id: "naming-positionnement",
        title: "01. Naming & Positionnement",
        subtitle: "Donner un nom et une âme",
        description:
          "NAYROSE fusionne la délicatesse de la rose et la douceur maternelle avec l'énergie vive de la fraise. Le slogan « L'éclat de la nature, le cœur d'une mère » ancre la marque dans l'authenticité et l'émotion.",
        keyPoints: [
          "Positionnement premium accessible axé sur la fraîcheur et la qualité",
          "Valeurs de marque : bienveillance, naturalité, générosité et partage",
          "Cible : familles, amateurs de douceurs artisanales et épiceries fines",
        ],
      },
      {
        id: "moodboard-univers",
        title: "02. Moodboard & Univers Visuel",
        subtitle: "L'inspiration visuelle",
        description:
          "Création d'un moodboard sensoriel mêlant textures de fruits frais, teintes douces et éclatantes, jeux de lumière naturelle et typographies soignées.",
        keyPoints: [
          "Palette chromatique équilibrée entre gourmandise et fraîcheur végétale",
          "Iconographie axée sur la beauté du fruit et le geste artisanal",
          "Ambiance chaleureuse invitant au plaisir et à la sérénité",
        ],
      },
      {
        id: "logo-declinaisons",
        title: "03. Logo, Typographies & Déclinaisons",
        subtitle: "L'emblème de la marque",
        description:
          "Conception du logo principal et de ses variantes (version horizontale, badge circulaire, monochrome) pour s'adapter à tous les supports sans perdre son identité.",
        keyPoints: [
          "Typographie raffinée avec empattements pour le caractère premium",
          "Symbole subtil intégrant la forme de la fraise et la courbure florale",
          "Déclinaisons testées sur fonds sombres, clairs et photographiques",
        ],
      },
      {
        id: "supports-communication",
        title: "04. Supports de Communication & Mockups",
        subtitle: "La marque dans le monde réel",
        description:
          "Déploiement de l'identité sur des supports imprimés et digitaux : packaging de barquettes, étiquettes de confiture, sacs kraft, publications Instagram et affiches promotionnelles.",
        keyPoints: [
          "Mockups de packaging réalistes démontrant l'impact visuel en rayon",
          "Templates de réseaux sociaux cohérents pour la communication digitale",
          "Cartes de visite et papeterie de marque soignées",
        ],
      },
    ],
  },
  {
    id: "jambaar",
    title: "JÀMBAAR",
    subtitle: "SportTech & Détection de Talents par Intelligence Artificielle",
    slogan: "« L'IA au service des talents sportifs. »",
    category: "SportTech — AI & Innovation",
    role: "Lead UX/UI & Conception Produit (Projet Fil Rouge)",
    year: "2024",
    duration: "Projet Fil Rouge & Soutenance ODC",
    context:
      "Projet fil rouge principal de ma formation Orange Digital Center sur la thématique AI & Innovation. JÀMBAAR est une plateforme SportTech multi-disciplines conçue pour détecter, évaluer et propulser les jeunes talents sportifs grâce à l'intelligence artificielle.",
    heroBgGradient: "from-[#7A1838] via-[#4A2635] to-[#361522]",
    accentColor: "#D98C9B",
    badgeLabel: "PROJET DE SOUTENANCE — ODC",
    hasLogo: true,
    hasWireframes: true,
    hasPrototype: true,
    hasMoodboard: true,
    isDefenseProject: true,
    shortDescription:
      "Projet fil rouge ODC : plateforme SportTech multi-sports exploitant l'IA pour la détection, le suivi des performances et la visibilité des jeunes athlètes.",
    tools: ["Figma", "IA & Prompting", "Canva", "Google Workspace"],
    deliverables: [
      { label: "Statut", value: "Projet de Soutenance ODC (Fil Rouge)" },
      { label: "Périmètre Sportif", value: "Multi-disciplines (Football, Athlétisme, Basketball, etc.)" },
      { label: "Innovation", value: "Scouting assisté par IA, Analyse vidéo & Matching" },
      { label: "Livrables", value: "Logo, Wireframes, UI Design, Prototype, Présentation de soutenance" },
    ],
    sections: [
      {
        id: "problematique-sporttech",
        title: "01. Problématique & Opportunité",
        subtitle: "Révéler les talents cachés",
        description:
          "En Afrique et dans de nombreuses régions, des milliers de jeunes sportifs talentueux manquent de visibilité auprès des recruteurs et des académies faute de canaux de détection accessibles et équitables.",
        keyPoints: [
          "Manque de données objectives pour évaluer le potentiel des athlètes",
          "Coûts élevés du scouting traditionnel sur le terrain",
          "Nécessité d'une plateforme multi-disciplines démocratisant la détection",
        ],
      },
      {
        id: "concept-multi-sport",
        title: "02. Concept & Intelligence Artificielle",
        subtitle: "L'IA comme accélérateur de carrières",
        description:
          "JÀMBAAR permet aux athlètes de télécharger leurs vidéos de performances et statistiques, tandis que des modèles d'IA analysent les aptitudes physiques et techniques pour générer une fiche athlète standardisée.",
        keyPoints: [
          "Analyse vidéo automatisée : vitesse, détente, précision des gestes",
          "Système de matching intelligent entre profils d'athlètes et besoins des clubs",
          "Tableau de bord pour les recruteurs avec filtres multi-critères",
        ],
      },
      {
        id: "ux-parcours",
        title: "03. Recherche UX & Parcours Utilisateurs",
        subtitle: "Deux interfaces dédiées : Athlète & Recruteur",
        description:
          "Modélisation de deux flux complémentaires pour répondre aux besoins spécifiques des jeunes talents (facilité d'envoi) et des professionnels (rapidité d'analyse).",
        keyPoints: [
          "Onboarding ultra-simple pour permettre l'inscription depuis un mobile",
          "Profil athlète interactif façon carte sportive numérique",
          "Espace recruteur avec comparateur de performances côte à côte",
        ],
      },
      {
        id: "wireframes-interfaces",
        title: "04. Wireframes, Design System & Interfaces",
        subtitle: "Une ergonomie sportive et impactante",
        description:
          "Conception d'un Design System complet sur Figma : composants modulaires, typographies dynamiques et contrastes élevés pour une consultation agréable.",
        keyPoints: [
          "Wireframes basse fidélité validant la hiérarchie des données clés",
          "UI sombre et énergique valorisant les visuels d'action et les graphiques",
          "Micro-interactions et animations sur les jauges de compétences",
        ],
      },
      {
        id: "soutenance",
        title: "05. Préparation de la Soutenance ODC",
        subtitle: "L'aboutissement du parcours",
        description:
          "Projet présenté comme couronnement de la formation Orange Digital Center, articulant vision business, pertinence technologique et rigueur de conception UX/UI.",
        keyPoints: [
          "Dossier de soutenance complet et prototype interactif",
          "Démonstration en direct du flux d'évaluation assisté par IA",
          "Badge officiel : « Projet de soutenance — à compléter après ma soutenance »",
        ],
      },
    ],
  },
  {
    id: "flo",
    title: "FLO",
    subtitle: "Exercice de Conception & Reproduction de Maquettage",
    category: "Reproduction de maquettage — UX/UI",
    role: "Designer UI (Exercice de reproduction & précision Figma)",
    year: "2024",
    duration: "Atelier Pratique ODC",
    context:
      "Dans le cadre de l'apprentissage intensif de Figma à Orange Digital Center, cet exercice avait pour but de reproduire avec exactitude l'interface de l'application de santé féminine FLO afin de maîtriser les composants, les contraintes, les auto-layouts et la hiérarchie visuelle.",
    heroBgGradient: "from-[#7A1838] via-[#4A2635] to-[#361522]",
    accentColor: "#D98C9B",
    badgeLabel: "EXERCICE DE REPRODUCTION MAQUETTAGE",
    hasLogo: false, // EXPLICIT RULE: NO PERSONAL LOGO CREATED
    hasWireframes: false,
    hasPrototype: false,
    hasMoodboard: false,
    isReplicationExercise: true,
    shortDescription:
      "Exercice de maîtrise Figma : reproduction fidèle des interfaces de l'application FLO (calendrier, cards de suivi, typographies, espacements et auto-layouts).",
    tools: ["Figma"],
    deliverables: [
      { label: "Type d'exercice", value: "Reproduction de maquettage d'application existante" },
      { label: "Objectif pédagogique", value: "Précision au pixel, maîtrise d'Auto-layout & composants" },
      { label: "Outil principal", value: "Figma (conception vectorielle d'interface)" },
      { label: "Cadre", value: "Orange Digital Center (ODC)" },
    ],
    figmaStats: {
      screens: 8,
      components: 24,
      variants: 16,
    },
    referenceComparison: {
      originalTitle: "Maquette de Référence (FLO App)",
      originalDescription:
        "Application de référence reconnue pour son ergonomie douce, ses calendriers circulaires, ses badges de cycle et ses cartes de conseils bienveillants.",
      replicationTitle: "Reproduction Réalisée sur Figma",
      replicationDescription:
        "Reconstitution minutieuse de chaque élément d'interface : courbes de graphiques, palette pastel, typographie et grille d'espacement modulaire.",
      learnings: [
        "Maîtrise avancée des Auto-layouts imbriqués et des contraintes de redimensionnement",
        "Création de bibliothèques de composants avec variantes d'états (actif, sélectionné)",
        "Sens aiguisé du détail : micro-espacements, rayons de courbure et contrastes doux",
        "Compréhension approfondie des patterns UX dans les applications de santé grand public",
      ],
    },
    sections: [
      {
        id: "contexte-exercice",
        title: "01. Contexte & Objectif de l'Exercice",
        subtitle: "L'apprentissage par la reproduction minutieuse",
        description:
          "La reproduction d'applications de référence est un exercice fondamental à Orange Digital Center pour développer l'œil critique et la rigueur technique requise chez un UI Designer.",
        keyPoints: [
          "Déconstruire une interface complexe pour comprendre sa logique sous-jacente",
          "Pratiquer la réutilisation systématique de composants et tokens de design",
          "Respecter scrupuleusement les proportions, marges et alignements",
        ],
      },
      {
        id: "comparatif-reproduction",
        title: "02. Travail Réalisé sur Figma",
        subtitle: "De l'analyse d'écran au composant interactif",
        description:
          "Reconstitution étape par étape des principaux écrans de FLO : écran d'accueil avec indicateur de cycle, suivi des symptômes, calendrier mensuel et bibliothèque d'articles.",
        keyPoints: [
          "Reproduction fidèle des boutons capsules et des icônes d'humeur",
          "Gestion des états dynamiques des composants via les variantes Figma",
          "Structure propre de calques et nommage rigoureux pour faciliter la lecture",
        ],
      },
      {
        id: "competences-acquises",
        title: "03. Compétences & Bénéfices",
        subtitle: "Ce que cet atelier a consolidé",
        description:
          "Cet exercice a été un accélérateur majeur pour acquérir une rapidité d'exécution et une précision chirurgicale sur Figma, directement réinvesties dans mes autres projets de conception.",
        keyPoints: [
          "Gain d'aisance considérable sur les raccourcis et fonctions avancées de Figma",
          "Capacité à auditer rapidement la qualité visuelle et technique d'une interface",
          "Clarté totale : exercice de formation valorisant la rigueur d'exécution",
        ],
      },
    ],
  },
];

export const CANVA_PRESENTATIONS: CanvaPresentation[] = [
  {
    id: "canva-pitch-projet",
    title: "Présentation de Pitch & Synthèse Projet",
    context: "Soutenances et revues de projet — Orange Digital Center",
    objective: "Structurer un storytelling percutant pour convaincre un jury en un temps record.",
    tool: "Canva",
    slideCount: 12,
    tags: ["Pitch Deck", "Storytelling", "Design Editorial", "Hiérarchie"],
    coverColor: "from-[#7A1838] to-[#4A2635]",
    accentColor: "#D98C9B",
    slides: [
      {
        id: 1,
        title: "Slide de Titre & Accroche",
        caption: "Introduction percutante avec typographie forte et contraste soigné.",
        category: "Cover",
        bgColor: "#4A2635",
        accentColor: "#F6DDE4",
        keyElements: ["Titre Playfair Display", "Sous-titre explicite", "Badge de promotion ODC"],
      },
      {
        id: 2,
        title: "Le Constat & La Problématique",
        caption: "Mise en avant des chiffres clés et des irritants majeurs du marché.",
        category: "Problème",
        bgColor: "#FFF9F6",
        accentColor: "#7A1838",
        keyElements: ["Statistiques percutantes", "Citation utilisateur", "Icônes vectorielles"],
      },
      {
        id: 3,
        title: "La Solution & Proposition de Valeur",
        caption: "Présentation claire des 3 piliers de la solution digitale.",
        category: "Solution",
        bgColor: "#FFF9F6",
        accentColor: "#D98C9B",
        keyElements: ["Cards 3 colonnes", "Mockup produit central", "Bénéfices utilisateurs"],
      },
      {
        id: 4,
        title: "Modèle & Roadmap de Déploiement",
        caption: "Chronologie des étapes clés et indicateurs de succès.",
        category: "Roadmap",
        bgColor: "#361522",
        accentColor: "#D98C9B",
        keyElements: ["Frise chronologique", "Jalons Sprints", "Objectifs chiffrés"],
      },
      {
        id: 5,
        title: "Conclusion & Appel à l'Action",
        caption: "Slide finale mémorable avec contacts et remerciements.",
        category: "Conclusion",
        bgColor: "#7A1838",
        accentColor: "#FFF9F6",
        keyElements: ["Call to Action", "QR Code de contact", "Signature graphique"],
      },
    ],
  },
  {
    id: "canva-rapport-communication",
    title: "Stratégie de Communication & Réseaux Sociaux",
    context: "Atelier Stratégie Digitale & Marketing — ODC",
    objective: "Formaliser un plan d'action de communication multicanal avec un rendu éditorial moderne.",
    tool: "Canva",
    slideCount: 16,
    tags: ["Marketing Digital", "Plan Média", "Social Media", "Brand Content"],
    coverColor: "from-[#7A1838] to-[#4A2635]",
    accentColor: "#D98C9B",
    slides: [
      {
        id: 1,
        title: "Plan Stratégique Annuel",
        caption: "Vue d'ensemble des objectifs de notoriété et d'engagement.",
        category: "Stratégie",
        bgColor: "#4A2635",
        accentColor: "#F6DDE4",
        keyElements: ["Objectifs SMART", "Cibles prioritaires", "Tone of Voice"],
      },
      {
        id: 2,
        title: "Grille de Contenus & Calendrier Éditorial",
        caption: "Organisation hebdomadaire des thématiques et formats de publications.",
        category: "Planning",
        bgColor: "#FFF9F6",
        accentColor: "#7A1838",
        keyElements: ["Planning bimensuel", "Piliers de contenu", "Formats Reels / Carrousels"],
      },
      {
        id: 3,
        title: "Médiaplanning & Budget",
        caption: "Répartition des investissements par canal d'acquisition.",
        category: "Budget",
        bgColor: "#FFF9F6",
        accentColor: "#7A1838",
        keyElements: ["Graphiques camembert Canva", "KPIs prévisionnels", "ROAS attendu"],
      },
      {
        id: 4,
        title: "Exemples de Visuels & Templates",
        caption: "Aperçu des déclinaisons créatives prêtes à l'emploi.",
        category: "Créa",
        bgColor: "#361522",
        accentColor: "#D98C9B",
        keyElements: ["Mise en scène mockups smartphone", "Charte visuelle", "Variations thématiques"],
      },
    ],
  },
  {
    id: "canva-rapport-veille",
    title: "Veille & Tendances IA & Design Digital",
    context: "Recherche & Analyse Technologique — ODC",
    objective: "Synthétiser les évolutions des outils d'IA générative dans les processus de design.",
    tool: "Canva",
    slideCount: 10,
    tags: ["Intelligence Artificielle", "Veille Tech", "UI/UX Trends", "Infographie"],
    coverColor: "from-[#7A1838] to-[#4A2635]",
    accentColor: "#D98C9B",
    slides: [
      {
        id: 1,
        title: "L'IA dans le Workflow du Designer",
        caption: "Panorama des outils d'assistance créative et de productivité.",
        category: "Panorama",
        bgColor: "#4A2635",
        accentColor: "#F6DDE4",
        keyElements: ["Cartographie des outils", "Gains de temps mesurés", "Perspectives 2026"],
      },
      {
        id: 2,
        title: "Études de Cas & Bonnes Pratiques",
        caption: "Exemples concrets d'intégration de l'IA dans l'UX Research.",
        category: "Cas d'usage",
        bgColor: "#FFF9F6",
        accentColor: "#7A1838",
        keyElements: ["Prompting appliqué", "Synthèse d'interviews", "Génération de personae"],
      },
      {
        id: 3,
        title: "Éthique & Propriété Intellectuelle",
        caption: "Recommandations pour un usage responsable et transparent.",
        category: "Éthique",
        bgColor: "#361522",
        accentColor: "#D98C9B",
        keyElements: ["Cadre déontologique", "Protection des données", "Transparence client"],
      },
    ],
  },
];
