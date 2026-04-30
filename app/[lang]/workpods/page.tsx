import Image from "next/image";
import type { Metadata } from "next";

import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { featureGallery, getDictionary } from "../../lib/content";
import { absoluteUrl, localeAlternates, routePath, type Locale } from "../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  const path = routePath(lang, "workpods");

  return {
    title: t.workpods.meta.title,
    description: t.workpods.meta.description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: localeAlternates("workpods"),
    },
  };
}

export default async function WorkpodsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader locale={lang} currentSegment="workpods" />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">{t.workpods.eyebrow}</p>
            <h1>{t.workpods.title}</h1>
            <p className="hero-subline">{t.workpods.intro}</p>
          </div>
        </section>
        <section className="section">
          <div className="cards-grid">
            {t.workpods.cards.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="image-grid">
            {featureGallery.map((src) => (
              <figure key={src}>
                <Image src={src} alt="miros workpod format" width={1200} height={900} />
              </figure>
            ))}
          </div>
        </section>
        <section className="section section-dark">
          <div className="section-head compact-bottom">
            <p className="eyebrow">{t.nav.workpods}</p>
            <h2>{t.workpods.useCasesTitle}</h2>
          </div>
          <div className="cards-grid">
            {t.workpods.useCases.map((item) => (
              <article key={item.title} className="card dark-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section cta">
          <p className="eyebrow">{t.nav.contact}</p>
          <h2>{t.workpods.ctaTitle}</h2>
          <p>{t.workpods.ctaBody}</p>
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
