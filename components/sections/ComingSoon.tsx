import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Clock } from "lucide-react";

/**
 * ComingSoon — minimal stub section for pages that are planned but not
 * yet implemented. Keeps the Navbar/Footer visible so navigation works.
 */

export function ComingSoon({
  pageTitleKey,
}: {
  /** translation key under `nav.*` (home, wood, trading, about, contact) */
  pageTitleKey: string;
}) {
  const t = useTranslations();

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream px-5 py-24 md:px-20">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-forest text-gold">
          <Clock className="h-7 w-7" aria-hidden="true" />
        </div>
        <div className="mb-3 text-xs font-bold tracking-[3px] text-gold">
          {t("comingSoon.eyebrow")}
        </div>
        <h1 className="mb-4 text-4xl font-bold text-charcoal md:text-5xl">
          {t(pageTitleKey)}
        </h1>
        <p className="mb-8 text-base leading-relaxed text-earth">
          {t("comingSoon.body")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="secondary" href="/">
            {t("comingSoon.backHome")}
          </Button>
          <Button variant="ghost" href="/contact">
            {t("nav.contact")}
          </Button>
        </div>
      </div>
    </section>
  );
}
