import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo";

/** Public, locale-less routes ("" is the homepage). */
const paths = ["", "/about", "/wood-products", "/general-trading", "/contact"];

/** sitemap.xml — every route in every locale, with hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteUrl}/${l}${path}`]),
        ),
      },
    })),
  );
}
