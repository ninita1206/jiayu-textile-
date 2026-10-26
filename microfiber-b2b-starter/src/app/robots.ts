import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.indexingEnabled) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
