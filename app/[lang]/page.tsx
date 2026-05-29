import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { JsonLd } from "../components/JsonLd";
import { LanguageSelect } from "../components/LanguageSelect";
import { StoreBadges } from "../components/StoreBadges";
import {
  DOWNLOAD_URL,
  PRIVACY_POLICY_URL,
  RENT_URL,
  TERMS_URL,
  featureGallery,
  heroImage,
  modelGallery,
  swissImage,
  trustedBy,
} from "../lib/content";
import { homeCopy } from "../lib/legacy-copy";
import { absoluteUrl, localeAlternates, routePath, type Locale } from "../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const path = routePath(lang);

  return {
    title: {
      absolute: `miros workpod Switzerland | ${lang.toUpperCase()}`,
    },
    description:
      "miros workpods, phone booths, and private workspaces in Switzerland. Explore multilingual pages with server-rendered SEO.",
    alternates: {
      canonical: absoluteUrl(path),
      languages: localeAlternates(),
    },
    openGraph: {
      title: "miros workpod Switzerland",
      description:
        "Swiss-made workpods, phone booths, and private workspaces in Switzerland.",
      url: absoluteUrl(path),
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = homeCopy[lang];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "miros",
          url: absoluteUrl(routePath(lang)),
          areaServed: "Switzerland",
          knowsAbout: ["workpod", "phone booth", "private workspace", "Swiss-made workspace"],
        }}
      />
      <header className="site-header light-header">
        <a href="#top" className="brand dark-wordmark">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/cropped-B1_noBG-70x75.png`}
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
          <Link href={routePath(lang, "about")} prefetch={false}>{t.nav.about}</Link>
          <Link href={routePath(lang, "contact")} className="pill-link" prefetch={false}>
            {t.nav.contact}
          </Link>
          <LanguageSelect id="lang-select" locale={lang} />
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
              <a className="btn btn-primary" href={RENT_URL} target="_blank" rel="noreferrer">
                {t.hero.primary}
              </a>
              <a className="btn btn-secondary" href="#models">
                {t.hero.secondary}
              </a>
              <a className="btn btn-tertiary" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
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
                <Image src={src} alt="miros workpod" width={1200} height={900} />
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
                <Image src={src} alt="Miros workspace use case" width={1200} height={900} />
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
              <Image src={swissImage} alt="Ducommun workshop" width={1200} height={900} />
            </figure>
            <div className="swiss-logo-card">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ducommun-logo.webp`}
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
                  <figure key={`${partner.name}-${index}`} className="trust-logo-card">
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
            <a className="btn btn-primary" href={RENT_URL} target="_blank" rel="noreferrer">
              {t.cta.rent}
            </a>
            <Link className="btn btn-secondary" href={routePath(lang, "contact")} prefetch={false}>
              {t.cta.host}
            </Link>
          </div>
          <StoreBadges />
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
