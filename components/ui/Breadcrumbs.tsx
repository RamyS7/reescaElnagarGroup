import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Breadcrumbs — "HOME · WOOD PRODUCTS" style eyebrow trail.
 * The ChevronRight auto-flips in RTL via tailwind rtl-flip utility.
 */

export type Crumb = {
  label: string;
  href?: string; // last crumb usually has no href
};

export function Breadcrumbs({
  items,
  className,
  tone = "light",
}: {
  items: Crumb[];
  className?: string;
  /** light = cream/gold on hero banners · dark = earth on light backgrounds */
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-gold" : "text-earth";

  return (
    <nav aria-label="Breadcrumb" className={cn("text-xs font-semibold tracking-[3px]", className)}>
      <ol className={cn("flex flex-wrap items-center gap-2 uppercase", color)}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              )}
              {!isLast && (
                <ChevronRight className="h-3 w-3 rtl-flip opacity-60" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
