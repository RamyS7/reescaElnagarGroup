import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Approved locales — Arabic is primary (local market first)
  locales: ["ar", "en"],
  defaultLocale: "ar",

  // Always show the locale in the URL so /ar/wood-products and /en/wood-products
  // are both canonical and shareable.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

// Lightweight navigation helpers that preserve the current locale
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
