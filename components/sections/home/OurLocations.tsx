import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { BranchCard } from "@/components/sections/BranchCard";
import { branches } from "@/lib/data/branches";

/**
 * Our Locations — 4 branch cards in a row (grid).
 * Sources data from lib/data/branches and the message bundle.
 */

export function OurLocations() {
  const t = useTranslations("home.locations");
  const tBranch = useTranslations();

  return (
    <section className="bg-offwhite px-5 py-24 md:px-20 md:py-28">
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
