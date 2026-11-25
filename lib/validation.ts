/**
 * Lightweight validation helpers for the inquiry form.
 *
 * We avoid adding react-hook-form + zod to keep the dep tree small —
 * this form has ~7 fields, and native HTML validation + a few regex
 * checks are enough.
 *
 * Every validator returns a translation key (string) on error, or null
 * if the value is valid. The component resolves the key via next-intl
 * so messages are bilingual.
 */

export type FormValues = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  product: string;
  country: string;
  quantity: string;
  message: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string>>;

// ───── individual validators ─────

export function validateRequired(v: string): string | null {
  return v.trim().length === 0 ? "required" : null;
}

export function validateEmail(v: string): string | null {
  if (!v.trim()) return "required";
  // RFC-compliant enough for user-facing validation.
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  return ok ? null : "invalidEmail";
}

export function validatePhone(v: string): string | null {
  // Optional field — only validate when present.
  if (!v.trim()) return null;
  // Accept +country-code + 6-14 digits, spaces/dashes allowed
  const normalized = v.replace(/[\s-]/g, "");
  const ok = /^\+?[0-9]{7,15}$/.test(normalized);
  return ok ? null : "invalidPhone";
}

export function validateMessage(v: string): string | null {
  const t = v.trim();
  if (t.length === 0) return "required";
  if (t.length < 10) return "messageTooShort";
  if (t.length > 2000) return "messageTooLong";
  return null;
}

// ───── form-level validation (what the component calls) ─────

export type ValidationOptions = {
  /** When true (wood/trading), require product + quantity */
  requireProduct: boolean;
};

export function validateForm(
  values: FormValues,
  opts: ValidationOptions,
): FormErrors {
  const errors: FormErrors = {};

  const nameErr = validateRequired(values.name);
  if (nameErr) errors.name = nameErr;

  const emailErr = validateEmail(values.email);
  if (emailErr) errors.email = emailErr;

  const phoneErr = validatePhone(values.whatsapp);
  if (phoneErr) errors.whatsapp = phoneErr;

  const messageErr = validateMessage(values.message);
  if (messageErr) errors.message = messageErr;

  if (opts.requireProduct) {
    const productErr = validateRequired(values.product);
    if (productErr) errors.product = productErr;
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}
