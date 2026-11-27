"use client";

import { useEffect, useRef, useCallback } from "react";
import { X, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import { company } from "@/lib/data/company";
import type { WoodProduct } from "@/lib/data/wood-products";

type Props = {
  product: WoodProduct | null;
  translations: {
    name: string;
    desc: string;
    app1: string;
    app2: string;
    discuss: string;
  } | null;
  typicalLabel: string;
  whatsappLabel: string;
  emailLabel: string;
  photoPendingLabel: string;
  onClose: () => void;
};

export function ProductModal({
  product,
  translations,
  typicalLabel,
  whatsappLabel,
  emailLabel,
  photoPendingLabel,
  onClose,
}: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Store trigger element on open
  useEffect(() => {
    if (product) {
      triggerRef.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => closeRef.current?.focus());
    }
  }, [product]);

  // Prevent background scroll
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [product]);

  // Restore focus on close
  const handleClose = useCallback(() => {
    onClose();
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, [onClose]);

  // Escape closes (via handleClose so focus returns to the trigger);
  // Tab / Shift+Tab cycle inside the dialog instead of escaping to the page.
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }
      if (e.key !== "Tab" || !overlayRef.current) return;
      const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !overlayRef.current.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !overlayRef.current.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [product, handleKeyDown]);


  // Navigate to inquiry section
  const handleEmailClick = useCallback(() => {
    handleClose();
    // Wait for modal close animation, then scroll
    setTimeout(() => {
      const el = document.getElementById("inquiry");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [handleClose]);

  if (!product || !translations) return null;

  const whatsappNumber = company.primaryWhatsapp.replace(/\+/g, "");
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in ${translations.name}. Could you provide more details?`,
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm md:p-8"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={translations.name}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row">
        {/* Close button */}
        <button
          ref={closeRef}
          onClick={handleClose}
          className="absolute end-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/80 text-white transition hover:bg-charcoal"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative h-56 shrink-0 bg-cream md:h-auto md:w-2/5">
          {product.image ? (
            <Image
              src={product.image}
              alt={translations.name}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain p-4"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-taupe p-4 text-center text-sm text-earth">
              {photoPendingLabel}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <h2
            className="text-2xl font-bold text-charcoal md:text-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {translations.name}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-earth">
            {translations.desc}
          </p>

          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-[2px] text-gold">
              {typicalLabel}
            </h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-sm text-charcoal">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                {translations.app1}
              </li>
              <li className="flex items-start gap-2 text-sm text-charcoal">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                {translations.app2}
              </li>
            </ul>
          </div>

          {/* Contact Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {whatsappLabel}
            </a>
            <button
              onClick={handleEmailClick}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-charcoal transition hover:brightness-110"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {emailLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
