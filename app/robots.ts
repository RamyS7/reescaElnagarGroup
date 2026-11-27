import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/** robots.txt — allow everything except the internal component gallery. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/ar/dev/", "/en/dev/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
