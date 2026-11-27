import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";
import { imageOverlay } from "@/lib/design-tokens";

/**
 * Hero — top of the homepage.
 * Wood-texture bg + dark green overlay + eyebrow + headline (with gold accent
 * on the last word) + subtitle + two CTAs + 15+ Years badge.
 */

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section
      className="relative flex items-center overflow-hidden text-white px-5 md:px-20"
      style={{
        minHeight: "680px",
        backgroundImage:
          imageOverlay + ", " +
          "url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Badge: 15+ Years of Trust */}
      <div className="absolute top-8 end-5 flex items-center gap-1.5 rounded-full bg-gold/95 px-4 py-2 text-xs font-semibold tracking-wide text-charcoal md:end-20">
        <Star className="h-3.5 w-3.5 fill-charcoal" aria-hidden="true" />
        {t("badge")}
      </div>

      <div className="max-w-2xl py-24 md:py-32">
        <div className="mb-4 text-xs font-semibold tracking-[3px] text-gold md:text-sm">
          {t("eyebrow")}
        </div>
        <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
          {t("headline")}
          <br />
          <span className="text-gold">{t("headlineAccent")}</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
          {t("subtitle")}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button variant="primary" size="lg" href="/wood-products">
            {t("ctaPrimary")}
          </Button>
          <Button variant="outline" size="lg" href="/contact">
            {t("ctaSecondary")}
          </Button>
        </div>
      </div>
    </section>
  );
}
