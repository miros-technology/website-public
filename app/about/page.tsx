"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const PRIVACY_POLICY_URL = "https://app.miros.work/privacy-policy";
const TERMS_URL = "https://app.miros.work/terms-and-conditions";

type Lang = "en" | "fr" | "de" | "it";
const SUPPORTED_LANGS: Lang[] = ["en", "fr", "de", "it"];

type FounderCopy = {
  name: string;
  role: string;
  story: string;
  image: string;
};

type AboutCopy = {
  nav: { home: string; about: string; contact: string };
  back: string;
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

const copy: Record<Lang, AboutCopy> = {
  en: {
    nav: { home: "Home", about: "About", contact: "Contact" },
    back: "<- Back to homepage",
    eyebrow: "About us",
    title: "Our story, values and founders",
    introA:
      "miros is an EPFL startup and spin-off built to make premium work conditions available on demand in real-world locations.",
    introB:
      "We combine product engineering, operations and Swiss manufacturing to deploy a trusted workpod network for focused, private and flexible work.",
    foundersTitle: "Founders",
    partnerTitle: "Swiss manufacturing partner",
    partnerBody:
      "We work with Ducommun menuisiers to ensure production quality, durable materials and strong local operational support.",
    valuesEyebrow: "Values",
    values: [
      {
        title: "Innovation with purpose",
        body: "We build practical, high-quality workpod products that solve real constraints in mobility and modern work.",
      },
      {
        title: "Make measurable impact",
        body: "We optimize the efficiency of building use by converting underused areas into high-value work infrastructure.",
      },
      {
        title: "Trusted local partners",
        body: "We collaborate with reliable local partners to deliver durable rollouts and long-term operational quality.",
      },
      {
        title: "Do the right thing",
        body: "We prioritize responsible choices that improve building use today and support future-ready urban operations.",
      },
    ],
    founders: [
      {
        name: "Dr. Fabio Zuliani",
        role: "Founder & CEO",
        story:
          "Fabio drives product vision, strategic partnerships and long-term execution of the miros workpod network.",
        image: `${BASE_PATH}/images/fabio-zuliani.jpg`,
      },
      {
        name: "Neil Chennoufi",
        role: "Co-Founder & COO",
        story:
          "Neil leads deployment quality and field operations, from launch planning to day-to-day delivery on site.",
        image: `${BASE_PATH}/images/neil-chennoufi.jpg`,
      },
    ],
    footer: {
      copy: "Built for focused work, privacy, and flexibility.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", contact: "Contact" },
    back: "<- Retour à l'accueil",
    eyebrow: "À propos",
    title: "Notre histoire, nos valeurs et nos fondateurs",
    introA:
      "miros est une startup et spin-off EPFL qui rend des conditions de travail premium accessibles à la demande dans des lieux réels.",
    introB:
      "Nous combinons ingénierie produit, opérations et fabrication suisse pour déployer un réseau de workpods fiable, privé et flexible.",
    foundersTitle: "Fondateurs",
    partnerTitle: "Partenaire de fabrication suisse",
    partnerBody:
      "Nous collaborons avec Ducommun menuisiers pour garantir qualité de production, matériaux durables et excellence opérationnelle locale.",
    valuesEyebrow: "Valeurs",
    values: [
      {
        title: "Innovation utile",
        body: "Nous développons des workpods concrets et performants qui répondent aux contraintes réelles de mobilité et de travail.",
      },
      {
        title: "Impact mesurable",
        body: "Nous optimisons l'efficacité d'usage des bâtiments en transformant des zones sous-utilisées en infrastructure de travail à forte valeur.",
      },
      {
        title: "Partenaires locaux de confiance",
        body: "Nous travaillons avec des partenaires locaux fiables pour garantir des déploiements durables et une qualité opérationnelle sur le long terme.",
      },
      {
        title: "Faire juste",
        body: "Nous privilégions des décisions responsables qui améliorent l'usage des bâtiments aujourd'hui et préparent les besoins futurs.",
      },
    ],
    founders: [
      {
        name: "Dr. Fabio Zuliani",
        role: "Fondateur & CEO",
        story:
          "Fabio porte la vision produit, les partenariats stratégiques et l'exécution long terme du réseau miros.",
        image: `${BASE_PATH}/images/fabio-zuliani.jpg`,
      },
      {
        name: "Neil Chennoufi",
        role: "Co-fondateur & COO",
        story:
          "Neil pilote la qualité de déploiement et les opérations terrain, de la planification au delivery quotidien.",
        image: `${BASE_PATH}/images/neil-chennoufi.jpg`,
      },
    ],
    footer: {
      copy: "Conçu pour le travail concentré, la confidentialité et la flexibilité.",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
    },
  },
  de: {
    nav: { home: "Start", about: "Uber uns", contact: "Kontakt" },
    back: "<- Zuruck zur Startseite",
    eyebrow: "Uber uns",
    title: "Unsere Geschichte, Werte und Grunder",
    introA:
      "miros ist ein EPFL-Startup und Spin-off, das Premium-Arbeitsbedingungen on-demand an realen Standorten verfugbar macht.",
    introB:
      "Wir verbinden Produktentwicklung, Betrieb und Schweizer Fertigung, um ein vertrauenswurdiges Workpod-Netz fur fokussiertes, vertrauliches und flexibles Arbeiten aufzubauen.",
    foundersTitle: "Grunder",
    partnerTitle: "Schweizer Fertigungspartner",
    partnerBody:
      "Wir arbeiten mit Ducommun menuisiers, um Produktionsqualitat, langlebige Materialien und starke lokale Betriebsunterstutzung sicherzustellen.",
    valuesEyebrow: "Werte",
    values: [
      {
        title: "Innovation mit Nutzen",
        body: "Wir entwickeln hochwertige, praxisnahe Workpod-Produkte, die reale Anforderungen in Mobilitat und Arbeit losen.",
      },
      {
        title: "Messbarer Impact",
        body: "Wir steigern die Effizienz der Gebaudenutzung, indem wir ungenutzte Flachen in wertvolle Arbeitsinfrastruktur verwandeln.",
      },
      {
        title: "Vertrauenswurdige lokale Partner",
        body: "Wir arbeiten mit starken lokalen Partnern zusammen, um langlebige Rollouts und nachhaltige Betriebsqualitat sicherzustellen.",
      },
      {
        title: "Das Richtige tun",
        body: "Wir treffen verantwortungsvolle Entscheidungen fur bessere Flachennutzung heute und zukunftsfahige Betriebsmodelle morgen.",
      },
    ],
    founders: [
      {
        name: "Dr. Fabio Zuliani",
        role: "Grunder & CEO",
        story:
          "Fabio verantwortet Produktvision, strategische Partnerschaften und die langfristige Umsetzung des miros Netzwerks.",
        image: `${BASE_PATH}/images/fabio-zuliani.jpg`,
      },
      {
        name: "Neil Chennoufi",
        role: "Co-Grunder & COO",
        story:
          "Neil leitet Deployment-Qualitat und Feldbetrieb, von der Planung bis zur taglichen Umsetzung vor Ort.",
        image: `${BASE_PATH}/images/neil-chennoufi.jpg`,
      },
    ],
    footer: {
      copy: "Entwickelt fur fokussiertes Arbeiten, Vertraulichkeit und Flexibilitat.",
      privacy: "Datenschutzerklarung",
      terms: "Allgemeine Geschaftsbedingungen",
    },
  },
  it: {
    nav: { home: "Home", about: "Chi siamo", contact: "Contatto" },
    back: "<- Torna alla homepage",
    eyebrow: "Chi siamo",
    title: "La nostra storia, i valori e i fondatori",
    introA:
      "miros e una startup e spin-off EPFL nata per rendere condizioni di lavoro premium disponibili on-demand in luoghi reali.",
    introB:
      "Uniamo ingegneria di prodotto, operations e manifattura svizzera per distribuire una rete workpod affidabile, privata e flessibile.",
    foundersTitle: "Fondatori",
    partnerTitle: "Partner produttivo svizzero",
    partnerBody:
      "Collaboriamo con Ducommun menuisiers per garantire qualita produttiva, materiali durevoli e solidita operativa locale.",
    valuesEyebrow: "Valori",
    values: [
      {
        title: "Innovazione utile",
        body: "Realizziamo workpod pratici e di alta qualita che risolvono vincoli reali di mobilita e lavoro.",
      },
      {
        title: "Impatto misurabile",
        body: "Ottimizziamo l'efficienza d'uso degli edifici trasformando aree sottoutilizzate in infrastrutture di lavoro ad alto valore.",
      },
      {
        title: "Partner locali affidabili",
        body: "Lavoriamo con partner locali di fiducia per garantire installazioni durevoli e qualita operativa nel lungo periodo.",
      },
      {
        title: "Fare la cosa giusta",
        body: "Privilegiamo decisioni responsabili che migliorano l'uso degli edifici oggi e supportano modelli futuri sostenibili.",
      },
    ],
    founders: [
      {
        name: "Dr. Fabio Zuliani",
        role: "Fondatore & CEO",
        story:
          "Fabio guida la visione prodotto, le partnership strategiche e l'esecuzione di lungo periodo della rete miros.",
        image: `${BASE_PATH}/images/fabio-zuliani.jpg`,
      },
      {
        name: "Neil Chennoufi",
        role: "Co-fondatore & COO",
        story:
          "Neil coordina qualita di deployment e operazioni sul campo, dalla pianificazione alla delivery quotidiana.",
        image: `${BASE_PATH}/images/neil-chennoufi.jpg`,
      },
    ],
    footer: {
      copy: "Progettato per lavoro concentrato, riservatezza e flessibilita.",
      privacy: "Informativa sulla privacy",
      terms: "Termini e condizioni",
    },
  },
};

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

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    const initial = detectLanguage();
    setLang(initial);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("miros-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <header className="site-header light-header">
        <a href={`${BASE_PATH}/`} className="brand dark-wordmark">
          <Image
            src={`${BASE_PATH}/images/cropped-B1_noBG-70x75.png`}
            alt="miros logo"
            width={36}
            height={38}
          />
          <span>miros</span>
        </a>
        <nav>
          <a href={`${BASE_PATH}/`}>{t.nav.home}</a>
          <a href={`${BASE_PATH}/about`}>{t.nav.about}</a>
          <a href={`${BASE_PATH}/contact`} className="pill-link">
            {t.nav.contact}
          </a>
          <label className="lang-inline" htmlFor="about-lang-select">
            <select
              id="about-lang-select"
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
            <Image
              src={`${BASE_PATH}/images/miros_wp_cloud.png`}
              alt=""
              fill
              sizes="100vw"
              priority
            />
          </div>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-subline">{t.introA}</p>
            <p>{t.introB}</p>
          </div>
        </section>

        <section className="section about-founders">
          <p className="eyebrow">{t.foundersTitle}</p>
          <div className="founders-grid">
            {t.founders.map((founder) => (
              <article key={founder.name} className="founder-card">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={92}
                  height={92}
                  className="founder-avatar"
                />
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p>{founder.story}</p>
              </article>
            ))}
            <article className="founder-card local-card">
              <h3>{t.partnerTitle}</h3>
              <p>{t.partnerBody}</p>
              <Image
                src={`${BASE_PATH}/images/ducommun-logo.webp`}
                alt="Ducommun menuisiers"
                width={220}
                height={66}
                className="ducommun-about-logo"
              />
            </article>
          </div>
        </section>

        <section className="section about-values">
          <p className="eyebrow">{t.valuesEyebrow}</p>
          <div className="cards-grid values-grid">
            {t.values.map((value) => (
              <article key={value.title} className="card">
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-copy">{`© ${new Date().getFullYear()} MIROS. ${t.footer.copy}`}</p>
        <div className="footer-links">
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">
            {t.footer.privacy}
          </a>
          <a href={TERMS_URL} target="_blank" rel="noreferrer">
            {t.footer.terms}
          </a>
        </div>
      </footer>
    </>
  );
}
