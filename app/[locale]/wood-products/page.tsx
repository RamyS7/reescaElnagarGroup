import { useTranslations } from "next-intl";
import { WoodHeroBanner } from "@/components/sections/wood/HeroBanner";
import { WoodIntroSection } from "@/components/sections/wood/IntroSection";
import { WoodProductsGrid } from "@/components/sections/wood/ProductsGrid";
import { FactoryShowcase } from "@/components/sections/wood/FactoryShowcase";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { woodProducts } from "@/lib/data/wood-products";
import { seoMetadata } from "@/lib/seo";

export const generateMetadata = seoMetadata("wood", "/wood-products");

/**
 * Wood Products page — Phase 6.
 * Hero → Intro → Products Grid → Factory Showcase → Inquiry Form.
 * Every section is a reusable component composed with next-intl translations.
 */
export default function WoodProductsPage() {
  const t = useTranslations("wood.inquiry");
  const tProducts = useTranslations();

  // Dropdown options for the inquiry form
  const productOptions = woodProducts.map((p) => ({
    value: p.slug,
    label: tProducts(p.nameKey),
  }));

  return (
    <>
      <WoodHeroBanner />
      <WoodIntroSection />
      <WoodProductsGrid />
      <FactoryShowcase />

      <section id="inquiry" className="bg-offwhite px-5 py-20 md:px-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
          />
          <InquiryForm variant="wood" productOptions={productOptions} />
        </div>
      </section>
    </>
  );
}
