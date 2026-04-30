import Image from "next/image";
import Link from "next/link";

import { LanguageSelect } from "./LanguageSelect";
import { getDictionary } from "../lib/content";
import { type Locale, routePath } from "../lib/seo";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Props = {
  locale: Locale;
  currentSegment?: string;
};

export function SiteHeader({ locale, currentSegment }: Props) {
  const t = getDictionary(locale);

  return (
    <header className="site-header light-header">
      <Link href={routePath(locale)} className="brand dark-wordmark">
        <Image
          src={`${BASE_PATH}/images/cropped-B1_noBG-70x75.png`}
          alt="miros logo"
          width={36}
          height={38}
        />
        <span>miros</span>
      </Link>

      <nav>
        <Link href={routePath(locale)}>{t.nav.home}</Link>
        <Link href={routePath(locale, "workpods")}>{t.nav.workpods}</Link>
        <Link href={routePath(locale, "phone-booths")}>{t.nav.phoneBooths}</Link>
        <Link href={routePath(locale, "swiss-made")}>{t.nav.swissMade}</Link>
        <Link href={routePath(locale, "about")}>{t.nav.about}</Link>
        <Link href={routePath(locale, "contact")} className="pill-link">
          {t.nav.contact}
        </Link>
        <LanguageSelect
          id={`lang-select-${currentSegment || "home"}`}
          locale={locale}
          segment={currentSegment}
        />
      </nav>
    </header>
  );
}
