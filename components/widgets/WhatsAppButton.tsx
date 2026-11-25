"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";
import { company } from "@/lib/data/company";

/**
 * Floating WhatsApp button — bottom-right, green WhatsApp color, 60x60.
 * Uses the company's primary WhatsApp number and a localized default message.
 */
export function WhatsAppButton() {
  const t = useTranslations("whatsapp");

  return (
    <a
      href={whatsappLink(company.primaryWhatsapp, t("defaultMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className="fixed bottom-8 end-8 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition hover:scale-105 hover:bg-[#1FAD54]"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
