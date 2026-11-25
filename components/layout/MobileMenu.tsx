"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * MobileMenu — slide-in drawer triggered by a hamburger button.
 * Shown below `lg` breakpoint, where the inline nav is hidden.
 *
 * The overlay + drawer are portaled to <body>: the Navbar header uses
 * `backdrop-blur`, which makes it the containing block for `position: fixed`
 * descendants — rendered inside it, the drawer would be clipped to the
 * header's height instead of filling the viewport.
 */

export function MobileMenu() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Portals need `document`, which only exists after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "/", label: t("home") },
    { href: "/wood-products", label: t("wood") },
    { href: "/general-trading", label: t("trading") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("openMenu")}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-md text-charcoal hover:bg-cream lg:hidden"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {mounted &&
        createPortal(
          <>
            {open && (
              <div
                className="fixed inset-0 z-[100] bg-charcoal/60 backdrop-blur-sm lg:hidden"
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
            )}

            <aside
              className={
                "fixed top-0 bottom-0 z-[101] w-80 max-w-[85vw] bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden " +
                // Panel slides from the "end" side (right in LTR, left in RTL)
                "end-0 " +
                (open ? "translate-x-0" : "rtl:translate-x-[-110%] ltr:translate-x-[110%]")
              }
              aria-hidden={!open}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[2px] text-gold">MENU</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t("closeMenu")}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-charcoal hover:bg-cream"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-3 text-base font-medium text-charcoal hover:bg-cream hover:text-forest"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 border-t border-taupe pt-6">
                <LanguageSwitcher />
              </div>

              <Link
                href="/contact"
                className="mt-6 block w-full rounded-button bg-gold px-5 py-3 text-center text-[13px] font-semibold tracking-wide text-charcoal shadow-button-gold hover:bg-gold-dark hover:text-white"
              >
                {t("getQuote")}
              </Link>
            </aside>
          </>,
          document.body,
        )}
    </>
  );
}
