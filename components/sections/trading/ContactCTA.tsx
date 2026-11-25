import { useTranslations } from "next-intl";
import { MessageCircle, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";
import { company } from "@/lib/data/company";

export function TradingContactCTA() {
  const t = useTranslations("trading.cta");

  const whatsappUrl = `https://wa.me/${company.primaryWhatsapp.replace(/\+/g, "")}`;

  return (
    <section className="bg-charcoal px-5 py-16 text-white md:px-20 md:py-20">
      <div className="mx-auto grid max-w-content items-center gap-8 md:grid-cols-[2fr_1fr_1fr]">
        {/* Text */}
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[3px] text-gold">
            {t("eyebrow")}
          </div>
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t("title")}
          </h2>
        </div>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl bg-[#25D366] p-5 font-semibold text-white transition hover:brightness-110"
        >
          <MessageCircle className="h-7 w-7 shrink-0" aria-hidden="true" />
          <div>
            <div className="text-[11px] uppercase tracking-wider opacity-90">
              WHATSAPP
            </div>
            <div className="text-base">{t("whatsapp")}</div>
          </div>
        </a>

        {/* Email */}
        <Link
          href="/contact"
          className="flex items-center gap-4 rounded-xl bg-gold p-5 font-semibold text-charcoal transition hover:brightness-110"
        >
          <Mail className="h-7 w-7 shrink-0" aria-hidden="true" />
          <div>
            <div className="text-[11px] uppercase tracking-wider opacity-80">
              EMAIL
            </div>
            <div className="text-base">{t("email")}</div>
          </div>
        </Link>
      </div>
    </section>
  );
}
