import { forwardRef } from "react";
import type { SelectHTMLAttributes, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  children: ReactNode;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, id, className, children, ...rest },
  ref,
) {
  const inputId = id ?? rest.name;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold tracking-[1px] text-earth">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : undefined}
          className="h-11 w-full appearance-none rounded-button border border-taupe bg-cream px-3.5 pe-10 text-sm text-charcoal focus:border-gold focus:bg-white focus:outline-none"
          {...rest}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4 text-earth"
          aria-hidden="true"
        />
      </div>
      {error && <p className="text-xs text-red-700">{error}</p>}
    </div>
  );
});
