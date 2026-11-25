import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";

/**
 * ProductCard — the same card used for Wood Products (10 items) and
 * General Trading commodities (10 items). Variants:
 *
 *   image      → real photograph (next/image)
 *   gradient   → brown-toned gradient fallback (used while real images
 *                are pending from the client)
 *   placeholder→ dashed box + "IMAGE PENDING" (iron, clothes)
 *
 * Action behavior:
 *   href       → the card acts as a link (used on trading page)
 *   action     → inline button at the bottom (used on wood page)
 */

type BaseProps = {
  title: string;
  description?: string;
  /** small line under the title, e.g. "القمح · Grain" on trading cards */
  caption?: string;
  action?: {
    label: string;
    href?: string;
  };
  className?: string;
};

type ImageProps = BaseProps & {
  variant: "image";
  imageSrc: string;
  imageAlt?: string;
};

type GradientProps = BaseProps & {
  variant: "gradient";
  /** Tailwind gradient classes — passed as-is, e.g. "from-[#8B5A2B] to-[#5C3317]" */
  gradient: string;
  /** optional icon/emoji shown centered over the gradient */
  icon?: string;
};

type PlaceholderProps = BaseProps & {
  variant: "placeholder";
  /** emoji or short SVG shown in the dashed box */
  icon?: string;
};

type Props = ImageProps | GradientProps | PlaceholderProps;

export function ProductCard(props: Props) {
  const body = (
    <>
      <h3 className="text-xl font-bold text-charcoal md:text-[22px]">{props.title}</h3>
      {props.caption && (
        <div className="mt-1 text-[13px] text-earth">{props.caption}</div>
      )}
      {props.description && (
        <p className="mt-2 min-h-[44px] text-sm leading-relaxed text-earth">
          {props.description}
        </p>
      )}
      {props.action && (
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-button bg-cream px-4 py-2 text-[13px] font-semibold text-forest">
          {props.action.label}
          <ArrowRight className="h-3.5 w-3.5 rtl-flip" aria-hidden="true" />
        </div>
      )}
    </>
  );

  return (
    <article
      className={cn(
        "overflow-hidden rounded-card border bg-white shadow-card transition hover:-translate-y-0.5 hover:border-gold hover:shadow-card-hover",
        props.variant === "placeholder" ? "border-2 border-dashed border-gold" : "border-taupe",
        props.className,
      )}
    >
      {props.variant === "image" ? (
        <div className="relative h-[180px] w-full">
          <Image
            src={props.imageSrc}
            alt={props.imageAlt ?? props.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : props.variant === "gradient" ? (
        <div
          className={cn(
            "flex h-[180px] items-center justify-center bg-gradient-to-br text-6xl",
            props.gradient,
          )}
          aria-hidden="true"
        >
          {props.icon ?? ""}
        </div>
      ) : (
        // placeholder
        <div
          className="flex h-[180px] flex-col items-center justify-center text-gold"
          style={{
            background:
              "repeating-linear-gradient(45deg, #F5F1E8, #F5F1E8 10px, #FAFAF7 10px, #FAFAF7 20px)",
          }}
          aria-hidden="true"
        >
          <div className="text-4xl">{props.icon ?? "📷"}</div>
          <div className="mt-2 text-[10px] font-bold tracking-[1.5px]">IMAGE PENDING</div>
        </div>
      )}

      <div className="p-6">
        {props.action?.href ? (
          <Link href={props.action.href} className="block">
            {body}
          </Link>
        ) : (
          body
        )}
      </div>
    </article>
  );
}
