import { cn } from "@/lib/utils";

/**
 * SectionHeader — the eyebrow + title pattern used across every section
 * of the approved design.
 *
 * Variant `center` is the most common (stats, divisions, products grid).
 * Variant `start` is used in 2-column layouts (About Preview, Factory, Form).
 */

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  tone?: "default" | "light"; // light = white text on dark bg
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "default",
  className,
}: Props) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <header
      className={cn(
        isCenter ? "text-center mx-auto" : "text-start",
        isCenter ? "max-w-2xl" : "",
        "mb-12",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[3px]",
            isLight ? "text-gold" : "text-gold",
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-[1.1] md:text-[44px]",
          isLight ? "text-white" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            isLight ? "text-white/80" : "text-earth",
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
