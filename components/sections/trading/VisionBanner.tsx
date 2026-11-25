import { useTranslations } from "next-intl";

export function TradingVisionBanner() {
  const t = useTranslations("trading.vision");

  return (
    <section className="bg-cream px-5 py-16 md:px-20 md:py-20">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-xl border-s-[6px] border-gold bg-white p-8 shadow-lg md:p-12">
        {/* Decorative quote mark */}
        <div
          className="pointer-events-none absolute end-8 top-6 select-none text-[120px] leading-none text-cream"
          aria-hidden="true"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          &ldquo;
        </div>

        <div className="mb-5 text-xs font-bold uppercase tracking-[3px] text-gold">
          {t("eyebrow")}
        </div>
        <p
          className="relative text-lg leading-[1.6] text-charcoal italic md:text-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t.rich("text", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </div>
    </section>
  );
}
