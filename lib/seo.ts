import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

export type SupportedLocale = Locale;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reescaelnagargroup.com";

const siteName = "Reesca Elnagar Group";

/**
 * Builds per-page metadata with canonical + hreflang alternates for every
 * supported locale. `path` is the locale-less route, e.g. "/general-trading"
 * (use "" for the homepage).
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: SupportedLocale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}${path}`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${path}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `/${locale}${path}`,
      siteName,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
  };
}

/**
 * Returns a `generateMetadata` function for a page whose title/description
 * live under `seo.<key>` in messages/*.json.
 */
export function seoMetadata(key: string, path: string) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: `seo.${key}` });
    return buildMetadata({
      locale: locale as SupportedLocale,
      path,
      title: t("title"),
      description: t("description"),
    });
  };
}
