import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Google Maps iframe embed — no API key required.
 *
 * Uses the public `maps.google.com/maps` embed endpoint which accepts a
 * plain address query (q=) and renders a live, zoomable map.
 *
 * The "Open in Maps" button opens the same address in a new tab, where the
 * user can get directions, see Street View, etc.
 */

type Props = {
  address: string;
  /** label for the "open in maps" link */
  openLabel: string;
  className?: string;
  /** height in px (Tailwind arbitrary value) */
  heightPx?: number;
};

export function MapEmbed({ address, openLabel, className, heightPx = 300 }: Props) {
  const encoded = encodeURIComponent(address);
  // Public embed endpoint — works without any API key or billing
  const embedSrc = `https://maps.google.com/maps?q=${encoded}&output=embed`;
  // Full map link (for the "Open in Maps" button)
  const openUrl = `https://www.google.com/maps/search/?api=1&query=${encoded}`;

  return (
    <div className={cn("relative overflow-hidden rounded-card border border-taupe", className)}>
      <iframe
        src={embedSrc}
        title={address}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ height: `${heightPx}px`, border: 0 }}
        className="w-full"
      />
      <a
        href={openUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 end-3 inline-flex items-center gap-1.5 rounded-button bg-white px-3 py-1.5 text-xs font-semibold text-forest shadow hover:text-gold"
      >
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        {openLabel}
      </a>
    </div>
  );
}
