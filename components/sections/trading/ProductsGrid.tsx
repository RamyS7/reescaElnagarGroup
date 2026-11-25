import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { tradingProducts } from "@/lib/data/trading-products";
import { Plus } from "lucide-react";

export function TradingProductsGrid() {
  const t = useTranslations();
  const tGrid = useTranslations("trading.grid");
  const tMore = useTranslations("trading.andMore");

  return (
    <section className="bg-offwhite px-5 py-16 md:px-20 md:py-20">
      <div className="mx-auto max-w-content">
        <SectionHeader eyebrow={tGrid("eyebrow")} title={tGrid("title")} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tradingProducts.map((product) => (
            <article
              key={product.slug}
              className="overflow-hidden rounded-xl border border-taupe bg-white shadow-card transition hover:-translate-y-0.5 hover:border-gold hover:shadow-card-hover"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={t(product.nameKey)}
                className="h-[180px] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-charcoal">
                  {t(product.nameKey)}
                </h3>
                <div className="mt-1 text-[13px] text-earth">
                  {t(product.captionKey)}
                </div>
              </div>
            </article>
          ))}

          {/* "And more" card spanning 2 columns */}
          <div className="flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-forest to-charcoal p-10 text-center text-white sm:col-span-2">
            <div>
              <Plus
                className="mx-auto mb-3 h-10 w-10 text-gold"
                aria-hidden="true"
              />
              <h3
                className="mb-2 text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {tMore("title")}
              </h3>
              <p className="text-sm text-white/75">{tMore("text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
