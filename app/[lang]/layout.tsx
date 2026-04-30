import { notFound } from "next/navigation";

import { LOCALES, type Locale } from "../lib/seo";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!LOCALES.includes(lang as Locale)) {
    notFound();
  }

  return children;
}
