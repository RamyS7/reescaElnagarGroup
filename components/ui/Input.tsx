import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Form Input matching the approved design:
 * cream fill + taupe border, 44px tall, 14px, with eyebrow-style label.
 */

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
  /** adornment inside the right (or left in RTL) edge, e.g. an icon */
  trailing?: ReactNode;
};

const fieldClass =
  "h-11 w-full rounded-button border border-taupe bg-cream px-3.5 text-sm text-charcoal " +
  "placeholder:text-muted focus:border-gold focus:bg-white focus:outline-none " +
  "disabled:opacity-60";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, trailing, id, className, ...rest },
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
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          className={fieldClass}
          {...rest}
        />
        {trailing && (
          <span className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-muted">
            {trailing}
          </span>
        )}
      </div>
      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-red-700">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
});

export { fieldClass };
