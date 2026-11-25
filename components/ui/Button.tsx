import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * Button — 4 variants matching the approved design.
 *
 *  primary   → gold CTA ("Request a Quote", "Explore Products")
 *  secondary → forest green (form submit)
 *  outline   → white outline on dark backgrounds ("Contact Us" over hero)
 *  ghost     → text-only, used inline in cards ("Inquire")
 */

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = BaseProps & ComponentPropsWithoutRef<"button"> & { href?: never };
type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition rounded-button " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold " +
  "disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal shadow-button-gold hover:bg-gold-dark hover:text-white",
  secondary:
    "bg-forest text-white shadow-button hover:bg-forest-dark",
  outline:
    "border-2 border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost:
    "bg-cream text-forest hover:bg-taupe",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-4 text-[15px]",
};

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Extract only button-safe props
  const buttonProps = props as ButtonProps;
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = buttonProps;
  void _v; void _s; void _c; void _ch;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
