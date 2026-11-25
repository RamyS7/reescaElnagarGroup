import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

/**
 * Sticky brand Navbar — mirrors the approved design artifact.
 *
 * Desktop (≥ lg): logo 76px · inline link list · language switcher · gold CTA
 * Mobile  (< lg): logo 60px · hamburger (opens MobileMenu drawer)
 */
export function Navbar() {
  const t = useTranslations("nav");

  const links = [
    { href: "/", label: t("home") },
    { href: "/wood-products", label: t("wood") },
    { href: "/general-trading", label: t("trading") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-taupe bg-white/[0.98] backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-2.5 md:px-20">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Reesca Elnagar Group — Home"
        >
          <Image
            src="/images/logos/logo.png"
            alt="Reesca Elnagar Group"
            width={190}
            height={76}
            priority
            className="block h-[60px] w-auto md:h-[76px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop: switcher + CTA · Mobile: hamburger only */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <Link
            href="/contact"
            className="hidden rounded-button bg-gold px-5 py-2.5 text-[13px] font-semibold tracking-wide text-charcoal shadow-button-gold transition hover:bg-gold-dark hover:text-white lg:inline-block"
          >
            {t("getQuote")}
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
