import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { LanguageSelect } from "../../components/LanguageSelect";
import { PRIVACY_POLICY_URL, TERMS_URL } from "../../lib/content";
import { aboutCopy } from "../../lib/legacy-copy";
import { absoluteUrl, localeAlternates, routePath, type Locale } from "../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const path = routePath(lang, "about");

  return {
    title: "About miros",
    description: "Founders, values, and Swiss manufacturing context for miros workpods.",
    alternates: {
      canonical: absoluteUrl(path),
      languages: localeAlternates("about"),
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = aboutCopy[lang];

  return (
    <>
      <header className="site-header light-header">
        <Link href={routePath(lang)} className="brand dark-wordmark" prefetch={false}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/cropped-B1_noBG-70x75.png`}
            alt="miros logo"
            width={36}
            height={38}
          />
          <span>miros</span>
        </Link>
        <nav>
          <Link href={routePath(lang)} prefetch={false}>{t.nav.home}</Link>
          <Link href={routePath(lang, "about")} prefetch={false}>{t.nav.about}</Link>
          <Link href={routePath(lang, "contact")} className="pill-link" prefetch={false}>
            {t.nav.contact}
          </Link>
          <LanguageSelect id="about-lang-select" locale={lang} segment="about" />
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/miros_wp_cloud.png`}
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ducommun-logo.webp`}
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
