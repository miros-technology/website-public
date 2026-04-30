import { PRIVACY_POLICY_URL, TERMS_URL, getDictionary } from "../lib/content";
import type { Locale } from "../lib/seo";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
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
  );
}
