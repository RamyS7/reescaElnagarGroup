import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { whyUsItems } from "@/lib/data/why-us";

/**
 * Why Choose Us — 4 icons in rounded forest-green squares, with titles
 * and short descriptions below. Cream background.
 */

export function WhyChooseUs() {
  const t = useTranslations("home.whyUs");

  return (
    <section className="bg-cream px-5 py-24 md:px-20 md:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} align="center" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsItems.map(({ key, icon: Icon }) => (
            <div key={key} className="text-center">
              <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-forest text-gold">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-charcoal">{t(key)}</h3>
              <p className="text-sm leading-relaxed text-earth">{t(`${key}Desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
