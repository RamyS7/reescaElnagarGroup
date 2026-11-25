import { useTranslations } from "next-intl";

/**
 * About intro — 2-column layout: eyebrow + title left, paragraph right.
 * Same pattern as WoodIntroSection.
 */
export function AboutIntroSection() {
  const t = useTranslations("about.intro");

  return (
    <section className="bg-offwhite px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div>
          <div className="mb-3 text-xs font-bold tracking-[3px] text-gold">
            {t("eyebrow")}
          </div>
          <h2 className="text-3xl font-bold leading-[1.1] text-charcoal md:text-[40px]">
            {t("title")}
          </h2>
        </div>
        <div>
          <p className="text-base leading-[1.8] text-charcoal md:text-lg">
            {t("paragraph")}
          </p>
        </div>
      </div>
    </section>
  );
}
