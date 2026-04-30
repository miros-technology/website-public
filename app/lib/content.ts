import type { Locale } from "./seo";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const SITE_NAME = "miros";
export const RENT_URL = "https://go.miros.work/rentapod-web";
export const DOWNLOAD_URL = "https://go.miros.work/download-web";
export const APPLE_APP_URL = "https://go.miros.work/ios-web";
export const GOOGLE_PLAY_URL = "https://go.miros.work/android-web";
export const PRIVACY_POLICY_URL = "https://app.miros.work/privacy-policy";
export const TERMS_URL = "https://app.miros.work/terms-and-conditions";
export const CONTACT_EMAIL = "contact@miros.work";

export const heroImage = `${BASE_PATH}/images/miros_wp_cloud.png`;
export const swissImage = `${BASE_PATH}/images/ducommun-woodshop-1.jpg`;

export const modelGallery = [
  `${BASE_PATH}/images/hrc_wall.jpg`,
  `${BASE_PATH}/images/miros_wp_cloud.png`,
  `${BASE_PATH}/images/miros_wp_garden.png`,
];

export const featureGallery = [
  `${BASE_PATH}/images/1-seater%20Background%20Removed.png`,
  `${BASE_PATH}/images/2-seater%20Background%20Removed.png`,
  `${BASE_PATH}/images/4-seater%20Background%20Removed.png`,
];

export const trustedBy = [
  { name: "UBS", logo: `${BASE_PATH}/images/partners/ubs.png` },
  { name: "EPFL", logo: `${BASE_PATH}/images/partners/epfl.png` },
  { name: "Watch & Wonder", logo: `${BASE_PATH}/images/partners/ww.png` },
  { name: "Hôpital Riviera-Chablais", logo: `${BASE_PATH}/images/partners/hrc.png` },
  { name: "Innovaud", logo: `${BASE_PATH}/images/partners/innovaud.png` },
  { name: "Synnergy", logo: `${BASE_PATH}/images/partners/synnergy.png` },
  { name: "FONGIT", logo: `${BASE_PATH}/images/partners/fongit.png` },
  { name: "Village by CA", logo: `${BASE_PATH}/images/partners/vbca.png` },
];

export type TopicKey =
  | "host_pod"
  | "startup_question"
  | "quote_request"
  | "partnership"
  | "other";

type Card = {
  title: string;
  body: string;
};

type Meta = {
  title: string;
  description: string;
};

