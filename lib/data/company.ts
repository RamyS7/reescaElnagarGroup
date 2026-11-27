/**
 * Centralized company contact info.
 * Single source of truth for phone numbers, emails, WhatsApp links, etc.
 * All verified from the approved design artifact + company profile PDF.
 *
 * To change a number/email, update HERE only — all pages read from this file.
 */

export const company = {
  name: "Reesca Elnagar Group",
  website: "https://reescaelnagargroup.com",

  team: {
    mahmoud: {
      name: "Mahmoud Elnagar",
      role: "General Manager",
      phone: "+201006391550",         // E.164, no spaces — for wa.me / tel: links
      phoneDisplay: "+20 100 639 1550", // human-readable
    },
    farid: {
      name: "Farid Abdo",
      role: "Sales Manager",
      phone: "+201150089957",
      phoneDisplay: "+20 115 008 9957",
    },
  },

  emails: {
    // Official domain addresses — shown in the Footer and Contact page
    management: "Management@reescaelnagargroup.com",
    sales: "Sales@reescaelnagargroup.com", // receives all inquiry-form submissions
    info: "Info@reescaelnagargroup.com",
  },

  // Primary WhatsApp destination (floating button + general CTAs)
  // Default: Mahmoud Elnagar (General Manager).
  primaryWhatsapp: "+201006391550",

  // Social media — currently hidden across the site.
  // Fill with real URLs and the Footer will render them automatically.
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },
} as const;

/** True if at least one social media URL is configured. */
export const hasSocial =
  !!(company.social.facebook || company.social.instagram || company.social.linkedin);
