import { useTranslations } from "next-intl";
import { Phone, Mail, Globe } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TeamCard } from "@/components/sections/TeamCard";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { branches } from "@/lib/data/branches";
import { company } from "@/lib/data/company";
import { seoMetadata } from "@/lib/seo";

export const generateMetadata = seoMetadata("contact", "/contact");

/**
 * Contact page — Phase 5 scope: integrations surface.
 * Hosts the real inquiry form + Google Maps embeds + direct contact details.
 * Visual polish can be expanded later; everything functional.
 */
export default function ContactPage() {
  const t = useTranslations("contact");
  const tNav = useTranslations("nav");
  const tBranch = useTranslations();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest to-charcoal px-5 py-16 text-white md:px-20 md:py-20">
        <div className="absolute end-10 top-0 h-80 w-80 rounded-full bg-gold/5" aria-hidden="true" />
        <div className="relative mx-auto max-w-content">
          <Breadcrumbs
            tone="light"
            items={[{ label: tNav("home"), href: "/" }, { label: tNav("contact") }]}
          />
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-3 max-w-xl text-base text-white/80 md:text-lg">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* BRANCHES + MAPS */}
      <section className="bg-offwhite px-5 py-20 md:px-20 md:py-24">
        <div className="mx-auto max-w-content">
          <SectionHeader
            eyebrow={t("branches.eyebrow")}
            title={t("branches.title")}
            align="center"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {branches.map((b) => {
              const name = tBranch(b.nameKey);
              const addr = tBranch(b.addressKey);
              const ctry = tBranch(b.countryKey);
              return (
                <article
                  key={b.key}
                  className="overflow-hidden rounded-card border border-taupe bg-white shadow-card"
                >
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-3xl" aria-hidden="true">
                        {b.countryFlag}
                      </span>
                      <span className="text-[11px] font-bold tracking-[1.5px] text-gold">
                        {ctry}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-charcoal">{name}</h3>
                    <p className="text-sm leading-relaxed text-earth">{addr}</p>
                  </div>
                  <MapEmbed
                    address={`${name}, ${addr}`}
                    openLabel={t("branches.openInMaps")}
                    heightPx={260}
                    className="rounded-none border-x-0 border-b-0 border-t"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM + EMAILS */}
      <section className="bg-cream px-5 py-20 md:px-20 md:py-24">
        <div className="mx-auto max-w-content">
          <SectionHeader
            eyebrow={t("team.eyebrow")}
            title={t("team.title")}
            align="center"
          />

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
            <TeamCard
              member={{
                name: company.team.mahmoud.name,
                initials: "ME",
                role: company.team.mahmoud.role,
                phone: company.team.mahmoud.phoneDisplay,
                avatarGradient: "from-forest to-earth",
              }}
            />
            <TeamCard
              member={{
                name: company.team.farid.name,
                initials: "FA",
                role: company.team.farid.role,
                phone: company.team.farid.phoneDisplay,
                avatarGradient: "from-earth to-gold",
              }}
            />
          </div>

          {/* Emails & website block */}
          <div className="mx-auto mt-10 max-w-3xl rounded-card bg-charcoal p-6 text-white">
            <ul className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
              {[company.emails.management, company.emails.sales, company.emails.info].map(
                (email) => (
                  <li key={email} className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <a href={`mailto:${email}`} className="break-all text-white/90 hover:text-gold">
                      {email}
                    </a>
                  </li>
                ),
              )}
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                <a
                  href={`tel:${company.team.mahmoud.phone}`}
                  className="text-white/90 hover:text-gold"
                >
                  {company.team.mahmoud.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-gold" aria-hidden="true" />
                <span className="text-white/90">reescaelnagargroup.com</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="bg-offwhite px-5 py-20 md:px-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow={t("form.eyebrow")}
            title={t("form.title")}
            subtitle={t("form.subtitle")}
            align="center"
          />
          <InquiryForm variant="general" />
        </div>
      </section>
    </>
  );
}
