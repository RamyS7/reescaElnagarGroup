import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ArrowRight, TreePine, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Two large cards: Wood Products + General Trading.
 * Each card has its own background imagery and gradient overlay,
 * an icon, headline, short description, and an "Explore →" link.
 */

type DivisionProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  bgImage: string;
  /** gradient overlay tint — forest for Trading, earth for Wood */
  overlay: "forest" | "earth";
  Icon: React.ComponentType<{ className?: string }>;
};

function DivisionCard({ title, description, cta, href, bgImage, overlay, Icon }: DivisionProps) {
  const overlayStyle =
    overlay === "earth"
      ? "linear-gradient(180deg, rgba(31,40,33,0.1) 0%, rgba(107,68,35,0.92) 100%)"
      : "linear-gradient(180deg, rgba(31,40,33,0.1) 0%, rgba(44,95,45,0.92) 100%)";

  return (
    <Link
      href={href}
      className={cn(
        "group relative block h-[380px] overflow-hidden rounded-card transition hover:-translate-y-1 hover:shadow-card-hover",
      )}
      style={{
        backgroundImage: `${overlayStyle}, url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-x-0 bottom-0 p-9 text-white">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
          <Icon className="h-7 w-7 text-white" aria-hidden="true" />
        </div>
        <h3 className="mb-3 text-3xl font-bold">{title}</h3>
        <p className="mb-5 max-w-md text-[15px] leading-relaxed text-white/90">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:gap-3">
          {cta}
          <ArrowRight className="h-4 w-4 rtl-flip" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function TwoDivisions() {
  const t = useTranslations("home.divisions");

  return (
    <section className="bg-offwhite px-5 py-24 md:px-20 md:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} align="center" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <DivisionCard
            title={t("woodTitle")}
            description={t("woodDesc")}
            cta={t("woodCta")}
            href="/wood-products"
            Icon={TreePine}
            overlay="earth"
            bgImage="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80"
          />
          <DivisionCard
            title={t("tradingTitle")}
            description={t("tradingDesc")}
            cta={t("tradingCta")}
            href="/general-trading"
            Icon={Globe2}
            overlay="forest"
            bgImage="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1200&q=80"
          />
        </div>
      </div>
    </section>
  );
}
