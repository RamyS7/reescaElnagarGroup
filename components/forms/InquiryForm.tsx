"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  validateForm,
  hasErrors,
  type FormValues,
  type FormErrors,
} from "@/lib/validation";
import { company } from "@/lib/data/company";

/**
 * InquiryForm — reusable contact/inquiry form for 3 pages.
 *
 *   variant="wood"    → Wood Products page (includes product type + quantity)
 *   variant="trading" → General Trading page (includes commodity + quantity)
 *   variant="general" → Contact page (free-text subject, no product dropdown)
 *
 * SUBMISSION:
 *   Uses Web3Forms (https://web3forms.com) — a hosted form backend.
 *   Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local to enable.
 *   When the key is missing, submission falls back to opening the user's
 *   email client with a pre-filled mailto: — nothing is simulated or faked.
 *
 * VALIDATION:
 *   Client-side via lib/validation.ts (lightweight, zero-dep).
 *   Error messages come from the i18n bundle (form.validation.*).
 *
 * UX:
 *   - Prevents duplicate submissions via the `submitting` state.
 *   - Preserves field values on error.
 *   - Clears fields only on confirmed success.
 */

type Variant = "wood" | "trading" | "general";

type InquiryFormProps = {
  variant: Variant;
  className?: string;
  productOptions?: Array<{ value: string; label: string }>;
};

type Status = "idle" | "submitting" | "success" | "error";

const emptyValues: FormValues = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  product: "",
  country: "",
  quantity: "",
  message: "",
};

export function InquiryForm({
  variant,
  className,
  productOptions = [],
}: InquiryFormProps) {
  const t = useTranslations("form");
  const tv = useTranslations("form.validation");

  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  const showProductSelect = variant !== "general";
  const requireProduct = variant !== "general";

  function updateField<K extends keyof FormValues>(name: K, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear the error for that field as the user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Block duplicates
    if (status === "submitting") return;

    // Validate first
    const foundErrors = validateForm(values, { requireProduct });
    if (hasErrors(foundErrors)) {
      setErrors(foundErrors);
      // Focus first error
      const firstKey = Object.keys(foundErrors)[0];
      const el = document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }

    setStatus("submitting");
    setErrorDetail(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      if (accessKey) {
        // Real submission via Web3Forms
        const payload = {
          access_key: accessKey,
          subject: `[${variant.toUpperCase()}] Inquiry from ${values.name}`,
          from_name: values.name,
          replyto: values.email,
          // The fields appear in the destination inbox as-is
          Name: values.name,
          Company: values.company || "—",
          Email: values.email,
          WhatsApp: values.whatsapp || "—",
          "Product / Interest": values.product || "—",
          "Destination Country": values.country || "—",
          Quantity: values.quantity || "—",
          Message: values.message,
          "Inquiry Type": variant,
        };

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data?.message ?? `HTTP ${res.status}`);
        }

        setStatus("success");
        setValues(emptyValues);
      } else {
        // Fallback: open user's email client — honest, no fake success.
        const subject = `Inquiry from ${values.name} — ${variant}`;
        const body = [
          `Name: ${values.name}`,
          `Company: ${values.company}`,
          `Email: ${values.email}`,
          `WhatsApp: ${values.whatsapp}`,
          `Product: ${values.product}`,
          `Country: ${values.country}`,
          `Quantity: ${values.quantity}`,
          "",
          values.message,
        ].join("\n");

        const mailto = `mailto:${company.emails.primary}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;

        // Show an informational "success-ish" state
        setStatus("success");
        setErrorDetail("mailtoFallback");
      }
    } catch (err) {
      setStatus("error");
      setErrorDetail(err instanceof Error ? err.message : "unknown");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-card border border-taupe bg-white p-6 shadow-card md:p-10",
        className,
      )}
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          name="name"
          label={t("name")}
          placeholder={t("namePlaceholder")}
          value={values.name}
          onChange={(e) => updateField("name", e.target.value)}
          error={errors.name ? tv(errors.name) : undefined}
          required
        />
        <Input
          name="company"
          label={t("company")}
          placeholder={t("companyPlaceholder")}
          value={values.company}
          onChange={(e) => updateField("company", e.target.value)}
        />
        <Input
          name="email"
          type="email"
          label={t("email")}
          placeholder="you@company.com"
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          error={errors.email ? tv(errors.email) : undefined}
          required
        />
        <Input
          name="whatsapp"
          label={t("whatsapp")}
          placeholder="+00 000 000 0000"
          value={values.whatsapp}
          onChange={(e) => updateField("whatsapp", e.target.value)}
          error={errors.whatsapp ? tv(errors.whatsapp) : undefined}
        />

        {showProductSelect && (
          <Select
            name="product"
            label={t("productType")}
            value={values.product}
            onChange={(e) => updateField("product", e.target.value)}
            error={errors.product ? tv(errors.product) : undefined}
            required
          >
            <option value="" disabled>
              {t("selectPlaceholder")}
            </option>
            {productOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        )}

        <Input
          name="country"
          label={t("destinationCountry")}
          placeholder={t("countryPlaceholder")}
          value={values.country}
          onChange={(e) => updateField("country", e.target.value)}
        />

        {(variant === "wood" || variant === "trading") && (
          <Input
            name="quantity"
            label={t("quantity")}
            placeholder={t("quantityPlaceholder")}
            value={values.quantity}
            onChange={(e) => updateField("quantity", e.target.value)}
          />
        )}
      </div>

      <Textarea
        name="message"
        label={variant === "general" ? t("message") : t("projectDetails")}
        placeholder={t("messagePlaceholder")}
        rows={5}
        value={values.message}
        onChange={(e) => updateField("message", e.target.value)}
        error={errors.message ? tv(errors.message) : undefined}
        className="mt-5"
        required
      />

      {/* Feedback area */}
      <div className="mt-6 min-h-[1.5rem]" aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-semibold text-forest">
            {errorDetail === "mailtoFallback"
              ? `✓ ${t("mailtoFallback")}`
              : `✓ ${t("successMessage")}`}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-semibold text-red-700">
            {t("errorMessage")}
            {errorDetail && (
              <span className="ms-2 font-normal opacity-70">({errorDetail})</span>
            )}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-end gap-4">
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? t("sending") : t("sendInquiry")}
        </Button>
      </div>
    </form>
  );
}
