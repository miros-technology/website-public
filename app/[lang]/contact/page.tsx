import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { ContactForm } from "../../components/ContactForm";
import { LanguageSelect } from "../../components/LanguageSelect";
import { PRIVACY_POLICY_URL, TERMS_URL } from "../../lib/content";
import { contactCopy } from "../../lib/legacy-copy";
import { absoluteUrl, localeAlternates, routePath, type Locale } from "../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const path = routePath(lang, "contact");

  return {
    title: "Contact miros",
    description: "Contact miros for hosting, quotes, startup questions, and partnerships.",
    alternates: {
      canonical: absoluteUrl(path),
      languages: localeAlternates("contact"),
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = contactCopy[lang];

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
          <LanguageSelect id="contact-lang-select" locale={lang} segment="contact" />
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
            <p className="hero-subline">{t.intro}</p>
          </div>
        </section>

        <section className="section contact-form-wrap">
          <ContactForm form={t.form} />
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
