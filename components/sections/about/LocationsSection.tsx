import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { BranchCard } from "@/components/sections/BranchCard";
import { branches } from "@/lib/data/branches";

/**
 * About — Our Companies & Locations (4 branch cards).
 * Reuses the same BranchCard and branches data as the Home page.
 */
export function AboutLocationsSection() {
  const t = useTranslations("about.locations");
  const tBranch = useTranslations();

  return (
    <section className="bg-cream px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-content">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} align="center" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((b) => (
            <BranchCard
              key={b.key}
              branch={{
                countryFlag: b.countryFlag,
                countryLabel: tBranch(b.countryKey),
                name: tBranch(b.nameKey),
                address: tBranch(b.addressKey),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
