import Image from "next/image";
import type { Metadata } from "next";

import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getDictionary, swissImage } from "../../lib/content";
import { absoluteUrl, localeAlternates, routePath, type Locale } from "../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  const path = routePath(lang, "swiss-made");

  return {
    title: t.swissMade.meta.title,
    description: t.swissMade.meta.description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: localeAlternates("swiss-made"),
    },
  };
}

export default async function SwissMadePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader locale={lang} currentSegment="swiss-made" />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">{t.swissMade.eyebrow}</p>
            <h1>{t.swissMade.title}</h1>
            <p className="hero-subline">{t.swissMade.intro}</p>
          </div>
        </section>
        <section className="section">
          <div className="cards-grid">
            {t.swissMade.proofCards.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="swiss-media">
            <figure>
              <Image src={swissImage} alt="Swiss-made workpod manufacturing" width={1200} height={900} />
            </figure>
            <div className="card local-card">
              <h3>{t.swissMade.qualityTitle}</h3>
              <p>{t.swissMade.qualityBody}</p>
            </div>
          </div>
        </section>
        <section className="section cta">
          <p className="eyebrow">{t.nav.contact}</p>
          <h2>{t.swissMade.ctaTitle}</h2>
          <p>{t.swissMade.ctaBody}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={routePath(lang, "contact")}>
              {t.nav.contact}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter locale={lang} />
    </>
  );
}
