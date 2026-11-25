import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

/**
 * About preview — 2-column section.
 * Left: image of the Alexandria factory with an overlay card.
 * Right: eyebrow, 2-line title, 2 paragraphs, "Read Our Story →" link.
 */

export function AboutPreview() {
  const t = useTranslations("home.about");

  return (
    <section className="bg-cream px-5 py-24 md:px-20 md:py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
        {/* IMAGE SIDE */}
        <div
          className="relative h-[440px] overflow-hidden rounded-card"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #6B4423 0%, #2C5F2D 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80')",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-6 start-6 rounded-card bg-white px-6 py-5 shadow-card">
            <div className="text-xs font-semibold tracking-[1.5px] text-earth">
              {t("overlayEyebrow")}
            </div>
            <div className="mt-1 text-xl font-bold text-charcoal">
              {t("overlayPlace")}
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>
          <div className="mb-3 text-xs font-bold tracking-[3px] text-gold">
            {t("eyebrow")}
          </div>
          <h2 className="text-4xl font-bold leading-[1.1] text-charcoal md:text-[44px]">
            {t("title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal">
            {t("paragraph1")}
          </p>
          <p className="mt-5 text-base leading-relaxed text-earth">
            {t("paragraph2")}
          </p>
          {/* Country flags */}
          <div className="mt-6 flex gap-5">
            {[
              { flag: "🇪🇬", label: "Egypt" },
              { flag: "🇹🇷", label: "Turkey" },
              { flag: "🇦🇪", label: "UAE" },
            ].map(({ flag, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">{flag}</span>
                <span className="text-sm font-medium text-earth">{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-[15px] font-semibold text-forest hover:text-gold"
          >
            {t("readMore")}
            <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