export type Dictionary = {
  localeLabel: string;
  languageName: string;
  nav: {
    home: string;
    workpods: string;
    phoneBooths: string;
    swissMade: string;
    about: string;
    contact: string;
  };
  footer: {
    copy: string;
    privacy: string;
    terms: string;
  };
  home: {
    meta: Meta;
    badge: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    tertiary: string;
    overviewTitle: string;
    overviewBody: string;
    overviewCards: Card[];
    searchTitle: string;
    searchCards: Card[];
    proofTitle: string;
    proofBody: string;
    trustTitle: string;
    ctaTitle: string;
    ctaBody: string;
  };
  workpods: {
    meta: Meta;
    eyebrow: string;
    title: string;
    intro: string;
    cards: Card[];
    useCasesTitle: string;
    useCases: Card[];
    ctaTitle: string;
    ctaBody: string;
  };
  phoneBooths: {
    meta: Meta;
    eyebrow: string;
    title: string;
    intro: string;
    cards: Card[];
    fitTitle: string;
    fitCards: Card[];
    ctaTitle: string;
    ctaBody: string;
  };
  swissMade: {
    meta: Meta;
    eyebrow: string;
    title: string;
    intro: string;
    proofCards: Card[];
    qualityTitle: string;
    qualityBody: string;
    ctaTitle: string;
    ctaBody: string;
  };
  about: {
    meta: Meta;
    eyebrow: string;
    title: string;
    intro: string;
    valuesTitle: string;
    values: Card[];
    foundersTitle: string;
    founders: Array<{ name: string; role: string; story: string; image: string }>;
    partnerTitle: string;
    partnerBody: string;
  };
  contact: {
    meta: Meta;
    eyebrow: string;
    title: string;
    intro: string;
    reasons: Card[];
    form: {
      name: string;
      email: string;
      company: string;
      topic: string;
      message: string;
      submit: string;
      placeholders: {
        name: string;
        email: string;
        company: string;
        message: string;
      };
      topics: Record<TopicKey, string>;
      status: {
        sending: string;
        success: string;
        error: string;
      };
    };
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    localeLabel: "EN",
    languageName: "English",
    nav: {
      home: "Home",
      workpods: "Workpods",
      phoneBooths: "Phone booths",
      swissMade: "Swiss-made",
      about: "About",
      contact: "Contact",
    },
    footer: {
      copy: "Swiss-made workpods, phone booths, and private workspaces for flexible work.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    home: {
      meta: {
        title: "miros workpod Switzerland | Workpods, phone booths and private workspace",
        description:
          "miros builds Swiss-made workpods, phone booths, and private workspaces in Switzerland for offices, stations, hospitals, campuses, and events.",
      },
      badge: "Swiss-made private workspace network",
      title: "Workpods, phone booths, and private workspaces in Switzerland.",
      subtitle:
        "miros helps operators and workplaces deploy acoustic workpods, office pods, and phone booths built for calls, focus work, and premium work conditions.",
      primary: "Host a pod",
      secondary: "Explore workpods",
      tertiary: "Download app",
      overviewTitle: "A workpod platform built for real Swiss locations.",
      overviewBody:
        "We deploy quiet workspaces for stations, offices, hospitals, campuses, and events with a consistent Swiss-made quality standard.",
      overviewCards: [
        {
          title: "Office pods and workpods",
          body: "Private workspaces for focused work, short meetings, and productive solo sessions.",
        },
        {
          title: "Phone booths and call booths",
          body: "Acoustic cabins for confidential calls, video meetings, and short deep-work sessions.",
        },
        {
          title: "Flexible deployment",
          body: "Suitable for public, private, and event environments with local operational support.",
        },
      ],
      searchTitle: "Built to match how people search.",
      searchCards: [
        {
          title: "Workpod Switzerland",
          body: "A clear category page and copy for users looking for workpods and office pods in Switzerland.",
        },
        {
          title: "Phone booth Switzerland",
          body: "Dedicated content for phone booth, phone box, meeting booth, and call booth intent.",
        },
        {
          title: "Swiss-made phone booth",
          body: "A trust-focused page for buyers looking for Swiss design, Swiss manufacturing, and local partners.",
        },
      ],
      proofTitle: "Swiss design, local manufacturing, trusted deployments.",
      proofBody:
        "miros is an EPFL spin-off working with Ducommun menuisiers and Swiss deployment partners to deliver durable acoustic workspace infrastructure.",
      trustTitle: "Trusted by",
      ctaTitle: "Looking for a workpod, office pod, or phone booth in Switzerland?",
      ctaBody:
        "Tell us your location, capacity, and timeline. We can discuss hosting, deployment, and quote requests.",
    },
    workpods: {
      meta: {
        title: "Workpods and office pods in Switzerland | miros",
        description:
          "Discover miros workpods and office pods in Switzerland for focused work, acoustic privacy, and flexible workplace deployment.",
      },
      eyebrow: "Workpods",
      title: "Workpods and office pods for focused work in Switzerland.",
      intro:
        "This page targets workpod, office pod, acoustic booth, and private workspace intent with a practical overview of how miros pods are used.",
      cards: [
        {
          title: "Acoustic privacy",
          body: "Designed for confidential calls, heads-down work, and reduced background noise.",
        },
        {
          title: "Flexible formats",
          body: "From one-person booths to larger pods for short meetings and collaborative sessions.",
        },
        {
          title: "Operational quality",
          body: "Swiss-made components and deployment standards that support daily use in real traffic environments.",
        },
      ],
      useCasesTitle: "Where miros workpods fit best.",
      useCases: [
        {
          title: "Offices and headquarters",
          body: "Add quiet focus pods without heavy construction or permanent reconfiguration.",
        },
        {
          title: "Stations, hospitals, and campuses",
          body: "Create private work and call space in high-traffic public or semi-public environments.",
        },
        {
          title: "Events and temporary activations",
          body: "Offer premium workspace and meeting privacy on site with controlled access.",
        },
      ],
      ctaTitle: "Need a quote for workpods or office pods?",
      ctaBody: "Use the contact page to discuss capacity, location, acoustic needs, and rollout timing.",
    },
    phoneBooths: {
      meta: {
        title: "Phone booths and phone boxes in Switzerland | miros",
        description:
          "Swiss-made phone booths and phone boxes for offices, stations, hospitals, and events. Acoustic privacy for calls and meetings.",
      },
      eyebrow: "Phone booths",
      title: "Phone booths, phone boxes, and call booths in Switzerland.",
      intro:
        "This landing page is built for people searching for a phone booth, phone box, call booth, or meeting booth with acoustic privacy and premium materials.",
      cards: [
        {
          title: "Made for calls",
          body: "Enclosed space for voice calls, video calls, and short one-to-one meetings.",
        },
        {
          title: "Acoustic comfort",
          body: "A calmer environment for concentration and a better call experience in busy settings.",
        },
        {
          title: "Premium Swiss positioning",
          body: "For operators who want a Swiss-made phone booth with durable construction and trust signals.",
        },
      ],
      fitTitle: "Typical phone booth use cases.",
      fitCards: [
        {
          title: "Corporate offices",
          body: "Reduce noise and protect privacy for calls without closing off large floor areas.",
        },
        {
          title: "Shared work environments",
          body: "Offer quiet call space in coworking, libraries, and public venues.",
        },
        {
          title: "High-traffic visitor spaces",
          body: "Deploy call booths in stations, hospitals, and event sites where people need private moments.",
        },
      ],
      ctaTitle: "Looking for a phone booth or phone box in Switzerland?",
      ctaBody: "Contact miros for deployment options, specifications, and Swiss-made sourcing details.",
    },
    swissMade: {
      meta: {
        title: "Swiss-made workpods and phone booths | miros",
        description:
          "miros designs Swiss-made workpods and phone booths in partnership with Ducommun menuisiers for long-term deployment quality in Switzerland.",
      },
      eyebrow: "Swiss-made",
      title: "Swiss-made workpods and phone booths built for long-term use.",
      intro:
        "For buyers searching for Swiss-made phone booths, Swiss-made workpods, or office pods made in Switzerland, miros combines local design, manufacturing, and field deployment.",
      proofCards: [
        {
          title: "EPFL spin-off",
          body: "A Swiss innovation story grounded in real deployment and workplace operations.",
        },
        {
          title: "Ducommun menuisiers",
          body: "Local manufacturing partnership focused on quality, durability, and reliable production standards.",
        },
        {
          title: "Swiss deployment context",
          body: "Built for practical use across offices, stations, hospitals, campuses, and event sites in Switzerland.",
        },
      ],
      qualityTitle: "Why Swiss-made matters here.",
      qualityBody:
        "Swiss design and local manufacturing help align materials, finish quality, service expectations, and operational reliability with demanding workplace environments.",
      ctaTitle: "Need a Swiss-made phone booth or workpod partner?",
      ctaBody: "Share your project scope and we can discuss product fit, rollout timing, and local manufacturing considerations.",
    },
    about: {
      meta: {
        title: "About miros | Swiss-made workpod company",
        description:
          "Learn about miros, the EPFL spin-off behind Swiss-made workpods and phone booths for flexible workspace deployment in Switzerland.",
      },
      eyebrow: "About",
      title: "An EPFL spin-off building Swiss-made workpod infrastructure.",
      intro:
        "miros combines product engineering, field operations, and Swiss manufacturing to build a trusted category around workpods, office pods, and phone booths in Switzerland.",
      valuesTitle: "What we optimize for.",
      values: [
        {
          title: "Useful innovation",
          body: "Premium workspace products that solve real constraints around privacy, focus, and mobility.",
        },
        {
          title: "Operational durability",
          body: "Pods designed for repeated daily use in demanding, real-world environments.",
        },
        {
          title: "Local trust",
          body: "Swiss partners, transparent manufacturing, and practical deployment quality.",
        },
      ],
      foundersTitle: "Founders",
      founders: [
        {
          name: "Dr. Fabio Zuliani",
          role: "Founder & CEO",
          story: "Fabio leads product vision, partnerships, and long-term expansion of the miros network.",
          image: `${BASE_PATH}/images/fabio-zuliani.jpg`,
        },
        {
          name: "Neil Chennoufi",
          role: "Co-Founder & COO",
          story: "Neil leads deployment quality and field operations from planning through on-site execution.",
          image: `${BASE_PATH}/images/neil-chennoufi.jpg`,
        },
      ],
      partnerTitle: "Swiss manufacturing partner",
      partnerBody:
        "We work with Ducommun menuisiers to maintain production quality, durable finishes, and strong local support.",
    },
    contact: {
      meta: {
        title: "Contact miros | Workpod, phone booth, and Swiss-made quote requests",
        description:
          "Contact miros for workpod, office pod, phone booth, and Swiss-made workspace projects in Switzerland.",
      },
      eyebrow: "Contact",
      title: "Tell us what you need for your workpod or phone booth project.",
      intro:
        "Use the form for hosting, quote requests, partnerships, or questions about Swiss-made workpods, office pods, and phone booths.",
      reasons: [
        {
          title: "Request a quote",
          body: "Share your location, target capacity, and whether you need a workpod, office pod, or phone booth.",
        },
        {
          title: "Host a pod",
          body: "Tell us about your office, station, hospital, campus, or event environment.",
        },
        {
          title: "Discuss partnership",
          body: "We work with operators, venue owners, and organizations looking for premium private workspace solutions.",
        },
      ],
      form: {
        name: "Name",
        email: "Email",
        company: "Company / Organization",
        topic: "Topic",
        message: "Message",
        submit: "Send Email",
        placeholders: {
          name: "Your name",
          email: "you@company.com",
          company: "Company, institution, event...",
          message: "Share context, timeline, location, and whether you are looking for a workpod, phone booth, or Swiss-made solution.",
        },
        topics: {
          host_pod: "Host a pod",
          startup_question: "Question about the startup",
          quote_request: "Request a quote",
          partnership: "Partnership",
          other: "Other",
        },
        status: {
          sending: "Sending...",
          success: "Message sent. We will get back to you shortly.",
          error: "Send failed. Your email app will open as fallback.",
        },
      },
    },
  },
  fr: {
    localeLabel: "FR",
    languageName: "Français",
    nav: {
      home: "Accueil",
      workpods: "Workpods",
      phoneBooths: "Cabines téléphoniques",
      swissMade: "Fabriqué en Suisse",
      about: "À propos",
      contact: "Contact",
    },
    footer: {
      copy: "Workpods, cabines téléphoniques et espaces de travail privés fabriqués en Suisse.",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
    },
    home: {
      meta: {
        title: "miros workpod Suisse | Workpods, phone box et espaces de travail privés",
        description:
          "miros conçoit des workpods, phone box et espaces de travail privés fabriqués en Suisse pour bureaux, gares, hôpitaux, campus et événements.",
      },
      badge: "Réseau suisse d'espaces de travail privés",
      title: "Workpods, phone box et espaces de travail privés en Suisse.",
      subtitle:
        "miros déploie des workpods, pods de bureau et cabines acoustiques pour appels, concentration et conditions de travail premium.",
      primary: "Héberger un pod",
      secondary: "Explorer les workpods",
      tertiary: "Télécharger l'app",
      overviewTitle: "Une plateforme workpod pensée pour des lieux suisses réels.",
      overviewBody:
        "Nous installons des espaces calmes dans des bureaux, gares, hôpitaux, campus et événements avec une qualité de fabrication suisse.",
      overviewCards: [
        {
          title: "Workpods et pods de bureau",
          body: "Espaces privés pour travail concentré, réunions courtes et sessions individuelles.",
        },
        {
          title: "Phone box et cabines d'appel",
          body: "Cabines acoustiques pour appels confidentiels, visioconférences et concentration.",
        },
        {
          title: "Déploiement flexible",
          body: "Formats adaptés aux environnements publics, privés et événementiels.",
        },
      ],
      searchTitle: "Pensé pour les recherches réelles.",
      searchCards: [
        {
          title: "Workpod Suisse",
          body: "Une page claire pour les recherches workpod, pod de bureau et espace de travail privé en Suisse.",
        },
        {
          title: "Phone booth Suisse",
          body: "Un contenu dédié aux intentions phone booth, phone box et cabine d'appel.",
        },
        {
          title: "Cabine téléphonique fabriquée en Suisse",
          body: "Une page de confiance orientée fabrication locale, design suisse et partenaires suisses.",
        },
      ],
      proofTitle: "Design suisse, fabrication locale, déploiements crédibles.",
      proofBody:
        "miros est une spin-off EPFL qui travaille avec Ducommun menuisiers et des partenaires suisses de déploiement.",
      trustTitle: "Ils nous font confiance",
      ctaTitle: "Vous cherchez un workpod, un pod de bureau ou une phone box en Suisse ?",
      ctaBody:
        "Indiquez votre lieu, votre capacité et votre calendrier. Nous pouvons discuter hébergement, déploiement et devis.",
    },
    workpods: {
      meta: {
        title: "Workpods et pods de bureau en Suisse | miros",
        description:
          "Découvrez les workpods et pods de bureau miros en Suisse pour travail concentré, confidentialité acoustique et déploiement flexible.",
      },
      eyebrow: "Workpods",
      title: "Workpods et pods de bureau pour le travail concentré en Suisse.",
      intro:
        "Cette page cible les recherches workpod, pod de bureau, cabine acoustique et espace de travail privé avec une vue pratique des usages miros.",
      cards: [
        {
          title: "Confidentialité acoustique",
          body: "Pensé pour appels confidentiels, concentration et réduction du bruit ambiant.",
        },
        {
          title: "Formats flexibles",
          body: "De la cabine individuelle aux pods plus grands pour réunions courtes.",
        },
        {
          title: "Qualité opérationnelle",
          body: "Fabrication suisse et standards de déploiement adaptés à une utilisation quotidienne.",
        },
      ],
      useCasesTitle: "Où les workpods miros créent le plus de valeur.",
      useCases: [
        {
          title: "Bureaux et sièges",
          body: "Ajouter des zones calmes sans gros travaux ni reconfiguration lourde.",
        },
        {
          title: "Gares, hôpitaux et campus",
          body: "Créer des espaces de travail et d'appel privés dans des lieux à fort trafic.",
        },
        {
          title: "Événements et activations",
          body: "Offrir sur site un espace premium pour travailler et appeler en toute confidentialité.",
        },
      ],
      ctaTitle: "Besoin d'un devis pour des workpods ou pods de bureau ?",
      ctaBody: "Utilisez la page contact pour parler capacité, lieu, acoustique et calendrier de déploiement.",
    },
    phoneBooths: {
      meta: {
        title: "Cabines téléphoniques et phone box en Suisse | miros",
        description:
          "Cabines téléphoniques et phone box fabriquées en Suisse pour bureaux, gares, hôpitaux et événements. Confidentialité acoustique pour appels et réunions.",
      },
      eyebrow: "Cabines téléphoniques",
      title: "Cabines téléphoniques, phone box et call booths en Suisse.",
      intro:
        "Cette page s'adresse aux recherches cabine téléphonique, phone box, cabine d'appel ou meeting booth avec priorité à l'acoustique et à la qualité des matériaux.",
      cards: [
        {
          title: "Pensé pour les appels",
          body: "Espace fermé pour appels vocaux, appels vidéo et réunions courtes.",
        },
        {
          title: "Confort acoustique",
          body: "Un environnement plus calme pour se concentrer et mieux appeler dans les lieux animés.",
        },
        {
          title: "Positionnement suisse premium",
          body: "Pour les opérateurs qui cherchent une phone box fabriquée en Suisse avec des signaux de confiance solides.",
        },
      ],
      fitTitle: "Cas d'usage typiques.",
      fitCards: [
        {
          title: "Bureaux d'entreprise",
          body: "Réduire le bruit et préserver la confidentialité des appels sur des surfaces limitées.",
        },
        {
          title: "Environnements partagés",
          body: "Ajouter un espace calme pour appels dans coworking, bibliothèques et lieux publics.",
        },
        {
          title: "Sites à forte fréquentation",
          body: "Déployer des cabines d'appel dans gares, hôpitaux et événements.",
        },
      ],
      ctaTitle: "Vous cherchez une phone box ou cabine téléphonique en Suisse ?",
      ctaBody: "Contactez miros pour les options de déploiement, les spécifications et l'approche Swiss-made.",
    },
    swissMade: {
      meta: {
        title: "Workpods et phone box fabriqués en Suisse | miros",
        description:
          "miros conçoit des workpods et phone box fabriqués en Suisse avec Ducommun menuisiers pour des déploiements durables en Suisse.",
      },
      eyebrow: "Fabriqué en Suisse",
      title: "Workpods et phone box fabriqués en Suisse pour une utilisation durable.",
      intro:
        "Pour les acheteurs qui cherchent une cabine téléphonique fabriquée en Suisse, un workpod suisse ou un pod de bureau Swiss-made, miros relie design, fabrication locale et déploiement terrain.",
      proofCards: [
        {
          title: "Spin-off EPFL",
          body: "Une histoire d'innovation suisse ancrée dans des usages réels et une vraie exigence opérationnelle.",
        },
        {
          title: "Ducommun menuisiers",
          body: "Un partenaire de fabrication locale centré sur la qualité, la durabilité et la fiabilité de production.",
        },
        {
          title: "Contexte suisse",
          body: "Conçu pour les bureaux, gares, hôpitaux, campus et événements en Suisse.",
        },
      ],
      qualityTitle: "Pourquoi le Swiss-made compte ici.",
      qualityBody:
        "Le design suisse et la fabrication locale aident à aligner matériaux, finition, service et fiabilité avec les attentes d'environnements professionnels exigeants.",
      ctaTitle: "Besoin d'un partenaire Swiss-made pour phone box ou workpod ?",
      ctaBody: "Partagez votre projet et nous discuterons adéquation produit, calendrier et fabrication locale.",
    },
    about: {
      meta: {
        title: "À propos de miros | Société suisse de workpods",
        description:
          "Découvrez miros, la spin-off EPFL derrière des workpods et phone box fabriqués en Suisse pour le travail flexible en Suisse.",
      },
      eyebrow: "À propos",
      title: "Une spin-off EPFL qui construit une infrastructure workpod fabriquée en Suisse.",
      intro:
        "miros combine ingénierie produit, opérations terrain et fabrication suisse pour bâtir une catégorie crédible autour des workpods, pods de bureau et phone box.",
      valuesTitle: "Nos priorités.",
      values: [
        {
          title: "Innovation utile",
          body: "Des produits workspace premium qui répondent à de vrais besoins de confidentialité et de concentration.",
        },
        {
          title: "Durabilité opérationnelle",
          body: "Des pods pensés pour une utilisation quotidienne dans des environnements exigeants.",
        },
        {
          title: "Confiance locale",
          body: "Partenaires suisses, fabrication claire et qualité de déploiement concrète.",
        },
      ],
      foundersTitle: "Fondateurs",
      founders: [
        {
          name: "Dr. Fabio Zuliani",
          role: "Fondateur & CEO",
          story: "Fabio pilote la vision produit, les partenariats et l'expansion long terme du réseau miros.",
          image: `${BASE_PATH}/images/fabio-zuliani.jpg`,
        },
        {
          name: "Neil Chennoufi",
          role: "Co-fondateur & COO",
          story: "Neil pilote la qualité de déploiement et les opérations terrain jusqu'à l'exécution sur site.",
          image: `${BASE_PATH}/images/neil-chennoufi.jpg`,
        },
      ],
      partnerTitle: "Partenaire de fabrication suisse",
      partnerBody:
        "Nous travaillons avec Ducommun menuisiers pour garantir qualité de production, finitions durables et support local.",
    },
    contact: {
      meta: {
        title: "Contacter miros | Devis workpod, phone box et solution Swiss-made",
        description:
          "Contactez miros pour des projets workpod, pod de bureau, phone box et espaces de travail privés fabriqués en Suisse.",
      },
      eyebrow: "Contact",
      title: "Dites-nous ce qu'il vous faut pour votre projet de workpod ou phone box.",
      intro:
        "Utilisez ce formulaire pour héberger un pod, demander un devis, parler partenariat ou poser une question sur des workpods et phone box Swiss-made.",
      reasons: [
        {
          title: "Demander un devis",
          body: "Précisez votre lieu, la capacité visée et si vous cherchez un workpod, un pod de bureau ou une phone box.",
        },
        {
          title: "Héberger un pod",
          body: "Présentez votre bureau, gare, hôpital, campus ou environnement événementiel.",
        },
        {
          title: "Discuter partenariat",
          body: "Nous travaillons avec des opérateurs, lieux et organisations qui cherchent des solutions de workspace privé premium.",
        },
      ],
      form: {
        name: "Nom",
        email: "Email",
        company: "Entreprise / Organisation",
        topic: "Sujet",
        message: "Message",
        submit: "Envoyer l'email",
        placeholders: {
          name: "Votre nom",
          email: "vous@entreprise.com",
          company: "Entreprise, institution, événement...",
          message: "Partagez le contexte, le calendrier, le lieu et dites si vous cherchez un workpod, une phone box ou une solution Swiss-made.",
        },
        topics: {
          host_pod: "Héberger un pod",
          startup_question: "Question sur la startup",
          quote_request: "Demander un devis",
          partnership: "Partenariat",
          other: "Autre",
        },
        status: {
          sending: "Envoi en cours...",
          success: "Message envoyé. Nous revenons vers vous rapidement.",
          error: "Échec de l'envoi. Votre application email va s'ouvrir en secours.",
        },
      },
    },
  },
  de: {
    localeLabel: "DE",
    languageName: "Deutsch",
    nav: {
      home: "Start",
      workpods: "Workpods",
      phoneBooths: "Telefonkabinen",
      swissMade: "Swiss-made",
      about: "Über uns",
      contact: "Kontakt",
    },
    footer: {
      copy: "Swiss-made Workpods, Telefonkabinen und private Arbeitsbereiche für die Schweiz.",
      privacy: "Datenschutzerklärung",
      terms: "Allgemeine Geschäftsbedingungen",
    },
    home: {
      meta: {
        title: "miros Workpod Schweiz | Workpods, Telefonkabinen und private Arbeitsplätze",
        description:
          "miros entwickelt Swiss-made Workpods, Telefonkabinen und private Arbeitsbereiche für Büros, Bahnhöfe, Spitäler, Campus und Events in der Schweiz.",
      },
      badge: "Swiss-made Netzwerk für private Arbeitsplätze",
      title: "Workpods, Telefonkabinen und private Arbeitsbereiche in der Schweiz.",
      subtitle:
        "miros hilft Betreibern und Arbeitsorten beim Einsatz von akustischen Workpods, Office Pods und Phone Booths für Calls, Fokusarbeit und hochwertige Arbeitsbedingungen.",
      primary: "Pod hosten",
      secondary: "Workpods entdecken",
      tertiary: "App herunterladen",
      overviewTitle: "Eine Workpod-Plattform für reale Schweizer Einsatzorte.",
      overviewBody:
        "Wir installieren ruhige Arbeitsräume in Büros, Bahnhöfen, Spitälern, Campus und Eventflächen mit konstantem Swiss-made Qualitätsanspruch.",
      overviewCards: [
        {
          title: "Workpods und Office Pods",
          body: "Private Arbeitsräume für fokussiertes Arbeiten, kurze Meetings und produktive Einzelsessions.",
        },
        {
          title: "Telefonkabinen und Call Booths",
          body: "Akustische Kabinen für vertrauliche Gespräche, Videocalls und kurze Fokusphasen.",
        },
        {
          title: "Flexible Rollouts",
          body: "Geeignet für öffentliche, private und temporäre Umgebungen mit lokalem Support.",
        },
      ],
      searchTitle: "Gebaut für echte Suchintentionen.",
      searchCards: [
        {
          title: "Workpod Schweiz",
          body: "Eine klare Seite für Suchanfragen rund um Workpod, Office Pod und privaten Arbeitsplatz in der Schweiz.",
        },
        {
          title: "Phone Booth Schweiz",
          body: "Eigener Content für Telefonkabine, Phone Box, Call Booth und Meeting Booth Intent.",
        },
        {
          title: "Swiss-made Telefonkabine",
          body: "Eine Vertrauensseite zu Schweizer Design, lokaler Fertigung und starken Partnern.",
        },
      ],
      proofTitle: "Schweizer Design, lokale Fertigung, glaubwürdige Einsätze.",
      proofBody:
        "miros ist ein EPFL-Spin-off und arbeitet mit Ducommun menuisiers sowie Schweizer Partnern für den Rollout zusammen.",
      trustTitle: "Sie vertrauen uns",
      ctaTitle: "Sie suchen einen Workpod, Office Pod oder eine Telefonkabine in der Schweiz?",
      ctaBody:
        "Teilen Sie Standort, Kapazität und Zeitplan. Wir besprechen Hosting, Deployment und Angebotsanfragen.",
    },
    workpods: {
      meta: {
        title: "Workpods und Office Pods in der Schweiz | miros",
        description:
          "Entdecken Sie miros Workpods und Office Pods in der Schweiz für Fokusarbeit, akustische Privatsphäre und flexible Workplace-Deployments.",
      },
      eyebrow: "Workpods",
      title: "Workpods und Office Pods für fokussiertes Arbeiten in der Schweiz.",
      intro:
        "Diese Seite richtet sich an Suchanfragen wie Workpod, Office Pod, Akustikkabine und privater Arbeitsbereich mit einer klaren Übersicht der miros Einsatzfälle.",
      cards: [
        {
          title: "Akustische Privatsphäre",
          body: "Für vertrauliche Calls, konzentriertes Arbeiten und weniger Hintergrundlärm.",
        },
        {
          title: "Flexible Formate",
          body: "Von Einzelkabinen bis zu grösseren Pods für kurze Meetings und Zusammenarbeit.",
        },
        {
          title: "Betriebliche Qualität",
          body: "Swiss-made Komponenten und Rollout-Standards für den täglichen Einsatz.",
        },
      ],
      useCasesTitle: "Wo miros Workpods am besten passen.",
      useCases: [
        {
          title: "Büros und Hauptsitze",
          body: "Ruhige Fokusflächen schaffen ohne grosse Umbauten oder dauerhafte Reorganisation.",
        },
        {
          title: "Bahnhöfe, Spitäler und Campus",
          body: "Private Arbeits- und Call-Flächen in stark frequentierten Umgebungen schaffen.",
        },
        {
          title: "Events und temporäre Aktivierungen",
          body: "Vor Ort Premium-Arbeitsraum und Meeting-Privatsphäre anbieten.",
        },
      ],
      ctaTitle: "Brauchen Sie ein Angebot für Workpods oder Office Pods?",
      ctaBody: "Nutzen Sie die Kontaktseite für Kapazität, Standort, Akustik und Rollout-Timing.",
    },
    phoneBooths: {
      meta: {
        title: "Telefonkabinen und Phone Boxes in der Schweiz | miros",
        description:
          "Swiss-made Telefonkabinen und Phone Boxes für Büros, Bahnhöfe, Spitäler und Events. Akustische Privatsphäre für Gespräche und Meetings.",
      },
      eyebrow: "Telefonkabinen",
      title: "Telefonkabinen, Phone Boxes und Call Booths in der Schweiz.",
      intro:
        "Diese Seite richtet sich an Personen, die nach Telefonkabine, Phone Box, Call Booth oder Meeting Booth mit akustischer Privatsphäre und hochwertiger Verarbeitung suchen.",
      cards: [
        {
          title: "Für Calls gebaut",
          body: "Geschlossener Raum für Sprachanrufe, Videocalls und kurze Gespräche.",
        },
        {
          title: "Akustischer Komfort",
          body: "Mehr Ruhe für Konzentration und bessere Gesprächsqualität in belebten Umgebungen.",
        },
        {
          title: "Premium Swiss-made Positionierung",
          body: "Für Betreiber, die eine Swiss-made Telefonkabine mit belastbaren Qualitätssignalen suchen.",
        },
      ],
      fitTitle: "Typische Einsatzfelder.",
      fitCards: [
        {
          title: "Unternehmensbüros",
          body: "Lärm reduzieren und Gesprächsprivatsphäre schützen, ohne viel Fläche zu blockieren.",
        },
        {
          title: "Geteilte Arbeitsumgebungen",
          body: "Ruhige Call-Flächen in Coworking, Bibliotheken und öffentlichen Orten schaffen.",
        },
        {
          title: "Besucherintensive Standorte",
          body: "Call Booths in Bahnhöfen, Spitälern und Eventflächen einsetzen.",
        },
      ],
      ctaTitle: "Sie suchen eine Telefonkabine oder Phone Box in der Schweiz?",
      ctaBody: "Kontaktieren Sie miros für Deployment-Optionen, Spezifikationen und Swiss-made Details.",
    },
    swissMade: {
      meta: {
        title: "Swiss-made Workpods und Telefonkabinen | miros",
        description:
          "miros entwickelt Swiss-made Workpods und Telefonkabinen mit Ducommun menuisiers für langlebige Einsätze in der Schweiz.",
      },
      eyebrow: "Swiss-made",
      title: "Swiss-made Workpods und Telefonkabinen für langfristigen Einsatz.",
      intro:
        "Für Käufer, die nach Swiss-made Telefonkabinen, Schweizer Workpods oder Office Pods aus der Schweiz suchen, verbindet miros lokales Design, Fertigung und Deployment.",
      proofCards: [
        {
          title: "EPFL-Spin-off",
          body: "Eine Schweizer Innovationsgeschichte mit Fokus auf reale Nutzung und Betrieb.",
        },
        {
          title: "Ducommun menuisiers",
          body: "Lokaler Fertigungspartner mit Fokus auf Qualität, Langlebigkeit und verlässliche Produktion.",
        },
        {
          title: "Schweizer Einsatzkontext",
          body: "Gebaut für Büros, Bahnhöfe, Spitäler, Campus und Events in der Schweiz.",
        },
      ],
      qualityTitle: "Warum Swiss-made hier relevant ist.",
      qualityBody:
        "Schweizer Design und lokale Fertigung helfen, Materialien, Finish, Serviceerwartungen und Zuverlässigkeit besser auf anspruchsvolle Arbeitsumgebungen abzustimmen.",
      ctaTitle: "Sie brauchen einen Swiss-made Partner für Telefonkabinen oder Workpods?",
      ctaBody: "Teilen Sie Ihren Projektumfang, und wir besprechen Produktfit, Timing und lokale Fertigung.",
    },
    about: {
      meta: {
        title: "Über miros | Swiss-made Workpod Unternehmen",
        description:
          "Erfahren Sie mehr über miros, das EPFL-Spin-off hinter Swiss-made Workpods und Telefonkabinen für flexible Arbeitsorte in der Schweiz.",
      },
      eyebrow: "Über uns",
      title: "Ein EPFL-Spin-off für Swiss-made Workpod Infrastruktur.",
      intro:
        "miros verbindet Produktentwicklung, Feldbetrieb und Schweizer Fertigung, um rund um Workpods, Office Pods und Telefonkabinen eine glaubwürdige Kategorie aufzubauen.",
      valuesTitle: "Worauf wir optimieren.",
      values: [
        {
          title: "Nützliche Innovation",
          body: "Premium Workspace-Produkte für reale Anforderungen bei Privatsphäre, Fokus und Mobilität.",
        },
        {
          title: "Betriebliche Langlebigkeit",
          body: "Pods für intensive tägliche Nutzung in anspruchsvollen Umgebungen.",
        },
        {
          title: "Lokales Vertrauen",
          body: "Schweizer Partner, nachvollziehbare Fertigung und solide Rollout-Qualität.",
        },
      ],
      foundersTitle: "Gründer",
      founders: [
        {
          name: "Dr. Fabio Zuliani",
          role: "Gründer & CEO",
          story: "Fabio verantwortet Produktvision, Partnerschaften und den langfristigen Ausbau des miros Netzwerks.",
          image: `${BASE_PATH}/images/fabio-zuliani.jpg`,
        },
        {
          name: "Neil Chennoufi",
          role: "Co-Gründer & COO",
          story: "Neil verantwortet Deployment-Qualität und Feldbetrieb bis zur Umsetzung vor Ort.",
          image: `${BASE_PATH}/images/neil-chennoufi.jpg`,
        },
      ],
      partnerTitle: "Schweizer Fertigungspartner",
      partnerBody:
        "Wir arbeiten mit Ducommun menuisiers, um Produktionsqualität, langlebige Oberflächen und lokalen Support sicherzustellen.",
    },
    contact: {
      meta: {
        title: "Kontakt miros | Workpod, Telefonkabine und Swiss-made Angebote",
        description:
          "Kontaktieren Sie miros für Workpod-, Office-Pod-, Telefonkabinen- und Swiss-made Workspace-Projekte in der Schweiz.",
      },
      eyebrow: "Kontakt",
      title: "Sagen Sie uns, was Sie für Ihr Workpod- oder Telefonkabinen-Projekt brauchen.",
      intro:
        "Nutzen Sie das Formular für Hosting, Angebote, Partnerschaften oder Fragen zu Swiss-made Workpods, Office Pods und Telefonkabinen.",
      reasons: [
        {
          title: "Angebot anfragen",
          body: "Teilen Sie Standort, Zielkapazität und ob Sie einen Workpod, Office Pod oder eine Telefonkabine suchen.",
        },
        {
          title: "Pod hosten",
          body: "Beschreiben Sie Ihr Büro, Ihren Bahnhof, Ihr Spital, Ihren Campus oder Ihre Eventfläche.",
        },
        {
          title: "Partnerschaft besprechen",
          body: "Wir arbeiten mit Betreibern, Standorten und Organisationen, die hochwertige private Workspace-Lösungen suchen.",
        },
      ],
      form: {
        name: "Name",
        email: "E-Mail",
        company: "Unternehmen / Organisation",
        topic: "Thema",
        message: "Nachricht",
        submit: "E-Mail senden",
        placeholders: {
          name: "Ihr Name",
          email: "sie@unternehmen.com",
          company: "Unternehmen, Institution, Event...",
          message: "Teilen Sie Kontext, Zeitplan, Standort und ob Sie einen Workpod, eine Telefonkabine oder eine Swiss-made Lösung suchen.",
        },
        topics: {
          host_pod: "Pod hosten",
          startup_question: "Frage zum Startup",
          quote_request: "Angebot anfragen",
          partnership: "Partnerschaft",
          other: "Andere",
        },
        status: {
          sending: "Wird gesendet...",
          success: "Nachricht gesendet. Wir melden uns in Kürze.",
          error: "Senden fehlgeschlagen. Ihr E-Mail-Programm wird als Fallback geöffnet.",
        },
      },
    },
  },
  it: {
    localeLabel: "IT",
    languageName: "Italiano",
    nav: {
      home: "Home",
      workpods: "Workpods",
      phoneBooths: "Cabine telefoniche",
      swissMade: "Swiss-made",
      about: "Chi siamo",
      contact: "Contatto",
    },
    footer: {
      copy: "Workpods, cabine telefoniche e spazi di lavoro privati Swiss-made per la Svizzera.",
      privacy: "Informativa sulla privacy",
      terms: "Termini e condizioni",
    },
    home: {
      meta: {
        title: "miros workpod Svizzera | Workpods, phone box e spazi di lavoro privati",
        description:
          "miros realizza workpods, phone box e spazi di lavoro privati Swiss-made per uffici, stazioni, ospedali, campus ed eventi in Svizzera.",
      },
      badge: "Rete svizzera di spazi di lavoro privati",
      title: "Workpods, phone box e spazi di lavoro privati in Svizzera.",
      subtitle:
        "miros aiuta operatori e luoghi di lavoro a installare workpods, office pods e cabine acustiche per chiamate, concentrazione e condizioni di lavoro premium.",
      primary: "Ospita un pod",
      secondary: "Esplora i workpods",
      tertiary: "Scarica l'app",
      overviewTitle: "Una piattaforma workpod pensata per luoghi svizzeri reali.",
      overviewBody:
        "Installiamo spazi silenziosi in uffici, stazioni, ospedali, campus ed eventi con standard di qualità Swiss-made.",
      overviewCards: [
        {
          title: "Workpods e office pods",
          body: "Spazi privati per lavoro concentrato, riunioni brevi e sessioni individuali produttive.",
        },
        {
          title: "Phone box e cabine per chiamate",
          body: "Cabine acustiche per chiamate riservate, videochiamate e lavoro concentrato.",
        },
        {
          title: "Deployment flessibile",
          body: "Adatti ad ambienti pubblici, privati ed eventi con supporto operativo locale.",
        },
      ],
      searchTitle: "Pensato per le ricerche reali.",
      searchCards: [
        {
          title: "Workpod Svizzera",
          body: "Una pagina chiara per ricerche workpod, office pod e spazio di lavoro privato in Svizzera.",
        },
        {
          title: "Phone booth Svizzera",
          body: "Contenuto dedicato per intenti phone booth, phone box, call booth e meeting booth.",
        },
        {
          title: "Cabina telefonica Swiss-made",
          body: "Una pagina orientata alla fiducia su design svizzero, produzione locale e partner solidi.",
        },
      ],
      proofTitle: "Design svizzero, produzione locale, deployment credibili.",
      proofBody:
        "miros è una spin-off EPFL che collabora con Ducommun menuisiers e partner svizzeri per il deployment.",
      trustTitle: "Si fidano di noi",
      ctaTitle: "Cerchi un workpod, office pod o una phone box in Svizzera?",
      ctaBody:
        "Condividi luogo, capacità e tempistiche. Possiamo discutere hosting, deployment e richiesta di preventivo.",
    },
    workpods: {
      meta: {
        title: "Workpods e office pods in Svizzera | miros",
        description:
          "Scopri i workpods e office pods miros in Svizzera per lavoro concentrato, privacy acustica e deployment flessibile.",
      },
      eyebrow: "Workpods",
      title: "Workpods e office pods per lavoro concentrato in Svizzera.",
      intro:
        "Questa pagina intercetta ricerche come workpod, office pod, cabina acustica e spazio di lavoro privato con una panoramica pratica degli usi miros.",
      cards: [
        {
          title: "Privacy acustica",
          body: "Pensato per chiamate riservate, lavoro concentrato e riduzione del rumore di fondo.",
        },
        {
          title: "Formati flessibili",
          body: "Dalle cabine singole ai pod più grandi per riunioni brevi e collaborazione.",
        },
        {
          title: "Qualità operativa",
          body: "Componenti Swiss-made e standard di deployment adatti all'uso quotidiano.",
        },
      ],
      useCasesTitle: "Dove i workpods miros funzionano meglio.",
      useCases: [
        {
          title: "Uffici e headquarters",
          body: "Aggiungi zone silenziose senza lavori pesanti o riconfigurazioni permanenti.",
        },
        {
          title: "Stazioni, ospedali e campus",
          body: "Crea spazi privati per lavoro e chiamate in ambienti ad alto traffico.",
        },
        {
          title: "Eventi e attivazioni temporanee",
          body: "Offri sul posto uno spazio premium per lavoro e privacy durante le riunioni.",
        },
      ],
      ctaTitle: "Hai bisogno di un preventivo per workpods o office pods?",
      ctaBody: "Usa la pagina contatti per parlare di capacità, luogo, esigenze acustiche e tempistiche.",
    },
    phoneBooths: {
      meta: {
        title: "Cabine telefoniche e phone box in Svizzera | miros",
        description:
          "Cabine telefoniche e phone box Swiss-made per uffici, stazioni, ospedali ed eventi. Privacy acustica per chiamate e riunioni.",
      },
      eyebrow: "Cabine telefoniche",
      title: "Cabine telefoniche, phone box e call booths in Svizzera.",
      intro:
        "Questa pagina è pensata per chi cerca una cabina telefonica, phone box, call booth o meeting booth con privacy acustica e materiali premium.",
      cards: [
        {
          title: "Pensate per le chiamate",
          body: "Spazio chiuso per chiamate vocali, videochiamate e riunioni brevi uno-a-uno.",
        },
        {
          title: "Comfort acustico",
          body: "Un ambiente più tranquillo per concentrarsi e chiamare meglio nei luoghi affollati.",
        },
        {
          title: "Posizionamento Swiss-made premium",
          body: "Per operatori che cercano una cabina telefonica Swiss-made con segnali di qualità credibili.",
        },
      ],
      fitTitle: "Casi d'uso tipici.",
      fitCards: [
        {
          title: "Uffici corporate",
          body: "Riduci il rumore e proteggi la privacy delle chiamate senza occupare grandi superfici.",
        },
        {
          title: "Ambienti condivisi",
          body: "Aggiungi uno spazio calmo per chiamate in coworking, biblioteche e luoghi pubblici.",
        },
        {
          title: "Spazi ad alto afflusso",
          body: "Installa call booths in stazioni, ospedali ed eventi dove servono momenti privati.",
        },
      ],
      ctaTitle: "Cerchi una cabina telefonica o phone box in Svizzera?",
      ctaBody: "Contatta miros per opzioni di deployment, specifiche e dettagli sulla produzione Swiss-made.",
    },
    swissMade: {
      meta: {
        title: "Workpods e cabine telefoniche Swiss-made | miros",
        description:
          "miros progetta workpods e cabine telefoniche Swiss-made con Ducommun menuisiers per deployment durevoli in Svizzera.",
      },
      eyebrow: "Swiss-made",
      title: "Workpods e cabine telefoniche Swiss-made per uso duraturo.",
      intro:
        "Per chi cerca cabine telefoniche Swiss-made, workpods prodotti in Svizzera o office pods svizzeri, miros unisce design locale, manifattura e deployment sul campo.",
      proofCards: [
        {
          title: "Spin-off EPFL",
          body: "Una storia di innovazione svizzera con attenzione all'uso reale e alle operations.",
        },
        {
          title: "Ducommun menuisiers",
          body: "Partner produttivo locale focalizzato su qualità, durata e affidabilità della produzione.",
        },
        {
          title: "Contesto svizzero",
          body: "Pensato per uffici, stazioni, ospedali, campus ed eventi in Svizzera.",
        },
      ],
      qualityTitle: "Perché Swiss-made conta in questo caso.",
      qualityBody:
        "Design svizzero e produzione locale aiutano ad allineare materiali, finitura, aspettative di servizio e affidabilità agli ambienti di lavoro più esigenti.",
      ctaTitle: "Ti serve un partner Swiss-made per cabine telefoniche o workpods?",
      ctaBody: "Condividi il tuo progetto e discuteremo fit prodotto, tempistiche e produzione locale.",
    },
    about: {
      meta: {
        title: "Chi è miros | Azienda svizzera di workpods",
        description:
          "Scopri miros, la spin-off EPFL dietro workpods e cabine telefoniche Swiss-made per spazi di lavoro flessibili in Svizzera.",
      },
      eyebrow: "Chi siamo",
      title: "Una spin-off EPFL che costruisce infrastruttura workpod Swiss-made.",
      intro:
        "miros unisce product engineering, operations sul campo e manifattura svizzera per costruire una categoria credibile attorno a workpods, office pods e cabine telefoniche.",
      valuesTitle: "Cosa ci guida.",
      values: [
        {
          title: "Innovazione utile",
          body: "Prodotti workspace premium che risolvono esigenze reali di privacy, concentrazione e mobilità.",
        },
        {
          title: "Durata operativa",
          body: "Pods pensati per un uso quotidiano intenso in ambienti esigenti.",
        },
        {
          title: "Fiducia locale",
          body: "Partner svizzeri, manifattura chiara e qualità di deployment concreta.",
        },
      ],
      foundersTitle: "Fondatori",
      founders: [
        {
          name: "Dr. Fabio Zuliani",
          role: "Fondatore & CEO",
          story: "Fabio guida la visione prodotto, le partnership e l'espansione di lungo periodo della rete miros.",
          image: `${BASE_PATH}/images/fabio-zuliani.jpg`,
        },
        {
          name: "Neil Chennoufi",
          role: "Co-fondatore & COO",
          story: "Neil guida la qualità di deployment e le operations sul campo fino all'esecuzione on site.",
          image: `${BASE_PATH}/images/neil-chennoufi.jpg`,
        },
      ],
      partnerTitle: "Partner produttivo svizzero",
      partnerBody:
        "Lavoriamo con Ducommun menuisiers per garantire qualità produttiva, finiture durevoli e supporto locale.",
    },
    contact: {
      meta: {
        title: "Contatta miros | Preventivi per workpod, phone box e soluzioni Swiss-made",
        description:
          "Contatta miros per progetti workpod, office pod, cabine telefoniche e spazi di lavoro privati Swiss-made in Svizzera.",
      },
      eyebrow: "Contatto",
      title: "Dicci di cosa hai bisogno per il tuo progetto workpod o phone box.",
      intro:
        "Usa il modulo per hosting, preventivi, partnership o domande su workpods, office pods e cabine telefoniche Swiss-made.",
      reasons: [
        {
          title: "Richiedi un preventivo",
          body: "Condividi luogo, capacità prevista e se cerchi un workpod, office pod o una cabina telefonica.",
        },
        {
          title: "Ospita un pod",
          body: "Raccontaci il tuo ufficio, stazione, ospedale, campus o spazio evento.",
        },
        {
          title: "Parla di partnership",
          body: "Lavoriamo con operatori, location e organizzazioni che cercano soluzioni premium di workspace privato.",
        },
      ],
      form: {
        name: "Nome",
        email: "Email",
        company: "Azienda / Organizzazione",
        topic: "Tema",
        message: "Messaggio",
        submit: "Invia email",
        placeholders: {
          name: "Il tuo nome",
          email: "tu@azienda.com",
          company: "Azienda, istituzione, evento...",
          message: "Condividi contesto, tempistiche, luogo e se stai cercando un workpod, una cabina telefonica o una soluzione Swiss-made.",
        },
        topics: {
          host_pod: "Ospitare un pod",
          startup_question: "Domanda sulla startup",
          quote_request: "Richiedere un preventivo",
          partnership: "Partnership",
          other: "Altro",
        },
        status: {
          sending: "Invio in corso...",
          success: "Messaggio inviato. Ti risponderemo a breve.",
          error: "Invio non riuscito. Si aprirà l'app email come fallback.",
        },
      },
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
