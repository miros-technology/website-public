import type { MetadataRoute } from "next";

import { sitemapEntries } from "./lib/seo";

const ROUTE_SEGMENTS = ["workpods", "phone-booths", "swiss-made", "about", "contact"] as const;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries(ROUTE_SEGMENTS);
}
