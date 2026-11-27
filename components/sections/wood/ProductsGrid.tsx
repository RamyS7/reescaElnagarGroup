"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProductModal } from "@/components/ui/ProductModal";
import { woodProducts, type WoodProduct } from "@/lib/data/wood-products";

/**
 * 10 wood-product horizontal cards (1/3 image + 2/3 content)
 * matching PowerPoint slides 3–8, with modal detail view.
 */
export function WoodProductsGrid() {
  const t = useTranslations();
  const tGrid = useTranslations("wood.products");
  const tCommon = useTranslations("common");
  const [selected, setSelected] = useState<WoodProduct | null>(null);

  const getTranslations = (p: WoodProduct) => ({
    name: t(p.nameKey),
    desc: t(p.descKey),
    app1: t(p.applications[0]),
    app2: t(p.applications[1]),
    discuss: t(p.discussKey),
  });

  return (
    <section className="bg-cream px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-content">
        <SectionHeader eyebrow={tGrid("eyebrow")} title={tGrid("title")} align="center" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {woodProducts.map((product) => {
            const tr = getTranslations(product);
            return (
              <article
                key={product.slug}
                className="flex overflow-hidden rounded-xl border border-taupe bg-white shadow-card transition hover:-translate-y-0.5 hover:border-gold hover:shadow-card-hover"
              >
                {/* Image — 1/3 */}
                <div className="relative w-1/3 shrink-0 bg-cream">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={tr.name}
                      fill
                      sizes="(max-width: 768px) 33vw, 200px"
                      className="object-contain p-3"
                    />
                  ) : (
                    <div className="flex h-full min-h-[140px] items-center justify-center bg-taupe p-3 text-center text-xs text-earth">
                      {tCommon("photoPending")}
                    </div>
                  )}
                </div>

                {/* Content — 2/3 */}
                <div className="flex flex-1 flex-col p-5">
                  <h3
                    className="text-lg font-bold text-charcoal md:text-xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {tr.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-earth">
                    {tr.desc}
                  </p>

                  <div className="mt-3">
                    <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-gold">
                      {tCommon("typicalApplications")}
                    </div>
                    <ul className="mt-1.5 space-y-1">
                      <li className="flex items-start gap-1.5 text-xs text-charcoal">
                        <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-forest" />
                        {tr.app1}
                      </li>
                      <li className="flex items-start gap-1.5 text-xs text-charcoal">
                        <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-forest" />
                        {tr.app2}
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => setSelected(product)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-cream px-4 py-2 text-[13px] font-semibold text-forest transition hover:bg-gold hover:text-charcoal"
                    >
                      {tCommon("moreDetails")}
                      <ArrowRight className="h-3.5 w-3.5 rtl-flip" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProductModal
        product={selected}
        translations={selected ? getTranslations(selected) : null}
        typicalLabel={tCommon("typicalApplications")}
        whatsappLabel={tCommon("contactWhatsapp")}
        emailLabel={tCommon("contactEmail")}
        photoPendingLabel={tCommon("photoPending")}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
