import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

/**
 * Dark forest/charcoal section showcasing the Alexandria factory.
 * 2-column: text with bullets + image.
 */
export function FactoryShowcase() {
  const t = useTranslations("wood.factory");

  const bullets = [t("bullet1"), t("bullet2"), t("bullet3"), t("bullet4")];

  return (
    <section className="bg-charcoal px-5 py-20 text-white md:px-20 md:py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <div className="mb-3 text-xs font-bold tracking-[3px] text-gold">
            {t("eyebrow")}
          </div>
          <h2 className="text-3xl font-bold leading-[1.1] md:text-[40px]">{t("title")}</h2>
          <p className="mt-6 text-base leading-relaxed text-white/80">{t("body")}</p>
          <ul className="mt-7 flex flex-col gap-3.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-base">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="h-[380px] overflow-hidden rounded-card md:h-[420px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(44,95,45,0.4) 0%, rgba(107,68,35,0.4) 100%), " +
              "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Alexandria Factory"
        />
      </div>
    </section>
  );
}
