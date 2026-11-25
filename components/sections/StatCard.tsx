import { cn } from "@/lib/utils";

/**
 * StatCard — the 15+ / 4 / 3 / 1000+ pattern on the homepage stats strip.
 * Large gold number + small uppercase label in earth.
 */
export function StatCard({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-bold leading-none text-gold text-5xl md:text-stat">
        {value}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[1.5px] text-earth md:text-[13px]">
        {label}
      </div>
    </div>
  );
}
