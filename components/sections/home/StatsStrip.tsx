import { useTranslations } from "next-intl";
import { StatCard } from "@/components/sections/StatCard";

/**
 * Stats strip — cream background, 4 stats with vertical taupe dividers.
 * Dividers are drawn as CSS borders so they disappear naturally on mobile
 * when the grid collapses to 2 columns.
 */

export function StatsStrip() {
  const t = useTranslations("home.stats");

  const stats = [
    { value: "15+", label: t("years") },
    { value: "4", label: t("companies") },
    { value: "3", label: t("countries") },
    { value: "1000+", label: t("clients") },
  ];

  return (
    <section className="border-b border-taupe bg-cream px-5 py-12 md:px-20 md:py-14">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-12">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              // Dividers between columns on lg+ only (4 columns need ~1024px)
              i > 0
                ? "lg:border-s lg:border-taupe lg:ps-12"
                : ""
            }
          >
            <StatCard value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
