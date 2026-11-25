import { useTranslations } from "next-intl";

/**
 * Intro — 2-column: eyebrow + title on the left, 2 paragraphs on the right.
 */
export function WoodIntroSection() {
  const t = useTranslations("wood.intro");

  return (
    <section className="bg-offwhite px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <div className="mb-3 text-xs font-bold tracking-[3px] text-gold">
            {t("eyebrow")}
          </div>
          <h2 className="text-3xl font-bold leading-[1.1] text-charcoal md:text-[40px]">
            {t("title")}
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-charcoal">{t("paragraph1")}</p>
          <p className="mt-4 text-base leading-relaxed text-earth">{t("paragraph2")}</p>
        </div>
      </div>
    </section>
  );
}
