import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { company, hasSocial } from "@/lib/data/company";

/**
 * Dark forest-charcoal Footer with white logo card.
 * All contact info sourced from lib/data/company — single source of truth.
 * Social icons only render when URLs are set in company.social.
 */
export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const quickLinks = [
    { href: "/", label: tNav("home") },
    { href: "/about", label: tNav("about") },
    { href: "/wood-products", label: tNav("wood") },
    { href: "/general-trading", label: tNav("trading") },
    { href: "/contact", label: tNav("contact") },
  ];

  const products = [
    { href: "/wood-products", label: "productPlywoodPanels" },
    { href: "/wood-products", label: "productHardwoodSoftwood" },
    { href: "/wood-products", label: "productVeneerLogs" },
    { href: "/wood-products", label: "productMdfOsbBlockboard" },
    { href: "/general-trading", label: "productStrategicCommodities" },
  ];

  return (
    <footer className="bg-charcoal px-5 pb-8 pt-16 text-white/75 md:px-20">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Logo + tagline */}
          <div>
            <div className="mb-6 inline-block rounded-card bg-white px-6 py-4 shadow-footer-logo">
              <Image
                src="/images/logos/logo.png"
                alt={company.name}
                width={200}
                height={84}
                className="block h-[84px] w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">{t("tagline")}</p>

            {hasSocial && (
              <div className="mt-6 flex gap-2.5">
                {company.social.facebook && (
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gold hover:bg-white/20"
                  >
                    <Facebook className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {company.social.instagram && (
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gold hover:bg-white/20"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {company.social.linkedin && (
                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gold hover:bg-white/20"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-[13px] font-bold tracking-[1.5px] text-gold">
              {t("quickLinks")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/75 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-5 text-[13px] font-bold tracking-[1.5px] text-gold">
              {t("products")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {products.map((p, i) => (
                <li key={i}>
                  <Link href={p.href} className="text-white/75 hover:text-gold">
                    {t(p.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-[13px] font-bold tracking-[1.5px] text-gold">
              {t("contact")}
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                <a
                  href={`tel:${company.team.mahmoud.phone}`}
                  className="text-white/75 hover:text-gold"
                >
                  {company.team.mahmoud.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                <a
                  href={`tel:${company.team.farid.phone}`}
                  className="text-white/75 hover:text-gold"
                >
                  {company.team.farid.phoneDisplay}
                </a>
              </li>
              <li className="mt-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${company.emails.primary}`}
                  className="text-white/75 hover:text-gold"
                >
                  {company.emails.primary}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>{t("copyright")}</div>
          <div>{t("regions")}</div>
        </div>
      </div>
    </footer>
  );
}
