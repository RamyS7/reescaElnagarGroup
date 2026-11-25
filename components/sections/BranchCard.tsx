import { cn } from "@/lib/utils";

/**
 * BranchCard — used in Home (Our Locations) and Contact (Branches).
 * Flag emoji + country eyebrow + company name + address.
 */

export type Branch = {
  countryFlag: string; // emoji
  countryLabel: string; // "EGYPT" / "EGYPT · FACTORY" / "TURKEY" / "UAE"
  name: string; // "REESCA Company"
  address: string; // full address
};

export function BranchCard({ branch, className }: { branch: Branch; className?: string }) {
  return (
    <article
      className={cn(
        "rounded-card border border-taupe bg-white p-7 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-card",
        className,
      )}
    >
      <div className="mb-3 text-4xl leading-none" aria-hidden="true">
        {branch.countryFlag}
      </div>
      <div className="mb-2 text-[11px] font-bold tracking-[1.5px] text-gold">
        {branch.countryLabel}
      </div>
      <h3 className="mb-3 text-lg font-bold leading-tight text-charcoal">
        {branch.name}
      </h3>
      <p className="text-[13px] leading-relaxed text-earth">{branch.address}</p>
    </article>
  );
}
