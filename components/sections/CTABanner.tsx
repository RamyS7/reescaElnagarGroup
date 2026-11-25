import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * CTABanner — the dark forest→charcoal gradient strip with white title
 * and a gold CTA. Used at the bottom of the homepage and as a section
 * elsewhere.
 */

type Props = {
  title: string;
  subtitle?: string;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
  /** Optional element shown above the title (badge, small logo, etc.) */
  topSlot?: ReactNode;
};

export function CTABanner({ title, subtitle, cta, className, topSlot }: Props) {
  return (
    <section
      className={cn(
        "bg-gradient-to-br from-forest to-charcoal px-5 py-16 text-center text-white md:px-20 md:py-20",
        className,
      )}
    >
      {topSlot && <div className="mb-4">{topSlot}</div>}
      <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-[44px]">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-base text-white/75 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-8">
        <Button variant="primary" size="lg" href={cta.href}>
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
