import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (handles duplicates and overrides). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a phone number for display (keeps + and digits). */
export function formatPhone(phone: string): string {
  return phone.replace(/[^+\d\s]/g, "").trim();
}

/** Build a wa.me URL with pre-filled text. */
export function whatsappLink(phone: string, message?: string): string {
  const clean = phone.replace(/[^\d]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${clean}${text}`;
}
