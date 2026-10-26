import type { MetadataRoute } from "next";

import { pageDefinitions, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexingEnabled) return [];

  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    ...pageDefinitions.map((page) => ({
      url: `${siteConfig.url}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: page.slug === "materials" || page.slug === "applications" ? 0.8 : 0.6,
    })),
  ];
}
