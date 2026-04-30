import type { Metadata } from "next";

import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getDictionary } from "../../lib/content";
import { absoluteUrl, localeAlternates, routePath, type Locale } from "../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  const path = routePath(lang, "phone-booths");

  return {
    title: t.phoneBooths.meta.title,
    description: t.phoneBooths.meta.description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: localeAlternates("phone-booths"),
    },
  };
}

export default async function PhoneBoothsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader locale={lang} currentSegment="phone-booths" />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">{t.phoneBooths.eyebrow}</p>
            <h1>{t.phoneBooths.title}</h1>
            <p className="hero-subline">{t.phoneBooths.intro}</p>
          </div>
        </section>
        <section className="section">
          <div className="cards-grid">
            {t.phoneBooths.cards.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section section-dark">
          <div className="section-head compact-bottom">
            <p className="eyebrow">{t.nav.phoneBooths}</p>
            <h2>{t.phoneBooths.fitTitle}</h2>
          </div>
          <div className="cards-grid">
            {t.phoneBooths.fitCards.map((item) => (
              <article key={item.title} className="card dark-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section cta">
          <p className="eyebrow">{t.nav.contact}</p>
          <h2>{t.phoneBooths.ctaTitle}</h2>
          <p>{t.phoneBooths.ctaBody}</p>
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
