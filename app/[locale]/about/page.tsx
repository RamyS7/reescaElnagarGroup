import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutHeroBanner } from "@/components/sections/about/HeroBanner";
import { AboutIntroSection } from "@/components/sections/about/IntroSection";
import { AboutLocationsSection } from "@/components/sections/about/LocationsSection";
import { AboutSupplySection } from "@/components/sections/about/SupplySection";
import { AboutTeamSection } from "@/components/sections/about/TeamSection";
import { buildMetadata, type SupportedLocale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.about" });
  return buildMetadata({
    locale: locale as SupportedLocale,
    path: "/about",
    title: t("title"),
    description: t("description"),
  });
}

export default function AboutPage() {
  return (
    <>
      <AboutHeroBanner />
      <AboutIntroSection />
      <AboutLocationsSection />
      <AboutSupplySection />
      <AboutTeamSection />
    </>
  );
}
