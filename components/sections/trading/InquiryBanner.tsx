import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

export function TradingInquiryBanner() {
  const t = useTranslations("trading.inquiry");

  return (
    <section className="bg-cream px-5 py-16 text-center md:px-20 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Quote
          className="mx-auto mb-5 h-8 w-8 text-gold"
          aria-hidden="true"
        />
        <p
          className="mb-3 text-xl font-bold leading-[1.5] text-forest md:text-[28px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t("quote")}
        </p>
        <p className="text-base leading-relaxed text-earth" dir="rtl">
          {t("quoteEn")}
        </p>
      </div>
    </section>
  );
}
