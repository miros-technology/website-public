import type { Locale } from "./seo";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

type HomeCopy = {
  nav: {
    models: string;
    features: string;
    swiss: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    anywhere: string;
    anytime: string;
    subline: string;
    primary: string;
    secondary: string;
    download: string;
  };
  models: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  swiss: { eyebrow: string; title: string; body: string; logoLabel: string };
  trust: { title: string };
  how: {
    eyebrow: string;
    title: string;
    steps: { number: string; title: string; body: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    rent: string;
    host: string;
  };
  footer: {
    copy: string;
    privacy: string;
    terms: string;
  };
};

type FounderCopy = {
  name: string;
  role: string;
  story: string;
  image: string;
};

type AboutCopy = {
  nav: { home: string; about: string; contact: string };
  eyebrow: string;
  title: string;
  introA: string;
  introB: string;
  foundersTitle: string;
  partnerTitle: string;
  partnerBody: string;
  valuesEyebrow: string;
  values: { title: string; body: string }[];
  founders: FounderCopy[];
  footer: { copy: string; privacy: string; terms: string };
};

type ContactCopy = {
  nav: { home: string; about: string; contact: string };
  eyebrow: string;
  title: string;
  intro: string;
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
    topics: Record<"host_pod" | "startup_question" | "quote_request" | "partnership" | "other", string>;
    status: {
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: { copy: string; privacy: string; terms: string };
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    nav: { models: "Pods", features: "Features", swiss: "Swiss-made", about: "About", contact: "Contact" },
    hero: {
      badge: "Connected network",
      title: "On-demand Workspaces.",
      anywhere: "Anywhere",
      anytime: "Anytime",
      subline:
        "A connected network of workpods shaping the future of flexible workspace, built for people who need reliable focus, privacy and quality work conditions in real-world locations.",
      primary: "Host a pod",
      secondary: "Explore",
      download: "Download app",
    },
    models: {
      eyebrow: "Use cases",
      title: "Three ways to use our pods in real-world deployments.",
      items: [
        { title: "Public", body: "Stations, airports, hospitals, campuses and libraries with hourly access." },
        { title: "Private", body: "Dedicated pods for companies that need controlled and quiet focus spaces." },
        { title: "Events", body: "On-site pods for conferences, exhibitions and temporary activations with managed access." },
      ],
    },
    features: {
      eyebrow: "Core features",
      title: "Built for productivity on the go.",
      items: [
        { title: "Location-first access", body: "Find and book nearby workpods fast, wherever your day takes you." },
        { title: "Confidential by design", body: "Acoustic privacy and enclosed layouts for calls, concentration and sensitive work." },
        { title: "Reliable quality work setup", body: "Consistent comfort, connectivity and focus standards across the network." },
      ],
    },
    swiss: {
      eyebrow: "Swiss-made",
      title: "Designed in Switzerland, built with Ducommun menuisiers.",
      body: "miros workpods are developed with Swiss partners and manufactured with local craftsmanship focused on quality, durability and long-term operations.",
      logoLabel: "Ducommun menuisiers",
    },
    trust: { title: "They trust us" },
    how: {
      eyebrow: "How it works",
      title: "Three steps.",
      steps: [
        { number: "01", title: "Download", body: "Install the miros app on all platforms." },
        { number: "02", title: "Reserve", body: "Choose your pod and book your slot." },
        { number: "03", title: "Work", body: "Unlock with your phone and get focused." },
      ],
    },
    cta: {
      eyebrow: "Get started",
      title: "Rent a pod or host one in your space.",
      body: "Use the rent form or contact us to include your location in the network.",
      rent: "Host a pod",
      host: "Contact us",
    },
    footer: { copy: "Built for focused work, privacy, and flexibility.", privacy: "Privacy Policy", terms: "Terms & Conditions" },
  },
  fr: {
    nav: { models: "Pods", features: "Fonctions", swiss: "Fabriqué en Suisse", about: "À propos", contact: "Contact" },
    hero: {
      badge: "Réseau connecté",
      title: "Espaces de travail à la demande.",
      anywhere: "Partout",
      anytime: "À tout moment",
      subline: "Un réseau de workpods connectés pour un travail flexible et de qualité.",
      primary: "Héberger un pod",
      secondary: "Explorer",
      download: "Télécharger l'app",
    },
    models: {
      eyebrow: "Cas d'usage",
      title: "Trois façons d'utiliser nos pods dans des déploiements concrets.",
      items: [
        { title: "Public", body: "Gares, aéroports, hôpitaux, campus et bibliothèques avec accès horaire." },
        { title: "Privé", body: "Pods dédiés pour entreprises qui veulent des espaces calmes et maîtrisés." },
        { title: "Événements", body: "Pods sur site pour conférences, salons et activations temporaires avec accès géré." },
      ],
    },
    features: {
      eyebrow: "Fonctions clés",
      title: "Conçu pour la productivité en mobilité.",
      items: [
        { title: "Accès basé sur la localisation", body: "Trouvez et réservez rapidement un pod proche, selon vos déplacements." },
        { title: "Confidentialité intégrée", body: "Isolation acoustique et espace fermé pour appels et travail sensible." },
        { title: "Qualité de travail constante", body: "Confort, connectivité et concentration homogènes sur tout le réseau." },
      ],
    },
    swiss: {
      eyebrow: "Fabriqué en Suisse",
      title: "Conçu en Suisse, fabriqué avec Ducommun menuisiers.",
      body: "Les workpods miros sont développés avec des partenaires suisses et fabriqués localement avec exigence de qualité et de durabilité.",
      logoLabel: "Ducommun menuisiers",
    },
    trust: { title: "Ils nous font confiance" },
    how: {
      eyebrow: "Fonctionnement",
      title: "Trois étapes.",
      steps: [
        { number: "01", title: "Télécharger", body: "Installez l'app miros sur toutes les plateformes." },
        { number: "02", title: "Réserver", body: "Choisissez votre pod et votre créneau." },
        { number: "03", title: "Travailler", body: "Déverrouillez avec votre téléphone et concentrez-vous." },
      ],
    },
    cta: {
      eyebrow: "Passer à l'action",
      title: "Louer un pod ou héberger un pod.",
      body: "Utilisez le formulaire de location ou contactez-nous pour intégrer votre site au réseau.",
      rent: "Héberger un pod",
      host: "Nous contacter",
    },
    footer: { copy: "Conçu pour travailler au calme, en toute confidentialité et avec flexibilité.", privacy: "Politique de confidentialité", terms: "Conditions générales" },
  },
  de: {
    nav: { models: "Pods", features: "Funktionen", swiss: "Swiss-made", about: "Über uns", contact: "Kontakt" },
    hero: {
      badge: "Vernetztes Netzwerk",
      title: "On-demand Workspaces.",
      anywhere: "Überall",
      anytime: "Jederzeit",
      subline: "Ein vernetztes Workpod-Netz für flexibles Arbeiten in hoher Qualität.",
      primary: "Pod hosten",
      secondary: "Entdecken",
      download: "App herunterladen",
    },
    models: {
      eyebrow: "Einsatzbereiche",
      title: "Drei Möglichkeiten, unsere Pods in realen Einsatzorten zu nutzen.",
      items: [
        { title: "Öffentlich", body: "Bahnhöfe, Flughäfen, Spitäler, Campus und Bibliotheken mit stundenweisem Zugang." },
        { title: "Privat", body: "Dedizierte Pods für Unternehmen mit ruhigen, kontrollierten Fokusflächen." },
        { title: "Events", body: "Pods vor Ort für Konferenzen, Messen und temporäre Aktivierungen mit gesteuertem Zugang." },
      ],
    },
    features: {
      eyebrow: "Kernfunktionen",
      title: "Für produktives Arbeiten unterwegs.",
      items: [
        { title: "Standortbasierter Zugang", body: "Pods in der Nähe schnell finden und direkt buchen." },
        { title: "Vertraulichkeit by design", body: "Akustisch abgeschirmte, geschlossene Umgebung für Calls und Fokusarbeit." },
        { title: "Konstant hohe Arbeitsqualität", body: "Einheitliche Standards für Komfort, Verbindung und Konzentration." },
      ],
    },
    swiss: {
      eyebrow: "Swiss-made",
      title: "In der Schweiz entwickelt, gefertigt mit Ducommun menuisiers.",
      body: "miros workpods werden mit Schweizer Partnern entwickelt und lokal mit Fokus auf Qualität und Langlebigkeit produziert.",
      logoLabel: "Ducommun menuisiers",
    },
    trust: { title: "Sie vertrauen uns" },
    how: {
      eyebrow: "Ablauf",
      title: "Drei Schritte.",
      steps: [
        { number: "01", title: "Download", body: "Installiere die miros App auf allen Plattformen." },
        { number: "02", title: "Reservieren", body: "Pod wählen und Zeitfenster buchen." },
        { number: "03", title: "Arbeiten", body: "Mit dem Telefon entriegeln und fokussiert arbeiten." },
      ],
    },
    cta: {
      eyebrow: "Start",
      title: "Pod mieten oder einen Pod hosten.",
      body: "Mietformular nutzen oder uns kontaktieren, um Teil des Netzwerks zu werden.",
      rent: "Pod hosten",
      host: "Kontakt",
    },
    footer: { copy: "Entwickelt für fokussiertes Arbeiten, Vertraulichkeit und Flexibilität.", privacy: "Datenschutzerklärung", terms: "Allgemeine Geschäftsbedingungen" },
  },
  it: {
    nav: { models: "Pods", features: "Funzionalità", swiss: "Swiss-made", about: "Chi siamo", contact: "Contatto" },
    hero: {
      badge: "Rete connessa",
      title: "Spazi di lavoro on-demand.",
      anywhere: "Ovunque",
      anytime: "In qualsiasi momento",
      subline: "Una rete connessa di workpod per lavoro flessibile e di qualità.",
      primary: "Ospita un pod",
      secondary: "Esplora",
      download: "Scarica app",
    },
    models: {
      eyebrow: "Casi d'uso",
      title: "Tre modi di usare i nostri pod in contesti reali.",
      items: [
        { title: "Pubblico", body: "Stazioni, aeroporti, ospedali, campus e biblioteche con accesso a ore." },
        { title: "Privato", body: "Pod dedicati per aziende che vogliono spazi di concentrazione controllati." },
        { title: "Eventi", body: "Pod in loco per conferenze, fiere e attivazioni temporanee con accesso gestito." },
      ],
    },
    features: {
      eyebrow: "Funzioni principali",
      title: "Progettato per lavorare in movimento.",
      items: [
        { title: "Accesso basato sulla posizione", body: "Trova e prenota rapidamente un pod vicino a te." },
        { title: "Riservatezza integrata", body: "Ambiente acusticamente isolato e chiuso per call e lavoro sensibile." },
        { title: "Qualità di lavoro costante", body: "Standard omogenei di comfort, connettività e concentrazione." },
      ],
    },
    swiss: {
      eyebrow: "Swiss-made",
      title: "Progettato in Svizzera, prodotto con Ducommun menuisiers.",
      body: "I workpod miros sono sviluppati con partner svizzeri e prodotti localmente con focus su qualità e durata.",
      logoLabel: "Ducommun menuisiers",
    },
    trust: { title: "Si fidano di noi" },
    how: {
      eyebrow: "Come funziona",
      title: "Tre passaggi.",
      steps: [
        { number: "01", title: "Scarica", body: "Installa l'app miros su tutte le piattaforme." },
        { number: "02", title: "Prenota", body: "Scegli il pod e prenota la fascia oraria." },
        { number: "03", title: "Lavora", body: "Sblocca con il telefono e concentrati." },
      ],
    },
    cta: {
      eyebrow: "Inizia",
      title: "Noleggia un pod o ospitane uno nel tuo spazio.",
      body: "Usa il modulo noleggio o contattaci per rendere la tua location parte della rete.",
      rent: "Ospita un pod",
      host: "Contattaci",
    },
    footer: { copy: "Progettato per lavoro concentrato, riservatezza e flessibilità.", privacy: "Informativa sulla privacy", terms: "Termini e condizioni" },
  },
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  en: {
    nav: { home: "Home", about: "About", contact: "Contact" },
    eyebrow: "About us",
    title: "Our story, values and founders",
    introA: "miros is an EPFL startup and spin-off built to make premium work conditions available on demand in real-world locations.",
    introB: "We combine product engineering, operations and Swiss manufacturing to deploy a trusted workpod network for focused, private and flexible work.",
    foundersTitle: "Founders",
    partnerTitle: "Swiss manufacturing partner",
    partnerBody: "We work with Ducommun menuisiers to ensure production quality, durable materials and strong local operational support.",
    valuesEyebrow: "Values",
    values: [
      { title: "Innovation with purpose", body: "We build practical, high-quality workpod products that solve real constraints in mobility and modern work." },
      { title: "Make measurable impact", body: "We optimize the efficiency of building use by converting underused areas into high-value work infrastructure." },
      { title: "Trusted local partners", body: "We collaborate with reliable local partners to deliver durable rollouts and long-term operational quality." },
      { title: "Do the right thing", body: "We prioritize responsible choices that improve building use today and support future-ready urban operations." },
    ],
    founders: [
      { name: "Dr. Fabio Zuliani", role: "Founder & CEO", story: "Fabio drives product vision, strategic partnerships and long-term execution of the miros workpod network.", image: `${BASE_PATH}/images/fabio-zuliani.jpg` },
      { name: "Neil Chennoufi", role: "Co-Founder & COO", story: "Neil leads deployment quality and field operations, from launch planning to day-to-day delivery on site.", image: `${BASE_PATH}/images/neil-chennoufi.jpg` },
    ],
    footer: { copy: "Built for focused work, privacy, and flexibility.", privacy: "Privacy Policy", terms: "Terms & Conditions" },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", contact: "Contact" },
    eyebrow: "À propos",
    title: "Notre histoire, nos valeurs et nos fondateurs",
    introA: "miros est une startup et spin-off EPFL qui rend des conditions de travail premium accessibles à la demande dans des lieux réels.",
    introB: "Nous combinons ingénierie produit, opérations et fabrication suisse pour déployer un réseau de workpods fiable, privé et flexible.",
    foundersTitle: "Fondateurs",
    partnerTitle: "Partenaire de fabrication suisse",
    partnerBody: "Nous collaborons avec Ducommun menuisiers pour garantir qualité de production, matériaux durables et excellence opérationnelle locale.",
    valuesEyebrow: "Valeurs",
    values: [
      { title: "Innovation utile", body: "Nous développons des workpods concrets et performants qui répondent aux contraintes réelles de mobilité et de travail." },
      { title: "Impact mesurable", body: "Nous optimisons l'efficacité d'usage des bâtiments en transformant des zones sous-utilisées en infrastructure de travail à forte valeur." },
      { title: "Partenaires locaux de confiance", body: "Nous travaillons avec des partenaires locaux fiables pour garantir des déploiements durables et une qualité opérationnelle sur le long terme." },
      { title: "Faire juste", body: "Nous privilégions des décisions responsables qui améliorent l'usage des bâtiments aujourd'hui et préparent les besoins futurs." },
    ],
    founders: [
      { name: "Dr. Fabio Zuliani", role: "Fondateur & CEO", story: "Fabio porte la vision produit, les partenariats stratégiques et l'exécution long terme du réseau miros.", image: `${BASE_PATH}/images/fabio-zuliani.jpg` },
      { name: "Neil Chennoufi", role: "Co-fondateur & COO", story: "Neil pilote la qualité de déploiement et les opérations terrain, de la planification au delivery quotidien.", image: `${BASE_PATH}/images/neil-chennoufi.jpg` },
    ],
    footer: { copy: "Conçu pour travailler au calme, en toute confidentialité et avec flexibilité.", privacy: "Politique de confidentialité", terms: "Conditions générales" },
  },
  de: {
    nav: { home: "Start", about: "Uber uns", contact: "Kontakt" },
    eyebrow: "Uber uns",
    title: "Unsere Geschichte, Werte und Grunder",
    introA: "miros ist ein EPFL-Startup und Spin-off, das Premium-Arbeitsbedingungen on-demand an realen Standorten verfugbar macht.",
    introB: "Wir verbinden Produktentwicklung, Betrieb und Schweizer Fertigung, um ein vertrauenswurdiges Workpod-Netz fur fokussiertes, vertrauliches und flexibles Arbeiten aufzubauen.",
    foundersTitle: "Grunder",
    partnerTitle: "Schweizer Fertigungspartner",
    partnerBody: "Wir arbeiten mit Ducommun menuisiers, um Produktionsqualitat, langlebige Materialien und starke lokale Betriebsunterstutzung sicherzustellen.",
    valuesEyebrow: "Werte",
    values: [
      { title: "Innovation mit Nutzen", body: "Wir entwickeln hochwertige, praxisnahe Workpod-Produkte, die reale Anforderungen in Mobilitat und Arbeit losen." },
      { title: "Messbarer Impact", body: "Wir steigern die Effizienz der Gebaudenutzung, indem wir ungenutzte Flachen in wertvolle Arbeitsinfrastruktur verwandeln." },
      { title: "Vertrauenswurdige lokale Partner", body: "Wir arbeiten mit starken lokalen Partnern zusammen, um langlebige Rollouts und nachhaltige Betriebsqualitat sicherzustellen." },
      { title: "Das Richtige tun", body: "Wir treffen verantwortungsvolle Entscheidungen fur bessere Flachennutzung heute und zukunftsfahige Betriebsmodelle morgen." },
    ],
    founders: [
      { name: "Dr. Fabio Zuliani", role: "Grunder & CEO", story: "Fabio verantwortet Produktvision, strategische Partnerschaften und die langfristige Umsetzung des miros Netzwerks.", image: `${BASE_PATH}/images/fabio-zuliani.jpg` },
      { name: "Neil Chennoufi", role: "Co-Grunder & COO", story: "Neil leitet Deployment-Qualitat und Feldbetrieb, von der Planung bis zur taglichen Umsetzung vor Ort.", image: `${BASE_PATH}/images/neil-chennoufi.jpg` },
    ],
    footer: { copy: "Entwickelt fur fokussiertes Arbeiten, Vertraulichkeit und Flexibilitat.", privacy: "Datenschutzerklarung", terms: "Allgemeine Geschaftsbedingungen" },
  },
  it: {
    nav: { home: "Home", about: "Chi siamo", contact: "Contatto" },
    eyebrow: "Chi siamo",
    title: "La nostra storia, i valori e i fondatori",
    introA: "miros e una startup e spin-off EPFL nata per rendere condizioni di lavoro premium disponibili on-demand in luoghi reali.",
    introB: "Uniamo ingegneria di prodotto, operations e manifattura svizzera per distribuire una rete workpod affidabile, privata e flessibile.",
    foundersTitle: "Fondatori",
    partnerTitle: "Partner produttivo svizzero",
    partnerBody: "Collaboriamo con Ducommun menuisiers per garantire qualita produttiva, materiali durevoli e solidita operativa locale.",
    valuesEyebrow: "Valori",
    values: [
      { title: "Innovazione utile", body: "Realizziamo workpod pratici e di alta qualita che risolvono vincoli reali di mobilita e lavoro." },
      { title: "Impatto misurabile", body: "Ottimizziamo l'efficienza d'uso degli edifici trasformando aree sottoutilizzate in infrastrutture di lavoro ad alto valore." },
      { title: "Partner locali affidabili", body: "Lavoriamo con partner locali di fiducia per garantire installazioni durevoli e qualita operativa nel lungo periodo." },
      { title: "Fare la cosa giusta", body: "Privilegiamo decisioni responsabili che migliorano l'uso degli edifici oggi e supportano modelli futuri sostenibili." },
    ],
    founders: [
      { name: "Dr. Fabio Zuliani", role: "Fondatore & CEO", story: "Fabio guida la visione prodotto, le partnership strategiche e l'esecuzione di lungo periodo della rete miros.", image: `${BASE_PATH}/images/fabio-zuliani.jpg` },
      { name: "Neil Chennoufi", role: "Co-fondatore & COO", story: "Neil coordina qualita di deployment e operazioni sul campo, dalla pianificazione alla delivery quotidiana.", image: `${BASE_PATH}/images/neil-chennoufi.jpg` },
    ],
    footer: { copy: "Progettato per lavoro concentrato, riservatezza e flessibilita.", privacy: "Informativa sulla privacy", terms: "Termini e condizioni" },
  },
};

export const contactCopy: Record<Locale, ContactCopy> = {
  en: {
    nav: { home: "Home", about: "About", contact: "Contact" },
    eyebrow: "Contact",
    title: "Tell us what you need",
    intro: "Use the form to host a pod, ask startup questions, request a quote, or discuss partnership opportunities.",
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
        message: "Share context, timeline, location and your main goal.",
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
    footer: { copy: "Built for focused work, privacy, and flexibility.", privacy: "Privacy Policy", terms: "Terms & Conditions" },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", contact: "Contact" },
    eyebrow: "Contact",
    title: "Dites-nous ce dont vous avez besoin",
    intro: "Utilisez ce formulaire pour héberger un pod, poser des questions startup, demander un devis ou discuter partenariat.",
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
        message: "Partagez le contexte, le timing, le lieu et votre objectif principal.",
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
    footer: { copy: "Conçu pour travailler au calme, en toute confidentialité et avec flexibilité.", privacy: "Politique de confidentialité", terms: "Conditions générales" },
  },
  de: {
    nav: { home: "Start", about: "Uber uns", contact: "Kontakt" },
    eyebrow: "Kontakt",
    title: "Sagen Sie uns, was Sie brauchen",
    intro: "Nutzen Sie dieses Formular, um einen Pod zu hosten, Fragen zum Startup zu stellen, ein Angebot anzufordern oder Partnerschaften zu besprechen.",
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
        message: "Teilen Sie Kontext, Zeitplan, Standort und Ihr Hauptziel.",
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
    footer: { copy: "Entwickelt fur fokussiertes Arbeiten, Vertraulichkeit und Flexibilitat.", privacy: "Datenschutzerklarung", terms: "Allgemeine Geschaftsbedingungen" },
  },
  it: {
    nav: { home: "Home", about: "Chi siamo", contact: "Contatto" },
    eyebrow: "Contatto",
    title: "Dicci di cosa hai bisogno",
    intro: "Usa questo modulo per ospitare un pod, fare domande sulla startup, richiedere un preventivo o discutere partnership.",
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
        message: "Condividi contesto, tempistiche, luogo e obiettivo principale.",
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
    footer: { copy: "Progettato per lavoro concentrato, riservatezza e flessibilita.", privacy: "Informativa sulla privacy", terms: "Termini e condizioni" },
  },
};
