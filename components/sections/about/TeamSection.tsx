import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/lib/data/company";

const teamMembers = [
  {
    nameKey: "mahmoud" as const,
    roleKey: "generalManager" as const,
    data: company.team.mahmoud,
  },
  {
    nameKey: "farid" as const,
    roleKey: "salesManager" as const,
    data: company.team.farid,
  },
];

/**
 * About — Team section from PPTX Slide 11.
 * Two team member cards with WhatsApp + Call buttons.
 */
export function AboutTeamSection() {
  const t = useTranslations("about.team");

  return (
    <section className="bg-offwhite px-5 py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-content">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} align="center" />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.map(({ nameKey, roleKey, data }) => (
            <article
              key={nameKey}
              className="rounded-card border border-taupe bg-white p-8 text-center shadow-card transition hover:-translate-y-0.5 hover:border-gold"
            >
              {/* Avatar placeholder — initials */}
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-forest text-2xl font-bold text-white">
                {data.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>

              <h3 className="text-xl font-bold text-charcoal">{data.name}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{t(roleKey)}</p>
              <p className="mt-2 text-sm text-earth">{data.phoneDisplay}</p>

              <div className="mt-5 flex justify-center gap-3">
                <a
                  href={`https://wa.me/${data.phone.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("whatsapp")}
                </a>
                <a
                  href={`tel:${data.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-5 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {t("call")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
