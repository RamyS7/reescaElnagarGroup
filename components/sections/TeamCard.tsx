import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * TeamCard — used on the Contact page for Mahmoud + Farid.
 * Gradient avatar circle (initials) + name + role + phone link.
 */

export type TeamMember = {
  name: string; // "Mahmoud Elnagar"
  initials: string; // "ME"
  role: string; // localized role label, e.g. "GENERAL MANAGER"
  phone: string; // "+20 100 639 1550"
  /** CSS gradient between brand colors, e.g. "from-forest to-earth" */
  avatarGradient?: string;
};

export function TeamCard({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  const telHref = `tel:${member.phone.replace(/[^\d+]/g, "")}`;
  return (
    <article
      className={cn(
        "flex items-center gap-5 rounded-card border border-taupe bg-white p-6",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white",
          member.avatarGradient ?? "from-forest to-earth",
        )}
        aria-hidden="true"
      >
        {member.initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-lg font-bold text-charcoal">{member.name}</div>
        <div className="my-1 text-xs font-bold uppercase tracking-[1px] text-gold">
          {member.role}
        </div>
        <a
          href={telHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-gold"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {member.phone}
        </a>
      </div>
    </article>
  );
}
