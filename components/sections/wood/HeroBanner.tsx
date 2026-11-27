import { useTranslations } from "next-intl";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { imageOverlay } from "@/lib/design-tokens";

/**
 * Wood Products hero banner — 40vh, wood texture bg, dark overlay.
 */
export function WoodHeroBanner() {
  const t = useTranslations("wood.hero");
  const tNav = useTranslations("nav");

  return (
    <section
      className="relative flex items-center overflow-hidden px-5 py-20 text-white md:px-20 md:py-24"
      style={{
        minHeight: "340px",
        backgroundImage:
          imageOverlay + ", " +
          "url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-content">
        <Breadcrumbs
          tone="light"
          items={[{ label: tNav("home"), href: "/" }, { label: tNav("wood") }]}
        />
        <h1 className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-white/85 md:text-lg">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
