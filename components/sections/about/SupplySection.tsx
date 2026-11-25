import { useTranslations } from "next-intl";
import { Package, Layers, TreePine, LogIn } from "lucide-react";

const supplyItems = [
  { key: "birchPlywood" as const, Icon: Package },
  { key: "veneer" as const, Icon: Layers },
  { key: "softHardwood" as const, Icon: TreePine },
  { key: "logs" as const, Icon: LogIn },
];

/**
 * About — Supply Range section from PPTX Slide 9.
 * Dark background, 4 items in a row with icons.
 */
export function AboutSupplySection() {
  const t = useTranslations("about.supply");

  return (
    <section
      className="px-5 py-20 text-white md:px-20 md:py-24"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(31,40,33,0.92) 0%, rgba(44,95,45,0.88) 100%)",
      }}
    >
      <div className="mx-auto max-w-content">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs font-bold tracking-[3px] text-gold">
            {t("eyebrow")}
          </div>
          <h2 className="text-3xl font-bold leading-[1.1] text-white md:text-[44px]">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supplyItems.map(({ key, Icon }) => (
            <div
              key={key}
              className="rounded-card border border-white/15 bg-white/5 p-7 text-center backdrop-blur-sm transition hover:border-gold/50 hover:bg-white/10"
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-gold" strokeWidth={1.5} />
              <p className="text-base font-medium leading-relaxed text-white/90">
                {t(key)}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-base text-white/70">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
