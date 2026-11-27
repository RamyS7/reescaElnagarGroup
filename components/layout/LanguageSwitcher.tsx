"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";

/**
 * Compact AR/EN switcher matching the approved Navbar design.
 * Uses next-intl routing so the current path keeps working after switch.
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: "ar" | "en") {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className="flex items-center gap-1.5 rounded-md border border-taupe px-3 py-1.5 text-[13px] font-medium text-earth"
      aria-label={t("language")}
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1.5">
          {/* globe marks the active language, so it moves with the switch */}
          {loc === locale && <Globe className="h-3.5 w-3.5" aria-hidden="true" />}
          <button
            type="button"
            onClick={() => switchTo(loc)}
            className={
              loc === locale
                ? "font-semibold text-earth"
                : "text-charcoal hover:text-gold"
            }
            aria-current={loc === locale ? "true" : undefined}
          >
            {loc.toUpperCase()}
          </button>
          {i < routing.locales.length - 1 && (
            <span className="text-taupe" aria-hidden="true">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
