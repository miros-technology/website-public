"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const RENT_URL = "https://go.miros.work/rentapod-web";
const HOST_EMAIL = "contact@miros.work";
const HOST_POD_SUBJECT = "Host a Pod - MIROS Website";
const DOWNLOAD_URL = "https://go.miros.work/download-web";
const APPLE_APP_URL = "https://go.miros.work/ios-web";
const GOOGLE_PLAY_URL = "https://go.miros.work/android-web";
const PRIVACY_POLICY_URL = "https://app.miros.work/privacy-policy";
const TERMS_URL = "https://app.miros.work/terms-and-conditions";

type Lang = "en" | "fr" | "de" | "it";
const SUPPORTED_LANGS: Lang[] = ["en", "fr", "de", "it"];

type Copy = {
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

const copy: Record<Lang, Copy> = {
  en: {
    nav: {
      models: "Pods",
      features: "Features",
      swiss: "Swiss-made",
      about: "About",
      contact: "Contact",
    },
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
      eyebrow: "Network rollout",
      title: "Three pod formats for real-world deployment.",
      items: [
        {
          title: "Public",
          body: "Stations, airports, hospitals, campuses and libraries with hourly access.",
        },
        {
          title: "Private",
          body: "Dedicated pods for companies that need controlled and quiet focus spaces.",
        },
        {
          title: "Events",
          body: "On-site pods for conferences, exhibitions and temporary activations with managed access.",
        },
      ],
    },
    features: {
      eyebrow: "Core features",
      title: "Built for productivity on the go.",
      items: [
        {
          title: "Location-first access",
          body: "Find and book nearby workpods fast, wherever your day takes you.",
        },
        {
          title: "Confidential by design",
          body: "Acoustic privacy and enclosed layouts for calls, concentration and sensitive work.",
        },
        {
          title: "Reliable quality work setup",
          body: "Consistent comfort, connectivity and focus standards across the network.",
        },
      ],
    },
    swiss: {
      eyebrow: "Swiss-made",
      title: "Designed in Switzerland, built with Ducommun menuisiers.",
      body: "miros workpods are developed with Swiss partners and manufactured with local craftsmanship focused on quality, durability and long-term operations.",
      logoLabel: "Ducommun menuisiers",
    },
    trust: {
      title: "They trust us",
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps.",
      steps: [
        {
          number: "01",
          title: "Download",
          body: "Install the miros app on all platforms.",
        },
        {
          number: "02",
          title: "Reserve",
          body: "Choose your pod and book your slot.",
        },
        {
          number: "03",
          title: "Work",
          body: "Unlock with your phone and get focused.",
        },
      ],
    },
    cta: {
      eyebrow: "Get started",
      title: "Rent a pod or host one in your space.",
      body: "Use the rent form or contact us to include your location in the network.",
      rent: "Host a pod",
      host: "Contact us",
    },
    footer: {
      copy: "Built for focused work, privacy, and flexibility.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
  fr: {
    nav: {
      models: "Pods",
      features: "Fonctions",
      swiss: "Fabriqué en Suisse",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      badge: "Réseau connecté",
      title: "Espaces de travail à la demande.",
      anywhere: "Partout",
      anytime: "À tout moment",
      subline:
        "Un réseau de workpods connectés pour un travail flexible et de qualité.",
      primary: "Héberger un pod",
      secondary: "Explorer",
      download: "Télécharger l'app",
    },
    models: {
      eyebrow: "Déploiement",
      title: "Trois formats de pods pour des déploiements réels.",
      items: [
        {
          title: "Public",
          body: "Gares, aéroports, hôpitaux, campus et bibliothèques avec accès horaire.",
        },
        {
          title: "Privé",
          body: "Pods dédiés pour entreprises qui veulent des espaces calmes et maîtrisés.",
        },
        {
          title: "Événements",
          body: "Pods sur site pour conférences, salons et activations temporaires avec accès géré.",
        },
      ],
    },
    features: {
      eyebrow: "Fonctions clés",
      title: "Conçu pour la productivité en mobilité.",
      items: [
        {
          title: "Accès basé sur la localisation",
          body: "Trouvez et réservez rapidement un pod proche, selon vos déplacements.",
        },
        {
          title: "Confidentialité intégrée",
          body: "Isolation acoustique et espace fermé pour appels et travail sensible.",
        },
        {
          title: "Qualité de travail constante",
          body: "Confort, connectivité et concentration homogènes sur tout le réseau.",
        },
      ],
    },
    swiss: {
      eyebrow: "Fabriqué en Suisse",
      title: "Conçu en Suisse, fabriqué avec Ducommun menuisiers.",
      body: "Les workpods miros sont développés avec des partenaires suisses et fabriqués localement avec exigence de qualité et de durabilité.",
      logoLabel: "Ducommun menuisiers",
    },
    trust: {
      title: "Ils nous font confiance",
    },
    how: {
      eyebrow: "Fonctionnement",
      title: "Trois étapes.",
      steps: [
        {
          number: "01",
          title: "Télécharger",
          body: "Installez l'app miros sur toutes les plateformes.",
        },
        {
          number: "02",
          title: "Réserver",
          body: "Choisissez votre pod et votre créneau.",
        },
        {
          number: "03",
          title: "Travailler",
          body: "Déverrouillez avec votre téléphone et concentrez-vous.",
        },
      ],
    },
    cta: {
      eyebrow: "Passer à l'action",
      title: "Louer un pod ou héberger un pod.",
      body: "Utilisez le formulaire de location ou contactez-nous pour intégrer votre site au réseau.",
      rent: "Héberger un pod",
      host: "Nous contacter",
    },
    footer: {
      copy: "Conçu pour le travail concentré, la confidentialité et la flexibilité.",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
    },
  },
  de: {
    nav: {
      models: "Pods",
      features: "Funktionen",
      swiss: "Swiss-made",
      about: "Über uns",
      contact: "Kontakt",
    },
    hero: {
      badge: "Vernetztes Netzwerk",
      title: "On-demand Workspaces.",
      anywhere: "Überall",
      anytime: "Jederzeit",
      subline:
        "Ein vernetztes Workpod-Netz für flexibles Arbeiten in hoher Qualität.",
      primary: "Pod hosten",
      secondary: "Entdecken",
      download: "App herunterladen",
    },
    models: {
      eyebrow: "Rollout",
      title: "Drei Pod-Formate für reale Einsatzorte.",
      items: [
        {
          title: "Öffentlich",
          body: "Bahnhöfe, Flughäfen, Spitäler, Campus und Bibliotheken mit stundenweisem Zugang.",
        },
        {
          title: "Privat",
          body: "Dedizierte Pods für Unternehmen mit ruhigen, kontrollierten Fokusflächen.",
        },
        {
          title: "Events",
          body: "Pods vor Ort für Konferenzen, Messen und temporäre Aktivierungen mit gesteuertem Zugang.",
        },
      ],
    },
    features: {
      eyebrow: "Kernfunktionen",
      title: "Für produktives Arbeiten unterwegs.",
      items: [
        {
          title: "Standortbasierter Zugang",
          body: "Pods in der Nähe schnell finden und direkt buchen.",
        },
        {
          title: "Vertraulichkeit by design",
          body: "Akustisch abgeschirmte, geschlossene Umgebung für Calls und Fokusarbeit.",
        },
        {
          title: "Konstant hohe Arbeitsqualität",
          body: "Einheitliche Standards für Komfort, Verbindung und Konzentration.",
        },
      ],
    },
    swiss: {
      eyebrow: "Swiss-made",
      title: "In der Schweiz entwickelt, gefertigt mit Ducommun menuisiers.",
      body: "miros workpods werden mit Schweizer Partnern entwickelt und lokal mit Fokus auf Qualität und Langlebigkeit produziert.",
      logoLabel: "Ducommun menuisiers",
    },
    trust: {
      title: "Sie vertrauen uns",
    },
    how: {
      eyebrow: "Ablauf",
      title: "Drei Schritte.",
      steps: [
        {
          number: "01",
          title: "Download",
          body: "Installiere die miros App auf allen Plattformen.",
        },
        {
          number: "02",
          title: "Reservieren",
          body: "Pod wählen und Zeitfenster buchen.",
        },
        {
          number: "03",
          title: "Arbeiten",
          body: "Mit dem Telefon entriegeln und fokussiert arbeiten.",
        },
      ],
    },
    cta: {
      eyebrow: "Start",
      title: "Pod mieten oder einen Pod hosten.",
      body: "Mietformular nutzen oder uns kontaktieren, um Teil des Netzwerks zu werden.",
      rent: "Pod hosten",
      host: "Kontakt",
    },
    footer: {
      copy: "Entwickelt für fokussiertes Arbeiten, Vertraulichkeit und Flexibilität.",
      privacy: "Datenschutzerklärung",
      terms: "Allgemeine Geschäftsbedingungen",
    },
  },
  it: {
    nav: {
      models: "Pods",
      features: "Funzionalità",
      swiss: "Swiss-made",
      about: "Chi siamo",
      contact: "Contatto",
    },
    hero: {
      badge: "Rete connessa",
      title: "Spazi di lavoro on-demand.",
      anywhere: "Ovunque",
      anytime: "In qualsiasi momento",
      subline:
        "Una rete connessa di workpod per lavoro flessibile e di qualità.",
      primary: "Ospita un pod",
      secondary: "Esplora",
      download: "Scarica app",
    },
    models: {
      eyebrow: "Sviluppo rete",
      title: "Tre formati di pod per deployment reali.",
      items: [
        {
          title: "Pubblico",
          body: "Stazioni, aeroporti, ospedali, campus e biblioteche con accesso a ore.",
        },
        {
          title: "Privato",
          body: "Pod dedicati per aziende che vogliono spazi di concentrazione controllati.",
        },
        {
          title: "Eventi",
          body: "Pod in loco per conferenze, fiere e attivazioni temporanee con accesso gestito.",
        },
      ],
    },
    features: {
      eyebrow: "Funzioni principali",
      title: "Progettato per lavorare in movimento.",
      items: [
        {
          title: "Accesso basato sulla posizione",
          body: "Trova e prenota rapidamente un pod vicino a te.",
        },
        {
          title: "Riservatezza integrata",
          body: "Ambiente acusticamente isolato e chiuso per call e lavoro sensibile.",
        },
        {
          title: "Qualità di lavoro costante",
          body: "Standard omogenei di comfort, connettività e concentrazione.",
        },
      ],
    },
    swiss: {
      eyebrow: "Swiss-made",
      title: "Progettato in Svizzera, prodotto con Ducommun menuisiers.",
      body: "I workpod miros sono sviluppati con partner svizzeri e prodotti localmente con focus su qualità e durata.",
      logoLabel: "Ducommun menuisiers",
    },
    trust: {
      title: "Si fidano di noi",
    },
    how: {
      eyebrow: "Come funziona",
      title: "Tre passaggi.",
      steps: [
        {
          number: "01",
          title: "Scarica",
          body: "Installa l'app miros su tutte le piattaforme.",
        },
        {
          number: "02",
          title: "Prenota",
          body: "Scegli il pod e prenota la fascia oraria.",
        },
        {
          number: "03",
          title: "Lavora",
          body: "Sblocca con il telefono e concentrati.",
        },
      ],
    },
    cta: {
      eyebrow: "Inizia",
      title: "Noleggia un pod o ospitane uno nel tuo spazio.",
      body: "Usa il modulo noleggio o contattaci per rendere la tua location parte della rete.",
      rent: "Ospita un pod",
      host: "Contattaci",
    },
    footer: {
      copy: "Progettato per lavoro concentrato, riservatezza e flessibilità.",
      privacy: "Informativa sulla privacy",
      terms: "Termini e condizioni",
    },
  },
};

const heroImage = `${BASE_PATH}/images/miros_wp_cloud.png`;

const modelGallery = [
  `${BASE_PATH}/images/hrc_wall.jpg`,
  `${BASE_PATH}/images/miros_wp_cloud.png`,
  `${BASE_PATH}/images/miros_wp_garden.png`,
];

const swissImage = `${BASE_PATH}/images/ducommun-woodshop-1.jpg`;

const featureGallery = [
  `${BASE_PATH}/images/1-seater%20Background%20Removed.png`,
  `${BASE_PATH}/images/2-seater%20Background%20Removed.png`,
  `${BASE_PATH}/images/4-seater%20Background%20Removed.png`,
];

const trustedBy = [
  { name: "UBS", logo: `${BASE_PATH}/images/partners/ubs.png` },
  {
    name: "EPFL",
    logo: `${BASE_PATH}/images/partners/epfl.png`,
  },
  {
    name: "Watch & Wonder",
    logo: `${BASE_PATH}/images/partners/ww.png`,
  },
  {
    name: "Hôpital Riviera-Chablais",
    logo: `${BASE_PATH}/images/partners/hrc.png`,
  },
  {
    name: "Innovaud",
    logo: `${BASE_PATH}/images/partners/innovaud.png`,
  },
  {
    name: "Synnergy",
    logo: `${BASE_PATH}/images/partners/synnergy.png`,
  },
  {
    name: "FONGIT",
    logo: `${BASE_PATH}/images/partners/fongit.png`,
  },
  {
    name: "Village by CA",
    logo: `${BASE_PATH}/images/partners/vbca.png`,
  },
  {
    name: "Habitat et Jardin",
    logo: `${BASE_PATH}/images/partners/habitatJardin.png`,
  },
  {
    name: "Salon des inventions",
    logo: `${BASE_PATH}/images/partners/salonInvention.png`,
  },
  {
    name: "AutoXperience",
    logo: `${BASE_PATH}/images/partners/autoxperience.png`,
  },
];

function detectLanguage(): Lang {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem("miros-lang");
  if (stored && SUPPORTED_LANGS.includes(stored as Lang)) {
    return stored as Lang;
  }

  const browser = (window.navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browser as Lang) ? (browser as Lang) : "en";
}

function StoreBadges() {
  return (
    <div className="store-badges" aria-label="App stores">
      <a
        className="store-badge store-badge-apple"
        href={APPLE_APP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Apple App Store"
      >
        <Image
          src={`${BASE_PATH}/images/badge-app-store.svg`}
          alt="Download on the App Store"
          width={170}
          height={52}
        />
      </a>
      <a
        className="store-badge store-badge-google"
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Google Play Store"
      >
        <Image
          src={`${BASE_PATH}/images/badge-google-play.png`}
          alt="Get it on Google Play"
          width={170}
          height={52}
        />
      </a>
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    const initial = detectLanguage();
    setLang(initial);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("miros-lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <header className="site-header light-header">
        <a href="#top" className="brand dark-wordmark">
          <Image
            src={`${BASE_PATH}/images/cropped-B1_noBG-70x75.png`}
            alt="miros logo"
            width={36}
            height={38}
          />
          <span>miros</span>
        </a>

        <nav>
          <a href="#models">{t.nav.models}</a>
          <a href="#features">{t.nav.features}</a>
          <a href="#swiss">{t.nav.swiss}</a>
          <a href={`${BASE_PATH}/about`}>{t.nav.about}</a>
          <a href={`${BASE_PATH}/contact`} className="pill-link">
            {t.nav.contact}
          </a>
          <label className="lang-inline" htmlFor="lang-select">
            <select
              id="lang-select"
              value={lang}
              onChange={(event) => setLang(event.target.value as Lang)}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="it">IT</option>
            </select>
          </label>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image src={heroImage} alt="" fill sizes="100vw" priority />
          </div>

          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              {t.hero.badge}
              <span className="dot">.</span>
            </p>
            <h1>
              {t.hero.title}
              <span className="hero-where hero-where-lock">
                <span className="hero-where-unit">
                  {t.hero.anywhere}
                  <span className="dot">.</span>
                </span>
                <span className="hero-where-unit">
                  {t.hero.anytime}
                  <span className="dot">.</span>
                </span>
              </span>
            </h1>
            <p className="hero-subline">{t.hero.subline}</p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={RENT_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.primary}
              </a>
              <a className="btn btn-secondary" href="#models">
                {t.hero.secondary}
              </a>
              <a
                className="btn btn-tertiary"
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.download}
              </a>
            </div>
            <StoreBadges />
          </div>
        </section>

        <section id="models" className="section">
          <div className="section-head">
            <p className="eyebrow">{t.models.eyebrow}</p>
            <h2>{t.models.title}</h2>
          </div>

          <div className="cards-grid">
            {t.models.items.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="image-grid">
            {modelGallery.map((src) => (
              <figure key={src}>
                <Image
                  src={src}
                  alt="miros workpod"
                  width={1200}
                  height={900}
                />
              </figure>
            ))}
          </div>
        </section>

        <section id="features" className="section section-dark">
          <div className="section-head compact-bottom">
            <p className="eyebrow">{t.features.eyebrow}</p>
            <h2>{t.features.title}</h2>
          </div>

          <div className="cards-grid">
            {t.features.items.map((item) => (
              <article key={item.title} className="card dark-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="image-grid">
            {featureGallery.map((src) => (
              <figure key={src}>
                <Image
                  src={src}
                  alt="Miros workspace use case"
                  width={1200}
                  height={900}
                />
              </figure>
            ))}
          </div>
        </section>

        <section id="how" className="section how-section">
          <div className="section-head compact-bottom">
            <p className="eyebrow">{t.how.eyebrow}</p>
            <h2>{t.how.title}</h2>
          </div>

          <div className="steps-grid">
            {t.how.steps.map((step) => (
              <article key={step.number} className="step-card">
                <p className="step-number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="swiss" className="section swiss-block">
          <div className="section-head compact-bottom">
            <p className="eyebrow">{t.swiss.eyebrow}</p>
            <h2>
              <span className="swiss-flag" aria-hidden="true" />
              {t.swiss.title}
            </h2>
            <p>{t.swiss.body}</p>
          </div>

          <div className="swiss-media">
            <figure>
              <Image
                src={swissImage}
                alt="Ducommun workshop"
                width={1200}
                height={900}
              />
            </figure>
            <div className="swiss-logo-card">
              <Image
                src={`${BASE_PATH}/images/ducommun-logo.webp`}
                alt={t.swiss.logoLabel}
                width={240}
                height={72}
              />
            </div>
          </div>

          <div className="trust-block">
            <h3>{t.trust.title}</h3>
            <div className="trust-carousel" aria-label={t.trust.title}>
              <div className="trust-track">
                {[...trustedBy, ...trustedBy].map((partner, index) => (
                  <figure
                    key={`${partner.name}-${index}`}
                    className="trust-logo-card"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={220}
                      height={80}
                      sizes="(max-width: 680px) 136px, 158px"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section cta">
          <p className="eyebrow">{t.cta.eyebrow}</p>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.body}</p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={RENT_URL}
              target="_blank"
              rel="noreferrer"
            >
              {t.cta.rent}
            </a>
            <a className="btn btn-secondary" href={`${BASE_PATH}/contact`}>
              {t.cta.host}
            </a>
          </div>
          <StoreBadges />
        </section>

        <footer className="site-footer">
          <p className="footer-copy">
            {`© ${new Date().getFullYear()} MIROS. ${t.footer.copy}`}
          </p>
          <div className="footer-links">
            <a href={PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">
              {t.footer.privacy}
            </a>
            <a href={TERMS_URL} target="_blank" rel="noreferrer">
              {t.footer.terms}
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
