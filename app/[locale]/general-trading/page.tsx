import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TradingHeroBanner } from "@/components/sections/trading/HeroBanner";
import { TradingVisionBanner } from "@/components/sections/trading/VisionBanner";
import { TradingProductsGrid } from "@/components/sections/trading/ProductsGrid";
import { TradingInquiryBanner } from "@/components/sections/trading/InquiryBanner";
import { TradingContactCTA } from "@/components/sections/trading/ContactCTA";
import { buildMetadata, type SupportedLocale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.trading" });
  return buildMetadata({
    locale: locale as SupportedLocale,
    path: "/general-trading",
    title: t("title"),
    description: t("description"),
  });
}

export default function GeneralTradingPage() {
  return (
    <>
      <TradingHeroBanner />
      <TradingVisionBanner />
      <TradingProductsGrid />
      <TradingInquiryBanner />
      <TradingContactCTA />
    </>
  );
}
