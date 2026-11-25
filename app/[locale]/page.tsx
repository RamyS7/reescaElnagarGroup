import { useTranslations } from "next-intl";
import { Hero } from "@/components/sections/home/Hero";
import { StatsStrip } from "@/components/sections/home/StatsStrip";
import { TwoDivisions } from "@/components/sections/home/TwoDivisions";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { OurLocations } from "@/components/sections/home/OurLocations";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";
import { seoMetadata } from "@/lib/seo";

export const generateMetadata = seoMetadata("home", "");

/**
 * Homepage — composed entirely from reusable section components.
 * Order follows the approved design:
 *   Hero → Stats → Divisions → About → Locations → Why Us → CTA → (Footer in layout)
 */
export default function HomePage() {
  const t = useTranslations("home.cta");

  return (
    <>
      <Hero />
      <StatsStrip />
      <TwoDivisions />
      <AboutPreview />
      <OurLocations />
      <WhyChooseUs />
      <CTABanner
        title={t("title")}
        subtitle={t("subtitle")}
        cta={{ label: t("button"), href: "/contact" }}
      />
    </>
  );
}
