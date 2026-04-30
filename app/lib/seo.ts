import type { MetadataRoute } from "next";

export const LOCALES = ["en", "fr", "de", "it"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
};

const DEFAULT_SITE_URL = "https://miros.work";

function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, "");
}

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  return raw.replace(/\/+$/, "");
}

export function getBasePath() {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!raw) {
    return "";
  }

  const normalized = `/${trimSlashes(raw)}`;
  return normalized === "/" ? "" : normalized;
}

export function withBasePath(pathname = "/") {
  const basePath = getBasePath();
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${basePath}${normalizedPath}` || "/";
}

export function routePath(locale: Locale, segment = "") {
  const normalizedSegment = trimSlashes(segment);
  const pathname = normalizedSegment
    ? `/${locale}/${normalizedSegment}/`
    : `/${locale}/`;
  return withBasePath(pathname);
}

export function absoluteUrl(pathname = "/") {
  const baseUrl = getSiteUrl();
  return new URL(pathname, baseUrl).toString();
}

export function localeAlternates(segment = ""): Record<string, string> {
  const alternates: Record<string, string> = {};

  for (const locale of LOCALES) {
    alternates[locale] = absoluteUrl(routePath(locale, segment));
  }

  alternates["x-default"] = absoluteUrl(routePath(DEFAULT_LOCALE, segment));

  return alternates;
}

export type SeoRoute = {
  locale: Locale;
  segment?: string;
};

export function localizedRoutes(segments: readonly string[]) {
  const routes: SeoRoute[] = [];

  for (const locale of LOCALES) {
    routes.push({ locale });
    for (const segment of segments) {
      routes.push({ locale, segment });
    }
  }

  return routes;
}

export function sitemapEntries(
  segments: readonly string[],
): MetadataRoute.Sitemap {
  return localizedRoutes(segments).map(({ locale, segment }) => {
    const path = segment ? routePath(locale, segment) : routePath(locale);

    return {
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: segment ? "monthly" : "weekly",
      priority: segment ? 0.7 : 1,
    };
  });
}
